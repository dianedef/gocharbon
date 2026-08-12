---
section: apps
metadataEnrichedAt: null
title: 'Cursor : Guide Complet du Copilote IA'
author: Diane
tags:
- Tech
description: 'Tout savoir sur Cursor : installation, MCP, raccourcis, astuces et comment
  maximiser sa productivité de développement'
pubDate: '2024-03-26'
imgUrl: ../../../../../assets/astro.jpeg
---

# Cursor : Le Copilote IA qui Comprend Ton Projet

Cursor n'est pas juste une extension VS Code. C'est un IDE entierement repensé pour l'IA. En 2024, c'est probablement le meilleur outil pour développer avec l'IA.

## Pourquoi Cursor ?

| Avantage             | VS Code + Copilot | Cursor                         |
| -------------------- | ----------------- | ------------------------------ |
| Compréhension projet | Fichier actuel    | Projet complet                 |
| Chat IA              | Extension séparée | Intégré natif                  |
| Éditeur IA           | Non               | Oui (modifications temps réel) |
| Références           | Non               | Oui (fichiers précis)          |
| MCP                  | Non               | Oui (outils externes)          |

## Installation

### 1. Télécharger

```bash
# Linux
curl -fsSL https://cursor.sh/ | sh

# macOS
brew install --cask cursor

# Windows
# Télécharge depuis https://cursor.sh/
```

### 2. Configuration

1. Lance Cursor
2. Connecte-toi avec ton compte GitHub (recommandé)
3. Choisis ton modèle par défaut (Claude Sonnet 3.5 recommandé)

### 3. Raccourcis essentiels

| Raccourci      | Fonction                    |
| -------------- | --------------------------- |
| `Cmd/Ctrl + K` | Ouvre l'éditeur IA          |
| `Cmd/Ctrl + L` | Ouvre le chat IA            |
| `Cmd/Ctrl + I` | Génère du code              |
| `Cmd/Ctrl + M` | Modifie le code sélectionné |

## Modèles Disponibles

| Modèle            | Meilleur pour              | Notes                |
| ----------------- | -------------------------- | -------------------- |
| Claude 3.5 Sonnet | Code général, raisonnement | Le meilleur en 2024  |
| GPT-4o            | Raisonnement complexe      | Plus lent, plus cher |
| GPT-4 Turbo       | Vitesse                    | Moins précis         |
| Claude 3.5 Haiku  | Tâches simples             | Rapide, économique   |

**Mon conseil :** Utilise Claude Sonnet 3.5 par défaut. Passe à GPT-4o seulement si tu as besoin de raisonnement complexe.

## Fonctionnalités Clés

### 1. Chat IA Contextuel

```text
→ Pose une question sur ton code
→ Claude comprend le projet complet
→ Réponses avec références aux fichiers
```

**Exemple d'utilisation :**

```
"Explique comment la fonction authenticate dans auth.ts
interagit avec la base de données dans db.js"

Réponse : Analyse les fichiers auth.ts et db.js,
explique le flow d'authentification, et montre
comment les tokens sont stockés et validés.
```

### 2. Éditeur IA (Cmd+K)

```text
→ Sélectionne du code
→ Cmd/Ctrl + K
→ Décris ce que tu veux faire
→ Claude modifie le code
→ Tu acceptes ou rejetes
```

**Cas d'usage :**

- Refactor d'une fonction
- Ajout de commentaires
- Traduction de code en anglais/français
- Optimisation de performance

### 3. MCP (Model Context Protocol)

**C'est quoi ?**
Un protocole ouvert qui permet à Cursor de communiquer avec des outils externes.

**Pourquoi c'est puissant :**

- Connexion directe à tes outils (GitHub, bases de données...)
- L'IA peut exécuter des actions, pas juste répondre
- Extensibilité quasi infinie

**Exemples de MCP :**

```bash
# GitHub MCP
"Crée une PR pour corriger ce bug"
→ Cursor utilise l'API GitHub → PR créée

# PostgreSQL MCP
"Montre les utilisateurs actifs ce mois"
→ Cursor exécute la requête SQL → Résultats

# Stripe MCP
"Crée un checkout flow"
→ Cursor génère le code Stripe → Intégré
```

### Configuration MCP

```bash
# Ouvre Settings → Features → MCP
# Clique "Add New MCP Server"

# Exemple : GitHub
Name: GitHub
Type: sse
URL: https://mcp.github.com
```

