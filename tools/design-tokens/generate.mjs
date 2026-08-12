#!/usr/bin/env node
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dartName, flattenTokens, loadTokenDocument, MODES, resolveAll, sourceHash, stringifyValue, tokenName } from "./lib.mjs";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "../..");
const args = parseArgs(process.argv.slice(2));
const source = resolve(args.source || resolve(repoRoot, "shipglows_data/branding/design-tokens.json"));
const outRoot = resolve(args.outRoot || repoRoot);
const { document, canonical } = await loadTokenDocument(source);
const flat = flattenTokens(document.tokens);
const hash = sourceHash(canonical);
const outputs = new Map([
  [resolve(outRoot, "site/src/styles/generated/design-tokens.css"), renderCss(flat, hash, document.brandVersion)],
  [resolve(outRoot, "site/src/generated/design-tokens.ts"), renderTypeScript(flat, hash, document.brandVersion)],
  [resolve(outRoot, "app_quiz/flutter_app/lib/src/theme/generated/design_tokens.g.dart"), renderDart(flat, hash, document.brandVersion)]
]);

let stale = false;
for (const [path, content] of outputs) {
  if (args.check) {
    const current = await readFile(path, "utf8").catch(() => null);
    if (current !== content) {
      stale = true;
      process.stderr.write(`stale or missing: ${path}\n`);
    }
  } else {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, content, "utf8");
    process.stdout.write(`generated: ${path}\n`);
  }
}
if (stale) process.exitCode = 1;

function parseArgs(argv) {
  const parsed = { check: false };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") parsed.check = true;
    else if (arg === "--source") parsed.source = argv[++index];
    else if (arg === "--out-root") parsed.outRoot = argv[++index];
    else throw new Error(`Unknown argument: ${arg}`);
  }
  return parsed;
}

function header(prefix, hashValue, version) {
  return `${prefix} GENERATED FILE - DO NOT EDIT. Source: shipglows_data/branding/design-tokens.json | brand ${version} | sha256 ${hashValue}`;
}

function renderCss(tokens, hashValue, version) {
  const resolved = Object.fromEntries(MODES.map((mode) => [mode, resolveAll(tokens, mode)]));
  const lines = [header("/*", hashValue, version) + " */", ":root, [data-theme=\"light\"] {"];
  for (const [path, token] of tokens) lines.push(`  --gc-${tokenName(path)}: ${stringifyValue(resolved.light.get(path), "css")};`);
  lines.push("}", "", "[data-theme=\"dark\"] {");
  for (const [path, token] of tokens) if (token.$modes) lines.push(`  --gc-${tokenName(path)}: ${stringifyValue(resolved.dark.get(path), "css")};`);
  lines.push("}", "");
  return lines.join("\n");
}

function renderTypeScript(tokens, hashValue, version) {
  const modes = {};
  for (const mode of MODES) modes[mode] = Object.fromEntries([...resolveAll(tokens, mode)].map(([path, value]) => [path, value]));
  return `${header("//", hashValue, version)}\nexport const designTokens = ${JSON.stringify(modes, null, 2)} as const;\n\nexport type DesignTokenMode = keyof typeof designTokens;\nexport type DesignTokenPath = keyof typeof designTokens.light;\n`;
}

function renderDart(tokens, hashValue, version) {
  const lines = [header("//", hashValue, version), "", "import \"package:flutter/material.dart\";", ""];
  for (const mode of MODES) {
    const className = mode === "light" ? "GcLightTokens" : "GcDarkTokens";
    const resolved = resolveAll(tokens, mode);
    lines.push(`abstract final class ${className} {`);
    for (const [path, token] of tokens) lines.push(`  static const ${dartName(path)} = ${dartLiteral(resolved.get(path), token.$type)};`);
    lines.push("}", "");
  }
  return `${lines.join("\n")}\n`;
}

function dartLiteral(value, type) {
  if (type === "color") {
    if (value === "transparent") return "Colors.transparent";
    const hex = String(value).replace("#", "");
    if (!/^[0-9a-fA-F]{6}$/.test(hex)) throw new Error(`Dart color must resolve to six-digit hex: ${value}`);
    return `Color(0xFF${hex.toUpperCase()})`;
  }
  if (type === "dimension") {
    const match = String(value).match(/^(-?[0-9.]+)(px|rem|em)$/);
    if (!match) throw new Error(`Unsupported Dart dimension: ${value}`);
    const scalar = Number(match[1]) * (match[2] === "px" ? 1 : 16);
    return scalar % 1 === 0 ? `${scalar.toFixed(1)}` : String(scalar);
  }
  if (type === "duration") {
    const match = String(value).match(/^([0-9.]+)ms$/);
    if (!match) throw new Error(`Unsupported Dart duration: ${value}`);
    return `Duration(milliseconds: ${Number(match[1])})`;
  }
  if (type === "fontFamily") return JSON.stringify(Array.isArray(value) ? value[0] : value);
  if (type === "cubicBezier") return `Cubic(${value.join(", ")})`;
  if (type === "shadow") return JSON.stringify(stringifyValue(value, "css"));
  return typeof value === "number" ? String(value) : JSON.stringify(value);
}
