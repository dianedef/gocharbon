import type { AstroIntegration } from "astro";
import { promises as fs } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE } from "../config/site";
import {
  getInternalPathnameFromHref,
  getRoutePathFromBuildHtml,
  isLaunchBuildPath,
  isParcoursOnlyBuild,
  shouldKeepLaunchXml,
} from "./build-scope";

const REMOVED_LINK_TITLE = "Disponible après le lancement parcours";

async function walkFiles(rootDir: string): Promise<string[]> {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = join(rootDir, entry.name);
      if (entry.isDirectory()) return walkFiles(fullPath);
      if (entry.isFile()) return [fullPath];
      return [];
    })
  );

  return files.flat();
}

async function removeEmptyDirectories(rootDir: string): Promise<boolean> {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });

  await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => removeEmptyDirectories(join(rootDir, entry.name)))
  );

  const refreshed = await fs.readdir(rootDir);
  if (refreshed.length === 0) {
    await fs.rmdir(rootDir);
    return true;
  }

  return false;
}

function normalizeAttrs(attrs: string): string {
  const trimmed = attrs.trim();
  return trimmed ? ` ${trimmed}` : "";
}

function appendClass(attrs: string, className: string): string {
  if (/class=(['"])(.*?)\1/i.test(attrs)) {
    return attrs.replace(/class=(['"])(.*?)\1/i, (_match, quote: string, value: string) => {
      const classes = new Set(value.split(/\s+/).filter(Boolean));
      classes.add(className);
      return `class=${quote}${Array.from(classes).join(" ")}${quote}`;
    });
  }

  return `${attrs} class="launch-link-disabled"`;
}

function rewriteLaunchHtml(html: string): string {
  return html.replace(/<a\b([^>]*?)\shref=(["'])(.*?)\2([^>]*)>/gi, (_match, before: string, quote: string, href: string, after: string) => {
    const pathname = getInternalPathnameFromHref(href, SITE.url);
    if (!pathname || isLaunchBuildPath(pathname)) {
      return `<a${normalizeAttrs(`${before}${after}`)} href=${quote}${href}${quote}>`;
    }

    let attrs = `${before}${after}`;
    attrs = appendClass(attrs, "launch-link-disabled");

    if (!/aria-disabled=/i.test(attrs)) attrs += ' aria-disabled="true"';
    if (!/tabindex=/i.test(attrs)) attrs += ' tabindex="-1"';
    if (!/title=/i.test(attrs)) attrs += ` title="${REMOVED_LINK_TITLE}"`;

    attrs += ` data-disabled-href=${quote}${href}${quote}`;
    return `<a${normalizeAttrs(attrs)}>`;
  });
}

function shouldKeepBuildFile(relativePath: string): boolean {
  if (relativePath.startsWith("_astro/")) return true;

  if (relativePath.endsWith(".xml")) {
    return shouldKeepLaunchXml(relativePath);
  }

  if (relativePath.endsWith(".json")) {
    return false;
  }

  if (!relativePath.endsWith(".html")) {
    return true;
  }

  const routePath = getRoutePathFromBuildHtml(relativePath);
  if (routePath === "__404__") return true;
  if (!routePath) return false;

  return isLaunchBuildPath(routePath);
}

async function pruneLaunchBuild(outputDir: string): Promise<void> {
  const files = await walkFiles(outputDir);

  for (const filePath of files) {
    const relativePath = relative(outputDir, filePath).replaceAll("\\", "/");

    if (!shouldKeepBuildFile(relativePath)) {
      await fs.unlink(filePath);
      continue;
    }

    if (!relativePath.endsWith(".html")) continue;

    const originalHtml = await fs.readFile(filePath, "utf8");
    const rewrittenHtml = rewriteLaunchHtml(originalHtml);

    if (rewrittenHtml !== originalHtml) {
      await fs.writeFile(filePath, rewrittenHtml, "utf8");
    }
  }

  await removeEmptyDirectories(outputDir);
}

export function createParcoursLaunchBuildIntegration(): AstroIntegration {
  return {
    name: "parcours-launch-build",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        if (!isParcoursOnlyBuild()) return;

        const outputDir = fileURLToPath(dir);
        await pruneLaunchBuild(outputDir);
      },
    },
  };
}
