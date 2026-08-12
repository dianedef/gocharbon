---
section: tutos
tags:
- Tutoriels
imageNameKey: extraire-les-paa-de-google
u_site: null
u_affi: null
title: Comment Extraire Les « People Also Ask » Directement Depuis La Page De Résultats
  De Google
author: Diane
description: 'Découvre Comment Extraire Les « People Also Ask » Directement Depuis
  La Page De Résultats De Google : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

Vous avez désormais un outil simple et pratique pour extraire les « **People Also Ask** » directement depuis la page de résultats De Google. 

La technique secrète pour extraire les PAA en un seul clic, c'est de Créer un Bookmarklet pour Extraire les ‘People Also Ask’

L’extension SEOMignon permettait de le faire mais elle est devenue payante depuis juin 2023.

J’aspirais à une solution plus ergonomique, qui me permette de rester sur la même page et d’activer en un clic les questions fréquentes avec leurs réponses, exactement comme avant.

## La Création du Bookmarklet

Alors, inspiré par plusieurs tweets de mes collègues SEO espagnols, notamment Carlos Ortega, Natzir Turrado et Lino Uruñuela, j’ai décidé de créer un **bookmarklet**.

Pour simplifier, il s’agit d’un favori dans votre barre de tâches Chrome qui, au lieu de vous rediriger vers une URL, donne une instruction au navigateur.

## Comment Mettre En Place le Bookmarklet

Pour notre cas précis, l’instruction est de cliquer sur toutes les questions, d’enregistrer les réponses et les URL, puis de rassembler toutes ces informations dans le presse-papiers. Voici comment le mettre en place :

1. Faites un clic droit dans la barre des favoris.
2. Cliquez sur « ajouter une page ».
3. Dans le champ « Nom », écrivez « PAA ».
4. Dans le champ « URL », collez le code JavaScript que je fournirai juste après.


Étape 1 et Ajouter une page en favori


Étape 3 et 4 Donner un nom et coller le code. Puis, Enregistrer.

## Le Code JavaScript à Copier

Voici le code JavaScript à copier :

```
javascript: (function() { let intervalCount = 0; const observer = new MutationObserver(gatherData); function expandPAA() { const questions = document.querySelectorAll('div[jsname="tJHJj"]'); for(let i = 0; i < questions.length; i++) { questions[i].click(); } intervalCount++; if (intervalCount >= 10) { clearInterval(interval); observer.observe(document.body, { childList: true, subtree: true }); } } function gatherData() { observer.disconnect(); let snippets = Array.from(document.querySelectorAll('.related-question-pair')); let combinedText = ''; for (let i = 0; i < snippets.length; i++) { let snippet = snippets[i]; let question = snippet.querySelector('.CSkcDe'); let link = snippet.querySelector('.yuRUbf'); let h3tag = snippet.querySelector('h3'); if (question && link && h3tag) { let questionText = question.innerText.trim(); let linkUrl = link.querySelector('a').href; let h3Text = h3tag.innerText.trim(); combinedText += `${questionText}\t${linkUrl}\t${h3Text}\n`; } } if (combinedText) { navigator.clipboard.writeText(combinedText).then(function() { /* clipboard successfully set */ alert('PAA copiées…. De rien, @NicoSEOsem'); }, function() { /* clipboard write failed */ alert('Failed to copy to clipboard.'); }); } else { alert('No data available to copy.'); } } const interval = setInterval(expandPAA, 2500);})()
```

## Comment Utiliser le Bookmarklet

Ensuite, pour utiliser cet outil :

1. Rendez-vous sur n’importe quelle page de résultats de recherche (SERP) qui affiche des PAA.
2. Cliquez sur le bookmarklet « PAA » que vous avez créé.
3. Patientez sur la page jusqu’à ce que vous receviez un message de confirmation indiquant que les questions ont été copiées.
4. Vous pouvez ensuite coller vos questions dans une feuille de calcul Google Sheets ou Excel selon votre préférence.


Étapes 1 et 2 de fonctionnement PAA du Bookmarklet


Étape 2 Processus de collecte des PAA + réponses + URLs


Étape 3 Confirmation de succès de PAA copiées


Étape 4 : Résultats collés en feuille de Calcul

## Autre outils pour récupérer les  ‘People Also Ask’
Il existe [l’outil d’Alexis Rylko](https://askey-questions.streamlit.app/) qui remplit cette fonction, mais son utilisation nécessite d’ouvrir un nouvel onglet.


Source : [Extraction des 'PAA' avec un Bookmarklet Unique- Consultor SEO Francia ?? Espagne ??](https://nicoseosem.com/fr/blog/comment-creer-un-bookmarklet-pour-extraire-les-people-also-ask/)