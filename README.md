# GoCharbon

Monorepo GoCharbon avec une gouvernance ShipFlow unique à la racine.

## Structure

- `site/` : site éditorial Astro
- `app/` : surface applicative réservée
- `app_quiz/` : application quiz Flutter + backend legacy
- `shipglows_data/` : gouvernance, docs métier, docs techniques, workflow
- `skills/` : skills locales du projet

## Démarrage

### Site

```bash
cd site
pnpm install
pnpm dev
```

### App quiz

```bash
cd app_quiz
npm run dev
```

## Doctrine

- Le branding commun vit dans `shipglows_data/branding/branding.md`.
- Le business commun vit dans `shipglows_data/business/business.md`.
- Les écarts par surface vivent sous `shipglows_data/product/*`, `shipglows_data/gtm/*`, `shipglows_data/technical/*` et `shipglows_data/editorial/*`.
- Les artefacts jetables (`dist`, `node_modules`, `.vercel`, `.playwright-mcp`) ne doivent jamais être versionnés ni laissés après vérification.

## Repères utiles

- Site : `site/package.json`
- App quiz : `app_quiz/package.json`
- Gouvernance technique site : `shipglows_data/technical/site/README.md`
- Gouvernance technique app quiz : `shipglows_data/technical/app_quiz/architecture.md`
