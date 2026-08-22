import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { describe, it } from "node:test";

import { CANONICAL_ARCHETYPES } from "../src/data/profileTaxonomy.ts";
import {
  createOrientationScores,
  resolveOrientationDestination,
  scoreOrientation,
  selectOrientationArchetype,
} from "../src/utils/orientationResolver.ts";

const launchPaths = new Set([
  "/parcours",
  "/parcours/freelance",
  "/parcours/createur-contenu",
  "/parcours/e-commerce",
  "/parcours/formation",
]);
const isPublishedInLaunch = (pathname) => launchPaths.has(pathname);

describe("canonical site orientation", () => {
  it("keeps SentenceQuiz on the canonical resolver contract", async () => {
    const component = await readFile(
      new URL("../src/components/vue/SentenceQuiz.vue", import.meta.url),
      "utf8",
    );

    assert.doesNotMatch(component, /livecommerce/);
    assert.match(component, /scoreOrientation\(pointSets\)/);
    assert.match(component, /selectOrientationArchetype\(scores\)/);
    assert.match(component, /parcoursOnlyBuild:\s*\{/);
    assert.match(component, /v-if="!props\.parcoursOnlyBuild"/);

    const homepage = await readFile(
      new URL("../src/pages/index.astro", import.meta.url),
      "utf8",
    );
    assert.match(homepage, /<SentenceQuiz parcoursOnlyBuild=\{launchBuild\}/);
  });

  it("scores exactly the five canonical archetypes", () => {
    const scores = scoreOrientation([
      { service: 3, livecommerce: 99 },
      { content: 2, ecommerce: 1 },
    ]);

    assert.deepEqual(Object.keys(scores), [...CANONICAL_ARCHETYPES]);
    assert.deepEqual(scores, {
      service: 3,
      content: 2,
      ecommerce: 1,
      formation: 0,
      saas: 0,
    });
    assert.equal("livecommerce" in scores, false);
  });

  it("uses canonical archetype order as the deterministic tie-break", () => {
    const scores = createOrientationScores();
    scores.service = 4;
    scores.ecommerce = 4;

    assert.equal(selectOrientationArchetype(scores), "service");
    assert.equal(selectOrientationArchetype(scores), "service");
  });

  it("does not turn a live-only preference into ecommerce", () => {
    const scores = scoreOrientation([{ livecommerce: 8 }]);

    assert.equal(scores.ecommerce, 0);
    assert.notEqual(selectOrientationArchetype(scores), "ecommerce");
  });

  it("keeps every launch result on a published route", () => {
    for (const archetype of CANONICAL_ARCHETYPES) {
      const destination = resolveOrientationDestination(archetype, {
        parcoursOnly: true,
        isPublishedPath: isPublishedInLaunch,
      });
      const pathname = new URL(destination.href, "https://gocharbon.fr").pathname;

      assert.equal(isPublishedInLaunch(pathname), true, archetype);
    }
  });

  it("preserves service context on the public freelance pilot", () => {
    assert.deepEqual(resolveOrientationDestination("service", {
      parcoursOnly: true,
      isPublishedPath: isPublishedInLaunch,
    }), {
      href: "/parcours/freelance?source=orientation&archetype=service",
      actionLabel: "Démarrer le parcours freelance",
      fallbackMessage: null,
      isFallback: false,
    });
  });

  it("falls back honestly when the selected path is outside the launch build", () => {
    assert.deepEqual(resolveOrientationDestination("saas", {
      parcoursOnly: true,
      isPublishedPath: isPublishedInLaunch,
    }), {
      href: "/parcours?source=orientation&archetype=saas",
      actionLabel: "Voir les parcours disponibles",
      fallbackMessage:
        "Ton orientation reste SaaS. Le parcours dédié n'est pas encore ouvert, alors voici les parcours disponibles aujourd'hui.",
      isFallback: true,
    });
  });

  it("keeps the dedicated SaaS route in a full build", () => {
    assert.deepEqual(resolveOrientationDestination("saas", {
      parcoursOnly: false,
    }), {
      href: "/parcours/logiciel-saas?source=orientation&archetype=saas",
      actionLabel: "Démarrer le parcours SaaS",
      fallbackMessage: null,
      isFallback: false,
    });
  });
});
