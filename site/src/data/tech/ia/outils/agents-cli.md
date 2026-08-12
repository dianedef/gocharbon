---
section: apps
title: 'Agents CLI IA : Claude Code vs Codex CLI — Le Guide 2026'
author: Diane
tags:
- Tech
description: Comparatif complet Claude Code vs Codex CLI en 2026 — benchmarks, cas
  d'usage, pricing et comment combiner les deux pour multiplier ta productivité
pubDate: '2026-03-07'
imgUrl: ../../../../assets/astro.jpeg
---

# AGENTS CLI : LES NOUVEAUX BRAS DROITS DU DEV

En 2024, les meilleurs outils IA pour développeurs vivaient dans ton navigateur. En 2026, ils vivent dans ton terminal.

Les agents CLI ne te proposent pas du code dans une interface web que tu copies-colles. Ils lisent directement ton codebase, modifient tes fichiers, lancent tes tests, commitent sur Git — le tout pendant que tu fais autre chose.

Deux outils dominent : **Claude Code** (Anthropic) et **Codex CLI** (OpenAI, open source). Ils font la même chose en surface. En pratique, ils ont des architectures fondamentalement différentes et s'utilisent dans des contextes opposés.

## C'est Quoi un Agent CLI ?

Un agent CLI suit une boucle simple :

```
Tu décris ce que tu veux en langage naturel
  → L'agent lit ton codebase
  → Il planifie les modifications
  → Il édite les fichiers
  → Il lance les commandes (tests, linter, build)
  → Il te montre le résultat
  → Tu valides ou tu corriges
```

Ce qui change par rapport à ChatGPT ou Cursor : **l'agent opère dans ton environnement réel**. Il voit tous tes fichiers, comprend l'architecture globale, et peut exécuter n'importe quelle commande shell.

La contrepartie : ça demande de faire confiance à l'outil. D'où l'importance du sandboxing.

## Claude Code vs Codex CLI : Le Vrai Comparatif

