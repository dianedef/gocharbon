---
section: tutos
tags:
- Tutoriels
imageNameKey: null
title: Abyssale Image Génération
author: Diane
description: 'Découvre Abyssale Image Génération : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

🔹✅💡🥊🛡️🔇🧠📣🎁🏆📚🛠💥🙌😱❌✂️
# Utilisez make & Google sheets pour automatiser la création d'images pour réseaux sociaux


Nous parlons beaucoup de l'**automatisation de la création d'images** et cela peut souvent sembler complexe et long à mettre en place, mais avec les bons outils, rien n'est plus facile ! Nous allons vous montrer comment créer facilement et automatiquement des images pour votre site réseaux sociaux à l'aide de abyssale, Make (anciennement Integromat) et de vos si familières feuilles Google :)

**Notre objectif** est de créer plusieurs images pour la communication réseaux sociaux . Nous voulons que nos différentes images fassent passer différents messages. Pour cela, nous allons prendre l'exemple d'une campagne pour une nouvelle collection. Disons que nous sommes un détaillant qui vend des vêtements pour hommes, femmes, enfants, bébés, et aussi du linge de maison. Nous avons donc différents produits à promouvoir auprès de différentes cibles. Nous souhaitons réaliser 4 visuels différents pour nos stories Instagram afin de promouvoir nos 4 nouvelles collections.

- Collection pour enfants : " Printemps ludique "
- Collection bébé : " Premiers couchers de soleil "
- Collection de produits pour la maison : "Détails sur la maison"
- Collection printemps hommes et femmes : "L'épanouissement".  
    

Pour ce faire, nous allons :

- Créer un template sur Abyssale
- Créer et mettre en place un Google Sheet avec nos variations de contenu
- Automatiser le processus de création d'images sur Make (anciennement Integromat)

Ces étapes nous permettront de **générer des images automatiquement lorsque nous ajoutons du nouveau contenu à une Google Sheets.**

## #1 - Créer un template sur Abyssale

### Design

