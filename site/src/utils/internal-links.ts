import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES } from "../config/routes";
import { parcoursSlugById } from "../data/parcoursSlugs";
import { tagHierarchy } from "../components/tagHierarchy";

const THIS_DIR = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(THIS_DIR, "..");
const DATA_DIR = path.join(SRC_DIR, "data");
const PARCOURS_DIR = path.join(SRC_DIR, "content", "parcours");

function isDraftMarkdownFile(filePath: string): boolean {
  try {
    const source = fs.readFileSync(filePath, "utf8");
    const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) return false;
    return /^\s*draft:\s*true\s*$/im.test(frontmatterMatch[1] ?? "");
  } catch {
    return false;
  }
}

function walkMarkdownFiles(root: string): string[] {
  if (!fs.existsSync(root)) return [];

  const results: string[] = [];

  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const target = path.join(root, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkMarkdownFiles(target));
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith(".md") || entry.name.startsWith("_")) continue;
    results.push(target);
  }

  return results;
}

function normalizeRoute(route: string): string {
  if (!route) return "/";

  let normalized = route.trim();
  if (!normalized) return "/";

  if (/^[a-z]+:/i.test(normalized) || normalized.startsWith("//")) return normalized;

  if (!normalized.startsWith("/")) normalized = `/${normalized}`;

  normalized = normalized.replace(/\/index(?:\.html?)?$/i, "");
  normalized = normalized.replace(/\.html?$/i, "");

  if (normalized.length > 1) normalized = normalized.replace(/\/+$/, "");

  return normalized || "/";
}

function dataFileToRoute(filePath: string): string {
  const relative = path.relative(DATA_DIR, filePath).replace(/\\/g, "/");
  const withoutExt = relative.replace(/\.md$/i, "");
  const withoutIndex = withoutExt.replace(/\/index$/i, "");
  return normalizeRoute(`/${withoutIndex}`);
}

function buildKnownRoutes(): Set<string> {
  const routes = new Set<string>([
    ROUTES.home,
    ROUTES.blog,
    ROUTES.outils,
    ROUTES.parcours,
    ROUTES.tutos,
    ROUTES.progression,
    ROUTES.quiz,
    ROUTES.quizRapide,
    ROUTES.quizAvance,
    ROUTES.methodologie,
    ROUTES.confidentialite,
    ROUTES.mentionsLegales,
    ROUTES.cgu,
    "/bio",
    "/bonjour",
    "/gamification",
  ]);

  for (const filePath of walkMarkdownFiles(DATA_DIR)) {
    if (isDraftMarkdownFile(filePath)) continue;

    routes.add(dataFileToRoute(filePath));

    const relative = path.relative(DATA_DIR, filePath).replace(/\\/g, "/");
    const parts = relative.replace(/\.md$/i, "").split("/");
    if (parts[0] === "outils" && parts[1]) {
      routes.add(normalizeRoute(`/outils/${parts[1]}`));
      if (parts.length >= 4 && parts[2]) {
        routes.add(normalizeRoute(`/outils/${parts[1]}/${parts[2]}`));
      }
    }
  }

  if (fs.existsSync(PARCOURS_DIR)) {
    for (const entry of fs.readdirSync(PARCOURS_DIR, { withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
      const profileId = entry.name.replace(/\.md$/i, "");
      const slug = parcoursSlugById[profileId] ?? profileId;
      routes.add(normalizeRoute(`/parcours/${slug}`));
    }
  }

  for (const tag of Object.keys(tagHierarchy)) {
    routes.add(normalizeRoute(`/tag/${tag}`));
  }

  return routes;
}

const KNOWN_ROUTES = buildKnownRoutes();

const ROUTE_FALLBACKS: Record<string, string> = {
  "/performance/mental/leadership": "/performance/mental",
};

const SECTION_FALLBACKS: Record<string, string> = {
  tag: ROUTES.blog,
  services: ROUTES.parcours,
  contact: ROUTES.home,
};

function resolveFallbackPath(route: string): string {
  const normalized = normalizeRoute(route);
  const directFallback = ROUTE_FALLBACKS[normalized];
  if (directFallback) return directFallback;
  const segments = normalized.split("/").filter(Boolean);

  if (segments.length === 0) return ROUTES.home;

  const sectionFallback = SECTION_FALLBACKS[segments[0]];
  if (sectionFallback) return sectionFallback;

  for (let index = segments.length - 1; index > 0; index -= 1) {
    const candidate = normalizeRoute(`/${segments.slice(0, index).join("/")}`);
    if (KNOWN_ROUTES.has(candidate)) return candidate;
  }

  return ROUTES.home;
}

export function resolveInternalRoute(href: string): string {
  if (!href) return href;
  if (/^(mailto:|tel:|#)/i.test(href) || href.startsWith("//")) return href;

  let url: URL | null = null;
  let rawPath = href;
  let suffix = "";

  try {
    if (/^https?:\/\//i.test(href)) {
      url = new URL(href);
      rawPath = url.pathname;
      suffix = `${url.search}${url.hash}`;
    } else {
      const anchorIndex = href.indexOf("#");
      const queryIndex = href.indexOf("?");
      const splitIndex =
        queryIndex === -1
          ? anchorIndex
          : anchorIndex === -1
            ? queryIndex
            : Math.min(queryIndex, anchorIndex);

      if (splitIndex !== -1) {
        rawPath = href.slice(0, splitIndex);
        suffix = href.slice(splitIndex);
      }
    }
  } catch {
    return href;
  }

  const normalized = normalizeRoute(rawPath);
  if (!normalized.startsWith("/")) return href;

  const resolved = KNOWN_ROUTES.has(normalized)
    ? normalized
    : resolveFallbackPath(normalized);

  if (url) {
    url.pathname = resolved;
    url.search = "";
    url.hash = "";
    return `${url.toString()}${suffix}`;
  }

  return `${resolved}${suffix}`;
}

export function getResolvedBreadcrumbs(pathname: string, labels: Record<string, string>) {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: Array<{ href: string; label: string; isCurrent: boolean }> = [];

  for (let index = 0; index < segments.length; index += 1) {
    const segment = segments[index];
    const rawHref = `/${segments.slice(0, index + 1).join("/")}`;
    const href = resolveInternalRoute(rawHref);
    const decoded = decodeURIComponent(segment);
    const fallback = decoded.replace(/-/g, " ");
    const label =
      labels[segment] ??
      labels[decoded] ??
      `${fallback.charAt(0).toUpperCase()}${fallback.slice(1)}`;

    if (breadcrumbs.length > 0 && breadcrumbs[breadcrumbs.length - 1].href === href) {
      continue;
    }

    breadcrumbs.push({
      href,
      label,
      isCurrent: index === segments.length - 1,
    });
  }

  return breadcrumbs;
}
