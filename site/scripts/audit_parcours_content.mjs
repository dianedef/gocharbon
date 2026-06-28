import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUTPUT_JSON = path.join(ROOT, "scripts", "parcours_content_audit.json");

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fullPath, out);
    else out.push(fullPath);
  }
  return out;
}

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function normalizeUrl(url) {
  let value = (url || "").trim();
  const hashPos = value.indexOf("#");
  if (hashPos >= 0) value = value.slice(0, hashPos);
  const queryPos = value.indexOf("?");
  if (queryPos >= 0) value = value.slice(0, queryPos);
  if (value.length > 1 && value.endsWith("/")) value = value.slice(0, -1);
  return value;
}

function extractWords(text) {
  return (text.match(/[\p{L}\p{N}]+/gu) || []).length;
}

function hasPattern(text, regex) {
  regex.lastIndex = 0;
  return regex.test(text);
}

function loadPostsMap() {
  const dataDir = path.join(ROOT, "src", "data");
  const markdownFiles = walk(dataDir).filter(
    (file) => file.endsWith(".md") && !path.basename(file).startsWith("_")
  );
  const map = new Map();
  for (const file of markdownFiles) {
    let route =
      "/" +
      toPosix(path.relative(dataDir, file))
        .replace(/\.md$/, "")
        .replace(/\/index$/, "");
    if (!route) route = "/";
    map.set(route, file);
  }
  return map;
}

function loadStaticPagesSet() {
  const pagesDir = path.join(ROOT, "src", "pages");
  const files = walk(pagesDir).filter((file) => /\.(astro|ts|js)$/.test(file));
  const routes = new Set();

  for (const file of files) {
    const rel = toPosix(path.relative(pagesDir, file));
    if (rel.includes("[")) continue;
    let route = "/" + rel.replace(/\.(astro|ts|js)$/, "").replace(/\/index$/, "");
    if (!route) route = "/";
    routes.add(route);
  }

  return routes;
}

function loadParcoursIdsAndSlugs() {
  const content = fs.readFileSync(
    path.join(ROOT, "src", "data", "parcoursSlugs.ts"),
    "utf8"
  );
  const ids = new Set(
    [...content.matchAll(/^\s*['"]?([a-z0-9-]+)['"]?\s*:\s*'[^']+'/gm)].map(
      (match) => match[1]
    )
  );
  const slugs = new Set(
    [...content.matchAll(/:\s*'([^']+)'/g)].map((match) => match[1])
  );
  return { ids, slugs };
}

function collectActiveParcoursLinks() {
  const links = new Set();

  // Links from parcoursData.ts (steps)
  const dataContent = fs.readFileSync(
    path.join(ROOT, "src", "data", "parcoursData.ts"),
    "utf8"
  );
  for (const match of dataContent.matchAll(/href:\s*['"]([^'"]+)['"]/g)) {
    const url = normalizeUrl(match[1]);
    if (url && url !== "/biz/profils") links.add(url);
  }

  // Links from "Liens utiles pour avancer" sections in parcours content
  const parcoursDir = path.join(ROOT, "src", "content", "parcours");
  const parcoursFiles = walk(parcoursDir).filter((file) => file.endsWith(".md"));
  for (const file of parcoursFiles) {
    const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
    let inUsefulLinksSection = false;
    for (const line of lines) {
      if (/^##\s+Liens utiles pour avancer/i.test(line)) {
        inUsefulLinksSection = true;
        continue;
      }
      if (inUsefulLinksSection && /^##\s+/.test(line)) {
        inUsefulLinksSection = false;
      }
      if (!inUsefulLinksSection) continue;

      for (const match of line.matchAll(/\[[^\]]+\]\((\/[^)\s]+)\)/g)) {
        const url = normalizeUrl(match[1]);
        if (url) links.add(url);
      }
    }
  }

  return links;
}

function createLinkExistsFn(postsMap, staticPages, parcoursIds, parcoursSlugs) {
  return (rawUrl) => {
    const url = normalizeUrl(rawUrl);
    if (!url.startsWith("/")) return true;
    if (postsMap.has(url)) return true;
    if (staticPages.has(url)) return true;

    if (url.startsWith("/parcours/")) {
      const token = url.slice("/parcours/".length);
      return parcoursIds.has(token) || parcoursSlugs.has(token);
    }

    if (url.startsWith("/tag/")) return true;
    if (url.startsWith("/api/tags/")) return true;
    if (url.startsWith("/v1/generate/og/")) return true;

    return false;
  };
}

