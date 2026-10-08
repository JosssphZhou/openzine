// OpenZine viewer shell. New code (not extracted from Paper).
// Reads window.OPENZINE = { title, lang, grain, portrait, pageCount, pages }
// written by make-book.mjs, fits pages to the 1 : 1.377 sheet, and mounts one
// of the two extracted Paper Mono renderers: the two-page spread from ./book.js,
// or Paper's single-page mobile renderer from ./mobile-book.js.
import { mountBook } from "./book.js";
import { mountMobileBook } from "./mobile-book.js";
import paperMono from "../vendor/PaperMono.woff2";

const PAGE_RATIO = 1.377;
const RATIO_TOLERANCE = 0.01;
const PAPER = "#fcfcf9";

const STRINGS = {
  en: {
    loading: "Preparing pages",
    failed: "The pages did not load.",
    retry: "Reload",
    back: "Back cover",
    prev: "Previous page",
    next: "Next page",
    controls: "Page controls",
    hint: "Drag or click a page · ← → keys",
    hintTouch: "Drag or tap a page",
    credit: "Page-turn renderer: Paper Mono ↗",
    layout: "Page layout",
    single: "Single",
    spread: "Spread",
  },
  zh: {
    loading: "正在准备书页",
    failed: "书页没有加载成功。",
    retry: "重新加载",
    back: "封底",
    prev: "上一页",
    next: "下一页",
    controls: "翻页控制",
    hint: "拖动或点击书页 · 键盘 ← →",
    hintTouch: "拖动或轻点书页",
    credit: "翻页效果来源：Paper Mono ↗",
    layout: "版式",
    single: "单页",
    spread: "双页",
  },
};

