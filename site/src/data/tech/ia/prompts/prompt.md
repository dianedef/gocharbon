---
section: blog
title: 'Prompt Engineering : Guide Complet'
author: Diane
tags:
- Tech
description: Comment communiquer efficacement avec l'IA pour obtenir de meilleurs
  résultats
pubDate: '2026-01-17'
imgUrl: ../../../../assets/astro.jpeg
---

# Prompt Engineering : Guide Complet

Tu utilises ChatGPT, Claude ou Gemini mais tu n'obtiens pas les résultats que tu veux ? Le prompt engineering, c'est l'art de formuler tes demandes pour que l'IA comprenne ce que tu veux.

## C'est quoi un prompt ?

Un prompt = ce que tu écris à l'IA pour lui demander quelque chose.

**Problème :** La plupart des gens écrivent n'importe comment et se plaignent que "l'IA est stupide".

**Réalité :** L'IA n'est pas stupide. C'est juste que tu ne lui as pas dit clairement ce que tu veux.

## Les 3 règles d'or

### 1. Sois précis

**Mauvais :** "Écris un article"

**Bon :** "Écris un article de 1000 mots sur les avantages du SEO pour les startups, avec un ton conversationnel 'tu', en français"

**Pourquoi ?** Plus tu es précis, plus l'IA sait exactement quoi faire.

### 2. Donne du contexte

**Mauvais :** "Analyse ce texte"

**Bon :** "Analyse ce texte pour détecter les faiblesses de SEO. Le texte est pour une page de vente B2B SaaS. Le public cible sont les CTOs de startups françaises."

**Pourquoi ?** L'IA a besoin de contexte pour comprendre le BUT de ta demande.

### 3. Formatte la sortie

**Mauvais :** "Donne-moi des idées de marketing"

**Bon :** "Donne-moi 10 idées de marketing pour une SaaS B2B. Format : tableau avec 3 colonnes (Idée, Coût, Difficulté)."

**Pourquoi ?** Si tu ne dis pas le format, l'IA va deviner et souvent se tromper.

## Les 5 techniques avancées

### 1. Chain-of-Thought (CoT)

Demande à l'IA d'expliquer son raisonnement étape par étape.

**Exemple :**

```
Résolvons ce problème étape par étape :
1. Première étape...
2. Deuxième étape...
3. Conclusion...
```

**Quand l'utiliser :** Problèmes complexes, analyses, raisonnements.

### 2. Role Prompting

Dis à l'IA quel rôle elle doit jouer.

**Exemple :**

```
Tu es un expert SEO avec 10 ans d'expérience. Ta spécialité est le référencement local pour les PME françaises. Ta tâche est d'analyser ce site et de donner des recommandations concrètes.
```

**Quand l'utiliser :** Quand tu veux une expertise spécifique, pas une réponse générique.

### 3. Few-Shot Learning

Donne des exemples avant de demander la réponse.

**Exemple :**

```
Exemple #1
Input : "J'adore cette vidéo !"
Sentiment : positif

Exemple #2
Input : "C'était nul 😠"
Sentiment : négatif

Ton tour :
Input : "Le produit est moyen"
Sentiment : ?
```

**Quand l'utiliser :** Classification, formatage spécifique, tâches répétitives.

### 4. Constraintes explicites

Dis à l'IA ce qu'elle NE doit PAS faire.

**Exemple :**

```
Écris un article sur le SEO. Contraintes :
- Ne fais pas de promesses irréalistes
- N'utilise pas de jargon technique sans expliquer
- Maximum 1500 mots
- Pas de langage "marketing fluff"
```

### 5. Iteration

La première réponse n'est pas parfaite. Demande des améliorations.

**Exemple :**

```
C'est bien, mais :
- Rends-le plus concis
- Ajoute des exemples concrets
- Utilise un ton plus direct
```

## Le format CRISPE

Un framework simple pour structurer tes prompts.

| Élément            | Description        | Exemple                                                   |
| ------------------ | ------------------ | --------------------------------------------------------- |
| **C**ontexte       | Background         | "Je suis un freelance qui lance une newsletter marketing" |
| **R**ôle           | Perspective        | "Tu es un expert en email marketing"                      |
| **I**nstructions   | Actions à faire    | "Rédige 3 emails de bienvenue"                            |
| **S**pécifications | Contraintes        | "Maximum 200 mots par email, ton conversationnel"         |
| **P**récision      | Détails importants | "Pour une audience de créateurs de contenu"               |
| **E**xemple        | Illustration       | "Voici un exemple du style : [insérer exemple]"           |

## Les 5 erreurs à éviter

### 1. Prompts trop longs

Tu écris 500 mots ? L'IA va se perdre.

**Solution :** Sois concis. Le contexte, oui. Le fluff, non.

### 2. Pas de format spécifique

Tu demandes une liste mais tu ne dis pas comment la présenter.

**Solution :** Toujours spécifier le format (tableau, liste, bullet points, etc.)

### 3. Demander "tout"

"Explique-moi tout sur le SEO" → Tu vas obtenir une réponse superficielle.

**Solution :** Sois spécifique sur un sous-aspect. "Explique-moi le link building pour un site local".

### 4. Ignorer le modèle

ChatGPT, Claude et Gemini ont des forces/faiblesses différentes.

**Modèles :**

