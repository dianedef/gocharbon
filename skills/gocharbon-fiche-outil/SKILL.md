---
name: gocharbon-fiche-outil
description: Analyser un outil (URL ou nom), vérifier s'il a sa place sur GoCharbon, puis créer la fiche complète avec qualification locale. Use when the user provides a URL or company name and wants to evaluate + integrate a new tool into GoCharbon. This skill handles the full pipeline: research, fit check, duplicate detection, page creation, and French patriotism qualification.
---

# GoCharbon Fiche Outil

Évaluer un outil et produire une fiche complète prête à publier, en une seule passe.

## Arguments

L'utilisateur fournit **un seul argument** :

- une URL (ex: `https://www.livepepper.fr/`)
- ou un nom d'entreprise/outil (ex: `LivePepper`)

Si c'est un nom sans URL, commencer par une recherche web pour trouver le site officiel.

## Quick Start

1. Rechercher l'outil sur internet (site officiel, mentions légales, tarifs).
2. Vérifier s'il existe déjà dans `site/src/data/outils/`.
3. Évaluer la pertinence pour GoCharbon.
4. Si pertinent : créer la fiche complète avec qualification locale.
5. Si non pertinent : expliquer pourquoi et s'arrêter.

## Workflow

### Phase 1 — Recherche

#### 1.1 Identifier l'outil

Si l'argument est une URL :
- scraper la page d'accueil (format JSON) pour extraire : description produit, audience cible, pricing, features clés, pays de l'entreprise, siège
- scraper la page tarifs si elle existe (`/tarifs/`, `/pricing/`, `/prix/`)

Si l'argument est un nom :
- recherche web pour trouver le site officiel
- puis scraper comme ci-dessus

#### 1.2 Vérifier les doublons

Chercher dans `site/src/data/outils/` :

```bash
grep -ri "nomdeloutil" src/data/outils/
```

Si l'outil existe déjà :
- informer l'utilisateur
- proposer une mise à jour plutôt qu'une création
- s'arrêter sauf instruction contraire

#### 1.3 Rechercher les preuves légales

Scraper les mentions légales de l'outil (`/mentions-legales/`, `/legal/`, `/mentions/`, `/imprint/`) pour extraire :
- raison sociale, forme juridique (SAS, SARL, etc.)
- SIREN/SIRET, RCS
- capital social
- adresse du siège
- nom du dirigeant
- hébergeur et localisation des données
- société mère éventuelle

Scraper aussi `/conditions-generales/` ou `/cgu/` si accessible, pour des indices sur l'hébergement des données et la conformité RGPD.

### Phase 2 — Évaluation de pertinence

Critères pour qu'un outil ait sa place sur GoCharbon :

#### Critères obligatoires (tous doivent être remplis)

1. **Audience compatible** — L'outil sert des entrepreneurs, freelances, TPE/PME, créateurs, ou indépendants. Pas des grands groupes exclusivement.
2. **Outil B2B ou B2B2C** — Pas un produit grand public sans angle business (ex: un jeu vidéo).
3. **Produit réel** — Pas un projet en beta fermée, un vaporware, ou un outil abandonné.

#### Critères de bonus (augmentent la pertinence)

- Entreprise française ou avec ancrage français
- Comble un manque dans la couverture existante de GoCharbon
- Modèle économique intéressant ou différenciant (ex: 0% commission)
- Verticale déjà couverte par d'autres fiches (clustering éditorial)

#### Critères de rejet

- Outil exclusivement grand public sans usage business
- Outil mort ou abandonné (site cassé, pas de mise à jour depuis 2+ ans)
- Doublon quasi-exact d'une fiche existante sans angle différenciant
- Outil illégal, frauduleux, ou contraire à l'éthique

#### Décision

Produire un verdict clair :
- **OUI** — Pertinent, on crée la fiche. Expliquer pourquoi en 2-3 lignes.
- **NON** — Pas pertinent. Expliquer pourquoi en 2-3 lignes. S'arrêter là.

Attendre la validation de l'utilisateur avant de passer à la Phase 3.

### Phase 3 — Placement éditorial

#### 3.1 Catégorie et sous-catégorie

Inspecter les dossiers existants dans `site/src/data/outils/` :

