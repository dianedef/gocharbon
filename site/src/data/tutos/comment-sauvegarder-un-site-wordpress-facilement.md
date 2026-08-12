---
section: tutos
type: tuto
statut:
- backlog
_priorité: normal
imageNameKey: backup-wp
tags:
- Tutoriels
title: Comment Sauvegarder Un Site Wordpress Facilement
author: Diane
description: 'Découvre Comment Sauvegarder Un Site Wordpress Facilement : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

Voici un guide qui vous montrera comment installer [WP Umbrella](http://wordpress.org/plugins/wp-health) sur vos sites Web WordPress pour le garder en sécurité et fonctionner à des performances optimales.Comment configurer WP Umbrella sur vos sites Web WordPress

# **Étape 1 : Créez un compte (c'est gratuit)**

Rendez-vous sur l'application WP Umbrella et [créez votre compte](https://app.wp-umbrella.com/register) . C'est gratuit et cela vous donnera accès à toutes nos fonctionnalités pendant 14 jours.


# **Étape 2 : ajouter un projet**

Cliquez sur Ajouter un projet et remplissez les informations requises.


Ensuite, cliquez sur 'Créer un projet'.


Votre projet et votre clé API ont été créés. Ce n'est pas le moment de connecter votre API clé.

# **Étape 3 : Obtenez votre clé API**

Copiez votre clé API et accédez à votre panneau d'administration WordPress. Votre clé API se trouve ici :


# **Étape 4 : Installez WP Umbrella sur votre site WordPress**

Vous pouvez télécharger WP Umbrella [ici](https://downloads.wordpress.org/plugin/wp-health.v1.2.2.zip) ou depuis le répertoire des plugins WordPress.

Cliquez sur « Plugins » > « Ajouter un nouveau » et recherchez WP Umbrella.


Recherchez ensuite « WP Umbrella » et cliquez sur « Installer maintenant » puis « Activer »

# **Étape 5 : connectez votre clé API**

Allez maintenant dans l'onglet des paramètres de WordPress et cliquez sur WP Umbrella. Ignorez la section créer un compte et passez la clé API associée dans ce champ.


# **Étape 6 : ajouter d'autres projets**

Nous utilisons la même clé API pour tous vos projets. Si vous souhaitez déployer WP Umbrella sur plusieurs sites, il vous suffit de répéter les étapes 4 et 5 (= installer WP Umbrella sur votre site et connecter l'API).

Le projet sera automatiquement ajouté dans notre application.

Les sites Web auxquels vous vous connecterez seront automatiquement ajoutés à votre

_Nota bene 1 : en version d'essai, vous ne pouvez créer qu'un seul projet. Envoyez-nous un message à [support@wp-umbrella.com](mailto:support@wp-umbrella.com) si vous souhaitez obtenir plus de projets à l'essai._
Dans cet article, j'aborderai les sujets suivants :

- Ce que signifie sauvegarder l'ensemble de ton site
- Les mesures de prévention, afin que tu puisses éviter d'_utiliser_ ces sauvegardes.
- Pourquoi la sauvegarde sans plugin est meilleure qu'avec un plugin ?
- Les différentes façons de sauvegarder ton site : automatique, manuelle et autres options.
- Pourquoi tu ne dois jamais mettre tous tes œufs dans le même panier, ni te fier à une seule méthode de sauvegarde.

### *SAUVEGARDER, C'EST BIEN : MAIS ATTENTION !

MAIS ASSURE-TOI AUSSI DE METTRE EN PLACE DES MESURES DE PRÉVENTION*.

Avant de parler davantage de la sauvegarde, réalise que des mesures de prévention peuvent et doivent être mises en place pour assurer la sécurité de ton site.

Il s'agit notamment de :

- Mettre à jour les plugins et les thèmes
- Utiliser des combinaisons de nom d'utilisateur et de mot de passe solides (c'est-à-dire pas **"admin "** et **"password "**).
- Créer des [préfixes de table de base de données] forts (http://www.wpbeginner.com/wp-tutorials/how-to-change-the-wordpress-database-prefix-to-improve-security/) (c'est-à-dire ne pas utiliser le **"wp "** de base).

Mais même lorsque tu es en sécurité et que tu mets en œuvre toutes les bonnes mesures de sécurité : _les choses peuvent toujours mal tourner._

C'est pourquoi il est important d'avoir un système de sauvegarde pour ton ou tes sites WordPress.

Cet article aborde les différentes façons dont tu peux le faire - mais sans plugin.

### *ATTENDS...POURQUOI NE PAS UTILISER UN PLUGIN WORDPRESS ?

PLUGIN!*

Il n'y a rien de mal à utiliser un plugin de sauvegarde fiable comme [BackupBuddy.](https://ithemes.com/purchase/backupbuddy/) Cependant, il est préférable d'effectuer la sauvegarde au niveau du serveur, et non au niveau du site.

Penses-y : un plugin qui fait des sauvegardes automatiques de ton (peut-être) très gros site, c'est comme un poids supplémentaire sur ton serveur. Chaque fois qu'il effectue une sauvegarde (qui pourrait être quotidienne), il fait du "travail" - ce qui pourrait ralentir ton site entre autres choses.

De plus, selon mon opinion professionnelle, moins il y a de plugins sur ton site WordPress, mieux c'est.

Même si certains ne sont pas d'accord, de mon point de vue, plus tu as le contrôle de ton site et de ses rouages, mieux c'est. Il est intelligent de se fier à soi-même plutôt qu'à une tierce personne, surtout lorsqu'il s'agit de sauvegarder les fichiers de ton précieux site.

#### 2 différents types de sauvegardes

Avant de plonger dans les différentes façons de sauvegarder ton site sans plugin, parlons de ce que tu peux et de ce que tu dois sauvegarder : **les fichiers du site et les bases de données**.

### _LES FICHIERS DE TON SITE WORDPRESS_

Ton site WordPress est composé de différents fichiers. D'après la [documentation WordPress,](https://codex.wordpress.org/WordPress_Backups#Backing_Up_Your_WordPress_Site)ton site WordPress est constitué de ces six éléments, d'une manière ou d'une autre :

I**Installation centrale de WordPress:** les fichiers que tu obtiens lorsque tu télécharges WordPress (image ci-dessous).

1. **WordPress Plugins:** comme expliqué ci-dessus, des fonctionnalités ajoutées à un site via des scripts PHP, qui se trouvent dans le dossier wp-content.
2. **WordPress Themes:** te permet de personnaliser l'apparence et certaines fonctionnalités du site, se trouve également dans le dossier wp-content.
3. **Images et fichiers:** différentes images et fichiers ajoutés pour le panneau d'administration ainsi que pour le site lui-même.
4. **scripts Java et PHP, et autres fichiers de code:** peuvent être ajoutés au backend interne ou au site orienté vers l'extérieur.
5. **Fichiers supplémentaires et pages Web statiques:** tout ce que tu pourrais ajouter.

Lorsque tu construis des sites WordPress, tu n'as pas grand-chose à bricoler en dehors des plugins et des thèmes WordPress. (Tous deux se trouvent dans le répertoire wp-content.) Cependant, il est toujours sage de sauvegarder TOUTES les parties de ton site afin de ne pas te retrouver à essayer de restaurer seulement une partie de ton site, ou pire, à essayer de trouver quelle partie de ton site est manquante afin de pouvoir la reconstituer ! En sauvegardant l'ensemble du site, il est beaucoup plus facile de le restaurer en cas de problème.

Pour un examen plus approfondi des fichiers WordPress, consulte le [Codex WordPress] (https://codex.wordpress.org/WordPress_Files).

Sache que lorsque tu fais des sauvegardes au niveau du serveur, la plupart des hébergeurs sauvegardent également les fichiers de ton site. Cependant, cela peut prendre un certain temps pour restaurer tous ces fichiers à partir de ton serveur si ton site devait tomber en panne. Et il est évident que tu veux que tout fonctionne à nouveau le plus rapidement possible.

De plus, il est toujours bon d'avoir une copie supplémentaire. Comme je l'expliquerai plus tard, il n'est jamais judicieux de mettre tous ses œufs dans le même panier.

Tu peux facilement sauvegarder ou copier les fichiers de ton site à partir de ton FTP. (C'est une méthode de sauvegarde sur laquelle je m'appuie fréquemment).

Cependant, il existe aussi d'autres logiciels, comme [WinSCP](http://winscp.net/eng/index.php), qui font des copies miroirs des fichiers du site et les enregistrent sur ton bureau, ce qui peut te faire gagner du temps.

Et puis, pour les utilisateurs plus avancés qui utilisent l'interface de ligne de commande [WP-CLI](http://wp-cli.org/), la sauvegarde des fichiers du site peut être effectuée à partir de la ligne de commande et sauvegardée sur ton ordinateur.

Et bien sûr, tu peux généralement faire des copies de sauvegarde des fichiers du site directement à partir de ton serveur.

Comme tu peux le constater, il existe de nombreuses façons de sauvegarder les fichiers de ton site Web. Ce qui compte le plus, c'est que tu _soies_ en train de sauvegarder les fichiers de ton site WordPress.

### _Ta base de données WordPress_

Sauvegarder les fichiers de ton site ne suffit pas.

Les fichiers de ton site **ne contiennent pas** toutes les informations de ton site (comme les articles de blog et les pages). Pour avoir une réplique complète de ton site, tu dois également sauvegarder ta base de données MySQL.

La base de données MySQL est l'endroit où toutes nos données WordPress vivent. Des données comme :

- Les articles
- Utilisateurs
- les commentaires
- Catégories et étiquettes (taxonomies)
- Et ainsi de suite

Si l'on se réfère à mon article [How to Install WordPress on Your Mac Using MAMP](http://skillcrush.com/2015/04/14/install-wordpress-mac/), dans lequel j'ai mis en place un nouveau site WordPress en local avec une base de données nommée **"skillcrush_db "**, on peut voir les tables de base de données fournies avec WordPress.

Au fil du temps, tu peux acquérir d'autres tables. (En fonction des plugins utilisés et des autres types de fonctionnalités ajoutées).

Ces tables contiennent certains contenus du site. Par exemple, voici à quoi ressemble la table **skillcrush_db posts**.

Comme tu peux le voir, il n'y a que deux articles publiés. (Les deux ont été ajoutés lors de l'installation de WP).

Bien sûr, un site plus grand avec beaucoup de messages et de pages aura beaucoup plus d'entrées.

**Tu dois sauvegarder ta base de données MySQL ainsi que les fichiers de ton site Web.

Les deux ensemble, les fichiers du site et ta base de données, constituent l'intégralité de ton site. **L'un sans l'autre n'est pas un site complet.