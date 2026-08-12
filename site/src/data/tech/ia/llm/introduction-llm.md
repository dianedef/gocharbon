---
section: blog
title: 'LLM : Comprendre les Modèles de Langage'
author: Diane
tags:
- Tech
description: Tout savoir sur les Large Language Models, de leur fonctionnement à leur
  utilisation pratique
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
---

# LLM : Les Modèles de Langage Expliqués Simplement

Un Large Language Model (LLM), c'est comme un cerveau artificiel qui a assimilé une quantité impressionnante d'informations. Pense à un étudiant surhumain qui aurait lu TOUTE Wikipédia, des millions de livres, des milliards de conversations, et des milliers de codes sources.

## Comment ça marche ?

### 3 ingrédients :

**1. Données massives**

- Articles, livres, sites web
- Conversations, publications
- Code, documentation technique

**2. Architecture Transformer**

- Attention mechanism : Comprend quelles parties du texte sont importantes
- Self-attention : Relations entre les mots
- Positional encoding : Ordre des mots

**3. Entraînement massif**

- Des mois sur des milliers de GPUs
- Facture d'électricité astronomique
- Coût : $1M à $100M pour les grands modèles

## L'Évolution : De BERT à Claude

| Année | Modèle     | Innovation                          |
| ----- | ---------- | ----------------------------------- |
| 2018  | BERT       | Compréhension bidirectionnelle      |
| 2019  | GPT-2      | Génération texte de qualité humaine |
| 2020  | GPT-3      | 175B paramètres, zero-shot learning |
| 2022  | ChatGPT    | Interface conversationnelle         |
| 2023  | GPT-4      | Multimodal (texte + image)          |
| 2024  | Claude 3.5 | Raisonnement avancé, code expert    |

## Ce que les LLM savent faire

### 1. Compréhension contextuelle

Les LLMs comprennent :

- Le contexte d'une conversation (10-100K+ tokens)
- Les nuances et l'humour (parfois)
- Les implicites et sous-entendus
- Le style et le ton

**Exemple :**

```
Prompt : "Je viens de finir mon projet, mais j'ai l'impression
d'avoir oublié quelque chose de crucial. J'ai une deadline demain."

LLM comprend : Anxiété, urgence, besoin d'aide prioritaire
```

### 2. Génération de contenu

| Type de contenu  | Qualité actuelle       |
| ---------------- | ---------------------- |
| Texte générique  | Excellent              |
| Code simple      | Excellent              |
| Documentation    | Très bon               |
| Articles blog    | Bon                    |
| Créatif (poésie) | Variable               |
| Science exacte   | Moyen (hallucinations) |

### 3. Raisonnement

**Ce que ça veut dire :**
L'IA peut "réfléchir" sur un problème et arriver à une solution étape par étape.

**Exemple :**

```
Prompt : "Marie a 5 sœurs. Chaque sœur a 2 frères.
Combien de frères a le famille ?"

Étape 1 : Marie a 5 sœurs
Étape 2 : Les sœurs sont filles des mêmes parents
Étape 3 : Si chaque sœur a 2 frères, ce sont les mêmes frères
Réponse : 2 frères
```

### 4. Programmation

**Capacités :**

- Autocomplétion intelligente
- Génération de fonctions complètes
- Debugging (trouver et corriger bugs)
- Refactoring (améliorer le code)
- Documentation

**Limites :**

- Problèmes complexes : Variable
- Performance : Code souvent pas optimal
- Sécurité : Peut générer du code vulnérable

## Le Problème des Hallucinations

### C'est quoi ?

L'IA affirme quelque chose de faux avec une confiance totale.

### Pourquoi ?

1. **Probabilités vs vérité**

   - L'IA prédit le mot suivant le plus probable
   - Pas de notion de "vérité factuelle"
   - Si c'est probable, ça le génère

2. **Données d'entraînement**

   - Le web contient des erreurs
   - L'IA apprend ces erreurs
   - Reproduit les erreurs

3. **Pas de vérification**
   - L'IA ne "vérifie" pas ses affirmations
   - Elle génère, elle ne "sait" pas si c'est vrai

### Exemples :

