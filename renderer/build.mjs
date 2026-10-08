// Bundles the viewer shell, the extracted Paper Mono renderer, Three.js r162 and
// the Paper Mono typeface (as a data URL) into one IIFE that make-book.mjs
// inlines into every book.
import { build } from "esbuild";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const outfile = path.resolve(here, "../plugins/openzine/skills/openzine/runtime/openzine.js");

await build({
  absWorkingDir: here,
  entryPoints: ["src/viewer.js"],
  bundle: true,
  format: "iife",
  target: ["es2022"],
  outfile,
  minify: true,
  loader: { ".woff2": "dataurl" },
  legalComments: "eof",
  banner: {
    js: "/*! OpenZine viewer. Page-turn renderer, paper shader and grain texture extracted from Paper's https://paper.design/mono page; copyright Paper, all rights reserved by their owner. Three.js r162, Copyright © 2010-2024 three.js authors, MIT License. Paper Mono typeface, Copyright 2025 The Paper-Mono.Git Project Authors, SIL Open Font License 1.1. Viewer shell: MIT. */",
  },
});
console.log("Built", path.relative(process.cwd(), outfile));