```
business/     (admin, comptabilite, crm, finance, legal, rh, autres)
communication/ (centre-contact, chatbot, telephonie, visio, email, autres)
creation/     (video, redaction, design, audio, autres)
ecommerce/    (caisse, paiement, commande-en-ligne, marketplace, autres)
formation/    (lms, micro-learning, autres)
marketing/    (seo, social-media, prospection, email, ads, autres)
productivite/ (gestion-projet, bureautique, autres)
tech/         (ia, securite, hebergement, dev, autres)
```

Choisir :
- `toolCategoryPrimary` — la catégorie principale (dossier parent)
- `toolSubcategoryPrimary` — la sous-catégorie (sous-dossier ou valeur sémantique)
- `toolFacets` — 2-4 facettes transversales (ex: `restauration`, `ia`, `click-and-collect`)

#### 3.2 Vérifier le voisinage

Lire 1-2 fiches dans le même dossier cible pour aligner :
- profondeur du contenu
- structure des sections
- ton et style

### Phase 4 — Rédaction de la fiche

#### 4.1 Structure obligatoire

Suivre le template dans [`site/src/data/outils/_template.md`](../../src/data/outils/_template.md).

Sections dans cet ordre :

1. **Frontmatter** (voir 4.2)
2. `# Nom de l'Outil`
3. `## CATÉGORIE EN MAJUSCULES : MÉTAPHORE ACCROCHEUSE`
4. `### tl;dr` — Long et détaillé. Fondateurs, date, chiffres, prix d'entrée, différenciateur.
5. `### Alternative à` — 5-8 concurrents + différenciation en 1-2 phrases.
6. `## Bénéfices` — 4-6 bénéfices format **Titre** — Explication détaillée.
7. `### Pour Qui ?` — 6-8 profils cibles spécifiques.
8. `## Fonctionnalités` — Section la plus longue. Sous-sections par thème.
9. `## Prix` — Tableau Markdown si grille claire, sinon paragraphe.
10. `## Intégrations` — Si documentées.
11. `## L'équipe et l'Histoire` — Bullet points chronologiques.
12. `## Points Forts` — 6-10 points.
13. `## Points Faibles` — 5-8 points honnêtes.

#### 4.2 Frontmatter

```yaml
---
section: outils
toolCategoryPrimary: "<categorie>"
toolSubcategoryPrimary: "<sous-categorie>"
toolFacets:
  - "<facette1>"
  - "<facette2>"
metadataEnrichedAt: "<YYYY-MM-DD>"
type: outil
qualificationLocale: "<valeur>"        # Phase 5
ancrageEconomique: "<valeur>"          # Phase 5
niveauResponsabilite: "<valeur>"       # Phase 5
paysSiege: "<pays>"                    # Phase 5
hebergementDonnees: "<valeur>"         # Phase 5
sourcesVerification:                   # Phase 5
  - "<url1>"
  - "<url2>"
notesQualification: "<texte>"          # Phase 5
methodologieVersion: "gocharbon-v1"    # Phase 5
title: "<Nom de l'Outil>"
author: Diane
tags:
  - Outils
description: "<1-2 phrases, max 160 chars. Inclure ce que fait l'outil + chiffre clé + prix d'entrée>"
pubDate: "<YYYY-MM-DD>"
imgUrl: ../../../assets/astro.jpeg
u_site: "<url officielle>"
---
```

Notes :
- `author` est toujours `Diane`
- `imgUrl` : ajuster la profondeur relative selon le dossier cible (`../../` ou `../../../`)
- `pubDate` : date du jour au format ISO

#### 4.3 Ton et style

- Tutoiement systématique
- Phrases directes, percutantes
- Chiffres > adjectifs ("7 000 clients" > "beaucoup de clients")
- Honnête sur les limites — pas de langue de bois marketing
- Longueur cible : 150-250 lignes de contenu (hors frontmatter)

### Phase 5 — Qualification locale

#### 5.1 Analyser les preuves collectées en Phase 1.3

Remplir les champs selon les règles du skill [`outils-qualification-locale`](../outils-qualification-locale/SKILL.md) :

