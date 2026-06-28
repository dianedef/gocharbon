# GoCharbon — Audit Log

| Date | Scope | Design | Copy | SEO | GTM | i18n | Deps | Perf | Code | Issues |
|------|-------|--------|------|-----|-----|------|------|------|------|--------|
| 2026-02-28 | Project | — | — | — | — | — | — | — | B | 4🔴 5🟠 6🟡 |
| 2026-03-02 | Parcours (content + links) | B | A- | A- | — | B+ | — | — | B | 0🔴 0🟠 3🟡 |
| 2026-03-03 | Parcours (quality QA) | — | A | A- | — | B+ | — | — | A- | 0🔴 0🟠 0🟡 |
| 2026-04-07 | Project | — | — | B→A- | — | — | — | B+ | — | 4🔴 4🟠 3🟡 → 27 fixed + 13 dupes drafted |
| 2026-04-27 | Dependencies | — | — | — | — | — | D | — | — | 1🔴 3🟠 5🟡 |
| 2026-04-27 | Dependencies (fix pass) | — | — | — | — | — | B- | — | — | 0🔴 0🟠 2🟡 (crit/high 20->0; 8 moderate + 3 low restant Astro 5/6) |
| 2026-05-24 | Dependencies | — | — | — | — | — | C- | — | — | 0/2/8 |
🟠 [gocharbon] audit: dependencies run | date: 2026-05-24 | overall: C- | issues: 0 critical / 2 high / 8 moderate
🟢 [gocharbon] audit: dependencies run | date: 2026-05-25 | overall: B- | issues: 0 critical / 0 high / 0 moderate / 0 low; remaining non-breaking updates: vue 3.5.34 (minor) and satori up to 0.26.0 (major-likely per 0.x range)
🟢 [gocharbon] audit: dependencies migrate run | date: 2026-05-25 | overall: B | issues: 0 critical / 0 high / 0 moderate / 0 low; updates: `eslint@10.4.0`, `satori@0.26.0`, `vue@3.5.34`; blocking warning: `eslint-plugin-jsx-a11y@6.10.2` peer constraint (`^3-^9`) vs eslint 10
🟢 [gocharbon] audit: dependencies migration completion | date: 2026-05-25 | overall: B | issues: 0 critical / 0 high / 0 moderate / 0 low; peer mismatch resolved by removing `eslint-plugin-jsx-a11y` (incompatible with ESLint 10). Remaining non-security drift: `@typescript-eslint/parser` -> 8.60.0, `lucide-astro` deprecated at 0.556.0
🟢 [gocharbon] audit: dependencies modernized | date: 2026-05-25 | overall: B | issues: 0 critical / 0 high / 0 moderate / 0 low; dependency migration complete (`lucide-astro` -> `@lucide/astro@1.16.0`), compatibility preserved with Astro 6
🟡 [gocharbon] audit: dependencies run | date: 2026-06-12 | overall: B- | issues: 0 critical / 1 high / 2 medium; no known CVEs from `pnpm audit`, but runtime gamification package remains pinned to a GitHub tarball with UNKNOWN license metadata, `.npmrc` emits an npm config compatibility warning, and project docs still describe Astro 5 while `site/package.json` is on Astro 6