// Layout follows the Paper Mono page: one typeface, a 12 × 24 px grid, and
// every bar a multiple of 24 px. The grid line at the centre sits on the spine.
const styles = `
@font-face{font-family:"Paper Mono";src:url(${paperMono}) format("woff2");font-weight:100 800;font-display:swap}
:root{--paper:#f6f6f3;--ink:#222;--muted:#747473;--grid:#cfdff5;--metric:#8baddc;--focus:#4c94fc;--hover:#efefeb;--gutter:24px}
*{box-sizing:border-box}html,body{margin:0;height:100%;background:var(--paper);color:var(--ink)}
body{height:100svh;overflow:hidden;display:grid;grid-template-rows:48px minmax(0,1fr) 48px;grid-template-areas:"head" "stage" "bar";font:400 14px/24px "Paper Mono","PingFang SC","Hiragino Sans GB",system-ui,sans-serif;font-feature-settings:"ss02","zero";-webkit-font-smoothing:antialiased}
button{font:inherit;color:inherit;cursor:pointer;border:0;background:transparent;border-radius:5px;transition:background-color .15s cubic-bezier(0,0,.2,1)}button:focus-visible,a:focus-visible{outline:2px solid var(--focus);outline-offset:-4px}
header{grid-area:head;display:flex;align-items:center;min-width:0;padding:0 var(--gutter)}h1{margin:0;font-size:14px;line-height:24px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.stage{grid-area:stage;position:relative;overflow:hidden;container-type:size;display:grid;place-items:center}.stage::before{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(to right,var(--grid) 1px,transparent 1px),linear-gradient(to bottom,var(--grid) 1px,transparent 1px);background-size:12px 24px;background-position:calc(50% + 6px) 0;-webkit-mask-image:radial-gradient(ellipse 70% 75% at 50% 50%,#000 55%,transparent);mask-image:radial-gradient(ellipse 70% 75% at 50% 50%,#000 55%,transparent)}
.frame{width:min(100cqw - 2 * var(--gutter),(100cqh - 48px) * 1.44753,1200px);aspect-ratio:1.44753;position:relative}.book{position:absolute;inset:0;touch-action:pan-y pinch-zoom}.book>[data-magazine-layer]{position:absolute;top:-27.975%;left:-27.975%;width:155.95%;height:155.95%;display:block;pointer-events:none}.book>canvas{opacity:0}.book[data-magazine-state=ready]>canvas{opacity:1}.book>[data-magazine-hit-area]{cursor:grab}.book.leaving,.book.leaving *{pointer-events:none!important}.book>[data-magazine-hit-area]:active{cursor:grabbing}
.loading{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;pointer-events:none;font-size:12px;color:var(--muted)}.progress{color:var(--ink);letter-spacing:.1em;white-space:pre}.loading.failed #loading-text{font-size:14px;color:var(--ink)}.loading button{pointer-events:auto;margin-top:12px;height:24px;padding:0 10px;background:#f9f9f9;box-shadow:inset 0 1px 0 #ffffffbd,0 0 0 1px #0000001f,0 1px 3px -1px #00000026;font-size:12px;line-height:16px;font-weight:500;color:#000c}.loading button:hover{background:#fff}[hidden]{display:none!important}
.bar{grid-area:bar;display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);align-items:center;gap:24px;padding:0 var(--gutter);font-size:12px;color:var(--muted)}.hint,.credit{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hint{margin:0;justify-self:start;max-width:100%;transition:opacity .6s ease}.hint.done{opacity:0}.credit{justify-self:end;max-width:100%;color:inherit;text-decoration:none}.credit:hover{color:var(--ink)}
.controls{display:flex;align-items:center}.controls button{width:48px;height:48px;padding:0;font-size:16px;line-height:24px}.controls button:disabled{opacity:.25;cursor:default}.counter{width:120px;text-align:center;font-size:14px;color:var(--ink);white-space:nowrap}.now{transition:color 1.4s cubic-bezier(.4,0,.2,1)}.now.flash{color:var(--metric);transition:none}
.layout{display:none;gap:2px;padding:1px;border-radius:6px;background:#0000000d}.layout button{min-width:38px;padding:3px 8px;font-size:12px;line-height:16px;color:#00000080}.layout button[aria-pressed=true]{background:#f9f9f9;font-weight:500;color:#000c;box-shadow:inset 0 1px 0 #ffffffbd,inset 0 0 1px 1px #ffffffbd,0 0 1px #00000030,0 1px 3px -1px #00000020;cursor:default}
@media(max-width:600px){:root{--gutter:16px}}
@media(max-width:600px),(orientation:portrait){body{grid-template-rows:48px minmax(0,1fr) auto 48px 24px minmax(0,1fr) 48px;grid-template-areas:"head" "." "stage" "controls" "hint" "." "credit"}html{overflow-x:hidden}.stage{height:calc((100vw - 2 * var(--gutter)) / 1.44753 + 48px);overflow:visible;overflow-x:clip}.bar{display:contents}.controls{grid-area:controls;justify-self:center}.hint{grid-area:hint;justify-self:center;padding:0 var(--gutter)}.credit{grid-area:credit;align-self:center;padding:0 var(--gutter)}}
/* Portrait screens get a Single / Spread switch under the page numbers. Single
   uses Paper's mobile renderer: a 0.65 frame, canvas at 100% scaled 1.3 (Paper's
   own layout constants), and the stage takes all the height left. */
@media(orientation:portrait){body{grid-template-rows:48px minmax(0,1fr) auto 48px 24px 24px minmax(0,1fr) 48px;grid-template-areas:"head" "." "stage" "controls" "layout" "hint" "." "credit"}.layout{display:flex;grid-area:layout;justify-self:center}
body[data-mode=single]{grid-template-rows:48px minmax(0,1fr) 48px 24px 24px 48px;grid-template-areas:"head" "stage" "controls" "layout" "hint" "credit"}body[data-mode=single] .stage{height:auto;overflow:hidden}body[data-mode=single] .frame{width:min(100cqw - 2 * var(--gutter),(100cqh - 48px) * .65);aspect-ratio:.65;margin-bottom:-3%}.book[data-mode=single]>[data-magazine-layer]{inset:0;width:100%;height:100%;transform:scale(1.3);pointer-events:auto;touch-action:pan-y pinch-zoom;cursor:grab}}
@media(hover:hover){.controls button:hover:not(:disabled){background:var(--hover)}.layout button[aria-pressed=false]:hover{color:#000c}}
@media(prefers-reduced-motion:reduce){*{transition:none!important}}
`;

const config = window.OPENZINE || { pages: [] };
const t = STRINGS[config.lang] || STRINGS.en;
const title = config.title || "OpenZine";
const touch = matchMedia("(hover: none) and (pointer: coarse)").matches;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
const portrait = matchMedia("(orientation: portrait)");

document.documentElement.lang = config.lang === "zh" ? "zh-CN" : "en";
document.title = title;
const css = document.createElement("style");
css.textContent = styles;
document.head.append(css);
document.body.innerHTML = `
<header><h1 id="title"></h1></header>
<main class="stage"><div class="frame"><div class="book" id="book"></div><div class="loading" id="loading"><span id="loading-text"></span><span class="progress" id="progress"></span><button id="retry" hidden></button></div></div></main>
<footer class="bar">
  <p class="hint" id="hint"></p>
  <div class="controls" id="controls" role="group"><button id="prev">←</button><span class="counter" id="counter" aria-live="polite">—</span><button id="next">→</button></div>
  <div class="layout" id="layout" role="group"><button data-mode="single"></button><button data-mode="spread"></button></div>
  <a class="credit" href="https://paper.design/mono" target="_blank" rel="noopener noreferrer" id="credit"></a>
</footer>`;

