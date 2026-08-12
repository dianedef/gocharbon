---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Trouver Les Liens Brisés Sur Son Site
author: Diane
description: 'Découvre Comment Trouver Les Liens Brisés Sur Son Site : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# LIENS BRISES : TROUVER ET CORRIGER LES ERREURS 404 SUR TON SITE

Un lien brise, c'est un lien qui pointe vers une page qui n'existe plus. Ca donne une erreur 404 a tes visiteurs, ca degrade l'experience utilisateur, et ca fait perdre du "jus SEO". Google n'aime pas les sites avec des tonnes de 404. Voici comment les trouver et les reparer.

## Pourquoi les liens brises sont un probleme

- **SEO** : chaque lien brise gaspille du crawl budget. Googlebot passe du temps sur des pages mortes au lieu d'indexer ton contenu
- **Experience utilisateur** : un visiteur qui tombe sur une 404 quitte souvent le site
- **Perte de jus SEO** : si des backlinks externes pointent vers une page supprimee, tu perds toute la valeur de ces liens
- **Confiance** : un site avec des liens morts parait abandonne ou peu fiable

## Methode 1 : Google Search Console (gratuit)

C'est le point de depart obligatoire.

1. Va dans Google Search Console > **Pages** (ou Indexation > Pages)
2. Filtre par "Non indexees" et cherche les erreurs "Non trouvee (404)"
3. Tu verras la liste de toutes les URLs que Googlebot a essaye de crawler et qui renvoient une 404
4. Clique sur une URL pour voir quand elle a ete detectee

**Avantage** : c'est ce que Google voit reellement. Si une erreur apparait ici, c'est qu'elle impacte ton SEO.

**Limite** : Google Search Console ne montre que les URLs que Googlebot a essaye de visiter. Les liens brises internes entre tes pages ne sont pas toujours detectes.

## Methode 2 : Broken Link Checker en ligne (gratuit)

