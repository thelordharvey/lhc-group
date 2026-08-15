import { useRef, useState } from "react";

export type QuickReply = {
  id: string;
  label: string;
  icon?: string;
  payload: string;
  /** number of columns this button spans within a 2-col row group */
  full?: boolean;
};

type Ripple = { id: number; x: number; y: number };

export function QuickReplyButton({
  reply,
  onSelect,
}: {
  reply: QuickReply;
  onSelect: (reply: QuickReply) => void;
}) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);

  return (
    <button
      type="button"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const id = ++idRef.current;
        setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
        setTimeout(() => setRipples((r) => r.filter((x) => x.id !== id)), 550);
        onSelect(reply);
      }}
      className={`relative flex h-10 min-w-0 items-center justify-center gap-1.5 overflow-hidden rounded-[10px] bg-tg-panel/55 px-3 text-[14px] font-medium tracking-[-0.01em] text-foreground shadow-[inset_0_0.5px_0_0_oklch(1_0_0_/_0.06)] backdrop-blur-xl transition-[background-color,transform] duration-150 hover:bg-tg-panel-hover/70 active:scale-[0.985] active:bg-tg-panel-hover ${
        reply.full ? "col-span-2" : ""
      }`}
    >
      {reply.icon ? (
        <span aria-hidden className="shrink-0 text-[15px] leading-none">
          {reply.icon}
        </span>
      ) : null}
      <span className="truncate">{reply.label}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="tg-ripple pointer-events-none absolute h-10 w-10 rounded-full bg-foreground/40"
          style={{ left: r.x - 20, top: r.y - 20 }}
        />
      ))}
    </button>
  );
}

export function QuickReplyPanel({
  replies,
  onSelect,
}: {
  replies: QuickReply[];
  onSelect: (reply: QuickReply) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-[6px]">
      {replies.map((reply) => (
        <QuickReplyButton key={reply.id} reply={reply} onSelect={onSelect} />
      ))}
    </div>
  );
}
