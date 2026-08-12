---
section: apps
metadataEnrichedAt: null
title: Alternatives Open Source
author: Diane
tags:
- Outils
description: 'Découvre Alternatives Open Source : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
---

[Consequences of Open Sourcing Software](https://www.builder.io/blog/oss-consequences)
[Novu - Open-source notifications infrastructure for devs and product teams](https://novu.co/)


# L'auto-hébergement facile avec Cloudron

Le 8 décembre 2023par Korben -

1. [Internet-Reseaux](https://korben.info/categories/internet-reseaux/ "Voir tous les articles de la catégorie Internet-Reseaux")
2. [Cloud](https://korben.info/categories/internet-reseaux/cloud/ "Voir tous les articles de la sous-catégorie Cloud")

On n’arrête pas le progrès !!

D’ailleurs, le monde de l’hébergement web n’est pas en reste y compris pour tout ce qui est self-hosting, ou auto-hébergement en bon français. Ce concept, longtemps réservé à une niche de geeks passionnés et de professionnels avertis, s’est largement démocratisé ces dernières années.

En effet, l’auto-hébergement offre une autonomie totale sur l’administration et la configuration de vos sites et applications web. Vous êtes le seul maître à bord et cette liberté a un goût particulièrement savoureux dans un monde numérique de plus en plus sujet aux dérives liées à la centralisation des données et à leur exploitation par de grosses entreprises.

Ici, c’est vous qui choisissez où vos données sont stockées, comment elles sont gérées et qui peut y accéder.

Mais évidemment, qui dit grand pouvoir dit aussi grandes responsabilités. L’auto-hébergement nécessite une certaine maîtrise technique et un investissement en temps souvent conséquent pour déployer et maintenir les applications, sans parler de la sécurité. Heureusement, des solutions existent pour vous faciliter la vie et en retirer tous les bénéfices sans avoir à en subir (trop) les inconvénients.

C’est pourquoi je souhaite vous parler aujourd’hui de [Cloudron](https://www.cloudron.io/), une plateforme qui fait véritablement entrer le self-hosting dans une nouvelle ère.

En quelques mots, il s’agit d’une plateforme qui simplifie considérablement l’auto-hébergement en permettant de déployer en quelques minutes seulement vos applications préférées, allant de NextCloud à RocketChat en passant par Gogs, pour ne citer qu’eux. [Si la liste vous intéresse, cliquez ici](https://www.cloudron.io/store/index.html).


Avec Cloudron, chaque application est déployée dans un container Docker, ce qui facilite à la fois l’installation, la mise à jour et la sauvegarde.

Pas de blabla inutile, pas de manipulations compliquées, tout est pensé pour vous faciliter la vie et vous permettre de vous concentrer sur l’essentiel : l’utilisation de vos applications. L’équipe de Cloudron propose même un service clé en main incluant l’hébergement et le backup si vous ne souhaitez pas vous lancer dans l’hébergement sur votre propre serveur.

>>1.20<<

Cloudron, c’est aussi une série de fonctionnalités particulièrement attractives pour tous ceux qui s’intéressent à l’auto-hébergement. On y trouve une quarantaine d’applications disponibles en un clic, un serveur mail complet avec SPF, DKIM et DMARC, un système de backup en local ou sur Amazon S3 et via Minio, ainsi qu’un système de sécurité complet avec iptables, les clés SSH et le protocole HTTPS sécurisé avec HSTS pour tous les sous-domaines.


En termes de prérequis, se lancer avec Cloudron ne demande pas grand-chose. Il vous faudra simplement un serveur Ubuntu Jammy 22.04 (x64) avec 1 Go de RAM ou plus, 20 GB d’espace disque, un nom de domaine (et pas seulement un sous-domaine) et une connexion SSH en utilisant une clé SSH. L’installation se fait en quelques minutes seulement grâce à un script de configuration et vous pouvez accéder à votre Cloudron en vous rendant à l’adresse IP de votre serveur (vérifiez bien que les ports 443 et 80 sont dégagés).

```fallback
wget https://cloudron.io/cloudron-setup chmod +x cloudron-setup ./cloudron-setup
```

Une fois Cloudron installé, vous pourrez configurer votre plateforme, notamment le nom de domaine et la gestion des DNS, soit via Amazon Route 53, DigitalOcean, avec un Wildcard ou manuellement. Une fois l’installation terminée, vous pourrez alors accéder à votre Cloudron via l’adresse principale de votre Cloudron qui sera [https://my.votrenomdedomaine.com](https://my.votredomaine.com/).

Pour approfondir le sujet et découvrir toutes les fonctionnalités de Cloudron, je vous invite à consulter la documentation complète sur [leur site](https://docs.cloudron.io/).

Voilà, vous êtes maintenant armés pour vous lancer dans l’aventure de l’auto-hébergement avec Cloudron. C’est une solution que je recommande chaudement à tous ceux qui souhaitent reprendre le contrôle de leurs données tout en bénéficiant d’un confort d’utilisation et d’une simplicité d’administration hors du commun. Mais attention quand même, vous devrez être rigoureux car la sécurité de vos données ne dépendra alors plus que de vous.

Merci à FortyTwo pour l’info.

# Tipi - L'auto-hébergement facile

C’est aujourd’hui que prend fin votre calvaire d’avoir à installer et configurer manuellement chaque service auto-hébergé sur votre serveur perso.

Grâce au logiciel open source Tipi, vous allez pouvoir profiter de plus de 120 applications préconfigurées et personnalisables. L’idée derrière ce projet est de démocratiser l’auto-hébergement, et je peux dire que c’est un succès.

Le cœur de **Tipi** est un orchestrateur Docker, qui permet de lancer et gérer plusieurs services sur un seul serveur. N’ayez pas peur, il est conçu pour être accessible à tous, quelles que soient vos compétences techniques.

Lorsque vous commencez à utiliser Tipi, vous êtes accueilli par une interface web sympathique qui vous permet de gérer très facilement tous vos services mais également d’en ajouter et de les paramétrer. Et si jamais vous vous sentez limité par les applications disponibles, pas d’inquiétude : [L’app store](https://github.com/meienberger/runtipi-appstore) inclus dans Tipi vous permettra de demander l’ajout de nouveaux services à la communauté.


Pour vous donner un peu plus envie, voici un aperçu des différentes applications auto-hébergées que vous pouvez installer sur votre serveur. Il y a par exemple **Adguard**, un excellent bloqueur de publicités dont je vous ai déjà parlé, ou **Bazarr**, un gestionnaire de sous-titres pour les films et séries. Et bien sûr pour les développeurs, il existe même une interface Web pour Visual Studio Code appelée **Code-Server**. Avec Tipi, les possibilités sont nombreuses.

**Firefly III** vous permettra par exemple de suivre vos dépenses et vos revenus en un seul endroit, sans partager vos informations financières avec des services tiers. J’ai également trouvé **Gladys Assistant** qui est un assistant personnel qui prend soin de votre vie privée tout en vous aidant à gérer votre domotique.

D’autres outils incroyables pour la gestion et la synchronisation de fichiers, la gestion de tâches, la surveillance de serveurs, la gestion de médias, et bien plus encore sont également disponibles. Vous y trouverez aussi **WikiJS**, un wiki open source extensible, **Tautulli**, un compagnon pour Plex, et **Resilio**, une solution basée sur P2P pour la synchronisation et le partage de fichiers.

Pour le tester, il y a également [une démo ici](https://demo.runtipi.io/). (user : [user@runtipi.io](mailto:user@runtipi.io) / mdp : password)

[L’installation est facile](https://www.runtipi.io/docs/getting-started/installation). Il vous faudra un Linux du genre Ubuntu 18.04 LTS, Docker et le plugin Docker Compose. Ensuite, pour l’installer, il suffit de récupérer et lancer la dernière version avec la commande suivante :

```fallback
<span style="font-family: inherit; font-size: inherit;">curl -L https://setup.runtipi.io | bash</span>
```

Et voilà ! A vous des tas d’applications auto-hébergées sans prise de tête. Tipi est un projet plutôt exceptionnel qui rend abordable l’auto-hébergement pour le plus grand nombre.

Je vous encourage à l’essayer par vous-même. Vous trouverez [plus d’infos par ici](https://www.runtipi.io/).
# Le répertoire ultime des logiciels auto-hébergés

Le 2 août 2024par Korben -

1. [Outils-Services](https://korben.info/categories/outils-services/ "Voir tous les articles de la catégorie Outils-Services")
2. [Logiciels-Utiles](https://korben.info/categories/outils-services/logiciels-utiles/ "Voir tous les articles de la sous-catégorie Logiciels-Utiles")

Avez-vous déjà rêvé d’avoir votre propre petit coin de paradis numérique, loin des regards indiscrets des GAFAM et autres géants de la tech ? Eh bien votre rêve existe et s’appelle l’**auto-hébergement** !

Et ça tombe bien puisque je viens de tomber sur un site génial qui va vous faire gagner du temps dans le choix de vos outils : [selfh.st](https://selfh.st/apps/). C’est un répertoire bien fourni de **logiciels auto-hébergés**, open source ou propriétaires et ce qui est top c’est qu’il y en a pour tous les goûts et tous les besoins.

Vous voulez monter votre propre **serveur de messagerie** ? Pas de problème, vous trouverez forcément votre bonheur parmi les nombreuses options proposées comme _RainLoop_ ou _Mailcow_. Envie de créer votre **cloud personnel** pour stocker et synchroniser vos fichiers ? Là encore, vous aurez l’embarras du choix.

Et le côté pratique dans tout ça, c’est que le site propose des **filtres bien pensés** pour vous aider à trouver rapidement ce que vous cherchez. Vous pouvez trier les logiciels par catégorie, par langue, par nombre d’étoiles sur GitHub, ou même en fonction de leur dernière activité de développement. Comme ça, vous êtes sûr de mettre la main sur des projets actifs et de qualité.


L’un des petits plus sympas de selfh.st, c’est qu’il vous propose aussi des **alternatives auto-hébergeables** aux services populaires du moment. Adieu _Google Analytics_, bonjour _Matomo_ ! Bye bye _Trello_, et bienvenue à _Wekan_ ! Vous voyez l’idée.

Et pour les plus geeks d’entre vous, sachez que toute la **base de données** derrière le répertoire est **gérée de manière automatisée**. Ainsi, les fiches techniques des différents logiciels sont mises à jour quotidiennement, ce qui vous garantit d’avoir toujours les dernières versions et les projets les plus récents sous la main.

En plus, l’auto-hébergement, c’est bon pour la planète. Si si, je vous assure ! En gérant vous-même vos services, vous optimisez les ressources et vous évitez le gaspillage énergétique des data centers géants. C’est un petit geste pour vous, un grand pas pour l’humanité.

Bon allez, je ne vais pas vous bassiner plus longtemps et je vous laisse filer sur [selfh.st](https://selfh.st/apps/) pour découvrir ce petit site par vous-même.
# FreeScout - Une solution open source pour gérer votre helpdesk

Le 18 juillet 2024par Korben -

1. [Developpement](https://korben.info/categories/developpement/ "Voir tous les articles de la catégorie Developpement")
2. [Open-Source](https://korben.info/categories/developpement/open-source/ "Voir tous les articles de la sous-catégorie Open-Source")

Si vous faites du support client dans le cadre de votre boulot, vous avez peut-être besoin d’une solution de helpdesk, alors pourquoi ne pas opter pour **[FreeScout](https://freescout.net/)** ?

C’est un super outil open source et gratuit qui va vous permettre de traiter les demandes de vos clients, de tout centraliser, d’accéder facilement à l’historique complet des conversations, collaborer en temps réel et ainsi proposer un support de qualité. Vous pouvez comme ça, assigner des tickets à des agents spécifiques, définir des priorités, ajouter des tags et même automatiser certaines tâches récurrentes.

Vous pourrez même personnaliser chaque aspect de votre portail de support, des formulaires de contact aux modèles de réponse et ça peut s’installer sur votre propre serveur en quelques clics.


Mais avant, je vous conseille d’explorer la [version démo](https://demo.freescout.net/). Vous vous créez un compte, vous vous connectez avec et vous pourrez jouer avec la gestion d’un ticket, les kabans, la partie de gestion des clients, la base de connaissance, la sections des modules externes, ou encore la génération des rapports.


Sachez également que des applications mobiles sont dispo pour Android et iOS afin de suivre l’activité de l’outil depuis n’importe où.

Bref, si ça vous branche, vous pouvez [télécharger FreeScout ici](https://freescout.net/) !

# Graphite - l'éditeur graphique open source qui va bousculer la création graphique

Le 14 avril 2024par Korben -

1. [Developpement](https://korben.info/categories/developpement/ "Voir tous les articles de la catégorie Developpement")
2. [Open-Source](https://korben.info/categories/developpement/open-source/ "Voir tous les articles de la sous-catégorie Open-Source")

Vous êtes accros aux logiciels de retouche photo et de création graphique mais vous en avez marre de vider votre compte en banque pour des licences hors de prix ? Et si je vous disais qu’une solution très sympa _open source_ et **totalement gratuite** était en train de voir le jour ? Laissez-moi vous présenter [Graphite](https://graphite.rs/), un projet de dingue porté par une communauté de développeurs et d’artistes passionnés.

Alors, qu’est-ce que c’est que ce truc ? En gros, le but c’est de pondre une appli de _graphics editing_ nouvelle génération qui coche toutes les cases : retouche photo, dessin vectoriel, peinture numérique, PAO, compositing, motion design… Rien que ça ! On est clairement sur un couteau suisse de la création 2D.

Bon, je vous vois venir avec vos gros sabots : “_Ouais mais c’est encore un énième logiciel qui va essayer de faire comme Photoshop et cie mais en moins bien !_” Eh bah non, justement ! L’idée c’est pas de copier bêtement ce qui existe déjà mais d’**innover** en s’inspirant de ce qui se fait de mieux dans d’autres domaines, comme la 3D.


Le truc de malade dans Graphite, c’est qu’il est construit autour d’un _node graph_, une sorte de _“compo visuel”_ où on branche des nœuds entre eux pour manipuler nos calques et leur appliquer des filtres et des effets à l’infini. Ça permet de garder la main à chaque étape et de pouvoir revenir en arrière sans perdre en qualité, ce qui est juste im-po-ssible dans les logiciels de retouche photo traditionnels. On appelle ça du _**non-destructif**_.


Autre point fort : Graphite gère aussi bien les images matricielles (bitmap) que vectorielles, et le tout avec une qualité d’affichage toujours au taquet, même si on zoom dans tous les sens ! Plus besoin d’avoir 36 000 applis et de jongler entre elles. C’est un peu le mix parfait entre le pixel et le vecteur (avec un soupçon de génération procédurale en plus).


Bon, alors, il sort quand ce petit bijou ? Figurez-vous que Graphite est déjà dispo en version alpha et qu’on peut le tester [directement dans son navigateur](https://editor.graphite.rs/). Pas besoin d’install, ça tourne full JavaScript côté client. Évidemment, à ce stade, c’est encore un peu brut de décoffrage et y’a pas mal de features prévues sur la [roadmap](https://graphite.rs/features/#roadmap) qui ne sont pas encore implémentées. Mais ça donne déjà un bon aperçu du potentiel de la bête !

Et en parlant de potentiel, vous allez voir que les possibilités de création sont assez dingues. Vous pouvez par exemple générer [des centaines de cercles de façon procédurale](https://editor.graphite.rs/#demo/red-dress) pour obtenir des motifs super stylés. Ou encore créer des [structures complexes qui s’adaptent automatiquement](https://editor.graphite.rs/#demo/procedural-string-lights), comme ces guirlandes de Noël dont les ampoules se replacent toutes seules quand on déforme le chemin. Magique !

Donc, si vous voulez voir ce projet de dingue prendre son envol, n’hésitez pas à mettre la main au portefeuille et à [faire un don](https://graphite.rs/donate). C’est vous qui voyez, mais je pense que ça en vaut carrément le coup ! En tout cas, moi, j’ai déjà mis une étoile sur le [repo Github](https://github.com/GraphiteEditor/Graphite) 😉

# Gitroom - Pour planifier et booster vos lancements open source

Le 11 juillet 2024par Korben -

1. [Developpement](https://korben.info/categories/developpement/ "Voir tous les articles de la catégorie Developpement")
2. [Open-Source](https://korben.info/categories/developpement/open-source/ "Voir tous les articles de la sous-catégorie Open-Source")

Vous êtes un développeur spécialisé dans l’**open source** et vous cherchez peut être à maximiser l’impact de vos projets en établissant une stratégie de lancement ?

Difficile de savoir par où commencer… Mais avec [Gitroom](https://gitroom.com/), vous allez pouvoir organiser tout ça en programmant à l’avance tous vos contenus en un seul endroit. Publications sur les réseaux sociaux (Twitter, LinkedIn, Reddit et compagnie), articles de blog pour Dev.to, Hashnode ou Medium et annonces sur GitHub, le tout en respectant un timing parfait.

C’est un vrai bonheur pour les adeptes de l’organisation, tout ça dans une interface facile à utiliser qui vous permettra également de suivre en temps réel les tendances sur GitHub pour ajuster votre planning en conséquence. Vous recevez même des notifications quand votre projet cartonne et grimpe dans le classement des repos les plus populaires.

  
Mais Gitroom ne s’arrête pas là puisque vous pouvez aussi collaborer avec votre équipe directement sur la plateforme, comme ça, fini les échanges de mails sans fin et les documents perdus dans les méandres de Google Drive. Vous assignez des tâches, vous commentez, vous validez, le tout au même endroit.

Gitroom propose un généreux plan gratuit qui vous donne accès à l’essentiel des fonctionnalités et si vous voulez passer à la vitesse supérieure, les tarifs restent très abordables.

En plus, [c’est open source](https://github.com/gitroomhq/gitroom) ! Eh oui, vous pouvez [héberger vous-même votre instance](https://docs.gitroom.com/quickstart) et profiter de toutes les fonctionnalités gratuitement. C’est pas beau ça ?

Bref, c’est [l’outil qui manquait cruellement](https://github.com/gitroomhq/gitroom/) dans l’écosystème open source pour démocratiser et faciliter les lancements de projets. Avec son approche innovante et sa philosophie collaborative, Gitroom a tout pour devenir le compagnon indispensable des développeurs et des mainteneurs de projets.

Merci à Lorenper pour cette découverte de qualité.