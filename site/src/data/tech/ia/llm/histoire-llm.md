---
section: blog
title: 'Histoire des LLM : De BERT à Claude 3.5'
author: Diane
tags:
- Tech
description: L'évolution des modèles de langage de 2017 à 2024, des Transformers à
  l'AGI
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
---

# Histoire des LLM : La Révolution en 8 Années

## 2017 : Le Transformer Change Tout

Juin 2017. Google publie "Attention Is All You Need".

Ce papier va révolutionner l'IA :

- Abandon des réseaux récurrents (RNN, LSTM)
- Introduction de l'attention mechanism
- Traitement parallèle des mots
- Compréhension des relations à longue distance

**Impact :** Tous les grands modèles actuels sont basés sur cette architecture.

## 2018 : BERT Comprend le Contexte

Octobre 2018. Google lance BERT (Bidirectional Encoder Representations from Transformers).

**Innovation :** Première fois qu'un modèle comprend le contexte en regardant à la fois ce qui précède ET ce qui suit.

**Impact immédiat :** Google intègre BERT à son moteur de recherche.

**Benchmarks :**

- SQuAD (Question Answering) : 93.2% → 93.5%
- GLUE : 80.5% → 82.1%

## 2018-2019 : GPT, La Génération Commence

### GPT-1 (Juin 2018)

- 117 millions de paramètres
- Premier modèle génératif de OpenAI
- Preuve qu'un transformer peut générer du texte cohérent

### GPT-2 (Février 2019)

