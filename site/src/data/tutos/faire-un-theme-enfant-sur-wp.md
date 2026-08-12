---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Faire Un Thème Enfant Sur Wp
author: Diane
description: 'Découvre Faire Un Thème Enfant Sur Wp : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment creer un theme enfant sur WordPress

Tu veux modifier ton theme WordPress ? Ne touche jamais directement aux fichiers du theme principal. A la prochaine mise a jour, toutes tes modifications seront ecrasees. La solution : creer un theme enfant. Ca prend 10 minutes et ca te sauve des heures de galere.

## C'est quoi un theme enfant ?

Un theme enfant herite de toutes les fonctionnalites et du style du theme parent. Tu n'y mets que les modifications que tu veux apporter. Le reste vient automatiquement du theme parent.

**Concretement** :
- Le theme parent = la base (Astra, GeneratePress, OceanWP, etc.)
- Le theme enfant = tes personnalisations (couleurs, typographies, fonctions PHP, templates modifies)
- A la mise a jour du theme parent, tes modifications dans le theme enfant restent intactes

## Quand creer un theme enfant ?

Tu en as besoin si tu veux :
- Modifier le CSS au-dela de ce que propose le Customizer
- Ajouter du code PHP personnalise (fonctions, hooks, filtres)
- Modifier un template specifique (header, footer, page produit WooCommerce)
- Surcharger un fichier du theme parent

Tu n'en as **pas** besoin si :
- Tu utilises uniquement le Customizer et des plugins
- Tu fais des modifications via un page builder (Elementor, Divi)
- Tu ne touches jamais au code

## Etape 1 : Creer le dossier du theme enfant

Connecte-toi en FTP ou via le gestionnaire de fichiers de ton hebergeur.

1. Va dans `/wp-content/themes/`
2. Cree un nouveau dossier. Convention de nommage : `[nom-du-theme-parent]-child`
   - Exemple : `astra-child`, `generatepress-child`

## Etape 2 : Creer le fichier style.css

Dans ton nouveau dossier, cree un fichier `style.css` avec ce contenu :

```css
/*
 Theme Name: Astra Child
 Theme URI: https://tonsite.com
 Description: Theme enfant pour Astra
 Author: Ton Nom
 Author URI: https://tonsite.com
 Template: astra
 Version: 1.0.0
*/
```

**Important** : la ligne `Template` doit contenir le nom exact du dossier du theme parent (en minuscules). Pas le nom affiche, le nom du dossier. Si ton theme parent est dans `/themes/astra/`, mets `Template: astra`.

Tu peux ensuite ajouter ton CSS personnalise directement dans ce fichier, apres le commentaire d'en-tete.

## Etape 3 : Creer le fichier functions.php

Dans le meme dossier, cree un fichier `functions.php` :

```php
<?php
// Charger le style du theme parent puis celui du theme enfant
function theme_enfant_enqueue_styles() {
    wp_enqueue_style(
        'parent-style',
        get_template_directory_uri() . '/style.css'
    );
    wp_enqueue_style(
        'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('parent-style')
    );
}
add_action('wp_enqueue_scripts', 'theme_enfant_enqueue_styles');
```

Ce code fait 2 choses :
1. Il charge d'abord le style du theme parent
2. Puis il charge le style du theme enfant par-dessus (pour que tes modifications prennent le dessus)

**Attention** : ne mets jamais de balise de fermeture `?>` a la fin de ton `functions.php`. Ca evite les erreurs "headers already sent".

## Etape 4 : Activer le theme enfant

1. Va dans **Apparence > Themes** dans ton tableau de bord WordPress
2. Tu devrais voir ton theme enfant dans la liste
3. Clique sur **Activer**
4. Verifie que ton site s'affiche correctement

Si le site parait "casse" apres activation, c'est probablement que la ligne `Template` dans `style.css` ne correspond pas au bon dossier parent.

## Aller plus loin : surcharger des templates

Pour modifier un template specifique du theme parent :

1. Copie le fichier depuis le dossier du theme parent vers le theme enfant en gardant la meme structure
2. Modifie la copie dans le theme enfant

Exemple : tu veux modifier le header.
- Copie `/themes/astra/header.php` vers `/themes/astra-child/header.php`
- Modifie la version dans le theme enfant
- WordPress utilisera automatiquement ta version

Pour WooCommerce, meme logique :
- Copie `/plugins/woocommerce/templates/single-product.php` vers `/themes/astra-child/woocommerce/single-product.php`

## Ajouter des fonctionnalites dans functions.php

Ton `functions.php` de theme enfant est l'endroit ideal pour ajouter du code personnalise. Quelques exemples utiles :

