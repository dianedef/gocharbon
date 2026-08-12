---
section: blog
tags:
- Marketing
u_site: null
title: Display Ads
author: Diane
description: 'Découvre Display Ads : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../assets/astro.jpeg
---

# DISPLAY ADS : FORMATS, TAILLES ET SPECIFICATIONS TECHNIQUES

Tu as ta strategie display en place. Maintenant, il faut creer des bannieres qui respectent les specs techniques de chaque plateforme. Parce qu'une banniere refusee ou mal dimensionnee, c'est du temps et de l'argent perdus.

Ce guide est ta reference technique : tailles, poids, formats, specifications par reseau. Garde-le en favori.

---

## Les tailles IAB standard

L'IAB (Interactive Advertising Bureau) definit les standards de la publicite digitale. Voici les formats les plus utilises, classes par performance.

### Formats desktop haute performance

| Format | Taille (px) | Nom IAB | Ou il apparait | Performance |
|--------|------------|---------|----------------|-------------|
| 300x250 | 300 x 250 | Medium Rectangle | Dans le contenu, sidebar | Le plus polyvalent, CTR le plus eleve |
| 728x90 | 728 x 90 | Leaderboard | Haut de page | Forte visibilite, ideal branding |
| 300x600 | 300 x 600 | Half Page | Sidebar | Impact visuel maximum, +40% engagement |
| 160x600 | 160 x 600 | Wide Skyscraper | Sidebar | Bon pour le retargeting produit |
| 970x250 | 970 x 250 | Billboard | Haut de page premium | Reserve aux gros budgets, CPM eleve |
| 336x280 | 336 x 280 | Large Rectangle | Dans le contenu | Version agrandie du 300x250 |

### Formats mobile

| Format | Taille (px) | Nom IAB | Performance |
|--------|------------|---------|-------------|
| 320x50 | 320 x 50 | Mobile Leaderboard | Standard mobile, le plus courant |
| 320x100 | 320 x 100 | Large Mobile Banner | Meilleur CTR que le 320x50 (+50%) |
| 300x250 | 300 x 250 | Medium Rectangle | Fonctionne aussi en mobile |
| 320x480 | 320 x 480 | Mobile Interstitial | Plein ecran, CTR tres eleve mais intrusif |
| 300x50 | 300 x 50 | Mobile Banner | Format minimal, faible engagement |

### Conseil prioritaire

Si tu ne peux creer que 3 tailles, choisis celles-ci :
1. **300x250** -- couvre 40% de l'inventaire display mondial
2. **728x90** (desktop) / **320x50** (mobile) -- couvre le haut de page
3. **300x600** -- impact visuel maximal

---

## Specifications par plateforme

### Google Display Network (GDN)

**Images statiques :**
- Formats acceptes : JPEG, PNG, GIF (non anime)
- Poids maximum : 150 Ko par image
- Tailles acceptees : toutes les tailles IAB standard + responsive
- Resolution recommandee : 72 dpi minimum

