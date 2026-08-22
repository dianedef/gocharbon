import assert from "node:assert/strict";
import test from "node:test";

import { buildRecommendations, resolvePublishedRecommendationUrl } from "./recommendations.ts";

const course = (url: string, category = "marketing", level = "beginner") => ({
  _id: "course-id",
  _creationTime: 1,
  sourceId: "course-source",
  title: "Une ressource historique",
  description: "Description historique",
  url,
  category,
  level,
  isActive: true,
}) as unknown as Parameters<typeof buildRecommendations>[0]["courses"][number];

test("keeps a published recommendation and normalizes stable attribution", () => {
  const result = resolvePublishedRecommendationUrl(
    "https://gocharbon.fr/parcours/e-commerce?utm_content=ecommerce_beginner#prix",
    "ecommerce",
    "beginner",
  );

  assert.equal(result.fallback, false);
  const url = new URL(result.url);
  assert.equal(url.pathname, "/parcours/e-commerce");
  assert.equal(url.hash, "");
  assert.equal(url.searchParams.get("utm_campaign"), "knowledge_quiz");
  assert.equal(url.searchParams.get("utm_content"), "ecommerce_beginner");
});

test("replaces removed, external and invalid destinations with the public hub", () => {
  for (const rawUrl of [
    "https://gocharbon.fr/tag/marketing",
    "https://example.com/parcours",
    "not-a-url",
  ]) {
    const result = resolvePublishedRecommendationUrl(rawUrl, "marketing", "beginner");
    assert.equal(result.fallback, true);
    const url = new URL(result.url);
    assert.equal(url.origin, "https://gocharbon.fr");
    assert.equal(url.pathname, "/parcours");
    assert.equal(url.searchParams.get("utm_content"), "marketing_beginner_fallback");
  }
});

test("makes a removed course honest instead of retaining its specific promise", () => {
  const result = buildRecommendations({
    category: "marketing",
    answers: [{ category: "marketing", difficulty: "easy", isCorrect: false }],
    courses: [course("https://gocharbon.fr/tag/marketing")],
    accuracy: 0,
  });

  assert.equal(result.recommendations[0].destinationFallback, true);
  assert.equal(result.recommendations[0].title, "Choisir ton prochain parcours GoCharbon");
  assert.match(result.context.summary, /pas le type de business/);
  assert.equal(result.context.eyebrow, "TES CONNAISSANCES");
});

test("returns a useful public fallback when no active course exists", () => {
  const result = buildRecommendations({
    category: "finance",
    answers: [],
    courses: [],
    accuracy: 0,
  });

  assert.equal(result.recommendations.length, 1);
  assert.equal(new URL(result.recommendations[0].url).pathname, "/parcours");
  assert.equal(result.recommendations[0].destinationFallback, true);
});
