import type { CollectionEntry } from "astro:content";
import { normalizeTag } from "./tags";

export type ContentSection = "blog" | "apps" | "tutos" | "parcours";
export type ContentScope = "all" | ContentSection;

const VALID_SECTIONS = new Set<ContentSection>(["blog", "apps", "tutos", "parcours"]);

function parseSection(value: unknown): ContentSection | null {
  if (typeof value !== "string") return null;
  const normalized = value.toLowerCase().trim();
  return VALID_SECTIONS.has(normalized as ContentSection)
    ? (normalized as ContentSection)
    : null;
}

function hasTag(post: CollectionEntry<"posts">, tag: string): boolean {
  const expected = normalizeTag(tag);
  return post.data.tags.some((item) => normalizeTag(item) === expected);
}

export function getContentSection(post: CollectionEntry<"posts">): ContentSection {
  const explicitSection = parseSection((post.data as { section?: unknown }).section);
  if (explicitSection) return explicitSection;

  const normalizedId = post.id.toLowerCase();

  if (normalizedId.startsWith("biz/profils/")) return "parcours";
  if (normalizedId.startsWith("tutos/")) return "tutos";
  if (hasTag(post, "apps")) return "apps";
  if (hasTag(post, "tutoriels") || hasTag(post, "tutos") || hasTag(post, "tutoriel")) return "tutos";
  if (hasTag(post, "parcours")) return "parcours";

  return "blog";
}

export function applyContentScope(posts: CollectionEntry<"posts">[], scope: ContentScope): CollectionEntry<"posts">[] {
  if (scope === "all") return posts;
  return posts.filter((post) => getContentSection(post) === scope);
}

export function parseContentScope(scopeParam: string | null): ContentScope {
  if (!scopeParam) return "all";
  const normalized = scopeParam.toLowerCase().trim();
  if (normalized === "all") return "all";
  return VALID_SECTIONS.has(normalized as ContentSection)
    ? (normalized as ContentSection)
    : "all";
}

