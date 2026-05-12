---
section: blog
title: "Spec-Driven Development : la constitution avant le code"
author: Diane
tags:
  - Tech
  - Développement
  - Gestion de projet
  - Architecture
description: "Tu veux un workflow fiable avec un agent de code ? Rédige une spec exploitable : contexte, périmètre, plan, vérification, puis livraison."
pubDate: '2026-05-12'
imgUrl: ../../../assets/astro.jpeg
---

# Spec-Driven Development : la constitution avant le code

Tu as un objectif clair. Mais quand tu passes à l'agent, tu gagnes de la vitesse ou de la confusion selon la qualité de ta spec.

Le spec-driven development, c'est simple : **tu stabilises l'intention avant de coder**.  
Et tu donnes à l'agent une mémoire de travail qui tient plus longtemps qu'une bonne humeur de sprint.

## La base qui change tout : la constitution de projet

Sans constitution de projet, une spec de feature vit en roue libre.  
Quand tu reviens une semaine plus tard, tu ne sais plus pourquoi tu as choisi tel compromis.

Ta constitution de projet doit tenir dans une demi-page :

- **But business** : qui cibles-tu, et quel résultat doit changer ?
- **Contexte** : plateforme, stack, utilisateurs, contraintes.
- **Hypothèses** : ce qui est supposé vrai, et ce qui peut casser si c'est faux.
- **Règles non négociables** : sécurité, RGPD, budget, délais, priorités.
- **Recessions prises** : choix technique + raison explicite.
- **Non-objectifs** : ce qui n'est pas dans le périmètre, même si tentant.

Sans ce bloc, ta spec est belle, mais instable.

## La spec de feature : pas une poésie, un contrat

Ta spec doit être actionnable par un humain et un agent.

Inclue ces blocs :

1. **Problème et cas d'usage principal**
   - phrase utilisateur claire (“En tant que..., je veux..., pour pouvoir...”)
2. **Entrées / sorties**
   - données acceptées, formats, erreurs attendues.
3. **Règles métiers**
   - priorités, exclusions, limites fonctionnelles.
4. **Critères d'acceptation**
   - tests, comportement attendu, indicateurs observables.
5. **Non-objectifs**
   - ce que l'agent ne doit pas faire dans ce lot.

Tu évites ainsi les “j'ai compris un peu ce que tu voulais” qui coûtent plus cher qu'un refactor.

## Le cycle qui marche : Plan → Implémente → Vérifie

C'est la version légère, mais robuste.

### Plan

- Tu définis la constitution + la spec.
- Tu découpes en tâches de petite taille.
- Tu valides les cas limites avant de coder.

### Implémente

- Tu demandes uniquement les modifications qui servent la spec.
- Tu imposes : fichiers touchés, choix faits, écarts à la spec.
- Tu interdits les changements “sympas mais non demandés”.

### Vérifie

- Tu coches les critères d'acceptation un par un.
- Tu vérifies les erreurs et les cas refusés.
- Tu reclasser tout ce qui sort du périmètre en “v2”.

Ce cycle te donne une sortie plus prévisible avec moins de friction.

## Réduire la surcharge cognitive avec une spec stable

Tu bosses avec un agent, puis tu changes de session. Sans cadre, tu perds le fil.  
Avec une spec stable, tu reprends avec la même logique.

Pour ça, ajoute au brief :

- ce qui a été déjà testé ;
- ce qui est encore bloqué ;
- quel comportement doit rester inchangé ;
- l'ordre de priorité entre points de bug et évolution.

Ton cerveau arrête de porter 5 tickets mentaux en parallèle.

## Prompt prêt à réutiliser avec un agent

Utilise ce format quand tu lances une tâche :

```text
Contexte projet :
- Objectif : ...
- Contraintes : ...
- Périmètre actuel : ...

Constitution de projet (rappel) :
- Décision clé : ...
- Non-objectifs : ...

Spécification feature :
- Cas d'usage : ...
- Entrées/sorties : ...
- Règles métier : ...
- Critères d'acceptation : ...
- Risques connus : ...

Contrainte de sortie :
- Ne fais que les changements demandés.
- Liste chaque fichier modifié.
- Mentionne les écarts éventuels à la spec.
- Propose un plan de V2 pour les demandes hors périmètre.
```

Tu ne réduis pas la charge, tu supprimes l'aléatoire.

## Le test avant de valider

Avant de dire “go”, vérifie 5 points :

- Les objectifs sont en premier plan, pas les implémentations.
- Les cas limites sont écrits, pas implicites.
- Les erreurs ont des comportements définis.
- Les non-objectifs sont écrits en dur.
- L'acceptation contient une preuve.

Si un point manque, tu ne valides pas.

## Liens utiles pour aller plus loin

- [PRD](/strategies/documents/prd) pour cadrer le problème et la solution.
- [Cahier des charges](/strategies/documents/cahier-des-charges) pour cadrer les exigences côté prestataire/équipe. 
- [User stories](/strategies/documents/user-stories) pour convertir besoins et bénéfices utilisateur en actions testables.

Tu ne dois pas devenir spécialiste en process pour bosser proprement.  
Tu dois juste être strict sur la qualité de la spec.  
Le code suit ensuite, proprement.
