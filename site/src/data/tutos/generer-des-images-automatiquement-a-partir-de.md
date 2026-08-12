---
section: tutos
tags:
- Tutoriels
imageNameKey: null
title: Générer Des Images Automatiquement À Partir De Wordpress
author: Diane
description: 'Découvre Générer Des Images Automatiquement À Partir De Wordpress :
  outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

🔹✅💡🥊🛡️🔇🧠📣🎁🏆📚🛠💥🙌😱❌✂️
# Comment récupérer automatiquement les données de vos pages web pour alimenter vos templates Abyssale ?

27 février 2023

•

3

min

[

Jeanne David

](https://fr.abyssale.com/author/jeanne-david)


## Récoltez automatiquement les données de vos articles et accélérez la création visuelle avec Abyssale

Lorsqu’une nouveauté apparaît sur votre site internet, il peut être judicieux de la relayer sur les réseaux sociaux pour attirer du trafic et prévenir votre audience. Qu’il s’agisse d’un site d'e-commerce ou d’un blog, cette pratique augmente le trafic du site internet.

Pour illustrer vos partages sur les réseaux, Abyssale vous permet de générer des visuels de manière automatique.

Nous vous expliquerons comment récupérer les données de chaque page de votre site web afin d' **alimenter ultérieurement votre Abyssale** **templates . Et ce, quel que soit le CMS. Il s'agit de stocker automatiquement des informations dans un fichier csv (Google sheets) qui sera utilisé comme source de données pour créer de nouveaux visuels avec** Abyssale.

Ce tutoriel, relativement court, n’en est pas moins important puisqu’il pourrait être la base de bon nombre de créations visuelles avec Abyssale.

### Connectez votre CMS à Make

Commencez par **créer un nouveau scénario** sur [Make.com](http://make.com/). Nommez-le "Copie des données CMS vers csv", par exemple.

Pour le premier module, **recherchez votre CMS** et sélectionnez pour déclencheur la publication d'un nouvel article/post/produit.


Voici une liste non exhaustive des CMS les plus répandus :

- Tapez "Wordpress" et **sélectionnez le module "Watch Posts"**;
- Tapez "Webflow" et **sélectionnez le module "Watch Events"**;
- Tapez "Wix" et **sélectionnez le module "Watch Products"**;
- Tapez "Shopify" et **sélectionnez le module "Watch Products"**;
- Tapez Squarespace" et **sélectionnez le module "Watch Products"**;
- etc…

Ensuite, connectez votre CMS en renseignant les informations de connexion demandées.

### Automatiser la récolte des données dans un CSV

Maintenant que votre CMS est connecté à Make, nous allons **automatiser la récolte des données** de vos nouveaux posts/articles/produits dans un cvs (Google Sheets).

Commencez par **créer un nouveau document Google Sheets**. Nommez-le et rangez-le dans un dossier drive que vous pourrez retrouver facilement.

Dzpuis le scénario Make créé précédemment, **ajoutez un nouveau module Google Sheets "Add Rows"** et sélectionnez le document que vous avez préalablement créé.


**Cochez "yes" dans la ligne "Table content header"**. Vous nommerez chaque colonne de votre Google Sheets selon la donnée qu'elle présente.

Ensuite, pour chacune des lignes, **sélectionnez les variables issues de votre CMS** que vous souhaitez récupérer lorsque vous publiez une nouveauté. Par exemple : le titre de l'article, l'adresse URL de la page, la date de publication, etc… Tout ce qui vous semble pertinent pour construire un visuel ou un post de partage sur les réseaux sociaux.

**Sauvegardez votre scénario** et c'est déjà terminé ! Votre document est prêt 🥳. Il servira de source de données pour toute création visuelle automatisée à partir d'un Abyssale template .