import strategy from "@/assets/proof/case-strategy.jpg.asset.json";
import perspective from "@/assets/proof/case-perspective.jpg.asset.json";
import execution from "@/assets/proof/case-execution.jpg.asset.json";
import learning from "@/assets/proof/case-learning.jpg.asset.json";
import { mediaUrl } from "@/lib/media-url";

export const coachingCaseStudies = [
  {
    id: "strategy", asset: strategy,
    title: "Preparing before the next account", frTitle: "Se préparer avant le prochain compte",
    note: "The member wants to consolidate their strategy before trading another account and better understand different market conditions.",
    frNote: "Le membre souhaite consolider sa stratégie avant de trader un autre compte et mieux comprendre les différentes conditions de marché.",
    experience: "Has already worked on a strategy and is preparing another trading account.",
    frExperience: "A déjà travaillé une stratégie et prépare un autre compte de trading.",
    beginning: "The message captures preparation for the next account; the coaching start date is not supplied.",
    frBeginning: "Le message montre la préparation du prochain compte ; la date de début du coaching n’est pas fournie.",
    focus: "Consolidate the rules before applying them in changing market conditions.",
    frFocus: "Consolider les règles avant de les appliquer dans des conditions de marché changeantes.",
  },
  {
    id: "perspective", asset: perspective,
    title: "Seeing the bigger picture", frTitle: "Retrouver une vision d’ensemble",
    note: "The member appreciates a second perspective and acknowledges sometimes focusing too narrowly and overlooking the wider market picture.",
    frNote: "Le membre apprécie un second regard et reconnaît parfois se focaliser trop étroitement, au détriment du contexte global du marché.",
    experience: "Already analyzes trades and identifies a recurring narrow-focus habit.",
    frExperience: "Analyse déjà ses trades et identifie une tendance récurrente à perdre la vue d’ensemble.",
    beginning: "The initial assessment and coaching start date are not documented in this attachment.",
    frBeginning: "Le bilan initial et la date de début du coaching ne sont pas documentés dans cette pièce jointe.",
    focus: "Use an external review to reconnect individual setups with the broader context.",
    frFocus: "Utiliser un regard extérieur pour relier chaque configuration au contexte global.",
  },
  {
    id: "execution", asset: execution,
    title: "XAUUSD · closed buy trade", frTitle: "XAUUSD · achat clôturé",
    note: "The TradeLocker screenshot displays $20.63 profit on a 0.01-lot XAUUSD buy, opened at 4,568.76 and closed at 4,589.39 on August 21, 2026. This single trade does not establish overall profitability.",
    frNote: "La capture TradeLocker affiche un gain de 20,63 $ sur un achat XAUUSD de 0,01 lot, ouvert à 4 568,76 et clôturé à 4 589,39 le 21 août 2026. Ce trade isolé ne démontre pas une rentabilité globale.",
    experience: "One completed XAUUSD trade is shown; prior trading history is not supplied.",
    frExperience: "Un trade XAUUSD clôturé est présenté ; l’historique antérieur n’est pas fourni.",
    beginning: "The trade date is visible, but the trader’s beginnings and coaching start date are not supplied.",
    frBeginning: "La date du trade est visible, mais les débuts du trader et du coaching ne sont pas fournis.",
    focus: "Review entry, exit and position size; no risk plan or full account history is shown.",
    frFocus: "Examiner l’entrée, la sortie et la taille de position ; aucun plan de risque ni historique complet du compte n’est présenté.",
  },
  {
    id: "live", asset: live,
    title: "Reactions to a live session", frTitle: "Réactions à une séance en direct",
    note: "Two members react enthusiastically to watching an event unfold live. The screenshot alone does not document their trades or results.",
    frNote: "Deux membres réagissent avec enthousiasme à une séquence suivie en direct. La capture seule ne documente ni leurs trades ni leurs résultats.",
    experience: "Participation in a live discussion is visible; trading experience is not stated.",
    frExperience: "Une participation à un échange en direct est visible ; l’expérience en trading n’est pas précisée.",
    beginning: "No initial situation or coaching start date is included in the messages.",
    frBeginning: "Aucune situation initiale ni date de début du coaching n’apparaît dans les messages.",
    focus: "Observe a live session; the attachment does not establish individual progress.",
    frFocus: "Observer une séance en direct ; la pièce jointe n’établit pas une progression individuelle.",
  },
  {
    id: "learning", asset: learning,
    title: "A learning milestone", frTitle: "Un retour sur l’apprentissage",
    note: "The member thanks the coach and says they would not have learned as much without their support.",
    frNote: "Le membre remercie le coach et indique qu’il n’aurait pas autant appris sans son accompagnement.",
    experience: "The member reports learning through the support received; duration and prior experience are not supplied.",
    frExperience: "Le membre témoigne d’un apprentissage grâce à l’accompagnement ; la durée et l’expérience antérieure ne sont pas fournies.",
    beginning: "The starting level and coaching start date are not documented in this message.",
    frBeginning: "Le niveau de départ et la date de début du coaching ne sont pas documentés dans ce message.",
    focus: "Qualitative feedback on learning, not a quantified performance result.",
    frFocus: "Un retour qualitatif sur l’apprentissage, et non un résultat de performance chiffré.",
  },
].map(({ asset, ...item }) => ({
  ...item, src: mediaUrl(asset.url), program: "one-on-one" as const,
  level: "Not specified in the supplied attachment.",
  frLevel: "Non précisé dans la pièce jointe fournie.",
}));