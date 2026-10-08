// Generates the plain placeholder pages 03-07 in examples/demo-pages.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { encodePNG, hex } from "../plugins/openzine/skills/openzine/scripts/png.mjs";

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../examples/demo-pages");
const W = 1440, H = 1983;
const paper = hex("#fcfcf9"), blue = hex("#cfdff5"), sage = hex("#dfe5d6"), ink = hex("#2e3a33"), sand = hex("#efe6d4");
const pages = {
  "03-grid.png": (x, y) => (x % 48 < 2 || y % 48 < 2 ? blue : paper),
  "04-sage.png": () => sage,
  "05-dots.png": (x, y) => ((x % 36) - 18) ** 2 + ((y % 36) - 18) ** 2 < 9 ? blue : paper,
  "06-ruled.png": (x, y) => (y > 160 && y % 54 < 2 ? blue : x > 150 && x < 153 ? hex("#e8b4b4") : paper),
  "07-ink.png": (x, y) => (x > 120 && x < W - 120 && y > 160 && y < H - 160 ? ink : sand),
};
for (const [name, pixel] of Object.entries(pages)) {
  await fs.writeFile(path.join(dir, name), encodePNG(W, H, pixel));
  console.log("wrote", name);
}