| | **Claude Code** | **Codex CLI** |
| --- | --- | --- |
| Éditeur | Anthropic | OpenAI |
| Modèle | Claude Opus/Sonnet 4.6 | GPT-5.3-Codex |
| Open source | Non | Oui (Rust, ~40K stars GitHub) |
| Exécution | Local uniquement | Local + cloud sandbox |
| Sandboxing | Hooks (17 types d'événements) | Kernel-level OS (Seatbelt/seccomp) |
| Fichier config | `CLAUDE.md` par projet | `AGENTS.md` (compatible Cursor aussi) |
| Contexte max | 1M tokens (beta) | 400K tokens |
| Portabilité | Claude uniquement | Fonctionne aussi avec Cursor, OpenCode |
| Prix (entrée) | $20/mois (Pro) | Inclus dans ChatGPT Plus $20/mois |
| Prix (intensif) | $100-200/mois (Max) | $200/mois (ChatGPT Pro) |

### Les Benchmarks qui Comptent (Février 2026)

Les benchmarks classiques (HumanEval, MMLU) mesurent la génération de code dans le vide. Ce qui t'intéresse, c'est la performance sur des vrais projets.

**SWE-bench Verified** — résolution de vraies issues GitHub :

| Agent | Score |
| --- | --- |
| Claude Opus 4.6 | **79.4%** |
| GPT-5.3 Codex | 78.2% |

Claude gagne sur la résolution de bugs réels.

**Terminal-Bench 2.0** — tâches shell et terminal autonomes :

| Agent | Score |
| --- | --- |
| GPT-5.3 Codex | **77.3%** |
| Claude Opus 4.6 | 65.4% |

Codex gagne sur les tâches purement terminal. Pas une mince affaire quand 40% des tâches d'un dev sont du shell.

**GPQA Diamond** — raisonnement complexe :

| Agent | Score |
| --- | --- |
| Claude Opus 4.6 | **77.3%** |
| GPT-5.3 Codex | 73.8% |

Claude gagne sur les problèmes qui demandent vraiment de réfléchir.

**Résumé honnête :** Ni l'un ni l'autre ne domine. Ils s'utilisent pour des situations différentes.

## Installation

### Claude Code

```bash
# Nécessite Node.js 18+
npm install -g @anthropic-ai/claude-code

# Lance dans ton projet
cd /ton-projet
claude

# Ou avec une question directe
claude "Explique l'architecture de ce projet"
```

Configure un fichier `CLAUDE.md` à la racine de chaque projet pour donner le contexte (stack, conventions, règles).

### Codex CLI

```bash
# Via npm
npm install -g @openai/codex

# Ou via le binaire Rust (plus rapide)
# Voir github.com/openai/codex

# Lance
codex "Ajoute une validation Zod sur le formulaire de signup"

# Mode full auto (attention)
codex --full-auto "Migre toutes les routes Express vers la v5"
```

Configure un fichier `AGENTS.md` à la racine — il est aussi lu par Cursor et OpenCode, donc ta config est portable.

## Cas d'Usage : Qui Fait Quoi Mieux

### Claude Code excelle pour...

**Code review et audit :**

```bash
claude "Audite la sécurité de src/auth/ et liste les vulnérabilités"
claude "Explique comment les données circulent entre le frontend et l'API"
claude "Trouve tous les endroits où on gère les erreurs de façon incohérente"
```

**Architecture et refactoring complexe :**

```bash
claude "Refactore le module de paiement pour supporter Stripe et PayPal
         sans casser les tests existants"
```

**Gros codebase :**
Avec 1M tokens de contexte, Claude Code peut ingérer un projet entier avant de répondre. Utile quand tu rejoins une nouvelle équipe ou que tu attaques un monorepo de 500 fichiers.

### Codex CLI excelle pour...

**Le "grunt work"** — les tâches répétitives et chiantes que personne ne veut faire :

```bash
# Corriger des erreurs TypeScript en série
codex "Corrige toutes les erreurs TypeScript dans src/"

# Mettre à jour des schémas après une migration DB
codex "Adapte tous les modèles Prisma au nouveau schéma"

# Renommer des variables partout
codex "Renomme userId en user_id dans tout le projet (snake_case)"

# Ajouter des tests manquants
codex "Génère les tests unitaires manquants pour les fonctions dans utils/"
```

**Tâches shell et CI/CD :**

```bash
codex "Ajoute un job GitHub Actions pour lancer les tests sur PR"
codex "Configure Dockerfile multi-stage pour prod"
```

**Travail en arrière-plan (Codex Web, pas CLI) :**
Tu lui files 5 tâches le matin, et elles tournent en parallèle dans des sandboxes cloud séparés pendant que tu bosses sur autre chose.

## Sandboxing : Un Sujet Sérieux

Les deux outils peuvent exécuter des commandes shell. Ce n'est pas anodin.

### Claude Code — Gouvernance par Hooks

Claude Code intercepte les actions à 17 points du cycle de vie. Tu peux configurer des règles du type :
- "Demande confirmation avant tout `git push`"
- "Refuse toute modification de `.env`"
- "Logue toutes les commandes dans audit.log"

C'est une approche **application-level** — tu contrôles ce que l'agent peut faire.

### Codex CLI — Sandboxing Kernel

Codex utilise Seatbelt sur macOS et seccomp sur Linux — des restrictions au niveau du kernel du système d'exploitation, en dessous de l'application.

Trois niveaux de sandbox disponibles :

```bash
# Lecture seule (le plus safe)
codex --sandbox read-only "Analyse le projet"

# Écriture dans le workspace uniquement
codex --sandbox workspace-write "Modifie les fichiers"

# Accès total (à éviter sauf env. isolé)
codex --sandbox danger-full-access "..."
```

**Lequel est plus safe ?** Question difficile. Le kernel-level de Codex est plus difficile à contourner. Les hooks de Claude sont plus granulaires et configurables. Les deux sont sérieux.

## La Stratégie 2026 qui Marche

Les devs qui tirent vraiment parti de ces outils combinent les deux :

**Le matin — Codex pour le grunt work :**

```bash
# Tu bats ces 4-5 tâches en queue
codex "Corrige les 23 erreurs ESLint dans src/components/"
codex "Mets à jour les dépendances deprecated dans package.json"
codex "Ajoute des index sur les colonnes manquantes (voir slow query log)"
codex "Migre les anciens fetch() vers notre wrapper API interne"
```

Tu vas chercher ton café. Les tâches tournent.

**Le reste de la journée — Claude Code pour le vrai travail :**

```bash
claude "Refactore le système d'authentification pour supporter OAuth2"
claude "Explique pourquoi les perfs se dégradent sous charge et propose des solutions"
claude "Design l'architecture du nouveau module de notifications temps réel"
```

## Pricing Réel (Mars 2026)

### Claude Code

| Plan | Prix | Pour qui |
| --- | --- | --- |
| Pro | $20/mois | Usage modéré, <5h/jour |
| Max | $100/mois | Usage intensif |
| Max (heavy) | $200/mois | Equipes, usage continu |
| API | $5/$25 par million tokens | Pay-as-you-go |

### Codex CLI

| Plan | Prix | Codex CLI inclus |
| --- | --- | --- |
| ChatGPT Plus | $20/mois | Oui + Codex Web limité |
| ChatGPT Pro | $200/mois | Oui + Codex Web illimité |
| API (codex-mini) | $1.50/$6 par million tokens | Pay-as-you-go |
| Open source BYO | 0€ | Apporte ta propre clé API |

**La vraie économie avec Codex CLI :** si tu as déjà ChatGPT Plus pour autre chose, Codex CLI ne te coûte rien de plus.

## Pièges à Éviter

### 1. Lancer en mode full-auto sans filet

Ne fais jamais ça sur un projet en production sans avoir testé les modifications dans une branche dédiée.

**Solution :** Toujours travailler sur une branche feature. Configure le sandboxing correctement. Lis les diffs avant de merger.

### 2. Ne pas configurer CLAUDE.md / AGENTS.md

Sans contexte projet, l'agent improvise. Résultat : du code générique qui respecte pas tes conventions.

**Solution :** 10 minutes à écrire le fichier de config = des semaines de corrections évitées. Mets-y la stack, les conventions de naming, les règles de sécurité, ce qui est hors limites.

### 3. Utiliser Opus pour des tâches simples

Claude Opus 4.6 est puissant mais coûteux. Sonnet 4.6 fait 90% du travail à un coût 5x inférieur.

**Solution :** Utilise Sonnet pour le day-to-day, Opus uniquement pour les tâches complexes.

### 4. Faire confiance aux benchmarks seuls

Terminal-Bench 2.0 77.3% pour Codex ne veut pas dire que Codex est meilleur pour TON projet. Teste sur tes vrais cas d'usage.

## En savoir plus

- [Choisir le bon LLM](/tech/ia/llm/choisir-llm) - Guide complet des modèles 2026
- [Cursor](/tech/ia/outils/cursor/cursor-guide) - L'IDE IA pour le travail en éditeur
- [Agents IA](/tech/ia/agents) - Comprendre l'architecture des agents
- [Introduction aux LLM](/tech/ia/llm/introduction-llm) - Les fondamentaux

---

Claude Code ou Codex CLI ? Les deux, si tu veux aller vite. Codex pour tout ce qui est répétitif et prévisible. Claude pour ce qui demande de vraiment réfléchir. Ce n'est pas une question de "meilleur outil" — c'est une question de bon outil au bon moment.