```php
// Retirer la version de WordPress du code source (securite)
remove_action('wp_head', 'wp_generator');

// Ajouter une taille d'image personnalisee
add_image_size('custom-thumb', 400, 300, true);

// Desactiver les emojis WordPress (performance)
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
```

## La methode rapide : utiliser un plugin

Si la ligne de commande te fait peur, le plugin **Child Theme Configurator** fait tout pour toi :

1. Installe et active le plugin
2. Va dans **Outils > Child Themes**
3. Selectionne ton theme parent
4. Clique sur **Analyser** puis **Creer le theme enfant**
5. Active-le

Le plugin s'assure que tout est correctement configure, y compris l'enqueue des styles.

## Erreurs courantes a eviter

- **Oublier la ligne Template** dans style.css : le theme enfant ne sera pas reconnu
- **Mettre le mauvais nom de dossier** dans Template : vise le nom du dossier, pas le nom affiche
- **Copier tout le theme parent** dans le theme enfant : ca n'a aucun interet et ca cree des problemes de maintenance
- **Modifier le functions.php du theme parent** : tout sera perdu a la mise a jour
- **Oublier de re-configurer le Customizer** : certains reglages du Customizer sont lies au theme actif. Apres activation du theme enfant, verifie tes menus, widgets et options.

## Astuces

- **Toujours sauvegarder** avant de toucher au code. Un point-virgule mal place dans `functions.php` = ecran blanc.
- Si tu obtiens un ecran blanc, connecte-toi en FTP et renomme le dossier du theme enfant pour forcer WordPress a revenir au theme parent.
- Les themes enfants fonctionnent avec tous les themes : gratuits, premium, Astra, GeneratePress, OceanWP, Divi, etc.
- Pour les gros projets, utilise un environnement local (LocalWP, DevKinsta) pour tester avant de deployer en production.

## Themes blocs (FSE) et themes enfants : ce qui change

Depuis WordPress 5.9 et l'introduction du Full Site Editing (FSE), les **themes blocs** (comme Twenty Twenty-Five, Flavor, Flavor Starter) fonctionnent differemment des themes classiques. Voici ce que ca change pour les themes enfants :

### Themes classiques (Astra, GeneratePress, OceanWP, Divi)

Le fonctionnement est exactement celui decrit dans ce tutoriel : `style.css` + `functions.php` + surcharge de templates PHP. Rien ne change.

### Themes blocs (FSE)

- Les themes blocs utilisent des **templates HTML** au lieu de templates PHP. Les personnalisations se font dans l'editeur de site (Apparence > Editeur) et sont stockees dans la base de donnees, pas dans des fichiers.
- Un theme enfant de theme bloc ne necessite pas forcement de `functions.php` pour l'enqueue des styles, car les themes blocs chargent les styles differemment (via `theme.json`).
- Pour creer un theme enfant de theme bloc, tu as besoin d'un fichier `style.css` (comme avant pour la declaration) et d'un fichier `theme.json` qui herite du parent.
- Les modifications de templates se font en copiant les fichiers `.html` du dossier `/templates/` ou `/parts/` du theme parent dans le theme enfant.

**En 2025-2026**, la majorite des sites WordPress professionnels utilisent encore des themes classiques (Astra reste le theme le plus populaire avec plus de 2 millions d'installations actives). Les themes blocs gagnent du terrain mais ne sont pas encore majoritaires.

### Quelle approche choisir ?

| Situation | Recommandation |
|-----------|---------------|
| Theme classique (Astra, GeneratePress, etc.) | Theme enfant classique (ce tutoriel) |
| Theme bloc (Twenty Twenty-Five, etc.) | Modifications dans l'editeur de site ou theme enfant bloc avec `theme.json` |
| Page builder (Elementor, Divi) | Pas besoin de theme enfant en general, les modifications se font dans le builder |
| Modifications PHP uniquement | Theme enfant classique, ou plugin Code Snippets comme alternative |

## Outils mentionnes

- **Child Theme Configurator** : plugin pour creer un theme enfant sans coder. Plus de 300 000 installations actives, note 4.5/5. Analyse le theme parent et cree automatiquement le theme enfant avec la bonne configuration.
- **Create Block Theme** : plugin officiel de WordPress pour creer et exporter des themes blocs. Gratuit. Utile si tu travailles avec des themes FSE.
- **Code Snippets** : alternative au theme enfant quand tu veux juste ajouter du code PHP personnalise sans creer de theme enfant. Plus de 4 millions d'installations actives.
- **FileZilla** / **Cyberduck** : clients FTP pour acceder aux fichiers du theme
- **LocalWP** / **DevKinsta** : environnements WordPress locaux pour tester. LocalWP est gratuit, disponible sur Mac/Windows/Linux, et supporte le hot-swap de versions PHP. Plus d'un million de telechargements.
