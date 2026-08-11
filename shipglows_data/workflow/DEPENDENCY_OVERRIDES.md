# Dependency Overrides

Date: 2026-04-27  
Owner: Diane / GoCharbon  
Context: `dependency security stabilization after Astro 6 migration`

These overrides are temporary controls to patch transitive vulnerabilities while keeping the Astro 6 dependency graph installable and audited.

| Package selector | Forced version | Advisory (GHSA) | Upstream parent(s) | Validation | Removal condition |
|---|---:|---|---|---|---|
| `h3>defu` | `6.1.5` | GHSA-737v-mqg7-c878 | `astro -> unstorage -> h3 -> defu` | `GITHUB_TOKEN=dummy corepack pnpm audit --audit-level high` | Remove when Astro tree ships patched `h3/defu` transitively. |
| `flat-cache>flatted` | `3.4.2` | GHSA-25h7-pfq9-p65f, GHSA-rf6f-7fwh-wjgh | `eslint -> file-entry-cache -> flat-cache -> flatted` | `GITHUB_TOKEN=dummy corepack pnpm audit --audit-level high` | Remove when eslint/file-entry-cache consume `flatted >=3.4.2`. |
| `unstorage>h3` | `1.15.6` | GHSA-22cc-p3c6-wpvm | `astro -> unstorage -> h3` | `GITHUB_TOKEN=dummy corepack pnpm audit --audit-level high` | Remove when Astro updates to `h3 >=1.15.6` by default. |
| `eslint>minimatch`, `@eslint/config-array>minimatch`, `@eslint/eslintrc>minimatch` | `3.1.4` | GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj, GHSA-23c5-xmqv-rm74 | `eslint` and plugins | `GITHUB_TOKEN=dummy corepack pnpm audit --audit-level high` | Remove when eslint ecosystem no longer resolves vulnerable v3 line. |
| `@typescript-eslint/typescript-estree>minimatch` | `9.0.7` | GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj | `@typescript-eslint/typescript-estree` | `GITHUB_TOKEN=dummy corepack pnpm audit --audit-level high` | Remove when `@typescript-eslint/*` resolves patched minimatch by default. |
| `anymatch>picomatch` | `2.3.2` | GHSA-c2c7-rcm5-vvqj | `astro -> unstorage -> anymatch -> picomatch` | `GITHUB_TOKEN=dummy corepack pnpm audit --audit-level high` | Remove when upstream anymatch chain is patched without override. |
| `astro>picomatch`, `@rollup/pluginutils>picomatch`, `tinyglobby>picomatch`, `fdir>picomatch` | `4.0.4` | GHSA-c2c7-rcm5-vvqj | `astro`, `vite`, tooling chains | `GITHUB_TOKEN=dummy corepack pnpm audit --audit-level high` | Remove when Astro/Vite tree resolves `picomatch >=4.0.4` natively. |
| `vite>rollup` | `4.59.0` | GHSA-mw96-cpmx-2vgc | `astro -> vite -> rollup` | `GITHUB_TOKEN=dummy corepack pnpm audit --audit-level high` | Remove when the Astro 6 / Vite 7 line already resolves a patched Rollup without override. |
| `astro>svgo` | `4.0.1` | GHSA-xpqw-6gx7-v673 | `astro -> svgo` | `GITHUB_TOKEN=dummy corepack pnpm audit --audit-level high` | Remove when Astro consumes `svgo >=4.0.1` by default. |
