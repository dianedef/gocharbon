---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Mettre Des Pubs Sur Son Site Wordpres
author: Diane
description: 'Découvre Comment Mettre Des Pubs Sur Son Site Wordpres : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment mettre des pubs sur ton site WordPress

Monetiser ton site avec de la publicite, c'est le modele le plus ancien du web. Pas le plus rentable au depart (il faut du trafic), mais une fois en place, ca tourne tout seul. Voici comment ajouter des pubs sur WordPress, de A a Z.

## Les prerequis avant de commencer

Avant de coller des pubs partout, verifie que :

- **Tu as du trafic** : en dessous de 1 000 visites/mois, ca ne vaut pas le coup. Tu vas gagner des centimes et degrader l'experience utilisateur pour rien.
- **Ton contenu est original** : les regies refusent les sites avec du contenu duplique ou de mauvaise qualite
- **Ton site est rapide** : les pubs rajoutent du poids. Si ton site est deja lent, corrige ca d'abord.
- **Tu as les mentions legales** : politique de confidentialite, bandeau cookies (RGPD oblige)

## Etape 1 : Choisir ta regie publicitaire

### Google AdSense (debutant)

Le plus accessible. Pas de minimum de trafic officiel, mais Google verifie la qualite de ton site. Depuis 2024, AdSense a change son modele de remuneration : il est passe d'un paiement au clic (CPC) a un paiement par impression (CPM). Les editeurs recoivent 80% du revenu apres la part de la plateforme cote acheteur.

- **Revenus** : entre 1 et 5 euros pour 1 000 vues (RPM variable selon ta niche). Les niches finance, assurance et tech paient le plus (CPC moyen de 0.25 a 5 USD selon la niche et le pays).
- **Paiement** : virement a partir de 100 USD (seuil remonte, anciennement 70 euros en zone euro). Plus de 2 millions d'editeurs actifs dans le monde.
- **Taux d'approbation** : environ 35% des demandes approuvees du premier coup selon les donnees recentes. Google est de plus en plus strict sur la qualite du contenu et l'experience utilisateur.
- **Avantage** : facile a mettre en place, pubs ciblees automatiquement, compatible avec la plupart des sites
- **Inconvenient** : revenus faibles tant que tu n'as pas beaucoup de trafic. Taux de rejet eleve si le contenu est insuffisant.

### Ezoic (intermediaire)

Alternative a AdSense avec optimisation automatique des placements par intelligence artificielle.

- **Prerequis** : le programme "Access Now" accepte les petits sites, mais les vrais gains commencent a 10 000 pages vues/mois
- **Revenus** : RPM moyen de 10 a 20 USD selon la niche (2x a 5x AdSense)
- **Paiement** : seuil de paiement bas a 20 USD (via PayPal, Payoneer, ou virement)
- **Avantage** : IA qui teste automatiquement les meilleurs emplacements, analytics detailles, outils de vitesse de site
- **Inconvenient** : peut surcharger le site avec trop de pubs si tu ne configures pas les limites. L'interface est complexe au debut.

### Mediavine / Raptive (ex-AdThrive) (avance)

Les regies premium pour les gros sites.

- **Mediavine** : depuis 2025, le critere d'entree n'est plus base sur les sessions mais sur le revenu pub annuel. Il faut generer au moins 5 000 USD de revenus pub par an pour candidater au programme principal. Pour les sites plus petits, **Journey by Mediavine** accepte les sites des 1 000 sessions/mois. RPM moyen de 20 a 30 USD.
- **Raptive** (anciennement AdThrive) : minimum 100 000 pages vues/mois. RPM moyen de 25 a 45 USD. C'est la regie la mieux payee du marche. Paiement a partir de 25 USD via virement ou PayPal. Seuil de paiement net-45.
- **Revenus** : les plus eleves du marche, avec des RPM qui peuvent depasser 30 USD en niche finance ou tech
- **Inconvenient** : processus d'acceptation selectif, contenu en anglais fortement favorise

## Etape 2 : Configurer Google AdSense

C'est le choix le plus courant pour commencer :

