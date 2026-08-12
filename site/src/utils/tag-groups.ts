import { tagHierarchy } from "../components/tagHierarchy";
import { normalizeTag } from "./tags";

type TagNode = {
  label?: string;
  subtags?: Record<string, TagNode>;
};

const HIERARCHY = tagHierarchy as Record<string, TagNode>;

export const MAIN_TAGS = Object.keys(HIERARCHY).map((tag) => normalizeTag(tag));

const TAG_TO_MAIN = new Map<string, string>();

const ALIAS_TO_MAIN = new Map<string, string>([
  ["outils-francais", "outils"],
  ["social-media", "marketing"],
  ["email", "marketing"],
  ["video", "contenu"],
  ["tuto", "tutoriels"],
  ["tutos", "tutoriels"],
  ["tutoriel", "tutoriels"],
]);

function registerTagCandidate(candidate: string, mainTag: string) {
  const normalized = normalizeTag(candidate);
  if (!normalized) return;
  if (!TAG_TO_MAIN.has(normalized)) TAG_TO_MAIN.set(normalized, mainTag);
}

function walkNode(mainTag: string, nodeKey: string, node: TagNode | undefined) {
  if (!node) return;
  registerTagCandidate(nodeKey, mainTag);
  if (typeof node.label === "string") registerTagCandidate(node.label, mainTag);

  if (!node.subtags) return;
  for (const [childKey, childNode] of Object.entries(node.subtags)) {
    walkNode(mainTag, childKey, childNode);
  }
}

for (const [mainTagKey, mainNode] of Object.entries(HIERARCHY)) {
  const normalizedMain = normalizeTag(mainTagKey);
  registerTagCandidate(mainTagKey, normalizedMain);
  if (mainNode?.label) registerTagCandidate(mainNode.label, normalizedMain);
  walkNode(normalizedMain, mainTagKey, mainNode);
}

export function resolveTagToMain(tag: string): string | null {
  const normalized = normalizeTag(tag);
  if (!normalized) return null;
  // Canonical main tags must always resolve to themselves even if subtags reuse the same word.
  if (MAIN_TAGS.includes(normalized)) return normalized;
  return ALIAS_TO_MAIN.get(normalized) ?? TAG_TO_MAIN.get(normalized) ?? null;
}

export function extractMainTags(tags: string[]): string[] {
  const mains = new Set<string>();
  for (const tag of tags) {
    const resolved = resolveTagToMain(tag);
    if (resolved) mains.add(resolved);
  }
  return [...mains];
}

export function getMainTagLabel(mainTag: string): string {
  const normalized = normalizeTag(mainTag);
  for (const [key, node] of Object.entries(HIERARCHY)) {
    if (normalizeTag(key) === normalized) {
      return node.label || key;
    }
  }
  return mainTag;
}
