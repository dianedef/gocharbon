---
section: tutos
type: tuto
statut:
- backlog
_priorité: normal
imageNameKey: search-console
tags:
- Tutoriels
title: Installer et utiliser Google Search Console proprement
author: Diane
description: Configure Google Search Console, vérifie ton site, envoie le sitemap et apprends à lire les rapports vraiment utiles.
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

Google Search Console est le point de départ du SEO sérieux. Sans elle, tu publies, tu attends, et tu espères. Avec elle, tu sais ce que Google voit, ce qu’il indexe, ce qu’il ignore et quels mots-clés te rapportent déjà des impressions.

Selon la documentation officielle de Google, Search Console sert à comprendre comment Google explore, indexe et affiche ton site dans les résultats de recherche. Source : [Google Search Central](https://developers.google.com/search/docs/monitor-debug/search-console-start).

## Ce que tu vas vraiment suivre

- les pages indexées et non indexées ;
- les requêtes qui génèrent des impressions et des clics ;
- les problèmes techniques remontés par Google ;
- les sitemaps envoyés ;
- les opportunités d’optimisation quand une page a beaucoup d’impressions mais peu de clics.

## Étape 1 : ajoute la bonne propriété

Quand tu ajoutes ton site, Google te propose deux options :

- **Propriété Domaine** : couvre tout le domaine, y compris `www`, sous-domaines et variantes `http/https` ;
- **Préfixe d’URL** : couvre uniquement une URL précise.

Si tu peux modifier le DNS, prends la propriété **Domaine**. C’est plus propre et tu évites de te retrouver avec plusieurs propriétés incomplètes.

## Étape 2 : vérifie la propriété

La méthode la plus robuste reste le **TXT DNS**.

1. Copie la valeur donnée par Google.
2. Ouvre la zone DNS de ton domaine chez ton registrar ou ton hébergeur.
3. Ajoute un enregistrement `TXT`.
4. Attends quelques minutes, parfois plus.
5. Clique sur **Vérifier**.

Si tu ne gères pas le DNS, tu peux utiliser une balise HTML ou un plugin SEO WordPress. Mais si tu as la main sur le domaine, le DNS reste le meilleur choix.

## Étape 3 : envoie ton sitemap

Va dans **Sitemaps** et soumets l’URL correcte, par exemple :

- `https://tonsite.com/sitemap.xml`
- ou `https://tonsite.com/sitemap_index.xml` selon ton stack

Le rôle du sitemap n’est pas de “forcer” l’indexation. Il aide surtout Google à découvrir plus proprement tes URL importantes. Source : [Google Search Central - sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## Étape 4 : lis les bons rapports

Ne te noie pas dans l’outil. Commence par ces trois vues :

### Performance

Tu y vois :

- les requêtes ;
- les pages ;
- les clics ;
- les impressions ;
- le CTR ;
- la position moyenne.

Le plus utile au début : repérer les pages qui ont déjà des impressions mais un CTR faible. C’est souvent là que tu peux améliorer le titre, la meta description ou l’angle.

### Indexation des pages

C’est le rapport à consulter quand une page n’apparaît pas dans Google.

Tu y verras par exemple :

- page explorée mais non indexée ;
- page dupliquée ;
- page en `noindex` ;
- page bloquée.

Google rappelle d’ailleurs qu’une page bloquée par `robots.txt` peut empêcher Google de voir la directive `noindex`. Source : [Google Search Central - block indexing](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

### Inspection d’URL

Utilise-la quand tu veux vérifier une page précise :

- est-elle connue de Google ?
- est-elle indexable ?
- son canonique est-il correct ?
- peux-tu demander une nouvelle exploration ?

## Routine simple à suivre

Tu n’as pas besoin d’ouvrir Search Console tous les jours.

La bonne routine :

1. vérifie les alertes email ;
2. fais un point hebdo sur les pages qui montent et celles qui stagnent ;
3. après chaque gros changement de structure, contrôle le rapport d’indexation ;
4. après chaque nouvelle série d’articles, vérifie que le sitemap est propre.

## Les erreurs classiques

- créer la mauvaise propriété et suivre un périmètre incomplet ;
- oublier le sitemap ;
- paniquer sur chaque variation de position ;
- confondre impressions et trafic ;
- croire que “demander l’indexation” remplace un vrai travail SEO.

## Par quoi commencer aujourd’hui

Si ton site n’est pas encore branché :

1. ajoute la propriété Domaine ;
2. vérifie-la par DNS ;
3. soumets le sitemap ;
4. ouvre le rapport **Performances** ;
5. note tes 10 pages les plus visibles.

Tu auras déjà une base de travail bien plus sérieuse que 90 % des sites qui font du SEO “au feeling”.
