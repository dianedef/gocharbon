---
artifact: agent_context
metadata_schema_version: "1.0"
artifact_version: "1.1.0"
project: gocharbon
created: "2026-04-26"
updated: "2026-06-28"
status: reviewed
source_skill: sf-docs
scope: agent
owner: Diane
confidence: medium
risk_level: low
security_impact: low
docs_impact: yes
depends_on: []
supersedes: []
evidence: []
next_review: "2026-07-26"
next_step: /sf-docs audit CLAUDE.md
---
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GoCharbon is a monorepo.

- `site/`: French-language educational Astro surface for entrepreneurs
- `app_quiz/`: Flutter quiz app with a legacy FastAPI backend
- `shipglows_data/`: shared governance root

## Founder Memory

When generating or rewriting editorial content for GoCharbon, keep this founder context persistent:

- The founder is **Diane**
- Diane is **French**, **36 years old**, and **female**
- Diane is a **builder** who likes making useful products, systems, and content
- Her motivation is **impact**, not empty personal branding or startup theater
- Core belief: if people use their energy to build the best things they can, the world becomes more useful and a bit better
- GoCharbon should feel like a **real founder-led project**, not a faceless content machine
- The project helps **people and businesses** move from vague ideas to concrete execution

### Writing implications

- Default to a **human, witty, lightly funny, grounded** voice
- Avoid generic AI phrasing, inflated mission statements, and copywriter clichés
- Let Diane feel like a **real French female founder**, but do not turn that into a gimmick
- Prefer practical intelligence, lived conviction, and honest usefulness over polished abstraction
- If writing "about", "bio", "founder", "team", "manifesto", or similar pages, present GoCharbon as **primarily carried by Diane**
- Do not invent a corporate team if one is not explicitly provided

### Founder reference file

For founder/about/team positioning, use [`site/src/data/_founder.md`](/home/claude/gocharbon/site/src/data/_founder.md) as the canonical content reference.
For entrepreneurial vision content aimed at readers, keep using [`site/src/data/_vision.md`](/home/claude/gocharbon/site/src/data/_vision.md).

## Commands

```bash
cd site && pnpm dev
cd site && pnpm build
cd site && pnpm build:full
cd site && pnpm preview
```

Package manager for the site: **pnpm** (v8.6.0). `app_quiz/` keeps its own runtime and scripts.

## Architecture

### Framework & Integrations
- **Astro 6** (static output, directory format, no trailing slashes)
- **Vue 3** for interactive components (quiz, theme toggle) via `@astrojs/vue`
- **UnoCSS** (Tailwind-compatible utility CSS) configured in `site/uno.config.ts`
- **Satori + resvg-js** for dynamic OG image generation at `/v1/generate/og/:slug.png`

### Shared Gamification Dependency
- Runtime currently stays pinned to `@diane-winflowz/gamification` through the GitHub repo tarball commit recorded in `site/package.json` and `site/pnpm-lock.yaml`.
- The accepted target strategy is a shared GitHub Packages package for `@diane-winflowz/gamification`, with explicit permissive license metadata and repository linkage.
- Do not switch the consumer from the pinned GitHub source to `npm.pkg.github.com` until the upstream package publication is provable and exposes `license`, `repository`, and GitHub Packages-compatible publish metadata.
- `site/.npmrc` maps the future package scope `@diane-winflowz` to `https://npm.pkg.github.com`; `minimum-release-age` was removed because this repo is pinned to `pnpm@8.6.0`, where that supply-chain setting is not a supported project `.npmrc` key.

### Content System
Posts live in `site/src/data/` as Markdown files with required frontmatter:
```yaml
title: string
author: string
tags: string[]       # Must match tags from site/src/components/tagHierarchy.ts
description: string
pubDate: "YYYY-MM-DD"
imgUrl: ./path.png   # Relative image, processed by Astro
draft: false         # Optional, defaults to false
```

