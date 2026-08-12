---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Améliorer Son Référencement Grâce Aux Images
author: Diane
description: 'Découvre Améliorer Son Référencement Grâce Aux Images : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# IMAGE SEO : BOOSTER TON REFERENCEMENT PAR LES VISUELS

Les images representent en moyenne 50% du poids d'une page web. Mal optimisees, elles ralentissent ton site et te font perdre des positions. Bien optimisees, elles t'apportent du trafic supplementaire via Google Images. Voici comment transformer tes images en levier SEO.

## Pourquoi le SEO des images compte

Google Images represente environ 20% de toutes les recherches Google. C'est une source de trafic que la majorite des sites ignorent. En plus, les Core Web Vitals (LCP, CLS) sont directement impactes par tes images. Un site lent = moins de visibilite.

## Etape 1 : Nommer tes fichiers correctement

Le nom du fichier est le premier signal que Google lit. Oublie les "IMG_20240315_001.jpg".

**Mauvais** : `DSC00234.jpg`, `image1.png`, `capture-ecran.jpg`

**Bon** : `tunnel-de-vente-schema-etapes.jpg`, `comparatif-outils-emailing-2025.png`

**Regles :**
- Utilise des mots-cles descriptifs separes par des tirets
- Pas d'accents, pas d'espaces, pas de caracteres speciaux
- Sois specifique : decris ce que l'image montre reellement
- Garde le nom court mais informatif (3 a 7 mots)

## Etape 2 : Ecrire des textes alternatifs (alt text) efficaces

L'attribut `alt` decrit l'image pour les moteurs de recherche et les lecteurs d'ecran (accessibilite). C'est un des facteurs SEO les plus importants pour les images.

**Mauvais** : `alt=""`, `alt="image"`, `alt="photo"`

**Bon** : `alt="Schema des 5 etapes pour creer un tunnel de vente efficace"`

