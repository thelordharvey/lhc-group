import strategy from "@/assets/proof/case-strategy.jpg.asset.json";
import perspective from "@/assets/proof/case-perspective.jpg.asset.json";
import execution from "@/assets/proof/case-execution.jpg.asset.json";
import learning from "@/assets/proof/case-learning.jpg.asset.json";
import { mediaUrl } from "@/lib/media-url";

export const coachingCaseStudies = [
  {
    id: "mike", asset: strategy,
    title: "Mike · rebuilding after a blown account", frTitle: "Mike · reconstruction après un compte grillé",
    note: "Mike wants to complete his work on the strategy before the next week, trade another account and be prepared for different market conditions.",
    frNote: "Mike souhaite terminer son travail sur la stratégie avant la semaine suivante, trader un autre compte et être préparé aux différentes conditions de marché.",
    experience: "Mike was an inexperienced trader who had recently blown an account.",
    frExperience: "Mike était un trader inexpérimenté qui venait de griller un compte.",
    beginning: "After joining the coaching program, he understood the strategy and worked on it.",
    frBeginning: "Après avoir rejoint le programme de coaching, il a compris la stratégie et l’a travaillée.",
    focus: "He is preparing another trading account to apply the strategy in changing market conditions.",
    frFocus: "Il prépare un autre compte de trading pour appliquer la stratégie dans des conditions de marché changeantes.",
  },
  {
    id: "mike-result", asset: execution,
    title: "Mike · result of the work", frTitle: "Mike · résultat du travail",
    note: "The TradeLocker screenshot displays $20.63 profit on a 0.01-lot XAUUSD buy, opened at 4,568.76 and closed at 4,589.39 on August 21, 2026. This single trade does not establish overall profitability.",
    frNote: "La capture TradeLocker affiche un gain de 20,63 $ sur un achat XAUUSD de 0,01 lot, ouvert à 4 568,76 et clôturé à 4 589,39 le 21 août 2026. Ce trade isolé ne démontre pas une rentabilité globale.",
    experience: "This trade is presented as the result of Mike’s work after rebuilding his approach.",
    frExperience: "Ce trade est présenté comme le résultat du travail de Mike après la reconstruction de son approche.",
    beginning: "It follows the preparation shown in Mike’s first case study.",
    frBeginning: "Il fait suite à la préparation présentée dans la première étude de cas de Mike.",
    focus: "Review entry, exit and position size; no risk plan or full account history is shown.",
    frFocus: "Examiner l’entrée, la sortie et la taille de position ; aucun plan de risque ni historique complet du compte n’est présenté.",
  },
  {
    id: "harry", asset: perspective,
    title: "Harry · experience without a clear strategy", frTitle: "Harry · l’expérience sans stratégie claire",
    note: "Harry appreciates the breakdown and point of view, recognizing that he sometimes focuses too narrowly and forgets the larger picture.",
    frNote: "Harry apprécie l’analyse et le point de vue, reconnaissant qu’il se focalise parfois trop étroitement et oublie la vision d’ensemble.",
    experience: "Harry was an experienced trader, but he did not have a clear strategy.",
    frExperience: "Harry était un trader expérimenté, mais il n’avait pas de stratégie claire.",
    beginning: "His trading history combined good wins with a blown account.",
    frBeginning: "Son historique de trading combinait de bons gains et un compte grillé.",
    focus: "Reconnect individual setups with the broader market picture through structured review.",
    frFocus: "Relier chaque configuration au contexte global du marché grâce à une analyse structurée.",
  },
  {
    id: "harry-progress", asset: learning,
    title: "Harry · learning and commitment", frTitle: "Harry · apprentissage et engagement",
    note: "Harry thanks the coach and says he would not have learned as much without his support.",
    frNote: "Harry remercie le coach et indique qu’il n’aurait pas autant appris sans son accompagnement.",
    experience: "The message shows what he learned through the coaching support.",
    frExperience: "Le message montre ce qu’il a appris grâce à l’accompagnement du coaching.",
    beginning: "It follows the lack of a clear strategy described in Harry’s first case study.",
    frBeginning: "Il fait suite au manque de stratégie claire décrit dans la première étude de cas de Harry.",
    focus: "He is willing to pursue the coaching program.",
    frFocus: "Il est prêt à poursuivre le programme de coaching.",
  },
].map(({ asset, ...item }) => ({
  ...item, src: mediaUrl(asset.url), program: "one-on-one" as const,
  level: "Not specified in the supplied attachment.",
  frLevel: "Non précisé dans la pièce jointe fournie.",
}));