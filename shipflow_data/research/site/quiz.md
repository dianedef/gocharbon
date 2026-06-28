# Quiz Business V2 - Implémentation

## Objectif
Améliorer le quiz pour produire une recommandation business plus crédible qu'un simple test de préférences.

## Ce qui a été amélioré
- Passage de `5` à `17` questions.
- Questions réparties sur 3 axes:
  - situation actuelle (compétences, budget, temps, anglais)
  - personnalité et tolérance au risque
  - objectifs business et style de revenu
- Ajout explicite de 2 questions sur:
  - l'expertise métier actuelle
  - la passion/talent monétisable
- Scoring pondéré multi-profils à chaque réponse.
- Mode hybride activé:
  - scoring conservé dans `src/data/quizData.js`
  - titres/descriptions des résultats injectés depuis `src/data/biz/profils/*`
- Taxonomie centralisée ajoutée dans `src/data/profileTaxonomy.ts` pour distinguer:
  - archétypes canoniques du quiz
  - profils pivots
  - sous-profils éditoriaux
- Résultats enrichis pour les 5 modèles:
  - `ecommerce`
  - `saas`
  - `content`
  - `service`
  - `formation`
- Copie de la page quiz mise à jour (titre + meta description + promesse utilisateur).

## Structure des données
Fichier source: `src/data/quizData.js`

- `questions[]`
  - `id`
  - `text`
  - `options[]`
    - `text`
    - `icon`
    - `points` (objet avec pondération par profil)
- `results`
  - `title`
  - `icon`
  - `description`
  - `strengths[]`

Source CMS des profils (contenu éditorial):
- `src/pages/quiz.astro` charge via `getCollection("posts")` les entrées:
  - `biz/profils/ecommerce`
  - `biz/profils/saas`
  - `biz/profils/content-creator`
  - `biz/profils/freelance`
  - `biz/profils/formation`
- Les pivots sont désormais dérivés de `src/data/profileTaxonomy.ts` plutôt que codés en dur.

Le composant `Quiz.vue` reçoit ces données et les utilise en priorité pour les titres + descriptions.
Si une fiche manque, fallback automatique sur `quizData.results`.

## Logique de scoring (actuelle)
- À chaque réponse, les points sont ajoutés aux 5 archétypes canoniques.
- À la fin, l'archétype avec le score max est retourné.
- En cas d'égalité, le premier profil trouvé avec le score max est pris.

## Roadmap d'amélioration (priorisée)

### 1) Restitution plus utile
1. Afficher `2 résultats`:
   - voie principale
   - voie alternative crédible
2. Afficher `Pourquoi ce résultat ?`:
   - 3 réponses les plus discriminantes
   - 1 phrase d'explication claire par réponse
3. Afficher un `indice de confiance`:
   - fort / moyen / exploratoire
   - basé sur l'écart entre score #1 et score #2
4. Ajouter une règle tie-break explicite:
   - si écart faible => proposer test terrain des 2 voies

### 2) Personnalisation des questions
1. Branche "débutant" vs "déjà compétent" dès les premières questions.
2. Ajouter une question structurante:
   - `cash rapide` vs `actif long terme`
3. Renforcer les contraintes réelles:
   - stabilité de revenu
   - risque accepté
   - charge mentale
   - disponibilité hebdomadaire

### 3) Sortie orientée action
1. Donner une action `dans les 24h`.
2. Donner un plan d'action `30 jours`.
3. Donner un "piège principal à éviter" selon profil.
4. Proposer un mode `test terrain 7 jours`:
   - 1 mini-expérience pour la voie #1
   - 1 mini-expérience pour la voie #2

### 4) Intégration au site et conversion
1. Relier chaque résultat à:
   - 1 guide clé
   - 1 outil
   - 1 étude de cas
2. Ajouter un mini simulateur de revenus (ordre de grandeur):
   - ex: freelance = TJM × jours facturés
3. Capturer l'email après valeur délivrée:
   - envoi d'un plan personnalisé PDF
4. Enregistrer les résultats pour analytics:
   - profil recommandé
   - taux de clic vers fiches
   - conversion par profil

## Stratégie 2 Quiz (recommandée)

Ton idée est très bonne: proposer deux formats améliore l'expérience et la fiabilité.

### Quiz rapide (2 minutes)
- 6 à 8 questions
- objectif: donner une direction immédiate
- sortie: top 2 profils + actions 24h
- indice de confiance: limité (faible à moyen)

### Quiz avancé (15 minutes)
- 25 à 35 questions avec branchement conditionnel
- objectif: recommandation plus précise et plus personnalisée
- sortie: top 2 + pourquoi + plan 30 jours + ressources ciblées
- indice de confiance: plus élevé (moyen à fort)

### Règle produit
- Toujours proposer le quiz rapide en entrée.
- À la fin, proposer:
  - "Passer au diagnostic avancé 15 min pour augmenter la précision".
- Conserver les réponses du quiz rapide pour pré-remplir l'avancé.

### Impact attendu
- meilleure activation (barrière d'entrée faible)
- meilleure qualité de recommandation pour les utilisateurs motivés
- meilleur taux de conversion car la valeur perçue est progressive

## Parcours d'apprentissage (implémenté)

- Tous les profils `src/data/biz/profils/*` ont maintenant un parcours associé.
- Source centralisée: `src/data/parcoursData.ts` (42 parcours).
- Chaque parcours contient:
  - un module fondations communes
  - un module spécialisation métier
  - un module exécution 30 jours
- Nouvelles routes:
  - `/parcours` (liste)
  - `/parcours/[id]` (détail)
- Le quiz rapide/avancé pointe maintenant vers `Commencer le Parcours` en résultat.
