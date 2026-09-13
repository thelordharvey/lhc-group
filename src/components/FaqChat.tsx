import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageCircle, X } from "lucide-react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import logoUrl from "@/assets/lhc-logo.png";

const SUGGESTIONS = [
  "What do the courses cost?",
  "How does the 1-on-1 coaching work?",
  "How do I get started?",
];

export function FaqChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open) textareaRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!isBusy && open) textareaRef.current?.focus();
  }, [isBusy, open]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value || isBusy) return;
    void sendMessage({ text: value });
    setInput("");
    textareaRef.current?.focus();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close FAQ chat" : "Open FAQ chat"}
        className="glass-btn fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl transition-colors hover:bg-primary-glow"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed inset-x-3 bottom-24 z-50 flex h-[70vh] max-h-[560px] flex-col overflow-hidden rounded-3xl liquid-glass liquid-glass-sheen shadow-2xl sm:inset-x-auto sm:right-5 sm:w-[380px]">
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <img src={logoUrl} alt="LHC Forex" className="h-9 w-9 rounded-full object-cover" />
            <div className="min-w-0">
              <p className="truncate text-[15px] font-semibold">LHC Forex assistant</p>
              <p className="truncate text-[12px] text-muted-foreground">Answers about coaching & courses</p>
            </div>
          </div>

          <Conversation className="flex-1">
            <ConversationContent className="gap-3 px-4 py-4">
              {messages.length === 0 && (
                <div className="grid gap-3">
                  <p className="text-[14px] leading-relaxed text-muted-foreground">
                    Hi 👋 Ask me anything about LHC Forex — coaching, courses, pricing or how to start.
                  </p>
                  <div className="grid gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => send(s)}
                        className="glass-btn rounded-xl border border-border px-3 py-2 text-left text-[14px] transition-colors hover:bg-secondary"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => {
                const text = message.parts
                  .map((part) => (part.type === "text" ? part.text : ""))
                  .join("");
                if (!text) return null;
                return (
                  <Message from={message.role} key={message.id}>
                    <MessageContent>
                      {message.role === "assistant" ? (
                        <MessageResponse>{text}</MessageResponse>
                      ) : (
                        text
                      )}
                    </MessageContent>
                  </Message>
                );
              })}

              {status === "submitted" && <Shimmer>Thinking...</Shimmer>}

              {error && (
                <p className="text-[13px] text-destructive">
                  Something went wrong. Please try again, or DM @thelordharvey on Instagram.
                </p>
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <div className="border-t border-border p-3">
            <PromptInput
              onSubmit={(_, event) => {
                event.preventDefault();
                send(input);
              }}
            >
              <PromptInputTextarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
              />
              <PromptInputFooter className="justify-end">
                <PromptInputSubmit status={status} disabled={!input.trim() && !isBusy} />
              </PromptInputFooter>
            </PromptInput>
          </div>
        </div>
      )}
    </>
  );
}
