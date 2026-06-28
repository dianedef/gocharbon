---
section: outils
metadataEnrichedAt: null
title: 'Cursor avec Modèles Locaux : Guide Complet'
author: Diane
tags:
- Tech
- Outils
description: Comment utiliser des modèles LLM locaux (Llama 3, Mistral...) avec Cursor
  via Gaia ou LM Studio
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

# Cursor Local : Utiliser l'IA 100% Privée

Tu veux utiliser Cursor avec des modèles locaux pour la confidentialité ou le coût ? C'est possible. Voici deux approches pour y arriver.

## Les 2 Approches

| Approche          | Complixit | Avantages           | Inconvénients                  |
| ----------------- | --------- | ------------------- | ------------------------------ |
| LM Studio + Ngrok | Élevée    | Gratuit, 100% local | Configuration complexe         |
| Gaia (semi-local) | Faible    | Simple, performant  | Semi-cloud (données partagées) |

## Prérequis Système

### Pour Mac

| Composant  | Requis              | Recommandé |
| ---------- | ------------------- | ---------- |
| Processeur | Apple Silicon M1-M4 | M2+        |
| RAM        | 16 Go minimum       | 32 Go      |
| OS         | macOS récent        | macOS 14+  |

### Pour Linux

| Composant      | Requis            | Recommandé         |
| -------------- | ----------------- | ------------------ |
| GPU            | 8 Go VRAM minimum | 24 Go+             |
| CUDA           | CUDA 12 SDK       | Oui                |
| Instance cloud | 1x GPU            | T4 ou mieux (A100) |

## Approche 1 : LM Studio + Ngrok

### Installation

```bash
# Installer LM Studio
brew install --cask lm-studio

# Installer Ngrok
brew install --cask ngrok
```

### Démarrage

```bash
# 1. Lance LM Studio et démarre le serveur sur le port 1234
lm-studio

# 2. Crée un tunnel Ngrok
ngrok http 1234
```

Ngrok t'aura donné une URL HTTPS du style : `https://abcd-1234.ngrok.io`

### Configuration Cursor

```bash
# Dans Cursor : Settings > Models > Add Model

Name: local-llama
Base URL: https://abcd-1234.ngrok.io/v1
API Key: DEMO
```

### Modèles populaires pour LM Studio

| Modèle        | Paramètres | RAM requise | Meilleur pour   |
| ------------- | ---------- | ----------- | --------------- |
| Llama 3 8B    | 8B         | 16 Go       | Code général    |
| Mistral 7B    | 7B         | 16 Go       | Autocomplétion  |
| Codestral 22B | 22B        | 32 Go       | Code spécialisé |
| Qwen 7B       | 7B         | 16 Go       | Code + français |

## Approche 2 : Gaia (Semi-Local)

### Qu'est-ce que Gaia ?

Gaia est un réseau décentralisé de nœuds d'inférence pour l'IA.

**Avantages :**

- Pas besoin de GPU puissant
- Configuration simple
- Modèles optimisés pour le code

**Inconvénients :**

- Pas 100% local (données envoyées au nœud)
- Dépendance internet

### Compte Gaia

1. Va sur [gaia.domains](https://gaia.domains)
2. Crée un compte (gratuit)
3. Choisis ton modèle :
   - `coder` : Spécialisé code
   - `llama` : Modèle général
   - `rustcoder` : Expert Rust

### Configuration Cursor

```bash
# Dans Cursor : Settings > Models > Add Model

Name: gaia-coder
Base URL: https://coder.gaia.domains/v1
API Key: [ta clé Gaia]
```

### Obtenir une clé API

1. Connecte-toi à Gaia
2. Va dans "API Keys"
3. Crée une nouvelle clé
4. Copie et colle dans Cursor

## Comparaison

| Critère         | LM Studio + Ngrok               | Gaia              |
| --------------- | ------------------------------- | ----------------- |
| Installation    | Complexe (3 outils)             | Simple (1 compte) |
| Confidentialité | Via tunnel (exposition externe) | Via nœud Gaia     |
| Performance     | Dépend hardware                 | Stable, optimisée |
| Coût            | Gratuit                         | Crédits ou tiers  |
| Maintenance     | Gérer tunnel, redémarrage       | Automatique       |

## Modèles Recommandés

### Pour le code (Python, JS, TS)

| Modèle         | Taille | Note                                    |
| -------------- | ------ | --------------------------------------- |
| Qwen 2.5 Coder | 7B     | Excellent pour le code                  |
| Codestral      | 22B    | Meilleur modèle code (besoin 32 Go RAM) |
| DeepSeek Coder | 33B    | Très bon mais lourd                     |
| Llama 3 8B     | 8B     | Bon équilibre                           |

### Pour le français + code

| Modèle       | Taille | Note                        |
| ------------ | ------ | --------------------------- |
| Mistral 7B   | 7B     | Bon français                |
| Qwen 7B      | 7B     | Français + code             |
| Mixtral 8x7B | 47B    | Plus lourd, très performant |

## Troubleshooting

### Cursor ne se connecte pas

```bash
# Teste l'URL avec curl
curl -X POST https://[ta-url]/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

Si ça ne marche pas :

1. Vérifie que Ngrok/LM Studio tourne
2. Vérifie l'URL dans Cursor
3. Essaie avec `API Key: DEMO`

### Lenteur excessive

| Cause                              | Solution                     |
| ---------------------------------- | ---------------------------- |
| Modèle trop grand pour le hardware | Utilise un modèle plus petit |
| Tunnel Ngrok lent                  | Essaie Cloudflare Tunnel     |
| CPU only                           | Essaie un modèle plus léger  |
| Trop de context                    | Réduis les références @      |

### Erreurs de génération

```bash
# Ajoute des paramètres dans l'URL
https://[ta-url]/v1/chat/completions?temperature=0.3&top_p=0.9
```

| Paramètre   | Effet                            | Valeur recommandée   |
| ----------- | -------------------------------- | -------------------- |
| temperature | Créativité (0 = déterministe)    | 0.2-0.3 pour le code |
| top_p       | Sélection parmi tokens probables | 0.9-0.95             |
| max_tokens  | Longueur réponse                 | 1000-2000            |

## Alternatives à Gaia

### Ollama

```bash
# Installation
brew install ollama

# Démarrage
ollama serve

# Configuration Cursor (via URL locale)
Base URL: http://localhost:11434/v1
```

### LocalAI

```bash
# Installation
pip install localai

# Démarrage
localai run qwen2.5-coder

# Configuration Cursor
Base URL: http://localhost:8080/v1
```

## En savoir plus

- [Guide Cursor](/tech/ia/outils/cursor/cursor-guide) - Fonctionnalités avancées
- [MCP Directory](https://cursor.directory) - Serveurs MCP
- [Documentation Gaia](https://docs.gaia.domains) - Guide officiel
- [Outils IA](/tech/ia/outils) - Écosystème complet

---

Les modèles locaux sont une excellente solution pour la confidentialité et le contrôle. La clé est de choisir le bon modèle pour ton hardware, et d'accepter quelques compromis sur la performance. Commence avec un modèle léger (Llama 3 8B ou Mistral 7B) et passe à des modèles plus gros si ton hardware le permet.
