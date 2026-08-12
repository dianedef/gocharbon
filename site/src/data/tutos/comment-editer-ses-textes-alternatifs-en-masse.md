---
section: tutos
type: Tuto
statut:
- backlog
_priorité: normal
imageNameKey: wp-editer-texte-alternatifs
tags:
- Tutoriels
title: Comment Éditer Ses Textes Alternatifs En Masse Sur Wordpress
author: Diane
description: 'Découvre Comment Éditer Ses Textes Alternatifs En Masse Sur Wordpress
  : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment editer ses textes alternatifs en masse sur WordPress

Le texte alternatif (alt text), c'est la description invisible que tu donnes a chaque image de ton site. C'est indispensable pour le SEO images et l'accessibilite. Le probleme : si tu as 200 ou 500 images sans alt text, les faire une par une prend des heures. Voici comment faire ca en masse.

## Pourquoi le texte alternatif est important

### Pour le SEO

- Google Images represente 20 a 30% du trafic de recherche total
- Sans alt text, Google ne sait pas ce que montre ton image
- Un bon alt text avec des mots-cles pertinents te fait apparaitre dans Google Images
- C'est aussi un signal de qualite pour le classement de ta page

### Pour l'accessibilite

- Les lecteurs d'ecran lisent le alt text aux personnes malvoyantes
- En France, la loi impose l'accessibilite numerique pour les sites publics et les grandes entreprises
- Un site accessible, c'est aussi un signe de professionnalisme

### Pour l'experience utilisateur

- Quand une image ne charge pas, le alt text s'affiche a la place
- Sur les connexions lentes, ca aide le visiteur a comprendre le contenu

## Etape 1 : Identifier les images sans alt text

Avant de corriger, fais un etat des lieux.

**Avec Screaming Frog (gratuit jusqu'a 500 URLs) :**

1. Lance un crawl de ton site
2. Va dans l'onglet **Images**
3. Filtre par **Missing Alt Text**
4. Exporte la liste en CSV

**Avec un plugin WordPress :**

Le plugin **Media Library Assistant** te permet de filtrer tes images par celles qui n'ont pas de alt text :

1. Installe et active le plugin
2. Va dans **Medias > Bibliotheque des medias (MLA)**
3. Utilise le filtre de recherche pour trouver les images sans alt text

## Etape 2 : Editer en masse avec un plugin

### Media Library Assistant (recommande)

Ce plugin transforme la gestion de ta mediatheque. Developpe par David Lingren et maintenu activement (derniere mise a jour : fevrier 2026). Gratuit et open source.

1. Va dans **Medias > Bibliotheque des medias (MLA)**
2. Passe en vue **Liste**
3. Selectionne plusieurs images avec les cases a cocher
4. Clique sur **Actions groupees > Modifier**
5. Tu peux editer le alt text, le titre, la description et la legende de toutes les images selectionnees

**Bonus** : le plugin te permet de creer des regles automatiques via ses Content Templates. Par exemple, utiliser le titre de l'image comme alt text par defaut si aucun n'est defini. Il offre aussi une recherche etendue (par slug, alt text, legende), le support des taxonomies sur les medias, et fonctionne avec WPML et Polylang pour les sites multilingues.

### Media Library Alt Text Editor

Plugin dedie specifiquement a l'edition en masse des alt text, leger et efficace :

1. Installe le plugin **Media Library Alt Text Editor** (par le developpeur original, gratuit)
2. Va dans la **Bibliotheque de medias** en vue liste
3. Tu vois un champ alt text editable directement a cote de chaque image
4. Modifie et sauvegarde par lots
5. L'option "Copy Images Names to Alt Text" copie automatiquement le titre de l'image dans le champ alt text

### Media Library Tools (par Tiny Solutions)

Alternative plus recente avec des fonctionnalites supplementaires :

1. Renommage en masse des fichiers medias
2. Detection des medias non utilises
3. Import/export CSV des metadonnees (alt text, caption, description)
4. Support SVG
5. Identification visuelle des images sans alt text
6. Version Pro avec fonctionnalites avancees

## Etape 3 : Generation automatique avec l'IA

Pour aller encore plus vite sur des centaines d'images :

### Jejesoft Bulk Alt Text (ou similaire)

1. Le plugin analyse chaque image avec une IA de reconnaissance visuelle
2. Il genere automatiquement un alt text descriptif
3. Tu valides ou modifies avant d'appliquer

### Manuellement avec l'API OpenAI Vision

Si tu veux plus de controle :

1. Exporte la liste de tes images (URLs) depuis la base de donnees
2. Envoie chaque image a l'API Vision de GPT-4 avec le prompt :
   "Decris cette image en une phrase concise pour un alt text web, en francais, en incluant le contexte [ta thematique]"
3. Reimporte les alt text via un plugin ou SQL

## Etape 4 : Modification directe en base de donnees (avance)

Pour les plus techniques, la modification directe en base est la plus rapide :

**Attention** : fais une sauvegarde complete de ta base avant.

### Via phpMyAdmin

Les alt text sont stockes dans la table `wp_postmeta` avec la cle `_wp_attachment_image_alt`.

Pour voir toutes les images sans alt text :

```sql
SELECT p.ID, p.post_title, pm.meta_value as alt_text
FROM wp_posts p
LEFT JOIN wp_postmeta pm ON p.ID = pm.post_id AND pm.meta_key = '_wp_attachment_image_alt'
WHERE p.post_type = 'attachment'
AND p.post_mime_type LIKE 'image/%'
AND (pm.meta_value IS NULL OR pm.meta_value = '');
```

Pour ajouter un alt text base sur le titre de l'image :

```sql
INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT p.ID, '_wp_attachment_image_alt', p.post_title
FROM wp_posts p
LEFT JOIN wp_postmeta pm ON p.ID = pm.post_id AND pm.meta_key = '_wp_attachment_image_alt'
WHERE p.post_type = 'attachment'
AND p.post_mime_type LIKE 'image/%'
AND (pm.meta_value IS NULL OR pm.meta_value = '');
```

Ce n'est pas ideal (le titre n'est pas toujours un bon alt text), mais c'est mieux que rien et ca te donne une base a ameliorer.