Première chose à faire : nous [choisissons le bon format pour notre template.](https://help.abyssale.com/en/articles/89593-add-new-format-to-your-template) Ensuite, nous allons design notre story Instagram sur Abyssale. C'est la partie créative, mais nous voulons nous assurer que nous [créons un visuel](https://help.abyssale.com/en/articles/99196-create-my-first-template) qui fonctionnera pour nos 4 collections.


### Template préparer l'automatisation

Après l'avoir conçu, nous voulons préparer notre template pour l'automatisation, donc d'abord nous nommons nos couches correctement


Dans la barre latérale droite de l'éditeur template , la section **Nom de l'élément** peut être personnalisée. L'objectif est d'identifier facilement les couches dans lesquelles vous voudrez saisir du contenu pendant le processus d'automatisation de l'image dans Make (anciennement Integromat). Dans notre exemple, nous avons **renommé**:

- Le premier élément de texte avec "text_title".
- Le deuxième élément de texte avec "text_description".
- L'élément image avec "image_bg".

Car ce sont ces éléments qui vont changer en fonction de nos différentes campagnes (hommes, femmes, enfants, maison de bébé).  
Notre dernière étape de préparation consiste à nous assurer que nous avons **nommé correctement notre template** et à le sauvegarder !

## #2 - Création d'une feuille Google

Nous devons maintenant définir toutes nos variations de contenu visuel dans une Google Sheet.

Ici, nous créons une colonne pour chaque élément qui va changer : Arrière-plan, Titre, Description, Image. Et puis nous créons une ligne pour chaque variation visuelle : Produits pour la maison, bébés, enfants, hommes et femmes.


Dans la colonne **Arrière-plan**, nous avons choisi de garder la même couleur (mais vous pouvez en choisir d'autres).  
Dans la **colonne Titre**, nous avons mis le nom de nos différentes collections  
. Dans la colonne **Description**, nous avons écrit nos différents messages pour chaque cible.  
Dans la colonne **Image**, nous avons mis l'URL des différentes images que nous avons choisies pour chaque visuel. Si vous utilisez un CMS comme Shopify pour votre boutique, vous pouvez obtenir l'URL de l'une de vos images dans votre médiathèque ou votre page produit Shopify.  

Enfin, nous créons une autre colonne, vide, pour la génération des images (ici en vert). C'est dans cette colonne que les images seront générées par Make (anciennement Integromat).


## 3. Générer des images avec Make (anciennement Integromat)

### #3.1 : Point de départ du scénario

Sur Make (anciennement Integromat), nous créons un nouveau scénario dans lequel le premier module est une feuille Google Sheets "**Watch rows**". Il nous suffit de connecter notre feuille et de remplir les informations nécessaires.


### #3.2 : Module 1 : Abyssale - Générer bannière à partir de template

Nous créons ensuite le premier module pour générer des images à partir de notre Abyssale template .  
En cliquant sur le bouton**"+** ", nous choisissons l'**applicationAbyssale** **Make et l'action "** **Generate banners from template "**.

Nous connectons notre compte Abyssale et notre template précédemment créé nommé "_Integromat - sheets-abyssale-sheets_". Ce titre est assez ennuyeux pour les besoins de ce tutoriel mais n'hésitez pas à faire preuve de fantaisie 🕺.

Maintenant, voici la partie importante : nous devons faire correspondre chacune de nos couches template avec les données récupérées dans notre feuille Google.

A l'**image-bg** layer nous lions notre colonne "**Image URL**".

Pour le **texte_titre** layer , nous lions notre colonne "**Titre"** .

Nous lions notre colonne "**Description** " à **text_description** layer … et ainsi de suite.


### #3.3 : Module 2 : Mettre à jour la ligne de Google Sheet avec l'image générée

Le dernier module que nous allons créer est à nouveau une **feuille Google**, mais cette fois nous allons choisir la fonction "**Mise à jour de la ligne**".

Une fois encore, nous connectons notre spreadsheet et remplissons les informations nécessaires.

Tout d'abord, n'oubliez pas d'introduire la donnée "numéro de ligne" récupérée au début du scénario afin qu'Integromat sache où introduire les nouvelles données.  
  
Ici le but est de remplir automatiquement la colonne "génération d'image" qui est pour le moment vide avec le lien vers l'image générée par abyssale. Ainsi, dans le champ "**génération d'image**", nous choisissons l'**URL de l'image** à partir de Abyssale, de sorte qu'il saisisse l'URL de l'image générée à partir du contenu d'une ligne.


### #3.4 : Testez votre scénario

Pour voir si tout se passe comme prévu, nous allons lancer manuellement notre scénario pour un essai. Il suffit de cliquer sur "**Run once**" et vous devriez voir en allant sur votre feuille google que la dernière colonne "**image generation**" est maintenant remplie de différentes URLs.


Ces URLs sont les différentes déclinaisons de vos visuels et représentent ici nos différentes stories Instagram.

### #3.5 : Ordonnancement du scénario

La dernière étape consiste à programmer cette automatisation. Sur notre premier module GSheet, il y a un pictogramme vert d'horloge. En cliquant dessus, nous pouvons programmer la mise à jour automatique de l'image. Ceci indiquera à Integromat quand et à quelle fréquence il doit surveiller le nouveau contenu de notre Google Sheet, et donc, exécuter le scénario que nous venons de créer.


Pour notre tutoriel, disons que nous programmons toutes nos stories Instagram de la semaine suivante le vendredi. Nous allons donc préparer notre contenu plus tôt dans la semaine et demander à Integromat de lancer le scénario chaque vendredi à 17 heures. De cette façon, vous n'aurez qu'à retourner à vos feuilles Google après 17 heures et à télécharger simplement vos images.  
  
Pour ce faire, dans les options du programme, choisissons d'abord "Jours de la semaine" puis "Vendredi" avant de définir l'heure d'exécution.

## #4 - Récupérez vos images générées dans Google Sheets

Après votre test, vous devriez voir que tous les liens des images sont bien présents dans votre feuille google. Nous avions 4 lignes, ce qui fait 4 images générées. Comme vous pouvez le voir ici, les 4 titres, descriptions et images ont changé tout en respectant le design de notre Abyssale template et les phrases écrites dans notre Gsheet pour aborder nos différentes collections (Bébé, Produits pour la maison, enfants, collection printemps homme & femme).


‍

Il ne vous reste plus qu'à saisir votre contenu dans Google Sheet pendant la semaine et à retourner dans votre dossier tous les vendredis à 17 heures pour récupérer les images générées.

Pour télécharger ces images, vous avez deux possibilités :

- Soit vous cliquez sur le lien de l'image dans votre feuille Google et vous la téléchargez en cliquant avec le bouton droit de la souris dans la fenêtre de votre navigateur.
- Ou, si vous vous sentez un peu fantaisiste, vous pouvez ajouter un [module "HTTP"](https://www.integromat.com/en/integrations/http) à Integromat pour obtenir l'URL de l'image et télécharger le fichier avant de l'envoyer là où vous le souhaitez.

C'est tout pour notre tutoriel ! Peut-être pourriez-vous également lire "comment créer