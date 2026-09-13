import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import {
  createLovableAiGatewayRunIdFetch,
  getLovableAiGatewayResponseHeaders,
  getLovableAiGatewayRunId,
  withLovableAiGatewayRunIdHeader,
} from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are the LHC Forex assistant, answering frequently asked questions on the LHC Forex website.

About LHC Forex:
- A forex coaching group helping traders build consistency, manage risk and achieve long-term financial growth through personalized 1-on-1 coaching.
- Method pillars: risk architecture (position sizing, drawdown caps), trader psychology (routines, accountability), edge refinement (journal audit, setup tagging), and a personalized written roadmap.
- Process: 1) Audit of your last 30 trades, 2) Blueprint - a written trading plan with rules, risk model and weekly targets, 3) Coaching - weekly live 1-on-1 reviews, 4) Scale - increase size and prepare for funded capital.
- Numbers shown on the site: 480+ traders coached, 1:1 live weekly reviews, 0.5% max risk per trade, 24/7 desk support.
- Courses:
  1) "1-on-1 Coaching Program" - $750 one-off, or $98.88/month. Includes a personalized trading plan, a daily trade recap call with your coach, risk and psychology review every session, and direct feedback on your journal and setups.
  2) "Tailored Strategy Access" - $350. Strategy matched to your daily routine, private group with daily trade recaps, curated market information and setups, community accountability and Q&A.
- Proof: verified XAUUSD (gold) chart setups are on the Proof page of the site.
- Contact and enrolment happen through Instagram DM: @thelordharvey (https://www.instagram.com/thelordharvey).

Rules:
- Answer briefly and warmly, 1-3 short sentences, plain language. Use markdown sparingly.
- Never invent facts, guarantees or profit promises. Trading involves risk of loss.
- If you do not know something (refunds, schedules, personal advice), say so and point the visitor to an Instagram DM to @thelordharvey.
- Do not give personalized financial advice or trade signals.`;

type ChatRequestBody = { messages?: unknown };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const lovableApiKey = process.env["LOVABLE_API_KEY"];
        if (!lovableApiKey) {
          return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        }

        const initialRunId = getLovableAiGatewayRunId(request);
        const runIdFetch = createLovableAiGatewayRunIdFetch(initialRunId);
        const lovable = createOpenAI({
          baseURL: "https://ai.gateway.lovable.dev/v1",
          apiKey: lovableApiKey,
          headers: {
            "Lovable-API-Key": lovableApiKey,
            "X-Lovable-AIG-SDK": "vercel-ai-sdk",
          },
          fetch: runIdFetch.fetch,
        });

        const result = streamText({
          model: lovable.responses("openai/gpt-6-astra"),
          system: SYSTEM_PROMPT,
          messages: convertToModelMessages(messages as UIMessage[]),
          abortSignal: request.signal,
          providerOptions: {
            openai: {
              forceReasoning: true,
              reasoningEffort: "low",
              reasoningSummary: "auto",
              store: false,
              include: ["reasoning.encrypted_content"],
            },
          },
        });

        const response = result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
          headers: getLovableAiGatewayResponseHeaders(undefined, {
            ...(initialRunId ? { "X-Lovable-AIG-Run-ID": initialRunId } : {}),
          }),
        });

        return withLovableAiGatewayRunIdHeader(response, runIdFetch);
      },
    },
  },
});
