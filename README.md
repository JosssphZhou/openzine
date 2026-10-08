# OpenZine

**Turn a PDF or a folder of page images into a page-turning 3D booklet, as one HTML file that opens offline.**
**Try it:** [page through a live booklet](https://openzine.pen-ine.workers.dev) in your browser.
**Install:** in Claude Code run `/plugin marketplace add JosssphZhou/openzine`, then `/plugin install openzine@openzine`. Codex: [copy one folder](#codex).
**Use:** ask your agent "make a flipbook from `portfolio.pdf`", or run `node scripts/make-book.mjs --input portfolio.pdf --out portfolio.html`.

[中文说明](README.zh-CN.md)

![An OpenZine booklet mid-turn: a page curls over the spine and catches the light](evidence/hero-mid-turn.png)

> **Credit.** The page-turn renderer, paper shader and paper grain texture are extracted from Paper's [paper.design/mono](https://paper.design/mono) page. They are copyright **Paper** and are not covered by this repository's MIT License. [Three.js](https://threejs.org) r162 is bundled under the MIT License, and the [Paper Mono](https://github.com/paper-design/paper-mono) typeface under the SIL Open Font License 1.1. Every generated book links to paper.design/mono in its footer. See [LICENSE](LICENSE) for which files are under which terms.

## What you get

You hand your agent a PDF or a folder of design pages, a portfolio, a lookbook or an exhibition booklet. A few seconds later you have a single `.html` file:

- Pages bend, catch the light and cast shadows as they turn, on a textured paper surface.
- Readers drag or click a page to turn it, hold to keep turning, or use the arrow keys, Home and End.
- Images, renderer and texture are all inside the file. Double-click to open it, email it, or put it on any static host. It makes no network requests.

No InDesign, no code, no account.

## Install

### Claude Code

```sh
/plugin marketplace add JosssphZhou/openzine
/plugin install openzine@openzine
```

From a local clone, use the folder path instead: `/plugin marketplace add ./openzine`. The skill is invoked as `/openzine:openzine`, and Claude also uses it on its own when you ask for a flipbook, zine or booklet.

### Codex

Codex loads skills from `~/.codex/skills`. Copy the skill folder there and restart Codex:

```sh
git clone https://github.com/JosssphZhou/openzine
cp -R openzine/plugins/openzine/skills/openzine ~/.codex/skills/openzine
```

Then ask Codex for a flipbook, or mention `$openzine`.

### Other agents, or by hand

The skill is the folder `plugins/openzine/skills/openzine`. It needs only Node.js 18 or newer. Point your agent at its `SKILL.md`, or run the command yourself.

## Use

```sh
node scripts/make-book.mjs --input <folder-or-pdf> --out <book.html> [--title "My zine"] [--lang en|zh] [--portrait single|spread]
```

`scripts/make-book.mjs` at the repository root forwards to `plugins/openzine/skills/openzine/scripts/make-book.mjs`. Try it on the bundled demo:

```sh
node scripts/make-book.mjs --input examples/demo-pages --out demo.html --title "OpenZine demo"
```

Rules for pages:

- Order is the file name in natural order (`2.png` before `10.png`). The first page is the front cover, the last is the back cover.
- An odd page count gets one blank page at the end.
- PNG, JPG, WebP and AVIF are supported. Other files are skipped and listed.
- The page shape is width : height = **1 : 1.377** (for example 1440 × 1983 px). Other ratios are shown whole on a paper-coloured margin, never cropped or stretched.
- PDF pages are converted to 1440 px wide JPGs with Poppler's `pdftoppm` when it is installed, otherwise with pdf.js (run `npm install` in the skill folder once). `--pdf-engine pdftoppm|pdfjs` forces one.
- Landscape screens show the two-page spread. Portrait screens open with Paper's single-page mobile renderer and show a Single / Spread switch under the page numbers; `--portrait spread` opens portrait screens on the spread instead.

<p align="center"><img src="evidence/portrait-single.png" width="280" alt="A portrait screen: one page at a time, with the Single / Spread switch under the page numbers"></p>

When something fails, the command prints `Error:` with the cause and the fix, then exits with code 1.

## Repository layout

```text
.claude-plugin/marketplace.json     Claude Code marketplace entry
plugins/openzine/                   the installable plugin
  .claude-plugin/plugin.json
  skills/openzine/
    SKILL.md                        instructions for the agent
    scripts/make-book.mjs           the command (no dependencies)
    runtime/openzine.js             prebuilt viewer: Paper renderer + Three.js + viewer shell
    runtime/grain.webp              Paper's paper grain texture
    runtime/PAPERMONO-OFL.txt       licence of the Paper Mono typeface used by the viewer
    package.json                    optional pdf.js fallback dependencies
renderer/                           sources for runtime/openzine.js
  src/book.js, loader.js, performance.js   extracted from paper.design/mono (two-page spread)
  src/mobile-book.js                extracted from paper.design/mono (single page, portrait)
  src/viewer.js                     OpenZine viewer shell
  vendor/three.module.min.js        Three.js r162 from the same Paper bundle
  vendor/PaperMono.woff2            Paper Mono typeface (SIL OFL 1.1), embedded in the viewer
  reference/                        Paper's published files, for verification
examples/demo-pages/                eight demo pages
evidence/                           screenshots and source verification
```

## Rebuild the viewer

```sh
npm install
npm run verify:source   # checks book.js and mobile-book.js against Paper's published code
npm run build           # writes plugins/openzine/skills/openzine/runtime/openzine.js
```

`verify:source` parses both files and confirms that the extracted renderer differs from Paper's published function only in four documented places: the configurable first spread, the local grain texture URL, a page-change callback, and a controller object in place of the cleanup function. All 16 shader template strings match exactly, and the grain texture matches its recorded SHA-256. It checks `mobile-book.js` the same way against Paper's mobile function: all 14 shader template strings match, and the only differences are the local grain texture URL, one added page-change call, and the controller object. The mobile camera frame constant is compared with Paper's published value.

## Limits

- Needs WebGL. Very old browsers or browsers with hardware acceleration turned off show a load error.
- Every page is embedded, so a 60-page book of large PNGs can pass 100 MB. JPG pages around 1440 px wide keep it small.

## License

Mixed. OpenZine's own code is MIT. The Paper renderer, shader and texture are copyright Paper. Three.js is MIT. The Paper Mono typeface is SIL OFL 1.1. [LICENSE](LICENSE) lists the files under each.