function scoreContent(metrics, artifactCount) {
  let score = 0;

  if (metrics.words >= 180) score += 30;
  else score += Math.round((metrics.words / 180) * 30);

  if (metrics.words >= 450) score += 20;
  if (metrics.h2 >= 2) score += 15;
  if (metrics.h3 >= 2) score += 10;
  if (metrics.bullets >= 6) score += 10;
  if (metrics.links >= 2) score += 5;
  if (metrics.hasActionFramework) score += 10;

  score -= artifactCount * 20;
  if (score < 0) score = 0;
  if (score > 100) score = 100;

  if (score >= 80) return { score, label: "solide" };
  if (score >= 60) return { score, label: "moyen" };
  return { score, label: "fragile" };
}

function audit() {
  const postsMap = loadPostsMap();
  const staticPages = loadStaticPagesSet();
  const { ids, slugs } = loadParcoursIdsAndSlugs();
  const activeLinks = [...collectActiveParcoursLinks()].sort();
  const exists = createLinkExistsFn(postsMap, staticPages, ids, slugs);

  const missingActiveLinks = [];
  const contentAudits = [];

  for (const link of activeLinks) {
    if (!exists(link)) {
      missingActiveLinks.push(link);
      continue;
    }

    const filePath = postsMap.get(link);
    if (!filePath) continue;

    const raw = fs.readFileSync(filePath, "utf8");
    const body = raw.replace(/^---[\s\S]*?---\s*/, "");

    const metrics = {
      words: extractWords(body),
      h2: (body.match(/^##\s+/gm) || []).length,
      h3: (body.match(/^###\s+/gm) || []).length,
      bullets: (body.match(/^[-*]\s+/gm) || []).length,
      links: (body.match(/\[[^\]]+\]\([^)]+\)/g) || []).length,
      hasActionFramework: hasPattern(
        body,
        /(?:étape|plan|checklist|erreurs fréquentes|à éviter)/i
      ),
    };

    const artifactFlags = [];
    if (hasPattern(body, /\[\[[^\]]+\]\]/)) artifactFlags.push("obsidian_wikilink");
    if (hasPattern(body, /```table-of-contents/i))
      artifactFlags.push("table_of_contents_block");
    if (
      hasPattern(
        body,
        /^\s*(?:[-*]\s*)?(?:TODO|TBD|WIP|Todo's|coming soon)\b/im
      ) ||
      hasPattern(body, /^\s*[-*]\s+(?:rajouter|ajouter|finir l'article)\b/im)
    ) {
      artifactFlags.push("editorial_note");
    }
    if (hasPattern(body, /^\s*\[\[.*\]\]\s*$/im)) {
      artifactFlags.push("raw_wikilink_line");
    }

    if (
      hasPattern(
        body,
        /^\s*(?:Action souhait[ée]|Strat[ée]gie|Quels avantages \? Du plus fort au moins fort)\s*$/im
      )
    ) {
      artifactFlags.push("editorial_note");
    }

    const scored = scoreContent(metrics, artifactFlags.length);

    contentAudits.push({
      url: link,
      file: toPosix(path.relative(ROOT, filePath)),
      ...metrics,
      artifactFlags,
      score: scored.score,
      quality: scored.label,
    });
  }

  const summary = {
    auditedAt: new Date().toISOString(),
    activeLinksCount: activeLinks.length,
    missingActiveLinksCount: missingActiveLinks.length,
    activeContentLinksCount: contentAudits.length,
    thinContentCount: contentAudits.filter((item) => item.words < 180).length,
    fragileCount: contentAudits.filter((item) => item.quality === "fragile").length,
    mediumCount: contentAudits.filter((item) => item.quality === "moyen").length,
    solidCount: contentAudits.filter((item) => item.quality === "solide").length,
  };

  const payload = {
    summary,
    missingActiveLinks,
    fragileFirst: [...contentAudits].sort((a, b) => a.score - b.score),
  };

  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(payload, null, 2), "utf8");

  console.log(JSON.stringify(summary, null, 2));
  if (missingActiveLinks.length) {
    console.log("\nMissing active links:");
    for (const item of missingActiveLinks) console.log(`- ${item}`);
  }
}

audit();
