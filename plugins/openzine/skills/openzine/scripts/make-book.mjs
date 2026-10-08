#!/usr/bin/env node
// OpenZine: turn a folder of images or a PDF into a page-turning 3D booklet,
// written as one self-contained HTML file that works offline.
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import { encodePNG, hex } from "./png.mjs";

const SKILL_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RUNTIME = path.join(SKILL_DIR, "runtime", "openzine.js");
const GRAIN = path.join(SKILL_DIR, "runtime", "grain.webp");
const PAGE_RATIO = 1.377;
const PAGE_WIDTH = 1440;
const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

const USAGE = `Usage: node make-book.mjs --input <folder-or-pdf> --out <book.html> [options]

Options:
  --input <path>       Folder of images (PNG, JPG, WebP, AVIF) or a PDF file
  --out <path>         Output HTML file
  --title <text>       Book title (default: input file or folder name)
  --lang <en|zh>       Viewer interface language (default: en)
  --pdf-engine <name>  auto | pdftoppm | pdfjs (default: auto)
  --portrait <mode>    single | spread: how a portrait screen opens the book
                       (default: single). Readers can switch either way.
  --help               Show this message

Pages are sorted by file name in natural order (2.png before 10.png).
The first page is the front cover. An odd page count gets a blank last page.
Best page ratio is width : height = 1 : 1.377; other ratios are letterboxed.`;

class BookError extends Error {}

function parseArgs(argv) {
  const opts = { lang: "en", pdfEngine: "auto", portrait: "single" };
  const keys = { "--input": "input", "--out": "out", "--title": "title", "--lang": "lang", "--pdf-engine": "pdfEngine", "--portrait": "portrait" };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") return { help: true };
    const [flag, inline] = arg.includes("=") ? arg.split(/=(.*)/s) : [arg, undefined];
    const key = keys[flag];
    if (!key) throw new BookError(`Unknown option: ${arg}\n\n${USAGE}`);
    const value = inline ?? argv[++i];
    if (value === undefined || value.startsWith("--")) throw new BookError(`Missing value for ${flag}`);
    opts[key] = value;
  }
  if (!opts.input || !opts.out) throw new BookError(`Both --input and --out are required.\n\n${USAGE}`);
  if (!["en", "zh"].includes(opts.lang)) throw new BookError(`--lang must be "en" or "zh", got "${opts.lang}"`);
  if (!["auto", "pdftoppm", "pdfjs"].includes(opts.pdfEngine))
    throw new BookError(`--pdf-engine must be auto, pdftoppm or pdfjs, got "${opts.pdfEngine}"`);
  if (!["single", "spread"].includes(opts.portrait))
    throw new BookError(`--portrait must be "single" or "spread", got "${opts.portrait}"`);
  return opts;
}

// ---------- image inspection ----------

function sniff(bytes) {
  if (bytes.length > 8 && bytes.readUInt32BE(0) === 0x89504e47) return "image/png";
  if (bytes.length > 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "image/jpeg";
  if (bytes.length > 12 && bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP") return "image/webp";
  if (bytes.length > 12 && bytes.toString("ascii", 4, 8) === "ftyp" && /^avi[fs]/.test(bytes.toString("ascii", 8, 12))) return "image/avif";
  if (bytes.length > 4 && bytes.toString("ascii", 0, 5) === "%PDF-") return "application/pdf";
  return null;
}

// Width and height for PNG and JPEG; null for formats we do not parse.
function dimensions(bytes, type) {
  if (type === "image/png") return { w: bytes.readUInt32BE(16), h: bytes.readUInt32BE(20) };
  if (type === "image/jpeg") {
    let o = 2;
    while (o + 9 < bytes.length) {
      if (bytes[o] !== 0xff) { o++; continue; }
      const marker = bytes[o + 1];
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker))
        return { w: bytes.readUInt16BE(o + 7), h: bytes.readUInt16BE(o + 5) };
      o += 2 + bytes.readUInt16BE(o + 2);
    }
  }
  return null;
}

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

