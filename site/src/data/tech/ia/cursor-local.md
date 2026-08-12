---
title: "Cursor Local : L'Assistant de Code Open Source"
description: "Guide pratique pour configurer et utiliser le modèle IA Quen 2.5 avec l'éditeur de code Cursor en local. Découvre comment coder plus efficacement avec une IA open source."
pubDate: "2024-03-25"
category: "Tech"
author: "Web'Indé"
imgUrl: "../../../assets/astro.jpeg"
tags:
  - IA
  - Code
  - Open Source
---

# CURSOR LOCAL : Utilise ton Assistant de Code en Local ou avec Gaia

## Deux Approches pour un Code Plus Privé

Tu as deux options principales pour utiliser Cursor avec des modèles locaux ou semi-locaux :

1. **🏠 100% Local avec LM Studio + Ngrok ou Gaia**
   - Installation locale complète
   - Contrôle total sur tes données
   - Nécessite plus de ressources

2. **🌐 Semi-Local avec Gaia**
   - Service décentralisé
   - Configuration plus simple
   - Performance optimisée

## Prérequis Système pour les Modèles Locaux

### 🖥️ Configuration Recommandée

Selon la [documentation officielle de Gaia](https://docs.gaianet.ai/getting-started/system-requirements), tu auras besoin de :

- **Pour Mac** :
  - Apple Silicon (M1 à M4)
  - 16 Go RAM minimum (32 Go recommandés)
  - macOS récent

- **Pour Linux** :
  - Ubuntu 22.04 (recommandé)
  - NVIDIA CUDA 12 SDK
  - GPU avec 8 Go VRAM minimum (24 Go recommandés)
  - Ex: GPU NVIDIA T4 ou supérieur

### 🛠️ Configuration Commune aux Deux Approches

Que tu choisisses LM Studio ou Gaia, tu auras besoin de :
- Un tunnel HTTPS (Ngrok ou alternative)
- Une connexion Internet stable
- Cursor installé et configuré

## Option 1 : Configuration avec LM Studio + Ngrok

1. **Installation des Outils**
   ```bash
   # Sur macOS avec Homebrew
   brew install --cask ngrok
   brew install --cask lm-studio
   ```

2. **Configuration du Tunnel**
   ```bash
   # Lance LM Studio et démarre le serveur sur le port 1234
   ngrok http 1234
   ```

3. **Configuration de Cursor**
   ```bash
   # Dans Cursor, utilise l'URL fournie par Ngrok
   Base URL: https://ton-tunnel.ngrok.io/v1
   API Key: "DEMO" # n'importe quelle valeur
   ```

## Utiliser Ngrok pour exposer le serveur local

- Malheureusement, Cursor ne peut pas accéder directement à ton serveur local, car il route les requêtes vers ses propres serveurs.
- Nous allons donc utiliser Ngrok pour exposer ton serveur local à travers un endpoint public.
- Installe Ngrok sur ta machine (par exemple avec Homebrew sur macOS) et lance la commande `ngrok http 1234` pour créer un tunnel vers ton serveur.

### 🔒 Comprendre Ngrok et ses Alternatives

Ngrok est un outil populaire qui permet d'exposer un serveur web local à Internet. Il crée un tunnel sécurisé entre Internet et ta machine locale, fournissant une URL unique que tu peux partager.

#### Fonctionnalités Clés de Ngrok

1. **Tunneling Sécurisé** : Crée un tunnel sécurisé entre ton serveur web local et Internet
2. **Hébergement de Sous-domaine** : Fournit un sous-domaine unique (ex: `https://ton-domaine.ngrok.io`)
3. **Transfert HTTPS** : Gestion automatique du HTTPS pour des connexions sécurisées
4. **Inspection du Trafic** : Interface web pour visualiser et déboguer le trafic

#### 🔄 Alternatives Gratuites à Ngrok

1. **Localtunnel**
   - Outil gratuit et open-source
   - Fonctionnalités similaires à Ngrok
   - Création simple de tunnel sécurisé

2. **Serveo**
   - Alternative gratuite à Ngrok
   - Interface en ligne de commande simple
   - Support HTTP et HTTPS

3. **Inlets**
   - Proxy inverse open-source
   - Plus complexe mais plus flexible
   - Meilleur contrôle sur le processus

4. **Cloudflare Tunnel**
   - Anciennement Argo Tunnel
   - Configuration plus complexe
   - Connexion sécurisée et fiable

💡 **Conseil de choix** : Pour choisir ton alternative à Ngrok, considère :
- La facilité d'utilisation
- Les fonctionnalités disponibles
- Le niveau de contrôle souhaité
- Tes besoins spécifiques

## Option 2 : Configuration avec Gaia

Gaia is building an decentralized ecosystem to support AI applications that learn, improve, and grow over time.


01.
Choose from a vast collection of open-source LLMs
02.
Add a knowledge base for specialized inference
03.
Fine-tune your models and deploy at scale

Instantly connect to a specialized network of inference nodes.
Power any LLM application with an OpenAI compatible API
Replace costly inference with a simple Gaia endpoint

### 🎯 Pourquoi choisir Gaia ?

- **Confidentialité** : Ton code reste dans ton organisation
- **Base de connaissances personnalisée** : Adapte l'IA à ton style de code
- **Performance** : Accès à des modèles puissants sans matériel coûteux

### 🔄 Compatibilité et Installation

Tu peux installer Gaia sur une grande variété d'appareils et de systèmes d'exploitation, avec ou sans GPU. Les instructions d'installation et d'exploitation fonctionnent sur des appareils allant du Raspberry Pi aux clusters Nvidia H100 basés sur le cloud, en passant par les MacBooks, les serveurs Linux et les PC Windows.

#### Configurations Recommandées pour les Opérateurs Institutionnels

Tu as deux options principales :

1. **Configuration Mac**
   - iMac, Mini, Studio ou Pro avec Apple Silicon (M1 à M4)
   - 16 Go de RAM minimum (32 Go ou plus recommandés)

2. **Configuration Linux**
   - Serveur Ubuntu 22.04
   - NVIDIA CUDA 12 SDK installé
   - Minimum 8 Go de VRAM sur le GPU (24 Go ou plus recommandés)
   - Sur AWS et Azure, cela signifie des instances GPU avec au moins une NVIDIA T4

💡 **Note importante** : Si tu héberges le nœud chez toi ou au bureau, il doit avoir accès à Internet pour rejoindre le réseau Gaia.

#### Support Multi-Plateforme

Le logiciel Gaia node est conçu pour être cross-platform :
- Fonctionne sur diverses architectures CPU et GPU
- Détecte automatiquement les pilotes NVIDIA CUDA
- Exploite la puissance des accélérateurs GPU sur l'appareil
- Plus de support matériel en cours de développement

### ⚙️ Modèles Disponibles sur Gaia

| Type de Modèle | URL de Base | Nom du Modèle |
|----------------|-------------|---------------|
| Assistant général | https://coder.gaia.domains/v1 | coder |
| Spécialiste Rust | https://rustcoder.gaia.domains/v1 | rustcoder |
| Expert Rust | https://rustexpert.gaia.domains/v1 | rustexpert |

### 🔧 Configuration de Cursor avec Gaia

#### 🔑 Obtenir une clé API Gaia pour un node public

Allez sur https://www.gaianet.ai/gaia-domain-name et clique sur "Connect"



#### Pour un node privé




1. **Paramétrage Initial**
   - Ouvre les paramètres de Cursor (⚙️)
   - Va dans la section "Models"
   - Ajoute un nouveau modèle nommé "coder"
   - Désactive les autres modèles (gpt-4, etc.)

2. **Configuration de l'API**
   ```bash
   # Dans Settings > OpenAI API Key
   Base URL: https://coder.gaia.domains/v1
   API Key: "GAIA" # ou n'importe quelle chaîne
   ```

3. **Vérification**
   - Clique sur "Verify" pour tester la connexion
   - Essaie une commande simple pour vérifier le fonctionnement

### 💡 Astuces d'Utilisation

- **Raccourcis Essentiels**
  - `Cmd/Ctrl + K` : Éditer le code sélectionné
  - `Cmd/Ctrl + L` : Ouvrir le chat pour poser des questions

- **Cas d'Usage Optimaux**
  ```python
  # Exemple de prompt pour Gaia
  "Optimise cette fonction en suivant les bonnes pratiques Python"
  ```

## Comparaison des Approches (Mise à jour)

| Critère | LM Studio + Ngrok | Gaia |
|---------|-------------------|------|
| Installation | Complexe (plusieurs outils) | Simple (un seul service) |
| Ressources | Selon hardware local | Gérées par Gaia |
| Confidentialité | Via tunnel Ngrok | Via nœuds Gaia |
| Performance | Dépend du matériel | Stable et optimisée |
| Maintenance | Configuration tunnel à gérer | Automatique |

🎯 **Pro tip** : Les deux approches nécessitent un tunnel HTTPS. Gaia l'intègre nativement, tandis qu'avec LM Studio tu devras gérer Ngrok ou une alternative.

## Ressources et Support

- [Documentation Gaia](https://docs.gaianet.ai)
- [Communauté Cursor](https://discord.gg/cursor)
- [Guide Vidéo](lien-vers-la-video)



