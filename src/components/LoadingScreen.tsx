import { useEffect, useState } from "react";

// Original LHC lettering: outlined, slanted capitals with the reference's draw/fill sequence.
const LETTERING = "M45 20 H57 L43 72 H78 L76 80 H29 Z M99 20 H111 L105 45 H130 L136 20 H148 L132 80 H120 L127 54 H102 L95 80 H83 Z M219 31 C213 23 205 19 192 19 C170 19 157 33 154 51 C150 69 160 81 179 81 C192 81 201 76 208 67 L199 61 C194 68 188 72 180 72 C169 72 164 64 167 51 C170 37 178 28 190 28 C198 28 204 31 208 37 Z";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exit" | "hidden">("loading");

  useEffect(() => {
    let raf = 0;
    let exitTimeout: ReturnType<typeof setTimeout> | undefined;
    let loaded = document.readyState === "complete";
    let fontsReady = false;
    let disposed = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion ? 200 : 2400;
    const start = performance.now();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onLoad = () => { loaded = true; };
    window.addEventListener("load", onLoad);
    void document.fonts.ready.then(() => { if (!disposed) fontsReady = true; });

    const tick = (now: number) => {
      const ready = loaded && fontsReady && Array.from(document.images).every((image) => image.complete || image.loading === "lazy");
      const elapsedProgress = Math.min((now - start) / duration, 1);
      const next = ready ? elapsedProgress : Math.min(elapsedProgress, 0.99);
      setProgress(next);
      if (next === 1) {
        setPhase("exit");
        exitTimeout = setTimeout(() => {
          setPhase("hidden");
          document.body.style.overflow = previousOverflow;
        }, reducedMotion ? 50 : 600);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      clearTimeout(exitTimeout);
      window.removeEventListener("load", onLoad);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (phase === "hidden") return null;
  const fill = Math.max(0, Math.min((progress - 0.7) / 0.3, 1));

  return (
    <div className={`lhc-loader ${phase === "exit" ? "lhc-loader-exit" : ""}`} aria-hidden={phase === "exit"}>
      <div className="lhc-loader-content">
        <svg viewBox="0 0 260 100" className="lhc-loader-lettering" role="img" aria-label="LHC">
          <path d={LETTERING} pathLength="800" fill="none" className="lhc-loader-outline" strokeWidth="1.5" strokeDasharray="800" strokeDashoffset={800 * (1 - Math.min(progress / 0.7, 1))} strokeLinecap="round" strokeLinejoin="round" />
          <path d={LETTERING} className="lhc-loader-fill" fillOpacity={fill} />
        </svg>
        <svg viewBox="0 0 384 24" className="lhc-loader-subtitle" aria-hidden="true">
          <text x="192" y="17" textAnchor="middle" opacity={fill}>FOREX</text>
        </svg>
        <svg viewBox="0 0 384 4" className="lhc-loader-progress" role="progressbar" aria-label="LHC Forex" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
          <rect width="384" height="4" rx="2" className="lhc-loader-track" />
          <rect width={384 * progress} height="4" rx="2" className="lhc-loader-bar" />
        </svg>
        <p className="lhc-loader-percentage" aria-hidden="true">{Math.round(progress * 100)}%</p>
      </div>
    </div>
  );
}
