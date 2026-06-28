# GoCharbon

Monorepo GoCharbon avec une gouvernance ShipFlow unique à la racine.

## Structure

- `site/` : site éditorial Astro
- `app/` : surface applicative réservée
- `app_quiz/` : application quiz Flutter + backend legacy
- `shipflow_data/` : gouvernance, docs métier, docs techniques, workflow
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

- Le branding commun vit dans `shipflow_data/branding/branding.md`.
- Le business commun vit dans `shipflow_data/business/business.md`.
- Les écarts par surface vivent sous `shipflow_data/product/*`, `shipflow_data/gtm/*`, `shipflow_data/technical/*` et `shipflow_data/editorial/*`.
- Les artefacts jetables (`dist`, `node_modules`, `.vercel`, `.playwright-mcp`) ne doivent jamais être versionnés ni laissés après vérification.

## Repères utiles

- Site : `site/package.json`
- App quiz : `app_quiz/package.json`
- Gouvernance technique site : `shipflow_data/technical/site/README.md`
- Gouvernance technique app quiz : `shipflow_data/technical/app_quiz/architecture.md`
