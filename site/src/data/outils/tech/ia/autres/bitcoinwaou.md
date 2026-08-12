---
section: apps
metadataEnrichedAt: null
title: Bitcoinwaou
author: Diane
tags:
- Outils
description: 'Découvre Bitcoinwaou : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

# Ils exploitent une faille dans Roboform et récupèrent 3 millions en Bitcoin

Le 28 mai 2024par Korben -

1. [Securite-Vie-Privee](https://korben.info/categories/securite-vie-privee/ "Voir tous les articles de la catégorie Securite-Vie-Privee")
2. [Cybersecurite](https://korben.info/categories/securite-vie-privee/cybersecurite/ "Voir tous les articles de la sous-catégorie Cybersecurite")

2 bidouilleurs viennent de prouver qu’avec un peu d’astuce et beaucoup de persévérance, on pouvait cracker les coffres-forts numériques les mieux gardés.

Leur cible ? Un wallet Bitcoin contenant la bagatelle de 3 millions de dollars, verrouillé par un mot de passe de 20 caractères généré par le gestionnaire de mots de passe Roboform en 2013. Le propriétaire, un certain Michael, avait perdu ce sésame et pensait son magot à jamais inaccessible. Mais c’était sans compter sur la détermination de Joe Grand et de son pote Bruno, bien décidés à relever le défi.

Michael, propriétaire de la cryptomonnaie depuis 2013, avait stocké ses 43,6 BTC (valant environ 5 300 dollars à l’époque et environ 3 millions aujourd’hui) dans un fichier chiffré par TrueCrypt contenant le mot de passe généré par Roboform, qu’il n’avait pas entré dans le gestionnaire de mots de passe par peur d’un hack. Malheureusement, le fichier chiffré s’est retrouvé corrompu, et Michael perdit l’accès à son portefeuille.

Joe Grand, ingénieur électrique et hacker de renom, avait refusé la première demande d’aide de Michael en 2021, jugeant la tâche irréalisable sans une faille dans Roboform. Cependant, en 2022, Michael a retenté sa chance. Après des mois à décortiquer le code de Roboform, Joe Grand et Bruno découvrirent que les anciennes versions d’avant 2015, utilisaient une méthode de génération de mots de passe basée sur l’horloge du système. En connaissant la date et l’heure exacte de création, ainsi que les paramètres du mot de passe, ils ont alors pu reconstituer le mot de passe d’origine.


Initialement, Michael ne se souvenait pas de la date précise de génération de son mot de passe. Selon les journaux de son portefeuille, il avait commencé à y transférer des Bitcoins le 14 avril 2013. En analysant la chronologie et les paramètres habituels, Joe et Bruno cherchèrent d’abord dans la plage du 1er mars au 20 avril 2013, puis jusqu’au 1er juin 2013, sans succès. Ce n’est qu’après de multiples ajustements, et en excluant les caractères spéciaux, qu’ils parvinrent à générer le mot de passe correct créé le 15 mai 2013 à 16:10:40 GMT.

La faille se trouvait dans l’algorithme de génération des mots de passe des anciennes versions de Roboform, qui n’était pas aussi aléatoire que prétendu. Elle permettait de reconstituer un mot de passe en manipulant l’horloge de l’ordinateur pour remonter dans le temps. Tout est expliqué dans la vidéo ci-dessous :

  
Il est à noter que depuis la version 7.9.14 de juin 2015, Roboform affirme avoir corrigé cette faille et avoir amélioré la génération aléatoire des mots de passe. Cepandand, Joe Grand reste sceptique face à cette déclaration de Roboform car ces derniers n’ont pas recommandé explicitement aux utilisateurs de générer de nouveaux mots de passe pour leurs comptes après cette mise à jour, ce qui laisse potentiellement des mots de passe vulnérables en circulation.

Bref, un mot de passe n’est pas infaillible même s’il est généré par un outil réputé et il vaut mieux utiliser des phrases de passe longues et complexes, les changer régulièrement et activer la double authentification partout où c’est possible. N’ayez pas non plus une confiance aveugle dans les générateurs de mots de passe, surtout s’ils ont quelques années au compteur.

Bref, soyez prudent et bien joué Michael, pour qui la vie va sûrement changer à partir de maintenant.