**Bibliothèque MCP :** [cursor.directory](https://cursor.directory)

## Workflows Efficaces

### 1. Refactoring d'une fonction

```
1. Sélectionne la fonction à refactorer
2. Cmd/Ctrl + K
3. "Refactor cette fonction en suivant les best practices [langage]"
4. Claude propose le code
5. Tu vérifies et acceptes
```

### 2. Génération de tests

```
1. Sélectionne la fonction à tester
2. Cmd/Ctrl + K
3. "Génère des tests unitaires pour cette fonction avec [framework]"
4. Claude génère les tests
5. Tu exécutes et ajustes si nécessaire
```

### 3. Documentation

```
1. Sélectionne un module
2. Cmd/Ctrl + L (chat)
3. "Documente ce module avec docstrings [langage]"
4. Claude génère la documentation
5. Tu vérifies la précision
```

### 4. Debugging

```
1. Copie le message d'erreur
2. Cmd/Ctrl + L
3. "Analyse cette erreur et propose une solution : [erreur]"
4. Claude explique le problème et propose un fix
5. Tu testes la solution
```

## Comparatif Pricing

| Plan       | Prix      | Crédits              | Pour qui ?          |
| ---------- | --------- | -------------------- | ------------------- |
| Gratuit    | 0€        | 200 requêtes rapides | Tests               |
| Pro        | 20€/mois  | Illimité             | Développeurs actifs |
| Business   | 40€/mois  | Illimité + priorité  | Équipes             |
| Enterprise | Sur devis | Illimité + support   | Entreprises         |

**Mon conseil :** Commence avec le plan gratuit pour tester. Si ça marche pour toi, passe au plan Pro.

## Astuces Avancées

### 1. Références intelligentes

```text
Utilise @ pour référencer :
- @fichier : Ce fichier spécifique
- @dossier : Tout le dossier
- @symbole : Symbole de code, fonction...

Exemple : "Explique @auth.ts et comment il interagit avec @db"
```

### 2. Mode Composer (Tab to Jump)

```
1. Sélectionne du code
2. Tab : Copie la sélection dans l'éditeur
3. Continue à Tab : Coller les parties suivantes
4. Très utile pour les longs fichiers
```

### 3. Chat persistant

```text
→ Ouvre un chat
→ Pose plusieurs questions liées
→ Le chat garde le contexte
→ Tu n'as pas besoin de tout répéter
```

### 4. Personnalisation

```bash
# Settings → AI Preferences

- Default model: claude-3-5-sonnet
- Theme: Dark
- Font size: 14
- Tab size: 4
```

## Alternatives à Comparer

| Outil             | Prix       | Meilleur pour           |
| ----------------- | ---------- | ----------------------- |
| Windsurf          | 0-60€/mois | Claude Sonnet + prix    |
| VS Code + Copilot | 10€/mois   | Autocomplétion rapide   |
| JetBrains AI      | 19€/mois   | JetBrains IDEs          |
| Aider             | Gratuit    | Terminal + commentaires |

## Pièges à Éviter

### 1. Accepter aveuglément

**Problème :** Copier-coller sans vérifier.

**Solution :**

- Lis et comprends chaque modification
- Teste le code après acceptation
- Pose des questions si ce n'est pas clair

### 2. Dépendance excessive

**Signes d'alerte :**

- Tu ne peux plus coder sans IA
- Tu ne comprends plus le code que tu écris
- Tes compétences atrophient

**Solution :**

- 20-40% du temps sans IA
- Coding challenges réguliers
- Projets personnels sans IA

### 3. Sur-utilisation du chat

**Problème :** Chatter avec l'IA au lieu de coder.

**Solution :**

- Utilise l'éditeur IA (Cmd+K) pour les modifications
- Utilise le chat seulement pour les questions/analyse
- Code activement, ne demande pas juste à l'IA

## En savoir plus

- [Cursor Local](/tech/ia/outils/cursor/cursor-local) - Utiliser des modèles locaux
- [Outils IA](/tech/ia/outils) - Écosystème complet
- [IA pour le Code](/tech/ia/applications/ia-code) - Comparatif des outils

---

Cursor est un outil puissant. La clé pour en tirer le maximum : comprendre ce que l'IA te propose, valider les modifications, et maintenir tes compétences de développement. L'IA est un assistant, pas un remplacement.
