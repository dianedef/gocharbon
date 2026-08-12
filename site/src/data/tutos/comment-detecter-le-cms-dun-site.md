---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Détecter Le Cms D'Un Site
author: Diane
description: "Detecte le CMS de n'importe quel site web avec WhatCMS, BuiltWith, Wappalyzer et l'inspection manuelle du code source."
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# DETECTER LE CMS D'UN SITE : ESPIONNER LA STACK DE TES CONCURRENTS

Tu tombes sur un site concurrent qui te plait et tu veux savoir comment il est construit ? Detecter le CMS (WordPress, Shopify, Wix, etc.) d'un site, c'est la premiere etape pour comprendre la strategie technique de tes concurrents. Voici toutes les methodes, de la plus simple a la plus technique.

## Pourquoi detecter le CMS d'un site

- **Veille concurrentielle** : savoir si tes concurrents utilisent WordPress, Shopify ou du sur-mesure
- **Benchmark** : comparer les solutions techniques dans ta niche
- **Prospection** : si tu vends des services web, connaitre le CMS de tes prospects t'aide a personnaliser ton approche
- **Inspiration** : tu veux reproduire une fonctionnalite ? Savoir le CMS t'oriente vers les bons plugins ou extensions

## Methode 1 : Les outils en ligne (30 secondes)