| Modèle | Forces                         | Faiblesses           |
| ------ | ------------------------------ | -------------------- |
| GPT-4  | Raisonnement complexe, créatif | Parfois trop verbeux |
| Claude | Concis, honnête                | Moins créatif        |
| Gemini | Multimodal, rapide             | Parfois moins précis |

**Solution :** Teste différents modèles pour tes tâches.

### 5. Ne pas itérer

Tu obtiens une réponse et tu l'acceptes telle quelle.

**Solution :** Demande des améliorations. "C'est bon, mais rends-le plus concis."

## Exemples de prompts par cas d'usage

### 1. Rédaction d'article

```
Contexte : J'écris un blog sur le SaaS pour des freelances.
Rôle : Tu es un expert en business en ligne.
Instructions : Écris un article de 1200 mots sur les meilleurs outils CRM pour freelances.
Spécifications :
- Ton : Direct, conversationnel "tu", pas de bullshit
- 5 outils maximum, chacun avec prix + avantages + inconvénients
- Pas de promesses irréalistes
- Format : Introduction + 5 sections (1 outil par section) + Conclusion
Précision : Public cible = freelances qui débutent en 2026
```

### 2. Analyse SEO

```
Contexte : J'ai une page de vente pour un SaaS B2B.
Rôle : Tu es un expert SEO spécialisé en SaaS.
Instructions : Analyse cette page pour identifier les faiblesses SEO.
Spécifications :
- Format : Tableau avec 3 colonnes (Problème, Impact, Solution)
- Priorité : Les problèmes avec le plus grand impact en premier
- Solutions concrètes, pas théoriques
Précision : Page cible = CTOs de startups françaises
Contenu à analyser : [insérer le contenu]
```

### 3. Brainstorming d'idées

```
Contexte : Je cherche des idées de contenus YouTube pour une chaîne tech.
Rôle : Tu es un expert en stratégie de contenu YouTube.
Instructions : Propose 20 idées de vidéos.
Spécifications :
- Format : Tableau avec 3 colonnes (Titre, Durée estimée, Difficulté)
- Variété : Tutoriels (40%), Reviews (30%), Opinions (30%)
- Trending en 2026
- Pas de topics couverts par 1000+ autres chaînes
Précision : Niche = outils SaaS pour entrepreneurs francophones
```

### 4. Traduction

```
Contexte : Je dois traduire un article du français vers l'anglais.
Rôle : Tu es un traducteur professionnel FR-EN.
Instructions : Traduis ce texte.
Spécifications :
- Format : Garde la même structure (H1, H2, paragraphes)
- Ton : Conversationnel, pas académique
- Adapte les expressions culturelles
- Vérifie la grammaire et l'orthographe
Précision : Public cible = entrepreneurs anglophones
Contenu à traduire : [insérer le contenu]
```

### 5. Résumé

```
Contexte : J'ai un article de 3000 mots à résumer.
Rôle : Tu es un expert en synthèse d'information.
Instructions : Résume cet article en 300 mots maximum.
Spécifications :
- Format : Bullet points (max 10 points)
- Capture les points clés
- Pas d'opinion personnelle
- Style : Concis, direct
Précision : Objectif = donner une vue d'ensemble rapide
Contenu à résumer : [insérer le contenu]
```

## Gestion des hallucinations

L'IA peut inventer des faits. C'est normal.

**Comment éviter :**

1. **Demande des sources :** "Cite tes sources"

2. **Vérifie les faits :** L'IA n'est pas une source de vérité

3. **Utilise une température basse :** 0.1-0.4 = plus fiable (moins créatif)

4. **Pose des questions de vérification :** "Est-ce que tu es sûr de ce chiffre ?"

## Température et créativité

La température contrôle la créativité de l'IA.

| Température | Effet                                 | Usage                  |
| ----------- | ------------------------------------- | ---------------------- |
| 0.0 - 0.3   | Réponses conservatrices, plus fiables | Faits, données, code   |
| 0.4 - 0.7   | Équilibre créativité/fiabilité        | Articles, analyse      |
| 0.8 - 1.0   | Très créatif, moins fiable            | Brainstorming, fiction |

**Réalité :** Pour du business/facts, reste bas (0.1-0.4). Pour de la créativité, monte.

## Outils de prompt engineering

| Outil         | Usage                     | Prix           |
| ------------- | ------------------------- | -------------- |
| PromptBase    | Bibliothèque de prompts   | Gratuit/Payant |
| FlowGPT       | Partage de workflows      | Gratuit        |
| LangChain     | Chaînage de prompts       | Gratuit        |
| AutoGPT       | Automatisation de prompts | Gratuit        |
| PromptPerfect | Optimisation de prompts   | Payant         |

## Conclusion

Le prompt engineering n'est pas magique. C'est de la méthode, de la précision, et de l'itération.

**Règles d'or :**

1. Sois précis
2. Donne du contexte
3. Formatte la sortie
4. Itère
5. Teste différents modèles

**Réalité :** Un bon prompt = 10x plus efficace qu'un mauvais prompt avec un modèle "mieux".

---

Commence par structurer tes prompts avec CRISPE. Quand tu maîtrises, passe aux techniques avancées (CoT, Role Prompting). L'IA est un outil : comment tu l'utilises compte plus que l'outil lui-même.
