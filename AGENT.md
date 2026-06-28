---
artifact: agent_context
metadata_schema_version: "1.0"
artifact_version: "1.2.0"
project: "gocharbon"
created: "2026-04-26"
updated: "2026-06-28"
status: reviewed
source_skill: manual
scope: agent
owner: "dianedef"
confidence: "high"
risk_level: "medium"
security_impact: "none"
docs_impact: "yes"
next_review: "2026-07-26"
linked_systems:
  - "site/"
  - "app_quiz/"
  - "shipflow_data/"
evidence:
  - "README.md"
  - "CLAUDE.md"
  - "shipflow_data/branding/branding.md"
  - "shipflow_data/business/business.md"
  - "shipflow_data/technical/site/README.md"
  - "shipflow_data/technical/app_quiz/architecture.md"
  - "site/package.json"
  - "site/astro.config.mjs"
  - "site/src/content.config.ts"
  - "app_quiz/package.json"
depends_on: []
supersedes: []
next_step: "/sf-docs update AGENT.md"
---

# AGENT — gocharbon

Point d'entrée opérationnel du monorepo.

## Ordre de lecture rapide

1. `CLAUDE.md`
2. `shipflow_data/branding/branding.md`
3. `shipflow_data/business/business.md`
4. `shipflow_data/technical/site/README.md` ou `shipflow_data/technical/app_quiz/architecture.md` selon la surface
5. `shipflow_data/technical/site/context.md`, `shipflow_data/technical/site/context-function-tree.md`, `shipflow_data/technical/site/architecture.md` pour le site

## Doctrine monorepo

- Le site vit entièrement sous `site/`.
- L'application quiz vit entièrement sous `app_quiz/`.
- La gouvernance partagée vit uniquement sous `shipflow_data/`.
- Le branding et le business parent sont communs.
- Le produit, le GTM, l'éditorial et la technique peuvent diverger par surface.

## Points d'entrée utiles

- Site contenu/taxonomie/outils : `site/src/data`, `site/src/utils`, `site/scripts`
- Site routes/UI : `site/src/pages`, `site/src/layouts`, `site/src/components`
- Site build/deploy : `site/package.json`, `site/astro.config.mjs`
- App quiz : `app_quiz/flutter_app`, `app_quiz/backend`, `app_quiz/supabase`

## Contraintes non négociables

- Ne pas recréer de docs de gouvernance dans `site/` ou `app_quiz/`.
- Ne pas laisser d'artefacts jetables versionnés.
- Ne pas inventer de qualification locale, de promesse business, ou de claim produit sans preuve.
- Si une règle métier ou technique change, mettre à jour la doc canonique correspondante dans `shipflow_data/` avant validation.
