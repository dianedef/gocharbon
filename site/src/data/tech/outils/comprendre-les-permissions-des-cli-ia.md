---
section: outils
metadataEnrichedAt: null
title: Comprendre Les Permissions Des CLI IA
author: Diane
tags:
- Tech
- Outils
- IA
description: Comprends comment fonctionnent les permissions des CLI IA, la sandbox, les approbations et ce que change vraiment un mode autonome.
pubDate: '2026-03-20'
imgUrl: ../../../assets/astro.jpeg
---

# Comprendre Les Permissions Des CLI IA

Tu lances un CLI IA, tu lui demandes d'agir, et il te répond qu'il lui faut une permission. C'est souvent là que la confusion commence. On mélange facilement les permissions, la sandbox, le réseau, le mode autonome et les droits système.

Le problème, c'est que ces mots ne veulent pas dire la même chose. Si tu ne fais pas la différence, tu peux croire qu'un assistant "bloque pour rien" alors qu'il respecte simplement les garde-fous de l'outil.

## Pourquoi les CLI IA demandent des permissions

Un agent en ligne de commande ne fait pas que discuter. Il lit des fichiers, en modifie, lance des commandes, exécute des tests, appelle parfois des services distants et peut toucher à des zones sensibles de ton environnement.

Sans garde-fous, un simple assistant pourrait :

- modifier un mauvais fichier
- lancer une commande risquée
- envoyer des données vers l'extérieur
- supprimer ou écraser du travail existant

Les permissions servent donc à répondre à une question simple : jusqu'où cet agent peut-il agir sans validation humaine ?

## La différence entre approbation et sandbox

C'est la distinction la plus importante.

### L'approbation

L'approbation détermine si l'outil doit te demander ton feu vert avant d'exécuter une action.

En clair :

- soit le CLI te demande avant certaines actions
- soit il agit sans te demander

L'approbation parle donc du dialogue entre toi et l'agent.

### La sandbox

La sandbox détermine dans quel périmètre technique l'agent a le droit d'agir.

En clair :

- quels dossiers il peut lire
- quels dossiers il peut modifier
- quelles commandes sont limitées
- si certaines capacités système ou réseau sont bloquées

La sandbox parle donc des murs techniques autour de l'agent.

## Ce que beaucoup de gens comprennent mal

Le fait de retirer les demandes d'approbation ne retire pas forcément la sandbox.

Tu peux donc avoir un agent qui :

- ne te demande plus rien
- mais reste limité à ton workspace
- ou reste bloqué sur certaines commandes système

À l'inverse, tu peux aussi avoir un agent très libre techniquement, mais qui continue à te demander confirmation avant d'agir.

## Ce que veut dire "mode autonome"

Dans le langage courant, on dit souvent "je veux qu'il fasse tout tout seul". En pratique, ça peut vouloir dire deux choses très différentes.

### Autonome dans un cadre limité

L'agent agit seul, mais seulement dans une zone définie. Typiquement, il peut travailler dans le projet courant, modifier des fichiers de code, lancer certains outils, puis s'arrêter dès qu'il doit sortir de ce périmètre.

C'est souvent le meilleur compromis.

### Autonome sans garde-fous

L'agent agit seul sans approbation et sans vraie sandbox. Là, il fonctionne globalement comme ton utilisateur shell.

Ça ne veut pas dire qu'il devient administrateur. Ça veut juste dire qu'il récupère les mêmes droits que ton compte actuel, avec moins de barrières spécifiques au CLI.

## Sans sandbox ne veut pas dire root

C'est un point crucial.

Quand un CLI IA n'est plus sandboxé, il n'obtient pas magiquement les pouvoirs d'un super-utilisateur. Il agit seulement avec les permissions Unix de la session qui l'exécute.

Donc si ton compte :

- peut lire certains fichiers, l'agent pourra les lire
- ne peut pas accéder à des dossiers protégés, l'agent ne le pourra pas non plus
- n'a pas les droits root, l'agent n'a pas les droits root non plus

La suppression de la sandbox enlève une couche de sécurité du CLI. Elle ne contourne pas les permissions natives du système.

## Et le réseau dans tout ça

Le réseau est encore un sujet différent.

Un CLI IA peut être :

- autorisé à agir sans approbation
- plus ou moins sandboxé
- mais quand même bloqué côté réseau par l'environnement

Autrement dit, le fait d'enlever les prompts de permission ne garantit pas l'accès à Internet.

Le réseau dépend souvent :

- de la configuration du CLI
- du runner ou du harnais d'exécution
- du serveur
- du firewall
- du proxy

Si ton utilisateur a accès au réseau, un CLI peu restreint l'aura souvent aussi. Si l'environnement le coupe, l'agent ne passera pas au-dessus.

## Codex et Claude Code ne gèrent pas ça exactement pareil

Le principe général est similaire, mais la mécanique diffère.

### Côté Codex

Codex sépare assez clairement :

- la politique d'approbation
- le niveau de sandbox

Tu règles donc d'un côté le moment où l'outil te demande quelque chose, et de l'autre le périmètre dans lequel il peut agir.

### Côté Claude Code

Claude Code raisonne davantage en modes et en règles de permissions par outil. Il distingue par exemple les actions de lecture, d'édition ou d'exécution shell, avec des règles d'autorisation ou de demande de confirmation.

Le résultat recherché peut être proche, mais la logique de configuration est plus granulaire.

## La bonne question à se poser

La vraie question n'est pas "comment enlever toutes les permissions ?". La vraie question est plutôt :

quel niveau d'autonomie je veux accorder à cet agent, dans quel périmètre, et avec quel risque acceptable ?

Si tu bosses sur un projet perso dans un dossier isolé, tu peux tolérer plus d'autonomie.

Si tu bosses sur :

- un serveur de prod
- un repo client
- une machine avec des secrets
- un environnement partagé

tu n'as pas intérêt à enlever les garde-fous juste pour gagner quelques clics.

## Le réglage raisonnable pour la plupart des gens

Le bon compromis, ce n'est pas forcément le mode le plus fermé ni le mode totalement ouvert.

En général, ce qui fonctionne bien, c'est :

- ne plus demander de confirmation à chaque petite action
- garder un périmètre de travail clair
- laisser l'agent agir librement dans le projet
- éviter de lui donner d'emblée un accès total au système

Tu gagnes en fluidité sans transformer ton CLI en stagiaire hyper motivé avec les clés de toute la maison.

## Ce qu'il faut retenir

Si tu dois retenir seulement trois idées, garde celles-là :

- l'approbation et la sandbox sont deux choses différentes
- enlever la sandbox ne donne pas les droits root
- un mode autonome ne garantit pas l'accès réseau si l'environnement le bloque

Quand tu comprends ça, tu lis enfin les options d'un CLI IA avec les bons yeux. Et là, les réglages deviennent beaucoup moins mystérieux.

Si tu veux passer de la théorie à la pratique, tu peux enchaîner avec notre tuto sur [la configuration des permissions de Codex](https://gocharbon.com/tutos/comment-configurer-les-permissions-de-codex/) ou celui sur [la configuration des permissions de Claude Code](https://gocharbon.com/tutos/comment-configurer-les-permissions-de-claude-code/).
