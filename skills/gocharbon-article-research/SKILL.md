---
name: gocharbon-article-research
description: Créer ou mettre à jour un article GoCharbon à partir de recherches, notes, comparatifs, ou conclusions déjà établies dans la conversation. Use when the user wants a new GoCharbon article, a rewritten angle, a comparison piece, an opinionated article, or a small editorial series added under `site/src/data/**`. This skill is repo-specific: it selects the right content folder, follows GoCharbon tone and frontmatter conventions, and never runs or proposes a build at the end.
---

# GoCharbon Article Research

Créer un article GoCharbon exploitable directement dans le repo, sans dériver vers un simple brouillon théorique.

## Quick Start

1. Lire [`site/src/data/_CONTENT_GUIDELINES.md`](../../src/data/_CONTENT_GUIDELINES.md).
2. Vérifier le schéma dans [`site/src/content.config.ts`](../../src/content.config.ts).
3. Inspecter les articles voisins dans le dossier cible sous `site/src/data/`.
4. Choisir le bon angle éditorial avant d'écrire.
5. Créer un nouveau fichier ou mettre à jour l'article demandé.
6. Ne jamais lancer de build à la fin.

## Quand utiliser ce skill

Utiliser ce skill quand le user demande de :

- transformer une recherche ou un comparatif en article GoCharbon
- créer un nouvel article dans le site
- réécrire un article avec un angle différent
- produire une mini série cohérente de plusieurs articles reliés entre eux
- intégrer dans le repo des conclusions déjà établies dans la conversation

Ne pas utiliser ce skill pour :

- qualifier des fiches outils locales
- corriger uniquement du frontmatter technique sans enjeu éditorial
- écrire un texte hors repo

## Workflow

### 1. Clarifier la cible

Déterminer d'abord :

- nouveau fichier ou article existant
- angle exact demandé par le user
- section cible probable dans `site/src/data/`
- niveau de fermeté attendu : explicatif, comparatif, ou opinion assumée

Si le user dit explicitement de ne pas toucher un article existant, respecter ça strictement.

### 2. S'appuyer sur les recherches déjà disponibles

Priorité :

- conclusions établies dans la conversation
- notes ou matériaux fournis par le user
- contenu local du repo déjà présent

Si des faits récents doivent être vérifiés, faire la recherche nécessaire. Sinon, ne pas ajouter de recherche inutile.

### 3. Trouver le bon emplacement

Toujours inspecter le repo avant d'écrire :

- `site/src/data/_CONTENT_GUIDELINES.md`
- `site/src/content.config.ts`
- le dossier thématique pertinent sous `site/src/data/`
- 1 ou 2 articles voisins pour aligner ton, frontmatter et profondeur

Favoriser la taxonomie existante plutôt qu'une nouvelle arborescence.

### 4. Écrire pour GoCharbon

Règles éditoriales :

- ton direct, concret, sans jargon inutile
- phrases courtes
- angle utile, pas neutre pour rien
- privilégier les décisions, compromis, cas d'usage
- éviter le blabla corporatif

Quand le sujet s'y prête, préférer des formulations comme :

- "le vrai sujet"
- "la version courte"
- "sans bullshit"
- "le choix le plus cohérent"

Mais garder le texte lisible et ne pas forcer la formule.

### 5. Structurer l'article

Par défaut :

- hook d'ouverture
- version courte ou verdict rapide
- sections par framework / option / scénario
- verdict final net

Si le user demande une série :

- garder chaque article autonome
- relier les papiers avec quelques liens internes en fin d'article

### 6. Frontmatter

Respecter le schéma Astro :

- `section`
- `title`
- `author`
- `tags`
- `description`
- `pubDate`
- `imgUrl`

Rappels utiles :

- `author: Diane`
- `pubDate` au format ISO déjà utilisé dans le repo
- `imgUrl` cohérent avec le dossier cible
- quoter les champs YAML contenant `:`

### 7. Édition

- créer ou modifier uniquement les fichiers utiles
- utiliser `apply_patch`
- préserver les articles existants si le user l'a demandé
- ajouter des liens internes si cela améliore la navigation éditoriale

### 8. Validation

Validation minimale :

- relire le fichier créé
- vérifier frontmatter et slug
- vérifier que les liens internes écrits ont l'air cohérents

Règle ferme :

- ne jamais lancer `npm run build` par défaut à la fin
- ne jamais proposer de build dans la clôture de tâche
- ne jamais dire "je vais builder pour vérifier"

## Heuristiques utiles

- `Expo` = mobile d'abord
- `Tauri` = web + desktop léger, mobile possible
- `Electron` = desktop web pragmatique
- `Capacitor` = app web poussée sur mobile
- `Flutter` = vraie ambition multiplateforme

Ces raccourcis sont utiles pour les articles comparatifs, mais doivent toujours être adaptés à l'angle demandé.

## Sortie attendue

Le résultat doit être :

- un vrai fichier article dans le repo
- placé au bon endroit
- avec un angle net
- sans build final
