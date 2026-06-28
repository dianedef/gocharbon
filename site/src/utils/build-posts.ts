import { isParcoursOnlyBuild } from "./build-scope";

type WithId = {
  id: string;
  data?: {
    draft?: boolean;
    pubDate?: Date | string;
  };
};

function parseBooleanEnv(value: string | undefined): boolean {
  if (typeof value !== "string") return false;
  const normalized = value.trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes" || normalized === "on";
}

function getExcludeOutilsEnv(): string | undefined {
  const viteValue = import.meta.env.EXCLUDE_OUTILS_FROM_BUILD;
  if (typeof viteValue === "string") return viteValue;
  if (typeof process !== "undefined") return process.env.EXCLUDE_OUTILS_FROM_BUILD;
  return undefined;
}

export function isExcludingOutilsFromBuild(): boolean {
  return parseBooleanEnv(getExcludeOutilsEnv());
}

export function isOutilsPostId(postId: string): boolean {
  const normalized = postId.toLowerCase();
  return normalized === "outils" || normalized.startsWith("outils/");
}

export function filterBuildVisiblePosts<T extends WithId>(posts: T[]): T[] {
  if (isParcoursOnlyBuild()) return [];

  const now = new Date();
  return posts.filter((post) => {
    // Exclure les outils si env var active
    if (isExcludingOutilsFromBuild() && isOutilsPostId(post.id)) return false;
    // Exclure les drafts
    if (post.data?.draft === true) return false;
    // Exclure les articles dont la pubDate est dans le futur
    if (post.data?.pubDate) {
      const pubDate = post.data.pubDate instanceof Date
        ? post.data.pubDate
        : new Date(post.data.pubDate as string);
      if (pubDate > now) return false;
    }
    return true;
  });
}
