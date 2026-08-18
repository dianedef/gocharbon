import type { Doc } from "./_generated/dataModel";

const META: Record<string, { label: string; beginner: string; advanced: string }> = {
  finance: { label: "Finance", beginner: "Repose des bases claires sur les chiffres qui pilotent un business.", advanced: "Passe des notions de base à des décisions financières plus solides." },
  marketing: { label: "Marketing", beginner: "Fixe les fondamentaux d'acquisition et de conversion avant d'aller plus loin.", advanced: "Passe de la compréhension des leviers à une stratégie d'acquisition plus structurée." },
  management: { label: "Management", beginner: "Clarifie les repères utiles pour organiser, prioriser et mieux décider.", advanced: "Approfondis les cadres qui aident à piloter une équipe ou un projet." },
  ecommerce: { label: "E-commerce", beginner: "Repars sur les bases qui font vendre sans complexité inutile.", advanced: "Passe des fondamentaux e-commerce à une logique d'optimisation plus fine." },
};

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
    .map((course, index) => ({ id: course.sourceId, title: course.title, description: course.description, url: course.url, category: course.category, level: course.level, matchPriority: index === 0 ? "primary" : "secondary" }));
  return {
    recommendations: selected,
    context: { targetCategory: target, targetCategoryLabel: meta.label, targetLevel: level, accuracy: Math.round(args.accuracy * 10_000) / 10_000, focus: level === "advanced" ? meta.advanced : meta.beginner },
  };
}
