---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Check Si Ton Site A Un Favicon
author: Diane
description: 'Découvre Check Si Ton Site A Un Favicon : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment verifier et corriger le favicon de ton site

Le favicon, c'est la petite icone qui s'affiche dans l'onglet de ton navigateur, dans les favoris, et dans les resultats Google. Si tu n'en as pas, ton site affiche une icone generique (ou pire, rien du tout). Ca fait amateur. Voici comment verifier, creer et implementer un favicon propre.

## Etape 1 : Verifier si ton site a deja un favicon

### Methode rapide

1. Ouvre ton site dans un navigateur
2. Regarde l'onglet : tu vois une icone a gauche du titre de la page ?
3. Si tu vois une icone de globe generique ou rien, tu n'as pas de favicon (ou il est mal configure)

### Methode precise avec un outil

Utilise le Favicon Checker de RealFaviconGenerator :

1. Va sur [realfavicongenerator.net/favicon_checker](https://realfavicongenerator.net/favicon_checker)
2. Entre l'URL de ton site
3. L'outil analyse toutes les versions de favicon (navigateur, iOS, Android, Windows)
4. Tu obtiens un rapport detaille avec ce qui manque et ce qui est mal configure, avec des recommandations de correction

**Ce que l'outil verifie** :
- Favicon classique (ICO, 16x16 et 32x32)
- Favicon SVG (format moderne supporte par Chrome, Firefox, Edge depuis 2023)
- Apple Touch Icon (180x180 pour iOS)
- Android Chrome (192x192 et 512x512 avec manifest via site.webmanifest)
- Windows Tiles (mstile)
- Safari pinned tab (SVG monochrome)
- Theme color pour la barre de navigation mobile

## Etape 2 : Creer ton favicon

### Option 1 : A partir de ton logo (recommande)

Si tu as deja un logo, simplifie-le pour qu'il soit lisible en 32x32 pixels :

1. Va sur realfavicongenerator.net
2. Uploade ton logo (PNG ou SVG, minimum 260x260px)
3. L'outil genere toutes les tailles automatiquement
4. Tu peux ajuster le rendu pour chaque plateforme (recadrer, changer la couleur de fond)
5. Telecharge le package complet

### Option 2 : Creer un favicon a partir de zero

Si tu n'as pas de logo :

- **Favicon.io** : genere un favicon a partir de texte (tes initiales), d'un emoji ou d'une image
- **Canva** : cree un design 512x512 et exporte en PNG
- **Figma** : pour un design plus precis, cree un cadre 32x32 et exporte en SVG

**Astuce** : le favicon doit etre lisible en tres petit. Evite les details fins, les textes longs et les degradees. Un symbole simple avec des couleurs contrastees fonctionne le mieux.

## Etape 3 : Implementer le favicon sur ton site

### Sur n'importe quel site HTML

Place les fichiers favicon a la racine de ton site et ajoute ces lignes dans le `<head>` :

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
```

### Sur WordPress

1. Va dans Apparence > Personnaliser > Identite du site
2. Clique sur "Selectionner l'icone du site"
3. Uploade ton image (minimum 512x512)
4. WordPress genere automatiquement toutes les tailles

### Sur Shopify

1. Va dans Boutique en ligne > Themes > Personnaliser
2. Clique sur "Parametres du theme" (engrenage)
3. Section "Favicon" : uploade ton image

### Sur Astro

Place les fichiers dans le dossier `public/` et ajoute les balises dans ton composant `<head>` (souvent dans `BaseHead.astro`).

### Sur Next.js

Place un fichier `favicon.ico` dans le dossier `app/` (App Router) ou `public/` (Pages Router). Next.js le detecte automatiquement.

## Etape 4 : Le format SVG (moderne et recommande)

Depuis 2023, tous les navigateurs majeurs supportent le favicon SVG : Chrome, Firefox, Edge, Opera et Safari (depuis la version 15). L'avantage : il s'adapte a toutes les tailles sans pixelisation et supporte le mode sombre nativement via les media queries CSS.

```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.ico" sizes="any"> <!-- Fallback -->
```

Pour creer un favicon SVG avec support du dark mode :

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <style>
    circle { fill: #333; }
    @media (prefers-color-scheme: dark) {
      circle { fill: #fff; }
    }
  </style>
  <circle cx="16" cy="16" r="14"/>
</svg>
```

## Checklist complete du favicon

- [ ] Favicon 16x16 et 32x32 (PNG ou ICO)
- [ ] Favicon SVG (pour les navigateurs modernes)
- [ ] Apple Touch Icon 180x180 (pour iOS)
- [ ] Icons 192x192 et 512x512 (pour Android/PWA)
- [ ] Fichier site.webmanifest avec les references aux icons
- [ ] Meta theme-color pour la barre de navigation mobile
- [ ] Test sur RealFaviconGenerator apres deploiement

## Les erreurs courantes

- **Favicon trop detaille** : en 16x16 pixels, seule une forme simple est lisible
- **Oublier le Apple Touch Icon** : quand quelqu'un ajoute ton site en raccourci sur iPhone, il voit un screenshot flou au lieu de ton icone
- **Cache du navigateur** : apres avoir change ton favicon, force le rafraichissement avec Ctrl+F5 ou vide le cache. Le favicon est tres agressivement mis en cache
- **Mauvais chemin** : verifie que les fichiers sont bien a la racine du site et que les chemins dans le HTML sont corrects

## Ce qu'il faut retenir

Un favicon prend 15 minutes a configurer correctement et dure des annees. Utilise RealFaviconGenerator pour generer toutes les tailles et tester le resultat. C'est un detail qui fait la difference entre un site amateur et un site professionnel.

## Approche moderne recommandee (2025+)

En 2025, la configuration minimale recommandee pour un favicon est beaucoup plus simple qu'avant grace au support SVG quasi-universel :

```html
<!-- Favicon SVG (Chrome, Firefox, Edge, Safari 15+) -->
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<!-- Fallback ICO pour les vieux navigateurs -->
<link rel="icon" href="/favicon.ico" sizes="32x32">
<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<!-- Web App Manifest pour Android/PWA -->
<link rel="manifest" href="/site.webmanifest">
```

Avec ces 4 lignes, tu couvres 99%+ des navigateurs et appareils. Le SVG gere le dark mode et le scaling, l'ICO couvre les cas legacy, l'Apple Touch Icon gere iOS, et le manifest gere Android.

## Ressources utiles

- [RealFaviconGenerator](https://realfavicongenerator.net) -- generateur + checker complet
- [Favicon.io](https://favicon.io) -- generateur a partir de texte, emoji ou image
- [MDN - Favicon](https://developer.mozilla.org/en-US/docs/Glossary/Favicon) -- documentation technique de reference
