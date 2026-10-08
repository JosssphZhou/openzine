const aG = (start, end, count) =>
  Array.from({ length: Math.max(0, end - start) }, (_, i) => start + i).filter(
    (i) => i >= 0 && i < count,
  );
const ak = () => new Promise((resolve) => setTimeout(resolve, 0));
export const createMagazineLoader = function (e) {
  let t,
    i = new Set(),
    n = new Set(),
    r = e.count,
    a = e.window,
    s = !1,
    o = !1,
    l = e.window.visible,
    h = [],
    c = new Set(),
    u = new Promise((e) => {
      t = e;
    }),
    d = e.yieldTask ?? ak;
  function p() {
    for (let e of c)
      e.sides.some((e) => n.has(e))
        ? (c.delete(e), e.reject(Error("Magazine page failed to load")))
        : e.sides.every((e) => i.has(e)) && (c.delete(e), e.resolve());
    e.onProgress?.({
      visible: a.visible.every((e) => i.has(e)),
      nextTurn: a.nextTurn.every((e) => i.has(e)),
      all: i.size === e.count,
      settled: 0 === r,
      loaded: i.size,
      failed: n.size,
    });
  }
  let f = (e) =>
    a.visible.includes(e) ? "high" : a.priority.includes(e) ? "auto" : "low";
  async function m() {
    if (!o) {
      o = !0;
      try {
        for (; h.length;) {
          try {
            await d();
          } catch (t) {
            for (let i of h.splice(0)) (e.release?.(i.image), i.reject(t));
            break;
          }
          if (!h.length) break;
          let t =
              l
                .map((e) => h.findIndex((t) => t.index === e))
                .find((e) => e >= 0) ?? 0,
            n = h.splice(t, 1)[0];
          try {
            (e.onEvent?.("upload-start", n.index),
              e.attach(n.index, n.image),
              i.add(n.index),
              e.onEvent?.("upload-end", n.index),
              n.resolve());
          } catch (t) {
            (e.release?.(n.image), n.reject(t));
          }
        }
      } finally {
        o = !1;
      }
    }
  }
  async function g(i) {
    try {
      let t;
      e.onEvent?.("load-start", i);
      try {
        t = await e.load(i, f(i));
      } catch {
        if (s || (await d(), s)) return;
        t = await e.load(i, f(i));
      }
      if (s) return void e.release?.(t);
      (e.onEvent?.("decode-end", i),
        await new Promise((e, n) => {
          (h.push({ index: i, image: t, resolve: e, reject: n }), m());
        }));
    } catch (t) {
      s || (n.add(i), e.onError?.(i, t));
    } finally {
      (r--, !s && (p(), r || t()));
    }
  }
  return (
    queueMicrotask(() => {
      if (!s) {
        p();
        let i = { high: 0, auto: 1, low: 2 },
          n = Array.from({ length: e.count }, (e, t) => t);
        for (let e of (n.sort((e, t) => i[f(e)] - i[f(t)]), n)) g(e);
        r || t();
      }
    }),
    {
      done: u,
      prioritize(e) {
        return ((l = [...e]), this.ensure(e));
      },
      isReady: (e) => e.every((e) => i.has(e)),
      ensure: (t) =>
        s
          ? Promise.reject(new DOMException("Magazine disposed", "AbortError"))
          : t.some((t) => t < 0 || t >= e.count)
            ? Promise.reject(Error("Invalid magazine page index"))
            : new Promise((e, i) => {
                (c.add({ sides: t, resolve: e, reject: i }), p());
              }),
      setWindow(e) {
        ((a = e), s || p());
      },
      dispose() {
        for (let t of ((s = !0), h.splice(0)))
          (e.release?.(t.image), t.resolve());
        for (let e of c)
          e.reject(new DOMException("Magazine disposed", "AbortError"));
        (c.clear(), t());
      },
    }
  );
};
export const desktopMagazineWindow = function (e, t) {
  return {
    visible: aG(2 * e - 1, 2 * e + 1, t),
    nextTurn: aG(2 * e - 3, 2 * e + 3, t),
    priority: aG(2 * e - 3, 2 * e + 5, t),
  };
};
export const loadMagazineImage = function (e, t, i, n) {
  return new Promise((r, a) => {
    let s = new Image();
    ((s.decoding = "async"), (s.fetchPriority = t));
    let o = () => {
        (clearTimeout(h),
          (s.onload = s.onerror = null),
          n.removeEventListener("abort", l));
      },
      l = () => {
        (o(),
          s.removeAttribute("src"),
          a(new DOMException("Magazine disposed", "AbortError")));
      },
      h = setTimeout(() => {
        (o(), s.removeAttribute("src"), a(Error(`Image timed out: ${e}`)));
      }, 35e3);
    ((s.onload = async () => {
      i();
      try {
        (await s.decode(), o(), r(s));
      } catch (e) {
        (o(), a(e));
      }
    }),
      (s.onerror = () => {
        (o(), a(Error(`Image failed: ${e}`)));
      }),
      n.addEventListener("abort", l, { once: !0 }),
      n.aborted ? l() : (s.src = e));
  });
};
export const mobileMagazineWindow = function (e, t, i = 3) {
  return {
    visible: aG(e, e + i + 1, t),
    nextTurn: aG(e - 1, e + i + 2, t),
    priority: aG(e - 1, e + i + 3, t),
  };
};
export const monoMagazineTurnSides = function (e, t, i, n = !1) {
  return (
    n
      ? i
        ? [1, 0, -1]
        : [0, -1, 1]
      : i
        ? [2, 1, 0, 3, -1, -2]
        : [-1, 0, 1, -2, 2, 3]
  )
    .map((t) => e + t)
    .filter((e) => e >= 0 && e < t);
};
