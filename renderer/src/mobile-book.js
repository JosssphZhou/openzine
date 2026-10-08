// Mobile renderer extracted from Paper Mono published chunk. See SOURCES.md.
import * as g from "../vendor/three.module.min.js";
import * as v from "./loader.js";
import * as S from "./performance.js";
const x = {
  MONO_MAGAZINE_FRAME: { left: -0.34, right: 1.22, bottom: -1.2, top: 1.2 },
};
export function mountMobileBook(e, t, a = 0, n = {}) {
  let o = (0, S.createMagazinePerformance)(e, "mobile"),
    i = new AbortController(),
    r = null,
    l = !1,
    s = !1,
    c = !1,
    p = !1,
    d = !1,
    m = () => {},
    f = null,
    h = null,
    M = t.length,
    w = {
      startTime: 0.22,
      firstFlipTime: 1.4,
      fastestFlipTime: 1,
      speedUpSheets: 7,
      firstGapShare: 0.16,
      fastestGapShare: 0.1,
      moveSlopPx: 40,
    },
    b = {
      turnFraction: 1.2,
      progressSmoothTime: 0.9,
      commitProgress: 0.1,
      clickSlopPx: 5,
      claimSteepness: 1.6,
      claimAfterPx: 4,
      fallTime: 1.3,
      fallTimeExponent: 0.5,
    },
    P = 1.2,
    T = 0.8,
    A = 35,
    _ = 0.05,
    R = { tiltDeg: 8, flipTimeMin: 0.95, flipTimeMax: 1.08 },
    y = {
      spineOpenStartDeg: 100,
      spineOpenEndDeg: 190,
      spineOpenPower: 4,
      coneEvenPower: 6,
      coverTopRadius: 0.04,
      backTopRadius: 0.18,
      coverBottomRadius: 0.01,
      backBottomRadius: 0.05,
      radiusSpacingClump: 7.5,
      radiusSpacingSeed: 41.5,
      fallDelayPages: 15,
      fallDurationPages: 3,
    },
    C = {
      midLeadPower: 2,
      midBow: 2,
      midBowFlatFrom: 0.3,
      midBowFlatTo: 0.8,
      midRollScale: 2.5,
    },
    E = {
      liftHeight: 0.08,
      liftPeakX: 0.4,
      liftEdgeDrop: 0.5,
      liftShutShare: 0.67,
      liftDepthFalloff: 0.5,
      coneTaper: -0.6,
      renderDepth: 3,
    },
    z = 0.05,
    F = 0.02,
    O = { clump: 1.6, seed: 41 },
    D = [],
    L = [],
    q = Math.min(Math.max(Math.trunc(a), 0), Math.max(M - 1, 0)),
    k = [],
    U = !0,
    I = 0,
    N = new g.Scene(),
    B = x.MONO_MAGAZINE_FRAME.top - x.MONO_MAGAZINE_FRAME.bottom,
    X = (x.MONO_MAGAZINE_FRAME.left + x.MONO_MAGAZINE_FRAME.right) / 2,
    Y = (x.MONO_MAGAZINE_FRAME.bottom + x.MONO_MAGAZINE_FRAME.top) / 2,
    G = new g.PerspectiveCamera(40, 2, 1.5, 4.5);
  (G.position.set(X, Y, 3.1), G.lookAt(X, Y, 0));
  let j = new g.WebGLRenderer({ antialias: !0, alpha: !0 });
  ((j.shadowMap.enabled = !0),
    (j.shadowMap.type = g.PCFShadowMap),
    (j.shadowMap.autoUpdate = !1),
    (j.shadowMap.needsUpdate = !0));
  let W = j.domElement;
  ((W.dataset.magazineLayer = ""),
    (e.dataset.magazineOpeningReady = "false"),
    e.appendChild(W),
    W.style.setProperty("-webkit-touch-callout", "none"),
    W.style.setProperty("-webkit-user-select", "none"),
    W.style.setProperty("user-select", "none"));
  let H = new g.Group();
  N.add(H);
  let V = new g.Group();
  N.add(V);
  let K = new g.HemisphereLight("#ffffff", "#a1aeaf", 1.7);
  V.add(K);
  let Z = new g.DirectionalLight("#ffffff", 2);
  (Z.position.set(0.689, -1.15, 2.15),
    (Z.castShadow = !0),
    Z.shadow.mapSize.set(2048, 2048),
    (Z.shadow.camera.left = -1.1),
    (Z.shadow.camera.right = 1.1),
    (Z.shadow.camera.top = 0.8),
    (Z.shadow.camera.bottom = -0.8),
    (Z.shadow.camera.near = 1),
    (Z.shadow.camera.far = 10),
    (Z.shadow.bias = -0.001),
    V.add(Z),
    V.add(Z.target));
  let Q = j.capabilities.getMaxAnisotropy(),
    $ = new g.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1);
  $.needsUpdate = !0;
  let J = new g.DataTexture(new Uint8Array([252, 252, 249, 255]), 1, 1);
  ((J.colorSpace = g.SRGBColorSpace), (J.needsUpdate = !0));
  let ee = `

    const float SHEET_ASPECT         = 1.377;
    const float NORMAL_EPSILON     = 0.02;

    const float PATTERN_SIZE       = 1.46;
    const float TEXTURE_COLOR      = 0.17;
    const float PATTERN_ROUGHNESS  = 0.33;
    const float PAPER_TRANSPARENCY = 0.3;
    const float INK_GLOSS          = 0.33;
    const float SHADOW_OFFSET_X    = -0.004;
    const float SHADOW_OPACITY     = 0.400;
`,
    et =
      "getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] )",
    ea = g.ShaderChunk.lights_fragment_begin.replace(
      et,
      `mix( 1.0, ${et}, SHADOW_OPACITY )`,
    );
  ea === g.ShaderChunk.lights_fragment_begin &&
    console.warn(
      "magazine shadowOpacity: three's lights chunk changed, shadows stay full",
    );
  let en = new g.PlaneGeometry(1, 1.377, 64, 88.128);
  function eo(e, t) {
    let a = 43758.5453 * Math.sin(12.9898 * e + 78.233 * t);
    return a - Math.floor(a);
  }
  en.deleteAttribute("normal");
  let ei = [];
  !(function () {
    let e = [];
    for (let t = 0; t < M - 1; t++)
      e.push(Math.pow(eo(t + 1, y.radiusSpacingSeed), y.radiusSpacingClump));
    let t = e.reduce((e, t) => e + t, 0),
      a = 1 / e.length;
    ei = [0];
    let n = 0;
    for (let o of e) {
      let e = t > 0 ? o / t : a;
      ((n += 0.1 * a + 0.9 * e), ei.push(n));
    }
  })();
  let er = [];
  function el(e) {
    let t = Math.min(Math.floor(e), M);
    if (t >= M) return M;
    let a = er[t];
    return a + (er[t + 1] - a) * (e - t);
  }
  let es = [];
  for (let e = 0; e < M; e++)
    es.push(Math.pow(eo(e + 1, O.seed + 0.5), O.clump));
  let ec = es.reduce((e, t) => e + t, 0);
  er = [0];
  let ep = 0;
  for (let e of es) ((ep += ec > 0 ? (e / ec) * M : 1), er.push(ep));
  function eu(e) {
    return Math.min(Math.max(e - (M - 1), 0), 1);
  }
  function ed(e) {
    return em((eu(e) - 0.6) / 0.4);
  }
  function em(e) {
    let t = Math.min(Math.max(e, 0), 1);
    return t * t * (3 - 2 * t);
  }
  function ef(e) {
    if (e <= 1e-6) return 1;
    let t = (t) => {
        let a = 1 - Math.min(t / E.liftPeakX, 1);
        return (
          e *
          Math.sqrt(1 - a * a) *
          (1 - E.liftEdgeDrop * em((t - E.liftPeakX) / (1 - E.liftPeakX)))
        );
      },
      a = 0;
    for (let e = 0; e < 6; e++) {
      let n = Math.pow(e / 6, 2),
        o = Math.pow((e + 1) / 6, 2);
      a += Math.hypot(o - n, t(o) - t(n));
    }
    return Math.max(2 - a, 0.5);
  }
  function eh(e) {
    let t = 1 / (1 + e * E.liftDepthFalloff);
    return E.liftHeight * t * (1 - 0.002 * e);
  }
  function eg() {
    let e = (e, t) => e + (t - e) * Math.random();
    return {
      tiltDeg: e(-R.tiltDeg, R.tiltDeg),
      flipTime: e(R.flipTimeMin, R.flipTimeMax),
    };
  }
  function ex(e) {
    for (let t = 0; t < L.length; t++) if (L[t].sheet === e) return !0;
    return !1;
  }
  function ev(e) {
    return ex(e) || (null !== eR && eR.sheet === e);
  }
  let eS = new g.Vector3(),
    eM = new g.Raycaster(),
    ew = new g.Vector2(),
    eb = new g.Plane(new g.Vector3(0, 0, 1), 0),
    eP = new g.Vector3();
  function eT(e, t) {
    let a = W.getBoundingClientRect();
    return (ew.set(
      ((e - a.left) / a.width) * 2 - 1,
      -(2 * ((t - a.top) / a.height)) + 1,
    ),
    eM.setFromCamera(ew, G),
    (eb.constant = -H.position.z),
    eM.ray.intersectPlane(eb, eP))
      ? { x: eP.x - H.position.x, y: eP.y - H.position.y }
      : null;
  }
  function eA(e, t, a) {
    !t ||
      ((e.grabXTarget = Math.min(Math.abs(t.x), 1)),
      (e.grabYTarget = Math.max(-1, Math.min(1, t.y / 0.6885))),
      a && ((e.grabX = e.grabXTarget), (e.grabY = e.grabYTarget)));
  }
  let e_ = null,
    eR = null;
  function ey(e, t = b.clickSlopPx) {
    if (!e_) return !1;
    let a = e.clientX - e_.x,
      n = e.clientY - e_.y;
    return a * a + n * n > t * t;
  }
  let eC = null;
  function eE() {
    eC && (clearTimeout(eC.timer), (eC = null));
  }
  function ez(e, t, a) {
    return e + (t - e) * Math.min(a / w.speedUpSheets, 1);
  }
  function eF() {
    let e, t;
    if (!eC) return;
    if (
      (eC.fired || ((eC.fired = !0), (eR = null)),
      !((t = D[(e = eC.forward) ? q : q - 1])
        ? (eN(t, e),
          ex(t) || (t.wobble = eg()),
          eA(t, eT(eC.x, eC.y), !0),
          eO(t, e, +!!e, ez(w.firstFlipTime, w.fastestFlipTime, eC.count)),
          !0)
        : eE()) || !eC)
    )
      return;
    let a =
      ez(w.firstFlipTime, w.fastestFlipTime, eC.count) *
      ez(w.firstGapShare, w.fastestGapShare, eC.count);
    (eC.count++, (eC.timer = setTimeout(eF, 1e3 * a)));
  }
  function eO(e, t, a, n = P) {
    var o;
    let i, r, l;
    (eD(t, a),
      (o = n * e.wobble.flipTime),
      (r = 1e3 * o * Math.max(0.2, Math.abs(a - (i = e.flipProgress)))),
      -1 !== (l = L.findIndex((t) => t.sheet === e)) && L.splice(l, 1),
      L.push({
        sheet: e,
        fromProgress: i,
        toProgress: a,
        startTime: performance.now(),
        duration: r,
      }));
  }
  function eD(e, t) {
    let a = 0;
    (e && 1 === t ? (a = 1) : e || 0 !== t || (a = -1),
      (q += a),
      eX(),
      (U = !0));
  }
  function eL(e) {
    var t, a;
    let n, o, i, r, l, s;
    if ((eE(), !eR)) {
      e_ = null;
      return;
    }
    let c = eR,
      p = ey(e);
    ((eR = null), (e_ = null));
    try {
      W.releasePointerCapture(e.pointerId);
    } catch {}
    if (!p && "pointercancel" !== e.type)
      return void eO(c.sheet, c.forward, +!!c.forward);
    let u =
      "pointercancel" === e.type
        ? +!c.forward
        : ((n =
            (c.forward ? c.progress - c.base : c.base - c.progress) >=
            b.commitProgress),
          +(c.forward === n));
    (eD(c.forward, u),
      (t = c.sheet),
      (a = 1 === u ? c.speed : -c.speed),
      (i = Math.max(Math.abs(u - (o = t.flipProgress)), 0.001)),
      (r = b.fallTime * t.wobble.flipTime * Math.pow(i, b.fallTimeExponent)),
      (l = g.MathUtils.clamp((a * r) / i, 0, 2)),
      -1 !== (s = L.findIndex((e) => e.sheet === t)) && L.splice(s, 1),
      L.push({
        sheet: t,
        fromProgress: o,
        toProgress: u,
        startTime: performance.now(),
        duration: 1e3 * r,
        launch: l,
      }));
  }
  (W.addEventListener(
    "pointermove",
    (e) => {
      if ((eC && ey(e, eC.fired ? w.moveSlopPx : void 0) && eE(), eR)) {
        let t = e.clientX - e_.x;
        ((eR.progress = g.MathUtils.clamp(
          eR.base - t / eR.rectWidth / b.turnFraction,
          0,
          1,
        )),
          eA(eR.sheet, eT(e.clientX, e.clientY), !1),
          (U = !0));
      }
    },
    { signal: i.signal },
  ),
    W.addEventListener(
      "pointerdown",
      (t) => {
        var a, n, o, i;
        let r, l, s, c;
        if (0 !== t.button) return;
        let u = (s =
          D[
            (l =
              t.clientX >=
              ((a = W.getBoundingClientRect()),
              (r = eS.copy(H.position).project(G).x),
              a.left + (0.5 * r + 0.5) * a.width))
              ? q
              : q - 1
          ])
          ? { sheet: s, forward: l }
          : null;
        if (!u || !p || "ready" !== e.dataset.magazineState) return;
        eN(u.sheet, u.forward);
        let d = u.sheet;
        (ex(d) || (d.wobble = eg()),
          eA(d, eT(t.clientX, t.clientY), !0),
          -1 !== (c = L.findIndex((e) => e.sheet === d)) && L.splice(c, 1),
          (e_ = { x: t.clientX, y: t.clientY }),
          (eR = {
            sheet: d,
            forward: u.forward,
            base: d.flipProgress,
            progress: d.flipProgress,
            rectWidth: W.getBoundingClientRect().width,
            speed: 0,
          }),
          (n = t.clientX),
          (o = t.clientY),
          (i = u.forward),
          eE(),
          (eC = {
            forward: i,
            x: n,
            y: o,
            count: 0,
            fired: !1,
            timer: setTimeout(eF, 1e3 * w.startTime),
          }),
          W.setPointerCapture(t.pointerId),
          (U = !0));
      },
      { signal: i.signal },
    ),
    W.addEventListener("pointerup", eL, { signal: i.signal }),
    W.addEventListener("pointercancel", eL, { signal: i.signal }));
  let eq = null;
  function ek(e) {
    let t = performance.now();
    for (let e = L.length - 1; e >= 0; e--) {
      let a = L[e];
      ((a.sheet.flipProgress = (function (e, t) {
        var a;
        let n,
          o,
          i = Math.min(Math.max((t - e.startTime) / e.duration, 0), 1),
          r =
            void 0 === e.launch
              ? 0.5 * (1 - Math.cos((1 - Math.pow(1 - i, T)) * Math.PI))
              : ((a = e.launch),
                ((o = (n = i * i) * i) - 2 * n + i) * a + (3 * n - 2 * o));
        return e.fromProgress + (e.toProgress - e.fromProgress) * r;
      })(a, t)),
        t >= a.startTime + a.duration && (L.splice(e, 1), (U = !0)));
    }
    if (M && !(q < M) && !L.length && !eR) {
      for (let e of ((q = 0), eX(), D)) e.flipProgress = 0;
      U = !0;
    }
    let a = I ? Math.min((e - I) / 1e3, 0.1) : 1 / 60;
    ((I = e),
      (function (e) {
        if (!eR) return;
        let t = eR.sheet,
          a = 1 - Math.pow(0.01, e / b.progressSmoothTime),
          n = (eR.progress - t.flipProgress) * a;
        ((t.flipProgress += n), (eR.speed = e > 0 ? n / e : 0));
      })(a));
    let n = L.length > 0 || null !== eR,
      i = 1 - Math.pow(0.001, a / _);
    for (let e = 0; e < D.length; e++) {
      let t = D[e];
      for (let e of ["grabX", "grabY"]) {
        let a = t[e + "Target"] - t[e];
        1e-4 > Math.abs(a)
          ? (t[e] = t[e + "Target"])
          : ((t[e] += a * i), (n = !0));
      }
      let a = t.index < q;
      if (!ev(t)) {
        let e = +!!a;
        t.flipProgress !== e && ((t.flipProgress = e), (U = !0));
      }
    }
    if (!n && !U) return;
    let r = 0;
    for (let e of D) r += e.flipProgress;
    for (let e of D)
      !(function (e, t) {
        var a, n, o;
        let i,
          r,
          l,
          s,
          c,
          p,
          u,
          d,
          m,
          f = e.sheetUniforms,
          h = e.flipProgress,
          g = el(t),
          x =
            ((i = Math.min(el(t) / Math.max(1, M - 1), 1)),
            ((y.spineOpenStartDeg +
              (y.spineOpenEndDeg - y.spineOpenStartDeg) *
                Math.pow(i, y.spineOpenPower)) *
              Math.PI) /
              180),
          v = ed(t),
          S = +(eu(t) >= 1),
          w = Math.max(
            ((a = e.index),
            (r = Math.min(
              Math.max(
                (g - (a + 1) - y.fallDelayPages) /
                  Math.max(y.fallDurationPages, 0.001),
                0,
              ),
              1,
            )) *
              r *
              (3 - 2 * r)),
            v,
          ),
          b =
            ((n = e.index),
            (l = ei[n]),
            (s = 1 - w),
            (c = y.coverTopRadius + (y.backTopRadius - y.coverTopRadius) * l),
            (p =
              y.coverBottomRadius +
              (y.backBottomRadius - y.coverBottomRadius) * l),
            (u = Math.pow(M ? Math.min(g / M, 1) : 0, y.coneEvenPower)),
            (d = (c + p) / 2),
            { top: (c + (d - c) * u) * s, bottom: (p + (d - p) * u) * s }),
          P = w >= 1,
          T = M ? el(t) / M : 0,
          _ = Math.max(0, M - t),
          R = P ? _ + e.index : Math.max(0, e.index - t),
          z = P
            ? Math.max(
                ((o = e.index),
                (m = Math.min(
                  Math.max(
                    g - (o + 1) - y.fallDelayPages - y.fallDurationPages,
                    0,
                  ),
                  1,
                )) *
                  m *
                  (3 - 2 * m)),
                S,
              )
            : (1 - h) * (1 - v),
          F = E.liftShutShare + (1 - E.liftShutShare) * T,
          O = eh(R) * (P ? E.liftShutShare : F),
          D = (O + (eh(e.index) * E.liftShutShare - O) * v) * z;
        f.uPileLift.value.set(E.liftPeakX, D, E.liftEdgeDrop);
        let L = F + (E.liftShutShare - F) * v,
          q = eh(0) * Math.max(L, 0.001);
        f.uConeTaper.value = (E.coneTaper * D) / q;
        let k = 1 - 0.5 * Math.max(e.grabY, 0) * e.grabX,
          U = e.grabY * (0.5 + 0.5 * e.grabX) * A + e.wobble.tiltDeg;
        if (P) {
          (f.uCone.value.set(0, 1, 0), (f.uTailBend.value = 0));
          let e = 2 * h * Math.PI;
          f.uFlipRotation.value.set(Math.cos(e), Math.sin(e));
        } else
          !(function (e, t, a, n, o) {
            let i = e.sheetUniforms,
              r = 2 * Math.PI * (1 - Math.pow(1 - t, C.midLeadPower)),
              l = 2 * Math.PI * t,
              s = Math.min(r, a),
              c = r - s,
              p = c / Math.max(2 * Math.PI - a, 0.001),
              u = 1 + (C.midRollScale - 1) * (1 - em(p)),
              d = Math.max(n.top * u, 1e-4),
              m = Math.max(-0.999, Math.min(0.999, (n.bottom * u - d) / 1.377)),
              f = (e) => {
                let t = Math.max(1e-5, d + (0.6885 - e) * m),
                  a = Math.max(-1.5, Math.min(1.5, m * c));
                return 1e-4 > Math.abs(m) ? t * c : (t * Math.tan(a)) / m;
              },
              h = o + (Math.atan2(f(-0.6885) - f(0.6885), 1.377) - o) * em(t),
              g = Math.cos(h),
              x = Math.sin(h),
              v = Math.max(
                f(0.6885) * g + 0.6885 * x,
                f(-0.6885) * g - 0.6885 * x,
              ),
              S = g + 0.6885 * Math.abs(x) - v,
              M = 1 - em(r / a);
            ((i.uPileLift.value.y *= M),
              (i.uConeTaper.value *= M),
              i.uCone.value.set(m, d, c),
              i.uTailCurl.value.set(g, x, v, Math.max(S, 0.001)));
            let w =
              1 -
              em((t - C.midBowFlatFrom) / (C.midBowFlatTo - C.midBowFlatFrom));
            ((i.uTailBend.value = Math.max(
              C.midBow * w * Math.min(l - r, 0),
              -r,
            )),
              i.uFlipRotation.value.set(Math.cos(s), Math.sin(s)));
          })(e, h, x, b, (U * k * Math.PI) / 180);
        let I = f.uPileLift.value.y,
          N = f.uConeTaper.value;
        f.uPileReach.value.set(ef(I * (1 - 0.5 * N)), ef(I * (1 + 0.5 * N)));
      })(e, r);
    let c = eu(r) > 0;
    for (let e of D)
      ((e.mesh.visible = c || e.index <= q + E.renderDepth || ev(e)),
        (e.mesh.renderOrder = e.index < q ? q - 1 - e.index : e.index - q));
    let p = em(M > 1 ? el(r) / (M - 1) : 0) * (1 - ed(r));
    ((H.position.x = F * p),
      (H.position.z = -z * p),
      (j.shadowMap.needsUpdate = !0),
      j.render(N, G),
      l && s && o.mark("first-useful-frame"),
      (U = !1));
  }
  function eU() {
    let e = W.clientWidth,
      t = W.clientHeight;
    if (!e || !t) return;
    ((G.fov = (2 * Math.atan(B / 2 / 3.1) * 180) / Math.PI),
      (G.aspect = e / t),
      G.updateProjectionMatrix());
    let a = Math.sqrt(15e6 / (e * t));
    (j.setPixelRatio(
      Math.min(1.2 * devicePixelRatio * (n.canvasResolutionScale ?? 1), 4, a),
    ),
      j.setSize(e, t, !1),
      (U = !0));
  }
  (W.addEventListener(
    "touchstart",
    (e) => {
      let t = e.touches[0];
      eq =
        1 === e.touches.length
          ? { x: t.clientX, y: t.clientY, claimed: !1 }
          : null;
    },
    { passive: !0, signal: i.signal },
  ),
    W.addEventListener(
      "touchmove",
      (e) => {
        if (!eq || 1 !== e.touches.length) return;
        if (eq.claimed) {
          e.cancelable && e.preventDefault();
          return;
        }
        if (!e.cancelable) {
          eq = null;
          return;
        }
        let t = e.touches[0],
          a = Math.abs(t.clientX - eq.x),
          n = Math.abs(t.clientY - eq.y);
        !(a < b.claimAfterPx) &&
          n < a * b.claimSteepness &&
          ((eq.claimed = !0), e.preventDefault());
      },
      { passive: !1, signal: i.signal },
    ),
    eU());
  let eI = new ResizeObserver(eU);
  function eN(e, a) {
    let n = (0, v.monoMagazineTurnSides)(e.index, t.length, a, !0);
    r.prioritize(n).catch(() => {});
  }
  function eB() {
    !p ||
      c ||
      j.getContext().isContextLost() ||
      ((U = !0),
      ek(performance.now()),
      (e.dataset.magazineState = "ready"),
      (e.dataset.magazineOpeningReady = "true"),
      n.onOpeningReady?.(W),
      m());
  }
  (eI.observe(W),
    W.addEventListener(
      "webglcontextlost",
      (t) => {
        (t.preventDefault(),
          (e.dataset.magazineState = "recovering"),
          eE(),
          (eR = null),
          (e_ = null),
          j.setAnimationLoop(null));
      },
      { signal: i.signal },
    ),
    W.addEventListener("webglcontextrestored", eB, { signal: i.signal }));
  for (let e = 0; e < M; e++) {
    let t = (function (e, t, a) {
      let n = {
          uPileLift: { value: new g.Vector3(1, 0, 0) },
          uPileReach: { value: new g.Vector2(1, 1) },
          uConeTaper: { value: 0 },
          uTailCurl: { value: new g.Vector4(1, 0, 1, 1) },
          uTailBend: { value: 0 },
          uCone: { value: new g.Vector3(0, 1, 0) },
          uFlipRotation: { value: new g.Vector2(1, 0) },
          uPatternTex: { value: $ },
          uBackMap: { value: t },
        },
        o = `
        ${ee}

        uniform vec3 uPileLift;
        uniform float uConeTaper;
        uniform vec2 uPileReach;
        uniform vec4 uTailCurl;
        uniform float uTailBend;
        uniform vec3 uCone;
        uniform vec2 uFlipRotation;
        uniform sampler2D uBackMap;
        varying vec2 vGrainUv;

        float _restLift(float x) {
            float liftT = 1.0 - min(x / uPileLift.x, 1.0);
            float fall = uPileLift.z * smoothstep(uPileLift.x, 1.0, x);
            return uPileLift.y * sqrt(1.0 - liftT * liftT) * (1.0 - fall);
        }

        vec3 _coneWrap(
            float flatSheetX,
            float flatSheetY,
            float spread,
            float topR,
            float maxWrap
        ) {
            float apexY   = SHEET_ASPECT * 0.5;
            float rowR    = max(1e-5, topR + (apexY - flatSheetY) * spread);
            float cosCone = sqrt(max(0.0, 1.0 - spread * spread));

            float slant = flatSheetX * spread / rowR;
            float lean  = abs(slant) < 1e-3 ? 1.0 - slant * slant / 3.0
                                            : atan(slant) / slant;
            float wrap  = (flatSheetX / rowR) * lean;

            vec3 rolledAt;
            if (wrap <= maxWrap) {
                float reachR = length(vec2(rowR, flatSheetX * spread));
                rolledAt = vec3(
                    reachR * sin(wrap),
                    flatSheetY + spread * (reachR * (1.0 - cos(wrap))
                        - flatSheetX * flatSheetX / (rowR + reachR)),
                    reachR * cosCone * (1.0 - cos(wrap))
                );
            } else {
                float capFan = spread * maxWrap;
                float capSin = abs(capFan) < 1e-3 ? 1.0 - capFan * capFan / 6.0
                                                  : sin(capFan) / capFan;
                float capVers = abs(capFan) < 1e-3
                    ? capFan * (0.5 - capFan * capFan / 24.0)
                    : (1.0 - cos(capFan)) / capFan;

                float along = flatSheetX * spread * sin(capFan) + rowR * cos(capFan);
                float past  = flatSheetX * cos(capFan) - rowR * maxWrap * capSin;
                float lift  = along * (1.0 - cos(maxWrap)) + past * sin(maxWrap);

                rolledAt = vec3(
                    along * sin(maxWrap) + past * cos(maxWrap),
                    flatSheetY + rowR * maxWrap * capVers
                        - flatSheetX * sin(capFan) + spread * lift,
                    cosCone * lift
                );
            }

            return rolledAt;
        }

        vec3 _sheetShape(float flatSheetX, float flatSheetY) {
            return _coneWrap(flatSheetX, flatSheetY, uCone.x, uCone.y, uCone.z);
        }

        vec3 _pileShape(float u, float t) {
            float row = t / SHEET_ASPECT;
            float taper = 1.0 + uConeTaper * row;
            float x = u * mix(uPileReach.x, uPileReach.y, row + 0.5);
            return vec3(x, t, _restLift(x) * taper);
        }

        vec3 _tailCurl(vec2 p) {
            float cosTilt = uTailCurl.x;
            float sinTilt = uTailCurl.y;
            float along = p.x * cosTilt + p.y * sinTilt;
            float across = -p.x * sinTilt + p.y * cosTilt;
            float beyond = max(0.0, along - uTailCurl.z);
            float angle = beyond / uTailCurl.w * uTailBend;
            float sinc = abs(angle) < 1e-4 ? 1.0 : sin(angle) / angle;
            float versine = abs(angle) < 1e-4 ? 0.0 : (1.0 - cos(angle)) / angle;
            float curledAlong = along - beyond + beyond * sinc;
            return vec3(
                curledAlong * cosTilt - across * sinTilt,
                curledAlong * sinTilt + across * cosTilt,
                beyond * versine
            );
        }

        vec3 _spunAboutSpine(vec3 shape, float pileLift) {
            float px = shape.x;
            float py = shape.y;
            float pz = shape.z + pileLift;

            float cosRot = uFlipRotation.x;
            float sinRot = uFlipRotation.y;

            float x = px * cosRot - pz * sinRot;
            float y = py;
            float z = px * sinRot + pz * cosRot;

            return vec3(x, y, z);
        }

        vec3 _computeSheetPosition(vec2 uv) {
            vec3 pile = _pileShape(uv.x, (uv.y - 0.5) * SHEET_ASPECT);
            // laid on the roll, the free part bowed back past it
            vec3 curled = _tailCurl(pile.xy);
            vec3 shape = _sheetShape(curled.x, curled.y);
            if (curled.z != 0.0) {
                vec3 alongX = _sheetShape(curled.x + 1e-3, curled.y) - shape;
                vec3 alongY = _sheetShape(curled.x, curled.y + 1e-3) - shape;
                shape += normalize(cross(alongX, alongY)) * curled.z;
            }
            return _spunAboutSpine(shape, pile.z);
        }

        vec3 _transformedSheetPosition;
    `,
        i = `
        float epsilon = NORMAL_EPSILON;
        vec2 du = vec2(epsilon, epsilon / SHEET_ASPECT);

        vec3 sheetP  = _computeSheetPosition(uv);
        vec3 sheetPx = _computeSheetPosition(uv + vec2(du.x, 0.0));
        vec3 sheetPy = _computeSheetPosition(uv + vec2(0.0, du.y));

        vec3 surfaceNormal = normalize(cross(sheetPx - sheetP, sheetPy - sheetP));

        _transformedSheetPosition = sheetP;
    `,
        r = `
        _transformedSheetPosition = _computeSheetPosition(uv);
    `,
        l = new g.MeshStandardMaterial({
          map: e,
          side: g.DoubleSide,
          metalness: 0.17,
          roughness: 0.5,
        });
      l.onBeforeCompile = (e) => {
        (Object.assign(e.uniforms, n),
          (e.vertexShader = o + e.vertexShader),
          (e.vertexShader = e.vertexShader.replace(
            "#include <beginnormal_vertex>",
            `
            #include <beginnormal_vertex>
            {
                ${i}
                objectNormal = surfaceNormal;
            }
            `,
          )),
          (e.vertexShader = e.vertexShader.replace(
            "#include <begin_vertex>",
            `vec3 transformed = _transformedSheetPosition;
            vGrainUv = uv;`,
          )),
          (e.fragmentShader = e.fragmentShader.replace(
            "#include <lights_fragment_begin>",
            ea,
          )),
          (e.fragmentShader = e.fragmentShader.replace(
            "#include <normal_fragment_begin>",
            `
            vec3 normal = normalize(vNormal);
            float faceDirection = normal.z >= 0.0 ? 1.0 : -1.0;
            normal *= faceDirection;
            vec3 nonPerturbedNormal = normal;
            `,
          )),
          (e.fragmentShader =
            ee +
            "uniform sampler2D uBackMap;\nuniform sampler2D uPatternTex;\nvarying vec2 vGrainUv;\n" +
            e.fragmentShader),
          (e.fragmentShader = e.fragmentShader.replace(
            "#include <map_fragment>",
            `
            float inkAmount = 0.0;
            #ifdef USE_MAP
                vec2 flippedUv = vec2(1.0 - vMapUv.x, vMapUv.y);
                vec4 frontColor = texture2D(map, vMapUv);
                vec4 backColor  = texture2D(uBackMap, flippedUv);
                vec4 faceColor  = gl_FrontFacing ? frontColor : backColor;
                vec4 otherColor = gl_FrontFacing ? backColor  : frontColor;
                vec4 sheetColor = faceColor;
                sheetColor.rgb *= mix(vec3(1.0), otherColor.rgb, PAPER_TRANSPARENCY);
                diffuseColor *= sheetColor;
                inkAmount = 1.0 - dot(faceColor.rgb, vec3(0.299, 0.587, 0.114));
            #endif
            `,
          )),
          (e.fragmentShader = e.fragmentShader.replace(
            "#include <roughnessmap_fragment>",
            `
            #include <roughnessmap_fragment>
            roughnessFactor *= mix(1., 0., inkAmount * INK_GLOSS);
            float pattern = texture2D(uPatternTex, vGrainUv * PATTERN_SIZE * vec2(1.0, SHEET_ASPECT)).r;
            pattern = 2. * pow(pattern, 7.);
            roughnessFactor = clamp(mix(roughnessFactor, 1.0, clamp(pattern * PATTERN_ROUGHNESS, 0.0, 1.0)), 0.0, 1.0);
            `,
          )),
          (e.fragmentShader = e.fragmentShader.replace(
            "#include <opaque_fragment>",
            `
            #include <opaque_fragment>
            gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.), pattern * TEXTURE_COLOR);
            `,
          )));
      };
      let s = new g.MeshDepthMaterial({
        depthPacking: g.RGBADepthPacking,
        side: g.DoubleSide,
      });
      s.onBeforeCompile = (e) => {
        (Object.assign(e.uniforms, n),
          (e.vertexShader = o + e.vertexShader),
          (e.vertexShader = e.vertexShader.replace(
            "#include <begin_vertex>",
            `
            ${r}
            vec3 transformed = _transformedSheetPosition - vec3(SHADOW_OFFSET_X, 0., 0.);
            `,
          )));
      };
      let c = new g.Mesh(en, l);
      return (
        (c.customDepthMaterial = s),
        (c.castShadow = !0),
        (c.receiveShadow = !0),
        {
          mesh: c,
          sheetUniforms: n,
          flipProgress: +(a < q),
          index: a,
          grabX: 1,
          grabXTarget: 1,
          grabY: 0,
          grabYTarget: 0,
          wobble: { tiltDeg: 0, flipTime: 1 },
        }
      );
    })(J, J, e);
    (D.push(t), H.add(t.mesh));
  }
  function eX() {
    let e = (0, v.mobileMagazineWindow)(q, M, E.renderDepth);
    return (
      o.window(e),
      r?.setWindow(e),
      n.onChange?.({
        pageIndex: q,
        pageCount: M,
        ready: p,
        animating: L.length > 0 || eR !== null,
      }),
      e
    );
  }
  ((m = () => {
    d && p && !document.hidden && !j.getContext().isContextLost()
      ? ((I = 0), (U = !0), j.setAnimationLoop(ek))
      : j.setAnimationLoop(null);
  }),
    document.addEventListener("visibilitychange", m, { signal: i.signal }),
    (h = new IntersectionObserver(
      (e) => {
        ((d = e[e.length - 1].isIntersecting), m());
      },
      { rootMargin: "50% 0px" },
    )).observe(e),
    (e.dataset.magazineState = "preparing"),
    o.mark("scene-initialized"));
  let eY = eX();
  return (
    (r = (0, v.createMagazineLoader)({
      count: M,
      window: eY,
      load: (e, a) =>
        (0, v.loadMagazineImage)(
          t[e],
          a,
          () => o.mark("image-loaded", e),
          i.signal,
        ),
      attach: function (e, t) {
        if (c) return;
        let a = new g.Texture(t);
        ((a.colorSpace = g.SRGBColorSpace),
          (a.anisotropy = Q),
          (a.needsUpdate = !0));
        try {
          j.initTexture(a);
        } catch (e) {
          throw (a.dispose(), e);
        }
        (k[e]?.dispose(), (k[e] = a));
        let n = D[e];
        (n && ((n.mesh.material.map = a), (n.mesh.material.needsUpdate = !0)),
          (U = !0));
      },
      onEvent: o.mark,
      onProgress: (e) => {
        ((l = e.visible), o.progress(e), (U = !0));
      },
      onError: (e, t) => {
        (n.onPageError?.(`Page ${e + 1}: ${String(t)}`),
          console.warn(`sheet side ${e + 1} failed to load`, t));
      },
    })),
    Promise.all([
      new Promise((e) => {
        if (c) return e();
        new g.TextureLoader().load(
          n.grainUrl,
          (t) => {
            if (c) return (t.dispose(), e());
            for (let e of ((f = t),
            (t.wrapS = t.wrapT = g.RepeatWrapping),
            (t.anisotropy = Q),
            D))
              e.sheetUniforms.uPatternTex.value = t;
            (j.initTexture(t), (U = !0), e());
          },
          void 0,
          (t) => {
            (console.warn("magazine pattern failed to load", t), e());
          },
        );
      }).then(() => {
        ((s = !0), o.mark("grain-settled"), (U = !0));
      }),
      r.ensure(eY.visible),
    ])
      .then(() => {
        c || ((p = !0), eB());
      })
      .catch((t) => {
        c || ((e.dataset.magazineState = "error"), n.onLoadError?.(t));
      }),
    {
      destroy: () => {
        for (let e of ((c = !0),
        r.dispose(),
        eE(),
        i.abort(),
        eI.disconnect(),
        h?.disconnect(),
        j.setAnimationLoop(null),
        D))
          (e.mesh.geometry.dispose(),
            e.mesh.material.dispose(),
            e.mesh.customDepthMaterial.dispose());
        for (let e of k) e?.dispose();
        (f?.dispose(), $.dispose(), J.dispose(), j.dispose(), W.remove());
      },
      getState: () => ({
        pageIndex: q,
        pageCount: M,
        ready: p,
        animating: L.length > 0 || eR !== null,
      }),
      turn(forward) {
        if (!p || c || L.length || eR) return false;
        const sheet = D[forward ? q : q - 1];
        if (!sheet) return false;
        eE();
        eN(sheet, forward);
        sheet.wobble = eg();
        eO(sheet, forward, +!!forward);
        return true;
      },
      goToPage(index) {
        if (c || !p || !Number.isFinite(index)) return false;
        eE();
        eR = null;
        e_ = null;
        L.length = 0;
        q = Math.max(0, Math.min(M - 1, Math.trunc(index)));
        for (const sheet of D) sheet.flipProgress = +(sheet.index < q);
        U = true;
        eX();
        return true;
      },
    }
  );
}
