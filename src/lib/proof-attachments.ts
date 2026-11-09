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
  { asset: p1, title: "Chart breakdown", frTitle: "Analyse graphique", note: "A marked-up trading chart with highlighted zones, swing points and a position overlay showing the setup in context.", frNote: "Un graphique annoté avec des zones, des points de retournement et une position pour situer la configuration." },
  { asset: p2, title: "Open gold positions", frTitle: "Positions ouvertes sur l'or", note: "A mobile trading snapshot showing several open GOLD positions and the floating result at the moment of capture.", frNote: "Une capture mobile présentant plusieurs positions GOLD ouvertes et le résultat flottant au moment de la capture." },
  { asset: p3, title: "Gold trade follow-up", frTitle: "Suivi des trades sur l'or", note: "A second account snapshot showing two open GOLD positions, their individual results and the account summary.", frNote: "Une autre capture du compte avec deux positions GOLD ouvertes, leurs résultats individuels et le résumé du compte." },
  { asset: p4, title: "Inside the private group", frTitle: "Dans le groupe privé", note: "A group conversation with a shared chart and trading screenshot, capturing how setups and trade recaps are discussed.", frNote: "Une conversation du groupe avec un graphique et une capture de trading, illustrant les échanges sur les configurations et les bilans." },
  { asset: p5, title: "Community feedback", frTitle: "Retour de la communauté", note: "A member's message of appreciation in the group conversation with @thelordharvey.", frNote: "Un message d'appréciation d'un membre dans la conversation du groupe avec @thelordharvey." },
  { asset: p6, title: "A member's perspective", frTitle: "Le point de vue d'un membre", note: "A member responds to a discussion about gold trading with positive feedback on the results being shared.", frNote: "Un membre répond à une discussion sur le trading de l'or avec un retour positif sur les résultats partagés." },
  { asset: p7, title: "Support from the group", frTitle: "Soutien du groupe", note: "Another message from the community expressing encouragement and appreciation for Harvey.", frNote: "Un autre message de la communauté exprimant encouragement et appréciation pour Harvey." },
  { asset: p8, title: "TradeLocker · active trade", frTitle: "TradeLocker · trade actif", note: "An active XAUUSD sell position of 0.01 lots showing a floating $16.73 result. This is an open-trade snapshot, not a final result.", frNote: "Une vente XAUUSD active de 0,01 lot affichant un résultat flottant de 16,73 $. Il s'agit d'une position ouverte, pas d'un résultat final." },
  { asset: p9, title: "TradeLocker · closed trade", frTitle: "TradeLocker · trade clôturé", note: "The closed XAUUSD sell screenshot displays $47.14 profit on 0.01 lots, alongside its opening and closing prices.", frNote: "La capture de la vente XAUUSD clôturée affiche un gain de 47,14 $ pour 0,01 lot, avec ses prix d'ouverture et de clôture." },
  { asset: live, title: "Reactions to a live session", frTitle: "Réactions à une séance en direct", note: "Two members react enthusiastically to watching an event unfold live. The screenshot alone does not document their trades or results.", frNote: "Deux membres réagissent avec enthousiasme à une séquence suivie en direct. La capture seule ne documente ni leurs trades ni leurs résultats." },
].map(({ asset, ...item }) => ({ ...item, src: mediaUrl(asset.url), program: "tailored" as const }));