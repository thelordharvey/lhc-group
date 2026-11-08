import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import chart1 from "@/assets/XAUUSD_2026-08-11_15-24-32_eee0b.png";
import chart2 from "@/assets/XAUUSD_2026-08-12_15-59-19_5825b.png";
import chart3 from "@/assets/xauusd-live-desk.jpeg";

import logoUrl from "@/assets/lhc-logo.png";
import { SiteControls } from "@/components/SiteControls";
import { useSiteSettings } from "@/lib/site-settings";
import { proofAttachments } from "@/lib/proof-attachments";
import { ProofJourneys } from "@/components/ProofJourneys";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/proof")({
  head: () => ({
    meta: [
      { title: "Proof — LHC Forex" },
      {
        name: "description",
        content:
          "Discover Mike and Harry’s coaching journeys, trade screenshots and member feedback from LHC Forex.",
      },
      { property: "og:title", content: "Proof — LHC Forex" },
      {
        property: "og:description",
        content: "Discover Mike and Harry’s coaching journeys, trade screenshots and member feedback from LHC Forex.",
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
    date: "Aug 11, 2026",
    note: "Fibonacci retracement into the 0.62–0.782 zone, entry from the orderblock with the low as invalidation.",
  },
  {
    src: chart2,
    pair: "XAU/USD · 15m",
    date: "Aug 12, 2026",
    note: "Two clean Fib setups back to back — long from discount, then short from the premium supply block.",
  },
  {
    src: chart3,
    pair: "XAU/USD · 5m",
    date: "Jun 11, 2026",
    note: "Live desk execution: last orderblock on trend, stop under the lowest low, expansion into resting liquidity.",
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
  const { t, language } = useSiteSettings();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/", isLink: true },
    { label: "Method", href: "/#method", isLink: true },
    { label: "Process", href: "/#process", isLink: true },
    { label: "Proof", href: "/proof", isLink: true },
    { label: "Courses", href: "/#courses", isLink: true },
    { label: "Coaching", href: "/#coaching", isLink: true },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 px-5 pt-4">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 sm:flex sm:flex-wrap sm:justify-between">
          <Link
            to="/"
            aria-label="LHC Forex home"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl liquid-glass liquid-glass-sheen shadow-lg"
          >
            <img
              src={logoUrl}
              alt="LHC Forex logo"
              className="h-8 w-8 rounded-full object-cover"
            />
          </Link>

          <div className="order-last col-span-3 flex min-w-0 max-w-full items-center rounded-2xl liquid-glass p-1.5 shadow-lg sm:order-none sm:col-span-1">
            <ul className="flex min-w-0 flex-1 gap-1 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {navLinks.map((l) => (
                <li key={t(l.label)}>
                  <Link
                    to={l.href as "/"}
                    className="block rounded-xl px-4 py-2 text-[15px] text-muted-foreground transition-colors hover:brightness-125 hover:text-foreground"
                  >
                    {t(l.label)}
                  </Link>
                </li>
              ))}
            </ul>
            <SiteControls />
          </div>

          <div className="flex items-center justify-end gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="flex shrink-0 items-center gap-2 rounded-2xl liquid-glass liquid-glass-sheen px-4 py-2.5 text-[15px] font-medium text-foreground shadow-lg transition-colors hover:brightness-125"
            >
              <InstagramIcon className="h-4 w-4" />
              <span className="hidden sm:inline">{t("Contact")}</span>
              <span className="sm:hidden">{t("DM")}</span>
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl liquid-glass liquid-glass-sheen text-foreground shadow-lg transition-colors hover:brightness-125 hidden"
            >
              {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mx-auto mt-3 max-w-6xl md:hidden">
            <div className="rounded-2xl liquid-glass liquid-glass-sheen p-2 shadow-xl">
              <ul className="grid gap-1">
                {navLinks.map((l) => (
                  <li key={t(l.label)}>
                    <Link
                      to={l.href as "/"}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-[15px] text-muted-foreground transition-colors hover:brightness-125 hover:text-foreground"
                    >
                      {t(l.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>

      <main className="px-5 pt-40 pb-20 sm:pt-32">
        <div className="relative mx-auto max-w-5xl">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium text-primary">LHC FOREX · {language === "fr" ? "RETOURS & PROGRESSION" : "FEEDBACK & PROGRESS"}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              {language === "fr" ? "Les résultats de nos" : "The results of our"} <span className="text-primary">{language === "fr" ? "membres" : "members"}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
              {language === "fr" ? "Les parcours, le travail et la progression partagés par les membres de LHC Forex." : "The journeys, work and progress shared by members of LHC Forex."}
            </p>
            <Button asChild variant="link" className="mt-4 text-primary"><Link to="/"><ArrowLeft />{t("Back home")}</Link></Button>
          </header>
          <Tabs defaultValue="one-on-one" className="mt-10">
            <TabsList aria-label={language === "fr" ? "Programmes de coaching" : "Coaching programs"} className="mx-auto flex h-auto w-fit max-w-full flex-wrap justify-center gap-1.5 rounded-2xl liquid-glass p-1.5 shadow-lg">
              <TabsTrigger value="one-on-one" className="glass-btn rounded-full border border-transparent min-h-10 whitespace-normal px-3 py-2.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:text-foreground data-[state=active]:border-primary/40 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_8px_24px_-8px_var(--primary)] sm:px-5 sm:text-sm">One-on-one coaching program</TabsTrigger>
              <TabsTrigger value="tailored" className="glass-btn rounded-full border border-transparent min-h-10 whitespace-normal px-3 py-2.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:text-foreground data-[state=active]:border-primary/40 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_8px_24px_-8px_var(--primary)] sm:px-5 sm:text-sm">{language === "fr" ? "Tailored stratégie access" : "Tailored strategy access"}</TabsTrigger>
            </TabsList>
            <TabsContent value="one-on-one" className="pt-12">
              <section aria-labelledby="journeys-heading">
                <div className="mb-8 text-center">
                  <p className="text-xs font-semibold text-primary">{language === "fr" ? "ÉTUDES DE CAS" : "CASE STUDIES"}</p>
                  <h2 id="journeys-heading" className="mt-4 text-2xl font-semibold sm:text-3xl">{language === "fr" ? "Les parcours de progression" : "The journeys behind the progress"}</h2>
                  <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{language === "fr" ? "Avant les captures, les histoires : d’où ils partaient, ce qu’ils ont travaillé et ce qui a changé." : "Before the screenshots, the stories: where they started, what they worked on and what changed."}</p>
                </div>
                <ProofJourneys />
              </section>
            </TabsContent>
            <TabsContent value="tailored" className="pt-12">
              <div className="text-center">
                <p className="text-xs font-semibold text-primary">{language === "fr" ? "CAPTURES PARTAGÉES" : "SHARED SCREENSHOTS"}</p>
                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">{language === "fr" ? "Le travail des membres, en images" : "Members’ work, in pictures"}</h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{language === "fr" ? "Analyses de marché, exécutions et échanges du programme Tailored strategy access." : "Market analysis, executions and conversations from Tailored strategy access."}</p>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {PROOF.map((p) => (
                  <figure
                    key={p.src}
                    className="proof-float proof-glass overflow-hidden rounded-2xl liquid-glass liquid-glass-sheen"
                  >
                    <img
                      src={p.src}
                      alt={`${p.pair} trade setup shared by LHC Forex on ${t(p.date)}`}
                      loading="lazy"
                      className="aspect-[16/10] w-full bg-secondary/40 object-contain"
                    />
                    <figcaption className="p-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[15px] font-semibold">{p.pair}</span>
                        <span className="text-[13px] text-muted-foreground">{t(p.date)}</span>
                      </div>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{t(p.note)}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
                {proofAttachments.map((p) => (
                  <figure key={p.src} className="proof-float proof-glass mb-6 break-inside-avoid overflow-hidden rounded-2xl liquid-glass liquid-glass-sheen">
                    <img src={p.src} alt={language === "fr" ? p.frTitle : p.title} loading="lazy" className="block h-auto max-h-[540px] w-full bg-secondary object-contain" />
                    <figcaption className="p-5">
                      <h3 className="text-base font-semibold">{language === "fr" ? p.frTitle : p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{language === "fr" ? p.frNote : p.note}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-6 text-muted-foreground">{language === "fr" ? "Captures et messages fournis par LHC Forex. Les positions ouvertes peuvent évoluer ; les résultats passés ne garantissent pas les résultats futurs." : "Screenshots and messages supplied by LHC Forex. Open positions can change; past results do not guarantee future performance."}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="glass-btn rounded-full border border-border px-6 py-3 text-[15px] font-medium transition-colors hover:bg-secondary"
            >
               {t("Back home")}
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[15px] font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
            >
              <InstagramIcon className="h-5 w-5" />
               {t("Message us on Instagram")}
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-5 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <p className="text-[13px] text-muted-foreground sm:truncate">LHC Forex — {t("Coaching group")}</p>
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
