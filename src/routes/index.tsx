import { createFileRoute } from "@tanstack/react-router";
import { CoachChat } from "@/components/CoachChat";

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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
          <a href="#top" className="mono-label truncate text-sm font-bold tracking-[2px]">
            LHC <span className="text-primary">FOREX</span>
          </a>
          <ul className="hidden gap-9 md:flex">
            {["Method", "Process", "Coaching", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="mono-label text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mono-label shrink-0 rounded-md bg-primary px-5 py-2.5 text-primary-foreground transition-colors hover:bg-primary-glow"
          >
            Get coached
          </a>
        </div>
      </nav>

      <header
        id="top"
        className="relative overflow-hidden px-5 pt-32 pb-20 sm:pt-40 sm:pb-28"
      >
        <div className="blob animate-blob left-[-160px] top-[-140px] h-[540px] w-[540px] bg-primary/35" />
        <div className="blob animate-blob right-[-120px] top-[30%] h-[380px] w-[380px] bg-primary-glow/20" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="min-w-0">
            <p className="mono-label text-primary-glow">Forex coaching group</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-6xl">
              Trade with consistency.
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Grow for the long term.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              LHC Forex is a coaching group for traders who are tired of good weeks
              followed by blown accounts. We build the process — risk, psychology and a
              plan you actually follow — through personalized 1-on-1 coaching.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-glow"
              >
                Start coaching
              </a>
              <a
                href="#method"
                className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                See the method
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="min-w-0">
                  <dt className="text-2xl font-bold text-foreground">{s.value}</dt>
                  <dd className="mono-label mt-1 text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div id="contact" className="relative min-w-0">
            <CoachChat />
          </div>
        </div>
      </header>

      <section id="method" className="relative px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mono-label text-primary-glow">The method</p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold sm:text-4xl">
            Performance is a system, not a lucky streak
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:bg-card"
              >
                <span aria-hidden className="text-2xl">
                  {p.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative px-5 py-20">
        <div className="blob animate-blob left-[20%] top-0 h-[420px] w-[420px] bg-primary/20" />
        <div className="relative mx-auto max-w-6xl">
          <p className="mono-label text-primary-glow">Process</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">From leaks to a stable curve</h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-2xl border border-border bg-card/50 p-6">
                <span className="mono-label text-primary">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="coaching" className="px-5 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-card/50 p-8 text-center sm:p-14">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready for consistent execution?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Talk to a LHC Forex coach, get your trading audit and leave with a plan built for
            long-term financial growth.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-md bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-glow"
          >
            Book your audit
          </a>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <p className="mono-label truncate text-muted-foreground">
            LHC Forex — Coaching group
          </p>
          <p className="mono-label shrink-0 text-muted-foreground">
            Trading involves risk of loss
          </p>
        </div>
      </footer>
    </div>
  );
}
