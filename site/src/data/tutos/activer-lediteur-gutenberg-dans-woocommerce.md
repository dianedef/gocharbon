---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Activer L'Éditeur Gutenberg Dans Woocommerce
author: Diane
description: 'Découvre Activer L''Éditeur Gutenberg Dans Woocommerce : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

comment activer l'éditeur Gutenberg à la place de l'éditeur par défaut dans WooCommerce. L'idée est de créer des pages de produits attrayantes avec un peu de design dans la description pour mieux vendre nos produits sur un site WordPress.

La problématique est la suivante : sur ce site que je suis en train de réaliser, le contenu de certains produits est un peu ennuyeux, se résumant principalement à du texte. Bien sûr, nous pourrions ajouter des titres, des listes à puces, etc., mais cela ne ferait que créer de longs blocs de texte, ce qui n'est pas idéal.

Pour y parvenir, nous allons diviser ce processus en deux étapes. Tout d'abord, nous allons installer un plugin appelé "Code Snippet," qui nous permettra d'ajuster un petit bout de code pour autoriser l'utilisation de Gutenberg dans l'éditeur WooCommerce. Ensuite, je vais vous montrer comment créer un layout en deux colonnes pour rendre le contenu plus attrayant.

## Étape 1 : Installation du Plugin Code Snippet

Pour résoudre ce problème, nous allons d'abord installer le plugin "Code Snippet." Ce plugin est très généreux en fonctionnalités et pratique lorsque vous avez besoin de personnaliser votre site sans avoir à coder vous-même.
Après avoir installé le plugin, créer un snippet nommé "Activation Gutenberg dans WooCommerce" dans la section "fonction.php."

```php
	
// Activer Gutenberg pour WooCormerce
function activer_gutenberg_pour_produits($can_edit, $post_type) {
	if ($post_type == 'product') {
	$can edit = true;
	}
	return $can_edit;
}
add_filter('use_block_editor_for_post_type', 'activer_gutenberg_pour_produits', 10, 2);
```
## Étape 2 : Activater le snippet Gutenberg Dans WooCommerce

Après avoir ajouté le snippet, activer Gutenberg dans WooCommerce dans les réglages de l'extension


Maintenant que nous avons activé Gutenberg, nous pouvons personnaliser le contenu des produits et par exemple créer un layout en deux colonnes pour rendre notre contenu plus attractif.

## Conclusion

En conclusion, activer l'éditeur Gutenberg dans WooCommerce est un moyen efficace d'améliorer l'apparence de vos produits sur votre site WordPress. Cela permet de rendre vos pages de produits plus attrayantes et de mieux vendre vos produits. N'hésitez pas à explorer davantage cette fonctionnalité pour personnaliser vos pages de produits selon vos besoins.