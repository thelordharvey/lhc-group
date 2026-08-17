import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let raf = 0;
    let current = 0;
    let loaded = document.readyState === "complete";
    let completeTimeout: ReturnType<typeof setTimeout>;
    const start = performance.now();
    const MIN_DURATION = 1400; // never finish faster than this, so the bar is visible

    const onLoad = () => {
      loaded = true;
    };
    window.addEventListener("load", onLoad);

    const assetProgress = () => {
      const imgs = Array.from(document.images);
      if (!imgs.length) return loaded ? 1 : 0;
      return imgs.filter((i) => i.complete).length / imgs.length;
    };

    const tick = (now: number) => {
      const elapsed = now - start;
      const timeRatio = Math.min(1, elapsed / MIN_DURATION);
      const ready = loaded && assetProgress() >= 1;
      // target rises with real time + real asset completion, capped until ready
      const target = ready
        ? 100
        : Math.min(95, timeRatio * 70 + assetProgress() * 25);

      current += (target - current) * 0.12;
      if (target - current < 0.4) current = target;
      setProgress(current);

      if (current >= 99.9) {
        setProgress(100);
        completeTimeout = setTimeout(() => setHidden(true), 450);
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(completeTimeout);
      window.removeEventListener("load", onLoad);
    };
  }, []);


  if (hidden) return null;

  return (
    <div
      aria-hidden={progress === 100}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8 px-6">
        <div className="text-center">
          <h1
            className="text-7xl font-bold tracking-[-0.06em] text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #60a5fa, #3b82f6, #2563eb, #60a5fa)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              animation: "lhc-shimmer 2s linear infinite",
            }}
          >
            LHC
          </h1>
          <p className="mt-2 text-[13px] font-medium uppercase tracking-[3px] text-primary">
            Forex
          </p>
        </div>

        <div className="w-64">
          <div className="mb-2 flex items-center justify-between text-[12px] font-medium tabular-nums text-muted-foreground">
            <span>Loading</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes lhc-shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
    </div>
  );
}