async function readImageFolder(dir) {
  const entries = (await fs.readdir(dir, { withFileTypes: true }))
    .filter((e) => e.isFile() && !e.name.startsWith("."))
    .map((e) => e.name)
    .sort(collator.compare);
  const skipped = entries.filter((name) => !IMAGE_EXT.has(path.extname(name).toLowerCase()));
  const names = entries.filter((name) => IMAGE_EXT.has(path.extname(name).toLowerCase()));
  if (skipped.length) console.warn(`Skipped ${skipped.length} non-image file(s): ${skipped.join(", ")}`);
  if (!names.length)
    throw new BookError(`No images found in ${dir}. Supported formats: PNG, JPG, WebP, AVIF.`);
  const pages = [];
  for (const name of names) {
    const bytes = await fs.readFile(path.join(dir, name));
    const type = sniff(bytes);
    if (!type || type === "application/pdf")
      throw new BookError(`${name} is not a readable PNG, JPG, WebP or AVIF image (the file contents do not match the extension). Remove or re-export it, then run again.`);
    pages.push({ name, bytes, type, size: dimensions(bytes, type) });
  }
  return pages;
}

// ---------- PDF conversion ----------

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    child.stderr.on("data", (d) => (stderr += d));
    child.on("error", reject);
    child.on("close", (code) => (code === 0 ? resolve() : reject(new BookError(stderr.trim() || `${command} exited with code ${code}`))));
  });
}

async function pdfWithPdftoppm(pdf, outDir) {
  // -cropbox renders the page as viewers show it; scanned PDFs often carry a
  // larger MediaBox with the scanner bed around the page.
  await run("pdftoppm", ["-cropbox", "-jpeg", "-jpegopt", "quality=90", "-scale-to-x", String(PAGE_WIDTH), "-scale-to-y", "-1", pdf, path.join(outDir, "page")]);
}

async function pdfWithPdfjs(pdf, outDir) {
  const require = createRequire(path.join(SKILL_DIR, "package.json"));
  let pdfjs, canvasLib;
  try {
    pdfjs = await import(pathToFileURL(require.resolve("pdfjs-dist/legacy/build/pdf.mjs")).href);
    canvasLib = await import(pathToFileURL(require.resolve("@napi-rs/canvas")).href);
  } catch {
    const err = new BookError("pdf.js is not installed");
    err.code = "ENOENT";
    throw err;
  }
  // Without these folders pdf.js in Node cannot decode JBIG2 and JPEG 2000
  // images (most scans) or draw text in non-embedded fonts, and leaves them out.
  const pdfjsDir = path.dirname(require.resolve("pdfjs-dist/package.json"));
  const folder = (name) => path.join(pdfjsDir, name) + "/";
  const data = new Uint8Array(await fs.readFile(pdf));
  const task = pdfjs.getDocument({
    data,
    isEvalSupported: false,
    verbosity: 0,
    wasmUrl: folder("wasm"),
    standardFontDataUrl: folder("standard_fonts"),
    cMapUrl: folder("cmaps"),
  });
  const doc = await task.promise;
  const digits = String(doc.numPages).length;
  for (let n = 1; n <= doc.numPages; n++) {
    const page = await doc.getPage(n);
    const base = page.getViewport({ scale: 1 });
    const viewport = page.getViewport({ scale: PAGE_WIDTH / base.width });
    const canvas = canvasLib.createCanvas(Math.round(viewport.width), Math.round(viewport.height));
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    await page.render({ canvas, canvasContext: ctx, viewport }).promise;
    const jpeg = await canvas.encode("jpeg", 90);
    await fs.writeFile(path.join(outDir, `page-${String(n).padStart(digits, "0")}.jpg`), jpeg);
    page.cleanup();
  }
  await task.destroy();
}

const INSTALL_HINT = `Install one PDF converter, then run again:
  - Poppler (recommended): macOS "brew install poppler", Debian/Ubuntu "sudo apt install poppler-utils", Windows "choco install poppler" or "scoop install poppler"
  - or pdf.js: run "npm install" in ${SKILL_DIR}
Or export the PDF pages as images yourself and pass the folder with --input.`;

