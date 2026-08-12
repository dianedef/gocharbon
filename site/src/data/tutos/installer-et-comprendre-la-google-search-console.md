---
section: tutos
type: blog
statut:
- backlog
_priorité: normal
imageNameKey: search-console
tags:
- Tutoriels
title: Installer Et Comprendre La Google Search Console
author: Diane
description: 'Découvre Installer Et Comprendre La Google Search Console : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Installer et comprendre la Google Search Console

La Google Search Console (GSC), c'est le tableau de bord gratuit que Google te donne pour comprendre comment ton site apparait dans les resultats de recherche. C'est l'outil SEO numero 1 et il est 100% gratuit. Si tu n'as pas encore configure la GSC, tu navigues a l'aveugle.

## Ce que la Search Console te montre

- **Quels mots-cles** amenent du trafic sur ton site
- **Quelle position** tu occupes dans Google pour chaque mot-cle
- **Combien de clics** tu recois et ton taux de clic (CTR)
- **Les erreurs** que Google detecte sur ton site (pages 404, problemes mobile, etc.)
- **L'indexation** : quelles pages Google connait et lesquelles il ignore
- **Les Core Web Vitals** : la vitesse et l'experience utilisateur de tes pages

## Etape 1 : Creer un compte et ajouter ton site

1. Va sur [search.google.com/search-console](https://search.google.com/search-console)
2. Connecte-toi avec ton compte Google
3. Clique sur **Ajouter une propriete**
4. Choisis le type :
   - **Domaine** (recommande) : couvre tout le domaine (www, sous-domaines, http et https)
   - **Prefixe d'URL** : couvre une URL specifique (ex: `https://monsite.com`)

Pour la methode Domaine, tu devras ajouter un enregistrement DNS. Pour le Prefixe d'URL, tu as plus d'options de verification.

## Etape 2 : Verifier la propriete

Google doit verifier que le site t'appartient. Plusieurs methodes :

### Methode 1 : Fichier HTML (la plus simple)

1. Google te donne un fichier HTML a telecharger
2. Upload ce fichier a la racine de ton site via FTP
3. Clique sur **Verifier** dans la Search Console

### Methode 2 : Balise meta

1. Google te donne une balise `<meta>` a ajouter dans le `<head>` de ta page d'accueil
2. Sur WordPress, utilise **Yoast SEO** ou **Rank Math** pour l'ajouter sans toucher au code :
   - Yoast : **SEO > General > Webmaster Tools > Code de verification Google**
   - Rank Math : **Rank Math > General Settings > Webmaster Tools**

### Methode 3 : Google Analytics

Si Google Analytics est deja installe sur ton site, la Search Console peut se verifier automatiquement via le meme compte Google.

### Methode 4 : DNS (pour la propriete Domaine)

1. Va dans la gestion DNS de ton hebergeur
2. Ajoute un enregistrement TXT avec la valeur fournie par Google
3. Attends la propagation (quelques minutes a 48h)
4. Clique sur **Verifier**

## Etape 3 : Soumettre ton sitemap

Le sitemap dit a Google quelles pages exister et facilite leur indexation :

1. Dans la Search Console, va dans **Sitemaps**
2. Entre l'URL de ton sitemap : generalement `https://tonsite.com/sitemap.xml`
3. Clique sur **Envoyer**

Sur WordPress, Yoast SEO et Rank Math generent automatiquement un sitemap. Verifie qu'il est accessible a l'URL `/sitemap_index.xml` (Yoast) ou `/sitemap.xml` (Rank Math).

## Les rapports essentiels a connaitre

### Rapport de performances

C'est le rapport le plus important. Tu y trouves :

- **Clics** : combien de fois les gens ont clique sur ton site depuis Google
- **Impressions** : combien de fois ton site est apparu dans les resultats
- **CTR moyen** : le pourcentage d'impressions qui deviennent des clics
- **Position moyenne** : ta position moyenne dans les resultats

**Comment l'utiliser** :
1. Filtre par **Requetes** pour voir les mots-cles
2. Trie par **Impressions** descendantes : ce sont les mots-cles ou tu as le plus de visibilite
3. Cherche les mots-cles avec beaucoup d'impressions mais un faible CTR : c'est la que tu as le plus de potentiel en ameliorant tes titres et descriptions

### Rapport d'indexation des pages

Montre quelles pages sont indexees et lesquelles ont des problemes :

- **Indexees** : tout va bien, Google les connait
- **Exclues** : Google a decide de ne pas les indexer (doublons, noindex, pages de faible qualite)
- **Erreurs** : problemes qui empechent l'indexation

Verifie regulierement les erreurs et corrige-les en priorite.

### Rapport Experience

Regroupe les Core Web Vitals. Depuis mars 2024, **INP a remplace FID** comme metrique officielle :

- **LCP** (Largest Contentful Paint) : vitesse de chargement de l'element principal. Objectif : moins de 2.5 secondes.
- **INP** (Interaction to Next Paint) : mesure la reactivite globale de la page a toutes les interactions utilisateur (clics, taps, saisies clavier). Objectif : moins de 200 millisecondes. C'est la metrique la plus recente, ajoutee en mars 2024 pour remplacer FID (First Input Delay) qui ne mesurait que la premiere interaction.
- **CLS** (Cumulative Layout Shift) : stabilite visuelle (pas de contenu qui saute). Objectif : moins de 0.1.

Google classe tes pages en Bon, A ameliorer, Mediocre. Concentre-toi sur les pages "Mediocre" en priorite. Les Core Web Vitals sont un facteur de classement officiel depuis 2021.

### Rapport Liens

Montre :
- Les **liens externes** : quels sites pointent vers le tien (backlinks)
- Les **liens internes** : comment tes pages se lient entre elles
- Les **pages les plus liees** : tes pages les plus populaires

## Actions pratiques avec la Search Console

### Demander l'indexation d'une nouvelle page

1. Colle l'URL de ta page dans la barre de recherche en haut de la GSC
2. Clique sur **Demander l'indexation**
3. Google va prioritiser le crawl de cette page

Utile quand tu publies un nouvel article et que tu ne veux pas attendre que Google le trouve tout seul.

### Trouver les pages a optimiser en priorite

1. Va dans **Performances > Requetes**
2. Filtre par position moyenne entre 5 et 20
3. Ces pages sont proches de la premiere page mais pas encore en haut
4. Ameliore le contenu, ajoute des liens internes, optimise le titre
5. Petit effort, gros impact potentiel

### Detecter les baisses de trafic

1. Compare deux periodes dans le rapport de Performances
2. Identifie les mots-cles qui ont perdu des positions
3. Verifie si le contenu est toujours pertinent et a jour
4. Regarde si un concurrent a publie quelque chose de mieux

## Astuces

- **Connecte la GSC a Google Analytics** : dans Analytics > Administration > Associations de produits > Search Console. Tu verras les donnees de la GSC directement dans Analytics.
- **Verifie la GSC au moins une fois par semaine** : les donnees ont 2-3 jours de retard, mais les tendances se voient vite
- **Exporte les donnees** : clique sur le bouton Exporter pour analyser dans un tableur. La GSC ne montre que les 1 000 premieres lignes en ligne.
- **Ajoute les variantes de ton domaine** : www et non-www, http et https. Meme si tu as des redirections, ca te donne une vue complete.
- **Surveille l'onglet Securite** : si Google detecte un malware ou du phishing sur ton site, c'est ici que tu seras prevenu

## Nouveautes de la Search Console (2025-2026)

### Canaux sociaux (decembre 2025)

Google a lance une fonctionnalite experimentale qui permet de voir les performances de tes reseaux sociaux directement dans la Search Console. Tu peux voir les clics, impressions et requetes qui menent vers tes profils sociaux associes a ton site (YouTube, LinkedIn, Instagram, etc.). C'est accessible via le rapport Search Console Insights.

### Recommandations IA

La GSC integre progressivement des recommandations basees sur l'IA pour t'aider a ameliorer ton SEO. Par exemple, des suggestions automatiques pour ameliorer les titres et descriptions des pages avec un faible CTR.

### Rapport Video

Si tu publies du contenu video, un rapport specifique dans la GSC te montre les problemes d'indexation des videos et leur performance dans les resultats de recherche.

## Erreurs courantes

- **Ne pas soumettre le sitemap** : Google te trouvera quand meme, mais ca prend plus de temps
- **Ignorer les erreurs 404** : quelques-unes c'est normal, mais des dizaines indiquent un probleme (liens casses, pages supprimees sans redirection)
- **Se focaliser sur la position moyenne** : c'est une moyenne. Une page peut etre en position 3 pour un mot-cle et position 50 pour un autre. Regarde toujours au niveau du mot-cle.
- **Paniquer pour une petite baisse** : les fluctuations de 1-2 positions sont normales au quotidien. Regarde les tendances sur 3 mois.
- **Ne pas connecter GA4** : la connexion entre Search Console et Google Analytics 4 te donne une vue croisee entre le comportement sur Google et le comportement sur ton site. C'est gratuit et ca prend 2 minutes.

## Outils mentionnes

- **Google Search Console** : outil gratuit de suivi SEO par Google. Inscription sur [search.google.com/search-console](https://search.google.com/search-console). Donnees mises a jour avec 2-3 jours de retard. Limite d'affichage a 1 000 lignes en interface web (utilise l'export ou l'API pour des donnees completes). Les donnees sont conservees 16 mois.
- **Yoast SEO** : plugin WordPress pour la verification GSC et le sitemap. Gratuit, Premium a 99 USD/an. Le sitemap est genere automatiquement a `/sitemap_index.xml`. Plus de 13 millions d'installations actives.
- **Rank Math** : alternative a Yoast, avec plus de fonctionnalites en version gratuite (dont le suivi de position basique). Sitemap a `/sitemap.xml`. Premium a partir de 6.99 USD/mois.
- **Google Analytics 4** : suivi du trafic, a connecter avec la GSC dans Administration > Associations de produits. Gratuit.
- **Looker Studio** (ex-Google Data Studio) : pour creer des tableaux de bord personnalises a partir des donnees GSC. Connecteur natif GSC disponible. Gratuit.
- **MXToolbox** : verification des enregistrements DNS sur [mxtoolbox.com](https://mxtoolbox.com)
