---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Trouver Une Liste Liste D'Entreprise Ayant Publiée Une Offre D'Emploi
author: Diane
description: 'Découvre Comment Trouver Une Liste Liste D''Entreprise Ayant Publiée
  Une Offre D''Emploi : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

Je cherche à faire une séquence qui cible des entreprises ayant publié récemment une offre d’emploi

savez vous s’il existe des outils permettant d’obtenir ce genre de liste ?

En effet, chez Mantiks [](https://mantiks.io/)[https://mantiks.io/](https://mantiks.io/) 36  de [@alexandre-chirie](https://www.growthhacking.fr/u/alexandre-chirie) on est spécialisé sur trouver les boites suivant leurs offres d’emploi + trouver le contact du bon décideur : le tout automatisé en quelques clics

Voilà mon idée :

1 - faire une recherche par mot-clé sur des sites d’offres d’emploi, et filtrer les resultats selon l’ordre de date de publication

2 - avoir recours au web scraping (il existe des outils nocode et gratuits) pour obtenir les entreprises qui publient une annonce et la date de publication

et c’est fait !

alternatives :

- JobFeed répond a ta demande. Solution payante.
- tu peux aussi le faire sur [Pharow](https://pharow.com/), tu obtiendras la liste des sociétés qui ont des job ouverts sur WTTT ou Indeed avec le détail des poste
- possible aussi via Captaindata qui permet de scraper les offres d’emploi directement via Google (donc prend en compte toutes les plateformes de diffusion d’offre).
- nous l’avons développé en interne chez Stepward et on a une API dispo. On te développe une commande Slack et tu mets en query le jobtitle et la location.En termes de process on est sur : Google API search, N8N, Enrich Captain pour retrouver ta cible : Clvl, DRH ou Hiring Manager. Tu reçois un google sheet. Exemple avec la query : Business Developer : [Business Developer Bordeaux,*Lille,Lyon,Nantes,Paris,Rennes,Toulouse-Lancé - Google Spreadsheets 8](https://docs.google.com/spreadsheets/d/1CDMdK-pWty10vhNgcZYXBwSymbYx3dCR0DkZ9CwtXRU/edit?usp=sharing)