import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import chart1 from "@/assets/XAUUSD_2026-07-30_17-52-32_7a2b3.png";
import chart2 from "@/assets/XAUUSD_2026-02-05_20-12-27_59526.png";
import chart3 from "@/assets/XAUUSD_2026-02-09_14-52-45_4afeb.png";
import chart4 from "@/assets/XAUUSD_2026-03-03_10-37-25_412f4.png";
import logoUrl from "@/assets/lhc-logo.png";

export const Route = createFileRoute("/proof")({
  head: () => ({
    meta: [
      { title: "Proof — LHC Forex" },
      {
        name: "description",
        content:
          "Real trade setups and chart proof from the LHC Forex coaching desk.",
      },
      { property: "og:title", content: "Proof — LHC Forex" },
      {
        property: "og:description",
        content: "Real trade setups and chart proof from the LHC Forex coaching desk.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProofPage,
});

const INSTAGRAM_URL =
  "https://www.instagram.com/thelordharvey?igsh=MXd3d2cwdGMwbHE5aQ%3D%3D&utm_source=qr";

const PROOF = [
  {
    src: chart1,
    pair: "XAU/USD · 15m",
    date: "Jul 30, 2026",
    note: "Trend SP/DM setup aligned with POC and Fibonacci — extreme entry, clean expansion.",
  },
  {
    src: chart2,
    pair: "XAU/USD · 5m",
    date: "Feb 05, 2026",
    note: "Last orderblock with imbalance, liquidity swept both sides before the move.",
  },
  {
    src: chart3,
    pair: "XAU/USD · 5m",
    date: "Feb 09, 2026",
    note: "5-star orderblock on trend, stop under the lowest low, target on resting liquidity.",
  },
  {
    src: chart4,
    pair: "XAU/USD · 5m",
    date: "Mar 03, 2026",
    note: "Higher timeframe bias respected — short from supply straight into the $$$ level.",
  },
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

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
    </svg>
  );
}

function ProofPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/", isLink: true },
    { label: "Method", href: "/#method", isLink: true },
    { label: "Process", href: "/#process", isLink: true },
    { label: "Coaching", href: "/#coaching", isLink: true },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 px-5 pt-4">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 sm:flex sm:flex-wrap sm:justify-between">
          <Link
            to="/"
            aria-label="LHC Forex home"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border bg-card/90 shadow-lg backdrop-blur-xl"
          >
            <img
              src={logoUrl}
              alt="LHC Forex logo"
              className="h-8 w-8 rounded-full object-cover"
            />
          </Link>

          <div className="hidden rounded-2xl border border-border bg-card/90 p-1.5 shadow-lg backdrop-blur-xl md:flex">
            <ul className="flex gap-1">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href as "/"}
                    className="block rounded-xl px-4 py-2 text-[15px] text-muted-foreground transition-colors hover:bg-tg-panel hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-end gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="flex shrink-0 items-center gap-2 rounded-2xl border border-border bg-card/90 px-4 py-2.5 text-[15px] font-medium text-foreground shadow-lg backdrop-blur-xl transition-colors hover:bg-tg-panel"
            >
              <InstagramIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Contact</span>
              <span className="sm:hidden">DM</span>
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-xl transition-colors hover:bg-tg-panel md:hidden"
            >
              {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mx-auto mt-3 max-w-6xl md:hidden">
            <div className="rounded-2xl border border-border bg-card/95 p-2 shadow-xl backdrop-blur-xl">
              <ul className="grid gap-1">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href as "/"}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-[15px] text-muted-foreground transition-colors hover:bg-tg-panel hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>

      <main className="px-5 pt-32 pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-primary">Proof</p>
          <h1 className="mt-3 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
            Real charts from the coaching desk
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Setups shared with our students — orderblocks, imbalance, liquidity and Fibonacci
            executed with the same rules we teach in 1-on-1 coaching.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PROOF.map((p) => (
              <figure
                key={p.src}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img
                  src={p.src}
                  alt={`${p.pair} trade setup shared by LHC Forex on ${p.date}`}
                  loading="lazy"
                  className="w-full bg-secondary object-cover"
                />
                <figcaption className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[15px] font-semibold">{p.pair}</span>
                    <span className="text-[13px] text-muted-foreground">{p.date}</span>
                  </div>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{p.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/"
              className="rounded-full border border-border px-6 py-3 text-[15px] font-medium transition-colors hover:bg-secondary"
            >
              Back home
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[15px] font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
            >
              <InstagramIcon className="h-5 w-5" />
              Message us on Instagram
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-5 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
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
