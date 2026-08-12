---
section: tutos
tags:
- Tutoriels
imageNameKey: null
title: Générer Images Og
author: Diane
description: 'Découvre Générer Images Og : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

🔹✅💡🥊🛡️🔇🧠📣🎁🏆📚🛠💥🙌😱❌✂️
# Comment générer des OG images différentes pour son site web ?

22 février 2023

•

4

min

[

Jeanne David

](https://fr.abyssale.com/author/jeanne-david)


## Générer automatiquement des OG images qui diffèrent pour chaque page

**L'Open Graph Image (OG Image )** correspond à l’image qui s’affiche lorsque vous partagez une page ou un article sur les réseaux sociaux. Celle-ci ne vous convient peut-être pas et vous aimeriez avoir une distinction entre chaque page ou article.

Sachez qu’il existe un moyen de modifier cette image. Nous allons vous expliquer comment le faire sans trahir votre charte graphique. Vos lecteurs vous reconnaîtront en un coup d’œil et comprendront rapidement le sujet de l’article.

Ce tutoriel va vous expliquer pas à pas comment automatiser cette tâche sans y passer des heures. Pour cela, nous scénariserons la création visuelle depuis Abyssale à l’aide de Make.

### Commencez par créer votre template

Avant toute chose, rendez-vous sur votre tableau de bord et cliquez sur "Create New template" puis sur "Create from scratch". Sélectionnez le type "Static Image" et le format Facebook Feed 1200 x 628 px (1.91:1).


Sur votre template, ajoutez d’abord les éléments qui ne varieront pas d’une OG image à l’autre. Cela peut être un logo ou votre slogan.

**Ensuite, ajoutez** **les éléments variables que vous souhaitez modifier à chaque nouvelle génération** et renommez-les selon l'usage.

Dans notre exemple, on aura :

- Une image d'une ville qu'on appelera "image_ville".
- Le nom d'une ville qu'on appelera "location".

Vous pouvez ajouter les variables que vous souhaitez puis cliquer sur “save & exit”.

### Créez un Google Sheets pour recueillir les informations

Créez un tableau Google Sheets dans lequel **vous créerez une colonne par variable.**

Dans notre exemple, colonne A pour les images et colonne B pour les noms des villes.

Dans la colonne C, **ajoutez l'URL de la page ou de l'article que vous souhaitez rattacher à l'OG image** . Dans notre exemple, on prendra cet article [: https://www.comptoirdesvoyages.fr/voyage-tag/rome/820](https://www.comptoirdesvoyages.fr/voyage-tag/rome/820)

Vous pouvez aussi prévoir les colonnes D et E pour le Meta Titre et la Meta description.


Titrez chaque colonne comme vous le souhaitez sur la première ligne.

### Connectez le Google Sheets à votre template

Rendez-vous sur [Make.com](http://make.com/) et **créez un nouveau scénario.**

Recherchez le module Google Sheets et **sélectionnez "Watch Rows".** Connectez le document sur lequel se trouvent vos variables.


Ensuite, cliquez sur le “+” pour ajouter un nouveau module. Recherchez Abyssale et **sélectionnez "Generate a Single Image"**.


**Remplissez les variables** (dans notre cas “image_fond” * et “location”) en y insérant les colonnes correspondantes (respectivement A et B)

(*) ⚠️ Attention, pour les images, pensez à rentrer l’URL de l’image sur le Google Sheets. Pas d’importation.

La connexion entre votre template et Google Sheets est prête. Voilà déjà une bonne chose de faite.

### Générer une image Open Graph

Maintenant que vous pouvez générer des visuels en un claquement de doigt, l’objectif est de l’associer à une url.

**Ajouter un nouveau module Abyssale "Generate Open Graph Link".**


Dans la ligne target URL, **sélectionnez la variable correspondant à l'URL concernée par l'image Open Graph** . Dans notre cas, on sélectionnera la colonne C du Google Sheets.

Faites la même chose pour le Meta Title et la Meta description. Dans notre cas, on sélectionnera respectivement les colonnes D et E.

Vous venez d’automatiser la génération de votre OG Image ! Félicitations ! 🥳

Vous pouvez vous arrêter là et récupérer le lien contenant l’OG Image.

Pour ce faire, cliquez sur le chiffre en haut à droite du module Abyssale “Generate Open Graph Link” et **récupérez le lien dans l'OUTPUT du Bundle correspondant**.

Si vous copiez ce lien sur les réseaux sociaux, vous verrez apparaître votre OG Image.

Néanmoins, nous n’allons pas nous arrêter là. L’idée est de faire apparaître ce lien directement sur votre Google Sheets pour le récupérer plus facilement.

Tant que nous y sommes, faisons les choses jusqu’au bout !

### Insérez le lien de l’OG Image sur votre Google Sheets

Pour une meilleure organisation, nous allons **insérer le lien OG image à la fin de la ligne correspondante** sur le Google Sheets.

**Ajoutez un module HTTP "Resolve a target URL"** à la suite du scénario Make. Dans la ligne URL, **sélectionnez la variable "Link"** du module Abyssale "Generate Open Graph Link".


**Ensuite, ajoutez** **un module Google Sheets "Update a Row"**. Connectez le document Google Sheets que nous utilisons depuis le début.


Dans la ligne Row number, **sélectionnez la variable "Row number"** issue du module "Watch Rows" de Google Sheets.

Puis, dans la dernière colonne, **ajoutez la variable "Resolved URL" du module HTTP**. Dans notre cas, on ajoutera cette variable à la colonne F. D’ailleurs, vous pouvez renommer la première ligne de cette colonne “Lien avec OG Image”, par exemple.

C’est terminé. Il ne vous reste plus qu’à partager vos liens sur les réseaux et pour voir vos créations inonder les réseaux.