---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Extraire des leads depuis Google Maps sans produire une base inutilisable
author: Diane
description: Construis une base locale à partir de Google Maps avec une méthode propre, des champs utiles et un vrai travail de tri.
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

Google Maps peut servir à construire une base locale très utile. Mais si tu te contentes d’exporter des milliers de lignes sans tri, tu obtiens surtout un fichier sale.

## À quoi ça sert

Les cas d’usage les plus classiques :

- prospection locale ;
- veille concurrentielle ;
- étude de densité d’un marché ;
- enrichissement d’une base existante.

## Deux approches possibles

### API officielle

La Places API de Google permet de rechercher des lieux, récupérer des détails et travailler avec des `place_id`. Source : [Google Places API](https://developers.google.com/maps/documentation/places/web-service).

Avantages :

- plus propre ;
- plus stable ;
- meilleure intégration produit.

Limite :

- tu restes dans le cadre des données et usages prévus par Google.

### Outils d’extraction tiers

Ils vont plus vite pour certains workflows commerciaux, mais la qualité finale dépend ensuite :

- du dédoublonnage ;
- du tri ;
- de la vérification ;
- du respect des règles de prospection.

## Les champs à garder

Ne récupère pas tout “par principe”.

Garde surtout :

- nom ;
- catégorie ;
- adresse ;
- ville ;
- téléphone ;
- site ;
- source ;
- date de collecte.

## Ce qu’il faut faire après l’extraction

1. dédoublonner ;
2. filtrer par pertinence ;
3. enrichir si besoin ;
4. vérifier les contacts critiques ;
5. segmenter avant prospection.

Une base moyenne mais triée vaut mieux qu’un export énorme et sale.
