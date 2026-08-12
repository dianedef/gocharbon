import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

export const TOKEN_KEYS = new Set(["$type", "$value", "$modes", "$description", "$deprecated"]);
export const MODES = ["light", "dark"];

export async function loadTokenDocument(file) {
  const text = await readFile(file, "utf8");
  const document = JSON.parse(text);
  validateDocument(document);
  return { document, canonical: `${JSON.stringify(sortDeep(document), null, 2)}\n` };
}

export function validateDocument(document) {
  if (!document || typeof document !== "object" || Array.isArray(document)) throw new Error("Token document must be an object");
  for (const key of ["schemaVersion", "brandVersion", "description", "tokens"]) {
    if (!(key in document)) throw new Error(`Missing root property: ${key}`);
  }
  if (!/^\d+\.\d+\.\d+$/.test(document.schemaVersion) || !/^\d+\.\d+\.\d+$/.test(document.brandVersion)) {
    throw new Error("schemaVersion and brandVersion must be semantic versions");
  }
  const flat = flattenTokens(document.tokens);
  if (flat.size === 0) throw new Error("Token document cannot be empty");
  for (const [path, token] of flat) validateToken(path, token);
  for (const mode of MODES) resolveAll(flat, mode);
  return flat;
}

export function flattenTokens(group, prefix = "", output = new Map()) {
  if (!group || typeof group !== "object" || Array.isArray(group)) throw new Error(`Invalid token group: ${prefix || "tokens"}`);
  for (const key of Object.keys(group).sort()) {
    const value = group[key];
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value) && "$type" in value) {
      output.set(path, value);
    } else {
      flattenTokens(value, path, output);
    }
  }
  return output;
}

function validateToken(path, token) {
  const allowedTypes = new Set(["color", "number", "dimension", "duration", "fontFamily", "fontWeight", "cubicBezier", "shadow"]);
  if (!allowedTypes.has(token.$type)) throw new Error(`Unsupported type at ${path}: ${token.$type}`);
  const hasValue = Object.hasOwn(token, "$value");
  const hasModes = Object.hasOwn(token, "$modes");
  if (hasValue === hasModes) throw new Error(`${path} must define exactly one of $value or $modes`);
  for (const key of Object.keys(token)) if (!TOKEN_KEYS.has(key)) throw new Error(`Unknown token property ${key} at ${path}`);
  if (hasModes && (!token.$modes || !MODES.every((mode) => Object.hasOwn(token.$modes, mode)))) {
    throw new Error(`${path} must define light and dark modes`);
  }
  if (token.$deprecated) {
    for (const key of ["replacement", "owner", "removeAfter"]) if (!token.$deprecated[key]) throw new Error(`Incomplete deprecation at ${path}`);
    if (Number.isNaN(Date.parse(`${token.$deprecated.removeAfter}T00:00:00Z`))) throw new Error(`Invalid removeAfter at ${path}`);
  }
}

export function resolveAll(flat, mode) {
  const result = new Map();
  for (const path of [...flat.keys()].sort()) result.set(path, resolveToken(path, flat, mode, []));
  return result;
}

function resolveToken(path, flat, mode, stack) {
  if (stack.includes(path)) throw new Error(`Cyclic token reference: ${[...stack, path].join(" -> ")}`);
  const token = flat.get(path);
  if (!token) throw new Error(`Unknown token reference: ${path}`);
  const raw = token.$modes ? token.$modes[mode] : token.$value;
  return resolveValue(raw, flat, mode, [...stack, path]);
}

function resolveValue(value, flat, mode, stack) {
  if (typeof value === "string") {
    const exact = value.match(/^\{([^}]+)\}$/);
    if (exact) return resolveToken(exact[1], flat, mode, stack);
    return value.replace(/\{([^}]+)\}/g, (_, path) => stringifyValue(resolveToken(path, flat, mode, stack), "css"));
  }
  if (Array.isArray(value)) return value.map((item) => resolveValue(item, flat, mode, stack));
  if (value && typeof value === "object") return Object.fromEntries(Object.keys(value).sort().map((key) => [key, resolveValue(value[key], flat, mode, stack)]));
  return value;
}

export function sourceHash(canonical) {
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

export function tokenName(path) {
  return path.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/\./g, "-").replace(/[^a-zA-Z0-9-]/g, "-").toLowerCase();
}

export function dartName(path) {
  const parts = path.split(/[^a-zA-Z0-9]+/).filter(Boolean);
  return parts[0] + parts.slice(1).map((part) => part[0].toUpperCase() + part.slice(1)).join("");
}

export function stringifyValue(value, target) {
  if (typeof value === "number") return String(value);
  if (Array.isArray(value)) {
    if (target === "css") return value.join(", ");
    return JSON.stringify(value);
  }
  if (value && typeof value === "object") {
    if (Object.hasOwn(value, "x") && Object.hasOwn(value, "color")) {
      return `${value.x} ${value.y} ${value.blur} ${value.spread} ${value.color}`;
    }
    return JSON.stringify(value);
  }
  return String(value);
}

export function sortDeep(value) {
  if (Array.isArray(value)) return value.map(sortDeep);
  if (!value || typeof value !== "object") return value;
  return Object.fromEntries(Object.keys(value).sort().map((key) => [key, sortDeep(value[key])]));
}
