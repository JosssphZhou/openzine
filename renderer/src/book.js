/** Extracted from Paper Mono's delivered browser code, 2026-10-08.
 * Original shader and motion parameters retained. React wrapper removed.
 * Adaptations: configurable pages/grain/initial spread, controller, onChange.
 * See SOURCES.md for provenance. Original local names retained where unknown.
 */
import * as i from "../vendor/three.module.min.js";
import * as l from "./loader.js";
import * as s from "./performance.js";
export function mountBook(e, t, a = {}) {
  let n = (0, s.createMagazinePerformance)(e, "desktop"),
    r = new AbortController(),
    c = null,
    u = !1,
    d = !1,
    f = !1,
    m = !1,
    p = !1,
    g = () => {},
    h = null,
    v = null,
    x = Math.ceil(t.length / 2),
    S = {
      angleMaxDeg: 45,
      curlArc: 0.88,
      curlArcJitter: 0.2,
      curlAngleJitter: 0.3,
      curlTiltJitterDeg: 6,
      cornerRollMax: 2.3,
      directionSmoothTime: 0.4,
      settleEpsilon: 1e-4,
      curveSmoothTime: 0.5,
    },
    _ = { progress: 0.03, smoothTime: 2, gapToSheetAbove: 0.1 },
    w = {
      startTime: 0.22,
      firstFlipTime: 1.2,
      fastestFlipTime: 0.5,
      speedUpSheets: 20,
      firstGapShare: 0.15,
      fastestGapShare: 0.05,
      moveSlopPx: 40,
    },
    M = {
      turnFraction: 0.8,
      progressSmoothTime: 0.9,
      fallTime: 1,
      fallTimeExponent: 0.5,
      landingSpeed: 0.5,
      commitProgress: 0.2,
      clickSlopPx: 5,
    },
    P = { flipTime: 0.85, followArcGainMin: 1, followArcGainMax: 1.08 },
    T = [],
    b = [],
    A = Math.min(Math.max(0, a.initialSpread ?? 7), x),
    y = [],
    F = !0,
    I = 0,
    L = new i.Scene(),
    E = new i.PerspectiveCamera(40, 1.44753, 1.5, 4.5);
  (E.position.set(0, 0, 2.99), E.lookAt(0, 0, 0));
  let R = new i.WebGLRenderer({ antialias: !0, alpha: !0 });
  ((R.shadowMap.enabled = !0),
    (R.shadowMap.type = i.PCFShadowMap),
    (R.shadowMap.autoUpdate = !1),
    (R.shadowMap.needsUpdate = !0));
  let C = R.domElement;
  ((C.dataset.magazineLayer = ""),
    (e.dataset.magazineOpeningReady = "false"),
    e.appendChild(C));
  let D = document.createElement("div");
  ((D.dataset.magazineHitArea = ""),
    (D.style.cssText =
      "position:absolute;inset:0 0 0 50%;pointer-events:auto;touch-action:pan-y pinch-zoom"),
    e.appendChild(D),
    e.style.setProperty("-webkit-touch-callout", "none"),
    e.style.setProperty("-webkit-user-select", "none"),
    e.style.setProperty("user-select", "none"));
  let z = new i.Group();
  L.add(z);
  let k = new i.HemisphereLight("#ffffff", "#a1aeaf", 1.5);
  z.add(k);
  let N = new i.DirectionalLight("#ffffff", 2);
  (N.position.set(-3.5, 1.3, 4.1),
    (N.castShadow = !0),
    N.shadow.mapSize.set(2048, 2048),
    (N.shadow.camera.left = -0.8),
    (N.shadow.camera.right = 1),
    (N.shadow.camera.top = 0.85),
    (N.shadow.camera.bottom = -1.05),
    (N.shadow.camera.near = 1.5),
    (N.shadow.camera.far = 6.6),
    (N.shadow.bias = -0.001),
    z.add(N),
    z.add(N.target));
  let U = new i.PlaneGeometry(6.25, 6.25),
    O = new i.ShadowMaterial({ opacity: 0.15 }),
    X = new i.Mesh(U, O);
  ((X.position.z = -1e-5), (X.receiveShadow = !0), L.add(X));
  let q = R.capabilities.getMaxAnisotropy(),
    B = new i.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1);
  B.needsUpdate = !0;
  let G = new i.DataTexture(new Uint8Array([252, 252, 249, 255]), 1, 1);
  ((G.colorSpace = i.SRGBColorSpace), (G.needsUpdate = !0));
  let j = `

    const float SHEET_ASPECT         = 1.377;
    const float NORMAL_EPSILON     = 0.03;

    const float LIFT_MAX_X         = 0.14;
    const float LIFT_MAX_Z         = 0.04;
    const float LIFT_DIP_X         = 0.58;
    const float LIFT_DIP_Z         = 0.035;
    const float LIFT_MID_X         = 0.72;
    const float LIFT_MID_Z         = 0.04;
    const float LIFT_EDGE_Z        = 0.03;

    const float DEFORM             = 0.13;
    const float DEFORM_SCALE       = 1.2;
    const float DEFORM_SEED        = 46.0;

    const float PATTERN_SIZE       = 1.46;
    const float TEXTURE_COLOR      = 0.17;
    const float PATTERN_ROUGHNESS  = 0.33;
    const float PAPER_TRANSPARENCY = 0.04;
    const float INK_GLOSS          = 0.33;
    const float SHADOW_OFFSET_X    = 0.004;
`,
    H = `
    float _hash(vec2 point) { return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453); }
    float _valueNoise(vec2 point) {
        vec2 cell = floor(point), fr = fract(point), blend = smoothstep(0.0, 1.0, fr);
        return mix(mix(_hash(cell), _hash(cell + vec2(1,0)), blend.x),
                   mix(_hash(cell + vec2(0,1)), _hash(cell + vec2(1,1)), blend.x), blend.y);
    }
    float _fbmNoise(vec2 point) {
        float value = 0.0, amplitude = 0.5;
        for (int octave = 0; octave < 3; octave++) { value += amplitude * _valueNoise(point); amplitude *= 0.5; point *= 2.0; }
        return value;
    }
    float _rawNoise(vec2 uv) {
        float flatSheetX = uv.x;
        float flatSheetY = (uv.y - 0.5) * SHEET_ASPECT;
        vec2 seedOffset = vec2(DEFORM_SEED * 13.37, DEFORM_SEED * 7.77);
        return _fbmNoise(vec2(flatSheetX, flatSheetY) / DEFORM_SCALE + seedOffset);
    }
`;
  function W(e, t, a) {
    let n = e.getAttribute("aNoise"),
      o = n ? n.array : new Float32Array(3 * t);
    for (let e = 0; e < t; e++) a(e, o);
    return (
      n
        ? (n.needsUpdate = !0)
        : e.setAttribute("aNoise", new i.BufferAttribute(o, 3)),
      e
    );
  }
  function Z(e, t) {
    return W(e, t, (e, t) => {
      t[3 * e] = t[3 * e + 1] = t[3 * e + 2] = 0.5;
    });
  }
  let Y = (function (e) {
    let t = e.attributes.uv.count,
      a = Math.ceil(t / 512);
    if (!R.getContext().getExtension("EXT_color_buffer_float")) return Z(e, t);
    let n = new Float32Array(t);
    for (let e = 0; e < t; e++) n[e] = e;
    let o = new i.BufferGeometry();
    (o.setAttribute(
      "position",
      new i.BufferAttribute(e.attributes.position.array, 3),
    ),
      o.setAttribute("uv", new i.BufferAttribute(e.attributes.uv.array, 2)),
      o.setAttribute("aIndex", new i.BufferAttribute(n, 1)));
    let r = new i.ShaderMaterial({
        uniforms: { uTargetSize: { value: new i.Vector2(512, a) } },
        vertexShader: `
            attribute float aIndex;
            uniform vec2 uTargetSize;
            varying vec2 vBakeUv;
            void main() {
                float px = mod(aIndex, uTargetSize.x);
                float py = floor(aIndex / uTargetSize.x);
                gl_Position = vec4((vec2(px, py) + 0.5) / uTargetSize * 2.0 - 1.0, 0.0, 1.0);
                gl_PointSize = 1.0;
                vBakeUv = uv;
            }
        `,
        fragmentShader: `
            precision highp float;
            varying vec2 vBakeUv;
            ${j}
            ${H}
            void main() {
                vec2 du = vec2(NORMAL_EPSILON, NORMAL_EPSILON / SHEET_ASPECT);
                gl_FragColor = vec4(
                    _rawNoise(vBakeUv),
                    _rawNoise(vBakeUv + vec2(du.x, 0.0)),
                    _rawNoise(vBakeUv + vec2(0.0, du.y)),
                    1.0);
            }
        `,
      }),
      l = new i.Points(o, r);
    l.frustumCulled = !1;
    let s = new i.Scene().add(l),
      c = new i.WebGLRenderTarget(512, a, {
        type: i.FloatType,
        minFilter: i.NearestFilter,
        magFilter: i.NearestFilter,
        depthBuffer: !1,
        stencilBuffer: !1,
      }),
      u = R.getRenderTarget();
    (R.setRenderTarget(c), R.render(s, new i.Camera()));
    let d = new Float32Array(512 * a * 4);
    (R.readRenderTargetPixels(c, 0, 0, 512, a, d),
      R.setRenderTarget(u),
      c.dispose(),
      r.dispose(),
      o.dispose());
    let f = !0;
    for (let e = 0; e < 4 * Math.min(t, 64) && f; e++) 0 !== d[e] && (f = !1);
    return f
      ? (console.warn(
          "[magazine] float readback came back empty — rendering sheets unwrinkled",
        ),
        Z(e, t))
      : W(e, t, (e, t) => {
          ((t[3 * e] = d[4 * e]),
            (t[3 * e + 1] = d[4 * e + 1]),
            (t[3 * e + 2] = d[4 * e + 2]));
        });
  })(new i.PlaneGeometry(1, 1.377, 64, 88.128));
  function V(e, t) {
    return (
      0.31 + 0.69 * (x > 1 ? (e + (x - 1 - 2 * e) * (1 - t)) / (x - 1) : 1)
    );
  }
  function $(e) {
    for (let t = 0; t < b.length; t++) if (b[t].sheetIndex === e) return !0;
    return !1;
  }
  Y.deleteAttribute("normal");
  let J = new i.Raycaster(),
    K = new i.Vector2(),
    Q = new i.Plane(new i.Vector3(0, 0, 1), 0),
    ee = new i.Vector3();
  function et(e) {
    let t = (Math.abs(e) * Math.PI) / 180,
      a = 1 - 0.6885 * Math.sin(t),
      n = Math.cos(t) / a;
    return S.cornerRollMax / (Math.PI * n);
  }
  let ea = -1;
  function en(e, t, a) {
    let n,
      o = T[a].wobble,
      r =
        ((n = C.getBoundingClientRect()),
        (K.set(
          ((e - n.left) / n.width) * 2 - 1,
          -(2 * ((t - n.top) / n.height)) + 1,
        ),
        J.setFromCamera(K, E),
        J.ray.intersectPlane(Q, ee))
          ? {
              angle: Math.atan2(ee.y, ee.x),
              distanceFromSpine: Math.hypot(ee.x, ee.y),
            }
          : null),
      l = (function (e) {
        let t = T[ea];
        if (t && ea !== e && $(ea))
          return (t.direction > 0 ? t.flipProgress > 0.5 : t.flipProgress < 0.5)
            ? void 0
            : t.curveTarget;
      })(a),
      s = 0;
    if (r) {
      let e = (180 * r.angle) / Math.PI;
      (e > 90 && (e = 180 - e), e < -90 && (e = -180 - e));
      let t = 1 - o.angle * S.curlAngleJitter;
      s = i.MathUtils.clamp(
        -(e / 90) * S.angleMaxDeg * r.distanceFromSpine * t +
          o.tilt * S.curlTiltJitterDeg,
        -S.angleMaxDeg,
        S.angleMaxDeg,
      );
    }
    let c = et(s);
    if (!l) {
      let e = 1 - o.arc * S.curlArcJitter;
      return { curlArc: Math.min(S.curlArc * e, c), curlAngleDeg: s };
    }
    s = i.MathUtils.clamp(
      s,
      Math.min(0, l.curlAngleDeg),
      Math.max(0, l.curlAngleDeg),
    );
    let u = i.MathUtils.lerp(P.followArcGainMin, P.followArcGainMax, o.arc);
    return {
      curlArc: i.MathUtils.clamp(l.curlArc * u, l.curlArc, et(s)),
      curlAngleDeg: s,
    };
  }
  function eo(e) {
    let t = C.getBoundingClientRect(),
      a = e - t.left >= t.width / 2;
    return (a ? A >= x : A <= 0)
      ? null
      : { sheetIndex: a ? A : A - 1, forward: a };
  }
  let er = 0,
    ei = 0,
    el = !1,
    es = -1,
    ec = null,
    eu = null,
    ed = "";
  function ef(e, t = M.clickSlopPx) {
    return ec && (e.clientX - ec.x) ** 2 + (e.clientY - ec.y) ** 2 > t * t;
  }
  let em = null;
  function ep() {
    em && (clearTimeout(em.timer), (em = null));
  }
  function eg(e, t, a) {
    return e + (t - e) * Math.min(a / w.speedUpSheets, 1);
  }
  function eh() {
    if (!em) return;
    em.fired || ((em.fired = !0), (eu = null));
    let e =
      eg(w.firstFlipTime, w.fastestFlipTime, em.count) *
      eg(w.firstGapShare, w.fastestGapShare, em.count);
    (function () {
      let e = em.forward;
      if (e ? A >= x : A <= 0) return (ep(), !1);
      let t = e ? A : A - 1,
        a = T[t];
      eb(t, e);
      let n = 0 === em.count ? a.curveTarget : en(em.x, em.y, t);
      return (
        ev(a, n, !0),
        (a.direction = e ? 1 : -1),
        e_(t, e, +!!e, eg(w.firstFlipTime, w.fastestFlipTime, em.count)),
        !0
      );
    })() && (em.count++, (em.timer = setTimeout(eh, 1e3 * e)));
  }
  function ev(e, t, a) {
    ((e.curveTarget.curlArc = t.curlArc),
      (e.curveTarget.curlAngleDeg = t.curlAngleDeg),
      a &&
        ((e.curve.curlArc = t.curlArc),
        (e.curve.curlAngleDeg = t.curlAngleDeg)));
  }
  let ex = ["curlArc", "curlAngleDeg"];
  function eS(e, t) {
    ((ea = e),
      (T[e].wobble = {
        arc: Math.random(),
        angle: Math.random(),
        tilt: 2 * Math.random() - 1,
      }),
      (A = 1 === t ? e + 1 : e),
      ey(),
      (F = !0));
  }
  function e_(e, t, a, n = P.flipTime) {
    let o, r, i;
    (eS(e, a),
      (r = 1e3 * n * Math.max(0.2, Math.abs(a - (o = T[e].flipProgress)))),
      -1 !== (i = b.findIndex((t) => t.sheetIndex === e)) && b.splice(i, 1),
      b.push({
        sheetIndex: e,
        fromProgress: o,
        toProgress: a,
        direction: t ? 1 : -1,
        startTime: performance.now() + 0,
        duration: r,
      }));
  }
  function ew(e) {
    var t, a, n;
    let o, r, l, s, c;
    if ((ep(), !eu)) {
      ec = null;
      return;
    }
    let u = eu,
      d = ef(e);
    ((eu = null), (ec = null));
    try {
      D.releasePointerCapture(e.pointerId);
    } catch {}
    if (!d) return void e_(u.sheetIndex, u.forward, +!!u.forward);
    let f =
      ((o =
        (u.forward ? u.progress - u.base : u.base - u.progress) >=
        M.commitProgress),
      +(u.forward === o));
    (eS(u.sheetIndex, f),
      (t = u.sheetIndex),
      (a = u.forward ? 1 : -1),
      (n = 1 === f ? u.speed : -u.speed),
      (l = Math.max(Math.abs(f - (r = T[t].flipProgress)), 0.001)),
      (s = M.fallTime * Math.pow(l, M.fallTimeExponent)),
      -1 !== (c = b.findIndex((e) => e.sheetIndex === t)) && b.splice(c, 1),
      b.push({
        sheetIndex: t,
        fromProgress: r,
        toProgress: f,
        direction: a,
        startTime: performance.now(),
        duration: 1e3 * s,
        launch: i.MathUtils.clamp((n * s) / l, 0, 2),
      }));
  }
  function eM(e) {
    let t,
      o,
      r,
      i,
      l = performance.now();
    for (let e = b.length - 1; e >= 0; e--) {
      let t = b[e],
        a = T[t.sheetIndex];
      ((a.flipProgress = (function (e, t) {
        var a, n;
        let o,
          r,
          i = Math.min(Math.max((t - e.startTime) / e.duration, 0), 1),
          l =
            void 0 === e.launch
              ? 0.5 * (1 - Math.cos(i * Math.PI))
              : ((a = e.launch),
                (n = M.landingSpeed),
                ((r = (o = i * i) * i) - 2 * o + i) * a +
                  (3 * o - 2 * r) +
                  (r - o) * n);
        return e.fromProgress + (e.toProgress - e.fromProgress) * l;
      })(t, l)),
        (a.direction = t.direction),
        l >= t.startTime + t.duration && (b.splice(e, 1), (F = !0)));
    }
    let s = I ? Math.min((e - I) / 1e3, 0.1) : 1 / 60;
    I = e;
    let c = 1 - Math.pow(0.001, s / S.directionSmoothTime);
    !(function (e) {
      if (!eu) return;
      let t = T[eu.sheetIndex],
        a = 1 - Math.pow(0.01, e / M.progressSmoothTime),
        n = (eu.progress - t.flipProgress) * a;
      ((t.flipProgress += n),
        (eu.speed = e > 0 ? n / e : 0),
        ev(t, eu.targetCurve, !1));
    })(s);
    let f = b.length > 0 || null !== eu,
      p = 1 - Math.pow(0.001, s / _.smoothTime),
      g = 1 - Math.pow(0.001, s / S.curveSmoothTime),
      h = !el || eu || em ? null : eo(er),
      v = es;
    -1 !== (es = h && m && !$(h.sheetIndex) ? h.sheetIndex : -1) &&
      ev(T[es], en(er, ei, es), es !== v);
    for (let e = 0; e < T.length; e++) {
      let t = T[e];
      if (!$(e) && !(eu && eu.sheetIndex === e)) {
        let a = e === es,
          n = e >= A ? 0 : 1,
          o = a ? (0 === n ? _.progress : 1 - _.progress) : n,
          r = o - t.flipProgress;
        Math.abs(r) < S.settleEpsilon
          ? t.flipProgress !== o && ((t.flipProgress = o), (F = !0))
          : ((t.flipProgress += r * p), (f = !0));
        let i = T[0 === n ? e - 1 : e + 1];
        if (i) {
          let e =
            0 === n
              ? Math.min(
                  t.flipProgress,
                  Math.max(0, i.flipProgress - _.gapToSheetAbove),
                )
              : Math.max(
                  t.flipProgress,
                  Math.min(1, i.flipProgress + _.gapToSheetAbove),
                );
          e !== t.flipProgress && ((t.flipProgress = e), (f = !0));
        }
        ((t.direction = 1 === n && t.flipProgress !== n ? -1 : 1),
          (t.directionSmooth = t.direction));
      }
      let a = t.stackLiftBase + t.stackLiftSpan * t.flipProgress,
        n = t.direction - t.directionSmooth;
      (Math.abs(n) < S.settleEpsilon
        ? t.directionSmooth !== t.direction &&
          ((t.directionSmooth = t.direction), (F = !0))
        : ((t.directionSmooth += n * c), (f = !0)),
        (function (e, t) {
          let a = S.settleEpsilon,
            n = !1;
          for (let o of ex) {
            let r = e.curveTarget[o] - e.curve[o];
            Math.abs(r) < a
              ? (e.curve[o] = e.curveTarget[o])
              : ((e.curve[o] += r * t), (n = !0));
          }
          return n;
        })(t, g) && (f = !0),
        (function (e, t) {
          let a = e.sheetUniforms,
            n = e.curve,
            o = e.directionSmooth,
            r = e.flipProgress * Math.PI,
            i = Math.sin(e.flipProgress * Math.PI) * Math.PI * n.curlArc,
            l = (n.curlAngleDeg * Math.PI) / 180,
            s = Math.cos(l),
            c = Math.sin(l),
            u = 1 - 0.6885 * Math.sin(Math.abs(l)),
            d = 1 - u,
            f = 0.6885 * Math.sign(c),
            m = Math.max(0, s + c * f - d),
            p = (m / u) * i,
            g =
              r +
              0.5 * o * (m * (1e-4 > Math.abs(p) ? 0 : (1 - Math.cos(p)) / p));
          ((a.uFlipProgress.value = e.flipProgress),
            (a.uWrinkleSide.value = -Math.cos(r)),
            (a.uDirection.value = o),
            (a.uStackLift.value = t),
            (a.uBendAngle.value = i),
            a.uFold.value.set(s, c),
            a.uCurl.value.set(d, u),
            a.uFlipRotation.value.set(Math.cos(g), Math.sin(g)));
        })(t, a));
    }
    if (
      ((t = b.length > 0 || null !== eu || null !== em),
      (o = 0 === A && !t),
      (r = A === x && !t),
      (i = o ? "0 0 0 50%" : r ? "0 50% 0 0" : "0") !== ed &&
        ((ed = i), (D.style.inset = i)),
      f || F)
    ) {
      for (let e = 0; e < T.length; e++) {
        let t = T[e].mesh,
          a = e >= A ? e - A : A - 1 - e,
          n = a < 3 || $(e) || (null !== eu && eu.sheetIndex === e);
        (t.castShadow !== n && (t.castShadow = n), (t.renderOrder = a));
      }
      ((R.shadowMap.needsUpdate = !0),
        a.onBeforeRender?.(),
        R.render(L, E),
        u && d && (n.mark("first-useful-frame"), a.onRender?.(C)),
        (F = !1));
    }
  }
  function eP() {
    let e = C.clientWidth,
      t = C.clientHeight;
    if (!e || !t) return;
    ((E.aspect = e / t), E.updateProjectionMatrix());
    let n = Math.sqrt(15e6 / (e * t));
    (R.setPixelRatio(
      Math.min(devicePixelRatio * (a.canvasResolutionScale ?? 1), 4, n),
    ),
      R.setSize(e, t, !1),
      a.onResolution?.({
        width: C.width,
        height: C.height,
        pixelRatio: R.getPixelRatio(),
      }),
      (F = !0));
  }
  (D.addEventListener(
    "pointermove",
    (e) => {
      if ((em && ef(e, em.fired ? w.moveSlopPx : void 0) && ep(), eu)) {
        let t = e.clientX - ec.x;
        ((eu.progress = i.MathUtils.clamp(
          eu.base - t / eu.rectWidth / M.turnFraction,
          0,
          1,
        )),
          (eu.targetCurve = en(e.clientX, e.clientY, eu.sheetIndex)),
          (F = !0));
        return;
      }
      ((er = e.clientX), (ei = e.clientY), (el = !0), (F = !0));
    },
    { signal: r.signal },
  ),
    D.addEventListener(
      "pointerleave",
      () => {
        ((el = !1), (F = !0));
      },
      { signal: r.signal },
    ),
    D.addEventListener(
      "pointerdown",
      (t) => {
        var a, n, o, r;
        let i;
        if (0 !== t.button) return;
        let l = eo(t.clientX);
        if (!l || !m || "ready" !== e.dataset.magazineState) return;
        eb(l.sheetIndex, l.forward);
        let s = T[l.sheetIndex];
        ($(l.sheetIndex) || ev(s, en(t.clientX, t.clientY, l.sheetIndex), !0),
          (a = l.sheetIndex),
          -1 !== (i = b.findIndex((e) => e.sheetIndex === a)) && b.splice(i, 1),
          (ec = { x: t.clientX, y: t.clientY }),
          (eu = {
            sheetIndex: l.sheetIndex,
            forward: l.forward,
            base: s.flipProgress,
            progress: s.flipProgress,
            rectWidth: C.getBoundingClientRect().width,
            targetCurve: { ...s.curveTarget },
            speed: 0,
          }),
          (s.direction = l.forward ? 1 : -1),
          (n = t.clientX),
          (o = t.clientY),
          (r = l.forward),
          ep(),
          (em = {
            forward: r,
            x: n,
            y: o,
            count: 0,
            fired: !1,
            timer: setTimeout(eh, 1e3 * w.startTime),
          }),
          D.setPointerCapture(t.pointerId),
          (F = !0));
      },
      { signal: r.signal },
    ),
    D.addEventListener("pointerup", ew, { signal: r.signal }),
    D.addEventListener("pointercancel", ew, { signal: r.signal }),
    eP());
  let eT = new ResizeObserver(eP);
  function eb(e, a) {
    let n = (0, l.monoMagazineTurnSides)(2 * e, t.length, a, !1);
    c.prioritize(n).catch(() => {});
  }
  function eA() {
    !m ||
      f ||
      R.getContext().isContextLost() ||
      ((F = !0),
      eM(performance.now()),
      (e.dataset.magazineState = "ready"),
      (e.dataset.magazineOpeningReady = "true"),
      a.onOpeningReady?.(C),
      g());
  }
  (eT.observe(C),
    C.addEventListener(
      "webglcontextlost",
      (t) => {
        (t.preventDefault(),
          (e.dataset.magazineState = "recovering"),
          ep(),
          (eu = null),
          (ec = null),
          R.setAnimationLoop(null));
      },
      { signal: r.signal },
    ),
    C.addEventListener("webglcontextrestored", eA, { signal: r.signal }));
  for (let e = 0; e < x; e++) {
    let t = (function (e, t, n) {
      let o = {
          uDirection: { value: 1 },
          uStackLift: { value: 1 },
          uFlipProgress: { value: 0 },
          uWrinkleSide: { value: -1 },
          uBendAngle: { value: 0 },
          uFold: { value: new i.Vector2(1, 0) },
          uCurl: { value: new i.Vector2(0, 1) },
          uFlipRotation: { value: new i.Vector2(1, 0) },
          uPatternTex: { value: B },
          uBackMap: { value: t },
        },
        r = `
        ${j}

        uniform float uFlipProgress;
        uniform float uWrinkleSide;
        uniform float uBendAngle;
        uniform vec2 uFold;
        uniform vec2 uCurl;
        uniform vec2 uFlipRotation;
        uniform float uDirection;
        uniform float uStackLift;
        uniform sampler2D uBackMap;
        varying vec2 vGrainUv;

        attribute vec3 aNoise;

        const float PI      = 3.14159265;
        const float HALF_PI = 1.57079633;

        vec3 _computeSheetPosition(vec2 uv, float rawNoise) {
            float flatSheetX = uv.x;
            float flatSheetY = (uv.y - 0.5) * SHEET_ASPECT;

            float wrinkle = mix(rawNoise, 1.0 - rawNoise, uFlipProgress) - .5;
            wrinkle *= smoothstep(0.0, 0.35, uv.x);
            wrinkle *= DEFORM;
            wrinkle *= uStackLift;

            float restingLift;
            if (uv.x <= LIFT_MAX_X) {
                restingLift = LIFT_MAX_Z * sin(uv.x / LIFT_MAX_X * HALF_PI);
            } else if (uv.x <= LIFT_DIP_X) {
                restingLift = mix(LIFT_MAX_Z, LIFT_DIP_Z, smoothstep(LIFT_MAX_X, LIFT_DIP_X, uv.x));
            } else if (uv.x <= LIFT_MID_X) {
                restingLift = mix(LIFT_DIP_Z, LIFT_MID_Z, smoothstep(LIFT_DIP_X, LIFT_MID_X, uv.x));
            } else {
                float t = (uv.x - LIFT_MID_X) / (1.0 - LIFT_MID_X);
                float edgeLift = LIFT_EDGE_Z;
                restingLift = mix(LIFT_MID_Z, edgeLift, 1.0 - cos(t * HALF_PI));
            }
            restingLift *= uStackLift;

            float cosFold = uFold.x;
            float sinFold = uFold.y;
            float localU =  flatSheetX * cosFold + flatSheetY * sinFold;
            float localV = -flatSheetX * sinFold + flatSheetY * cosFold;

            float curlStart  = uCurl.x;
            float curlLength = uCurl.y;

            float beyondCurl = max(0.0, localU - curlStart);
            float curlNorm   = beyondCurl / curlLength;

            float cylinderAngle  = curlNorm * uBendAngle;
            float sinc    = abs(cylinderAngle) < 1e-4 ? 1.0 : sin(cylinderAngle) / cylinderAngle;
            float versine = abs(cylinderAngle) < 1e-4 ? 0.0 : (1.0 - cos(cylinderAngle)) / cylinderAngle;
            float curvedLocal    = beyondCurl * sinc;
            float curvedZ        = -uDirection * beyondCurl * versine;
            float curledU        = localU - beyondCurl + curvedLocal;

            float px = curledU * cosFold - localV * sinFold;
            float py = curledU * sinFold + localV * cosFold;
            float pz = curvedZ;

            float cosRot = uFlipRotation.x;
            float sinRot = uFlipRotation.y;

            float x = px * cosRot - pz * sinRot;
            float y = py;
            float z = px * sinRot + pz * cosRot;

            z += restingLift;
            vec3 p = vec3(x, y, z);

            p.z += uWrinkleSide * wrinkle;

            return p;
        }

        vec3 _transformedSheetPosition;
    `,
        l = `
        float epsilon = NORMAL_EPSILON;
        vec2 du = vec2(epsilon, epsilon / SHEET_ASPECT);

        vec3 sheetP  = _computeSheetPosition(uv,                       aNoise.x);
        vec3 sheetPx = _computeSheetPosition(uv + vec2(du.x, 0.0),      aNoise.y);
        vec3 sheetPy = _computeSheetPosition(uv + vec2(0.0, du.y),      aNoise.z);

        vec3 surfaceNormal = normalize(cross(sheetPx - sheetP, sheetPy - sheetP));

        _transformedSheetPosition = sheetP;
    `,
        s = `
        _transformedSheetPosition = _computeSheetPosition(uv, aNoise.x);
    `,
        c = new i.MeshStandardMaterial({
          map: e,
          side: i.DoubleSide,
          metalness: 0.17,
          roughness: 0.5,
        });
      ((c.onBeforeCompile = (e) => {
        (Object.assign(e.uniforms, o),
          (e.vertexShader = r + e.vertexShader),
          (e.vertexShader = e.vertexShader.replace(
            "#include <beginnormal_vertex>",
            `
            #include <beginnormal_vertex>
            {
                ${l}
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
            "#include <normal_fragment_begin>",
            `
            vec3 normal = normalize(vNormal);
            float faceDirection = normal.z >= 0.0 ? 1.0 : -1.0;
            normal *= faceDirection;
            vec3 nonPerturbedNormal = normal;
            `,
          )),
          (e.fragmentShader =
            j +
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
      }),
        a.onSheetMaterial?.(c, n, R.capabilities.isWebGL2));
      let u = new i.MeshDepthMaterial({
        depthPacking: i.RGBADepthPacking,
        side: i.DoubleSide,
      });
      u.onBeforeCompile = (e) => {
        (Object.assign(e.uniforms, o),
          (e.vertexShader = r + e.vertexShader),
          (e.vertexShader = e.vertexShader.replace(
            "#include <begin_vertex>",
            `
            ${s}
            vec3 transformed = _transformedSheetPosition - vec3(SHADOW_OFFSET_X, 0., 0.);
            `,
          )));
      };
      let d = new i.Mesh(Y, c);
      return (
        (d.customDepthMaterial = u),
        (d.castShadow = !0),
        (d.receiveShadow = !0),
        {
          mesh: d,
          sheetUniforms: o,
          frontTex: e,
          flipProgress: +(n < A),
          direction: 1,
          directionSmooth: 1,
          curve: { curlArc: 0, curlAngleDeg: 0 },
          curveTarget: { curlArc: 0, curlAngleDeg: 0 },
          wobble: { arc: 0.5, angle: 0.5, tilt: 0 },
          stackLiftBase: V(n, 0),
          stackLiftSpan: V(n, 1) - V(n, 0),
        }
      );
    })(G, G, e);
    (T.push(t), L.add(t.mesh));
  }
  function ey() {
    let e = (0, l.desktopMagazineWindow)(A, t.length);
    return (
      n.window(e),
      c?.setWindow(e),
      a.onChange?.({
        spread: A,
        totalSpreads: x,
        pageCount: t.length,
        visiblePages: e.visible.map((index) => index + 1),
      }),
      e
    );
  }
  ((g = () => {
    p && m && !document.hidden && !R.getContext().isContextLost()
      ? ((I = 0), (F = !0), R.setAnimationLoop(eM))
      : R.setAnimationLoop(null);
  }),
    document.addEventListener("visibilitychange", g, { signal: r.signal }),
    (v = new IntersectionObserver(
      (e) => {
        ((p = e[e.length - 1].isIntersecting), g());
      },
      { rootMargin: "50% 0px" },
    )).observe(e),
    (e.dataset.magazineState = "preparing"),
    n.mark("scene-initialized"));
  let eF = ey();
  c = (0, l.createMagazineLoader)({
    count: t.length,
    window: eF,
    load: (e, a) =>
      (0, l.loadMagazineImage)(
        t[e],
        a,
        () => n.mark("image-loaded", e),
        r.signal,
      ),
    attach: function (e, t) {
      if (f) return;
      let n = new i.Texture(t);
      ((n.colorSpace = i.SRGBColorSpace),
        (n.anisotropy = q),
        a.onPageTexture?.(n, e),
        (n.needsUpdate = !0));
      try {
        R.initTexture(n);
      } catch (e) {
        throw (n.dispose(), e);
      }
      (y[e]?.dispose(), (y[e] = n));
      let o = T[e >> 1];
      (e % 2 == 0
        ? ((o.mesh.material.map = n), (o.mesh.material.needsUpdate = !0))
        : (o.sheetUniforms.uBackMap.value = n),
        (F = !0));
    },
    onEvent: n.mark,
    onProgress: (e) => {
      ((u = e.visible), n.progress(e), (F = !0));
    },
    onError: (e, t) => {
      (a.onPageError?.(`Page ${e + 1}: ${String(t)}`),
        console.warn(`sheet side ${e + 1} failed to load`, t));
    },
  });
  let eI = new Promise((e) => {
    if (f) return e();
    new i.TextureLoader().load(
      a.grainUrl,
      (t) => {
        if (f) return (t.dispose(), e());
        for (let e of ((h = t),
        (t.wrapS = t.wrapT = i.RepeatWrapping),
        (t.anisotropy = q),
        T))
          e.sheetUniforms.uPatternTex.value = t;
        (R.initTexture(t), (F = !0), e());
      },
      void 0,
      (t) => {
        (console.warn("magazine pattern failed to load", t), e());
      },
    );
  }).then(() => {
    ((d = !0), n.mark("grain-settled"), (F = !0));
  });
  return (
    Promise.all([eI, c.ensure(eF.visible)])
      .then(() => {
        f || ((m = !0), eA());
      })
      .catch((t) => {
        f || ((e.dataset.magazineState = "error"), a.onLoadError?.(t));
      }),
    Promise.all([eI, c.done]).then(() => {
      f ||
        a.onReady?.(() => {
          f || ((F = !0), eM(performance.now()));
        });
    }),
    {
      destroy: () => {
        for (let e of ((f = !0),
        c.dispose(),
        ep(),
        r.abort(),
        eT.disconnect(),
        v?.disconnect(),
        R.setAnimationLoop(null),
        T))
          (e.mesh.geometry.dispose(),
            e.mesh.material.dispose(),
            e.mesh.customDepthMaterial.dispose());
        for (let e of y) e?.dispose();
        (h?.dispose(),
          B.dispose(),
          G.dispose(),
          U.dispose(),
          O.dispose(),
          R.dispose(),
          D.remove(),
          C.remove());
      },
      getState: () => ({
        spread: A,
        totalSpreads: x,
        pageCount: t.length,
        ready: m,
        animating: b.length > 0 || eu !== null,
        visiblePages: l
          .desktopMagazineWindow(A, t.length)
          .visible.map((index) => index + 1),
      }),
      turn(forward = true) {
        if (f || !m || eu || b.length || (forward ? A >= x : A <= 0))
          return false;
        ep();
        const index = forward ? A : A - 1;
        const rect = C.getBoundingClientRect();
        eb(index, forward);
        ev(
          T[index],
          en(
            rect.left + rect.width * (forward ? 0.8 : 0.2),
            rect.top + rect.height * 0.65,
            index,
          ),
          true,
        );
        T[index].direction = forward ? 1 : -1;
        e_(index, forward, Number(forward));
        return true;
      },
      goToSpread(index) {
        if (f || !m || !Number.isInteger(index) || index < 0 || index > x)
          return false;
        ep();
        eu = null;
        ec = null;
        el = false;
        b.length = 0;
        A = index;
        for (let index = 0; index < T.length; index++) {
          T[index].flipProgress = Number(index < A);
          T[index].curve = { curlArc: 0, curlAngleDeg: 0 };
          T[index].curveTarget = { curlArc: 0, curlAngleDeg: 0 };
        }
        ey();
        F = true;
        return true;
      },
    }
  );
}
