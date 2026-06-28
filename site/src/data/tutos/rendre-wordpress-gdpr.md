---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Rendre WordPress plus conforme au RGPD sans faire semblant
author: Diane
description: Mets WordPress au propre côté consentement, formulaires, cookies et données personnelles avec une approche réaliste du RGPD.
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

Dire qu’un site WordPress est “RGPD compliant” en cochant deux cases de plugin, c’est de la fiction. En revanche, tu peux rendre ton site beaucoup plus propre, transparent et défendable si tu travailles les bons points.

## Ce que WordPress gère déjà

WordPress intègre depuis longtemps des outils de confidentialité utiles :

- export des données personnelles ;
- effacement des données personnelles ;
- aide à la génération de la politique de confidentialité.

Ces fonctions existent dans le cœur de WordPress et peuvent aussi être étendues par les plugins. Sources : [WordPress privacy tools](https://wordpress.org/news/2018/05/wordpress-4-9-6-privacy-and-maintenance-release/), [Plugin Handbook](https://developer.wordpress.org/plugins/privacy/adding-the-personal-data-eraser-to-your-plugin/).

## Les vrais sujets à traiter

### 1. Les formulaires

Chaque formulaire doit répondre à trois questions :

- quelles données tu collectes ;
- pourquoi tu les collectes ;
- combien de temps tu les gardes.

Ajoute une mention claire. Pas une phrase juridique imbuvable.

### 2. Les cookies et scripts tiers

Analyse ce qui dépose réellement des cookies :

- analytics ;
- pixels publicitaires ;
- chat ;
- vidéos embarquées ;
- outils de personnalisation.

Ensuite, n’active pas tout par défaut. Le consentement doit être géré proprement.

### 3. Les services externes

Ton site WordPress n’est qu’une partie du problème.

Il faut aussi regarder :

- l’emailing ;
- l’hébergement ;
- les formulaires ;
- les outils de paiement ;
- les plugins qui envoient des données ailleurs.

### 4. Les demandes utilisateurs

Tu dois être capable de :

- exporter les données d’un utilisateur ;
- supprimer ou anonymiser ce qui doit l’être ;
- expliquer la procédure.

## Ce qu’un plugin peut faire, et ce qu’il ne fera pas à ta place

Un plugin RGPD peut aider à :

- afficher un bandeau de consentement ;
- bloquer certains scripts ;
- centraliser quelques réglages.

Mais il ne peut pas :

- choisir tes bases légales ;
- écrire une politique honnête à ta place ;
- auditer tout ton stack ;
- rendre magiquement conformes des outils mal branchés.

## Checklist minimale

- page de confidentialité à jour ;
- mentions claires sur les formulaires ;
- inventaire des cookies et services tiers ;
- consentement avant les scripts non essentiels ;
- procédure d’export et d’effacement testée ;
- plugins limités au strict nécessaire.

## Le bon état d’esprit

Le but n’est pas d’avoir un site “parfait juridiquement” dans un tuto de dix minutes.

Le but, c’est d’éviter le faux sentiment de conformité et de rendre ton site nettement plus propre, plus transparent et plus respectueux des données.
