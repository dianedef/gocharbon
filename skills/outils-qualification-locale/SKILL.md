---
name: outils-qualification-locale
description: Qualifier les fiches outils GoCharbon sur les plans local, économique et responsable, puis mettre à jour leur frontmatter de façon cohérente. Use when Codex needs to traiter un lot d'outils, appliquer la méthodologie GoCharbon, compléter les champs `qualificationLocale`, `ancrageEconomique`, `niveauResponsabilite`, `paysSiege`, `paysFiscal`, `paysFondateurs`, `hebergementDonnees`, `societeMere`, `sourcesVerification`, ou produire un audit/priorisation des fiches outils à qualifier. This skill also governs the visible “badge d’engagement français”, which is computed from these metadata and must remain conservative.
---

# Outils Qualification Locale

Qualifier les fiches outils avec prudence. Ne jamais déduire “français” à partir d’un ton marketing, d’un `.fr`, d’une interface en français ou d’un tag existant.
Le badge public d’engagement français dépend directement de ces champs. Une qualification trop optimiste produit donc un badge trompeur.

## Quick Start

1. Lire la doctrine publique dans [`site/src/pages/methodologie.astro`](../../src/pages/methodologie.astro).
2. Lire le template outil dans [`site/src/data/outils/_template.md`](../../src/data/outils/_template.md).
3. Si le besoin porte sur un lot, générer une file d’attente avec `site/scripts/build_qualification_batch.py`.
4. Qualifier seulement quand les preuves sont suffisantes. Sinon écrire `indetermine` ou laisser vide avec une note claire.
5. Après modification d’un lot, lancer [`site/scripts/audit_outils_qualification.py`](../../scripts/audit_outils_qualification.py).
6. Exécuter [`site/scripts/qa_outils_qualification.py`](../../scripts/qa_outils_qualification.py) avant validation du lot.
7. Vérifier que le badge public implicite reste cohérent avec les preuves documentées.

## Workflow

### 1. Construire le lot

Pour préparer un lot de travail, utiliser :

```bash
python3 scripts/prioritize_outils_qualification.py --limit 300 --format markdown
python3 skills/outils-qualification-locale/scripts/build_qualification_batch.py --status todo --priority P1 --limit 25
```

Filtres utiles :

```bash
python3 skills/outils-qualification-locale/scripts/build_qualification_batch.py --lane admin-finance --status todo --priority P1 --limit 20 --format markdown
python3 skills/outils-qualification-locale/scripts/build_qualification_batch.py --contains tech/ia --status todo --priority P2 --limit 50 --format json
```

Le workflow multi-agent detaille est documente dans [references/batch-workflow.md](references/batch-workflow.md).

### 2. Chercher les preuves

Chercher en priorité :

- site officiel : mentions légales, CGU, politique de confidentialité, page entreprise, conditions de facturation
- registre société ou fiche légale publique
- documentation infra ou sécurité pour l’hébergement des données
- page “about”, presse ou levée de fonds pour la gouvernance et la société mère

Si l’information est contradictoire :

- préférer la source légale ou réglementaire à la communication marketing
- ajouter une nuance dans `notesQualification`
- conserver `indetermine` si le doute reste réel

### 3. Remplir le frontmatter

Les champs visés sont documentés dans [references/frontmatter-fields.md](references/frontmatter-fields.md).

Règles de base :

- `qualificationLocale` décrit un rattachement éditorial global
- `ancrageEconomique` mesure si la valeur semble réellement revenir à l’écosystème local
- `niveauResponsabilite` mesure transparence, hébergement, cohérence de gouvernance et lisibilité
- `sourcesVerification` doit contenir les URLs utiles pour audit humain ultérieur
- `methodologieVersion` doit être `gocharbon-v1` tant que la méthode publique n’a pas changé
- ces champs alimentent aussi le badge visible “Engagement français”

### 4. Écrire avec retenue

Ne pas surqualifier.

Exemples :

- Si le siège est en France mais la fiscalité ou la holding sont opaques : ne pas mettre `ancrageEconomique: fort` par défaut.
- Si l’outil est opéré depuis la France mais stocke majoritairement les données hors UE : ne pas mettre `niveauResponsabilite: fort`.
- Si seule l’interface est française : ne pas mettre `qualificationLocale: france`.

### 5. Penser au badge visible

Le badge public est calculé dans `site/src/utils/tool-qualification.ts`.

Principes :

- pas de badge “fort” sans faisceau de preuves sérieux
- `indetermine` ou absence de preuve doit mener à un badge prudent ou à une évaluation en cours
- le badge est une synthèse visible, pas une vérité juridique
- l’échelle publique est entière, sur 20 points, sans demi-points

### 6. Vérifier après lot

Toujours exécuter :

```bash
python3 scripts/audit_outils_qualification.py
python3 scripts/qa_outils_qualification.py
```

Utiliser ensuite `rg` pour contrôler le lot touché :

```bash
rg -n "qualificationLocale|ancrageEconomique|niveauResponsabilite|sourcesVerification|methodologieVersion" src/data/outils/<dossier>
```

## Decision Rules

Lire [references/rubric.md](references/rubric.md) avant de qualifier un lot important.

Résumé minimal :

- `qualificationLocale: france`
  - siège et structure d’exploitation principales documentées en France
- `qualificationLocale: union-europeenne`
  - ancrage principal documenté dans l’UE mais pas en France
- `qualificationLocale: hors-union-europeenne`
  - ancrage principal documenté hors UE
- `qualificationLocale: indetermine`
  - information absente, contradictoire ou insuffisante

Pour `ancrageEconomique` et `niveauResponsabilite`, rester conservateur. `partiel` est souvent le bon choix quand une partie seulement des critères est claire.
Lire aussi la section badge dans [references/rubric.md](references/rubric.md).

## Editing Rules

- Modifier uniquement les champs de qualification utiles.
- Ne pas réécrire le corps éditorial si la tâche est la qualification.
- Ne pas inventer de sources.
- Garder `section: outils` et `type: outil`.
- Ne pas supprimer d’anciennes métadonnées non liées sans raison explicite.

## Resources

### scripts/

- `build_qualification_batch.py`
  - génère un lot de fiches outils par lane, statut et priorité
  - sorties `markdown`, `json` ou `paths`

### references/

- `batch-workflow.md`
  - roles, lanes, commands and QA rules for batch execution
- `rubric.md`
  - règles de décision et cas limites
- `frontmatter-fields.md`
  - sens précis de chaque champ et valeurs autorisées
  - inclut l’impact de ces champs sur le badge visible
