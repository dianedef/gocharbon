---
section: outils
metadataEnrichedAt: null
title: 'Cursor : L''IDE IA du Futur'
author: Diane
tags:
- Tech
- Outils
description: Guide complet sur Cursor, l'IDE IA qui révolutionne le développement
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

# Cursor : L'IDE IA qui Remplace VS Code

Cursor n'est pas juste une extension VS Code. C'est un IDE entièrement repensé pour l'IA. En 2024, c'est probablement le meilleur outil pour développer avec l'IA.

## Ce que tu trouveras ici

### Guides complets

- [Guide Cursor](/tech/ia/outils/cursor/cursor-guide) - Installation, configuration, astuces avancées
- [Cursor en local](/tech/ia/outils/cursor/cursor-local) - Utiliser des modèles locaux (LLaMA, Mistral...)

## Pourquoi Cursor ?

### 1. IA native

Contrairement à VS Code + Copilot, Cursor est conçu autour de l'IA :

- Compréhension du contexte complet du projet
- Chat intégré avec références précises
- Editeur IA avec modifications en temps réel
- Commande `/` pour actions rapides

### 2. Fonctionnalités clés

| Fonction            | VS Code + Copilot | Cursor                    |
| ------------------- | ----------------- | ------------------------- |
| Chat contextuel     | Moyen             | Excellent                 |
| Multi-file editing  | Non               | Oui                       |
| Références précises | Non               | Oui                       |
| Modèles locaux      | Non               | Oui                       |
| Prix                | $10/mois          | $20/mois (gratuit limité) |

### 3. Comparaison des modèles IA

| Modèle            | Vitesse     | Qualité | Meilleur pour          |
| ----------------- | ----------- | ------- | ---------------------- |
| GPT-4             | Moyenne     | Haute   | Analyse complexe       |
| Claude 3.5 Sonnet | Rapide      | Haute   | Équilibre perf/vitesse |
| GPT-3.5           | Très rapide | Moyenne | Autocomplétion rapide  |
| LLaMA 3 (local)   | Variable    | Haute   | Confidentialité data   |

## Comment commencer ?

### 1. Installation

```bash
# Télécharger cursor.sh
curl -fsSL https://cursor.sh/ | sh
```

### 2. Configuration de base

- Choisir ton modèle préféré (Claude recommandé)
- Configurer le répertoire de travail
- Activer les extensions nécessaires

### 3. Premiers pas

1. Utiliser `Ctrl+K` pour éditer le code sélectionné
2. Utiliser `Ctrl+L` pour le chat
3. Utiliser `Ctrl+I` pour l'indexation intelligente
4. Utiliser `@` pour référencer des fichiers/folders

## Cas d'usage typiques

### Refactoring complet

```
Prompt: Refactor ce dossier en suivant les best practices Python
```

Cursor analyse tous les fichiers, comprend l'architecture, et propose des modifications cohérentes.

### Bug hunting

```
Prompt: Trouve le bug qui cause une memory leak dans ce projet
```

Cursor trace les dépendances, identifie les fuites potentielles, et propose des corrections.

### Nouvelle fonctionnalité

```
Prompt: Implémente un système d'auth JWT en utilisant FastAPI
```

Cursor génère le code complet, les tests, et la documentation.

## Limites

### 1. Coût

- $20/mois pour la version Pro
- Gratuit mais limité (200 requêtes/mois)

### 2. Courbe d'apprentissage

- Nouvelles commandes à maîtriser
- Workflow différent de VS Code classique

### 3. Dépendance internet

- Sauf si tu utilises des modèles locaux

## Alternatives

| Outil             | Avantages   | Inconvénients  |
| ----------------- | ----------- | -------------- |
| VS Code + Copilot | Familiarité | Context limité |
| OpenDevin         | Autonome    | Expérimental   |
| Codeium           | Gratuit     | Moins puissant |

## En savoir plus

- [Guide complet](/tech/ia/outils/cursor/cursor-guide)
- [Installation locale](/tech/ia/outils/cursor/cursor-local)
- [Autres outils IA](/tech/ia/outils)

---

Cursor est l'avenir du développement. Si tu codes en Python, JS, ou TypeScript, essaye-le pendant 2 semaines. Tu ne retourneras probablement pas à VS Code classique.