Content collection is defined in `site/src/content.config.ts` using Zod validation with a glob loader (`**/[^_]*.md` in `./site/src/data`).

### Routing
- `site/src/pages/[...slug].astro` — Dynamic catch-all for blog posts (slug = post ID from collection)
- `site/src/pages/blog.astro` — Blog listing with tag filtering
- `site/src/pages/quiz.astro` — Interactive business quiz (Vue component)
- `site/src/pages/feed.xml.js` — RSS feed
- `site/src/pages/api/filter-posts.json.ts` — Tag filtering API endpoint with pagination

### Tag System
Tags use a 3-level hierarchy defined in `site/src/components/tagHierarchy.ts`. Root categories: business, marketing, tech, contenu, seo, productivite, tutoriels, outils.

Key filtering logic in `site/src/utils/static-responses.ts`:
- Parent tags are **ignored** when their subtags are selected (avoids redundancy)
- All selected tags must match (AND logic)
- Tag comparison is accent-insensitive and case-insensitive (NFD normalization)
- Common tag combinations are pre-generated at build time for caching

### Tool Qualification Method

GoCharbon now distinguishes:

- editorial taxonomy (`section: outils`)
- local qualification (`qualificationLocale`)
- economic anchoring (`ancrageEconomique`)
- responsibility (`niveauResponsabilite`)
- a public-facing `Engagement français` badge computed from these fields

When working on tool qualification or patriotic/local-economy positioning:

1. Read `AGENTS.md`
2. Use the skill at `skills/outils-qualification-locale/SKILL.md`
3. Follow the public doctrine in `site/src/pages/methodologie.astro`
4. Use `site/scripts/audit_outils_qualification.py` for coverage checks
5. Use `site/scripts/prioritize_outils_qualification.py` to build the stable backlog
6. Use `skills/outils-qualification-locale/scripts/build_qualification_batch.py` for lane-specific batches
7. Run `site/scripts/qa_outils_qualification.py` before considering a batch complete
8. Remember that frontmatter decisions affect the public badge shown on tool cards and tool pages
9. Default to one canonical tool page per product; only keep multiple pages when the editorial angle and search intent are truly distinct

Never infer “French” from branding alone. Prefer `indetermine` or `partiel` when evidence is incomplete or mixed.
When two tool pages are nearly identical, prefer one canonical URL surfaced through multiple tags/listings rather than two self-canonical pages.
When duplicate tool pages have very high content similarity, merge them by default; keep two only if the editorial angle and search intent genuinely diverge.

Suggested multi-agent split:

- `admin-finance`: `business/admin`, `business/comptabilite`, `business/facturation`
- `assurance-crm`: `business/assurance`, `business/crm`
- `communication-productivite`: `communication`, `productivite`
- `general`: everything else

### Path Aliases (tsconfig.json)
```
@components/* → src/components/*
@layouts/*    → src/layouts/*
@pages/*      → src/pages/*
```

### Layouts
- `site/src/layouts/Default.astro` — Base layout with nav/footer
- `site/src/layouts/Post.astro` — Blog post layout (wraps Default, adds sidebar + ToC)

### Styling
UnoCSS shortcuts for the neobrutalist design system: `brutal-card`, `brutal-btn`, `brutal-pill`, `brutal-filter-pill`. Color palette defined in `site/uno.config.ts` with dark mode support. Primary font: Sanchez (serif).

## Content Guidelines (from .cursorrules)

- All content is in **French**, using informal address (tutoiement)
- Never delete existing content
- Heading format: `"TERME TECHNIQUE : TERME MÉTAPHORIQUE"`
- Cite scientific sources; integrate links naturally in text flow
- Tone: accessible, engaging storytelling, scientific but simplified
- Target audience: French entrepreneurs, freelancers, small businesses

## Working Notes

- Prefer focused reads (`rg` + targeted file sections) over broad scans.
- Keep claims tied to observable repo evidence (files, scripts, config, routes).
- When docs change behavior or constraints, update the canonical files in `shipglows_data/` together.
