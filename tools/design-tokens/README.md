# GoCharbon design-token tooling

This dependency-free Node 24 toolchain compiles the governed source at
`shipglows_data/branding/design-tokens.json` into platform-native artifacts.

## Commands

```powershell
node tools/design-tokens/generate.mjs
node tools/design-tokens/generate.mjs --check
node tools/design-tokens/audit.mjs
node --test tools/design-tokens/test.mjs
```

`generate.mjs` writes the three declared site and Flutter outputs. During an
isolated batch, use `--out-root <temporary-directory>` so another batch's
exclusive paths are not touched. `--check` compares every output byte for byte
and exits non-zero when a file is missing or stale.

The audit scans UI source for literal colors. An exception is valid only while
its bounded glob and regular expression match at least one literal. Expired,
unused, duplicate or incomplete exceptions fail the run.

## Determinism contract

- the canonical JSON is recursively key-sorted before hashing;
- token paths and generated declarations are lexicographically ordered;
- all generated files use LF and end with one newline;
- each output embeds the same SHA-256 source hash and brand version;
- unknown references, cycles, incomplete modes and unsupported values fail.

Generated artifacts are consumers, never sources. Edit the canonical JSON,
regenerate, review the semantic change, and commit source and outputs together.

## Continuous integration

`.github/workflows/design-tokens.yml` runs the contract on every relevant
change. A native changed-path classifier activates the Astro and Flutter jobs
only for the affected consumer; canonical-source and generator changes activate
both. Manual dispatch always proves both surfaces.

Flutter CI uses `3.41.6`, the same stable SDK pinned by the repository's Vercel
build script. The full Flutter test suite is intentional: it covers the
multi-category mapping and the UI literal drift guard together.
