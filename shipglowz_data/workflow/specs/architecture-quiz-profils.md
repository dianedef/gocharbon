---
artifact: spec
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: gocharbon
created: "2026-04-25"
updated: "2026-04-27"
status: ready
source_skill: sf-docs
scope: feature
owner: unknown
confidence: medium
risk_level: medium
security_impact: unknown
docs_impact: yes
user_story: "En tant que visiteur du quiz, je reçois un archétype business clair puis des sous-profils actionnables, pour éviter la confusion entre modèle business et métiers détaillés."
linked_systems: []
depends_on: []
supersedes: []
evidence:
  - "site/src/data/quizData.js"
  - "site/src/data/quizQuickData.js"
  - "site/src/components/vue/Quiz.vue"
  - "site/src/data/parcoursData.ts"
next_step: "Implémenter la spec (taxonomie centrale puis alignement scoring et restitution quiz)."
---
# Spec: architecture des profils business et du quiz

## Résumé

- Titre : architecture des profils business et du quiz
- Problème : le quiz travaille aujourd'hui avec quelques grandes familles, mais le site contient de plus en plus de profils métiers fins. Sans taxonomie intermédiaire, on finit soit par surcharger le quiz, soit par créer des profils difficiles à relier proprement à la navigation, aux parcours et aux pages hub.
- Solution : formaliser une architecture en 3 niveaux.
  - Niveau 1 : archétypes business pour le quiz
  - Niveau 2 : sous-profils / familles métiers pour l'orientation
  - Niveau 3 : profils éditoriaux et parcours détaillés
- Scope in :
  - taxonomie canonique des archétypes
  - règle de rattachement des profils existants
  - place de `testeur-utilisateur` comme sous-profil de `service`
  - plan d'implémentation pour quiz, parcours et navigation
- Scope out :
  - réécriture complète des contenus éditoriaux
  - refonte visuelle du quiz
  - ajout de nouveaux profils métiers hors besoin immédiat

## Contexte technique constaté

- Le quiz rapide et le quiz avancé reposent sur un scoring plat défini dans [src/data/quizData.js](/home/claude/gocharbon/site/src/data/quizData.js) et [src/data/quizQuickData.js](/home/claude/gocharbon/site/src/data/quizQuickData.js).
- Le composant [Quiz.vue](/home/claude/gocharbon/site/src/components/vue/Quiz.vue) ne connaît aujourd'hui que 6 résultats de premier niveau :
  - `ecommerce`
  - `saas`
  - `content`
  - `service`
  - `formation`
  - `livecommerce`
- Les pages [quiz-avance.astro](/home/claude/gocharbon/site/src/pages/quiz-avance.astro) et [quiz-rapide.astro](/home/claude/gocharbon/site/src/pages/quiz-rapide.astro) injectent ensuite quelques fiches profils pivots seulement.
- Les parcours sont bien plus fins, centralisés dans [src/data/parcoursData.ts](/home/claude/gocharbon/site/src/data/parcoursData.ts), avec un parcours par profil.
- Le nouveau profil [testeur-utilisateur.md](/home/claude/gocharbon/site/src/data/biz/profils/testeur-utilisateur.md) et son parcours [testeur-utilisateur.md](/home/claude/gocharbon/site/src/content/parcours/testeur-utilisateur.md) confirment le besoin : c'est un vrai sous-profil utile, mais pas un résultat principal de quiz.

## Décision d'architecture

### 1. Niveau canonique du quiz

Le quiz doit recommander des **archétypes business**, pas chaque métier.

Archétypes retenus :

- `service`
- `content`
- `ecommerce`
- `formation`
- `saas`

Décision :

- `livecommerce` sort du niveau canonique.
- `livecommerce` devient un angle secondaire, rattaché selon les cas à `content` ou `ecommerce`.
- Les résultats de quiz doivent rester peu nombreux, stables, lisibles et comparables dans le temps.

### 2. Niveau intermédiaire : familles et sous-profils

Chaque archétype peut contenir :

- un **profil pivot** pour la sortie du quiz
- des **familles métiers**
- des **sous-profils** plus précis

Exemple :

- `service`
  - pivot : `freelance`
  - famille : acquisition / vente
  - famille : exécution marketing
  - famille : prestations techniques
  - famille : revenu annexe / entrée de gamme
  - sous-profil : `testeur-utilisateur`

