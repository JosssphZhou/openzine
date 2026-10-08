let aW = 0;
export const createMagazinePerformance = function (e, t) {
  let i = `mono-magazine:${t}:${++aW}`,
    n = new Set();
  e.dataset.magazinePerformance = i;
  let r = (e, t) => {
    let r = void 0 === t ? e : `page-${t + 1}:${e}`;
    !n.has(r) &&
      (n.add(r),
      performance.mark(`${i}:${r}`),
      void 0 !== t &&
        "decode-end" === e &&
        (performance.measure(
          `${i}:page-${t + 1}:load-and-decode`,
          `${i}:page-${t + 1}:load-start`,
          `${i}:${r}`,
        ),
        n.has(`page-${t + 1}:image-loaded`) &&
          performance.measure(
            `${i}:page-${t + 1}:decode`,
            `${i}:page-${t + 1}:image-loaded`,
            `${i}:${r}`,
          )),
      void 0 !== t &&
        "image-loaded" === e &&
        performance.measure(
          `${i}:page-${t + 1}:download`,
          `${i}:page-${t + 1}:load-start`,
          `${i}:${r}`,
        ),
      void 0 !== t &&
        "upload-end" === e &&
        performance.measure(
          `${i}:page-${t + 1}:upload-submission`,
          `${i}:page-${t + 1}:upload-start`,
          `${i}:${r}`,
        ),
      [
        "scene-initialized",
        "visible-ready",
        "next-turn-ready",
        "all-pages-ready",
        "first-useful-frame",
      ].includes(e) &&
        performance.measure(`${i}:${e}:elapsed`, `${i}:start`, `${i}:${r}`));
  };
  return (
    r("start"),
    {
      mark: r,
      window(t) {
        ((e.dataset.magazineVisiblePages = t.visible
          .map((e) => e + 1)
          .join(",")),
          (e.dataset.magazinePriorityPages = t.priority
            .map((e) => e + 1)
            .join(",")));
      },
      progress(t) {
        ((e.dataset.magazineVisibleReady = String(t.visible)),
          (e.dataset.magazineNextTurnReady = String(t.nextTurn)),
          (e.dataset.magazineAllPagesReady = String(t.all)),
          (e.dataset.magazineSettled = String(t.settled)),
          (e.dataset.magazineLoadedPages = String(t.loaded)),
          (e.dataset.magazineFailedPages = String(t.failed)),
          t.visible && r("visible-ready"),
          t.nextTurn && r("next-turn-ready"),
          t.all && r("all-pages-ready"));
      },
    }
  );
};
