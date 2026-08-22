import type { Doc } from "./_generated/dataModel";

const PUBLIC_SITE_ORIGIN = "https://gocharbon.fr";
const PUBLIC_RECOMMENDATION_PATHS = new Set([
  "/parcours",
  "/parcours/freelance",
  "/parcours/createur-contenu",
  "/parcours/e-commerce",
  "/parcours/formation",
  "/parcours/tests-utilisateurs-remuneres",
]);

const META: Record<string, { label: string; beginner: string; advanced: string }> = {
  finance: { label: "Finance", beginner: "Repose des bases claires sur les chiffres qui pilotent un business.", advanced: "Passe des notions de base à des décisions financières plus solides." },
  marketing: { label: "Marketing", beginner: "Fixe les fondamentaux d'acquisition et de conversion avant d'aller plus loin.", advanced: "Passe de la compréhension des leviers à une stratégie d'acquisition plus structurée." },
  management: { label: "Management", beginner: "Clarifie les repères utiles pour organiser, prioriser et mieux décider.", advanced: "Approfondis les cadres qui aident à piloter une équipe ou un projet." },
  ecommerce: { label: "E-commerce", beginner: "Repars sur les bases qui font vendre sans complexité inutile.", advanced: "Passe des fondamentaux e-commerce à une logique d'optimisation plus fine." },
};

function attributedParcoursUrl(category: string, level: string) {
  const url = new URL("/parcours", PUBLIC_SITE_ORIGIN);
  url.searchParams.set("utm_source", "gocharbon_quiz");
  url.searchParams.set("utm_medium", "app");
  url.searchParams.set("utm_campaign", "knowledge_quiz");
  url.searchParams.set("utm_content", `${category}_${level}_fallback`);
  return url.toString();
}

export function resolvePublishedRecommendationUrl(rawUrl: string, category: string, level: string) {
  try {
    const candidate = new URL(rawUrl);
    if (candidate.origin === PUBLIC_SITE_ORIGIN && PUBLIC_RECOMMENDATION_PATHS.has(candidate.pathname)) {
      candidate.hash = "";
      candidate.searchParams.set("utm_source", "gocharbon_quiz");
      candidate.searchParams.set("utm_medium", "app");
      candidate.searchParams.set("utm_campaign", "knowledge_quiz");
      if (!candidate.searchParams.has("utm_content")) {
        candidate.searchParams.set("utm_content", `${category}_${level}`);
      }
      return { url: candidate.toString(), fallback: false };
    }
  } catch {
    // Invalid and non-public URLs deliberately converge on the public hub.
  }
  return { url: attributedParcoursUrl(category, level), fallback: true };
}

function publicRecommendation(course: Doc<"courses">, index: number, category: string) {
  const destination = resolvePublishedRecommendationUrl(course.url, category, course.level);
  return {
    id: course.sourceId,
    title: destination.fallback ? "Choisir ton prochain parcours GoCharbon" : course.title,
    description: destination.fallback
      ? "Explore les parcours actuellement disponibles pour transformer tes connaissances en prochaine action."
      : course.description,
    url: destination.url,
    category: course.category,
    level: course.level,
    matchPriority: index === 0 ? "primary" : "secondary",
    destinationFallback: destination.fallback,
  };
}

export function buildRecommendations(args: {
  category: string;
  answers: Array<{ category: string; difficulty: string; isCorrect: boolean }>;
  courses: Doc<"courses">[];
  accuracy: number;
}) {
  const stats = new Map<string, { asked: number; wrong: number; correct: number; easyWrong: number }>();
  for (const answer of args.answers) {
    const current = stats.get(answer.category) ?? { asked: 0, wrong: 0, correct: 0, easyWrong: 0 };
    current.asked += 1;
    if (answer.isCorrect) current.correct += 1;
    else { current.wrong += 1; if (answer.difficulty === "easy") current.easyWrong += 1; }
    stats.set(answer.category, current);
  }
  const target = args.category === "random" || args.category === "daily"
    ? [...stats.entries()].sort((a, b) => b[1].wrong - a[1].wrong || a[0].localeCompare(b[0]))[0]?.[0] ?? "finance"
    : args.category;
  const targetStats = stats.get(target) ?? { asked: 0, wrong: 0, correct: 0, easyWrong: 0 };
  const targetAccuracy = targetStats.correct / Math.max(1, targetStats.asked);
  const level = targetAccuracy >= 0.8 && targetStats.easyWrong === 0 ? "advanced" : "beginner";
  const meta = META[target] ?? META.finance;
  const selected = args.courses.filter((course) => course.isActive && course.category === target)
    .sort((a, b) => Number(b.level === level) - Number(a.level === level)).slice(0, 2)
    .map((course, index) => publicRecommendation(course, index, target));
  const recommendations = selected.length > 0 ? selected : [{
    id: `parcours-${target}-${level}`,
    title: "Choisir ton prochain parcours GoCharbon",
    description: "Explore les parcours actuellement disponibles pour transformer tes connaissances en prochaine action.",
    url: attributedParcoursUrl(target, level),
    category: target,
    level,
    matchPriority: "primary",
    destinationFallback: true,
  }];
  return {
    recommendations,
    context: {
      targetCategory: target,
      targetCategoryLabel: meta.label,
      targetLevel: level,
      accuracy: Math.round(args.accuracy * 10_000) / 10_000,
      eyebrow: "TES CONNAISSANCES",
      title: level === "advanced" ? `Tu maîtrises déjà bien les bases en ${meta.label}.` : `Tes connaissances restent à consolider en ${meta.label}.`,
      summary: "Ce résultat mesure ta maîtrise du thème joué, pas le type de business qui te correspond.",
      focus: level === "advanced" ? meta.advanced : meta.beginner,
      reason: "Cette ressource est choisie d'après tes réponses et ton niveau de connaissances.",
      ctaLabel: "Continuer sur GoCharbon",
    },
  };
}
