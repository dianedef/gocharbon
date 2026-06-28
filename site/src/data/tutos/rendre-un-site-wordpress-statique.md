---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Rendre un site WordPress statique pour gagner en vitesse
author: Diane
description: Transforme WordPress en site statique quand tu veux plus de performance, moins de surface d’attaque et moins de maintenance.
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

Passer un site WordPress en statique n’est pas une lubie de geek. C’est parfois la manière la plus simple d’obtenir :

- un site plus rapide ;
- moins de maintenance serveur ;
- moins de risques côté sécurité ;
- une diffusion CDN plus propre.

En revanche, ce n’est pas adapté à tous les projets.

## Quand ça a du sens

Le modèle statique marche bien si ton site est surtout :

- vitrine ;
- éditorial ;
- documentation ;
- landing pages ;
- ou contenu rarement mis à jour en direct.

Si ton site dépend fortement :

- d’un espace membre ;
- d’un panier dynamique ;
- de formulaires complexes ;
- ou de contenu personnalisé,

la bascule est plus délicate.

## Deux architectures possibles

### 1. WordPress comme back-office uniquement

Tu continues d’éditer dans WordPress, puis tu génères des pages statiques publiées ailleurs.

### 2. Migration vers un générateur statique

Tu utilises WordPress comme source temporaire ou tu quittes complètement WordPress pour un stack type Astro, Hugo ou autre.

## Ce qu’il faut vérifier avant de te lancer

- les formulaires fonctionnent-ils hors PHP natif ?
- les recherches internes sont-elles gérées ?
- les commentaires ou espaces membres sont-ils utiles ?
- les aperçus éditoriaux sont-ils nécessaires ?
- les URL et redirections seront-elles conservées ?

## Les gains attendus

Un site statique bien déployé :

- sert des fichiers plus vite ;
- supporte mieux les pics de trafic ;
- réduit la dépendance à une base SQL en production ;
- limite une grosse partie de la surface d’attaque WordPress publique.

## Les pièges classiques

- croire qu’un site statique est automatiquement bien conçu ;
- oublier les fonctionnalités dynamiques ;
- casser les formulaires ou les scripts marketing ;
- migrer sans plan de redirections.

## Plan d’action simple

1. liste les fonctionnalités réellement dynamiques ;
2. vérifie si elles peuvent être externalisées ;
3. teste une version statique sur une section du site ;
4. mesure la performance ;
5. décide ensuite si la bascule vaut vraiment le coup.

Le statique est une bonne option quand tu veux simplifier la prod. Pas quand tu veux juste suivre une mode.
