# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GoCharbon (gocharbon.com) is a French-language educational blog platform for entrepreneurs, built with Astro 5. It uses the "Brutal" neobrutalist theme as a base. The site is fully static (SSG) with ~290 Markdown blog posts organized in a hierarchical tag system.

## Commands

```bash
pnpm dev          # Start dev server at http://localhost:3000 (network-accessible)
pnpm build        # Build static site to ./dist/
pnpm preview      # Preview production build locally
```

Package manager: **pnpm** (v8.6.0). No test suite is configured.

## Architecture

### Framework & Integrations
- **Astro 5** (static output, directory format, no trailing slashes)
- **Vue 3** for interactive components (quiz, theme toggle) via `@astrojs/vue`
- **UnoCSS** (Tailwind-compatible utility CSS) configured in `uno.config.ts`
- **Satori + resvg-js** for dynamic OG image generation at `/v1/generate/og/:slug.png`

### Content System
Posts live in `src/data/` as Markdown files with required frontmatter:
```yaml
title: string
author: string
tags: string[]       # Must match tags from src/components/tagHierarchy.ts
description: string
pubDate: "YYYY-MM-DD"
imgUrl: ./path.png   # Relative image, processed by Astro
draft: false         # Optional, defaults to false
```

Content collection is defined in `src/content.config.ts` using Zod validation with a glob loader (`**/[^_]*.md` in `./src/data`).

### Routing
- `src/pages/[...slug].astro` — Dynamic catch-all for blog posts (slug = post ID from collection)
- `src/pages/blog.astro` — Blog listing with tag filtering
- `src/pages/quiz.astro` — Interactive business quiz (Vue component)
- `src/pages/feed.xml.js` — RSS feed
- `src/pages/api/filter-posts.json.ts` — Tag filtering API endpoint with pagination

### Tag System
Tags use a 3-level hierarchy defined in `src/components/tagHierarchy.ts`. Root categories: business, marketing, tech, contenu, seo, productivite, tutoriels, apps.

Key filtering logic in `src/utils/static-responses.ts`:
- Parent tags are **ignored** when their subtags are selected (avoids redundancy)
- All selected tags must match (AND logic)
- Tag comparison is accent-insensitive and case-insensitive (NFD normalization)
- Common tag combinations are pre-generated at build time for caching

### Path Aliases (tsconfig.json)
```
@components/* → src/components/*
@layouts/*    → src/layouts/*
@pages/*      → src/pages/*
```

### Layouts
- `src/layouts/Default.astro` — Base layout with nav/footer
- `src/layouts/Post.astro` — Blog post layout (wraps Default, adds sidebar + ToC)

### Styling
UnoCSS shortcuts for the neobrutalist design system: `brutal-card`, `brutal-btn`, `brutal-pill`, `brutal-filter-pill`. Color palette defined in `uno.config.ts` with dark mode support. Primary font: Sanchez (serif).

## Content Guidelines (from .cursorrules)

- All content is in **French**, using informal address (tutoiement)
- Never delete existing content
- Heading format: `"TERME TECHNIQUE : TERME MÉTAPHORIQUE"`
- Cite scientific sources; integrate links naturally in text flow
- Tone: accessible, engaging storytelling, scientific but simplified
- Target audience: French entrepreneurs, freelancers, small businesses

## Context MCP — Token-Saving Protocol

This project uses a local codebase MCP server for efficient context management. Follow this order strictly:

### Every turn:
1. **Call `context_continue` FIRST** — before any Read, Grep, Glob, or file exploration. This returns files already in memory and avoids re-reading.
2. **If you need more files**, call `context_retrieve` with your query BEFORE using Grep/Glob. It ranks files by relevance.
3. **Use `context_read`** instead of the Read tool when exploring code. It excerpts only relevant portions and tracks your token budget (18K chars/turn).
4. **After editing files**, always call `context_register_edit` with a one-sentence summary.
5. **Store key decisions** with `context_decide` (e.g., "using Vue for interactive islands").

### Rules:
- Do NOT use Read/Grep/Glob for broad exploration before calling `context_continue`
- Do NOT re-read files that `context_continue` says are already in memory
- Prefer `context_read` over Read for all code exploration (Read is fine for files you need in full)
- Do NOT exceed the turn read budget — if `context_read` says budget exhausted, stop reading and work with what you have
- After edits, ALWAYS call `context_register_edit` — this invalidates stale cache
- For large files: call `list_symbols` first, then `context_read "file::symbol"` to read just the function you need
- Call `count_tokens(text)` before reading any file > 200 lines to decide if it's worth the budget
- When user says "done", "bye", or "wrap up" — call `session_wrap` to save context for next session
