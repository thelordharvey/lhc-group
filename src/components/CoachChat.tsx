import { useEffect, useRef, useState } from "react";
import { QuickReplyPanel, type QuickReply } from "./QuickReplyPanel";

type Message = { id: number; from: "user" | "coach"; text: string };

const REPLIES: QuickReply[] = [
  { id: "risk", label: "Risk management", icon: "🛡️", payload: "risk" },
  { id: "psych", label: "Trading psychology", icon: "🧠", payload: "psych" },
  { id: "plan", label: "Build my plan", icon: "🗺️", payload: "plan" },
  { id: "review", label: "Journal review", icon: "📓", payload: "review" },
  { id: "pricing", label: "Coaching pricing", icon: "💳", payload: "pricing" },
  { id: "session", label: "Book a session", icon: "📅", payload: "session" },
  { id: "start", label: "Start with LHC Forex", icon: "🚀", payload: "start", full: true },
];

const ANSWERS: Record<string, string> = {
  risk: "We cap risk at 0.5–1% per trade and build position sizing rules around your account size, so one bad week never erases a good month.",
  psych:
    "Consistency is behavioural. We work on pre-session routines, tilt triggers and rules that keep you out of revenge trades.",
  plan: "Your coach maps a written plan: sessions traded, pairs, setups, entry criteria, invalidation and weekly targets.",
  review:
    "Send your journal and we review every trade tagged by setup — you get a scorecard on execution, not just P&L.",
  pricing:
    "1-on-1 coaching runs monthly with weekly live reviews. Tell us your account stage and we'll match you to the right track.",
  session:
    "Great — pick a slot and your coach joins a 45-minute call to audit your current process and set your first 30-day goal.",
  start:
    "Welcome to LHC Forex. Step one is an audit of your last 30 trades, then we design the rules that make your edge repeatable.",
};

export function CoachChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "coach",
      text: "Hi, I'm your LHC Forex coach. What would you like to work on first?",
    },
  ]);
  const [input, setInput] = useState("");
  const feedRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);

  useEffect(() => {
    feedRef.current?.scrollTo({ top: feedRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const push = (from: Message["from"], text: string) =>
    setMessages((m) => [...m, { id: idRef.current++, from, text }]);

  const handleSelect = (reply: QuickReply) => {
    push("user", reply.label);
    setTimeout(
      () =>
        push(
          "coach",
          ANSWERS[reply.payload] ?? "A coach will follow up with you on that shortly.",
        ),
      450,
    );
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    push("user", text);
    setTimeout(
      () =>
        push(
          "coach",
          "Thanks — noted. A LHC Forex coach will map this into your personalised plan.",
        ),
      450,
    );
  };

  return (
    <div className="relative flex h-[560px] flex-col overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-xl">
      <header className="flex items-center gap-4 border-b border-border px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            LHC
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">LHC Forex Coaching</p>
            <p className="mono-label text-primary-glow">online</p>
          </div>
        </div>
      </header>

      <div ref={feedRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.from === "user"
                  ? "rounded-br-sm bg-primary text-primary-foreground"
                  : "rounded-bl-sm bg-tg-panel/70 text-foreground"
              }`}
            >
              {m.text}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-2 border-t border-border p-3">
        <QuickReplyPanel replies={REPLIES} onSelect={handleSelect} />
        <form onSubmit={handleSend} className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message"
            aria-label="Message your coach"
            className="h-10 min-w-0 flex-1 rounded-full border border-border bg-tg-panel/40 px-4 text-[15px] text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-[background-color,transform] hover:bg-primary-glow active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 19V5" />
              <path d="m5 12 7-7 7 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