1. Cree un compte sur [adsense.google.com](https://adsense.google.com)
2. Ajoute ton site et attends la verification (quelques jours a 2 semaines)
3. Une fois approuve, Google te donne un code a inserer dans le `<head>` de ton site

Pour inserer le code dans WordPress :
- Va dans **Apparence > Editeur du theme** et colle le code dans `header.php` (methode basique)
- Ou mieux : utilise un plugin pour ne pas toucher au code

## Etape 3 : Installer un plugin de gestion des pubs

### Ad Inserter (gratuit et puissant)

Le plugin de reference pour gerer tes pubs sur WordPress :

1. Installe **Ad Inserter** depuis Extensions > Ajouter
2. Va dans **Reglages > Ad Inserter**
3. Chaque onglet (1 a 16) represente un emplacement publicitaire
4. Colle ton code AdSense dans un onglet
5. Choisis ou l'afficher :
   - **Avant le contenu** : juste apres le titre
   - **Apres le paragraphe X** : par exemple apres le 3e paragraphe
   - **Apres le contenu** : en fin d'article
   - **Sidebar** : dans un widget
6. Sauvegarde

### WP QUADS (alternative)

Plugin specialise AdSense, plus simple mais moins flexible :

1. Installe **WP QUADS**
2. Colle ton code AdSense dans les emplacements proposes
3. Active l'insertion automatique

## Etape 4 : Placer tes pubs aux bons endroits

Le placement fait toute la difference entre 2 euros et 20 euros de RPM :

- **En haut de page (above the fold)** : le plus vu, le plus clique. Place une pub juste apres l'introduction.
- **Dans le contenu** : apres le 2e ou 3e paragraphe. Le lecteur est engage, il ne la voit pas comme intrusive.
- **En fin d'article** : le lecteur a fini de lire, il cherche quoi faire ensuite. Bon taux de clic.
- **Sidebar** : classique mais de moins en moins efficace sur mobile (la sidebar passe en dessous).
- **Entre les articles** (page de listing) : les pubs natives qui ressemblent a du contenu.

**A eviter absolument** :
- Plus de 3 pubs visibles en meme temps
- Des pubs qui recouvrent le contenu (popup pub)
- Des pubs trompeuses qui ressemblent a des boutons de navigation

## Etape 5 : Gerer le RGPD et les cookies

Tes pubs utilisent des cookies de tracking. En Europe, tu dois :

1. Installer un plugin de consentement cookies (**Complianz**, **CookieYes**, ou **Tarteaucitron**)
2. Configurer le chargement conditionnel : les pubs ne se chargent qu'apres consentement
3. Afficher une politique de confidentialite qui mentionne la publicite ciblee

AdSense propose aussi un mode "pubs non personnalisees" qui necessite moins de consentements, mais rapporte moins.

## Optimiser tes revenus publicitaires

Une fois les pubs en place, optimise :

- **Teste les emplacements** : deplace tes pubs et compare les RPM sur 2 semaines
- **Formats responsives** : utilise les blocs adaptatifs qui s'ajustent a la taille de l'ecran
- **Lazy loading** : charge les pubs en dessous de la ligne de flottaison uniquement quand le visiteur scrolle (meilleur pour la vitesse)
- **Bloque les categories de pubs** : dans AdSense, bloque les categories de pubs a faible rendement ou inappropriees pour ton audience
- **Combine avec d'autres revenus** : la pub seule ne suffit pas. Ajoute de l'affiliation, des produits digitaux, du sponsoring

## Astuces

- **Ne mets pas de pubs si tu vends tes propres produits** : les pubs envoient ton trafic chez les autres. Utilise cet espace pour promouvoir tes offres.
- **Surveille ton Core Web Vitals** : les pubs degradent souvent le CLS (decalage de contenu). Reserve l'espace de la pub avec des dimensions fixes.
- **Revenus realistes** : avec 10 000 vues/mois et AdSense, compte 10 a 50 euros/mois. C'est un revenu complementaire, pas un salaire.
- **Attention aux bloqueurs de pub** : 30 a 40% de tes visiteurs utilisent un ad-blocker. Ne base pas tout ton modele economique sur la pub.

## Combien peut-on gagner realistement ?

| Trafic mensuel | Regie | Revenus estimes/mois |
|---|---|---|
| 5 000 pages vues | AdSense | 5 a 25 EUR |
| 10 000 pages vues | AdSense | 10 a 50 EUR |
| 10 000 pages vues | Ezoic | 20 a 100 EUR |
| 50 000 pages vues | Mediavine | 250 a 750 EUR |
| 100 000 pages vues | Raptive | 600 a 2 000 EUR |

Ces chiffres dependent enormement de ta niche (finance et tech paient beaucoup plus que lifestyle), de la geographie de ton audience (trafic US/UK mieux paye), et de la saison (Q4 = revenus max, Q1 = revenus bas).

## Outils mentionnes

- **Google AdSense** : regie pub de Google, inscription sur [adsense.google.com](https://adsense.google.com). Paiement par impression depuis 2024, seuil de 100 USD.
- **Ad Inserter** : plugin WP pour gerer les emplacements pub. Version gratuite avec 16 emplacements configurables. Version Pro a 2.8.8 (novembre 2025) avec des fonctionnalites avancees (rotation, geo-targeting, detection ad-block, statistiques). Plus de 300 000 installations actives, note 4.9/5.
- **WP QUADS** : plugin WP specialise AdSense, interface plus simple
- **Ezoic** : regie avec optimisation IA, [ezoic.com](https://www.ezoic.com). Seuil de paiement 20 USD.
- **Mediavine** : regie premium, [mediavine.com](https://www.mediavine.com). Programme Journey des 1 000 sessions/mois.
- **Raptive** (ex-AdThrive) : regie premium haut de gamme, [raptive.com](https://raptive.com). Minimum 100 000 pages vues/mois.
- **Complianz** / **CookieYes** / **Tarteaucitron** : gestion du consentement cookies (RGPD)
