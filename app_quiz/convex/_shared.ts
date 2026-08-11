import type { Doc } from "./_generated/dataModel";

export const QUIZ_CATEGORIES = ["finance", "marketing", "management", "ecommerce", "random", "daily"] as const;
export const CONCRETE_CATEGORIES = ["finance", "marketing", "management", "ecommerce"] as const;
export const LEVELS = [
  [0, 1, "Débutant"],
  [1000, 2, "Apprenti"],
  [3000, 3, "Intermédiaire"],
  [8000, 4, "Expert"],
  [15000, 5, "Maître"],
] as const;

export const BADGES = {
  first_quiz: { name: "Premier Pas", description: "Complétez votre premier quiz", icon: "flag" },
  perfect_score: { name: "Score Parfait", description: "Obtenez un score parfait", icon: "star" },
  speed_demon: { name: "Éclair", description: "Terminez un quiz chronométré en moins de 60 s", icon: "flash" },
  streak_5: { name: "En Feu", description: "5 bonnes réponses consécutives", icon: "fire" },
  streak_10: { name: "Inarrêtable", description: "10 bonnes réponses consécutives", icon: "shield" },
  finance_5: { name: "Gourou Finance", description: "5 quiz Finance complétés", icon: "cash" },
  marketing_5: { name: "Pro Marketing", description: "5 quiz Marketing complétés", icon: "bullhorn" },
  management_5: { name: "As du Management", description: "5 quiz Management complétés", icon: "briefcase" },
  ecommerce_5: { name: "Expert E-commerce", description: "5 quiz E-commerce complétés", icon: "cart" },
  level_3: { name: "Intermédiaire", description: "Atteignez le niveau 3", icon: "trending-up" },
  level_5: { name: "Maître Business", description: "Atteignez le niveau 5", icon: "trophy" },
  quiz_10: { name: "Quizzeur Assidu", description: "Complétez 10 quiz", icon: "book" },
  quiz_25: { name: "Expert Quiz", description: "Complétez 25 quiz", icon: "school" },
} as const;

export function requireFirebaseUid(identity: { subject: string } | null) {
  if (!identity?.subject) throw new Error("AUTH_REQUIRED");
  return identity.subject;
}

export function levelForXp(xp: number) {
  let level = LEVELS[0];
  for (const candidate of LEVELS) if (xp >= candidate[0]) level = candidate;
  return { level: level[1], levelName: level[2] };
}

export function publicQuestion(question: Doc<"questions">) {
  return {
    id: question._id,
    sourceId: question.sourceId,
    text: question.text,
    kind: question.kind,
    category: question.category,
    difficulty: question.difficulty,
    options: question.options,
  };
}

export function publicProfile(profile: Doc<"profiles">) {
  return {
    username: profile.username,
    avatarColor: profile.avatarColor,
    totalScore: profile.totalScore,
    xp: profile.xp,
    level: profile.level,
    levelName: profile.levelName,
    badges: profile.badges.map((id) => ({ id, ...BADGES[id as keyof typeof BADGES] })),
    stats: {
      totalQuizzes: profile.totalQuizzes,
      correctAnswers: profile.correctAnswers,
      totalAnswers: profile.totalAnswers,
      bestStreak: profile.bestStreak,
    },
  };
}

export function scoreAnswers(answers: Array<{ isCorrect: boolean; timeTakenMs: number }>) {
  let streak = 0;
  let bestStreak = 0;
  let timeBonus = 0;
  for (const answer of answers) {
    if (!answer.isCorrect) {
      streak = 0;
      continue;
    }
    streak += 1;
    bestStreak = Math.max(bestStreak, streak);
    timeBonus += Math.floor((Math.max(0, 15_000 - answer.timeTakenMs) * 50) / 15_000);
  }
  const correctCount = answers.filter((answer) => answer.isCorrect).length;
  const baseScore = correctCount * 100;
  const streakBonus = bestStreak >= 10 ? 100 : bestStreak >= 5 ? 50 : 0;
  const streakMultiplier = bestStreak >= 10 ? 2 : bestStreak >= 5 ? 1.5 : 1;
  const totalScore = Math.floor((baseScore + timeBonus + streakBonus) * streakMultiplier);
  return { correctCount, baseScore, timeBonus, streakBonus, streakMultiplier, totalScore, bestStreak };
}
