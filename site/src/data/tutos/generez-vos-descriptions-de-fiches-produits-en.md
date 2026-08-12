---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Générez Vos Descriptions De Fiches Produits En Automatique Sur Woocommerce
author: Diane
description: 'Découvre Générez Vos Descriptions De Fiches Produits En Automatique
  Sur Woocommerce : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Generer tes descriptions de fiches produits en automatique sur WooCommerce

Ecrire 50, 100 ou 500 descriptions de produits a la main, c'est un enfer. Surtout quand tu sais que 80% des fiches produits e-commerce sont mediocres (copiees du fournisseur ou bacles en 2 lignes). L'IA change la donne : tu peux generer des descriptions uniques, optimisees SEO, en quelques minutes.

## Pourquoi ne pas garder les descriptions du fournisseur

- **Contenu duplique** : des centaines de boutiques utilisent le meme texte. Google penalise le duplicate content.
- **Zero personnalite** : les descriptions fabricant sont techniques et froides. Tes clients veulent savoir ce que le produit fait pour eux.
- **Pas de SEO** : le fournisseur n'optimise pas ses textes pour tes mots-cles a toi.

## Methode 1 : Plugin WP AI directement dans WooCommerce

### Plugins WP AI pour WooCommerce

Plusieurs plugins ajoutent un bouton "Generer" directement dans l'editeur de fiche produit. Voici les options disponibles en 2025 :

**AI for WooCommerce (aiforwoo.com)** : le plus complet. Il propose un generateur de contenu en masse (bulk), un assistant IA pour la boutique (chatbot), la generation de titres et FAQ SEO, et l'amelioration de contenu existant. Support multi-langues inclus. Permet de personnaliser le ton et le prompt.

**WooCommerce AI Assistant** : extension freemium qui integre les API d'OpenAI directement dans l'editeur WooCommerce. Tu configures ta cle API, et un bouton "Generer" apparait dans chaque fiche produit.

Configuration typique :

