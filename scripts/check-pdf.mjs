// Regression check for PDF conversion. Runs make-book on a few pages of a PDF
// with each engine and checks the pages are neither blank nor framed by the
// scanner's black border.
//
//   node scripts/check-pdf.mjs <file.pdf> [--pages 1,15] [--engines pdftoppm,pdfjs]
//
// The thresholds assume full printed pages, such as pages 1 and 15 of the 1976
// NASA Graphics Standards Manual scan; a page with two lines of text reads as blank.
// Needs Poppler (pdfseparate, pdfunite) to cut the sample pages out of the PDF,
// and the skill's npm dependencies to decode the pages.
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SKILL_DIR = path.join(ROOT, "plugins/openzine/skills/openzine");
const MAKE_BOOK = path.join(SKILL_DIR, "scripts/make-book.mjs");
const { loadImage, createCanvas } = createRequire(path.join(SKILL_DIR, "package.json"))("@napi-rs/canvas");

const MIN_INK = 0.02; // share of pixels darker than light grey; a blank page is near 0
const MAX_DARK_EDGE = 0.25; // share of near-black pixels in a 2% strip along an edge

const args = process.argv.slice(2);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  if (i === -1) return fallback;
  const [value] = args.splice(i, 2).slice(1);
  return value;
};
const pageNumbers = option("--pages", "1,15").split(",").map(Number);
const engines = option("--engines", "pdftoppm,pdfjs").split(",");
const pdf = args[0];
if (!pdf) {
  console.error("Usage: node scripts/check-pdf.mjs <file.pdf> [--pages 1,15] [--engines pdftoppm,pdfjs]");
  process.exit(2);
}

function measure(image) {
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0);
  const { data, width: w, height: h } = ctx.getImageData(0, 0, image.width, image.height);
  const luma = (x, y) => {
    const i = (y * w + x) * 4;
    return 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
  };
  let ink = 0;
  for (let y = 0; y < h; y += 2) for (let x = 0; x < w; x += 2) if (luma(x, y) < 200) ink++;
  const strip = (x0, y0, x1, y1) => {
    let dark = 0, total = 0;
    for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++, total++) if (luma(x, y) < 40) dark++;
    return dark / total;
  };
  const sx = Math.ceil(w * 0.02), sy = Math.ceil(h * 0.02);
  return {
    size: `${w}x${h}`,
    ink: ink / (Math.ceil(w / 2) * Math.ceil(h / 2)),
    edges: { left: strip(0, 0, sx, h), right: strip(w - sx, 0, w, h), top: strip(0, 0, w, sy), bottom: strip(0, h - sy, w, h) },
  };
}

const tmp = await fs.mkdtemp(path.join(os.tmpdir(), "openzine-check-"));
let failed = 0;
try {
  const parts = pageNumbers.map((n) => {
    const out = path.join(tmp, `p${n}.pdf`);
    execFileSync("pdfseparate", ["-f", String(n), "-l", String(n), pdf, out]);
    return out;
  });
  const sample = path.join(tmp, "sample.pdf");
  execFileSync("pdfunite", [...parts, sample]);

  for (const engine of engines) {
    const html = path.join(tmp, `${engine}.html`);
    const started = Date.now();
    const result = spawnSync(process.execPath, [MAKE_BOOK, "--input", sample, "--out", html, "--pdf-engine", engine], { encoding: "utf8" });
    const seconds = ((Date.now() - started) / 1000).toFixed(1);
    if (result.status !== 0) {
      failed++;
      console.log(`FAIL ${engine}: make-book exited with ${result.status}\n${result.stderr.trim()}`);
      continue;
    }
    if (/letterboxed/.test(result.stderr)) {
      failed++;
      console.log(`FAIL ${engine}: pages are not at the book ratio: ${result.stderr.trim()}`);
    }
    const text = await fs.readFile(html, "utf8");
    const config = JSON.parse(text.match(/window\.OPENZINE=(\{.*?\});<\/script>/s)[1]);
    for (const [i, n] of pageNumbers.entries()) {
      const m = measure(await loadImage(Buffer.from(config.pages[i].split(",")[1], "base64")));
      const problems = [];
      if (m.ink < MIN_INK) problems.push(`blank (ink ${(m.ink * 100).toFixed(2)}% < ${MIN_INK * 100}%)`);
      for (const [edge, share] of Object.entries(m.edges))
        if (share > MAX_DARK_EDGE) problems.push(`black border on the ${edge} edge (${(share * 100).toFixed(0)}% near-black)`);
      if (problems.length) failed++;
      const edges = Object.entries(m.edges).map(([k, v]) => `${k} ${(v * 100).toFixed(0)}%`).join(", ");
      console.log(`${problems.length ? "FAIL" : "ok  "} ${engine} page ${n}: ${m.size}, ink ${(m.ink * 100).toFixed(1)}%, dark edges ${edges}${problems.length ? ` -> ${problems.join("; ")}` : ""}`);
    }
    console.log(`     ${engine}: ${pageNumbers.length} page(s) in ${seconds} s`);
  }
} finally {
  await fs.rm(tmp, { recursive: true, force: true });
}
console.log(failed ? `${failed} check(s) failed.` : "All checks passed.");
process.exit(failed ? 1 : 0);
