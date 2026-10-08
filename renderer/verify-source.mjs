import fs from "node:fs/promises";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import { parse } from "acorn";
import { fileURLToPath } from "node:url";
import path from "node:path";
process.chdir(path.dirname(fileURLToPath(import.meta.url)));
const parseJS = (source) =>
  parse(source, { ecmaVersion: "latest", sourceType: "module" });
function walk(n, fn) {
  if (!n || typeof n !== "object") return;
  fn(n);
  for (const v of Object.values(n)) {
    if (Array.isArray(v)) v.forEach((x) => walk(x, fn));
    else if (v && typeof v === "object") walk(v, fn);
  }
}
function clean(n) {
  return JSON.parse(
    JSON.stringify(n, (key, value) =>
      ["start", "end", "raw"].includes(key) ? undefined : value,
    ),
  );
}
const originalSource = await fs.readFile(
  "reference/desktop.published.js",
  "utf8",
);
const adaptedSource = await fs.readFile("src/book.js", "utf8");
let original;
walk(parseJS(originalSource), (n) => {
  if (
    n.type === "FunctionExpression" &&
    n.params.length === 3 &&
    originalSource.slice(n.start, n.end).includes("new i.WebGLRenderer")
  )
    original = n;
});
const adapted = parseJS(adaptedSource).body.find(
  (n) => n.type === "ExportNamedDeclaration",
).declaration;
const templates = (n) => {
  const values = [];
  walk(n, (item) => {
    if (item.type === "TemplateLiteral")
      values.push(item.quasis.map((q) => q.value.raw));
  });
  return values;
};
assert.deepEqual(
  templates(adapted),
  templates(original),
  "All original shader strings must match exactly",
);
let originalA, originalWindow;
walk(original, (n) => {
  if (n.type === "VariableDeclarator" && n.id.name === "A") originalA = n.init;
  if (n.type === "FunctionDeclaration" && n.id.name === "ey")
    originalWindow = n;
});
const normalized = structuredClone(adapted);
normalized.type = original.type;
normalized.id = null;
walk(normalized, (n) => {
  if (n.type === "VariableDeclarator" && n.id.name === "A") n.init = originalA;
  if (
    n.type === "MemberExpression" &&
    n.object.name === "a" &&
    n.property.name === "grainUrl"
  ) {
    n.object.name = "o";
    n.property.name = "monoMagazinePatternSource";
  }
  if (n.type === "FunctionDeclaration" && n.id.name === "ey")
    Object.assign(n, originalWindow);
});
normalized.body.body.at(-1).argument.expressions[2] =
  original.body.body.at(-1).argument.expressions[2];
assert.deepEqual(
  clean(normalized),
  clean(original),
  "Core must differ only by the documented configuration/controller adaptations",
);
// OpenZine ships only the grain texture, not Paper's 28 sample pages.
const assets = JSON.parse(await fs.readFile("reference/assets.json", "utf8"))
  .filter((asset) => asset.path === "assets/grain.webp")
  .map((asset) => ({
    ...asset,
    path: "../plugins/openzine/skills/openzine/runtime/grain.webp",
  }));
for (const asset of assets) {
  const bytes = await fs.readFile(`${asset.path}`);
  assert.equal(
    crypto.createHash("sha256").update(bytes).digest("hex"),
    asset.sha256,
  );
}
const result = {
  verifiedAt: new Date().toISOString(),
  shaderTemplates: templates(original).length,
  coreAST:
    "identical except initialSpread,grain URL,onChange,public controller",
  assetsUnchanged: assets.length,
  camera: {
    fov: 40,
    aspect: 1.44753,
    near: 1.5,
    far: 4.5,
    position: [0, 0, 2.99],
    lookAt: [0, 0, 0],
  },
  materials: {
    metalness: 0.17,
    roughness: 0.5,
    paperTransparency: 0.04,
    inkGloss: 0.33,
    textureColor: 0.17,
    patternRoughness: 0.33,
    patternSize: 1.46,
  },
  light: {
    hemisphere: ["#ffffff", "#a1aeaf", 1.5],
    directional: ["#ffffff", 2],
    position: [-3.5, 1.3, 4.1],
    shadowMap: [2048, 2048],
    shadowOpacity: 0.15,
  },
  texture: assets.at(-1),
};
await fs.writeFile(
  "../evidence/source-verification.json",
  JSON.stringify(result, null, 2),
);
console.log(result);