**Regles pour un bon alt text :**
- Decris le contenu de l'image en une phrase
- Integre ton mot-cle principal naturellement (pas de keyword stuffing)
- Entre 5 et 15 mots, pas plus
- Pas besoin de commencer par "image de" ou "photo de" (c'est redondant)
- Chaque image doit avoir un alt text unique

## Etape 3 : Choisir le bon format

Chaque format a son usage :

| Format | Utilisation | Poids |
|--------|------------|-------|
| **WebP** | Photos et illustrations (meilleur rapport qualite/poids) | -25 a -35% vs JPEG |
| **AVIF** | Nouvelle generation, encore meilleur que WebP | -50% vs JPEG |
| **JPEG** | Photos si WebP non supporte | Moyen |
| **PNG** | Images avec transparence, logos, captures d'ecran | Lourd |
| **SVG** | Icones, logos vectoriels, schemas simples | Tres leger |

**Recommandation** : utilise WebP pour tout. La compatibilite navigateur est desormais de 97%+ (source : caniuse.com, 2025 -- support complet sur Chrome, Firefox 65+, Safari 14+, Edge 18+, Opera, Samsung Internet). AVIF est encore meilleur en compression (-50% vs JPEG) mais le support est a environ 93-94% (pas encore Safari sur les anciennes versions, et quelques navigateurs mobiles manquent). Pour une compatibilite maximale, utilise la balise `<picture>` avec AVIF en premier choix et WebP en fallback :

```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

Si tu utilises WordPress, installe le plugin **ShortPixel** ou **Imagify** : ils convertissent automatiquement tes images en WebP et AVIF a l'upload.

**ShortPixel** ([shortpixel.com](https://shortpixel.com)) : 3 niveaux de compression (Lossy, Glossy, Lossless), conversion automatique en WebP et AVIF, compatible multisite et WP-CLI. Plan gratuit : 100 images/mois. Plans payants a partir de 3,99 dollars/mois (illimite) ou credits a l'achat unique (qui n'expirent jamais). Integration directe avec Cloudflare.

**Imagify** ([imagify.io](https://imagify.io)) : interface tres simple, 3 modes de compression. Plan gratuit : 20 Mo/mois. Plans payants a partir de 5,99 dollars/mois.

## Etape 4 : Compresser sans perdre en qualite

Une image non compressée peut faire 2-5 Mo. Apres compression, tu descends a 50-200 Ko sans difference visible.

**Outils de compression :**
- **Squoosh** ([squoosh.app](https://squoosh.app)) : gratuit, par Google, fonctionne dans le navigateur. Supporte WebP, AVIF, JPEG XL. Ideal pour tester differents reglages image par image
- **TinyPNG / Tinify** ([tinypng.com](https://tinypng.com)) : supporte desormais AVIF, WebP, PNG et JPEG. Gratuit jusqu'a 20 images en ligne ou 500 compressions/mois via l'API. Au-dela : 0,009 dollar/image (jusqu'a 10 000), puis 0,002 dollar/image. Plugin WordPress disponible (meme tarification API). Reduction moyenne de 85% sans perte visible
- **ShortPixel** ([shortpixel.com](https://shortpixel.com)) : plugin WordPress qui compresse a l'upload automatiquement + conversion WebP/AVIF. Plan gratuit 100 images/mois, plans a partir de 3,99 dollars/mois ou credits one-time
- **ImageOptim** (Mac) / **FileOptimizer** (Windows) : compression locale en masse, gratuit et open source

**Niveaux de compression recommandes :**
- Photos : qualite 75-85% en JPEG/WebP (pas de difference visible)
- Captures d'ecran : qualite 80-90% en PNG ou WebP
- Illustrations : qualite 85-95% en WebP

## Etape 5 : Dimensionner correctement

Ne charge jamais une image de 4000x3000 pixels si elle s'affiche en 800x600. Le navigateur doit la redimensionner, ce qui gaspille de la bande passante.

**Regles de dimensionnement :**
- Mesure la taille d'affichage reelle dans ton layout (inspecter l'element dans Chrome)
- Fournis l'image en 2x cette taille pour les ecrans Retina (ex : affichage 400px = image 800px)
- Utilise l'attribut `srcset` pour servir differentes tailles selon l'ecran
- Definis toujours `width` et `height` dans le HTML pour eviter le layout shift (CLS)

```html
<img
  src="image-800.webp"
  srcset="image-400.webp 400w, image-800.webp 800w, image-1200.webp 1200w"
  sizes="(max-width: 768px) 100vw, 800px"
  width="800"
  height="600"
  alt="Description de l'image"
  loading="lazy"
>
```

## Etape 6 : Activer le lazy loading

Le lazy loading retarde le chargement des images hors ecran. Le navigateur ne charge une image que quand l'utilisateur scrolle jusqu'a elle.

**Implementation :**
- Ajoute `loading="lazy"` sur toutes les images sauf celles visibles au chargement initial (above the fold)
- Les images du haut de page (hero, logo) doivent rester en `loading="eager"` ou sans attribut
- Sur WordPress, le lazy loading est natif depuis la version 5.5

## Etape 7 : Creer un sitemap images

Un sitemap images aide Google a decouvrir toutes tes images, meme celles chargees en JavaScript.

Tu peux ajouter les images dans ton sitemap XML existant :

```xml
<url>
  <loc>https://tonsite.com/article-seo</loc>
  <image:image>
    <image:loc>https://tonsite.com/images/schema-seo.webp</image:loc>
    <image:title>Schema des etapes SEO</image:title>
  </image:image>
</url>
```

**Sur WordPress** : Yoast SEO et Rank Math generent automatiquement le sitemap images. Verifie dans `/sitemap.xml` qu'il inclut bien tes images.

## Etape 8 : Ajouter les donnees structurees (Schema)

Le balisage Schema.org permet a Google d'afficher tes images en rich results.

Pour un article de blog, le schema `Article` inclut deja un champ `image`. Assure-toi qu'il est rempli :

```json
{
  "@type": "Article",
  "headline": "Ton titre",
  "image": "https://tonsite.com/images/article-hero.webp"
}
```

Pour des produits, recettes, ou how-to, les schemas specifiques ont des champs images dedies. Google les utilise pour les carousels enrichis.

## Checklist rapide

- [ ] Noms de fichiers descriptifs avec mots-cles
- [ ] Alt text unique et descriptif sur chaque image
- [ ] Format WebP (ou AVIF) pour toutes les images
- [ ] Compression a 75-85% de qualite
- [ ] Dimensions adaptees a l'affichage reel
- [ ] Lazy loading sur les images below the fold
- [ ] Attributs width et height definis
- [ ] Sitemap images genere
- [ ] Schema markup avec champ image rempli

## Astuces supplementaires

- **Images originales** : Google favorise les images uniques. Evite les banques d'images generiques que tout le monde utilise
- **Contexte textuel** : place tes images pres du texte qui les decrit. Google utilise le texte environnant pour comprendre l'image
- **Nom du dossier** : `/images/seo/schema-tunnel.webp` est mieux que `/img/a/b/file.webp`
- **CDN** : sers tes images via un CDN (Cloudflare, BunnyCDN) pour reduire les temps de chargement partout dans le monde

L'optimisation des images, c'est du SEO technique facile a mettre en place et qui a un impact immediat. Commence par tes 10 pages les plus visitees, mesure l'amelioration sur PageSpeed Insights, et etends a tout le site.

## Ressources et liens utiles

- [Squoosh](https://squoosh.app) -- compression gratuite dans le navigateur (par Google)
- [TinyPNG](https://tinypng.com) -- compression AVIF/WebP/PNG/JPEG, 500 gratuites/mois via API
- [ShortPixel](https://shortpixel.com) -- plugin WordPress, a partir de 3,99 dollars/mois
- [Imagify](https://imagify.io) -- plugin WordPress, a partir de 5,99 dollars/mois
- [PageSpeed Insights](https://pagespeed.web.dev) -- tester la vitesse et les Core Web Vitals
- [Can I Use - WebP](https://caniuse.com/webp) -- compatibilite navigateur WebP (97%+)
- [Can I Use - AVIF](https://caniuse.com/avif) -- compatibilite navigateur AVIF (93%+)
- [Google Image SEO Best Practices](https://developers.google.com/search/docs/appearance/google-images) -- guide officiel Google