const $ = (id) => document.getElementById(id);
$("title").textContent = title;
$("retry").textContent = t.retry;
$("prev").setAttribute("aria-label", t.prev);
$("next").setAttribute("aria-label", t.next);
$("controls").setAttribute("aria-label", t.controls);
$("layout").setAttribute("aria-label", t.layout);
for (const button of $("layout").children) button.textContent = t[button.dataset.mode];
$("hint").textContent = touch ? t.hintTouch : t.hint;
$("credit").textContent = t.credit;

let book = null;
let fitted = null;
let generation = 0;

// Landscape screens always show the two-page spread. Portrait screens open in
// the mode make-book chose (--portrait, default single) and can switch.
let portraitMode = config.portrait === "spread" ? "spread" : "single";
let mode = null;
const currentMode = () => (portrait.matches ? portraitMode : "spread");

// The reading position is a 0-based page index, so switching renderers keeps
// the reader on the same page. Spread s shows pages 2s and 2s + 1 (1-based).
let position = 0;
const spreadOf = (page) => Math.ceil(page / 2);

// Pages whose ratio differs from 1 : 1.377 by more than 1% are drawn centred
// on a paper-coloured sheet, so nothing is cropped or stretched.
async function fitPage(src) {
  const image = new Image();
  image.src = src;
  await image.decode();
  const ratio = image.naturalHeight / image.naturalWidth;
  if (Math.abs(ratio - PAGE_RATIO) / PAGE_RATIO <= RATIO_TOLERANCE) return src;
  const canvas = document.createElement("canvas");
  canvas.width = 1440;
  canvas.height = Math.round(1440 * PAGE_RATIO);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const scale = Math.min(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight);
  const w = image.naturalWidth * scale;
  const h = image.naturalHeight * scale;
  ctx.drawImage(image, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
  return canvas.toDataURL("image/jpeg", 0.92);
}

const pad = (n, total) => String(n).padStart(Math.max(2, String(total).length), "0");

// One cell per page, up to 24 cells; the numbers are pages decoded so far.
function progress(done, total) {
  const cells = Math.min(total, 24);
  const full = Math.round((done / total) * cells);
  $("progress").textContent =
    "█".repeat(full) + "░".repeat(cells - full) + `  ${pad(done, total)} / ${pad(total, total)}`;
}

// Both renderers report in their own terms; turn either into what the bar
// shows. The single-page renderer leaves out the blank page make-book adds to
// an odd page count, as Paper's mobile page does.
function readState(state) {
  if (mode === "single")
    return {
      mode,
      position: state.pageIndex,
      pageCount: state.pageCount,
      visiblePages: [state.pageIndex + 1],
      canPrevious: state.pageIndex > 0,
      // Paper's mobile renderer turns past the last page back to the cover.
      canNext: true,
    };
  const last = (config.pageCount ?? state.pageCount) - 1;
  // Keep the page the reader was on while it is still in view, so switching
  // Single → Spread → Single returns to the same page, not the left one.
  const kept = state.visiblePages.includes(position + 1);
  return {
    mode,
    position: kept
      ? position
      : state.visiblePages.length
        ? Math.min(last, Math.max(0, state.spread * 2 - 1))
        : last,
    pageCount: state.pageCount,
    visiblePages: state.visiblePages,
    spread: state.spread,
    totalSpreads: state.totalSpreads,
    canPrevious: state.spread > 0,
    canNext: state.spread < state.totalSpreads,
  };
}

let shown = null;
let firstPosition = null;
let flashTimer = 0;

// The page numbers that just changed turn blue, hold for 400 ms, then fade
// back to ink over 1.4 s. The hint fades out after the first turn.
function update(state) {
  position = state.position;
  const now = state.visiblePages.length
    ? state.visiblePages.map((n) => pad(n, state.pageCount)).join("–")
    : t.back;
  if (now !== shown) {
    const counter = $("counter");
    counter.replaceChildren();
    const span = document.createElement("span");
    span.className = "now";
    span.textContent = now;
    counter.append(span, state.visiblePages.length ? ` / ${pad(state.pageCount, state.pageCount)}` : "");
    if (shown !== null && !reduceMotion.matches) {
      span.classList.add("flash");
      clearTimeout(flashTimer);
      flashTimer = setTimeout(() => span.classList.remove("flash"), 400);
    }
    shown = now;
  }
  firstPosition ??= state.position;
  if (state.position !== firstPosition) $("hint").classList.add("done");
  $("prev").disabled = !state.canPrevious;
  $("next").disabled = !state.canNext;
}

function fail(error) {
  $("loading").hidden = false;
  $("loading").classList.add("failed");
  $("loading-text").textContent = t.failed;
  $("progress").hidden = true;
  $("retry").hidden = false;
  console.error(error);
}

// On a Single / Spread switch the old book stays on screen, pinned at its
// current size and place, until the new renderer has drawn its first frame.
// Tearing it down first left the stage blank while the new one loaded.
let leaving = null;

function dropLeaving() {
  leaving?.book.destroy();
  leaving?.el.remove();
  leaving = null;
}

async function mount(page = position, { keepOld = false } = {}) {
  const current = ++generation;
  const old = $("book");
  const oldReady = book && old.dataset.magazineOpeningReady === "true";
  const oldRect = old.getBoundingClientRect();
  mode = currentMode();
  document.body.dataset.mode = mode;
  for (const button of $("layout").children)
    button.setAttribute("aria-pressed", String(button.dataset.mode === mode));
  const frame = old.parentElement;
  if (keepOld && oldReady) {
    dropLeaving();
    leaving = { book, el: old };
    old.removeAttribute("id");
    old.classList.add("leaving");
    const box = frame.getBoundingClientRect();
    Object.assign(old.style, {
      inset: "auto",
      left: `${oldRect.left - box.left}px`,
      top: `${oldRect.top - box.top}px`,
      width: `${oldRect.width}px`,
      height: `${oldRect.height}px`,
    });
  } else {
    // A book still loading is replaced; one already kept on screen stays
    // only if this is another switch.
    if (!keepOld) dropLeaving();
    book?.destroy();
    old.remove();
  }
  book = null;
  const el = document.createElement("div");
  el.className = "book";
  el.id = "book";
  el.dataset.mode = mode;
  frame.prepend(el);
  $("loading").hidden = !!leaving;
  $("loading").classList.remove("failed");
  $("loading-text").textContent = t.loading;
  $("progress").hidden = false;
  $("retry").hidden = true;
  $("prev").disabled = $("next").disabled = true;
  try {
    if (!config.pages?.length) throw Error("No pages in this book");
    const total = config.pages.length;
    let done = 0;
    progress(fitted ? total : 0, total);
    fitted ??= await Promise.all(
      config.pages.map((src) => fitPage(src).then((page) => (progress(++done, total), page))),
    );
    if (current !== generation) return;
    let ready = false;
    const settings = {
      grainUrl: config.grain,
      onChange: (state) => ready && current === generation && update(readState(state)),
      onOpeningReady() {
        if (current !== generation) return;
        ready = true;
        dropLeaving();
        $("loading").hidden = true;
        if (book) update(readState(book.getState()));
      },
      onLoadError: (error) => current === generation && (dropLeaving(), fail(error)),
    };
    if (mode === "single") {
      const pages = fitted.slice(0, config.pageCount ?? fitted.length);
      book = mountMobileBook($("book"), pages, Math.min(page, pages.length - 1), settings);
    } else {
      book = mountBook($("book"), fitted, { ...settings, initialSpread: spreadOf(page) });
    }
  } catch (error) {
    if (current === generation) (dropLeaving(), fail(error));
  }
}

function goToPage(page) {
  if (!book) return false;
  return mode === "single" ? book.goToPage(page) : book.goToSpread(spreadOf(page));
}

function goToEnd() {
  if (!book) return false;
  const state = book.getState();
  return mode === "single" ? book.goToPage(state.pageCount - 1) : book.goToSpread(state.totalSpreads);
}

function setMode(next) {
  if (!["single", "spread"].includes(next) || !portrait.matches) return false;
  portraitMode = next;
  if (currentMode() !== mode) mount(position, { keepOld: true });
  return true;
}

$("prev").onclick = () => book?.turn(false);
$("next").onclick = () => book?.turn(true);
$("retry").onclick = () => mount(position);
$("layout").onclick = (event) => {
  const button = event.target.closest("button");
  if (button) setMode(button.dataset.mode);
};
portrait.addEventListener("change", () => {
  if (currentMode() !== mode) mount(position);
});
document.addEventListener("keydown", (event) => {
  if (event.target.matches?.("input,textarea,select,[contenteditable]")) return;
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    event.preventDefault();
    book?.turn(event.key === "ArrowRight");
  } else if (event.key === "Home") {
    event.preventDefault();
    goToPage(0);
  } else if (event.key === "End") {
    event.preventDefault();
    goToEnd();
  }
});
window.addEventListener("pagehide", () => (dropLeaving(), book?.destroy()));
window.addEventListener("pageshow", (event) => {
  if (event.persisted) mount(position);
});

// Scripting hook for agents and tests.
window.flipBook = {
  getState: () => book && readState(book.getState()),
  next: () => book?.turn(true),
  previous: () => book?.turn(false),
  goToPage,
  goToSpread: (index) => goToPage(Math.max(0, index * 2 - 1)),
  getMode: () => mode,
  setMode,
};

mount(Math.max(0, (config.initialSpread ?? 0) * 2 - 1));