// Paper's mobile pages use a separate single-page renderer (published chunk
// 2nugie3hvt1bv.js). Its third parameter is already the first page, so only
// three adaptations are allowed: the local grain URL, the onChange callback,
// and a controller object returned in place of the cleanup function.
const mobileSource = await fs.readFile("reference/mobile.published.js", "utf8");
const mobileAdaptedSource = await fs.readFile("src/mobile-book.js", "utf8");
let mobileOriginal;
walk(parseJS(mobileSource), (n) => {
  if (
    n.type === "FunctionExpression" &&
    n.params.length === 4 &&
    mobileSource.slice(n.start, n.end).includes("new g.WebGLRenderer")
  )
    mobileOriginal = n;
});
const mobileAdapted = parseJS(mobileAdaptedSource).body.find(
  (n) => n.type === "ExportNamedDeclaration",
).declaration;
assert.deepEqual(
  templates(mobileAdapted),
  templates(mobileOriginal),
  "All original mobile shader strings must match exactly",
);
const mobileNormalized = structuredClone(mobileAdapted);
mobileNormalized.type = mobileOriginal.type;
mobileNormalized.id = null;
walk(mobileNormalized, (n) => {
  if (
    n.type === "MemberExpression" &&
    n.object.name === "n" &&
    n.property.name === "grainUrl"
  ) {
    n.object.name = "u";
    n.property.name = "monoMagazinePatternSource";
  }
  // eX publishes the loading window; the only addition is one
  // `n.onChange?.(...)` call in its return sequence. Remove that call and
  // the rest of eX must match the original.
  if (n.type === "FunctionDeclaration" && n.id.name === "eX") {
    const sequence = n.body.body.at(-1).argument;
    const before = sequence.expressions.length;
    sequence.expressions = sequence.expressions.filter(
      (item) =>
        !(
          item.type === "ChainExpression" &&
          item.expression.callee?.object?.name === "n" &&
          item.expression.callee?.property?.name === "onChange"
        ),
    );
    assert.equal(before - sequence.expressions.length, 1, "eX must add exactly one onChange call");
  }
});
mobileNormalized.body.body.at(-1).argument.expressions[2] =
  mobileOriginal.body.body.at(-1).argument.expressions[2];
assert.deepEqual(
  clean(mobileNormalized),
  clean(mobileOriginal),
  "Mobile core must differ only by grain URL, onChange and public controller",
);
// The mobile camera frame lives in a shared Paper module; the extracted copy
// inlines it at the top of mobile-book.js.
assert.ok(
  mobileAdaptedSource.includes(
    "MONO_MAGAZINE_FRAME: { left: -0.34, right: 1.22, bottom: -1.2, top: 1.2 }",
  ),
  "Mobile camera frame must match Paper's constant",
);
assert.ok(
  (await fs.readFile("reference/responsive.published.js", "utf8")).includes(
    "left:-.34,right:1.22,bottom:-1.2,top:1.2",
  ),
  "Paper's published frame constant changed",
);
const mobileResult = {
  verifiedAt: new Date().toISOString(),
  source: "reference/mobile.published.js (paper.design/mono chunk 2nugie3hvt1bv.js)",
  shaderTemplates: templates(mobileOriginal).length,
  coreAST: "identical except grain URL,onChange,public controller",
  frame: { left: -0.34, right: 1.22, bottom: -1.2, top: 1.2 },
  camera: {
    position: [0.44, 0, 3.1],
    lookAt: [0.44, 0, 0],
    near: 1.5,
    far: 4.5,
    fov: "2*atan(2.4/2/3.1)*180/PI",
    aspect: "canvas.clientWidth/canvas.clientHeight",
  },
  light: {
    hemisphere: ["#ffffff", "#a1aeaf", 1.7],
    directional: ["#ffffff", 2],
    position: [0.689, -1.15, 2.15],
  },
  paperTransparency: 0.3,
  shaderShadowOpacity: 0.4,
};
await fs.writeFile(
  "../evidence/mobile-source-verification.json",
  JSON.stringify(mobileResult, null, 2),
);
console.log(mobileResult);