## Comment ecrire un bon alt text

Maintenant que tu peux editer en masse, encore faut-il ecrire des alt text corrects :

**Les regles :**
- **Descriptif** : decris ce que montre l'image ("Graphique montrant l'evolution du chiffre d'affaires entre 2023 et 2025")
- **Concis** : 5 a 15 mots maximum
- **Mot-cle** : inclus naturellement le mot-cle de la page si pertinent
- **Pas de "Image de..."** : le navigateur sait deja que c'est une image. Commence directement par la description.
- **Contexte** : adapte le alt text au contexte de la page, pas juste au contenu visuel

**Exemples :**
- Mauvais : "image1.jpg"
- Moyen : "Logo"
- Bon : "Logo de Stripe sur fond blanc"
- Excellent : "Tableau de bord Stripe affichant les revenus mensuels d'une boutique e-commerce"

## Astuces

- **Les images decoratives** (separateurs, arriere-plans) doivent avoir un alt text vide (`alt=""`), pas un alt text absent. Ca dit aux lecteurs d'ecran de les ignorer.
- **Fais un audit tous les 3 mois** : les nouvelles images s'accumulent souvent sans alt text
- **Nomme bien tes fichiers avant l'upload** : `tableau-bord-stripe.jpg` est mieux que `IMG_20240315.jpg`. Certains plugins utilisent le nom de fichier comme alt text par defaut.
- **Verifie tes images WooCommerce** : les photos produits sont souvent les plus negligees et les plus importantes pour le SEO
- Utilise **Ahrefs** ou **SEMrush** pour voir quelles images de ton site apparaissent deja dans Google Images et optimise en priorite celles qui ont du potentiel

## Plugins IA pour generer les alt text automatiquement

En 2025, plusieurs plugins utilisent la reconnaissance d'image par IA pour generer des alt text :

- **Alt Text AI** : utilise l'API GPT-4 Vision pour analyser chaque image et generer un alt text descriptif. Fonctionne en masse. Necessite une cle API OpenAI.
- **Jejesoft Bulk Alt Text** : generation automatique d'alt text par IA avec validation avant application.
- **Image SEO** : plugin premium qui optimise automatiquement les alt text, noms de fichiers et metadonnees des images pour le SEO. A partir de 4.99 EUR/mois.

Ces outils font gagner enormement de temps sur les gros catalogues (500+ images), mais il faut toujours relire et ajuster les resultats. L'IA peut mal interpreter le contexte ou le sujet d'une image.

## Outils mentionnes

- **Media Library Assistant** : gestion avancee de la mediatheque WordPress, gratuit. Developpe par David Lingren, maintenu activement. Recherche etendue, Content Templates, support multilingue. Derniere mise a jour : fevrier 2026.
- **Media Library Alt Text Editor** : edition rapide des alt text directement dans la bibliotheque de medias, gratuit
- **Media Library Tools** (Tiny Solutions) : renommage en masse, detection medias non utilises, import/export CSV
- **Media Library Helper** (Codexin) : edition en masse des alt text, captions et descriptions. 10 000+ installations actives, note 4.9/5.
- **Screaming Frog** : crawler SEO pour detecter les images sans alt text (gratuit jusqu'a 500 URLs, licence a 259 GBP/an)
- **API OpenAI Vision** (GPT-4 Vision) : generation de descriptions d'images par IA. ~0.01 USD par image analysee.
- **phpMyAdmin** : edition directe de la base de donnees WordPress
