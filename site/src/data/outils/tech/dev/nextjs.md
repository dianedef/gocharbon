---
section: apps
metadataEnrichedAt: null
title: Nextjs
author: Diane
tags:
- Outils
description: 'Découvre Nextjs : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
---

Pour exécuter ce code et voir le résultat, suivez ces étapes :

1. Assurez-vous d'avoir Node.js installé sur votre ordinateur.

2. Ouvrez un terminal et naviguez vers le répertoire racine de votre projet Next.js.

3. Si vous n'avez pas encore installé les dépendances, exécutez la commande suivante :
   ```
   npm install
   ```

4. Une fois les dépendances installées, lancez le serveur de développement avec la commande :
   ```
   npm run dev
   ```

5. Ouvrez votre navigateur et allez à l'adresse `http://localhost:3000`

Vous devriez maintenant voir la page d'accueil de votre application Next.js avec le contenu que vous avez défini dans le fichier `app/page.tsx`.

Cette page affichera le logo Next.js, une liste numérotée avec deux éléments, et deux boutons : "Deploy now" et "Read our docs". En bas, vous verrez un pied de page avec trois liens : "Learn", "Examples", et "Go to nextjs.org".

N'oubliez pas que si vous apportez des modifications au code, elles seront automatiquement reflétées dans le navigateur grâce au rechargement à chaud (hot reloading) de Next.js.


# NextJS

Le serveur rend du HTML à partir du JS et envoie ce HTML au navigateur. Nickel pour le SEO, se charge + rapidement et s'héberge en static.
Next fait du SSR pour la première page (comme PHP fait depuis 20 ans)
La dif c'est que pour pour les pages suivante NextJS fonctionne comme une SPA (comme React) avec un rendu côté client des pages suivantes. Le meilleur des 2 mondes.