- 1.5 milliards de paramètres
- Qualité tellement bonne qu'OpenAI hésite à le publier
- **Innovation :** Few-shot learning (peu d'exemples suffisent)

**Scandale :** OpenAI refuse de publier le modèle complet pendant 6 mois. Premier débat public sur les risques de l'IA.

## 2020 : GPT-3 Explose Internet

Juin 2020. GPT-3 avec 175 milliards de paramètres.

**Capacités révolutionnaires :**

- Génération de code (JavaScript, Python, CSS...)
- Traduction multilingue
- Création de contenus créatifs
- Zero-shot learning (apprendre sans exemples)

**Coût d'entraînement :** ~$4.6M sur 1000 V100 GPUs pendant 34 jours

**Impact :** L'IA générative devient une réalité, pas juste de la recherche.

## 2021 : La Course aux Gigants

### PaLM (Google)

- 540 milliards de paramètres
- 768 GPUs TPU v4 pendant 30 jours
- Coût estimé : ~$9M

### GLaM (Google)

- 1.2 trillions de paramètres
- Mixture of Experts (64 experts)
- Performance record-breaking

## 2022 : L'Année de la Folie

### LaMDA (Google)

- 137 milliards de paramètres
- Blake Lemoine (Google engineer) affirme que LaMDA est "consciente"
- Scandale médiatique

### Claude (Anthropic)

- Fondé par d'ex-researchers d'OpenAI
- Objectif : IA "constitutionnelle" (safe, helpful, honest)

### ChatGPT (Novembre 2022)

- Interface conversationnelle pour GPT-3.5
- **Révolution :** L'IA devient accessible à tous
- 1 million d'utilisateurs en 5 jours
- 100 millions en 2 mois (record historique)

**Pourquoi ça marche :**

- Interface simple comme un chat
- Réponses naturelles
- Comprend le contexte de la conversation

## 2023 : La Course au Multimodal

### GPT-4 (Mars 2023)

- Vision + texte
- Billed comme "most capable and aligned model"
- Multi-modal : Images, textes, code

### Claude 2 (Anthropic)

- 100K tokens de contexte (vs 4K pour GPT-3.5)
- Meilleure réduction des hallucinations

### Gemini (Google, Décembre 2023)

- Premier modèle nativement multimodal
- Texte + images + audio + vidéo
- 1M+ tokens de contexte

### Llama 2 (Meta, Juillet 2023)

- Open source
- 7B, 13B, 70B versions
- Disponible pour commercial use
- **Révolution :** Les entreprises peuvent fine-tuner sur leurs propres données

## 2024 : La Nouvelle Génération

### Claude 3 (Mars 2024)

- **Haiku** : Rapide, économique (tasks simples)
- **Sonnet** : Équilibre performance/coût (cas d'usage généraux)
- **Opus** : State-of-the-art (tasks complexes)

**Innovations :**

- Vision haute résolution
- Réduction drastique des hallucinations
- 200K tokens de contexte

### GPT-4o (Mai 2024)

- Multimodal avancé
- Vitesse augmentée
- Coût réduit

### Mixtral 8x7B (Mistral AI)

- Mixture of Experts : 8 modèles de 7B
- 47 milliards de paramètres (mais seulement 12B actifs à chaque forward pass)
- Performance de GPT-3.5 avec un coût 10x inférieur

### Llama 3 (Avril 2024)

- 8B et 70B versions
- Performance record pour les modèles open source
- Surpasse Claude 2 et GPT-3.5 sur plusieurs benchmarks

## Évolution des Paramètres

| Année | Modèle | Paramètres | Coût entraînement (est) |
| ----- | ------ | ---------- | ----------------------- |
| 2018  | BERT   | 110M       | ~$10K                   |
| 2019  | GPT-2  | 1.5B       | ~$100K                  |
| 2020  | GPT-3  | 175B       | ~$4.6M                  |
| 2022  | LaMDA  | 137B       | ~$3-5M                  |
| 2023  | GPT-4  | ~1.8T      | ~$50-100M               |
| 2024  | GPT-4o | ~1.8T      | ~$50-100M               |

## Évolution des Benchmarks

### MMLU (Massive Multitask Language Understanding)

| Modèle     | 2022  | 2023  | 2024  |
| ---------- | ----- | ----- | ----- |
| GPT-3      | 43.9% | -     | -     |
| GPT-4      | -     | 86.4% | 86.4% |
| Claude 2   | -     | 78.5% | -     |
| Claude 3.5 | -     | -     | 88.7% |

### HumanEval (Génération de code)

| Modèle     | 2022  | 2023  | 2024  |
| ---------- | ----- | ----- | ----- |
| GPT-3      | 48.1% | -     | -     |
| GPT-4      | -     | 67.0% | 90.2% |
| Claude 2   | -     | 71.2% | -     |
| Claude 3.5 | -     | -     | 92.0% |

## Leçons Apprises

### 1. La taille n'est pas tout

Llama 3 8B (2024) surpasse GPT-3 (175B) sur de nombreux benchmarks.

**Pourquoi ?**

- Meilleure qualité des données
- Architecture optimisée
- Meilleur entraînement

### 2. L'open source gagne du terrain

- Llama 2 (2023) : Démocratisation massive
- Llama 3 (2024) : Performance proche des modèles fermés
- Mistral, Mixtral : Entreprises françaises qui dominent

**Impact :**

- Les entreprises peuvent fine-tuner
- Coûts 10-100x inférieurs
- Confidentialité des données

### 3. Le multimodal est le futur

- 2022 : Texte uniquement
- 2023 : Texte + images (GPT-4)
- 2024 : Texte + images + audio + vidéo (Gemini)

**Prochaine étape :**

- Compréhension 3D
- Interaction temps réel
- Génération vidéo longues

## Coûts d'entraînement

| Modèle | GPUs         | Temps      | Coût estimé |
| ------ | ------------ | ---------- | ----------- |
| GPT-3  | 1000x V100   | 34 jours   | ~$4.6M      |
| LaMDA  | 2048x TPU v4 | 60 jours   | ~$3-5M      |
| PaLM   | 6144x TPU v4 | 64 jours   | ~$9M        |
| GPT-4  | ~25000x A100 | ~100 jours | ~$50-100M   |

**Note :** Coûts approximatifs basés sur les prix cloud publics (souvent négociés).

## Ce que ça veut dire pour toi

### Pour les développeurs

- **Open source est maintenant viable :** Llama 3, Mixtral, Mistral
- **Fine-tuning accessible :** LoRA, QLoRA (coût < $100)
- **Déploiement simplifié :** vLLM, Ollama, LM Studio

### Pour les entreprises

- **Vendor lock-in n'est plus nécessaire :** Multi-model strategies
- **Coûts en baisse :** 10-100x depuis 2022
- **Confidentialité possible :** Self-hosted models

### Pour les utilisateurs

- **Meilleure qualité :** Hallucinations réduites
- **Plus rapide :** Latence divisée par 2-5
- **Plus accessible :** Prix divisés par 10

## L'AGI ?

Quand aura-t-on une AGI (Artificial General Intelligence) ?

| Prédiction | Expert       | Probabilité |
| ---------- | ------------ | ----------- |
| 2025-2027  | Ray Kurzweil | < 1%        |
| 2027-2030  | OpenAI       | ~5%         |
| 2030-2040  | Sam Altman   | ~20%        |
| Jamais     | Yann LeCun   | ~30%        |

**Réalité en 2024 :**

- Personne ne sait vraiment
- Les experts divergent énormément
- L'AGI est peut-être une notion sans sens (comme "qu'est-ce que la conscience ?")

## En savoir plus

- [Introduction aux LLM](/tech/ia/llm/introduction-llm) - Comprendre les fondamentaux
- [Comment choisir un LLM](/tech/ia/llm/choisir-llm) - Comparaison des modèles
- [Cas d'usage réels](/tech/ia/applications) - 300+ exemples
- [L'avenir de l'IA](/tech/ia/analyses/avenir-ia) - Tendances et perspectives

---

L'histoire des LLM est loin d'être finie. Chaque mois voit de nouveaux modèles, de nouveaux records, de nouvelles innovations. La seule constante : le rythme d'accélération. Si tu attends "le bon moment" pour t'intéresser à l'IA, tu attends depuis trop longtemps. Commence maintenant, apprends en continu, et adapte-toi au changement.
