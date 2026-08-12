---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Essayer Les Plugins Wordpress Sans Les Installer !
author: Diane
description: 'Découvre Essayer Les Plugins Wordpress Sans Les Installer ! : outil
  français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Essayer les plugins WordPress sans les installer

Tu hesites entre deux plugins ? Tu veux tester un plugin avant de le mettre sur ton vrai site ? Il existe des outils qui te permettent de lancer un WordPress jetable en quelques secondes, avec le plugin deja installe. Zero risque, zero nettoyage.

## Pourquoi ne pas tester directement sur ton site

Installer un plugin sur ton site de production pour "voir ce que ca fait", c'est risque :

- **Conflit avec tes autres plugins** : certains plugins ne font pas bon menage ensemble
- **Ralentissement** : un plugin mal code peut diviser ta vitesse par deux
- **Donnees residuelles** : meme apres desinstallation, beaucoup de plugins laissent des traces en base
- **Faille de securite** : un plugin douteux peut ouvrir une porte aux hackers
- **Ecran blanc** : dans le pire des cas, ton site plante et tes visiteurs voient une page blanche

La solution : tester dans un environnement jetable.

## Methode 1 : TasteWP (la plus rapide)

[TasteWP](https://tastewp.com) cree un site WordPress complet en moins de 10 secondes. Gratuit, sans inscription.

### Comment l'utiliser

1. Va sur [tastewp.com](https://tastewp.com)
2. Clique sur **Setup my WordPress**
3. Un site complet est cree avec des identifiants admin
4. Installe le plugin que tu veux tester depuis le tableau de bord

### L'astuce URL magique

Pour tester un plugin du repertoire WordPress.org sans meme aller sur TasteWP :

1. Prends l'URL du plugin sur WordPress.org :
   `https://wordpress.org/plugins/nom-du-plugin/`
2. Remplace `wordpress` par `tastewp` :
   `https://tastewp.com/plugins/nom-du-plugin/`
3. TasteWP cree un site avec le plugin deja installe et active

Ca marche pour **tous les plugins** du repertoire officiel.

### Limites

- Le site est temporaire (2 jours sans compte, 7 jours avec un compte gratuit)
- Espace disque limite a 1 Go en gratuit (20 Go en premium)
- WordPress en anglais par defaut
- Pas de nom de domaine personnalise

### TasteWP Premium

TasteWP propose desormais une offre premium a 4.98 USD/mois par site qui inclut :
- Sites permanents (pas d'expiration)
- 20 Go d'espace disque
- Support prioritaire
- Possibilite d'utiliser un domaine personnalise (a venir)

TasteWP supporte les versions de WordPress de 6.0 a 6.9.1 (derniere version). Tu peux choisir ta version au moment de la creation du site.

## Methode 2 : InstaWP (plus de fonctionnalites)

[InstaWP](https://instawp.com) est similaire a TasteWP mais avec plus d'options.

1. Cree un compte gratuit sur [instawp.com](https://instawp.com)
2. Clique sur **Create Site**
3. Choisis ta version de WordPress et de PHP
4. Installe tes plugins de test

**Avantages par rapport a TasteWP** :
- Choix de la version WordPress et PHP
- Possibilite de sauvegarder ton site de test en template
- Partage par lien (utile pour montrer un plugin a un client)
- Sandboxes gratuites pendant 48 heures

InstaWP a evolue vers une plateforme d'hebergement WordPress complete. Leurs plans d'hebergement vont de 2 USD/mois (Sandbox) a 45 USD/mois (Elite), mais les sandboxes de test temporaires restent gratuites. Ils proposent aussi un programme agence.

## Methode 3 : WordPress Playground (officiel)

WordPress propose maintenant son propre outil de test directement dans le navigateur.

1. Va sur [playground.wordpress.net](https://playground.wordpress.net)
2. Un WordPress complet tourne dans ton navigateur (via WebAssembly)
3. Installe et teste ce que tu veux
4. Rien n'est envoye sur un serveur, tout reste local

**Avantage** : c'est officiel, gratuit, et ca tourne meme hors ligne une fois charge. Tu peux tester differentes versions de WordPress et de PHP. Le Playground peut meme etre embarque dans d'autres sites web.
**Inconvenient** : les performances dependent de ton ordinateur, et les donnees disparaissent quand tu fermes l'onglet. Les plugins qui necessitent des fonctionnalites serveur specifiques (cron jobs, envoi d'emails) ne fonctionneront pas completement.

## Methode 4 : Environnement local (pour les habitues)

Si tu testes souvent des plugins, installe un WordPress local sur ton ordinateur :

### LocalWP (recommande)

1. Telecharge [LocalWP](https://localwp.com) (gratuit, Mac/Windows/Linux)
2. Cree un nouveau site en 2 clics
3. Teste autant de plugins que tu veux
4. Supprime le site quand tu as fini

### DevKinsta

Alternative gratuite par Kinsta, meme principe que LocalWP.

**Avantages du local** :
- Pas de limite de temps
- Tu peux creer des dizaines de sites de test
- Vitesse maximale (tout tourne sur ta machine)
- Tu peux importer une copie de ton vrai site pour tester en conditions reelles

## Methode 5 : Staging sur ton hebergeur

La plupart des hebergeurs modernes proposent un environnement de staging :

- **Kinsta** : staging en 1 clic
- **WP Engine** : staging integre
- **o2switch** : staging via Softaculous
- **OVH** : pas de staging natif, mais tu peux creer un sous-domaine dedie

Le staging est une copie exacte de ton site de production. Tu testes, tu valides, puis tu pousses les changements en production.

## Quelle methode choisir ?

| Besoin | Methode recommandee |
|--------|-------------------|
| Test rapide d'un plugin (5 min) | TasteWP |
| Comparer 2-3 plugins | InstaWP ou WordPress Playground |
| Tester un plugin premium | LocalWP |
| Tester sur une copie de ton site | Staging hebergeur |
| Montrer un plugin a un client | InstaWP (lien de partage) |

## Checklist de test d'un plugin

Quand tu testes un plugin dans ton environnement jetable, verifie :

1. **L'interface** : est-elle intuitive ? Bien traduite en francais ?
2. **Les fonctionnalites** : fait-il vraiment ce que tu attends ?
3. **La vitesse** : ouvre les DevTools du navigateur (F12 > Onglet Reseau) et regarde si le plugin ajoute beaucoup de requetes
4. **Les conflits** : installe tes plugins habituels a cote et verifie que tout cohabite
5. **Le support** : regarde le forum du plugin, les developpeurs repondent-ils rapidement ?
6. **Les mises a jour** : quand date la derniere version ? Un plugin abandonne est un plugin dangereux.

## Astuces

- **Bookmark l'astuce TasteWP** : remplacer `wordpress.org` par `tastewp.com` dans l'URL du plugin, ca fait gagner un temps fou
- **Teste aussi la desinstallation** : un bon plugin se desinstalle proprement sans laisser de traces
- **Compare les performances** : installe Query Monitor sur ton site de test pour mesurer l'impact reel d'un plugin sur les requetes et le temps de chargement
- Avant d'acheter un plugin premium, contacte le support pour demander une version de demo ou une garantie de remboursement

## Outils mentionnes

- **TasteWP** : WordPress jetable en 10 secondes, gratuit sans inscription. Premium a 4.98 USD/mois/site pour des sites permanents. Site : [tastewp.com](https://tastewp.com). Supporte WordPress 6.0 a 6.9.1.
- **InstaWP** : sandboxes WordPress gratuites pendant 48h. Hebergement complet a partir de 2 USD/mois. Site : [instawp.com](https://instawp.com).
- **WordPress Playground** : WordPress officiel dans le navigateur via WebAssembly, gratuit et open source. Site : [playground.wordpress.net](https://playground.wordpress.net). Fonctionne meme hors ligne.
- **LocalWP** : WordPress local sur ton ordinateur, gratuit. Plus d'un million de telechargements. Disponible sur Mac (Intel et Apple Silicon), Windows et Linux. Fonctionnalites : Live Links (partage avec clients), Cloud Backups, hot-swap PHP, WP-CLI integre, SSL automatique. Site : [localwp.com](https://localwp.com).
- **DevKinsta** : environnement WordPress local par Kinsta, gratuit. Site : [kinsta.com/devkinsta](https://kinsta.com/devkinsta/).
- **Query Monitor** : analyse de performance des plugins, gratuit et open source. Plus d'un million d'installations actives.
