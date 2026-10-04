import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Language = "en" | "fr";
type Theme = "dark" | "light";

const french: Record<string, string> = {
  "Method": "Méthode", "Process": "Processus", "Proof": "Résultats", "Courses": "Formations", "Coaching": "Accompagnement", "Home": "Accueil", "Contact": "Contact", "DM": "Message",
  "Forex coaching group": "Groupe de coaching Forex",
  "Trade with consistency.": "Tradez avec régularité.",
  "Grow for the long term.": "Progressez sur le long terme.",
  "LHC Forex is a coaching group for traders tired of good weeks followed by blown accounts. We build the process — risk, psychology and a plan you actually follow — through personalized 1-on-1 coaching.": "LHC Forex accompagne les traders qui enchaînent les bonnes semaines et les comptes perdus. Ensemble, nous bâtissons une méthode : gestion du risque, psychologie et plan que vous pouvez réellement suivre, grâce à un coaching individuel.",
  "Message us on Instagram": "Écrivez-nous sur Instagram", "See the proof": "Voir les résultats",
  "Traders coached": "Traders accompagnés", "Live weekly reviews": "Bilans hebdomadaires", "Max risk per trade": "Risque max. par trade", "Desk support": "Assistance continue",
  "The method": "La méthode", "Performance is a system, not a lucky streak": "La performance est une méthode, pas une série de coups de chance",
  "Risk architecture": "Gestion du risque", "Position sizing, drawdown caps and rules that keep your capital alive through losing streaks.": "Taille des positions, limites de pertes et règles qui protègent votre capital pendant les séries négatives.",
  "Trader psychology": "Psychologie du trader", "Routines, tilt triggers and accountability so your execution matches your plan every session.": "Routines, déclencheurs émotionnels et suivi pour respecter votre plan à chaque séance.",
  "Edge refinement": "Amélioration de votre avantage", "We audit your journal, tag every setup and cut what does not pay you over a real sample.": "Nous analysons votre journal, classons vos configurations et éliminons ce qui ne fonctionne pas sur un échantillon réel.",
  "Personalized roadmap": "Feuille de route personnalisée", "A written plan built around your schedule, account size and target pace of growth.": "Un plan écrit adapté à votre emploi du temps, à votre capital et à votre rythme de progression.",
  "From leaks to a stable curve": "Des erreurs à une progression stable", "Audit": "Analyse", "We review your last 30 trades and find the leaks costing you consistency.": "Nous examinons vos 30 derniers trades pour trouver ce qui nuit à votre régularité.",
  "Blueprint": "Plan de trading", "You receive a written trading plan with rules, risk model and weekly targets.": "Vous recevez un plan écrit avec des règles, un modèle de risque et des objectifs hebdomadaires.",
  "Weekly live reviews with your coach until the process runs without you forcing it.": "Des bilans en direct chaque semaine avec votre coach jusqu'à ce que votre méthode devienne naturelle.",
  "Scale": "Progression", "Once the curve is stable we increase size and prepare you for funded capital.": "Une fois vos résultats stabilisés, nous augmentons la taille des positions et vous préparons au capital financé.",
  "Choose how you want to level up": "Choisissez votre parcours",
  "Two coaching options built for traders who want structure, accountability and a process they can repeat.": "Deux options pour les traders qui recherchent une structure, un suivi et une méthode reproductible.",
  "View courses": "Voir les formations", "Hide courses": "Masquer les formations",
  "1-on-1 Coaching Program": "Coaching individuel", "Tailored Strategy Access": "Accès à une stratégie sur mesure",
  "Personalized trading plan built around your schedule": "Plan de trading personnalisé selon votre emploi du temps", "Daily trade recap call with your coach": "Appel quotidien avec votre coach pour faire le bilan des trades", "Risk and psychology review every session": "Bilan du risque et de la psychologie à chaque séance", "Direct feedback on your journal and setups": "Retours directs sur votre journal et vos configurations",
  "Strategy matched to your daily routine": "Stratégie adaptée à votre quotidien", "Private group with daily trade recaps": "Groupe privé avec bilans de trades quotidiens", "Curated market information and setups": "Informations de marché et configurations sélectionnées", "Community accountability and Q&A": "Suivi collectif et questions-réponses",
  "Apply for 1-on-1": "Postuler au coaching individuel", "Join the private group": "Rejoindre le groupe privé", "or": "ou", "month": "mois",
  "Ready for consistent execution?": "Prêt à trader avec régularité ?", "Send a DM on Instagram and a LHC Forex coach will answer with your next step toward long-term financial growth.": "Envoyez un message sur Instagram : un coach LHC Forex vous indiquera la prochaine étape vers une progression durable.",
  "Coaching group": "Groupe de coaching",
  "Real charts from the coaching desk": "De vrais graphiques de notre équipe de coaching",
  "Setups shared with our students — orderblocks, imbalance, liquidity and Fibonacci executed with the same rules we teach in 1-on-1 coaching.": "Des configurations partagées avec nos élèves : blocs d'ordres, déséquilibres, liquidité et Fibonacci, selon les mêmes règles enseignées en coaching individuel.",
  "Fibonacci retracement into the 0.62–0.782 zone, entry from the orderblock with the low as invalidation.": "Retracement de Fibonacci vers la zone 0,62–0,782, entrée depuis le bloc d'ordres et invalidation sous le plus bas.",
  "Two clean Fib setups back to back — long from discount, then short from the premium supply block.": "Deux configurations Fibonacci successives : achat en zone basse, puis vente depuis la zone d'offre haute.",
  "Live desk execution: last orderblock on trend, stop under the lowest low, expansion into resting liquidity.": "Exécution en direct : dernier bloc d'ordres dans la tendance, stop sous le plus bas et mouvement vers la liquidité.",
  "Back home": "Retour à l'accueil", "Aug 11, 2026": "11 août 2026", "Aug 12, 2026": "12 août 2026", "Jun 11, 2026": "11 juin 2026",
  "LHC Forex assistant": "Assistant LHC Forex", "Answers about coaching & courses": "Réponses sur le coaching et les formations",
  "Hi 👋 Ask me anything about LHC Forex — coaching, courses, pricing or how to start.": "Bonjour 👋 Posez-moi vos questions sur LHC Forex : coaching, formations, tarifs ou inscription.",
  "What do the courses cost?": "Combien coûtent les formations ?", "How does the 1-on-1 coaching work?": "Comment fonctionne le coaching individuel ?", "How do I get started?": "Comment commencer ?",
  "Thinking...": "Réflexion en cours...", "Something went wrong. Please try again, or DM @thelordharvey on Instagram.": "Une erreur s'est produite. Réessayez ou écrivez à @thelordharvey sur Instagram.", "Ask a question...": "Posez une question...",
  "Open FAQ chat": "Ouvrir le chat FAQ", "Close FAQ chat": "Fermer le chat FAQ",
};

type Settings = { language: Language; theme: Theme; setLanguage: (value: Language) => void; setTheme: (value: Theme) => void; t: (text: string) => string };
const SettingsContext = createContext<Settings | null>(null);

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    try {
      if (localStorage.getItem("lhc-language") === "fr") setLanguage("fr");
      if (localStorage.getItem("lhc-theme") === "light") setTheme("light");
    } catch { /* Storage can be unavailable in private browsing. */ }
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    try { localStorage.setItem("lhc-language", language); } catch { /* No persistence available. */ }
  }, [language]);
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem("lhc-theme", theme); } catch { /* No persistence available. */ }
  }, [theme]);
  return <SettingsContext.Provider value={{ language, theme, setLanguage, setTheme, t: (text) => language === "fr" ? french[text] ?? text : text }}>{children}</SettingsContext.Provider>;
}

export function useSiteSettings() {
  const settings = useContext(SettingsContext);
  if (!settings) throw new Error("Site settings provider missing");
  return settings;
}
