---
artifact: verification_checklist
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-06-11"
created_at: "2026-06-11 00:00:00 UTC"
updated: "2026-06-11"
updated_at: "2026-06-11 00:00:00 UTC"
status: active
source_skill: 105-sf-check
scope: "gocharbon-design-system-authority-hardening"
owner: "Diane"
confidence: medium
risk_level: medium
security_impact: none
docs_impact: yes
linked_systems:
  - "/home/claude/gocharbon/shipflow_data/technical/site/design-system-authority.md"
  - "/home/claude/gocharbon/shipflow_data/workflow/specs/gocharbon-design-system-authority-hardening.md"
  - "/home/claude/gocharbon/src/styles/global.css"
depends_on:
  - artifact: "/home/claude/gocharbon/shipflow_data/technical/site/design-system-authority.md"
    artifact_version: "1.0.0"
    required_status: draft
  - artifact: "/home/claude/gocharbon/shipflow_data/workflow/specs/gocharbon-design-system-authority-hardening.md"
    artifact_version: "1.0.0"
    required_status: draft
supersedes: []
next_review: "2026-07-11"
evidence:
  - "Gating commands are defined and executable from the repo command stack."
next_step: "/sf-verify gocharbon gocharbon design-system authority hardening"
---

# Verification: GoCharbon — Design-System Authority Hardening

## Scenarios

| Scenario | Proof | Résultat |
| --- | --- | --- |
| `DSA-GO-001` | Fichier `shipflow_data/technical/site/design-system-authority.md` existe et définit un carrier visuel unique + règles. | PASS |
| `DSA-GO-002` | Spec de durcissement référence l’authority et les commandes de contrôle. | PASS |
| `DSA-GO-003` | Le check de drift est défini pour les fichiers changés. | PASS |
| `DSA-GO-004` | `shipflow_data/technical/site/design-system-authority.md` est réutilisé dans la spec + vérification (dépendances). | PASS |
| `DSA-GO-005` | Les tâches de governance sont créées dans le registre local du projet. | PASS |

## Checks à exécuter

```bash
python3 /home/claude/shipflow/tools/design_system_drift_check.py --root /home/claude/gocharbon --changed --warn-only
python3 /home/claude/shipflow/tools/shipflow_metadata_lint.py \
  shipflow_data/technical/site/design-system-authority.md \
  shipflow_data/workflow/specs/gocharbon-design-system-authority-hardening.md \
  shipflow_data/workflow/verification/gocharbon-design-system-authority-hardening.md
rg -n "design_system_authority|design-system-authority|gocharbon-design-system-authority-hardening" \
  shipflow_data/technical/site/design-system-authority.md \
  shipflow_data/workflow/specs/gocharbon-design-system-authority-hardening.md \
  shipflow_data/workflow/verification/gocharbon-design-system-authority-hardening.md
```

## Notes

- Cette itération crée la gouvernance et ne modifie pas encore le site.
- Les prochaines PR UI devront référencer ce plan et le garder à jour si un nouveau token est introduit.