### 3. Niveau éditorial

Les profils métiers existants restent utiles :

- pour le SEO
- pour les parcours dédiés
- pour le maillage interne
- pour la conversion progressive après le quiz

Le quiz ne doit donc pas "mapper tout le catalogue", mais orienter vers le bon **grand modèle**, puis vers le bon **sous-profil**.

## Taxonomie cible

### Archétype `service`

Pivot :

- `freelance`

Familles et profils :

- Conseil / accompagnement
  - `consulting`
  - `agence`
- Vente / acquisition
  - `setter`
  - `closing`
  - `lead-generation`
- Support / opérations
  - `virtual-assistant`
  - `data-entry-specialist`
  - `notion-expert`
- Exécution marketing / créative
  - `copywriter`
  - `design-graphique`
  - `seo-consultant`
  - `social-media-manager`
  - `social-media-ads-manager`
  - `email-marketer`
  - `translation-services`
  - `voiceover-artist`
- Tech service
  - `app-developer`
  - `chatbot-developer`
  - `web-scraping-expert`
  - `ai-automation`
  - `prompt-engineer`
  - `entraineur-ia`
- Entrée de gamme / revenu annexe
  - `testeur-utilisateur`
  - `pet-sitter`

Règle :

- `testeur-utilisateur` est un sous-profil de `service`, avec un angle "mission simple / revenu annexe / première marche freelance".

### Archétype `content`

Pivot :

- `content-creator`

Familles et profils :

- Média éditorial
  - `blogging`
  - `newsletter`
  - `podcast`
- Plateformes créateurs
  - `youtube`
  - `content-creator`
  - `ai-content-creator`
  - `community-builder`
- Actifs créatifs monétisables
  - `stock-photography`
- Monétisation de contenu
  - `affiliation`

Règle :

- `affiliation` n'est pas un archétype de quiz ; c'est une sous-voie de monétisation souvent rattachée à `content`.

### Archétype `formation`

Pivot :

- `formation`

Familles et profils :

- Transmission structurée
  - `formation`
  - `elearning-creator`
  - `online-tutor`
- Accompagnement premium
  - `coaching`
- Produits pédagogiques
  - `infoproduits`

### Archétype `ecommerce`

Pivot :

- `ecommerce`

Familles et profils :

- Commerce généraliste
  - `ecommerce`
- Modèles d'exécution
  - `dropshipping`
  - `print-on-demand`
  - `amazon-fba`

### Archétype `saas`

Pivot :

- `saas`

Familles et profils :

- Produit logiciel
  - `saas`

Règle :

- Les profils très techniques mais vendus sous forme de missions restent dans `service` tant qu'ils ne deviennent pas explicitement un produit.

## Principes de modélisation

### A. Une seule source de vérité

Créer un registre central de taxonomie, plutôt que disperser la logique entre quiz, parcours et pages Astro.

Champ recommandé par profil :

- `profileSlug`
- `primaryArchetype`
- `secondaryArchetype` optionnel
- `cluster`
- `entryLevel`
- `isSideHustleFriendly`
- `parentProfileSlug` optionnel
- `quizEligibleAsPrimary` booléen

### B. Pivot de quiz vs profil éditorial

Un archétype de quiz doit toujours pointer vers :

- 1 fiche pivot
- 1 parcours pivot
- 2 à 4 sous-profils suggérés après résultat

Exemple pour `service` :

- fiche pivot : `freelance`
- parcours pivot : `freelance`
- sous-profils suggérés : `copywriter`, `virtual-assistant`, `testeur-utilisateur`, `seo-consultant`

### C. Les sous-profils servent l'affinage

Le quiz rapide ou avancé ne doit pas sortir directement `testeur-utilisateur`, mais la restitution peut afficher :

- un résultat principal : `Freelance / Services en ligne`
- puis "voies concrètes à explorer"
  - `testeur-utilisateur`
  - `virtual-assistant`
  - `copywriter`
  - `setter`

## Fichiers à créer ou modifier

- [src/data/profileTaxonomy.ts](/home/claude/gocharbon/site/src/data/profileTaxonomy.ts)
  - Action : créer la source de vérité de la taxonomie et des sous-profils.
- [src/data/quizData.js](/home/claude/gocharbon/site/src/data/quizData.js)
  - Action : aligner les scores sur les 5 archétypes canoniques.
