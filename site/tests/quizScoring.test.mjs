import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { CANONICAL_ARCHETYPES } from "../src/data/profileTaxonomy.ts";
import { quizData } from "../src/data/quizData.js";
import { quizQuickData } from "../src/data/quizQuickData.js";
import {
  describeQuizSignal,
  getQuizMaximumScores,
  rankQuizResults,
} from "../src/utils/quizScoring.ts";

const emptyScores = () =>
  Object.fromEntries(CANONICAL_ARCHETYPES.map((profile) => [profile, 0]));

describe("orientation quiz scoring contract", () => {
  const questions = [
    {
      options: [
        { points: { service: 4, formation: 2 } },
        { points: { content: 2, formation: 1 } },
      ],
    },
    {
      options: [
        { points: { service: 4, formation: 2 } },
        { points: { ecommerce: 3, saas: 2 } },
      ],
    },
  ];

  it("computes a separate achievable maximum for every archetype", () => {
    assert.deepEqual(getQuizMaximumScores(questions), {
      service: 8,
      content: 2,
      ecommerce: 3,
      formation: 4,
      saas: 2,
    });
  });

  it("ranks relative affinity instead of structurally unequal raw totals", () => {
    const scores = emptyScores();
    scores.service = 6;
    scores.formation = 4;

    const ranked = rankQuizResults(scores, questions);
    assert.equal(ranked[0].profile, "formation");
    assert.equal(ranked[0].affinity, 100);
    assert.equal(ranked[1].profile, "service");
    assert.equal(ranked[1].affinity, 75);
  });

  it("uses canonical order as a deterministic tie-break", () => {
    const scores = emptyScores();
    scores.service = 4;
    scores.content = 1;

    assert.deepEqual(
      rankQuizResults(scores, questions)
        .slice(0, 2)
        .map(({ profile, affinity }) => ({ profile, affinity })),
      [
        { profile: "service", affinity: 50 },
        { profile: "content", affinity: 50 },
      ],
    );
  });

  it("describes the normalized gap without claiming scientific certainty", () => {
    assert.equal(describeQuizSignal(70, 56).label, "Direction nette");
    assert.equal(describeQuizSignal(70, 62).label, "Direction nuancée");
    assert.equal(describeQuizSignal(70, 67).label, "Deux pistes proches");
    assert.doesNotMatch(describeQuizSignal(70, 56).description, /certitude/i);
  });

  it("covers every archetype in both existing questionnaire formats", () => {
    for (const data of [quizQuickData, quizData]) {
      const maximums = getQuizMaximumScores(data.questions);
      assert.deepEqual(Object.keys(maximums), [...CANONICAL_ARCHETYPES]);
      assert.equal(
        CANONICAL_ARCHETYPES.every((profile) => maximums[profile] > 0),
        true,
      );
    }
  });
});
