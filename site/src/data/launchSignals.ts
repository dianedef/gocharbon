export type LaunchSignal = {
  pathId: "freelance" | "testeur-utilisateur" | "content-creator" | "ecommerce" | "formation";
  kicker: string;
  title: string;
  description: string;
  sources: Array<{
    label: string;
    href: string;
  }>;
};

export const launchSignals: LaunchSignal[] = [
  {
    pathId: "freelance",
    kicker: "Service",
    title: "La spécialisation aide à vendre",
    description:
      "Upwork et Malt vont dans le même sens : quand l’expertise est lisible, le client comprend plus vite la valeur et la discussion sort plus facilement de la guerre de prix.",
    sources: [
      { label: "Upwork", href: "https://www.upwork.com/research/future-workforce-index-2025" },
      { label: "Malt", href: "https://pages.malt.fr/hubfs/FIE_2024/FILES/pdf_FIE-2024_digital_fr.pdf" },
    ],
  },
  {
    pathId: "testeur-utilisateur",
    kicker: "Revenu d’appoint",
    title: "Les plateformes paient, mais elles filtrent",
    description:
      "UserTesting, Respondent et Prolific confirment le même cadre : missions courtes, sélection réelle, qualité de profil décisive. C’est utile si tu traites ça proprement, pas si tu cliques partout.",
    sources: [
      { label: "UserTesting", href: "https://www.usertesting.com/get-paid-to-test" },
      { label: "Respondent", href: "https://www.respondent.io/become-a-participant" },
      {
        label: "Prolific",
        href: "https://participant-help.prolific.com/en/articles/445004-participant-wellbeing-how-we-look-after-you",
      },
    ],
  },
  {
    pathId: "content-creator",
    kicker: "Audience",
    title: "Une audience utile vaut mieux qu’une portée floue",
    description:
      "Kit et l’IAB montrent un marché réel, mais très inégal : la confiance, l’angle et les revenus plus propriétaires comptent davantage qu’un gros compteur de vues sans direction.",
    sources: [
      { label: "Kit", href: "https://kit.com/reports/creator-economy-2024" },
      {
        label: "IAB",
        href: "https://www.iab.com/insights/2025-creator-economy-ad-spend-strategy-report/",
      },
    ],
  },
  {
    pathId: "ecommerce",
    kicker: "Produit",
    title: "La conversion fuit avant l’acquisition",
    description:
      "Baymard documente encore un abandon panier élevé ; Klaviyo rappelle que le réachat compte vite. Avant d’acheter du trafic, il faut déjà fermer les fuites évidentes.",
    sources: [
      { label: "Baymard", href: "https://baymard.com/blog/ecommerce-checkout-usability-report-and-benchmark" },
      { label: "Klaviyo", href: "https://www.klaviyo.com/bfcm/holiday-shopping-trends" },
    ],
  },
  {
    pathId: "formation",
    kicker: "Transmission",
    title: "Une bonne formation promet un résultat, pas 40 vidéos",
    description:
      "Voice of the Online Learner et HBS Online rappellent la même chose : les gens achètent un chemin crédible, compatible avec leur vraie vie, pas un entrepôt de contenu.",
    sources: [
      {
        label: "Voice of the Online Learner",
        href: "https://www.academicpartnerships.com/wp-content/uploads/2024/09/VOL-2024.pdf",
      },
      {
        label: "HBS Online",
        href: "https://online.hbs.edu/why-hbs-online/about-our-courses-and-programs/policies",
      },
    ],
  },
];
