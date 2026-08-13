import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, mkdir, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { flattenTokens, loadTokenDocument, resolveAll, sourceHash } from "./lib.mjs";

const execFileAsync = promisify(execFile);
const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "../..");
const source = resolve(repoRoot, "shipglows_data/branding/design-tokens.json");

test("canonical document validates and resolves every mode", async () => {
  const { document, canonical } = await loadTokenDocument(source);
  const flat = flattenTokens(document.tokens);
  assert.ok(flat.size > 50);
  assert.equal(
    resolveAll(flat, "light").get("semantic.color.background"),
    resolveAll(flat, "light").get("primitive.color.brand.yellow"),
  );
  assert.equal(resolveAll(flat, "dark").get("semantic.color.background"), "#050b10");
  assert.match(sourceHash(canonical), /^[a-f0-9]{64}$/);
});

test("cycles and unknown references are rejected", async () => {
  const fixture = await mkdtemp(resolve(tmpdir(), "gocharbon-token-invalid-"));
  const cycle = {
    schemaVersion: "1.0.0", brandVersion: "1.0.0", description: "fixture",
    tokens: { a: { $type: "color", $value: "{b}" }, b: { $type: "color", $value: "{a}" } }
  };
  const path = resolve(fixture, "tokens.json");
  await writeFile(path, JSON.stringify(cycle));
  await assert.rejects(loadTokenDocument(path), /Cyclic token reference/);
});

test("generation is deterministic and --check detects drift", async () => {
  const output = await mkdtemp(resolve(tmpdir(), "gocharbon-token-output-"));
  const command = [resolve(scriptDir, "generate.mjs"), "--source", source, "--out-root", output];
  await execFileAsync(process.execPath, command);
  await execFileAsync(process.execPath, [...command, "--check"]);
  const css = resolve(output, "site/src/styles/generated/design-tokens.css");
  const first = await readFile(css, "utf8");
  assert.match(first, /GENERATED FILE - DO NOT EDIT/);
  assert.match(first, /--gc-primitive-color-brand-yellow: #e7ad18/);
  assert.match(first, /\[data-theme="dark"\]/);
  await writeFile(css, `${first}/* drift */\n`);
  await assert.rejects(execFileAsync(process.execPath, [...command, "--check"]));
  await execFileAsync(process.execPath, command);
  assert.equal(await readFile(css, "utf8"), first);
});

test("audit enforces explained, live and used exceptions", async () => {
  const fixture = await mkdtemp(resolve(tmpdir(), "gocharbon-token-audit-"));
  await mkdir(resolve(fixture, "site/src"), { recursive: true });
  await writeFile(resolve(fixture, "site/src/example.css"), ".example { color: #123456; }\n");
  const allowlist = resolve(fixture, "allowlist.json");
  const exception = {
    version: "1.0.0",
    exceptions: [{ id: "fixture-media", glob: "site/src/example.css", pattern: "#123456", reason: "Test fixture", owner: "tests", scope: "web", expires: "2099-12-31" }]
  };
  await writeFile(allowlist, JSON.stringify(exception));
  const command = [resolve(scriptDir, "audit.mjs"), "--root", fixture, "--allowlist", allowlist, "--path", "site/src"];
  await execFileAsync(process.execPath, command);
  exception.exceptions[0].pattern = "#abcdef";
  await writeFile(allowlist, JSON.stringify(exception));
  await assert.rejects(execFileAsync(process.execPath, command));
});

test("audit rejects literal font families and accepts semantic variables", async () => {
  const fixture = await mkdtemp(resolve(tmpdir(), "gocharbon-token-font-audit-"));
  await mkdir(resolve(fixture, "site/src"), { recursive: true });
  const css = resolve(fixture, "site/src/example.css");
  const allowlist = resolve(fixture, "allowlist.json");
  await writeFile(allowlist, JSON.stringify({ version: "1.0.0", exceptions: [] }));
  const command = [resolve(scriptDir, "audit.mjs"), "--root", fixture, "--allowlist", allowlist, "--path", "site/src"];

  await writeFile(css, '.example { font-family: "Poppins", sans-serif; }\n');
  await assert.rejects(execFileAsync(process.execPath, command));

  await writeFile(css, ".example { font-family: var(--gc-semantic-type-body-family); }\n");
  await execFileAsync(process.execPath, command);
});
