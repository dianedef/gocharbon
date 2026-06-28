import { ROUTES, getParcoursRoute } from "../config/routes";

export const LAUNCH_PARCOURS_IDS = [
  "freelance",
  "testeur-utilisateur",
  "ecommerce",
  "content-creator",
  "formation",
] as const;

const LAUNCH_PARCOURS_ID_SET = new Set<string>(LAUNCH_PARCOURS_IDS);

const LAUNCH_EXACT_PATHS = new Set([
  ROUTES.home,
  ROUTES.parcours,
  ROUTES.confidentialite,
  ROUTES.mentionsLegales,
  ROUTES.cgu,
]);

const LAUNCH_PARCOURS_PATHS = new Set(
  LAUNCH_PARCOURS_IDS.map((pathId) => getParcoursRoute(pathId))
);
const LAUNCH_XML_FILES = new Set(["sitemap-index.xml", "sitemap-0.xml"]);

function parseBooleanEnv(value: string | undefined): boolean {
  if (typeof value !== "string") return false;
  const normalized = value.trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes" || normalized === "on";
}

function readEnvValue(name: string): string | undefined {
  if (typeof process !== "undefined") {
    const processValue = process.env[name];
    if (typeof processValue === "string") return processValue;
  }

  const viteValue = import.meta.env?.[name];
  if (typeof viteValue === "string") return viteValue;
  if (typeof viteValue === "boolean") return viteValue ? "1" : "0";

  return undefined;
}

export function isParcoursOnlyBuild(): boolean {
  return parseBooleanEnv(readEnvValue("PARCOURS_ONLY_BUILD"));
}

export function getLaunchParcoursIds(): string[] {
  return [...LAUNCH_PARCOURS_IDS];
}

export function isLaunchParcoursId(pathId: string): boolean {
  return LAUNCH_PARCOURS_ID_SET.has(pathId);
}

export function filterLaunchParcours<T extends { id: string }>(paths: T[]): T[] {
  return paths.filter((path) => isLaunchParcoursId(path.id));
}

export function normalizePathname(pathname: string): string {
  if (!pathname) return ROUTES.home;

  const trimmed = pathname.trim();
  if (!trimmed || trimmed === "/") return ROUTES.home;

  const normalized = trimmed.replace(/\/+$/, "");
  return normalized || ROUTES.home;
}

export function isLaunchBuildPath(pathname: string): boolean {
  const normalized = normalizePathname(pathname);

  if (LAUNCH_EXACT_PATHS.has(normalized)) return true;
  return LAUNCH_PARCOURS_PATHS.has(normalized);
}

export function shouldKeepLaunchXml(relativePath: string): boolean {
  return LAUNCH_XML_FILES.has(relativePath);
}

export function getRoutePathFromBuildHtml(relativePath: string): string | null {
  if (relativePath === "404.html") return "__404__";
  if (relativePath === "index.html") return ROUTES.home;
  if (!relativePath.endsWith("/index.html")) return null;

  const directory = relativePath.slice(0, -"/index.html".length);
  return normalizePathname(`/${directory}`);
}

export function getInternalPathnameFromHref(href: string, siteUrl: string): string | null {
  const trimmed = href.trim();

  if (!trimmed) return null;
  if (
    trimmed.startsWith("#") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:") ||
    trimmed.startsWith("javascript:")
  ) {
    return null;
  }

  try {
    const url = trimmed.startsWith("/")
      ? new URL(trimmed, siteUrl)
      : new URL(trimmed);
    const site = new URL(siteUrl);

    if (url.origin !== site.origin) return null;
    return normalizePathname(url.pathname);
  } catch {
    return null;
  }
}
