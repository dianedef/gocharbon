# Brutal - The neobrutalist Astro theme

Brutal is a minimal neobrutalist theme for [Astro](https://astro.build/). It's based on Neobrutalist Web Design, a movement that aims to create websites with a minimalistic and functional design. It has some integrations like Image Optimization, RSS, Sitemap, ready to get your SEO done right.

The theme has no JavaScript integration out of the box, but can always be added of course.

This template is based on [my own personal website](<https://www.elian.codes/>), with some more generic things added.

## GoCharbon - Product Notes (Parcours)

### Editorial Direction

- Goal: make online business accessible to beginners, without removing useful technical depth.
- Principle: **accessible technicality**.
  - Keep important terms when they help learning and SEO.
  - Explain them in context with simple, actionable language.
- Tone: friendly, clear, coaching-oriented.

### Parcours Link Status (2026-03-03)

- Active parcours links verified (steps + `Liens utiles pour avancer`): **0 broken links**.
- Remaining missing links are in `Idées de contenus pour aller plus loin` (intentional editorial backlog).

### Parcours Content Quality (2026-03-03)

- Active content links audited: **126**
- Fragile content: **0**
- Medium content: **0**
- Solid content: **126**

## Usage

You can bootstrap a new Astro project using Brutal with the following command:

```bash
# npm 6.x
npx create astro@latest --template eliancodes/brutal

```

### Commands

All commands are run from the root of the project, from a terminal:

(Here I use PNPM, no problem if you use NPM or Yarn)

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `pnpm install`      | Installs dependencies                              |
| `pnpm dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm build`        | Build your production site to `./dist/`            |
| `pnpm preview`      | Preview your build locally, before deploying       |
| `pnpm audit:parcours` | Run parcours content quality and link audit       |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm astro --help` | Get help using the Astro CLI                       |

### UnoCSS

In this theme, I'm using [UnoCSS](https://uno.antfu.me/) to generate the CSS. It's a utility-first CSS framework that uses a single class to style elements. It's very easy to use and has a lot of features. It's setup to be completely compatible with TailwindCSS, with the advantage of being able to use PureCSS icons. You can always switch out UnoCSS for TailwindCSS if you want to, without breaking the general styles.

### Sitemap

To generate the sitemap, you don't need to do anything. It's automatically generated when you build your site. You'll just need to switch out the `site` on `astro.config.mjs` to your own.

```js title="astro.config.mjs"
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
});
```

### RSS

The RSS feed is automatically generated from the Markdown files in the `src/content/blog` folder. You can ofcourse completely change this to your own needs.

The RSS will output to `https://example.com/feed.xml` by default. You can change this, by renaming `src/pages/feed.xml.js`.

### Colors

The theme has a few colors that you can use in the included components.

More colors can be added in `astro.config.mjs` in the `colors` array.
