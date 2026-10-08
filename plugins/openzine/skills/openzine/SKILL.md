---
name: openzine
description: Turn a PDF or a folder of page images into a page-turning 3D booklet with realistic paper lighting, saved as one HTML file that opens offline with a double-click. Use when someone wants a flipbook, zine, portfolio, lookbook, catalogue, brochure or exhibition booklet made from design pages, slides, scans or a PDF.
---

# OpenZine

OpenZine binds pages into a booklet the reader turns with the mouse, touch or arrow keys. Everything (pages, renderer, paper texture) is inlined into one `.html` file, so the result can be emailed, uploaded to any static host, or opened from disk without a network connection.

All paths below are relative to this skill's directory, the folder that contains this `SKILL.md`. The only requirement is Node.js 18 or newer.

## Make a book

1. Find the input: a PDF, or a folder whose image files are the pages. Ask the user which file or folder to use only when it is not clear from the request.
2. Choose an output path the user will find, next to the input by default (for example `portfolio.pdf` gives `portfolio-book.html`). Choose a title: the user's words, else the document name.
3. Run:

   ```sh
   node <skill-dir>/scripts/make-book.mjs --input <folder-or-pdf> --out <book.html> --title "<title>"
   ```

   Add `--lang zh` for a Chinese viewer interface; the default is English. Portrait screens (phones, vertical video) open on a single page with a Single / Spread switch; add `--portrait spread` when the user wants them to open on the two-page spread.
4. Read the command output. Success ends with `Wrote <path>` and a line such as `12 page(s), 6 sheet(s), 9.4 MB.` Pass every warning on to the user in plain words.
5. Tell the user where the file is and how to use it: double-click to open, drag or click a page to turn it, hold to keep turning, arrow keys, Home for the cover, End for the back cover. Open it for them when you can (`open <file>` on macOS, `xdg-open` on Linux, `start` on Windows).

The book is done when the HTML file exists and the command exited with code 0.

## How pages are bound

- Page order is the file name in natural order: `2.png` comes before `10.png`. Rename files to reorder pages.
- The first page is the front cover. After it, each pair of images is one sheet: back of the previous sheet, front of the next. The last image is the back cover.
- An odd number of pages gets one blank page at the end so the last sheet has a back.
- Supported images: PNG, JPG, WebP, AVIF. Other files in the folder are skipped and listed; hidden files are ignored.
- The page shape is width : height = 1 : 1.377 (for example 1440 × 1983 px). Pages with another ratio are shown whole, centred on a paper-coloured margin, never cropped or stretched. A4 and US Letter PDFs therefore get thin margins. When the user wants edge-to-edge pages, tell them to design pages at 1 : 1.377.
- About 1440 px wide per page looks sharp. Larger images only make the file bigger. The command warns when the file is over 60 MB.

## PDF input

The command converts each PDF page to a 1440 px wide JPG. It uses Poppler's `pdftoppm` when installed and falls back to pdf.js. `--pdf-engine pdftoppm` or `--pdf-engine pdfjs` forces one converter.

## When the command fails

The command prints `Error:` and a reason, then exits with code 1. Fix the cause and run it again:

| Message starts with | What to do |
| --- | --- |
| `No PDF converter available` | Install Poppler (`brew install poppler`, `sudo apt install poppler-utils`, `choco install poppler`), or run `npm install` in this skill's directory to enable pdf.js. Ask the user before installing software. If neither is possible, ask the user to export the PDF pages as images and use the folder. |
| `Could not convert <file>` | The PDF is likely password-protected or damaged. Ask the user for an unlocked copy or exported page images. |
| `<name> is not a readable PNG, JPG, WebP or AVIF image` | The file content does not match its extension. Remove or re-export that file. |
| `No images found` | The folder has no supported images. Check the path or convert the pages to PNG or JPG. |
| `Input not found` | Check the path; quote paths that contain spaces. |

If the book opens but stays on "Preparing pages…" or shows "The pages did not load", the browser has WebGL turned off. Ask the user to try a current Chrome, Edge, Safari or Firefox.

## Credit

The page-turn renderer, paper shader and paper grain come from Paper's https://paper.design/mono page and remain Paper's copyright; every book links to that page in its footer. Keep that link when you change the viewer. Three.js is MIT-licensed. Details: `LICENSE` in the OpenZine repository.
