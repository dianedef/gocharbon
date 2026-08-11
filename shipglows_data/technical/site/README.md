---
artifact: technical_guidelines
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: gocharbon
created: "2026-04-25"
updated: "2026-04-27"
status: reviewed
source_skill: sf-docs
scope: guidelines
owner: Diane
confidence: medium
risk_level: medium
security_impact: none
docs_impact: yes
linked_systems: []
depends_on: []
supersedes: []
evidence: []
next_review: "2026-07-27"
next_step: /sf-docs audit shipglows_data/technical/site/README.md
---
# TECHNICAL GUIDELINES — Charte éditoriale & Règles opérationnelles

Ce document définit les règles éditoriales, le ton, le formatage et les bonnes pratiques pour tout contenu publié sur GoCharbon. C'est la référence pour quiconque rédige, édite ou contribue au site.

---

## Table des Matières

1. [Langue & Ton](#langue--ton)
2. [Structure des Articles](#structure-des-articles)
3. [Storytelling](#storytelling)
4. [Sources & Données](#sources--données)
5. [Outils & Recommandations](#outils--recommandations)
6. [Formatage](#formatage)
7. [SEO & Frontmatter](#seo--frontmatter)
8. [Règles Absolues](#règles-absolues)

---

## Langue & Ton

### Mémoire fondatrice à conserver

GoCharbon doit toujours être écrit avec cette réalité en tête :

- Le projet est porté par **Diane**
- Diane est **française**, **36 ans**, **femme**, et aime construire des choses utiles
- Elle crée des produits, des contenus et des systèmes pour aider des gens et des entreprises a avancer
- Son moteur est l'**impact utile**, pas le personal branding creux
- Sa conviction de fond : si on met notre énergie a construire les meilleures choses possibles, on finit avec un monde un peu meilleur

Conséquence directe pour la rédaction :

- on veut une voix **humaine, vive, maligne, parfois drôle, jamais robotique**
- on doit sentir une fondatrice réelle derrière les textes
- on évite les formules génériques qui sentent l'IA, le corporate ou le copywriting interchangeable
- sur les pages "a propos", "bio", "team", "manifeste", on présente GoCharbon comme un **projet indépendant porté d'abord par Diane**

Fichiers de référence :

- [`site/src/data/_founder.md`](/home/claude/gocharbon/site/src/data/_founder.md) pour les textes de présentation fondatrice et d'identité de marque
- [`site/src/data/_vision.md`](/home/claude/gocharbon/site/src/data/_vision.md) pour les textes de vision entrepreneuriale et d'accompagnement business

### Langue

**Français**, toujours. Tout le contenu est rédigé en français. Les termes techniques anglais (SEO, SaaS, CRM, etc.) sont conservés quand ils sont standards dans l'industrie, mais ils sont **expliqués immédiatement** en langage simple à leur première apparition.

### Tutoiement

**Systématique**, sans exception. On tutoie partout : articles, titres, CTA, descriptions, newsletter, réseaux sociaux. Pas de vouvoiement, pas de "on" impersonnel quand on s'adresse au lecteur.

### Ton

Le ton GoCharbon est **cash, direct et anti-bullshit**. On parle comme un pote compétent qui dit les vraies affaires.

**Ce qu'on est :**
- **Cash** : on dit ce qui marche et ce qui est nul, sans détour
- **Direct** : pas de phrases à rallonge, pas de périphrases corporate
- **Drôle** : humour léger, auto-dérision, références du quotidien
- **Honnête** : on avoue nos erreurs, nos limites, nos affiliations
- **Accessible** : "explique comme si le lecteur avait 12 ans, sans le prendre de haut"
- **Motivant** : on encourage, on montre que c'est possible, on donne des preuves

**Ce qu'on n'est pas :**
- **Condescendant** : jamais de "c'est simple" ou "tu aurais dû savoir"
- **Corporate** : pas de "nous avons le plaisir de...", "n'hésitez pas à...", "dans le cadre de..."
- **Guru** : pas de promesses irréalistes ("10K/mois en automatique"), pas de FOMO fabriqué
- **Dogmatique** : on préfère le français, mais si l'outil US est 10x meilleur, on le dit
- **Moralisateur** : on informe et on laisse le lecteur décider

### Exemples concrets

**Mauvais :**
> "Optimisez votre stratégie d'acquisition grâce à notre méthodologie éprouvée."

**Bon :**
> "Tu veux plus de clients ? Voilà exactement comment faire, étape par étape. Pas de blabla."

---

**Mauvais :**
> "Le SEO est une stratégie d'acquisition importante pour votre business."

**Bon :**
> "Le SEO, c'est ton meilleur commercial. Il bosse pour toi 24h/24 sans que tu le paies. Le problème ? Tout le monde te raconte n'importe quoi dessus."

---

## Structure des Articles

### Format des Titres

Les titres suivent le format signature de GoCharbon :

> **"TERME TECHNIQUE : TERME MÉTAPHORIQUE"**

Exemples :
- "SEO : LA BOUSSOLE DU WEB"
- "EMAILING : TON ARME SECRÈTE POUR FIDÉLISER"
- "CRM : LE CARNET D'ADRESSES SOUS STÉROÏDES"

Ce format remplit deux fonctions : le terme technique éduque, la métaphore accroche.

### Structure type

Chaque article suit le schéma **Problème -> Solution -> Action concrète** :

1. **Accroche** — Pain point relatable, le lecteur se reconnaît
2. **Amplification** — On creuse le problème, on montre qu'on comprend
3. **Promesse** — On annonce ce qu'il va apprendre/obtenir
4. **Contenu** — La substance, structurée en sections claires
5. **Action concrète** — Ce qu'il doit faire maintenant, pas demain

**Exemple d'introduction :**
> Tu veux créer ta boutique en ligne, mais tu sais pas par où commencer. Shopify ? WooCommerce ? T'as lu 10 articles qui disent des trucs différents. Résultat ? Tu scroll depuis 3 semaines sans avancer.
>
> Je comprends. J'ai testé 8 plateformes différentes avant de trouver celle qui marche. Je vais t'expliquer exactement quelle solution choisir selon ton budget, ton niveau technique et ton type de produits.

---

## Storytelling

### Techniques narratives

| Technique | Description | Quand l'utiliser |
|-----------|-------------|-----------------|
| **Avant/Après** | Montrer la transformation possible | Témoignages, cas d'usage, comparatifs |
| **Le voyage du héros** | Le lecteur est le héros, on est le guide | Articles de fond, parcours |
| **La révélation** | "Tu pensais que X, en réalité c'est Y" | Mythes vs réalité, analyses |
| **L'urgence douce** | "Chaque jour sans action est un jour de plus dans le mauvais sens" | CTA, conclusions |

### Formules d'engagement

**Questions rhétoriques :**
- "Tu vois où je veux en venir ?"
- "Devine la suite ?"
- "Le problème ?"

**Interpellations directes :**
- "Écoute..."
- "Voilà le truc..."
- "Soyons honnêtes..."
- "Entre nous..."

**Transitions :**
- "Maintenant, voilà le problème."
- "C'est là que ça devient intéressant."
- "Attends, c'est pas fini."
- "La vraie question, c'est..."

---

## Sources & Données

### Règle fondamentale

**Toujours citer les sources.** Aucun chiffre sans source vérifiable. Aucune affirmation péremptoire sans donnée derrière.

### Comment citer

- Intégrer les liens **naturellement dans le texte**, pas en liste de notes de bas de page
- Mentionner la source dans le flux de lecture : "Selon [étude/organisme], ..."
- Donner le contexte : pourquoi cette donnée compte pour le lecteur
- Préférer les données récentes (< 3 ans quand possible)

### Sources fiables

- Études publiées dans des revues peer-reviewed
- Données d'organismes reconnus (INSEE, BPI, DINUM, Commission Européenne)
- Rapports de marché vérifiables (Statista, Gartner, mais citer l'année)
- Retours d'expérience personnels documentés (screenshots, chiffres réels)

### Sources interdites

- "J'ai lu quelque part que..."
- Statistiques sans source
- Blogs non sourcés présentés comme des vérités
- Études sponsorisées par l'outil qu'on recommande (sans le signaler)

---

## Outils & Recommandations

### Privilégier les alternatives françaises/européennes

C'est un pilier de GoCharbon. Quand une alternative française ou européenne existe et fait le job, elle est présentée **en premier**.

**Ordre de priorité :**
1. Outil **français natif** — toujours en premier, mis en avant
2. Outil **européen** avec version française de qualité — présenté comme alternative solide
3. Outil **étranger** avec excellente version française — inclus, mais son origine est précisée
4. Outil **étranger sans alternative FR** — on le recommande quand même (le lecteur passe avant l'idéologie), en expliquant pourquoi

### Qualification des outils

Suivre la méthode de qualification locale définie dans le projet :
- **qualificationLocale** — Siège, hébergement, équipe en France ?
- **ancrageEconomique** — Impact sur l'économie locale ?
- **niveauResponsabilite** — RGPD, données, transparence ?

Ne jamais déduire "français" du branding seul. En cas de doute, utiliser `indetermine` ou `partiel`.

### Transparence sur l'affiliation

Chaque lien affilié est signalé. Format :
> "Disclaimer : ce lien est un lien affilié. Si tu t'inscris via ce lien, je touche une petite commission. Ça change rien pour toi, mais ça m'aide à faire tourner le site. Je recommande cet outil parce que je l'utilise vraiment."

---

## Formatage

### Texte

- **Phrases courtes.** Paragraphes courts.
- Alterner phrases courtes et moyennes pour le rythme
- **Gras** pour les idées-clés et les termes importants
- Listes à puces pour les actions concrètes et les comparatifs
- Jamais plus de 2-3 lignes par phrase

### Emojis

- **Titres et listes** : oui, avec parcimonie
- **Corps du texte** : non, jamais
- Les emojis servent de repères visuels, pas de décoration

### Formules interdites

Ne jamais utiliser :
- "N'hésitez pas à..."
- "Nous avons le plaisir de..."
- "Dans le cadre de..."
- "Il convient de noter que..."
- "Suite à votre demande..."
- "En effet..."
- "Par ailleurs..."
- "De plus..." (remplacer par "En plus")

### Appel à l'action

Toujours terminer par un **pas concret**. Pas "en savoir plus" mais :
- "Essaie ce soir"
- "Commence par ça"
- "Fais le quiz"
- "Teste pendant 7 jours"
- "Lance-toi, le pire c'est de ne rien faire"

---

## SEO & Frontmatter

### Frontmatter obligatoire

Chaque article doit avoir un frontmatter complet :

```yaml
title: "TERME TECHNIQUE : TERME MÉTAPHORIQUE"
author: "GoCharbon"
tags: ["tag1", "tag2"]    # Depuis tagHierarchy.ts uniquement
description: "Description SEO, 150-160 caractères, avec le mot-clé principal"
pubDate: "YYYY-MM-DD"
imgUrl: ./image.png
draft: false
```

### Tags

- Utiliser uniquement les tags définis dans `site/src/components/tagHierarchy.ts`
- Hiérarchie à 3 niveaux : catégorie racine -> sous-catégorie -> tag spécifique
- Catégories racines : business, marketing, tech, contenu, seo, productivite, tutoriels, outils
- Choisir les tags les plus spécifiques possibles (pas juste la catégorie racine)

### Bonnes pratiques SEO

- H1 unique et clair (le titre de l'article)
- H2/H3 structurés logiquement
- Meta description (150-160 caractères) avec le mot-clé principal
- Alt text descriptif sur toutes les images
- Liens internes pertinents vers d'autres articles GoCharbon
- Liens externes vers des sources crédibles

---

## Règles Absolues

### Ne jamais...

- **Supprimer du contenu existant** — on améliore, on ne supprime pas
- **Faire de promesses irréalistes** — pas de "10K/mois", pas de "sans effort"
- **Recommander sans avoir testé** — chaque outil recommandé a été vérifié
- **Inventer des statistiques** — un chiffre sans source n'existe pas
- **Cacher une affiliation** — transparence totale, toujours
- **Mépriser le lecteur** — même s'il débute, il mérite du respect
- **Recommander un outil français médiocre par patriotisme** — le lecteur passe avant l'idéologie
- **Ignorer l'alternative française** — si elle existe et fait le job, elle passe en premier

### Toujours...

- **Tutoyer** — pas d'exception
- **Citer les sources** — données, études, retours d'expérience documentés
- **Finir par une action** — le lecteur doit savoir quoi faire en quittant l'article
- **Signaler les limites** — d'un outil, d'une stratégie, d'un conseil
- **Être honnête** — sur les échecs, les coûts, les délais réalistes
- **Vérifier les liens** — aucun lien cassé dans un article publié

---

*Dernière mise à jour : mars 2026*
*Ce document est la boussole éditoriale de GoCharbon. Le ton peut évoluer, les règles de fond sont non négociables : accessible, honnête, actionnable, français d'abord.*