| Champ | Règle |
|-------|-------|
| `qualificationLocale` | `france` si siège + structure d'exploitation en France. `union-europeenne` si ancrage UE hors France. `hors-union-europeenne` si hors UE. `indetermine` si doute. |
| `ancrageEconomique` | `fort` si siège, fiscalité, emplois et valeur principalement en France. `partiel` si une partie seulement est claire. `faible` si l'ancrage est essentiellement hors France. `indetermine` si info insuffisante. |
| `niveauResponsabilite` | `fort` si mentions légales complètes + hébergement documenté + RGPD clair. `partiel` si certains éléments manquent. `faible` si très opaque. `indetermine` si rien n'est documenté. |
| `paysSiege` | Chaîne libre (ex: `France`, `Belgique`). Laisser vide si inconnu. |
| `hebergementDonnees` | `france`, `union-europeenne`, `hors-union-europeenne`, `multi-region`, `inconnu`. |
| `sourcesVerification` | URLs utilisées pour justifier. Préférer sources officielles. |
| `notesQualification` | 1-3 phrases max. Documenter les nuances et contradictions. |
| `methodologieVersion` | Toujours `gocharbon-v1`. |

#### 5.2 Principes de prudence

- **Ne jamais déduire "français"** à partir d'un `.fr`, d'une interface en français, ou d'un ton marketing.
- **Ne jamais surqualifier** — `partiel` est souvent le bon choix quand une partie seulement des critères est claire.
- **Préférer `indetermine`** quand l'information est absente ou contradictoire.
- **Le badge public** "Engagement français" dépend de ces champs. Une qualification trop optimiste = un badge trompeur.

### Phase 6 — Vérification

Checklist avant de considérer la fiche terminée :

- [ ] Le fichier est au bon emplacement dans `site/src/data/outils/<categorie>/`
- [ ] Le frontmatter est complet (toutes les sections obligatoires)
- [ ] Les champs de qualification locale sont remplis avec des sources
- [ ] La description fait max 160 caractères
- [ ] `author: Diane` est présent
- [ ] `pubDate` est la date du jour
- [ ] `imgUrl` a le bon chemin relatif
- [ ] Le contenu fait 150+ lignes
- [ ] Les Points Faibles sont honnêtes (pas de fiche 100% positive)
- [ ] Pas de doublon avec une fiche existante

Ne **jamais** lancer de build (`pnpm build`) à la fin.

## Cas particuliers

### L'outil existe déjà

Si une fiche existe dans `site/src/data/outils/` :
- Informer l'utilisateur : "Cet outil a déjà une fiche : `<chemin>`"
- Proposer de mettre à jour (enrichir) plutôt que de créer un doublon
- Si mise à jour demandée : fusionner les nouvelles infos PAR-DESSUS l'existant, ne rien supprimer

### Outil non français

L'outil n'a pas besoin d'être français pour avoir sa place sur GoCharbon. Mais :
- La qualification locale doit être honnête (`hors-union-europeenne` si c'est le cas)
- L'outil doit quand même servir l'audience francophone (entrepreneurs FR)

### Informations introuvables

Si le site est inaccessible, les mentions légales manquent, ou les infos sont trop pauvres :
- Écrire la fiche avec ce qui est disponible
- Mettre `indetermine` sur les champs de qualification non vérifiables
- Documenter les manques dans `notesQualification`
- Marquer `draft: true` si la fiche est trop incomplète pour être publiée

### Plusieurs outils à traiter

Si l'utilisateur fournit une liste d'outils :
- Traiter chaque outil séquentiellement
- Produire le verdict de pertinence pour chacun avant de créer les fiches
- Ne pas mélanger les fiches

## Ressources

- Template outil : [`site/src/data/outils/_template.md`](../../src/data/outils/_template.md)
- Qualification locale : [`skills/outils-qualification-locale/SKILL.md`](../outils-qualification-locale/SKILL.md)
- Champs frontmatter : [`skills/outils-qualification-locale/references/frontmatter-fields.md`](../outils-qualification-locale/references/frontmatter-fields.md)
- Règles de qualification : [`skills/outils-qualification-locale/references/rubric.md`](../outils-qualification-locale/references/rubric.md)
- Tag hierarchy : [`site/src/components/tagHierarchy.ts`](../../src/components/tagHierarchy.ts)
- Exemples de fiches réussies :
  - `site/src/data/outils/ecommerce/innovorder.md` (outil restauration, qualification complète)
  - `site/src/data/outils/communication/diabolocom.md` (qualification locale exemplaire)
  - `site/src/data/outils/communication/aircall.md` (fiche longue et détaillée)
