import {
  CANONICAL_ARCHETYPES,
  type CanonicalArchetype,
} from "../data/profileTaxonomy.ts";
import { getParcoursSlug } from "../data/parcoursSlugs.ts";

export type OrientationScores = Record<CanonicalArchetype, number>;
export type OrientationPointSet = Readonly<Record<string, number | undefined>>;

export interface OrientationDestination {
  href: string;
  actionLabel: string;
  fallbackMessage: string | null;
  isFallback: boolean;
}

interface OrientationDestinationOptions {
  parcoursOnly: boolean;
  isPublishedPath?: (pathname: string) => boolean;
}

const PARCOURS_INDEX = "/parcours";

const DESTINATION_BY_ARCHETYPE: Record<
  CanonicalArchetype,
  { pathId: string; actionLabel: string; fallbackName: string }
> = {
  service: {
    pathId: "freelance",
    actionLabel: "Démarrer le parcours freelance",
    fallbackName: "Services",
  },
  content: {
    pathId: "content-creator",
    actionLabel: "Démarrer le parcours contenu",
    fallbackName: "Contenu",
  },
  ecommerce: {
    pathId: "ecommerce",
    actionLabel: "Démarrer le parcours e-commerce",
    fallbackName: "E-commerce",
  },
  formation: {
    pathId: "formation",
    actionLabel: "Démarrer le parcours formation",
    fallbackName: "Formation",
  },
  saas: {
    pathId: "saas",
    actionLabel: "Démarrer le parcours SaaS",
    fallbackName: "SaaS",
  },
};

export function createOrientationScores(): OrientationScores {
  return Object.fromEntries(
    CANONICAL_ARCHETYPES.map((archetype) => [archetype, 0]),
  ) as OrientationScores;
}

export function scoreOrientation(
  pointSets: readonly OrientationPointSet[],
): OrientationScores {
  const scores = createOrientationScores();

  for (const pointSet of pointSets) {
    for (const archetype of CANONICAL_ARCHETYPES) {
      const points = pointSet[archetype];
      if (typeof points === "number" && Number.isFinite(points)) {
        scores[archetype] += points;
      }
    }
  }

  return scores;
}

export function selectOrientationArchetype(
  scores: OrientationScores,
): CanonicalArchetype {
  return CANONICAL_ARCHETYPES.reduce((best, archetype) =>
    scores[archetype] > scores[best] ? archetype : best,
  );
}

export function resolveOrientationDestination(
  archetype: CanonicalArchetype,
  options: OrientationDestinationOptions,
): OrientationDestination {
  const destination = DESTINATION_BY_ARCHETYPE[archetype];
  const directPath = `${PARCOURS_INDEX}/${getParcoursSlug(destination.pathId)}`;
  const directIsPublished =
    !options.parcoursOnly || options.isPublishedPath?.(directPath) === true;
  const context = `source=orientation&archetype=${archetype}`;

  if (directIsPublished) {
    return {
      href: `${directPath}?${context}`,
      actionLabel: destination.actionLabel,
      fallbackMessage: null,
      isFallback: false,
    };
  }

  return {
    href: `${PARCOURS_INDEX}?${context}`,
    actionLabel: "Voir les parcours disponibles",
    fallbackMessage: `Ton orientation reste ${destination.fallbackName}. Le parcours dédié n'est pas encore ouvert, alors voici les parcours disponibles aujourd'hui.`,
    isFallback: true,
  };
}