**WhatCMS.org**
- Va sur [whatcms.org](https://whatcms.org)
- Entre l'URL du site
- Resultat instantane : CMS detecte + version + themes/plugins visibles
- Gratuit : 500 detections/mois via l'API (1 requete toutes les 10 secondes)
- Un abonnement API donne acces a 3 services en 1 : WhatCMS.org (detection CMS), Who-Hosts-This.com (hebergeur), et ThemeDetect.com (themes WordPress)
- **Plans API payants** : 10 000 detections a 15 dollars/mois, 20 000 a 30 dollars/mois, 50 000 a 60 dollars/mois, 100 000 a 110 dollars/mois, jusqu'a 1 000 000 de detections. Plans annuels disponibles avec reduction
- Les plans payants incluent le batch processing et les detections privees

**BuiltWith**
- Va sur [builtwith.com](https://builtwith.com)
- Entre l'URL du site
- Tu obtiens tout : CMS, hebergeur, outils analytics, frameworks JS, CDN, processeur de paiement
- La version gratuite donne deja beaucoup d'infos pour les recherches individuelles (gratuit a vie pour ca)
- **Plans payants** : Basic a 295 dollars/mois (2 technologies, 2 mots-cles, 1 login), Pro a 495 dollars/mois (technologies et rapports illimites, 1 login), Team a 995 dollars/mois (acces illimite, logins illimites). Reduction sur la facturation annuelle
- BuiltWith suit plus de 111 000 technologies sur 414 millions de domaines, avec un historique de 18+ ans
- Fonctionnalites pro puissantes : recherche inversee ("trouve tous les sites Shopify en France avec Klaviyo"), alertes de changement de techno, export de listes pour la prospection, integrations CRM (Pardot, Zoho, Close.io)

**IsItWP**
- Va sur [isitwp.com](https://www.isitwp.com)
- Specialise dans la detection WordPress
- Detecte le theme et les plugins utilises
- Gratuit et rapide

**CMS Detector de SE Ranking**
- [SE Ranking CMS Detector](https://seranking.com/free-tools/cms-detector.html)
- Outil gratuit, interface claire
- Donne le CMS + quelques infos techniques

## Methode 2 : L'extension navigateur (permanent)

**Wappalyzer** (Chrome/Firefox) -- [wappalyzer.com](https://www.wappalyzer.com)
- Installe l'extension depuis le Chrome Web Store ou Firefox Add-ons
- Visite n'importe quel site : une icone dans la barre d'outils te montre instantanement le CMS, les frameworks, les outils analytics, le CDN, etc.
- Fonctionne en temps reel, pas besoin de lancer une recherche
- **Extension navigateur gratuite** pour la detection de technologies sur les sites que tu visites. Un compte gratuit donne 50 lookups/mois
- **Plan Plus a 10 dollars/mois** : 200 lookups, informations entreprise (email, telephone, reseaux sociaux) directement dans l'extension
- **Plans pro** : Pro a 250 dollars/mois (1 utilisateur, 2 technologies pour les lead lists, CRM), Business a 450 dollars/mois (5 utilisateurs, technologies illimitees, 20 000 credits API), Enterprise a 850+ dollars/mois (25+ utilisateurs, 200 000+ credits API, account manager)
- Aussi disponible en app iOS

C'est la methode la plus pratique si tu fais de la veille regulierement. Tu vois la techno de chaque site que tu visites sans effort.

## Methode 3 : Inspection manuelle du code source

Si les outils automatiques ne detectent rien, tu peux regarder toi-meme. Fais un clic droit sur le site > "Afficher le code source" (ou Ctrl+U).

**WordPress** -- cherche :
- `/wp-content/` ou `/wp-includes/` dans les URLs des fichiers
- `<meta name="generator" content="WordPress X.X">`
- Des references a `wp-json` dans le code

**Shopify** -- cherche :
- `cdn.shopify.com` dans les URLs des fichiers
- `Shopify.theme` dans le JavaScript
- `/collections/` et `/products/` dans la structure des URLs

**Wix** -- cherche :
- `static.wixstatic.com` dans les URLs
- `X-Wix-` dans les headers HTTP

**Squarespace** -- cherche :
- `static1.squarespace.com`
- `"siteVersion"` dans le code source

**Joomla** -- cherche :
- `/media/joomla` ou `/components/`
- `<meta name="generator" content="Joomla!"`

**Drupal** -- cherche :
- `Drupal.settings` dans le JavaScript
- `/sites/default/files/` dans les URLs

## Methode 4 : Les headers HTTP (pour les plus techniques)

Ouvre les DevTools de Chrome (F12) > onglet Network > recharge la page > clique sur la premiere requete > regarde les Response Headers.

Certains CMS ajoutent des headers specifiques :
- `X-Powered-By: Express` (Node.js)
- `X-Drupal-Cache`
- `X-Generator: Drupal`
- `X-Shopify-Stage`
- `Server: cloudflare` (pas un CMS mais utile a savoir)

Tu peux aussi utiliser `curl -I https://lesite.com` dans le terminal pour voir les headers rapidement.

## Methode 5 : Le fichier robots.txt

Tape `https://lesite.com/robots.txt` dans la barre d'adresse. Beaucoup de CMS generent un robots.txt par defaut qui revele leur identite.

- WordPress : tu verras souvent `Disallow: /wp-admin/`
- Shopify : references a `/admin`, `/cart`, `/collections/`
- Magento : references a `/catalog/`, `/customer/`, `/checkout/`

## Que faire une fois le CMS identifie

**Si c'est WordPress :**
- Tu peux aller plus loin avec le WordPress Theme Detector de WPBeginner pour identifier le theme exact
- Les plugins actifs laissent souvent des traces dans le code source (classes CSS, scripts JS)

**Si c'est Shopify :**
- Le theme est souvent identifiable via le code source
- Les apps installees laissent des scripts dans le footer

**Si c'est du sur-mesure :**
- Wappalyzer et BuiltWith detecteront quand meme le framework (React, Vue, Next.js, Astro, etc.)
- L'hebergeur et le CDN sont aussi detectes

## Astuces

- **Combine les outils** : aucun outil ne detecte tout a 100%. Utilise WhatCMS + Wappalyzer pour maximiser la precision
- **Sites headless** : de plus en plus de sites utilisent un CMS headless (Strapi, Contentful, Sanity) avec un front en React/Next.js. Dans ce cas, tu ne verras que le framework front
- **Sites derriere Cloudflare** : le vrai serveur est masque, mais le CMS reste generalement detectable via le code source
- **Cache tes propres traces** : si tu ne veux pas qu'on detecte ton CMS, retire le meta generator, renomme les dossiers par defaut, et utilise un plugin de securite qui masque les signatures

Detecter le CMS d'un concurrent prend 30 secondes. C'est une habitude a prendre des que tu fais de la veille. Et si tu es prestataire web, c'est un reflexe obligatoire avant chaque appel prospect.

## Ressources et liens utiles

- [WhatCMS.org](https://whatcms.org) -- detection CMS gratuite + API (500 detections/mois gratuites)
- [BuiltWith](https://builtwith.com) -- analyse complete gratuite par site, plans pro a partir de 295 dollars/mois
- [IsItWP](https://www.isitwp.com) -- detection WordPress gratuite (themes + plugins)
- [Wappalyzer](https://www.wappalyzer.com) -- extension navigateur gratuite, plans pro a partir de 10 dollars/mois
- [SE Ranking CMS Detector](https://seranking.com/free-tools/cms-detector.html) -- outil gratuit
