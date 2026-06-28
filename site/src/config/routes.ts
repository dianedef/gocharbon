import { getParcoursSlug } from "../data/parcoursSlugs";

export const ROUTES = {
  home: "/",
  blog: "/blog",
  outils: "/outils",
  parcours: "/parcours",
  tutos: "/tutos",
  progression: "/progression",
  quiz: "/quiz",
  quizRapide: "/quiz-rapide",
  quizAvance: "/quiz-avance",
  methodologie: "/methodologie",
  confidentialite: "/confidentialite",
  mentionsLegales: "/mentions-legales",
  cgu: "/cgu",
  feed: "/feed.xml",
} as const;

export function getParcoursRoute(pathId: string) {
  return `${ROUTES.parcours}/${getParcoursSlug(pathId)}`;
}

export function getBlogTagRoute(tag: string) {
  return `${ROUTES.blog}?tags=${encodeURIComponent(tag)}`;
}
