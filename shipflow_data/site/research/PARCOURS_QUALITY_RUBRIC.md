# Parcours Quality Rubric

## Objectif

Mesurer la qualité des contenus activement référencés par les parcours (étapes + "Liens utiles pour avancer") avec des critères simples, répétables et actionnables.

## Principes

- Technicité accessible: garder les termes utiles (SEO + éducation), mais les expliquer.
- Priorité à l'action: le lecteur doit savoir quoi faire après lecture.
- Qualité avant volume: un contenu long mais confus n'est pas "complet".

## Critères de score (0-100)

### 1) Profondeur (max 50)
- +30 si `>= 180` mots
- +20 si `>= 450` mots

### 2) Structure (max 30)
- +15 si au moins 2 sous-titres `##`
- +10 si au moins 2 sous-titres `###`
- +10 si au moins 6 puces
- +5 si au moins 2 liens

### 3) Actionnabilité (max 10)
- +10 si présence d'un cadre d'action explicite (`étape`, `plan`, `checklist`, `erreurs fréquentes`, `à éviter`)

### 4) Hygiène éditoriale (malus)
- -20 par artefact détecté (notes internes, TODO, blocs obsolètes)

## Seuils qualité

- `80-100` -> solide
- `60-79` -> moyen
- `<60` -> fragile

## Gate de publication (contenus référencés par parcours)

Un contenu est prêt pour les parcours si:
- score >= 80,
- aucun lien actif cassé,
- aucun artefact éditorial,
- vocabulaire compréhensible pour débutant (avec termes techniques expliqués).

## Outil d'audit

Script: `scripts/audit_parcours_content.mjs`

Commande:

```bash
node scripts/audit_parcours_content.mjs
```

Sortie JSON:
- `scripts/parcours_content_audit.json`
