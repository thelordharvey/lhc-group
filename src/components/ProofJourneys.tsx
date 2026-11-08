import { useState } from "react";
import { ArrowDown, ArrowUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { coachingCaseStudies } from "@/lib/coaching-case-studies";
import { useSiteSettings } from "@/lib/site-settings";

export function ProofJourneys() {
  const { language } = useSiteSettings();
  const fr = language === "fr";
  const [expanded, setExpanded] = useState<string[]>([]);
  const journeys = [
    {
      id: "mike", name: "Mike", resultId: "mike-result",
      profile: fr ? "Trader débutant · Reconstruire son approche" : "New trader · Rebuilding his approach",
      headline: fr ? "D’un compte grillé à une stratégie mieux comprise." : "From a blown account to a better understanding of his strategy.",
      summary: fr ? "Inexpérimenté et après la perte d’un compte, Mike rejoint le coaching. Il comprend la stratégie, la travaille et prépare un nouveau compte pour l’appliquer. Le trade partagé illustre une étape de ce travail, pas une rentabilité globale." : "After losing an account, Mike joined coaching as an inexperienced trader. He understood the strategy, worked on it and began preparing another account. The shared trade illustrates one step in that work, not overall profitability.",
      tags: fr ? ["Compréhension de la stratégie", "Préparation d’un nouveau compte", "Trade clôturé : +20,63 $"] : ["Understanding the strategy", "Preparing another account", "Closed trade: +$20.63"],
    },
    {
      id: "harry", name: "Harry", resultId: "harry-progress",
      profile: fr ? "Trader expérimenté · Structurer sa méthode" : "Experienced trader · Structuring his method",
      headline: fr ? "De l’expérience, mais pas encore de stratégie claire." : "Experience, but not yet a clear strategy.",
      summary: fr ? "Harry avait de l’expérience et de bons gains, suivis d’un compte grillé. L’accompagnement l’aide à remettre ses analyses dans le contexte global. Son message témoigne de son apprentissage ; il souhaite poursuivre le coaching." : "Harry had experience and good wins, followed by a blown account. Coaching helps him put individual setups back into the broader market context. His message reflects what he learned, and he wants to continue coaching.",
      tags: fr ? ["Vision d’ensemble", "Analyse structurée", "Apprentissage & engagement"] : ["Broader market perspective", "Structured review", "Learning & commitment"],
    },
  ];

  return (
    <div className="grid items-start gap-6 md:grid-cols-2">
      {journeys.map((journey, index) => {
        const start = coachingCaseStudies.find((item) => item.id === journey.id);
        const result = coachingCaseStudies.find((item) => item.id === journey.resultId);
        if (!start || !result) return null;
        const open = expanded.includes(journey.id);
        return (
          <article key={journey.id} className="proof-float proof-glass liquid-glass liquid-glass-sheen overflow-hidden rounded-2xl">
            <div className="relative border-b border-border bg-secondary/40 p-5">
              <span className="inline-flex rounded-full border border-primary/25 bg-background/80 px-3 py-1.5 text-xs font-medium text-primary">
                {fr ? "Étude de cas" : "Case study"} {String(index + 1).padStart(2, "0")}
              </span>
              <img src={start.src} alt={fr ? start.frTitle : start.title} loading="lazy" className="mt-5 aspect-[16/10] w-full object-contain" />
            </div>
            <div className="p-6 sm:p-7">
              <h3 className="text-3xl font-semibold">{journey.name}</h3>
              <p className="mt-2 text-xs text-primary">{journey.profile}</p>
              <p className="mt-5 text-lg font-medium leading-relaxed">{journey.headline}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{journey.summary}</p>
              <ul className="mt-5 space-y-2.5">
                {journey.tags.map((tag) => <li key={tag} className="flex items-center gap-2 text-xs text-muted-foreground"><Check aria-hidden className="size-3.5 shrink-0 text-primary" />{tag}</li>)}
              </ul>
              <Button variant="ghost" aria-expanded={open} aria-controls={`journey-${journey.id}`} onClick={() => setExpanded((previous) => open ? previous.filter((id) => id !== journey.id) : [...previous, journey.id])} className="mt-6 h-auto px-0 py-2 text-primary hover:bg-transparent hover:text-primary-glow">
                {open ? (fr ? "Réduire le parcours" : "Close journey") : (fr ? "Découvrir son parcours" : "Discover his journey")}
                {open ? <ArrowUp /> : <ArrowDown />}
              </Button>
              <div id={`journey-${journey.id}`} hidden={!open} className="mt-4 border-t border-border pt-5">
                <dl className="space-y-4 text-sm">
                  {[
                    [fr ? "Le point de départ" : "Starting point", fr ? start.frExperience : start.experience],
                    [fr ? "Le travail réalisé" : "The work", fr ? start.frBeginning : start.beginning],
                    [fr ? "La suite" : "Next steps", fr ? start.frFocus : start.focus],
                  ].map(([label, text]) => <div key={label}><dt className="font-medium">{label}</dt><dd className="mt-1 leading-relaxed text-muted-foreground">{text}</dd></div>)}
                </dl>
              </div>
            </div>
            <figure className="border-t border-border bg-background/30 p-5 sm:p-7">
              <p className="mb-4 text-xs font-semibold text-primary">{fr ? "La progression, en images" : "Progress, in pictures"}</p>
              <img src={result.src} alt={fr ? result.frTitle : result.title} loading="lazy" className="max-h-80 w-full object-contain" />
              <figcaption className="mt-4 text-xs leading-6 text-muted-foreground">{fr ? result.frNote : result.note}</figcaption>
            </figure>
          </article>
        );
      })}
    </div>
  );
}