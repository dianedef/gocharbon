---
section: blog
title: 'Galactica : L''Échec qui a Changé l''IA'
author: Diane
tags:
- Tech
description: Analyse de l'échec de Galactica par Meta et les leçons pour les lancements
  IA
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
---

# Galactica : Autopsie d'un Échec IA

Novembre 2022. Deux semaines avant que ChatGPT ne révolutionne le monde, Meta lance Galactica, une IA scientifique aux capacités similaires. Trois jours plus tard, le projet est enterré. Comment un tel potentiel s'est-il transformé en échec retentissant ?

## Ce qui s'est passé

### Le lancement

- **Date :** 15 novembre 2022
- **Projet :** IA scientifique entraînée sur 48M+ papiers
- **Capacités :** Génère du contenu scientifique (articles, formules, code LaTeX)
- **Objectif :** Démocratiser l'accès au savoir scientifique

### La catastrophe

- **48 heures plus tard** : Meta retire la démo publique
- **Cause :** Hallucinations massives et désinformation
- **Problème majeur :** L'IA générait des citations fausses et des affirmations incorrectes avec une confiance totale

## Les Erreurs Stratégiques

### 1. Promesses irréalistes

Meta a vendu Galactica comme une solution pour écrire du contenu scientifique. Le problème ? Les LLMs sont des machines à halluciner, pas des vérités scientifiques.

**Exemples d'hallucinations documentés :**

- Fausses équations mathématiques
- Citations d'articles inexistantes
- Affirmations médicales dangereuses
- Théories conspirationnistes présentées comme faits

### 2. Manque de garde-fous

| Galactica                                  | ChatGPT (lancé 2 semaines plus tard)        |
| ------------------------------------------ | ------------------------------------------- |
| Pas d'avertissement sur les hallucinations | "Peut générer des informations incorrectes" |
| Interface open au public                   | Limites d'utilisation et modération         |
| Aucune validation humaine requise          | Feedback utilisateur intégré                |

### 3. Réponse défensive

Quand les critiques ont fusé, Yann LeCun (Chief AI Scientist Meta) a tweeté des réponses défensives :

- "Les critiques sont exagérées"
- "C'est un outil pour les chercheurs, pas le grand public"
- "La démo était expérimentale"

Le problème ? La démo était publique et accessible à tous.

## Les Leçons Apprises

### 1. La transparence sauve les projets

**Ce que ChatGPT a fait :**

- "Je peux me tromper"
- "Vérifiez mes réponses"
- Interface avec avertissements intégrés

**Ce que Galactica n'a pas fait :**

- Confiance absolue dans les réponses
- Pas de disclaimer sur les limitations
- Interface "scientifique" = confiance implicite

### 2. Les gardes rails sont obligatoires

Les IA génératives nécessitent des filtres :

- Détection des affirmations médicales
- Vérification des citations
- Avertissements sur les domaines sensibles

### 3. L'humain dans la boucle

Galactica avait zéro intervention humaine avant publication. Le modèle ? L'utilisateur valide le contenu.

| Problème          | Solution                           |
| ----------------- | ---------------------------------- |
| IA génère du faux | Validation humaine obligatoire     |
| Confiance totale  | Avertissements sur les limitations |
| Pas de feedback   | Système de signalement intégré     |

## L'Impact sur l'Industrie

### Court terme (2022)

- Les entreprises deviennent plus prudentes
- Les démos sont plus limitées
- Les "safety teams" deviennent essentielles

### Moyen terme (2023-2024)

- **Meta change d'approche :**

  - Llama : Open source, mais avec licence restrictive
  - Llama 2 : Plus de contrôles, plus de transparence
  - Llama 3 : Modèles plus petits, plus ciblés

- **L'industrie adopte :**
  - RAG (Retrieval Augmented Generation) : L'IA cite ses sources
  - Fact-checking automatisé
  - Modèles plus spécialisés

### Long terme (2024+)

- **Standards émergents :**
  - Documentation des biais
  - Benchmarks de sécurité
  - Audits externes

## Cas d'Usage Réussi : Comment les leçons ont été appliquées

### 1. Perplexity (Recherche)

- IA + sources citées
- Vérification des faits
- "Peut me tromper, vérifiez"

### 2. ArXiv (Papiers scientifiques)

- Aucune génération de contenu
- IA pour la recherche et la classification uniquement
- Validation humaine systématique

### 3. Consensus (Médecine)

- IA + littérature médicale
- Citations obligatoires
- Disclaimer : "Pas de diagnostic médical"

## Les 5 Règles d'Or pour un Lancement IA Réussi

1. **Gérer les attentes**

   - Communiquez clairement les limites
   - Soyez honnêtes sur les capacités
   - Évitez la "magie"

2. **Intégrer des garde-fous**

   - Filtres de sécurité
   - Vérification des sources
   - Avertissements contextuels

3. **Tester avec des utilisateurs réels**

   - Beta testing fermé
   - Feedback loop
   - Ajustement basé sur les retours

4. **Avoir un plan de crise**

   - Que faire si ça déraille ?
   - Communication préparée
   - Équipe prête à intervenir

5. **La transparence sauve**
   - Documentez les biais
   - Expliquez comment le modèle fonctionne
   - Montrez les exemples de limitations

## Ce que ça veut dire pour toi

Si tu lances un projet IA :

1. **Commence petit**

   - POC avec utilisateurs limités
   - Cas d'usage bien définis
   - Métriques de succès claires

2. **Teste tes garde-fous**

   - Injection de prompt malveillants
   - Hallucinations intentionnelles
   - Contenu sensible

3. **Documente tout**

   - Biais identifiés
   - Limitations connues
   - Failles potentielles

4. **Aie un plan B**
   - Que faire si le modèle déraille ?
   - Comment rollback rapidement ?
   - Communication de crise prête ?

## En savoir plus

- [L'avenir de l'IA](/tech/ia/analyses/avenir-ia) - Tendances et perspectives
- [Histoire des LLM](/tech/ia/llm/histoire-llm) - De BERT à Claude
- [Hallucinations LLM](/tech/ia/llm/llm-hallucinations) - Comprendre et limiter les erreurs

---

Galactica n'était pas un mauvais produit technologiquement. C'était un mauvais lancement. Les leçons ? Transparence, garde-fous, humain dans la boucle. Si tu ignores ça, tu finiras comme Meta : retirer ton projet en 48h après l'avoir lancé.
