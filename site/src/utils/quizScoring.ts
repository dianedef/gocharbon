import {
  CANONICAL_ARCHETYPES,
  type CanonicalArchetype,
} from "../data/profileTaxonomy.ts";

export type QuizScores = Record<CanonicalArchetype, number>;

interface QuizOptionLike {
  points?: Partial<QuizScores>;
}

interface QuizQuestionLike {
  options?: QuizOptionLike[];
}

export interface RankedQuizResult {
  profile: CanonicalArchetype;
  rawScore: number;
  maxScore: number;
  affinity: number;
}

export function getQuizMaximumScores(
  questions: QuizQuestionLike[],
): QuizScores {
  const maximums = Object.fromEntries(
    CANONICAL_ARCHETYPES.map((profile) => [profile, 0]),
  ) as QuizScores;

  for (const question of questions) {
    for (const profile of CANONICAL_ARCHETYPES) {
      const optionMaximum = Math.max(
        0,
        ...(question.options ?? []).map(
          (option) => option.points?.[profile] ?? 0,
        ),
      );
      maximums[profile] += optionMaximum;
    }
  }

  return maximums;
}

export function rankQuizResults(
  scores: QuizScores,
  questions: QuizQuestionLike[],
): RankedQuizResult[] {
  const maximums = getQuizMaximumScores(questions);

  return CANONICAL_ARCHETYPES.map((profile, canonicalIndex) => {
    const maxScore = maximums[profile];
    const rawScore = scores[profile];
    return {
      profile,
      rawScore,
      maxScore,
      affinity: maxScore > 0 ? Math.round((rawScore / maxScore) * 100) : 0,
      canonicalIndex,
    };
  })
    .sort(
      (a, b) => b.affinity - a.affinity || a.canonicalIndex - b.canonicalIndex,
    )
    .map(({ canonicalIndex: _canonicalIndex, ...result }) => result);
}

export function describeQuizSignal(
  firstAffinity: number,
  secondAffinity: number,
) {
  const gap = Math.max(0, firstAffinity - secondAffinity);

  if (gap >= 12) {
    return {
      level: "high",
      label: "Direction nette",
      description:
        "Une direction ressort clairement de tes réponses. Utilise-la comme premier terrain de test, pas comme une étiquette définitive.",
    } as const;
  }

  if (gap >= 6) {
    return {
      level: "medium",
      label: "Direction nuancée",
      description:
        "Une voie prend l'avantage, mais une seconde reste crédible. Compare-les avec un petit test concret.",
    } as const;
  }

  return {
    level: "low",
    label: "Deux pistes proches",
    description:
      "Tes réponses ne désignent pas un vainqueur évident. C'est utile : explore les deux premières pistes avant de choisir.",
  } as const;
}
