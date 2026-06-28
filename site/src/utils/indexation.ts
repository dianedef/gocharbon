import { isLaunchBuildPath, normalizePathname } from "./build-scope";

export { normalizePathname };

export function isIndexableLaunchPath(pathname: string): boolean {
  return isLaunchBuildPath(pathname);
}

export function resolveMetaRobots(pathname: string, requested?: string): string {
  if (!isIndexableLaunchPath(pathname)) {
    return "noindex, follow";
  }

  return requested ?? "index, follow";
}

export function shouldIncludeInSitemap(pageUrl: string): boolean {
  try {
    const pathname = new URL(pageUrl).pathname;
    return isIndexableLaunchPath(pathname);
  } catch {
    return false;
  }
}
