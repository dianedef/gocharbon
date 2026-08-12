#!/usr/bin/env node
import { readFile, readdir } from "node:fs/promises";
import { dirname, extname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const args = parseArgs(process.argv.slice(2));
const root = resolve(args.root || repoRoot);
const allowlistPath = resolve(args.allowlist || resolve(repoRoot, "shipglows_data/branding/design-token-exceptions.json"));
const allowlist = JSON.parse(await readFile(allowlistPath, "utf8"));
validateAllowlist(allowlist);

const roots = args.paths.length ? args.paths.map((path) => resolve(root, path)) : [resolve(root, "site/src"), resolve(root, "app_quiz/flutter_app/lib")];
const matches = [];
for (const scanRoot of roots) {
  for (const file of await walk(scanRoot)) {
    const rel = relative(root, file).split(sep).join("/");
    if (rel.includes("/generated/") || rel.endsWith(".g.dart")) continue;
    const text = await readFile(file, "utf8");
    const patterns = patternsFor(file);
    for (const pattern of patterns) {
      for (const match of text.matchAll(pattern)) {
        const line = text.slice(0, match.index).split("\n").length;
        matches.push({ file: rel, line, literal: match[0] });
      }
    }
  }
}

const used = new Set();
const violations = matches.filter((match) => {
  const exception = allowlist.exceptions.find((item) => globMatches(match.file, item.glob) && new RegExp(item.pattern).test(match.literal));
  if (!exception) return true;
  used.add(exception.id);
  return false;
});
const unused = allowlist.exceptions.filter((item) => !used.has(item.id));
for (const violation of violations) process.stderr.write(`${violation.file}:${violation.line}: unexplained visual literal ${violation.literal}\n`);
for (const exception of unused) process.stderr.write(`unused exception: ${exception.id}\n`);
if (violations.length || unused.length) process.exitCode = 1;
else process.stdout.write(`design-token audit passed (${matches.length} literals, ${used.size} exceptions)\n`);

function parseArgs(argv) {
  const parsed = { paths: [] };
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === "--root") parsed.root = argv[++index];
    else if (argv[index] === "--allowlist") parsed.allowlist = argv[++index];
    else if (argv[index] === "--path") parsed.paths.push(argv[++index]);
    else throw new Error(`Unknown argument: ${argv[index]}`);
  }
  return parsed;
}

function validateAllowlist(document) {
  if (!document || !Array.isArray(document.exceptions)) throw new Error("Allowlist must contain an exceptions array");
  const ids = new Set();
  const today = new Date().toISOString().slice(0, 10);
  for (const item of document.exceptions) {
    for (const key of ["id", "glob", "pattern", "reason", "owner", "scope", "expires"]) if (!item[key]) throw new Error(`Incomplete exception: ${item.id || "unknown"}`);
    if (ids.has(item.id)) throw new Error(`Duplicate exception id: ${item.id}`);
    ids.add(item.id);
    if (item.expires < today) throw new Error(`Expired exception: ${item.id}`);
    new RegExp(item.pattern);
  }
}

async function walk(path) {
  const entries = await readdir(path, { withFileTypes: true }).catch((error) => error.code === "ENOENT" ? [] : Promise.reject(error));
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const child = resolve(path, entry.name);
    if (entry.isDirectory()) files.push(...await walk(child));
    else if ([".astro", ".css", ".dart", ".js", ".mjs", ".scss", ".ts", ".tsx", ".vue"].includes(extname(entry.name))) files.push(child);
  }
  return files;
}

function patternsFor(file) {
  if (extname(file) === ".dart") return [/\bColor\(0x[0-9a-fA-F]{8}\)/g, /\bColors\.[a-zA-Z]+/g];
  return [/#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g, /\brgba?\([^)]*\)/g, /\bhsla?\([^)]*\)/g];
}

function globMatches(path, glob) {
  const escaped = glob.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*\*/g, "::DOUBLE::").replace(/\*/g, "[^/]*").replace(/::DOUBLE::/g, ".*");
  return new RegExp(`^${escaped}$`).test(path);
}