1. Installe le plugin depuis **Extensions > Ajouter**
2. Configure ta cle API OpenAI (tu as besoin d'un compte sur [platform.openai.com](https://platform.openai.com))
3. Va sur n'importe quelle fiche produit WooCommerce
4. Clique sur **Generer la description**
5. Le plugin utilise le titre du produit, les attributs et la categorie pour creer une description complete

**Avantage** : tout se passe dans WordPress, pas besoin de copier-coller.
**Cout** : le plugin est souvent gratuit, mais tu paies l'API OpenAI (~0.002 a 0.01 USD par description selon le modele utilise). GPT-4o-mini est le plus economique, GPT-4o donne des resultats plus riches.

**Note** : certains plugins comme ProSeller AI ont ete temporairement fermes sur WordPress.org pour revision. Verifie toujours que le plugin est actif et maintenu avant de l'installer.

### SEO Writing Assistant (plugin Yoast + IA)

Si tu utilises deja Yoast SEO :

1. Yoast propose des suggestions d'amelioration directement dans l'editeur
2. Combine avec un outil IA externe pour rediger le premier jet
3. Yoast t'indique si la description est optimisee pour ton mot-cle cible

## Methode 2 : Generation en masse avec ChatGPT / Claude

Pour traiter des dizaines de produits d'un coup :

### Etape 1 : Exporter tes produits

1. Va dans **WooCommerce > Produits > Exporter**
2. Exporte en CSV avec les colonnes : nom, categorie, attributs, prix, description courte actuelle

### Etape 2 : Preparer ton prompt

Voici un prompt efficace pour generer des descriptions e-commerce :

```
Tu es un copywriter specialise en e-commerce francophone.
Pour chaque produit, redige :
- Une description courte (2 phrases max, accrocheuse, benefices client)
- Une description longue (150-200 mots, SEO-friendly, structure avec des tirets)

Ton : direct, concret, axe benefices.
Inclus le mot-cle principal naturellement.
Ne repete pas le nom du produit dans chaque phrase.

Produit : [NOM]
Categorie : [CATEGORIE]
Attributs : [ATTRIBUTS]
Prix : [PRIX]
```

### Etape 3 : Traitement par lot

Envoie tes produits par groupes de 5 a 10 a ChatGPT ou Claude. Copie les resultats dans un tableur avec les colonnes correspondantes de WooCommerce.

### Etape 4 : Reimporter dans WooCommerce

1. Va dans **WooCommerce > Produits > Importer**
2. Upload ton CSV modifie
3. Mappe les colonnes (description courte, description longue)
4. Lance l'import. Les fiches existantes sont mises a jour.

## Methode 3 : Automatisation complete avec Make ou Zapier

Pour les boutiques qui ajoutent des produits regulierement :

1. **Declencheur** : nouveau produit ajoute dans WooCommerce (sans description)
2. **Action IA** : Make envoie le titre et les attributs a l'API OpenAI
3. **Mise a jour** : le resultat est reinjecte dans la fiche produit WooCommerce via l'API REST

Avec Make, ca ressemble a :
- Module **WooCommerce > Watch Products** (declencheur)
- Module **OpenAI > Create a Completion** (generation)
- Module **WooCommerce > Update a Product** (mise a jour de la description)

**Resultat** : chaque produit ajoute recoit automatiquement sa description en quelques secondes.

## Methode 4 : SEO Writing Assistant externe

Des outils comme **SEMrush Writing Assistant** ou **Surfer SEO** analysent les pages qui se classent deja pour ton mot-cle et te donnent des recommandations :

- Longueur ideale de la description
- Mots-cles a inclure (principaux et secondaires)
- Niveau de lisibilite
- Structure recommandee

Tu peux combiner ces recommandations avec la generation IA pour obtenir des descriptions a la fois uniques et optimisees.

## Structure d'une fiche produit qui convertit

Quelle que soit la methode, ta description doit suivre cette structure :

1. **Accroche** (1 phrase) : le benefice principal pour le client
2. **Description** (3-4 phrases) : ce que le produit fait, pour qui, dans quel contexte
3. **Caracteristiques cles** (liste a puces) : les specs techniques importantes
4. **Social proof** (optionnel) : "Plus de 2 000 clients satisfaits"
5. **Appel a l'action** : "Commande le tien avant rupture de stock"

## Verifier et ameliorer les descriptions generees

L'IA fait 80% du travail, mais tu dois toujours relire :

- **Exactitude** : l'IA invente parfois des caracteristiques. Verifie les specs techniques.
- **Ton de marque** : adapte le style pour qu'il corresponde a ta boutique (luxe, decontracte, technique, etc.)
- **Mots-cles** : verifie que le mot-cle principal apparait dans la description et dans le titre SEO
- **Descriptions uniques** : si l'IA genere des descriptions trop similaires entre produits proches, reformule manuellement

## Astuces

- **N'utilise jamais la description fabricant telle quelle** : meme si tu la reformules avec l'IA, ajoute toujours un angle unique (experience utilisateur, comparaison, contexte d'utilisation)
- **Les descriptions courtes sont plus importantes que les longues** : c'est ce que le client voit en premier sur la page produit et dans les resultats de recherche
- **Pense mobile** : tes descriptions doivent etre lisibles sur petit ecran. Phrases courtes, paragraphes aeres, listes a puces.
- **Teste des variantes** : sur tes 5 produits les plus vendus, ecris 2 versions de la description et compare les taux de conversion sur 2 semaines
- **Budget API** : a 0.01 euro par description, 500 produits te coutent ~5 euros. C'est derisoire compare au temps economise.

## Couts reels de la generation IA par lot

| Modele | Cout approximatif par description | 500 produits |
|--------|----------------------------------|-------------|
| GPT-4o-mini (OpenAI) | ~0.002 USD | ~1 USD |
| GPT-4o (OpenAI) | ~0.01 USD | ~5 USD |
| Claude 3.5 Sonnet (Anthropic) | ~0.01 USD | ~5 USD |
| Claude 3.5 Haiku (Anthropic) | ~0.003 USD | ~1.50 USD |

Ces couts sont bases sur des descriptions de 150-200 mots. L'API OpenAI et l'API Anthropic facturent au token (nombre de caracteres traites). Les prix evoluent regulierement a la baisse.

## Outils mentionnes

- **API OpenAI** (ChatGPT) : generation de texte par IA. Inscription sur [platform.openai.com](https://platform.openai.com). Paiement a l'usage, pas d'abonnement obligatoire. Modeles recommandes : GPT-4o-mini pour le volume, GPT-4o pour la qualite.
- **Claude** (Anthropic) : alternative a ChatGPT pour la redaction, particulierement bon pour le francais. API sur [console.anthropic.com](https://console.anthropic.com).
- **AI for WooCommerce** (aiforwoo.com) : suite complete de generation de contenu IA pour WooCommerce, avec generation en masse, chatbot, et optimisation SEO.
- **Make** (ex-Integromat) : automatisation de la generation. Plan gratuit avec 1 000 credits/mois. Site : [make.com](https://www.make.com).
- **Yoast SEO** : optimisation SEO des fiches produits. Gratuit, Premium a 99 USD/an. Le bundle WooCommerce + Yoast est a 145 USD/an.
- **Surfer SEO** : recommandations SEO basees sur l'analyse de la concurrence. A partir de 89 USD/mois. Site : [surferseo.com](https://surferseo.com).
- **SEMrush Writing Assistant** : recommendations SEO integrees a Google Docs et WordPress. Inclus dans l'abonnement SEMrush (a partir de 139 USD/mois).
- **WooCommerce Import/Export** : outil natif integre a WooCommerce pour le traitement en masse via CSV