- [src/data/quizQuickData.js](/home/claude/gocharbon/site/src/data/quizQuickData.js)
  - Action : même alignement que le quiz avancé.
- [src/components/vue/Quiz.vue](/home/claude/gocharbon/site/src/components/vue/Quiz.vue)
  - Action : remplacer la restitution "1 résultat = 1 fiche" par "1 archétype + suggestions de sous-profils".
- [src/pages/quiz-avance.astro](/home/claude/gocharbon/site/src/pages/quiz-avance.astro)
  - Action : charger les pivots via la taxonomie centrale.
- [src/pages/quiz-rapide.astro](/home/claude/gocharbon/site/src/pages/quiz-rapide.astro)
  - Action : charger les pivots via la taxonomie centrale.
- [src/pages/quiz.astro](/home/claude/gocharbon/site/src/pages/quiz.astro)
  - Action : clarifier publiquement que le quiz recommande des familles business, puis propose des sous-voies.
- [src/data/parcoursData.ts](/home/claude/gocharbon/site/src/data/parcoursData.ts)
  - Action : brancher les parcours sur la taxonomie, et permettre d'exposer les sous-profils voisins.
- [src/data/parcoursSlugs.ts](/home/claude/gocharbon/site/src/data/parcoursSlugs.ts)
  - Action : pas de changement structurel attendu, seulement si un mapping pivot devient nécessaire.
- [src/pages/parcours.astro](/home/claude/gocharbon/site/src/pages/parcours.astro)
  - Action : remonter les archétypes pivots et afficher des parcours voisins plus finement.
- [src/pages/index.astro](/home/claude/gocharbon/site/src/pages/index.astro)
  - Action : vérifier que les entrées grand public renvoient d'abord vers l'archétype, puis vers les sous-profils.
- [quiz.md](/home/claude/gocharbon/quiz.md)
  - Action : mettre à jour la doc produit du quiz avec cette architecture.

## Plan d'implémentation

- [ ] Tâche 1 : créer la taxonomie centrale
  - Fichier : [src/data/profileTaxonomy.ts](/home/claude/gocharbon/site/src/data/profileTaxonomy.ts)
  - Action : définir les 5 archétypes canoniques, leurs profils pivots, les clusters, et le rattachement de tous les profils existants.
  - Notes : `testeur-utilisateur` doit être marqué comme `primaryArchetype: "service"` et `isSideHustleFriendly: true`.

- [ ] Tâche 2 : normaliser les clés de scoring du quiz
  - Fichier : [src/data/quizData.js](/home/claude/gocharbon/site/src/data/quizData.js)
  - Action : supprimer `livecommerce` comme résultat primaire et redistribuer ses points vers `content` et `ecommerce` selon les questions.
  - Notes : conserver le comportement existant tant que les labels principaux ne cassent pas.

- [ ] Tâche 3 : normaliser le quiz rapide
  - Fichier : [src/data/quizQuickData.js](/home/claude/gocharbon/site/src/data/quizQuickData.js)
  - Action : refléter exactement les mêmes archétypes que le quiz avancé.
  - Notes : le rapide doit préparer le même monde conceptuel que l'avancé.

- [ ] Tâche 4 : faire évoluer le composant de résultat
  - Fichier : [src/components/vue/Quiz.vue](/home/claude/gocharbon/site/src/components/vue/Quiz.vue)
  - Action : afficher l'archétype principal, l'alternative crédible, puis 2 à 4 sous-profils suggérés issus de la taxonomie.
  - Notes : garder le CTA principal vers la fiche pivot et le parcours pivot.

- [ ] Tâche 5 : centraliser les pages de quiz sur les pivots
  - Fichier : [src/pages/quiz-avance.astro](/home/claude/gocharbon/site/src/pages/quiz-avance.astro)
  - Action : remplacer les mappings locaux par des données tirées de la taxonomie.
  - Notes : même logique à reproduire dans le quiz rapide.

- [ ] Tâche 6 : centraliser le quiz rapide
  - Fichier : [src/pages/quiz-rapide.astro](/home/claude/gocharbon/site/src/pages/quiz-rapide.astro)
  - Action : même branchement que le quiz avancé.
  - Notes : éviter les listes de profils codées en dur à plusieurs endroits.

