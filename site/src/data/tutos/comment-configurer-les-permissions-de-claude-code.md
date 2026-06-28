---
section: tutos
type: tuto
statut:
- backlog
_priorité: normal
imageNameKey: null
tags:
- Tutoriels
- IA
- ClaudeCode
title: Comment configurer les permissions de Claude Code
author: Diane
description: 'Tutoriel pratique pour configurer les permissions de Claude Code : étapes propres, erreurs à éviter et mise en place sans blabla.'
pubDate: 2026-04-19
imgUrl: ../../assets/astro.jpeg
---

# Comment configurer les permissions de Claude Code

Si tu veux configurer les permissions de Claude Code, le vrai sujet n'est pas d'enlever des popups. Le vrai sujet, c'est de choisir un niveau d'autonomie cohérent avec ta machine, ton projet et ton seuil de risque.

## Ce qu'il faut préparer

- l'environnement sur lequel tu lances l'agent
- le niveau de risque acceptable
- les commandes qui te font perdre du temps aujourd'hui

## La méthode simple

1. Définis le niveau d'autonomie dont tu as réellement besoin. Si tu travailles sur des projets sensibles, ne pars pas directement sur le mode le plus permissif.
2. Règle séparément la politique d'approbation et le niveau de sandbox. Ce sont deux leviers différents, et les mélanger te fait prendre des risques mal compris.
3. Teste sur un petit repo sans secrets. Le bon réglage est celui qui réduit la friction sans te faire oublier où l'agent peut écrire, lire ou exécuter des commandes.

## Les erreurs à éviter

- confondre sécurité et friction
- ouvrir trop grand juste pour aller plus vite
- oublier qu'un réglage global s'applique à toutes tes sessions

## Commence comme ça

Choisis un projet non sensible, applique le réglage minimal qui enlève une vraie friction, puis vérifie pendant quelques sessions ce qui te manque encore.
## Repères utiles

- Anthropic détaille les modes d'autorisation et de sandbox dans la documentation officielle Claude Code : https://docs.anthropic.com/en/docs/claude-code/security
