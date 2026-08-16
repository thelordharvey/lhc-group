import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import logoUrl from "@/assets/lhc-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LHC Forex — Personalized Forex Trading Coaching" },
      {
        name: "description",
        content:
          "LHC Forex helps traders build consistency, manage risk and achieve long-term financial growth through personalized 1-on-1 coaching.",
      },
      { property: "og:title", content: "LHC Forex — Personalized Forex Trading Coaching" },
      {
        property: "og:description",
        content:
          "Personalized coaching for traders who want consistency, disciplined risk and long-term growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const INSTAGRAM_URL =
  "https://www.instagram.com/thelordharvey?igsh=MXd3d2cwdGMwbHE5aQ%3D%3D&utm_source=qr";



const PILLARS = [
  {
    icon: "🛡️",
    title: "Risk architecture",
    body: "Position sizing, drawdown caps and rules that keep your capital alive through losing streaks.",
  },
  {
    icon: "🧠",
    title: "Trader psychology",
    body: "Routines, tilt triggers and accountability so your execution matches your plan every session.",
  },
  {
    icon: "📈",
    title: "Edge refinement",
    body: "We audit your journal, tag every setup and cut what does not pay you over a real sample.",
  },
  {
    icon: "🗺️",
    title: "Personalized roadmap",
    body: "A written plan built around your schedule, account size and target pace of growth.",
  },
];

const STEPS = [
  { n: "01", title: "Audit", body: "We review your last 30 trades and find the leaks costing you consistency." },
  { n: "02", title: "Blueprint", body: "You receive a written trading plan with rules, risk model and weekly targets." },
  { n: "03", title: "Coaching", body: "Weekly live reviews with your coach until the process runs without you forcing it." },
  { n: "04", title: "Scale", body: "Once the curve is stable we increase size and prepare you for funded capital." },
];

const STATS = [
  { value: "480+", label: "Traders coached" },
  { value: "1:1", label: "Live weekly reviews" },
  { value: "0.5%", label: "Max risk per trade" },
  { value: "24/7", label: "Desk support" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 px-5 pt-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <a
            href="#top"
            aria-label="LHC Forex home"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border bg-card/90 shadow-lg backdrop-blur-xl"
          >
            <img
              src={logoUrl}
              alt="LHC Forex logo"
              className="h-8 w-8 rounded-full object-cover"
            />
          </a>

          <div className="hidden rounded-2xl border border-border bg-card/90 p-1.5 shadow-lg backdrop-blur-xl md:flex">
            <ul className="flex gap-1">
              {["Method", "Process", "Proof", "Coaching"].map((l) =>
                l === "Proof" ? (
                  <li key={l}>
                    <Link
                      to="/proof"
                      className="block rounded-xl px-4 py-2 text-[15px] text-muted-foreground transition-colors hover:bg-tg-panel hover:text-foreground"
                    >
                      {l}
                    </Link>
                  </li>
                ) : (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="block rounded-xl px-4 py-2 text-[15px] text-muted-foreground transition-colors hover:bg-tg-panel hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex shrink-0 items-center gap-2 rounded-2xl border border-border bg-card/90 px-4 py-2.5 text-[15px] font-medium text-foreground shadow-lg backdrop-blur-xl transition-colors hover:bg-tg-panel"
          >
            <InstagramIcon className="h-4 w-4" />
            Contact
          </a>
        </div>

      </nav>

      <header id="top" className="relative overflow-hidden px-5 pt-40 pb-16">
        <div className="blob animate-blob left-[-160px] top-[-140px] h-[540px] w-[540px] bg-primary/20" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-primary">
            Forex coaching group
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            Trade with consistency.
            <br />
            <span className="text-primary">Grow for the long term.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            LHC Forex is a coaching group for traders tired of good weeks followed by blown
            accounts. We build the process — risk, psychology and a plan you actually follow —
            through personalized 1-on-1 coaching.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[15px] font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
            >
              <InstagramIcon className="h-5 w-5" />
              Message us on Instagram
            </a>
            <Link
              to="/proof"
              className="rounded-full border border-border px-6 py-3 text-[15px] font-medium transition-colors hover:bg-secondary"
            >
              See the proof
            </Link>
          </div>
          <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="min-w-0">
                <dt className="text-2xl font-bold">{s.value}</dt>
                <dd className="mt-1 text-[13px] text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section id="method" className="relative px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-primary">The method</p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
            Performance is a system, not a lucky streak
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card sm:grid sm:grid-cols-2">
            {PILLARS.map((p) => (
              <article
                key={p.title}
                className="flex gap-4 border-b border-border p-5 last:border-b-0 transition-colors hover:bg-tg-panel sm:[&:nth-last-child(2)]:border-b-0"
              >
                <span aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-tg-panel text-xl">
                  {p.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[17px] font-semibold">{p.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-primary">Process</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
            From leaks to a stable curve
          </h2>
          <ol className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            {STEPS.map((s) => (
              <li key={s.n} className="flex gap-4 border-b border-border p-5 last:border-b-0">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-[13px] font-bold text-primary-foreground">
                  {s.n}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[17px] font-semibold">{s.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="coaching" className="px-5 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-card p-8 text-center sm:p-14">
          <h2 className="text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
            Ready for consistent execution?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Send a DM on Instagram and a LHC Forex coach will answer with your next step toward
            long-term financial growth.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-[15px] font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
          >
            <InstagramIcon className="h-5 w-5" />
            @thelordharvey
          </a>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <p className="truncate text-[13px] text-muted-foreground">LHC Forex — Coaching group</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="shrink-0 text-[13px] text-muted-foreground transition-colors hover:text-primary"
          >
            Instagram · @thelordharvey
          </a>
        </div>
      </footer>
    </div>
  );
}