async function convertPdf(pdf, engine) {
  const outDir = await fs.mkdtemp(path.join(os.tmpdir(), "openzine-"));
  const engines = engine === "auto" ? ["pdftoppm", "pdfjs"] : [engine];
  const missing = [];
  for (const name of engines) {
    try {
      await (name === "pdftoppm" ? pdfWithPdftoppm : pdfWithPdfjs)(pdf, outDir);
      const pages = await readImageFolder(outDir);
      console.log(`Converted ${pages.length} PDF page(s) with ${name}.`);
      return { pages, cleanup: () => fs.rm(outDir, { recursive: true, force: true }) };
    } catch (error) {
      await fs.rm(outDir, { recursive: true, force: true });
      await fs.mkdir(outDir, { recursive: true });
      if (error.code === "ENOENT") { missing.push(name); continue; }
      await fs.rm(outDir, { recursive: true, force: true });
      throw new BookError(`Could not convert ${path.basename(pdf)} with ${name}: ${error.message.split("\n")[0]}\nIf the PDF is password-protected or damaged, open it in a PDF viewer, export a clean copy or the pages as images, and run again.`);
    }
  }
  await fs.rm(outDir, { recursive: true, force: true });
  throw new BookError(`No PDF converter available (tried: ${missing.join(", ")}).\n${INSTALL_HINT}`);
}

// ---------- book assembly ----------

function dataUrl({ type, bytes }) {
  return `data:${type};base64,${bytes.toString("base64")}`;
}

function blankPage() {
  const [r, g, b] = hex("#fcfcf9");
  return { name: "(blank)", type: "image/png", bytes: encodePNG(720, 991, () => [r, g, b]) };
}

function escapeHtml(text) {
  return text.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) return console.log(USAGE);

  const input = path.resolve(opts.input);
  const stat = await fs.stat(input).catch(() => null);
  if (!stat) throw new BookError(`Input not found: ${input}`);

  let pages;
  let cleanup = async () => {};
  if (stat.isDirectory()) {
    pages = await readImageFolder(input);
  } else {
    const head = Buffer.alloc(8);
    const fh = await fs.open(input);
    await fh.read(head, 0, 8, 0);
    await fh.close();
    if (sniff(head) !== "application/pdf")
      throw new BookError(`${path.basename(input)} is not a PDF. Pass a PDF file or a folder of images.`);
    ({ pages, cleanup } = await convertPdf(input, opts.pdfEngine));
  }

  try {
    const letterboxed = pages.filter((p) => p.size && Math.abs(p.size.h / p.size.w - PAGE_RATIO) / PAGE_RATIO > 0.01);
    if (letterboxed.length)
      console.warn(`${letterboxed.length} page(s) are not 1 : ${PAGE_RATIO} and will be letterboxed (shown whole on a paper-coloured margin): ${letterboxed.slice(0, 8).map((p) => `${p.name} ${p.size.w}x${p.size.h}`).join(", ")}${letterboxed.length > 8 ? ", …" : ""}`);

    const padded = pages.length % 2 === 1;
    const all = padded ? [...pages, blankPage()] : pages;
    const title = opts.title ?? path.basename(input, path.extname(input));
    const config = {
      title,
      lang: opts.lang,
      initialSpread: 0,
      portrait: opts.portrait,
      pageCount: pages.length,
      grain: dataUrl({ type: "image/webp", bytes: await fs.readFile(GRAIN) }),
      pages: all.map(dataUrl),
    };
    const runtime = await fs.readFile(RUNTIME, "utf8");
    const html =
      `<!doctype html><html lang="${opts.lang === "zh" ? "zh-CN" : "en"}"><head><meta charset="utf-8">` +
      `<meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title>` +
      `<meta name="generator" content="OpenZine"></head><body>` +
      `<script>window.OPENZINE=${JSON.stringify(config).replaceAll("<", "\\u003c")};</script>` +
      `<script>${runtime.replace(/<\/script/gi, "<\\/script")}</script></body></html>`;

    const out = path.resolve(opts.out);
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.writeFile(out, html);
    const mb = Buffer.byteLength(html) / 1024 / 1024;
    console.log(`Wrote ${out}`);
    console.log(`${pages.length} page(s)${padded ? " + 1 blank page at the end (odd page count)" : ""}, ${all.length / 2} sheet(s), ${mb.toFixed(1)} MB.`);
    if (mb > 60) console.warn("Warning: the file is large and may open slowly. Use JPG pages around 1440 px wide to shrink it.");
  } finally {
    await cleanup();
  }
}

main().catch((error) => {
  if (error instanceof BookError) console.error(`Error: ${error.message}`);
  else console.error(error);
  process.exit(1);
});
