import p1 from "@/assets/proof/proof-1.jpg.asset.json";
import p2 from "@/assets/proof/proof-2.png.asset.json";
import p3 from "@/assets/proof/proof-3.png.asset.json";
import p4 from "@/assets/proof/proof-4.png.asset.json";
import p5 from "@/assets/proof/proof-5.jpg.asset.json";
import p6 from "@/assets/proof/proof-6.jpg.asset.json";
import p7 from "@/assets/proof/proof-7-edited.jpg.asset.json";
import p8 from "@/assets/proof/proof-8.jpg.asset.json";
import p9 from "@/assets/proof/proof-9.jpg.asset.json";
import live from "@/assets/proof/case-live.jpg.asset.json";
import { mediaUrl } from "@/lib/media-url";

export const proofAttachments = [
  { asset: p1, title: "Chart breakdown", frTitle: "Analyse graphique", note: "Here's how we map it out: key zones, swing points and the position, all on one chart before we pull the trigger.", frNote: "Voici comment on prépare : zones clés, points de retournement et position, tout sur un seul graphique avant d’entrer." },
  { asset: p2, title: "Open gold positions", frTitle: "Positions ouvertes sur l'or", note: "Gold doing what we planned — several positions running at once.", frNote: "L’or fait ce qu’on avait prévu — plusieurs positions en cours en même temps." },
  { asset: p3, title: "Gold trade follow-up", frTitle: "Suivi des trades sur l'or", note: "Another day, same plan: two GOLD positions managed with patience.", frNote: "Un autre jour, même plan : deux positions GOLD gérées avec patience." },
  { asset: p4, title: "Inside the private group", frTitle: "Dans le groupe privé", note: "A look inside our private group, where we share setups and recap trades together every day.", frNote: "Un aperçu de notre groupe privé, où l’on partage les configurations et fait le bilan des trades chaque jour." },
  { asset: p5, title: "Community feedback", frTitle: "Retour de la communauté", note: "Kind words from one of our members — they mean a lot to us.", frNote: "De belles paroles d’un de nos membres — elles comptent beaucoup pour nous." },
  { asset: p6, title: "A member's perspective", frTitle: "Le point de vue d'un membre", note: "Talking gold with the community, and the energy speaks for itself.", frNote: "On parle de l’or avec la communauté, et l’énergie parle d’elle-même." },
  { asset: p7, title: "Support from the group", frTitle: "Soutien du groupe", note: "The community showing love for Harvey. We're grateful for every one of you.", frNote: "La communauté montre son soutien à Harvey. Merci à chacun d’entre vous." },
  { asset: p8, title: "TradeLocker · active trade", frTitle: "TradeLocker · trade actif", note: "Caught mid-move: an XAUUSD sell already up $16.73 while still running.", frNote: "En plein mouvement : une vente XAUUSD déjà à +16,73 $ alors qu’elle tourne encore." },
  { asset: p9, title: "TradeLocker · closed trade", frTitle: "TradeLocker · trade clôturé", note: "And that's how it finished — the same XAUUSD sell, closed at +$47.14.", frNote: "Et voilà comment ça s’est terminé — la même vente XAUUSD, clôturée à +47,14 $." },
  { asset: live, title: "Reactions to a live session", frTitle: "Réactions à une séance en direct", note: "This is what it feels like to watch it play out live with us.", frNote: "Voilà ce que ça fait de vivre le marché en direct avec nous." },
].map(({ asset, ...item }) => ({ ...item, src: mediaUrl(asset.url), program: "tailored" as const }));