[Broken Link Check](https://brokenlinkcheck.com/) est un outil simple et gratuit.

1. Entre l'URL de ton site
2. Lance le scan
3. L'outil crawle toutes tes pages et verifie chaque lien
4. Tu obtiens une liste de tous les liens brises avec : la page source, le lien mort, et le code d'erreur

**Avantage** : aucun logiciel a installer, resultat rapide pour les petits sites.

**Limite** : lent pour les gros sites (500+ pages), et pas de fonctionnalites avancees.

## Methode 3 : Screaming Frog SEO Spider (freemium)

C'est l'outil de reference pour les audits techniques SEO. Disponible sur [screamingfrog.co.uk](https://www.screamingfrog.co.uk/seo-spider/).

1. Telecharge Screaming Frog (version gratuite : 500 URLs max)
2. Entre ton URL et lance le crawl
3. Va dans l'onglet **Response Codes** > filtre par **Client Error (4xx)**
4. Tu vois toutes les pages en 404 + quelles pages contiennent les liens vers elles (onglet Inlinks)

**Prix** : la version gratuite suffit pour les petits sites (500 URLs). La licence payante coute 199 livres sterling/an (environ 250 euros) et debloque le crawl illimite, le rendu JavaScript, l'integration avec Google Analytics 4, Search Console et PageSpeed Insights, la detection de contenu duplique par algorithme md5, la generation de sitemaps XML avances, l'extraction personnalisee, et les rapports automatises. Disponible sur Windows, macOS et Linux.

**Avantages :**
- Crawl complet de ton site en local
- Tu vois exactement quelle page contient le lien brise
- Export en CSV pour traitement en masse
- Detecte aussi les redirections en chaine (301 > 301 > 301)

**Configuration recommandee :**
- Coche "Check External Links" pour verifier aussi les liens vers d'autres sites
- Augmente le crawl speed si ton serveur le supporte
- Filtre par "Inlinks" pour prioriser les 404 qui ont le plus de liens entrants

## Methode 4 : Ahrefs / Semrush (payant)

Si tu as un abonnement Ahrefs ou Semrush, l'audit de site inclut la detection des liens brises.

**Dans Ahrefs :**
- Site Audit > lance un crawl > Issues > cherche "404 page"
- Broken Backlinks : montre les backlinks externes qui pointent vers des pages 404

**Dans Semrush :**
- Site Audit > Issues > "Broken internal links" et "Broken external links"
- Backlink Audit pour les liens entrants casses

L'avantage des outils payants, c'est qu'ils detectent aussi les backlinks perdus. Si un site externe a mis un lien vers une page que tu as supprimee, tu le sais.

## Comment corriger les liens brises

Une fois ta liste en main, tu as plusieurs options selon la situation :

**Option 1 : Redirection 301 (le plus courant)**
Si la page a ete deplacee ou renommee, cree une redirection 301 de l'ancienne URL vers la nouvelle.

Dans un fichier `.htaccess` (Apache) :
```
Redirect 301 /ancienne-page /nouvelle-page
```

Dans un `_redirects` (Netlify/Astro) :
```
/ancienne-page /nouvelle-page 301
```

**Option 2 : Mettre a jour le lien**
Si le lien brise est interne et que tu controles la page source, corrige simplement le lien dans ton contenu.

**Option 3 : Supprimer le lien**
Si la page cible n'existe plus et qu'il n'y a pas d'equivalent, retire le lien de ton contenu.

**Option 4 : Recreer la page**
Si des backlinks externes pointent vers une page supprimee, il est parfois plus rentable de recreer un contenu a cette URL pour recuperer le jus SEO.

## Priorite de correction

Ne corrige pas tout en vrac. Priorise :

1. **Pages avec des backlinks externes** : c'est du jus SEO perdu, corrige en premier
2. **Pages avec beaucoup de liens internes** : elles impactent le plus ton maillage
3. **Pages avec du trafic** (visible dans Google Analytics) : tes visiteurs tombent dessus
4. **Le reste** : corrige au fil du temps

## Automatiser la surveillance

Ne fais pas cet audit une seule fois. Les liens cassent tout le temps (sites externes qui ferment, restructuration de ton site, etc.).

- **Screaming Frog** : programme un crawl mensuel
- **Ahrefs/Semrush** : les audits automatiques tournent chaque semaine
- **Plugin WordPress** : "Broken Link Checker" de SUSPENDED verifie en continu (attention, il consomme des ressources serveur)
- **Google Search Console** : verifie les erreurs 404 toutes les 2 semaines

## Astuces

- **Page 404 personnalisee** : meme avec la meilleure maintenance, des 404 arriveront. Cree une page 404 utile avec un lien vers l'accueil, une barre de recherche, et tes articles populaires
- **Redirections en chaine** : evite les chaines de redirections (A > B > C). Fais pointer directement A vers C
- **Ne redirige pas tout vers l'accueil** : Google considere ca comme une "soft 404". Redirige vers une page pertinente ou laisse la 404 si c'est justifie
- **Verifie apres une migration** : si tu changes de CMS ou de structure d'URLs, scanne tout immediatement apres

Les liens brises sont un probleme silencieux. Tu ne les vois pas, tes visiteurs ne te le disent pas, mais Google les compte. Un audit trimestriel prend 30 minutes et peut recuperer du trafic perdu.

## Ressources et liens utiles

- [Google Search Console](https://search.google.com/search-console/) -- gratuit, voir les erreurs 404 detectees par Googlebot
- [Broken Link Check](https://brokenlinkcheck.com/) -- outil en ligne gratuit pour petits sites
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/) -- gratuit jusqu'a 500 URLs, licence a 199 livres/an
- [Ahrefs Site Audit](https://ahrefs.com/site-audit) -- inclus dans l'abonnement Ahrefs (a partir de 99 dollars/mois)
- [Semrush Site Audit](https://www.semrush.com/features/site-audit/) -- inclus dans l'abonnement Semrush (a partir de 130 dollars/mois)
- [Dr. Link Check](https://www.drlinkcheck.com/) -- alternative en ligne gratuite (jusqu'a 1 500 liens)
