---
artifact: spec
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-06-11"
created_at: "2026-06-11 00:00:00 UTC"
updated: "2026-06-11"
updated_at: "2026-06-11 00:00:00 UTC"
status: draft
source_skill: 100-sf-spec
source_model: "GPT-5 Codex"
scope: "gocharbon-design-system-authority-hardening"
owner: "Diane"
confidence: medium
user_story: "En tant qu'équipe, on veut empêcher que l'UI de GoCharbon soit modifiée avec des tokens visuels ad hoc, afin de garantir une cohérence design continue, sans dégradation pro."
risk_level: medium
security_impact: none
docs_impact: yes
linked_systems:
  - "/home/claude/gocharbon/shipglows_data/branding/branding.md"
  - "/home/claude/gocharbon/shipglows_data/technical/site/design-system-authority.md"
  - "/home/claude/gocharbon/site/src/styles/global.css"
depends_on:
  - artifact: "/home/claude/gocharbon/shipglows_data/technical/site/design-system-authority.md"
    artifact_version: "1.0.0"
    required_status: draft
supersedes: []
evidence:
  - "Color and visual conventions are currently centralized in site/src/styles/global.css"
next_step: "/sf-ready gocharbon gocharbon design-system authority hardening"
---
# Spec: GoCharbon – Design-System Authority Hardening

## Titre

GoCharbon — durcissement de la doctrine Design-System

## User story

En tant qu'équipe, on veut empêcher que l'UI de GoCharbon soit modifiée avec des tokens visuels ad hoc, afin de garantir une cohérence design continue, sans dégradation pro.

## Contexte

GoCharbon est un site web (Astro + Vue). Le contrat visuel doit rester piloté par:

- `shipglows_data/branding/branding.md`
- `shipglows_data/technical/site/design-system-authority.md` (declaratif)
- `site/src/styles/global.css` (carrier technique)

## Contrat minimal

Toute évolution UI doit :

- utiliser des tokens/variables déclarés,
- ne pas introduire de token visuel local non rattaché à `global.css`,
- documenter les exceptions dans `shipglows_data/technical/site/design-system-authority.md`.

## In scope

- `site/src/styles/global.css`
- `site/src/pages/**`, `site/src/components/**`, `site/src/layouts/**`
- `shipglows_data/technical/site/design-system-authority.md`
- `shipglows_data/workflow/verification/gocharbon-design-system-authority-hardening.md`

## Out of scope

- réécriture du contenu éditorial,
- refonte globale de maquette/charte,
- migration framework.

## Exigences

1. Déclarer officiellement le carrier unique pour l'ensemble des tokens visuels du site.
2. Appliquer une règle de non-régression: pas de nouvelles couleurs, polices, tailles de police, ombres, espacements arbitraires dans les fichiers UI modifiés.
3. Ajouter un plan de vérification simple qui bloque la dérive visuelle non justifiée.
4. Garder une compatibilité mobile/desktop avec la même hiérarchie visuelle.

## Validation

```bash
python3 /home/claude/shipglowz/tools/design_system_drift_check.py --root /home/claude/gocharbon --changed --warn-only
python3 /home/claude/shipglowz/tools/shipglowz_metadata_lint.py \
  shipglows_data/technical/site/design-system-authority.md \
  shipglows_data/workflow/specs/gocharbon-design-system-authority-hardening.md \
  shipglows_data/workflow/verification/gocharbon-design-system-authority-hardening.md
rg -n "design_system_authority|design-system-authority|gocharbon-design-system-authority-hardening" \
  shipglows_data/technical/site/design-system-authority.md \
  shipglows_data/workflow/specs/gocharbon-design-system-authority-hardening.md \
  shipglows_data/workflow/verification/gocharbon-design-system-authority-hardening.md
```

## Critères de succès

- La doctrine d'autorité de design est déclarée et référencée dans la spec.
- Les prochaines PRs UI ont une source de vérité définie.
- Aucune valeur visuelle arbitraire n’est introduite sans passage par `global.css` ou exception documentée.
- La vérification est exécutable avec commandes reproductibles.
