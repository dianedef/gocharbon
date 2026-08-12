---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Extraction Leads Google Maps
author: Diane
description: 'Découvre Extraction Leads Google Maps : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

scrapio Nous renvoyons tous les emails publics présents sur le site sur 1 niveau de profondeur, donc il est peu probable que d’autres outils puissent en renvoyer plus en utilisant la même méthode

[(101) [Tuto] Scraper 200 emails avec Google Maps & Phantombuster - YouTube](https://www.youtube.com/watch?v=-nSEDTkIvkQ)

[(104) La Nouvelle Façon de Scraper 150 Leads Google Maps/jour (avec PhantomBuster) - YouTube](https://www.youtube.com/watch?v=fM5jT0E0Ioo)

[(104) Google Maps Search Export - Turn Google Maps into your database - YouTube](https://www.youtube.com/watch?v=DLzYocbMGp8)

→ voici le lien d’une vidéo qui t’explique comment récupérer 200 adresses mail sur google map avec le [Phantom Google Map.](https://www.youtube.com/watch?v=-nSEDTkIvkQ)

Ensuite, vous pouvez exporter votre fichier en cliquant sur Exporter, [Scrap.io](http://Scrap.io) se met donc à scraper votre fichier, à noter que cela peut prendre du temps en fonction du nombre de résultats que vous avez.

À noter, que vous pouvez scraper que 5 fichiers à la fois, ce qui est déjà très bien.

À la fin de votre scraping, vous pouvez télécharger votre fichier en cliquant sur l’onglet Mes exports en haut de votre fenêtre.  Vos différents fichiers y apparaissent afin de les supprimer ou de les télécharger soient en Ficher CSV (.csv) ou en Fichier Excel (.xslx).

Vous avez donc à la fin un fichier propre d’extraction de données de vos futurs prospects.

# **5 meilleurs outils pour scraper Google Maps en 2023**

Monday, March 14, 2022

Google Maps est non seulement un site Web de carte à aider à trouver la location, mais aussi une base de données riche et précieuse où vous pouvez trouver de nombreuses informations commerciales. Ces données sont largement utilisées dans le commerce, par exemple, une entreprise de restauration peut décider où ouvrir un nouveau restaurant en analysant les données cartographiques et les concurrents à proximité. Beaucoup sont ceux qui commencent à récupérer les données à partir de Google Maps pour former une annuaire de niche ou pour génération de leads.

S'agissant le besoin croissant de données de Google Maps, il existe plusieurs méthodes pour **créer des crawlers Google Maps** capables de récupérer un nombre immense de données rapidement. Nous allons en introduire l'API officiel de Google Maps, Octoparse et ses modèles de scraping Google Maps, Webscraper, et deux façons de créer un Google Maps Crawler par progrommation.

Allons découvrir les méthodes suivantes et créer votre propre crawler pour obtenir les données dont vous avez besoin !

# **Google Maps - une base de données précieuse**

**Du point de vue de commerce**

Plus d'un million d'entreprises sont enregistrées sur Google Maps et les genres de commerce varient beaucoup : supermarché, coiffeur, restaurant, pharmacie, etc. Dans l'ère informatique d'Internet, les consommateurs ont l'habitude de consulter Google Maps pour se renseigner sur les commerces de choix, ainsi les établissement s'y rassemblent pour une visibilité, ou simplement dire, pour être vus par les clients cibles.

**Pourquoi Google Maps est super pour les commerces ?**

- Google Maps regroupe un nombre immense de commerces. Quel que soit l'industrie, vous pouvez y toujours acquérir des informations très utiles sur le marché général, sur les concurrents, etc.
- Les informations pour chaque commerce sont complètes : images sur les boutiques physiques, adresse, coordonnées géographiques, temps d'ouverture, site Web officiel, téléphone, e-mail, note et avis lassés par les clients, etc. En un mot, si on a Google Maps, on a tout.
- Les clients consultent d'habitude Google Maps avant de choisir un commerce, et donc le référencement de la page de profile devient un sujet critique pour les commerces s'ils veulent prospecter plus de clients.
- Les gens ont l'habitude de laisser des avis sur Google Maps, et ainsi les propriétaires des établissements peuvent comprendre la perception de leur marque.

**Comment en profiter pour les commerces ?**

Les informations de contact, les avis laissés, les données sur les entreprises... toutes ces données sont d'une grande valeur qui restent à découvrir. Nous ne donnons que quelques exemples pour en profiter.

**Génération de leads B2B** : créer une liste de clients potentiels. Par exemple, un vendeur de pièces d'automobile peut y chercher des garages.

**Etude de la concurrence** : analyser les commerces ou produits concurrentiels. Dans l'indutrie de restauration, on est intéressé par le genre de nourriture fournie par les autres bistrots, le prix fixé par les concurrents, le menu, l'environnement et la décoration, le nombre de restautants à proximité, etc.

**Découverte du nouveau marché** : étudier les commerces similaires, les clients locaux et d'autres facteurs relatifs avant de décider un emplacement pour votre établissement.

**Analyse des avis clients** : extraire les commentaires positifs ou négatifs pour savoir comment s'améliorer.

......

Vous pouvez faire tout ce que vous voulez et le seul limit est votre imagination.

Cependant, toute analyse approfondie est basée sur une quantité immense de données. Il s'agit ici de notre sujet aujourd'hui : **les 5 meilleurs outils pour scraper Google Maps, pour récupérer des données rapidement et à grande échelle**.

# **5 outils pour scraper Google Maps**

# **1. [Google API](https://developers.google.com/maps/documentation/places/web-service/overview)**

Oui, Google Maps Platform fournit Places API pour les développeurs et c'est l'un des meilleurs moyens de collecter des données à partir de Google Maps ! Les développeurs peuvent obtenir des informations mises à jour sur des millions de lieux à l'aide de requêtes HTTP. Avant d'utiliser Places API, vous devez configurer un compte et créer votre propre clé API.

Néanmoins, les champs de données fournis sont limités par l'API Places, et vous risquez donc de ne pas obtenir toutes les données dont vous avez besoin.

La Places API **n'est pas gratuite**. Un aperçu rapide :

1. les champs de données relevant de la **catégorie "Basic"** n'entraîne pas de frais supplémentaire, ils sont l'adresse, l'état de business, l'icône, le nom, fermé pour l'instant, l'url, le photo, le type, etc ;
    
2. pour **les données de contacts** comme temps d'ouverture, numéro de téléphone, site Web, il faut payer 0.003 USD/requête s'il s'agit de moins de 10 mille, 0.0024 USD/requête s'il s'agit de plus de 10 mille et en même temps moins de 50 mille. S'il s'agit de plus de 50 mille, il faut contacter le service de ventes ;
    
3. pour **les données d'atmosphère** telles que niveau de prix, évaluation, avis clients, le plan de tarification est comme le suivant
    


L'explication dernière n'est qu'un aperçu rapide. Si vous êtes curieux de savoir le prix pour les autres requêtes et le tarif complet, veuillez cliquer dessus [le tarif de Google Maps API](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing).

# **2. [Octoparse](https://www.octoparse.fr/)**

Quand Google Maps API est surtout destiné aux développeurs, [Octoparse](https://www.octoparse.fr/download/mac) est un outil de Web scraping **gratuit et accessible à tous**, y compris les non-programmeurs. En bénéficiant d'un tutoriel riche et complet, on peut créer des crawlers par lui-même pour récupérer des données sans comprendre le python, Javascript, Json ni écrire un script scraping. Octoparse, qui est d'une haute fiabilité, est capable de gérer une structure complexe à 99% des sites Web et de vous permet de récupérer tous genres de données.

Octoparse introduit dans leur service le Cloud et donc les tâches de web scraping peuvent s'exécuter localement, ou sur le Cloud. Il y a trois choix pour scraper Google Maps avec Octoparse : créer un crawler à partir de zéro avec le mode avancé, combiner [l'auto-détection](https://www.octoparse.fr/octoparse-84/lecon-1-extraire-les-donnees-avec-le-nouvel-algorithme-auto-detection) (rendant la création de crawler plus facile), utiliser des modèles de web scraping construits par l'équipe technique. Quelques clics sont suffisants pour que vous soyez en mesure de transformer les sites Web en données structurées précieuses. Il faut entrer simplement des mots clés ou une URL avant que les modèles commenceront à récupérer automatiquement les données.

Au total, Octoparse propose quatre modèles :

**[URL] Store Info Google Maps** - entrer URL cible, récupérer les champs données : URL de la page, titre, nombre d'avis, évalution, adresse, site Web, numéro de téléphone, temps d'ouverture, url de la page de détail, latitude, longitude, catégorie, lien des images, description, niveau de prix, état actuel, plus-code-url, plus-code

**[Keywords] Store Info Google Maps** - entrer les mots-clés, récupérer les champs de données : Ibid

**Store Reviews Google Maps**

**Lead generation Google Maps**

Si vous voulez encore récupérer les emails que Google Maps n'offre pas, vous pouvez opter également pour **Email Scraper**, un autre modèle totalement gratuit fourni par Octoparse. Je vous laisse découvrir par vous-mêmes. Installer Octoparse et consulter les modèles.

Attention :  le frais est calculé par le nombre de lignes de données. **Chaque ligne de donnée coûte 0.0002$**, qui est inférieur aux autres services disponibles sur le marché.

Si vous rencontrez des problèmes, n'hésitez pas à contacter le support.

Le suivant est un vidéo pour expliquer étape par étape comment scraper les leads à partir de Google Maps.


# **3. Webscraper**

WebScraper est un autre outil de web scraping qui est capable de satisfaire vos besoins de scraper Google Maps. Par rapport à Octoparse, son avantage résulte dans le fait qu'il s'agit d'une extension de navigateur et il suffit d'installer [l'extension WebScraper](https://chrome.google.com/webstore/detail/web-scraper/jnhgnonknehpejjnehehllkliplmbmhn) dans votre Chrome et vous pouvez commencer à l'utiliser. A l'instar de Octoparse, c'est aussi un outil de type pointer-cliquer, les utilisateurs n'ont pas besoin d'écrire des codes pour récupérer des données.

Cependant, l'extension n'est pas si puissante lors de la gestion de structures complexes de pages Web ou de la récupération de données lourdes.

# **4. Framework Python ou Bibliothèque**

Vous pouvez utiliser de puissants bibliothèques Python tels que [Scrapy](https://scrapy.org/) et [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) pour personnaliser votre crawler et gratter exactement ce que vous voulez. Précisément, Scrapy est un framework qui est utilisé pour télécharger, nettoyer, stocker des données à partir des pages Web et qui contient beaucoup de code intégré pour vous faire gagner du temps tandis que BeautifulSoup est une bibliothèque qui aide les programmeurs à extraire rapidement les données des pages Web. Grâce à ces frameworks et bibliothèques, vous devez écrire vous-même des codes pour construire le robot capable de tout gérer.

Le seul inconvénient est que les programmeurs (ou les freelancers techniques) sont les seuls à faire le web scraping de cette manière. Bien que d'accès libre, ce n'est pas à la portée de tout le monde.

# **5. Projets Open Source sur GitHub**

On peut trouver de bons projets open source créés par d'autres d'exploration de Google Maps sur GitHub, comme [ce projet](https://github.com/gaspa93/googlemaps-scraper). Même si vous n'avez pas besoin d'écrire la plupart des codes vous-même, vous devez toujours connaître les rudiments et écrire quelques codes pour exécuter le script, ce qui rend la tâche difficile pour ceux qui connaissent peu le codage. La quantité et la qualité de l'ensemble de données dépendent fortement du projet open source sur GitHub, qui manque de maintenance. En outre, la sortie ne peut être qu'un fichier .txt, et donc si vous voulez une grande échelle de données, ce n'est peut-être pas le meilleur moyen pour vous d'obtenir des données.

# **2. [ParseHub](https://www.parsehub.com/)**

Parsehub est un web scraper de breau qu'on utilise pour extraire des données à partir de sites sans nécessiter aucune connaissance du codage. Cet outil offre également une version gratuite mais il y a des limites : vous ne pouvez configurer que cinq tâches gratuitement.

**Des points clés**

- Pouvoir scraper les pags qui utilisent des technologies comme AJAX, JavaScript, les cookies, etc.
- Pouvoir être utilisé sur Windows, Mac OS X et Linux. Le fournisseur propose également une extension de navigateur pour faire un scraping instantané
- Tutoriels riches

# **3. [Import.io](https://www.import.io/)**

[Import.io](http://Import.io) est un logiciel SaaS d'intégration de données Web. Il fournit un environnement visuel permettant aux utilisateurs finaux de concevoir et de personnaliser les flux de travail pour la collecte de données. Et une intégration avec d'autres systèmes est totalement autorisée sur cette plateforme. Il n'est pas trop de dire que cet outil couvre l'ensemble du cycle de vie de l'extraction de données à l'analyse.

**Des points clés**

- S'adaptert surtout au besoin des données à grande échelle dans l'industrie d'e-commerce
- Pouvoir capturer des photos et des PDF dans un format réalisable
- Intégration avec des outils d'analyse de données
- Pour le prix, il faut consulter le service

# **4. [ScrapingBot](https://www.scraping-bot.io/)**

ScrapingBot est un outil formidable pour les développeurs web qui ont besoin de récupérer des données à partir d'une URL. Il fonctionne particulièrement bien sur les pages de produits pour collecter les données comme image, titre du produit, prix du produit, description du produit, stock, frais de livraison, etc. C'est un bon choix pour ceux qui veulent collecter des données commerciales ou simplement d'agréger des données de produits.

**Des points clés**

- Proposer plusieurs APIs spécialisées dans des domaines comme l'immobilier, les réseaux sociaux, etc.
- Répondre aux besoins de scraping en masse
- Prix : Test gratuit avec 100 crédits par mois. Vous pouvez tester en direct en collant une URL et obtenir les résultats immédiatement pour voir si cela fonctionne.

# **Extensions de navigateur**

# **1. [Data Sraper (Chrome)](https://chrome.google.com/webstore/detail/data-scraper-easy-web-scr/nndknepjnldbdbepjfgmncbggmopgden?hl=en-US)**

Data Scraper peut extraire des données de tableaux et des données mises dans une liste typique depuis une seule page Web. Un plan gratuit est accessible, avec lequel, vous ne pouvez que récupérer jusqu'à 500 pages par mois, satisfaisant le besoin d'une faible quantité de données. Le plan payant offre plus de fonctionnalités telles que l'API et les proxys anonymes. Vous pouvez récupérer plus rapidement un grand volume de données en temps réel.

# **2. [Webscraper](https://webscraper.io/)**

Web Scraper propose une extension Chrome, avec lequel vous pouvez créer un sitemap (plan) pour programmer comment le robot parcourt le site Web cible et quelles sont les données à extraire. Un service Cloud est disponible avec Webscraper et attention, il s'agit là d'un service payant. Il convient plutôt le besoin d'extraire un grand nombre de données et d'exécuter plusieurs tâches de scraping simultanément. Vous pouvez exporter les données extraites au format CSV ou stocker les données dans Couch DB.

# **3. [Scraper (Chrome)](https://chrome.google.com/webstore/detail/scraper/mbigbapnjcgaffohmbkdlecaccepngjd?hl=en)**

Scraper est un autre web scraper facile à utiliser. Avec cet outil, on peut facilement extraire des données d'une table en ligne et télécharger le résultat vers Google Docs.

Sélectionner simplement certains textes dans un tableau ou une liste, cliquer droit sur le texte sélectionné et choisir «Scrape Similar» dans le menu du navigateur. Ensuite, vous obtiendrez les données et vous pouvez extraire d'autres contenus en ajoutant de nouvelles colonnes à l'aide de XPath ou JQuery. Cet outil est destiné aux utilisateurs qui savent comment écrire XPath.


# **Web Application**

# **1. [Dexi.io](https://dexi.io/)**

[Dexi.io](http://Dexi.io) est destiné aux utilisateurs avancés qui ont de bonnes compétences en programmation. Il dispose de trois types de robots que vous pouvez utiliser pour créer une tâche de scraping : Extractor, Crawler et Pipes. Il fournit divers outils qui vous aident à extraire les données plus précisément.

Pour les personnes n'ayant aucune compétence en programmation, vous devrez peut-être prendre un certain temps pour vous y habituer avant de créer un robot de Web scraping.

Le logiciel gratuit fournit des serveurs proxy Web anonymes pour le Web scraping. Les données extraites seront hébergées sur les serveurs de [Dexi.io](http://Dexi.io) avant d'être archivées pendant deux semaines , ou vous pouvez directement exporter les données extraites vers des fichiers JSON ou CSV. Il propose des services payants pour la collecte de données en temps réel.

# **2. [Webhose.io](https://webhose.io/)**

[Webhose.io](http://Webhose.io) vous permet d'obtenir des données en temps réel en récupérant des sources en ligne du monde entier dans divers formats propres. Vous pouvez même récupérer des informations sur le Web sombre. Ce web scraper vous permet de récupérer des données dans de nombreuses langues différentes à l'aide de plusieurs filtres et d'exporter des données récupérées aux formats XML, JSON et RSS.

Le logiciel gratuit propose un plan d'abonnement gratuit pour vous permettre de faire 1000 requêtes HTTP par mois et des plans d'abonnement payants pour faire plus de requêtes HTTP par mois en fonction de vos besoins de Web scraping.


# **Le Web Scraping accessible à tous**

# Scraper rapidement des données web sans coder.Transformer les pages Web en feuilles de calcul structurées en quelques clics

Regarder la démo[Tester gratuitement](https://www.octoparse.fr/subscribe/trial?plan=std&ref=homepage)

## [**Extraire les données Web](https://www.octoparse.fr/DataExtraction) en 3 étapes**

### **Pointez, cliquez et extrayez. Tout cela sans une seule ligne de code!**

- **Étape 1Étape 2Étape 3**
    
    Saisissez l'URL du site Web dont vous souhaitez extraire les données
    
    Cliquez sur les données cibles pour extraire
    
    Exécutez l'extraction et récupérez les données
    

```
!<https://www.octoparse.fr/images/home/Macbook.png>

!<https://www.octoparse.fr/images/home/gif-1.gif>
```

# **Fonctionnalités Avancées [de](https://www.octoparse.fr/DataCrawler) Web scraping**

Tout ce dont vous avez besoin pour automatiser votre [Web scraping](https://www.octoparse.fr/DataCrawler)


# **Facile à utiliser**

Scraper toutes les données simplement en cliquant.Pas une seule ligne de code n'est nécessaire.


# **Traiter tous les sites internet**

Scraper les sites Web avec un défilement infini,la connexion,une liste déroulante, AJAX...


# **Télécharger les résultats**

Télécharger les données extraites aux formats CSV,Excel, API, ou les enregistrer dans les bases de données.


# **Services Cloud**

Scraper et accéder aux données sur Octoparse Cloud Platform 24/7.


# **Planification du Scraping**

Planifier vos tâches pour scraper à n'importe quelmoment, horaire, quotidien, ou hebdomadaire, etc


# **Rotation IP**

Rotation des adresses IP automatiquepour éviter tout blocage de votre IP.

# **Ce que nous pouvons faire**

```
!<https://www.octoparse.fr/images/home/img_home_1.png>
```

- **Créer [des Web Crawlers aisément](https://www.octoparse.fr/DataCrawler)**[S'inscrire](https://www.octoparse.fr/signup)
    
    L'interface " pointer-cliquer " - Toute personne pouvant naviguer sur internet est capable de scraper.Aucun codage n'est nécessaire.
    
    Scraper les données de n'importe quel site Web dynamique - défilement infini, listes déroulantes, authentification de connexion, AJAX...
    
    Scraper des pages illimitées - [Explorer et scraper](https://www.octoparse.fr/DataCrawler) gratuitement des pages Web illimitées.
    
- **Octoparse Services Cloud**[Acheter Maintenant](https://www.octoparse.fr/pricing)
    
    Plateforme Cloud - Exécuter plusieurs extractions simultanément 24/7 avec une vitesse de scraping plus rapide.
    
    Planification du Scraping - Planifier les tâches pour extraire des données dans le Cloud à tout moment et à n'importe quelle fréquence.
    
    Rotation des adresses IP automatique - Le scraping anonyme minimise le risque d'être tracé et d'être bloqué.
    

```
!<https://www.octoparse.fr/images/home/img_home_2_release.jpg>
```

```
!<https://www.octoparse.fr/images/home/img_home_3.png>
```

- **Services de données professionnels**Nous vous fournissons des services professionnels de scraping de données. Faites nous part de vos besoins.Notre équipe d'experts en data vous rencontrera pour comprendre vos besoins en matière de web crawling et de traitement de données.Économisez de l'argent et du temps en recrutant des experts en Web scraping.[Service de Scraping de Données](https://dataservice.octoparse.com/fr/data-service)

# **Exporter les résultats de recherche de Google Maps vers Excel**

Thursday, February 02, 2023

Google Maps est une très bonne source pour trouver des leads et des contacts commerciaux. Comme des données sur toutes les entreprises autour du monde sont disponibles dans Google Maps, c'est l'une des ressources incontournables si vous recherchez des entreprises locales et souhaitez obtenir leurs données.

Alors, est-il possible d’extraire ces données ?

La réponse à cette question est "OUI". Vous pouvez extraire les résultats de recherche de Google Maps et exporter toutes les informations commerciales dans une feuille Excel ou un fichier CSV. Il existe de nombreux [crawlers de Google Maps](https://www.octoparse.fr/blog/5-meilleurs-crawlers-google-maps-en-2020) qui peuvent aider à obtenir ces données, par exemple Google API lui-même. Mais de toute façon, chaque crawler a ses avantages et ses inconvénients. Dans cet article de blog, j'ai l'intention de vous démonstrer la meilleure méthode pour extraction de données Google Maps - c'est-à-dire utiliser [**Octoparse**](https://www.octoparse.fr/) qui offre une solution idéale : aucun codage, capable d'extraire tous les champs de données, rapide, pas du tout cher (par rapport à d'autres produits similaires). Sans plus attendre, laissez-moi vous montrer **quelles données nous pouvons extraire avec Octoparse et à quel degré est-il facile et rapide d'exporter les résultats de recherche de Google Maps**.

**Table de matières**

- [Quelles données Google Maps pouvons-nous extraire ?](https://www.octoparse.fr/blog/exporter-les-resultats-de-recherche-de-google-maps-vers-excel#div1)
- [Le scraping de Google Maps est-il légal ?](https://www.octoparse.fr/blog/exporter-les-resultats-de-recherche-de-google-maps-vers-excel#div2)
- [Comment extraire les résultats de recherche de Google Maps vers Excel ou CSV ?](https://www.octoparse.fr/blog/exporter-les-resultats-de-recherche-de-google-maps-vers-excel#div3)

# Quelles données Google Maps pouvons-nous extraire ?

En tant qu'un des outils cartographiques les plus puissants du Web, Google Maps réunit des entreprises, des restaurants, des magasins, des hôtels, etc. C'est une ressource précieuse pour ceux qui souhaitent se faire une idée sur une région, une industrie ou une entreprise. Bien sûr, pas mal d'utilisateurs récoltent ces données pour génération de leads puisqu'on peut obtenir toutes les informations commerciales sur une entreprise, y compris le nom, l'évaluation, les avis clients, l'adresse (les [coordonnées géographiques](https://www.octoparse.fr/blog/comment-extraire-les-coordonnees-de-google-maps) exactes sont incluses), le temps d'ouverture et de fermeture, les numéros de téléphone, les sites web, les codes postaux et d'autres détails sur l'entreprise.

Ces données apporteront une grande valeur aux spécialistes du marketing digital et aux fournisseurs de services numériques qui peuvent les utiliser pour approcher les business et promouvoir leurs services. Pour les équipes de ventes et de marketing, c'est l'un des moyens les plus efficaces de générer des prospects et d'atteindre un plus grand nombre de clients. Ceux qui recherchent les meilleurs endroits ou business dans leur région locale peuvent également y fouiller de la valeur.

Devant autant de données, quelles données Google Maps pouvons-nous extraire ?

**Presque toutes les données avec Octoparse !** A part les données présentées sur des pages web, vous pouvez encore [télécharger automatiquement les images sur votre ordinateur](https://www.octoparse.fr/blog/4-facons-de-gratter-des-images-a-partir-de-pages-web-ou-de-sites-web) tout en enregistrant les URLs.

Google Maps propose également une API permettant aux utilisateurs d'accéder à ces données. Selon les champs, ces données sont divisées en trois catégories, données de base, données de contact et données d'atmosphère. Le tarif varie avec les genres de données. Si vous y êtes intéressé, consultez [ce lien](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing?hl=fr) pour savoir davantage. Et j'ose vous dire que la solution d'Octoparse semble plus bon marché.

# Le scraping de Google Maps est-il légal ?

Fondamentalement, Google Maps décourage le scraping et ne permet pas le scraping de son contenu pour une utilisation en dehors du service Google Maps, selon les [conditions générales de Google Maps](https://cloud.google.com/maps-platform/terms). Cependant, le scraping des données publiques à partir de tout site, y compris Google Maps, est tout à fait légal car cela ne viole aucun droit à la privacité de Google Maps.

Par conséquent, si vous scrapez simplement les informations qui sont accessibles au public à partir de Google Maps, il est légal. Mais cela dépend aussi de la façon et du cas que vous utilisez ces données publiques.

# Comment extraire les résultats de recherche de Google Maps vers Excel ou CSV ?

Il existe plusieurs façons d'extraire les résultats d'une recherche de Google Maps. Vous pouvez utiliser le framework Python pour créer un scraper, profiter de différents projets open source sur GitHub. Toutefois, si vous n'avez aucune connaissance en matière de codage, le meilleur choix est d'utiliser un outil de scraping **nocode** - Octoparse.

Octoparse permet d'extraire des données de n'importe quel site web, ayant pour but de rendre le web scraping accessible à tous. Avec cet outil, le processus d'extraction des données est plus facile et plus rapide sans avoir à écrire de codes. Des fonctions avancées telles que Xpath, service Cloud, rotation IP, solveur de Captcha, API et d'autres sont développées pour s'assurer que le scraping est assez vite, que les données sont assez exactes et précises. Après que l'extraction est finie, vous pouvez télécharger les données dans Excel, CSV, ou les exporter vers d'autres systèmes via API.

Octoparse propose plusieurs choix pour effectuer le scraping : utiliser des modèles pré-construits (gratuits ou payants), configurer une tâche par lui-même tout en profitant de la fonction d'auto-détection. Les utilisateurs peuvent en choisissent un selon leur besoin.

Ici, je vais montrer comment réaliser une extraction de données Google Maps en ces deux méthodes.

# **Extraire les données Google Maps en masse très rapidement**

Tout d'abord, on voit comment extraire les données Google Maps avec [les modèles pré-construits](https://www.octoparse.fr/blog/modele-de-web-scraping), surtout quand les modèles sur Google Maps sont les modèles les plus utilisés selon les statistiques. L'utilisation de modèles est plus facile que vous le pensez. Tout en trois étapes :

1. Chercher par mot-clé ou par catégorie le modèle qui peut satisfaire votre besoin.
    
2. Entrer un ou deux paramètres selon les instructions.
    
3. Lancer le scraping et exporter les données.
    

Au total, Octoparse propose dix modèles à propos de Google Maps, parmi lesquels :

**Listing page by keyword_Google Maps - gratuit, accessible aux utilisateurs gratuits**

Les paramètres à entrer : mots-clé

Les champs de données à extraire : nom, rating, nombre de commentaires, fourchette de prix, catégorie, adresse, lattitude, longitude, état actuel, état suivant, téléphone, étiquette, URL de la page de détail

**Store details by keyword_Google Maps - $0.2/1000 lignes, réservé aux abonnés payants**

Les paramètres à entrer : mot-clé, nombre de page à parcourir

Les champs de données à extraire : nom, rating, nombre de commentaires, site officiel, téléphone, temps d'ouverture, URL de la page, lattitude, longitude, catégorie, liens des images, fourchette de prix

**Listing page by URL_Google Maps - gratuit, accessible aux utilisateurs gratuits**

Les paramètres à entrer : URL de la page des résultats de recherche

Les champs de données à extraire : nom, rating, nombre de commentaires, fourchette de prix, catégorie, adresse, lattitude, longitude, état actuel, état suivant, téléphone, étiquette, URL de la page de détail

**Store reviews_Google Maps - gratuit, accessible aux utilisateurs gratuits**

Les paramètres à entrer : URL de la page de détail d'un magasin

Les champs de données à extraire : nom, catégorie, rating, nombre de commentaires, adresse, commenteur, page du commenteur, commentaire, nombre de links

**Store details by URL_Google Maps - $0.2/1000 lignes, réservé aux abonnés payants**

Les paramètres à entrer : URL de la page de détail d'un magasin

Les champs de données à extraire : mot-clé, URL de la page, titre, nombre de commentaires, rating, adresse, site, téléphone, temps d'ouverture, lattitude, longitude, catégorie, liens des images, description, fourchette de prix, plus code

On s'y arrête. Pour le reste, je vous laisse découvrir vous-même.

Bien que une petite partie des modèles soient payants, le tarif est inférieur aux autres services disponibles sur le marché. Surtout avec les modèles premium, on peut obtenir en masse des données très rapidement. Il suffit aux utilisateurs d'entrer un ou deux paramètres pour que l'extraction s'exécute. Les utilisateurs premium peuvent également profiter du service Cloud qui permet d'une extraction programmée et d'une extraction 7/24 sans aucune veille humaine.


258 linges de données en 150 secondes

# **Extraire les données Google Maps sans coder gratuitement**

Si vous souhaitez personnaliser le scraping ou récupérer les résultats d’une recherche Google gratuitement, vous pouvez essayer de configurer une tâche de scraping vous-même. Ne vous inquiétez pas si vous êtes débutant au scraping, la fonction d'auto-détection va vous aider à faciliter tout le travail, et de plus, aucun code n'est requis.

Regardez le guide vidéo ci-dessous ou suivez les étapes simples données.

Le suivant donne des étapes pour extraire les résultats de Google Maps vers Excel sans codage et avant tout, [cliquer pour devenir un utilisateur Octoparse](https://identity.octoparse.com/signUp?lang=fr-FR&returnUrl=https%3A%2F%2Fwww.octoparse.fr%2Faccount%2FloginCallback%3FreturnUrl%3D%2Fusersurvey%3Flang%3Dfr-FR%26from%3Dbazhuayu%26origin%3Dfr%26language%3Dfr-FR%26client_id%3DOctoparse%26registry_redirectUri%3D) !

**Étape 1 :** Faites une recherche par mots-clé dans Google Maps et puis les collez dans Octoparse

**Étape 2 :** Lancez l'auto-détection et puis personnalisez le workflow

Créez un workflow après l’autodétection, vous pouvez prévisualiser les champs de données que vous obtiendrez. Vous pouvez apporter des modifications en suivant le panneau de Conseils qui s'affiche si nécessaire.

**Étape 3 :** Extraire les résultats d’une recherche Google Maps vers Excel

Après avoir vérifié tous les champs de données, cliquez sur le bouton Exécuter pour lancer le processus. Une fois le processus terminé, vous pouvez télécharger les données extraites au format Excel ou à tout autre format.

# **Pour compléter, obtenir les emails des entreprises avec email scraper**

Vous l'avez découvert sûrement qu'il n'y a pas d'email dans Google Maps. Mais l'email constitue un élément important dans la génération de leads. Pour cela, Octoparse a développé un autre modèle utile :

**Email & social media links - gratuit, accessible aux utilisateurs gratuits**

Ce modèle utilise [l'expression régulière](https://www.octoparse.fr/blog/utilisation-dune-expression-reguliere-pour-faire-correspondre-au-html) pour repérer les données désirées dans le code source avant de les extraire. Grâce à ce modèle, les utilisateurs peuvent récupérer les **adresses d'email** et les **liens vers les profils des réseaux sociaux**, qu'il s'agisse de Linkedin, Twitter, Facebook, Instagram, Youtube, et pour tout cela, il suffit d'entrer une liste d'URLs (jusque 1 million en une fois).

Jusque maintenant, je crois que vous avez appris comment récupérer et exporter facilement les résultats de Google Maps avec Octoparse. Ne vous limitez pas à cela, et laissez le scraping faciliter davantage votre travail.
# **Extraire les données de Google Maps**

Générer des leads locaux en illimité

40% affiliate program

[https://scrap.id/s/ZWZ](https://scrap.id/s/ZWZ)

## Get Infinite leads for $49/month

Yes, you read it correctly. [Scrap.io](http://Scrap.io) offers you unlimited leads for $49 per month. You can search any activity in any city of the world, and download as many leads as you want. Still not convinced? We offer a 7 days free trial with 1000 leads, and you can cancel anytime.


## Scraping in real time

No more bad data! [Scrap.io](http://Scrap.io) isn't an old database scraped months ago and filled with obsolete and invalid data.

All extractions are done in real time from Google Maps, and you will always download up-to-date and valid data.


## GDPR compliant

We only offer professional and publicly available data on the internet. The US and European laws authorise you to download and exploit these data for commercial purpose.

We keep track of every email, every phone number and on which page it was found.

- outreach
    
    - [Contact - Sept Médical - matériel médical d'occasion et reconditionné](https://www.septmedicale.com/node/146/done?sid=10991&token=d70432bb331da7a855738018cde77c6f) 25/03/22 12h
    
    Bonjour Septmédical,
    
    Vous semblez être une grande entreprise avec de nombreuses références !
    
    Comment faîtes-vous l'acquisition de nouveaux clients ? Avez vous d'autre cannaux de génération de lead que le référencement ? Je propose une solution de contact d'établissements médicaux localisés à partir des informations présentes sur Google Maps, et je cherche à en savoir plus sur vos pratiques commerciales pour pouvoir mieux vous servir, trouveriez-vous un intérêt à obtenir un fichier client des cabinet d'opthalmologie ou d'une autre spécialisation, à Nîmes ou aux alentours, ou dans une autre ville en France ou à l'étranger ? Vous pourriez ensuite prendre contact à grande échelle pour leur proposer votre matériel. Avez vous déjà ce genre de procesus de vente mis en place ?
    
    Bien à vous, Excellente journée, Diane
    

Bien que démarrer une entreprise n'ait jamais été aussi facile, atteindre les clients n'a jamais été aussi difficile. Les canaux traditionnels d'acquisition de clients sont saturés, ce qui rend difficile leur retour sur investissement.

Aujourd’hui je vais vous montrer comment récupérer les données d’entreprises présentes sur Google Maps.

C’est une stratégies d'acquisition client non conventionnelle, mais extrêmement efficace, puisque vous pouvez cibler par secteurs d’activité et choisir géographiquement les prospects les plus proches de vous, pour éventuellement les rencontrer.

Pour extraire des données propres et complètes nous utiliserons [Scrap.io](http://Scrap.io).

- [Scrap.io](http://Scrap.io) c'est :
    
    - Un scraping Google Maps par _ville_, _département_, _région_ ou même _pays_ (**!**)
    - Un nombre **impressionnant** _d'informations récupérées_ pour chaque fiche (adresse complète, téléphone, note sur google maps, heures d'ouverture, affluence, emails, réseaux sociaux, balises meta du site, technologies du site, etc.)
    - Une vitesse de scraping améliorée qui permet d'obtenir des centaines de leads en quelques minutes
    - Des fichiers d'export sur _plusieurs formats_ (CSV et Excel)
    - Une API qui répond en _moins de 3 secondes_ pour brancher le scrapeur Google Maps à votre application et **extraire des données en temps réel**.
    
    Oui, vous l'avez lu correctement. [Scrap.io](http://scrap.io/) vous offre des prospects illimités pour 49 $ par mois. Vous pouvez rechercher n'importe quelle activité dans n'importe quelle ville du monde et télécharger autant de pistes que vous le souhaitez. Toujours pas convaincu ? Nous offrons un essai gratuit de 7 jours avec 1000 prospects, et vous pouvez annuler à tout moment.
    
    ## Scraper en temps réel
    
    Finies les mauvaises données ! [Scrap.io](http://scrap.io/) n'est pas une ancienne base de données supprimée il y a des mois et remplie de données obsolètes et invalides.
    
    Toutes les extractions se font en temps réel depuis Google Maps, et vous téléchargerez toujours des données à jour et valides.
    
    ## Conforme au RGPD
    
    Nous proposons uniquement des données professionnelles et accessibles au public sur Internet. Les lois américaines et européennes vous autorisent à télécharger et exploiter ces données à des fins commerciales.
    
    Nous gardons une trace de chaque e-mail, de chaque numéro de téléphone et sur quelle page il a été trouvé.
    
    ## S**ystème d'affiliation** avec une interface de gestion complète et de suivi des commissions.
    
    Vous êtes rémunéré à **40% de tous les paiements** effectués par les utilisateurs qui s'inscrivent avec votre lien.
    
    Ce que ça veut dire:- Si un visiteur s'inscrit avec votre lien, il vous est assigné pour toujours.- Vous gagnez **40% de tout ce qu'il paye sur l'application**, demain ou dans 10 ans.- Nous gérons les relances par email, les promotions marketing, le support client, etc.- Nous payons les serveurs de scraping, les développements supplémentaires, les services de support et d'emailing, etc.
    
    Vous n'avez **rien à faire**, et nous vous redistribuons presque la moitié des revenus.
    
    Par exemple:
    
    - Si vous amenez 10 clients à 49€/mois,vous touchez: (10 x 49) x 40% = **196€/mois**
    - Si vous amenez 15 clients à 49€/mois, 10 clients à 99€/mois et 5 clients à 199€/mois,vous touchez: (15 x [49) + (10](http://tracking.linklead.co/tracking/click?d=KnEDKwEelBbgu_iokRgtGM3mF-fvGDT3_7CrL-PTR_Di1u9aYCdoT27G2BwTSnnFGk50LDlHc8j9zo-Pap3y_mCauQ3etWusyQiCE1tXUTuY5VlXtfnew-QULn_TItf3CQEehhMdydhUS9qftS9tI8CqG9xk5JWrQ64TmL4-I4ip3HtzdrMJ47JvG3GXA2lZBvTl4HZYxPLT5lEwTVscRQGnesN-Bp-Z7TrnBVIqSagYOXBiVywmJYhRMW_ZiCMNOiMX0Ut-f2x6JQX5F8Was9Q1) x [99) + (5](http://tracking.linklead.co/tracking/click?d=KnEDKwEelBbgu_iokRgtGM3mF-fvGDT3_7CrL-PTR_Di1u9aYCdoT27G2BwTSnnFGk50LDlHc8j9zo-Pap3y_mCauQ3etWusyQiCE1tXUTvXShaWr_o7AOXkOSj2gd6J4zk8K-jvrWpBkNzpq1W77g3TcooPeIHseHdpRNQ6yoLPHNkBHdSdfow7hnvPBLJaapRH8s7VJTNH-oafh0L9oh0U6gMiNq92o7GByN9TDhXk8CcpAQ9dwmHS52zaG9hsQTnKPdl5w4dxUlXSuh-gqjc1) x 199) x 40% = **1088€/mois**

Nous proposons 40% de rémunération jusqu'à ce que nous ayons **1000 clients** qui viennent l'affiliation.

C'est-à-dire 1000 personnes qui sont passées par un lien d'affiliation et ont payé au moins un mois d'abonnement.

_(ce qui devrait arriver en quelques mois)_

Après ça, nous baisserons le taux de rémunération pour les nouveaux utilisateurs.

[Bienvenue sur Scrap.io - YouTube](https://www.youtube.com/watch?v=8O_uQu-JAM4)

[**julienarcin**](https://www.growthhacking.fr/u/julienarcin)

[déc. '21](https://www.growthhacking.fr/t/scrap-io-la-brutasse-du-scrap-no-code-google-maps/25004/7?u=dianeleonie)

Nous avons pré-scrappé plus de **140 millions** de Google Places au moment où j’écris ces lignes, dans les principaux pays en Amérique, en Europe et en Asie.

Ça représente quasiment 75% de couverture de Google Maps au niveau mondial si on en croit les 200 millions mentionnés ici: [Products & Tools to Create Custom Maps - Google Maps Platform 5](https://mapsplatform.google.com/maps-products/)

Normalement, on devrait arriver couvrir l’intégralité de Google Maps en début 2022

Je viens d’ajouter une feature: Les filtres de recherches.

Ça permet de filtrer les fiches:

- Non revendiquées par leur propriétaire.
- Qui ont un site / un numéro de téléphone.
- Qui ont une certaine note, un certain nombre de commentaires ou de photos.
- Qui ont au moins un email, un formulaire de contact, Facebook, Instagram, Youtube, Twitter, Linkedin.
- Qui font de la publicité pour leur site internet

Normalement accessibles uniquement sur les plans supérieurs, ils seront dispos pour tout le monde (_y compris pendant la période d’essai_) pendant tout le mois de Janvier.

[3](https://scrap.io/s/dg1)


À bientôt !

Voilà un exemple de requête avec « Boulangerie à Paris, dont la fiche google maps n’est pas revendiquée, qui a une page facebook et un email »:


- L’outil en détail
    - La plus grosse partie du monde référencée :
        
        Plus de 100 pays, avec des exceptions là où Google Maps n’est pas bien implanté en Chine par exemple
        
        4 Divisions géographiques : Pays, Division 1 (FR=Région), Division 2 (FR=Département)
        
        les états unis les niveaux ne sont pas les mêmes là ce sera un état plutôt qu'une région et là ce serait un comté de mémoire plutôt qu'un département
        
        Il est important de préciser que les filtres de niveau 1 sont les régions en France, mais ça sera les États américains si les États-Unis sont sélectionnés comme “Pays” par exemple.
        
        une granularité
        
        si on fait paris évidemment une plus grande là est non d'homonymes
        
        deux boutons un pour revenir à la recherche es 1 pour aller dans vos exports et ils sont conservés ici et ensuite vous aurez aussi le petit menu qui se trouve ici qui est pour vous donner accès à vos différents éléments avant factures etc et puis aussi si vous souhaitez écrire à notre programme affiliation que je vous laisse découvrir simplement en visitant ce lien et je vous souhaite une très bonne exportation
        
        Filtres
        
        
        
        Exportation :
        
        C’est à ce moment là que [Scrap.io](http://Scrap.io) va aller interroger les robots Google, les scraper et mettre ses données à jour pour vous les proposer dans un fichier
        
        quand il y a peu de résultats ça va très vite quand on en a beaucoup plus de cela quelques milliers c'est évidemment beaucoup plus lent car ça prend du temps pour parcourir chaque page de résultats google maps afin de pouvoir ensuite parcourir chaque site internet de chaque résultat afin de pouvoir aller trouver en fait toutes les informations que nous pourrons récupérer pour vous
        
        exporter donc là vous nommez votre fichier comme vous le souhaitez évidemment vous lancez l'export et concrètement à partir de là nous les robots allons effectivement aller interroger tous les résultats google maps afin de mettre à jour les données et surtout les concatener dans un fichier que vous pourrez télécharger une fois l'effet scrapping donc évidemment quand il ya peu de résultats ça va très vite quand on a beaucoup plus ce quelques milliers c'est beaucoup plus
        
        lent évidemment parce que il faut le temps de passer chaque page de résultats de google maps afin d'ensuite pouvoir passer chaque site internet de chaque résultat pour pouvoir aller chercher en
        
        fait à toutes les informations qu'on va pouvoir récupérer pour vous nous voici
        
        vous avez accès à tout ce qu'on a sur une fiche ou google maps donc ça donne déjà beaucoup de données des sites internet les téléphones les sites aux formes enfin les numéros de téléphone au format nationaux l'adresse complète l'adresse des composés d postal ville etc bref vous avez compris que cette idée les coordonnées gps le lien vers la fiche google maps le nom du propriétaire c'est celui qui a créé la fiche google maps donc ça peut être généralement c'est l'entreprise qu'il a créée c'est rarement un individu l'a dit ça va pas forcément vous servir les emails les liens vers les réseaux sociaux une fois les gammes de prix les avis les nombre de photos les horaires à disposition un bien les balises meta ou l'absence de balises meta keywords donc on s'aperçoit qu'il ya assez peu de gens qui travaillent leur référencement vous avez ici deux boutons un pour retourner aux recherches 1 pour aller vers vos export et ils sont conservés ici et puis vous allez également avoir le petit menu qui est ici qu'est vous donner accès à vos différents éléments avant factures etc et puis également si vous le souhaitez écrire à notre programme d'affiliation
        
        les fourchettes de prix les avis le nombre de photos les horaires c'est des informations qui sont disponibles dans le plan up exemple des prestations à destination de professionnels qui font du référencement qui peuvent être SEO google maps là on voit qu'on a des balises meta disponibles ou l'absence de balises meta keywords donc on se rend compte qu'il y a peu de personnes qui travaillent sur leur référencement
        
        pages de contacts on a aussi les différents liens vers les différents réseaux sociaux donc là on va pouvoir trouver des gens sur leur compte twitter instagram youtube linkedin facebook
        
        et ensuite on référencera des technologies qui sont disponibles savoir que telle ou telle personne utilise telle ou telle technologie et qui avec son bien on va pouvoir faire une segmentation
        
        qu'ils utilisent google tagmanager qu'ils ont des pixels publicitaires facebook
        
        par exemple ça permet quand on proposer des services pour s'adresser directement aux personnes qui de manière beaucoup plus ciblée et segmentée
        
        des cas précis pas forcément pour vous qui permettent d'être sûr de chercher des personnes qui vous correspondront donc on peut filtrer les notes les avis google on a différents éléments les notes, le nombre d’avis Google
        
        
        

---

Je vais vous expliquer étape par étape le fonctionne de [Scrap.io](https://160marketing.com/go/scrap_io) afin de vous guider pour votre première connexion et votre première extraction de données pour avoir un fichier de vos futurs prospects.

Tout d’abord, accéder à [Scrap.io](http://Scrap.io). Créé vous un compte avec vos informations correspondant. Vous devez absolument rentrer votre carte bancaire à la création de votre compte afin de choisir l’offre de votre abonnement, si c’est pour une utilisation personnelle ou professionnelle avec un prix commençant à 99 € par mois et allant jusqu’à 199€ par mois. Un plan personnalisé est possible en contactant directement [Scrap.io](http://Scrap.io).

Une fois votre compte et votre plan choisi, votre compte est bien créé. Vous vous retrouverez à l’accueil. Pour pouvoir extraire un fichier de prospects, rendez-vous dans le Tableau de Bord afin de filtrer votre recherche à partir de l’onglet Recherche.

C’est maintenant que votre choix est primordial, choisissez l’activité que vous souhaitez rechercher, avec le pays que vous voulez. Choisissez une région ou même un département (facultatif) pour affiner votre recherche, vous avez même la possibilité de renseigner la ville que vous voulez pour un ciblage bien précis de votre recherche.

Une fois les filtres bien renseignés, cliquez sur Rechercher et une liste arrive en fonction de votre recherche, vous avez même le nombre de résultats affiché en haut de votre page.

Ainsi vos résultats sont affichés avec plusieurs données, vous pouvez retrouver notamment :

- Le nom de l’entreprise
- La ville
- Le numéro de téléphone
- Les données GPS de l’entreprise
- L’URL du site internet
- L’email
- Les réseaux sociaux
- L’adresse
- Le lien Google Maps
- Et autres données importantes

Ensuite, vous pouvez exporter votre fichier en cliquant sur Exporter, [Scrap.io](http://Scrap.io) se met donc à scraper votre fichier, à noter que cela peut prendre du temps en fonction du nombre de résultats que vous avez.

À noter, que vous pouvez scraper que 5 fichiers à la fois, ce qui est déjà très bien.

À la fin de votre scraping, vous pouvez télécharger votre fichier en cliquant sur l’onglet Mes exports en haut de votre fenêtre.  Vos différents fichiers y apparaissent afin de les supprimer ou de les télécharger soient en Ficher CSV (.csv) ou en Fichier Excel (.xslx).

Vous avez donc à la fin un fichier propre d’extraction de données de vos futurs prospects.

Aujourd'hui, je vous annonce **3 nouvelles fonctionnalités** que nous venons d'ajoutér sur [Scrap.io](https://links.customer.scrap.io/e/c/eyJlbWFpbF9pZCI6ImRnU2MxQVlEQUxRSnN3a0JoYzA0THhOajR1TWhoZXlzc2Y4dCIsImhyZWYiOiJodHRwczovL3NjcmFwLmlvIiwiaW50ZXJuYWwiOiI5Y2Q0MDYwMGIzMDliNDA5IiwibGlua19pZCI6MTU0fQ/c63549e8fe49f0230f87480a01a448aa3aa5803359438a20bc0401be8b9cb978) :

1. Une option pour générer automatiquement le nom de vos exports, ce qui vous permet de gagner du temps lorsque vous effectuez plusieurs exports. Vous n'aurez plus besoin de taper le nom à chaque fois.
    
2. Une option pour limiter le nombre de lignes à exporter sur un scrap, ce qui vous permet de générer des "extraits" ou des exports limités à un nombre de lignes spécifiques, pour des clients notamment.
    
3. Une option pour sélectionner les colonnes à exporter, ce qui vous permet de créer votre propre fichier d'export personnalisé sur-mesure avec les colonnes dont vous avez besoin.
    

---

[https://ci4.googleusercontent.com/proxy/ReHf66KyKcsf04EwSag6OjeWrhx7p2Kww_vT7WLvWAXIqhN3bxTY6bf-E3Ux2Un8jCvU8JsDLuH39BRxdPe7jAG18_CARmpKUPpSBkNJV7Q6O2FIr-lBbisZSmPOE-vGqTpAOzoqXTMQzcQASYLvhH7-ozXy8iDIFViga4qt-AQMu5Sz3BVXkMLs_rK4C28anYB8ZAPmdRCFLDn1ai2nD5jyMwV0RVIOQDKb=s0-d-e1-ft#https://userimg-assets.customeriomail.com/images/client-env-109084/1674185092006_Screenshot 2023-01-17 at 17.04.58_01GQ6KABCKSWVAHZA0FXQ6CPRC.png](https://ci4.googleusercontent.com/proxy/ReHf66KyKcsf04EwSag6OjeWrhx7p2Kww_vT7WLvWAXIqhN3bxTY6bf-E3Ux2Un8jCvU8JsDLuH39BRxdPe7jAG18_CARmpKUPpSBkNJV7Q6O2FIr-lBbisZSmPOE-vGqTpAOzoqXTMQzcQASYLvhH7-ozXy8iDIFViga4qt-AQMu5Sz3BVXkMLs_rK4C28anYB8ZAPmdRCFLDn1ai2nD5jyMwV0RVIOQDKb=s0-d-e1-ft#https://userimg-assets.customeriomail.com/images/client-env-109084/1674185092006_Screenshot%202023-01-17%20at%2017.04.58_01GQ6KABCKSWVAHZA0FXQ6CPRC.png)

---

Ces 3 fonctionnalités m'ont beaucoup été demandées par les clients, et elles sont désormais disponibles **pour tout le monde**.

---

data

- Le nom de l’entreprise
- La ville
- Le numéro de téléphone
- Les coordonnées GPS de l’entreprise
- Le site internet
    - L’URL du site internet
    - Le titre du site
    - La Meta du site
    - La langue du site
    - Tous les emails trouvés sur le site
    - Les pages de contact
    - Tous les liens Facebook, Youtube, Twitter, Instagram, LinkedIn trouvés sur le site
    - Les technologies du site
    - Les pixels publicitaires du site
- L’email
- Les réseaux sociaux
    - Lien LinkedIn
    - Lien Facebook
    - Lien Youtube
    - Lien Twitter
    - Lien Instagram
- L’adresse
- L’occupation du site ?
- Le lien Google Maps
- La gamme de prix
- Les avis
- Les photos
- SI la fiche Google est revendiquée
- L’ID Google
- Si l’établissement est fermé
- Le type principal
- Le fuseau horaire
- Propriétaire ?

2. Nous avons amélioré la gestion des **établissements "fermés"**. Vous pouvez maintenant avoir l'information sur l'interface, et filtrer les résultats pour récupérer uniquement les établissements encore en activité (y _compris via l'API_).
    
3. Nous avons implémenté des algorithmes pour **améliorer considérablement la qualité des emails**. Dorénavant, les emails sont corrigés en temps réel, et comparés à un index de _plusieurs millions d'emails invalides_ pour éliminer un maximum de bounces pendant l'extraction.
    
4. Nous avons amélioré le scrapping des catégories _principales_ et _secondaires_. Bientôt, nous allons proposer **une recherche avec 3 niveaux de granularité** :
    

- Recherche d'établissement sur leur catégorie principale _uniquement_
    
- Recherche sur leur catégorie _principale_ + leurs catégories _secondaire_
    
- Recherche sur leur catégorie _principale_ + leurs catégories _secondaires_ + les catégories _liées_
    

Ça vous permettra d'obtenir plus ou moins de résultats en fonction du niveau de précision que vous souhaitez. Et ça arrive dans les prochains mois sur l'interface.

5. Enfin, dernier point et non des moindres, nous avons commencé le développement d'une extension **gratuite** pour Google Chrome qui permettra de récupérer les emails directement sur l'interface de Google Maps. Ça devrait arriver avant la fin de l'année.