```
❌ "Le premier iPhone est sorti en 2007" (vrai)
❌ "Le premier iPhone est sorti en 2005" (hallucination)
```

```
❌ "Le théorème de Fermat a été prouvé par Euler en 1790"
❌ (Euler n'a jamais prouvé Fermat, et en 1790 il était mort)
```

### Comment limiter les hallucinations ?

| Technique                | Efficacité |
| ------------------------ | ---------- |
| RAG (retrieval)          | ⭐⭐⭐⭐⭐ |
| Vérification humaine     | ⭐⭐⭐⭐⭐ |
| Temperature basse        | ⭐⭐⭐     |
| Citation obligatoire     | ⭐⭐⭐⭐   |
| Constraints (facts only) | ⭐⭐⭐     |

## Comment utiliser un LLM ?

### Via Chat (facile)

```text
1. Va sur chat.openai.com ou claude.ai
2. Crée un compte
3. Pose ta question
4. Copie la réponse
```

### Via API (intermédiaire)

```python
import openai

client = openai.Client(api_key="ta clé")

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "Explique ce qu'est un LLM"}
    ]
)

print(response.choices[0].message.content)
```

### Via RAG (avancé)

```text
1. Tu as une base de connaissances (PDFs, DB...)
2. Tu indexes ces documents
3. Quand tu poses une question :
   a. L'IA cherche dans tes documents
   b. Trouve les passages pertinents
   c. Génère une réponse basée sur ces passages
   d. Cite les sources
```

## Coûts réels

| Modèle          | Prix (approx)         | Cas d'usage idéal     |
| --------------- | --------------------- | --------------------- |
| GPT-4           | $0.03/1K input tokens | Raisonnement complexe |
| GPT-3.5         | $0.0005/1K tokens     | Autocomplétion        |
| Claude 3.5      | $0.003/1K tokens      | Code, analyse         |
| Llama 3 (local) | Coût infra            | Confidentialité       |

**Calcul rapide :**

- 1 token ≈ 0.75 mot en anglais, 0.5 mot en français
- 1000 mots ≈ 1500-2000 tokens
- GPT-4 pour 1000 mots ≈ $0.05-0.06

## Ce qu'il faut savoir

### 1. Les LLMs ne sont pas AGI

**AGI (Artificial General Intelligence) :**

- Compréhension générale comme un humain
- Capacité d'apprendre n'importe quelle tâche
- Conscience et autonomie

**LLMs actuels :**

- Spécialisés dans le langage
- Pas de vraie compréhension (probabilités)
- Hallucinations
- Pas de conscience

### 2. Les capacités sont variables

| Compétence   | GPT-4    | Claude 3.5 | Gemini     |
| ------------ | -------- | ---------- | ---------- |
| Raisonnement | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐   |
| Code         | ⭐⭐⭐   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     |
| Multimodal   | ⭐⭐⭐   | ⭐⭐⭐     | ⭐⭐⭐⭐⭐ |
| Coût         | ⭐⭐     | ⭐⭐⭐     | ⭐⭐⭐     |

### 3. L'humain reste essentiel

Pourquoi :

- Vérification des faits
- Validation du code
- Jugement éthique
- Créativité humaine unique

## Comment choisir ton LLM ?

### Pour débuter :

- ChatGPT (gratuit) ou Claude (gratuit)
- Interface simple
- Pas besoin de code

### Pour le code :

- Cursor (GPT-4 + Claude)
- Compréhension projet
- Edit en temps réel

### Pour la production :

- API Claude ou GPT-4
- Fiabilité
- Support entreprise

### Pour la confidentialité :

- Llama 3 (local)
- Ollama
- Hébergement self-hosted

## En savoir plus

- [Comment choisir un LLM](/tech/ia/llm/choisir-llm) - Comparaison détaillée
- [Histoire des LLM](/tech/ia/llm/histoire-llm) - De BERT à Claude
- [Cas d'usage réels](/tech/ia/applications) - 300+ exemples

---

Les LLMs sont là pour rester. La question n'est plus de savoir SI tu dois les utiliser, mais COMMENT les intégrer intelligemment dans ton workflow. La clé : comprendre les limites, vérifier les faits, et garder l'humain dans la boucle.