**Responsive Display Ads (RDA)** -- le format recommande par Google :
- Images paysage : 1200x628 px (ratio 1,91:1), min 600x314
- Images carrees : 1200x1200 px (ratio 1:1), min 300x300
- Logo paysage : 1200x300 px (ratio 4:1), min 512x128
- Logo carre : 1200x1200 px, min 128x128
- Titres : 30 caracteres max (jusqu'a 5 titres)
- Titre long : 90 caracteres max
- Descriptions : 90 caracteres max (jusqu'a 5)
- Nom de l'entreprise : 25 caracteres max
- Poids max par image : 5120 Ko

**Bannieres HTML5 :**
- Taille du fichier ZIP : 150 Ko max
- Doit inclure un fichier HTML comme point d'entree
- Duree d'animation : 30 secondes max
- Doit se figer sur le dernier frame apres la boucle
- Pas de JavaScript externe (Google Web Designer recommande)

### Meta Audience Network

- Images : 1200x628 px minimum (ratio 1,91:1)
- Ratio image : 9:16 a 16:9
- Texte sur l'image : moins de 20% de la surface (recommandation, plus une regle stricte)
- Poids max : 30 Mo
- Formats : JPG, PNG, GIF, MP4 (video)
- Video : 1 seconde a 241 minutes, mais 15 secondes recommandees

### Criteo

- Bannieres generees dynamiquement a partir de ton flux produits
- Necessite : flux produit au format XML/CSV avec images, prix, descriptions
- Images produit recommandees : 400x400 px minimum, fond blanc
- Criteo gere la creation des bannieres automatiquement via son moteur creatif

---

## Responsive Ads vs. bannieres fixes

### Responsive Ads (le choix par defaut en 2025)

Les plateformes (Google, Meta) assemblent automatiquement tes elements creatifs (images, titres, descriptions) en fonction de l'espace disponible. Avantages :

- **Couverture maximale** : s'adaptent a tous les emplacements sans creer 15 formats
- **Optimisation automatique** : l'algorithme teste les combinaisons et pousse les meilleures
- **Moins de travail** : fournis 5 images + 5 titres + 5 descriptions, la machine fait le reste
- **Performance** : Google affirme que les RDA generent 10% de conversions en plus vs. les bannieres statiques classiques

### Bannieres fixes (quand c'est encore pertinent)

- **Controle total** sur le rendu visuel (luxe, mode, marques haut de gamme)
- **Rich media** et animations complexes impossibles en responsive
- **Campagnes sur des sites premium** ou tu choisis l'emplacement exact
- **Tests creatifs** ou tu veux comparer des concepts visuels tres differents

**La bonne approche** : utilise les responsive ads comme base (80% de ton budget display), et cree des bannieres fixes pour les campagnes premium ou le retargeting personalise.

---

## Rich media et HTML5 : aller plus loin

### Les formats rich media

Les rich media sont des publicites interactives qui vont au-dela de l'image statique ou animee. Ils offrent une experience immersive.

**Expandable Ads** :
- La banniere commence en taille standard (ex: 300x250)
- Au clic ou survol, elle s'etend (ex: 600x500)
- Taux d'interaction : 3 a 5% en moyenne (vs. 0,1% pour le display classique)

**Floating Ads** :
- La publicite "flotte" au-dessus du contenu de la page
- Tres visible mais tres intrusif
- A utiliser avec parcimonie (risque de degrader la marque)

**In-banner Video** :
- Une video joue directement dans l'espace banniere
- Auto-play mute obligatoire (les navigateurs bloquent le son)
- Taux d'engagement 5x superieur aux bannieres statiques

**Peel-back / Fold Ads** :
- L'angle de la page se "decolle" pour reveler la publicite
- Creatif et non intrusif
- Bon pour les lancements de produits

### Creer des bannieres HTML5

**Google Web Designer** (gratuit) :
- L'outil officiel de Google pour creer des bannieres HTML5
- Interface visuelle, pas besoin de coder
- Export direct vers Google Ads
- Templates disponibles pour les tailles standard

**Autres outils** :
- **Creatopy** : editeur drag-and-drop, bibliotheque de templates, export multi-format (a partir de 17 EUR/mois)
- **BannerBoo** : specialise bannieres animees, interface simple (a partir de 12 EUR/mois)
- **Adobe Animate** : pour les agences et designers, controle total (abonnement Creative Cloud)

---

## Dynamic Creative Optimization (DCO)

Le DCO, c'est la personnalisation des bannieres en temps reel en fonction de l'utilisateur. L'idee : au lieu de creer 50 variantes manuellement, tu fournis des elements (images, textes, prix, CTA) et l'algorithme assemble la combinaison optimale pour chaque impression.

### Cas d'usage concrets

- **E-commerce** : afficher le produit consulte par l'utilisateur avec son prix actuel
- **Voyage** : afficher la destination recherchee avec le prix du vol depuis la ville de l'utilisateur
- **Immobilier** : afficher les biens correspondant a la recherche de l'utilisateur
- **Meteo** : adapter le visuel en fonction de la meteo locale ("Il pleut a Paris ? Decouvrez nos parapluies")
- **Compte a rebours** : afficher le temps restant d'une promo en temps reel

### Les outils DCO

- **Google Ads** : DCO basique via les Responsive Display Ads
- **Criteo** : DCO avancé, surtout pour l'e-commerce
- **Abyssale** : generation de bannieres par lot avec personnalisation data-driven
- **Celtra** : plateforme DCO enterprise, utilisee par les grandes marques

---

## Checklist technique avant lancement

- [ ] Toutes les tailles creees (minimum : 300x250, 728x90, 320x50)
- [ ] Poids des fichiers verifie (< 150 Ko pour GDN)
- [ ] Texte lisible a 100% de zoom
- [ ] CTA visible et contrastant
- [ ] Logo present sur chaque banniere
- [ ] Landing page coherente avec la banniere (meme promesse, memes visuels)
- [ ] URL de destination testee (pas de 404)
- [ ] Tracking UTM configure sur chaque URL
- [ ] Version mobile testee sur smartphone reel
- [ ] Bannieres validees par la plateforme (pas de refus en attente)

---

## Tendances display 2025

**L'IA generative dans la creation** : Google et Meta proposent deja la generation automatique de visuels publicitaires par IA. En 2025, 30% des bannieres display seront creees ou assistees par l'IA (Forrester).

**La disparition des cookies tiers** : Chrome a repousse, mais le cookieless arrive. Le ciblage contextuel (basé sur le contenu de la page plutot que l'historique de l'utilisateur) fait son grand retour.

**Le DOOH (Digital Out-Of-Home)** : la convergence entre display digital et affichage physique. Les ecrans urbains deviennent programmatiques et ciblables.

**Les formats immersifs** : les publicites en realite augmentee et les formats 3D interactifs sortent des labs pour entrer dans les plans media.

Le display evolue vite. Ce qui ne change pas : une banniere bien concue, avec le bon message, devant la bonne personne, ca fonctionne. Les specs techniques sont juste le ticket d'entree.
