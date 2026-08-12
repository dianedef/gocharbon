---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Changer Les Liens Wp
author: Diane
description: 'Découvre Changer Les Liens Wp : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment changer la structure des permaliens sur WordPress

Les permaliens, c'est l'adresse URL de chaque page de ton site. Par defaut, WordPress genere des URLs moches du type `monsite.com/?p=123`. Pas top pour le SEO, pas top pour tes visiteurs. Voyons comment corriger ca proprement.

## Pourquoi changer tes permaliens ?

- **SEO** : Google prefere les URLs lisibles contenant des mots-cles (`/comment-creer-un-blog/` plutot que `/?p=42`)
- **Experience utilisateur** : tes visiteurs comprennent ou ils sont rien qu'en lisant l'URL
- **Partage** : une URL propre inspire confiance quand tu la partages sur les reseaux

## Etape 1 : Acceder aux reglages des permaliens

1. Connecte-toi a ton tableau de bord WordPress
2. Va dans **Reglages > Permaliens**
3. Tu verras plusieurs structures proposees :
   - **Simple** : `?p=123` (a eviter absolument)
   - **Date et titre** : `/2024/03/25/mon-article/`
   - **Mois et titre** : `/2024/03/mon-article/`
   - **Numerique** : `/archives/123`
   - **Titre de la publication** : `/mon-article/` (recommande)
   - **Structure personnalisee** : tu definis ta propre regle

## Etape 2 : Choisir la bonne structure

La structure recommandee pour 90% des sites est **Titre de la publication** (`/%postname%/`). C'est :
- Court et lisible
- Optimise pour le SEO
- Facile a partager

Si tu as un site d'actualites avec beaucoup de contenu, la structure **Date et titre** peut avoir du sens pour differencier des articles similaires.

Pour une **structure personnalisee**, tu peux combiner ces variables :
- `%year%` : annee de publication
- `%monthnum%` : mois
- `%day%` : jour
- `%postname%` : titre de l'article
- `%category%` : categorie principale
- `%author%` : nom de l'auteur

Exemple : `/%category%/%postname%/` donne `/marketing/mon-guide-seo/`.

## Etape 3 : Sauvegarder et verifier le .htaccess

Clique sur **Enregistrer les modifications**. WordPress va automatiquement mettre a jour ton fichier `.htaccess` a la racine de ton site.

Si ca ne marche pas (erreur 404 sur tes pages), c'est que WordPress n'a pas pu ecrire dans le `.htaccess`. Verifie que le fichier a les permissions 644 et que le dossier racine a les permissions 755. Dans ce cas :

1. Connecte-toi en FTP (FileZilla, Cyberduck)
2. Ouvre le fichier `.htaccess` a la racine
3. Colle le contenu suivant :

```apache
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress
```

4. Sauvegarde et reteste

## Etape 4 : Gerer les redirections (crucial)

Si ton site est deja en ligne et que tu changes de structure, toutes tes anciennes URLs vont renvoyer des erreurs 404. Il faut mettre en place des redirections 301.

**Avec le plugin Redirection (gratuit) :**

1. Installe et active le plugin **Redirection**
2. Va dans **Outils > Redirection**
3. Le plugin peut detecter automatiquement les changements d'URL
4. Ajoute manuellement les redirections si besoin : ancienne URL vers nouvelle URL
5. Choisis le type **301 (permanente)** pour conserver ton jus SEO

**Manuellement dans le .htaccess :**

```apache
Redirect 301 /ancienne-url/ /nouvelle-url/
```

## Etape 5 : Verifier que tout fonctionne

Apres le changement :

1. Teste 5 a 10 pages en tapant les anciennes URLs dans ton navigateur
2. Verifie que les redirections fonctionnent
3. Passe ton site dans **Screaming Frog** ou **Broken Link Checker** pour detecter les liens casses
4. Surveille la Google Search Console pendant 2-3 semaines pour reperer les erreurs 404

## Astuces

- **Ne change jamais les permaliens sur un site qui a deja du trafic** sans mettre en place les redirections d'abord
- **Evite les accents et caracteres speciaux** dans tes slugs : WordPress les gere mal parfois
- **Garde tes URLs courtes** : `/guide-seo/` est mieux que `/le-guide-complet-et-definitif-du-seo-en-2024/`
- Si tu utilises WooCommerce, verifie aussi les permaliens des produits dans **Reglages > Permaliens > Permaliens des produits**
- Apres tout changement, va dans **Reglages > Permaliens** et clique sur Enregistrer (meme sans rien changer) pour forcer la regeneration des regles de reecriture

## Ce qui a change dans WordPress 6.x

Depuis WordPress 6.1+, la gestion des permaliens est restee stable dans son interface, mais quelques points meritent attention :

- **Les themes blocs (FSE)** utilisent le meme systeme de permaliens que les themes classiques. Pas de changement a prevoir si tu migres vers un theme bloc comme Twenty Twenty-Five.
- **La structure `/%postname%/`** reste la recommandation officielle de WordPress.org et de Google pour le SEO en 2025-2026.
- **Nginx** : si ton hebergeur utilise Nginx au lieu d'Apache, le fichier `.htaccess` n'est pas utilise. Les regles de reecriture sont gerees dans la configuration Nginx du serveur. WordPress le detecte et n'essaie pas d'ecrire dans `.htaccess` dans ce cas.
- **Variables disponibles** : en plus des variables classiques, WordPress supporte aussi `%post_id%` pour l'identifiant unique du post.

## Attention aux cas speciaux

- **WooCommerce** : les permaliens produits se configurent separement dans **Reglages > Permaliens > Permaliens des produits**. Les options incluent un prefixe `/boutique/`, la base de la categorie, ou directement le slug du produit.
- **Sites multilingues** (WPML, Polylang) : chaque langue peut avoir sa propre structure de slug. Verifie que les redirections couvrent toutes les langues.
- **Multisites** : sur un reseau WordPress multisite, chaque sous-site a ses propres reglages de permaliens.

## Outils mentionnes

- **Redirection** (plugin WordPress gratuit) : gestion des redirections 301. Plus de 2 millions d'installations actives, version actuelle 5.5.2 (avril 2025). Compatible PHP 7.0 a 8.3. Supporte les redirections conditionnelles (selon le statut de connexion, le navigateur, l'IP), les expressions regulieres, et l'import/export de regles. Documentation complete sur [redirection.me](https://redirection.me).
- **Screaming Frog** : crawler SEO pour detecter les liens casses (version gratuite limitee a 500 URLs, licence a 259 GBP/an)
- **Broken Link Checker** : plugin WP pour surveiller les liens internes
- **FileZilla** / **Cyberduck** : clients FTP pour editer le .htaccess
- **Rank Math** / **Yoast SEO** : ces plugins SEO gerent aussi les redirections 301 dans leurs versions premium (Yoast Premium a 99 USD/an, Rank Math Pro a partir de 6.99 USD/mois)