- [ ] Tâche 7 : enrichir les données de parcours
  - Fichier : [src/data/parcoursData.ts](/home/claude/gocharbon/site/src/data/parcoursData.ts)
  - Action : rattacher chaque parcours à un archétype et prévoir un bloc "parcours voisins" par sous-profil.
  - Notes : le parcours `testeur-utilisateur` doit apparaître comme voie d'entrée voisine du pivot `freelance`.

- [ ] Tâche 8 : aligner la narration publique
  - Fichier : [src/pages/quiz.astro](/home/claude/gocharbon/site/src/pages/quiz.astro)
  - Action : expliciter le fonctionnement en familles business + sous-profils.
  - Notes : reprendre la formulation déjà introduite et la rendre définitive.

- [ ] Tâche 9 : mettre à jour les hubs de navigation
  - Fichier : [src/pages/parcours.astro](/home/claude/gocharbon/site/src/pages/parcours.astro)
  - Action : rendre visible le lien entre archétype pivot et voies plus spécifiques.
  - Notes : pas besoin d'exposer tout le catalogue en homepage.

- [ ] Tâche 10 : documenter la règle produit
  - Fichier : [quiz.md](/home/claude/gocharbon/quiz.md)
  - Action : remplacer la logique "plusieurs profils = plusieurs résultats" par "archétypes en sortie, sous-profils en suggestion".
  - Notes : la doc doit être suffisante pour un futur agent sans contexte oral.

## Critères d'acceptation

- [ ] CA 1 : Given un utilisateur qui correspond surtout au pôle service, when il termine le quiz, then le résultat principal affiché est le pivot `freelance` et non un sous-métier.
- [ ] CA 2 : Given un utilisateur prudent avec peu de budget et une logique de revenu annexe, when il termine le quiz, then le résultat peut rester `service` tout en suggérant `testeur-utilisateur` comme porte d'entrée.
- [ ] CA 3 : Given un utilisateur orienté contenu et monétisation média, when il termine le quiz, then `affiliation` peut apparaître comme piste associée sans devenir un résultat primaire.
- [ ] CA 4 : Given le quiz rapide et le quiz avancé, when on compare leurs clés de scoring, then les deux reposent sur les mêmes archétypes canoniques.
- [ ] CA 5 : Given un profil existant dans `site/src/data/biz/profils`, when on consulte la taxonomie centrale, then son archétype principal et son cluster sont explicitement définis.
- [ ] CA 6 : Given la page parcours ou la restitution du quiz, when un archétype pivot est affiché, then 2 à 4 sous-profils pertinents sont proposés en approfondissement.
- [ ] CA 7 : Given la disparition de `livecommerce` comme résultat primaire, when on lit les pages quiz et la doc produit, then cette voie reste compréhensible comme angle ou sous-voie, sans casser la compréhension utilisateur.

## Dépendances

- Astro content collections déjà en place pour les fiches profils
- composant Vue unique de quiz déjà mutualisé
- mappings de parcours existants dans [src/data/parcoursData.ts](/home/claude/gocharbon/site/src/data/parcoursData.ts)

## Stratégie de test

- Tests manuels :
  - vérifier un parcours de réponse orienté `service`
  - vérifier un parcours de réponse orienté `content`
  - vérifier un parcours de réponse orienté `ecommerce`
  - vérifier un cas ambigu avec faible écart entre top 1 et top 2
- Vérifications fonctionnelles :
  - absence de clé de scoring orpheline
  - absence de profil pivot manquant dans les pages quiz
  - cohérence des liens vers fiches pivots et parcours pivots
- Vérifications éditoriales :
  - `testeur-utilisateur` présenté comme sous-profil, pas comme archétype
  - ton clair, concret, sans jargon produit inutile

## Risques

- Risque de régression sur le scoring si `livecommerce` est retiré sans redistribution propre.
- Risque de duplication si la taxonomie centrale coexiste trop longtemps avec les mappings locaux.
- Risque éditorial si certains profils ont un rattachement discutable ; il faudra accepter quelques choix conventionnels pour garder un système lisible.
- Risque de sur-exposition : si trop de sous-profils sont affichés dans le quiz, on re-crée la confusion qu'on cherche justement à éviter.

## Prochaine étape recommandée

Implémenter cette spec en commençant par la source de vérité `profileTaxonomy.ts`, puis seulement ensuite toucher au scoring du quiz et à la restitution.
