---
artifact: technical_guidelines
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-06-11"
updated: "2026-06-11"
status: draft
source_skill: 300-sf-docs
scope: "design-system-authority"
owner: "Diane"
confidence: medium
risk_level: medium
security_impact: none
docs_impact: yes
linked_systems:
  - "/home/claude/gocharbon/shipflow_data/business/branding.md"
  - "/home/claude/gocharbon/src/styles/global.css"
  - "/home/claude/gocharbon/src/pages/index.astro"
  - "/home/claude/gocharbon/src/components"
depends_on:
  - artifact: "/home/claude/gocharbon/shipflow_data/business/branding.md"
    artifact_version: "1.0.0"
    required_status: reviewed
supersedes: []
evidence:
  - "Branding and visual conventions are maintained in shipflow_data/business/branding.md"
  - "Production styles are currently centralized in src/styles/global.css"
next_review: "2026-07-11"
next_step: "/sf-docs update shipflow_data/technical/design-system-authority.md"
---

# Design-System Authority

## Rappel de doctrine

GoCharbon doit rester visuellement cohérent et professionnel. Toute évolution UI doit passer par les token carriers déclarés.

## Sources autorisées

- **Contrat de marque**: `/home/claude/gocharbon/shipflow_data/business/branding.md`  
  Toute décision visuelle doit partir de ce document.
- **Token carrier unique (site)**: `/home/claude/gocharbon/src/styles/global.css`
- **Consommation UI (site)**: `src/styles/global.css` + classes utilitaires via `src/components`, `src/pages`

## Règles de non-négociation

1. Une modification visuelle ne peut pas introduire de valeur visuelle arbitraire hors token (couleur, police, ombre, espacement, rayon, taille de texte).
2. Les couleurs doivent être issues de variables CSS définies dans `global.css`.
3. Les valeurs de typo, espace, ombre et border doivent être alignées avec ce carrier, sauf exception explicitement documentée.
4. Toute nouvelle variable “design” doit être ajoutée en premier dans `global.css` puis réutilisée via classes/custom properties.

## Interdictions

- `#hex`, `rgb(...)`, `rgba(...)`, `hsl(...)`, `linear-gradient(...)`, `BoxShadow`, `font-size` ad hoc, `border-radius` ad hoc dans des composants nouveaux ou modifiés.
- nouveaux styles “one-shot” dans des composants/pages sans passage préalable par `global.css`.
- création de styles locaux pour corriger le rendu ponctuel sans mise à jour de token central.

## Exceptions

- Ajustements strictement structurels (layout/behavior) non visuels.
- Corrections temporaires pour accessibilité/bugs visuels urgents, si elles sont suivies d’un patch de token.
- Refactoring de composants anciennement dérivés, à condition d’enlever les nouvelles valeurs hardcodées.

## Mesure de conformité

- Avant validation d’un PR UI, l’outil de détection de drift doit être exécuté sur les fichiers changés.
- Un reviewer bloque toute PR ne montrant pas la provenance de la valeur visuelle via `global.css`.
