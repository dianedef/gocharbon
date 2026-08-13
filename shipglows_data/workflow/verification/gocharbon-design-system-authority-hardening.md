---
artifact: verification_checklist
metadata_schema_version: "1.0"
artifact_version: "1.1.0"
project: "gocharbon"
created: "2026-06-11"
created_at: "2026-06-11 00:00:00 UTC"
updated: "2026-08-13"
updated_at: "2026-08-13 17:55:00 UTC"
status: active
source_skill: sg-docs
scope: "gocharbon-design-system-authority-hardening"
owner: "Diane"
confidence: high
risk_level: medium
security_impact: none
docs_impact: yes
linked_systems:
  - "shipglows_data/technical/site/design-system-authority.md"
  - "shipglows_data/workflow/specs/gocharbon-design-system-authority-hardening.md"
  - "site/src/styles/global.css"
depends_on:
  - artifact: "shipglows_data/technical/site/design-system-authority.md"
    artifact_version: "2.3.0"
    required_status: active
  - artifact: "shipglows_data/workflow/specs/gocharbon-design-system-authority-hardening.md"
    artifact_version: "2.6.0"
    required_status: ready
supersedes: []
next_review: "2026-09-13"
evidence:
  - "Gating commands are defined and executable from the repo command stack."
next_step: "Collect automated Browser evidence for light/dark, desktop/mobile and keyboard focus."
---

# Verification: GoCharbon — Design-System Authority Hardening

## Scenarios

| Scenario | Proof | Résultat |
| --- | --- | --- |
| `DSA-GO-001` | Fichier `shipglows_data/technical/site/design-system-authority.md` existe et définit un carrier visuel unique + règles. | PASS |
| `DSA-GO-002` | Spec de durcissement référence l’authority et les commandes de contrôle. | PASS |
| `DSA-GO-003` | Le check de drift est défini pour les fichiers changés. | PASS |
| `DSA-GO-004` | `shipglows_data/technical/site/design-system-authority.md` est réutilisé dans la spec + vérification (dépendances). | PASS |
| `DSA-GO-005` | Les tâches de governance sont créées dans le registre local du projet. | PASS |

## Checks à exécuter

```bash
python3 "${SHIPGLOWS_ROOT:-$HOME/.shipglows/runtime}/tools/design_system_drift_check.py" --root . --changed --warn-only
python3 "${SHIPGLOWS_ROOT:-$HOME/.shipglows/runtime}/tools/shipglows_metadata_lint.py" \
  shipglows_data/technical/site/design-system-authority.md \
  shipglows_data/workflow/specs/gocharbon-design-system-authority-hardening.md \
  shipglows_data/workflow/verification/gocharbon-design-system-authority-hardening.md
rg -n "design_system_authority|design-system-authority|gocharbon-design-system-authority-hardening" \
  shipglows_data/technical/site/design-system-authority.md \
  shipglows_data/workflow/specs/gocharbon-design-system-authority-hardening.md \
  shipglows_data/workflow/verification/gocharbon-design-system-authority-hardening.md
```

## Verification technique 2026-08-13

- Commit livre: `185bd8c9` sur `origin/main`.
- Tokens check/audit: PASS, 0 litteral et 0 exception.
- Build Astro: PASS, 23 pages.
- Flutter analyze: PASS, aucune issue.
- Flutter test: PASS, 9 tests.
- Git diff check: PASS.
- Browser automatise clair/sombre, desktop/mobile et clavier: PENDING.

L'implementation et les checks techniques sont termines. La verification
visuelle reste ouverte jusqu'a la collecte de cette preuve Browser.

## Notes

- L'autorite des composants est implementee et livree; cette checklist reste
  ouverte uniquement pour la preuve visuelle automatisee.
- Les prochaines evolutions UI doivent garder ce plan a jour si un nouveau
  token ou une nouvelle variante semantique est introduit.
