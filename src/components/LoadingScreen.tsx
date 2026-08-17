import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let current = 0;
    let raf: number;
    let completeTimeout: ReturnType<typeof setTimeout>;

    const advance = () => {
      const remaining = 100 - current;
      const step = Math.max(0.5, remaining * 0.06);
      current = Math.min(100, current + step);
      setProgress(current);

      if (current < 100) {
        raf = requestAnimationFrame(() => {
          setTimeout(advance, 60);
        });
      } else {
        completeTimeout = setTimeout(() => setHidden(true), 400);
      }
    };

    const onLoad = () => {
      cancelAnimationFrame(raf);
      current = 100;
      setProgress(100);
      completeTimeout = setTimeout(() => setHidden(true), 400);
    };

    advance();

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

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
              className="h-full rounded-full bg-primary transition-[width] duration-100 ease-out"
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
