---
section: tutos
tags:
- Tutoriels
imageNameKey: null
title: Comment Installer Et Désinstaller Un Plugin Wordpress Proprement
author: Diane
description: 'Découvre Comment Installer Et Désinstaller Un Plugin Wordpress Proprement
  : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment installer et desinstaller un plugin WordPress proprement

Installer un plugin, tout le monde sait faire. Le desinstaller proprement, c'est une autre histoire. La plupart des gens cliquent juste sur "Supprimer" et passent a autre chose. Sauf que derriere, ca laisse des traces en base de donnees, des fichiers orphelins, et ton site ralentit un peu plus a chaque fois.

## Installer un plugin : les 3 methodes

### Methode 1 : Depuis le tableau de bord (la plus simple)

1. Va dans **Extensions > Ajouter**
2. Tape le nom du plugin dans la barre de recherche
3. Clique sur **Installer maintenant**
4. Puis clique sur **Activer**

Ca marche pour tous les plugins gratuits disponibles sur le repertoire officiel WordPress.org (plus de 60 000 plugins disponibles).

### Methode 2 : Uploader un fichier ZIP

Pour les plugins premium ou ceux telecharges depuis un site externe :

1. Va dans **Extensions > Ajouter**
2. Clique sur **Telecharger une extension** en haut
3. Choisis le fichier `.zip` sur ton ordinateur
4. Clique sur **Installer maintenant** puis **Activer**

### Methode 3 : Via FTP (pour les cas speciaux)

Si l'upload echoue (limite de taille, timeout), passe par FTP :

1. Dezippe le plugin sur ton ordinateur
2. Connecte-toi en FTP avec FileZilla ou Cyberduck
3. Upload le dossier du plugin dans `/wp-content/plugins/`
4. Retourne dans le tableau de bord WordPress > **Extensions**
5. Trouve le plugin et clique sur **Activer**

## Avant d'installer : les verifications indispensables

Ne fonce pas tete baissee. Avant chaque installation, verifie :

- **Derniere mise a jour** : si le plugin n'a pas ete mis a jour depuis 2 ans, passe ton chemin
- **Compatibilite** : verifie qu'il est compatible avec ta version de WordPress
- **Nombre d'installations actives** : en dessous de 1 000, c'est risque
- **Avis utilisateurs** : lis les 1 etoile, c'est la que tu trouves les vrais problemes
- **Support actif** : est-ce que le developpeur repond aux questions dans le forum ?

**Regle d'or** : fais une sauvegarde de ton site avant d'installer un nouveau plugin. Toujours.

## Desinstaller un plugin : la methode propre

### Etape 1 : Desactiver le plugin

Va dans **Extensions > Extensions installees**, trouve le plugin et clique sur **Desactiver**. Ne le supprime pas encore.

Teste ton site. Si tout fonctionne normalement, passe a la suite.

### Etape 2 : Supprimer le plugin

Clique sur **Supprimer**. Ca enleve les fichiers du plugin de `/wp-content/plugins/`.

Mais attention : beaucoup de plugins ne suppriment pas leurs donnees en base. C'est fait expres, pour que tu puisses les reinstaller sans tout reconfigurer. Sauf que si tu ne reviens jamais, ces donnees restent la pour rien.

### Etape 3 : Nettoyer la base de donnees

C'est l'etape que 95% des gens sautent. Voici comment faire :

**Avec le plugin Advanced Database Cleaner :**

1. Installe **Advanced Database Cleaner**
2. Va dans l'onglet **Tables** : il detecte les tables orphelines laissees par d'anciens plugins
3. Selectionne celles a supprimer et nettoie
4. Va dans l'onglet **Options** : meme chose pour les options en base
5. Desinstalle Advanced Database Cleaner quand tu as fini

**Manuellement avec phpMyAdmin :**

1. Accede a phpMyAdmin depuis ton hebergeur
2. Cherche les tables qui commencent par le prefixe du plugin (ex: `wp_yoast_*`, `wp_wc_*`)
3. Selectionne-les et choisis **Supprimer**
4. Dans la table `wp_options`, cherche les options liees au plugin et supprime-les

### Etape 4 : Nettoyer les fichiers residuels

Certains plugins creent des dossiers dans `/wp-content/` en dehors de `/plugins/`. Par exemple :
- `/wp-content/cache/` (plugins de cache)
- `/wp-content/w3tc-config/` (W3 Total Cache)
- `/wp-content/uploads/` (fichiers generes)

Verifie en FTP et supprime les dossiers orphelins.

## Combien de plugins maximum ?

Il n'y a pas de regle absolue, mais voici des reperes :

- **Moins de 20** : tu es clean
- **20 a 40** : ca depend de la qualite des plugins
- **Plus de 40** : tu as probablement des plugins inutiles ou redondants

Ce n'est pas le nombre qui compte, c'est la qualite. Un seul plugin mal code peut ralentir ton site plus que 30 plugins bien faits.

## Astuces

- Utilise **WP Plugin Manager** pour desactiver des plugins sur certaines pages seulement (un plugin de formulaire n'a pas besoin de charger sur toutes les pages)
- **Health Check & Troubleshooting** (plugin officiel WordPress) te permet de desactiver tous les plugins temporairement sans affecter tes visiteurs
- Fais un audit de tes plugins tous les 3 mois : desactive ceux que tu n'utilises plus
- **Query Monitor** te montre quel plugin ralentit ton site : commence par la pour savoir quoi virer

## Depuis WordPress 6.x : ce qui a change

- **L'ecran d'ajout de plugins** a ete refondu avec une meilleure mise en avant des informations de securite et de compatibilite. Tu vois desormais plus clairement si un plugin est compatible avec ta version de WordPress et PHP.
- **Le repertoire officiel** compte plus de 60 000 plugins gratuits. Le filtrage par "WordPress.org Verified" ou par nombre d'installations actives reste le meilleur filtre de qualite.
- **Auto-updates** : depuis WordPress 5.5, tu peux activer les mises a jour automatiques pour chaque plugin individuellement dans la page Extensions. Pratique pour les plugins critiques de securite.
- **PHP 8.2+** : si ton hebergeur est passe en PHP 8.2 ou 8.3, verifie que tes plugins sont compatibles. Beaucoup de plugins anciens generent des avertissements "deprecated" sur ces versions.

## Outils mentionnes

- **Advanced Database Cleaner** : nettoyage des tables, options et metadonnees orphelines. Version gratuite et version Pro a partir de 39 USD. Mis a jour regulierement (derniere mise a jour : janvier 2026). Developpe par Younes JFR, plus de 80 000 installations actives. La version Pro ajoute la detection des tables orphelines, des options orphelines, des cron jobs orphelins, et des analytics sur l'evolution de la base.
- **WP-Optimize** : alternative tout-en-un (nettoyage base + cache + compression images). Gratuit, Pro a partir de 58 USD/an.
- **WP Plugin Manager** : chargement conditionnel des plugins par page
- **Health Check & Troubleshooting** : mode debug isole sans impacter les visiteurs. Plugin officiel de l'equipe WordPress Performance, disponible gratuitement sur wordpress.org.
- **Query Monitor** : analyse des performances, requetes SQL, hooks et erreurs PHP par plugin. Gratuit et open source.
- **FileZilla** / **Cyberduck** : clients FTP pour acceder aux fichiers du site
