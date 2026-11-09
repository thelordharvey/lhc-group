import strategy from "@/assets/proof/case-strategy.jpg.asset.json";
import perspective from "@/assets/proof/case-perspective.jpg.asset.json";
import execution from "@/assets/proof/case-execution.jpg.asset.json";
import learning from "@/assets/proof/case-learning.jpg.asset.json";
import ftmo from "@/assets/proof/case-ftmo.jpg.asset.json";
import { mediaUrl } from "@/lib/media-url";

export const coachingCaseStudies = [
  {
    id: "mike", asset: strategy,
    title: "Mike · rebuilding after a blown account", frTitle: "Mike · reconstruction après un compte grillé",
    note: "Mike came back to us determined: master the strategy before next week, open a new account, and be ready for whatever the market throws at him.",
    frNote: "Mike est revenu vers nous déterminé : maîtriser la stratégie avant la semaine suivante, ouvrir un nouveau compte et être prêt à toutes les conditions de marché.",
    experience: "When Mike reached out, he was new to trading and had just blown an account.",
    frExperience: "Quand Mike nous a contactés, il débutait et venait de griller un compte.",
    beginning: "Once he joined the program, it clicked — he understood the strategy and put in the work.",
    frBeginning: "Dès son entrée dans le programme, le déclic s’est fait : il a compris la stratégie et s’est mis au travail.",
    focus: "Now he's getting a fresh account ready, and this time he knows exactly what to do.",
    frFocus: "Aujourd’hui, il prépare un nouveau compte, et cette fois il sait exactement quoi faire.",
  },
  {
    id: "mike-result", asset: execution,
    title: "Mike · result of the work", frTitle: "Mike · résultat du travail",
    note: "And here's what that work looks like: a clean XAUUSD buy, in at 4,568.76, out at 4,589.39, closed for +$20.63. Small lot, right process — that's how it starts.",
    frNote: "Et voici ce que donne ce travail : un achat XAUUSD propre, entrée à 4 568,76, sortie à 4 589,39, clôturé à +20,63 $. Petit lot, bon processus — c’est comme ça que tout commence.",
    experience: "This is Mike putting his rebuilt approach to work.",
    frExperience: "C’est Mike qui met en pratique son approche reconstruite.",
    beginning: "It came right after the weeks of preparation you just read about.",
    frBeginning: "Il arrive juste après les semaines de préparation que vous venez de lire.",
    focus: "Patient entry, planned exit, controlled size — exactly what we drilled together.",
    frFocus: "Entrée patiente, sortie planifiée, taille maîtrisée — exactement ce qu’on a travaillé ensemble.",
  },
  {
    id: "harry", asset: perspective,
    title: "Harry · experience without a clear strategy", frTitle: "Harry · l’expérience sans stratégie claire",
    note: "After one of our breakdowns, Harry told us it was good to have a fresh pair of eyes — he admitted he sometimes tunnels in and loses the bigger picture.",
    frNote: "Après l’une de nos analyses, Harry nous a dit qu’un regard neuf lui faisait du bien — il a reconnu qu’il se focalise parfois trop et perd la vue d’ensemble.",
    experience: "Harry wasn't new to this. He had the experience, just not a clear strategy.",
    frExperience: "Harry n’était pas un débutant. Il avait l’expérience, mais pas de stratégie claire.",
    beginning: "Some great wins — and then a blown account. A story a lot of traders know.",
    frBeginning: "De beaux gains… puis un compte grillé. Une histoire que beaucoup de traders connaissent.",
    focus: "We worked on linking every setup back to the bigger market picture.",
    frFocus: "Nous avons travaillé à relier chaque configuration au contexte global du marché.",
  },
  {
    id: "harry-progress", asset: learning,
    title: "Harry · learning and commitment", frTitle: "Harry · apprentissage et engagement",
    note: "“I wouldn’t have learned so much without you.” Messages like this from Harry are why we do what we do.",
    frNote: "« Je n’aurais pas autant appris sans toi. » Des messages comme celui de Harry, c’est pour ça qu’on fait ce métier.",
    experience: "He's come a long way since his first sessions with us.",
    frExperience: "Il a fait beaucoup de chemin depuis ses premières séances avec nous.",
    beginning: "He started without a clear plan — now he trades with one.",
    frBeginning: "Il a commencé sans plan clair — aujourd’hui, il trade avec un.",
    focus: "He's staying with the program, and we're proud to keep building with him.",
    frFocus: "Il continue le programme, et nous sommes fiers de poursuivre avec lui.",
  },
  {
    id: "ftmo-milestone", asset: ftmo,
    title: "A member · FTMO funded account verification", frTitle: "Un membre · vérification du compte financé FTMO réussie",
    note: "One of our members just passed the FTMO funded account verification — and the first thing they did was message Harvey to say thank you. Moments like this make the whole team proud.",
    frNote: "L’un de nos membres vient de réussir la vérification de son compte financé FTMO — et son premier réflexe a été d’écrire à Harvey pour le remercier. Ce genre de moment rend toute l’équipe fière.",
    experience: "They shared the news with Harvey straight away.",
    frExperience: "La nouvelle a été partagée directement avec Harvey.",
    beginning: "Their own words, after months of coaching together.",
    frBeginning: "Ses propres mots, après des mois de coaching ensemble.",
    focus: "Passing a funded challenge — a real milestone, and hopefully the first of many.",
    frFocus: "Réussir un challenge financé — une vraie étape, et on l’espère la première d’une longue série.",
  },
].map(({ asset, ...item }) => ({
  ...item, src: mediaUrl(asset.url), program: "one-on-one" as const,
  level: "Not specified in the supplied attachment.",
  frLevel: "Non précisé dans la pièce jointe fournie.",
}));