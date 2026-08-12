---
section: tutos
type: tuto
statut:
- backlog
_priorité: normal
imageNameKey: null
tags:
- Tutoriels
title: Comment Créer Un Site Wordpress
author: Diane
description: 'Découvre Comment Créer Un Site Wordpress : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

## 1. Choisir l'hébergement
Pour fonctionner, tout site internet s’appuie sur un serveur, en général on le loue auprès d’un hébergeur (en vérité on loue un emplacement de quelques Go à l'intérieur du serveur et pas tout le serveur, c'est un abus de language). Le serveur sert à stocker les fichiers qui composent le site web. Il sert aussi à exécute le code contenu dans ces fichiers. Dans le cas de WordPress, il s’agit d’un CMS reposant principalement sur le langage PHP et sur une base de données MySQL. Le serveur exécute donc le code PHP de WordPress pour récupérer les informations nécessaires en base de données et générer la page au format HTML, lisible par votre navigateur web (Google Chrome, Mozilla Firefox, etc.).

Pour créer votre site WordPress, vous aurez donc besoin d’un hébergement PHP / MySQL. 
Votre site pourra ainsi être accessible au public via internet, mais ce n’est pas gratuit. Compter quelques euros par mois pour un hébergement d’entrée de gamme.

Qu’est-ce qu’un nom de domaine ? Une fois installé sur un serveur, vous souhaitez que le public puisse facilement accéder à votre site web. En effet, par défaut, un serveur n’est accessible sur internet que via son adresse IP. Par exemple, pour Google, c’est 172.217.4.206. Moins simple à retenir que le nom de domaine [Google.com](http://Google.com) ! Le nom de domaine se loue auprès de fournisseurs spécialisés appelés registrar, comme [Gandi.net](http://Gandi.net). Cela coûte en général une dizaine d’euros par an et il faut ensuite configurer ses DNS (Domain Name Server) pour faire pointer son domaine sur son serveur.
un nom de domaine peut se décliner en plusieurs sous domaines. Par exemple, [blog.monsite.com](http://blog.monsite.com), [shop.monsite.com](http://shop.monsite.com), [www.monsite.com](http://www.monsite.com) sont différents sous-domaines déclinés du nom de domaine “[monsite.com](http://monsite.com)” et pouvant pointer vers des sites différents. Vous pouvez créer autant de sous domaines que vous souhaitez à partir d’un nom de domaine et surtout c’est gratuit. C’est la raison pour laquelle tous les fournisseurs de sites gratuits ([WordPress.com](http://WordPress.com), [Wix.com](http://Wix.com) etc.) permettent de créer gratuitement des sites sur un sous domaine de leur domaine principal. Nous allons d’ailleurs travailler sur un sous domaine gratuit dans la suite de ce cours ce qui vous évitera d’acheter un nom de domaine. 

Choisissez votre hébergeur et mettez votre site WordPress en ligne

l existe différents types d’hébergements adaptés à différents besoins : hébergement mutualisé ; hébergement dédié ; hébergement managé (ou infogéré). Avec un hébergement mutualisé, vous louez une portion d’un serveur qui est partagé avec d’autres utilisateurs. C’est en général la solution la plus économique et cela peut être suffisant pour beaucoup de projets mais il y a de nombreuses contraintes : vous avez un accès limité à la configuration du serveur, vous pouvez subir des effets de noisy neighbours (un site sur le même serveur que le vôtre utilise trop de ressources ou fait planter le serveur à la suite d’un hack, par exemple) et le support est généralement très réduit. Avec un hébergement dédié, vous louez un serveur entier ! C’est évidemment plus cher, mais vous bénéficiez d’un contrôle total. En revanche, il faut avoir de très bonnes connaissances techniques pour s’en occuper : c’est généralement à vous de gérer la configuration initiale, d’intervenir en cas de problème, de gérer les mises à jour des composants comme PHP, etc. C’est donc généralement réservé à des experts. Avec un hébergement managé, vous louez un certain niveau de performance et de disponibilité pour un site sans avoir à vous soucier de la partie serveur. Le prestataire s’occupe de tout pour vous et garantit le bon fonctionnement de votre site. C’est une solution idéale si vous n’êtes pas un expert en administration système et que vous souhaitez vous concentrer sur la gestion de votre site ou de votre business sans avoir à vous soucier des aspects techniques. Le prix est en revanche un peu plus élevé que pour un hébergement mutualisé classique. Pour la réalisation de notre site, nous vous proposons d’utiliser Themecloud, une solution d’hébergement WordPress managé française. Outre le fait qu’il s’agit d’un hébergeur français, les raisons de ce choix sont les suivantes. Avec Themecloud : Vous disposez d’un site WordPress en ligne immédiatement et gratuitement ! Contrairement à de nombreux hébergeurs, Themecloud ne vous oblige pas à acheter un nom de domaine payant pour créer un site et vous bénéficiez d’une période d’essai gratuite pour l’hébergement. Votre site est donc prêt en moins d’une minute sur un sous-domaine temporaire du type monsite.themecloud.website. Si vous le souhaitez, vous pourrez ensuite connecter un nom de domaine très simplement. Attention : Themecloud propose une période d’essai de 2 jours. Il vous faudra donc tenir ce délai pour finir votre site si vous ne souhaitez pas vous abonner à un plan d’hébergement. Votre site est rapide, sécurisé et sauvegardé tous les jours. Themecloud repose sur l’infrastructure Google Cloud, une des infrastructures cloud les plus performantes au monde. Themecloud garantit par ailleurs la sécurité de votre site et sauvegarde votre site tous les jours, dès le premier jour. Vous pouvez aussi créer autant de sauvegardes manuelles que vous le souhaitez et surtout les restaurer en un clic. Plutôt pratique lorsque l’on débute et que l’on veut pouvoir revenir en arrière à la suite d’une mauvaise manipulation ! Vous bénéficiez d’un support réactif et en français. Themecloud propose une interface de support via chat avec un temps de réponse moyen inférieur à 5 minutes ! Et les équipes sont françaises, ce qui devrait faciliter la vie de certains d’entre vous. N’hésitez pas à créer un backup manuel de votre site avant toute manipulation dont vous n’êtes pas sûr. Cela ne prend qu’une minute environ et vous permettra de revenir en arrière rapidement en cas de problème !

Pour commencer, rendez-vous sur Themecloud, cliquez sur “Sign Up” ou “Inscription” pour vous inscrire et remplissez les informations demandées. Sachez que vous pourrez utiliser ce même compte pour gérer plusieurs projets WordPress. Plutôt normal pour une solution conçue prioritairement pour les agences et les freelances. Une fois connecté à Themecloud, cliquez “New Website” et choisissez un nom pour votre site web. Ce nom définit l’URL temporaire de votre site : [nom].themecloud.website. Vous pouvez passer l’interface Themecloud en français via l’onglet situé en bas à droite de l’interface. Nous continuerons cependant d’utiliser les termes en anglais dans la suite du cours.

Pendant la période d’essai, le site n’est accessible que par le propriétaire du site. Les visiteurs non connectés sont redirigés sur une page d’attente

Alternative : créer votre site en local Il existe différentes solutions pour installer son site en local. La plus connue est d’installer MAMP ou WAMP mais une solution plus simple et plus rapide existe désormais. Il s’agit de Local by Flywheel, un logiciel gratuit disponible pour Mac et PC et permettant de créer simplement un site WordPress en local grâce à des conteneurs Docker. Pour commencer, rendez vous sur [https://local.getflywheel.com](https://local.getflywheel.com), cliquez “Download” et entrez les informations demandées. Une fois le logiciel téléchargé, ouvrez le et cliquez “Get Started” pour lancer l’installation de tous les composants. Une fois installé cliquez l’icône “plus”, “Add new site” et rentrez les informations demandées. (choisissez PHP version 7). Une fois le site créé, il apparaît dans la colonne de gauche. Cliquez dessus pour afficher les accès. vous pouvez commencer à travailler !F

En général, pour vous connecter à l’interface d’administration d’un site WordPress, il faut vous rendre sur l’URL [monsite.com/wp-login.php](http://monsite.com/wp-login.php) qui est l'URL de connexion par défaut. Vous pouvez aussi aller sur l'URL du dashboard [monsite.com/wp-admin](http://monsite.com/wp-admin) qui vous redirigera automatiquement vers cette dernière. Vous pouvez alors saisir vos identifiants pour vous connecter. L’URL de connexion à WordPress L’URL de connexion étant la même par défaut pour tous les sites WordPress, il est très facile pour les hackers de chercher à se connecter à des sites en “brute force” (c’est-à-dire en testant de nombreuses associations de login / mot de passe). C’est la raison pour laquelle : il faut absolument éviter de choisir des identifiants et mots de passe trop simples (l’identifiant de connexion “admin” est à proscrire !) ; il est recommandé de modifier l’URL de connexion par défaut avec une URL personnalisée difficile à trouver ; nous verrons comment faire cela dans un prochain chapitre. Dans le cas de Themecloud, vous n’avez pas choisi d’identifiants de connexion. C’est parce que Themecloud, comme de nombreux autres hébergeurs spécialisés WordPress, offre un accès SSO (Single Sign On) qui permet de se connecter en un clic sans avoir à rentrer ses identifiants (un peu comme Facebook Connect). Cela permet d’optimiser la sécurité des sites en générant un mot de passe très complexe dont vous n’avez pas à vous souvenir, ce qui est particulièrement utile lorsque l’on gère plusieurs dizaines de sites !

ous pouvez savoir si vous êtes connecté ou non en regardant en haut de la page du site. Si vous voyez une barre noire proposant des options d’administration (la “top bar”), c’est que vous êtes bien connecté. Depuis l’admin bar, il suffit de survoler le nom du site à gauche et de cliquer “Dashboard” pour accéder à l’interface d’administration WordPress. Une fois dans le dashboard WordPress, vous avez accès au menu d’administration de WordPress

WordPress propose par défaut deux types de contenus qui sont les articles et les pages. La différence entre les deux réside dans la temporalité de la publication et dans la façon d’y accéder. Un article est généralement un contenu d’actualité, daté, et qui prend sa plus grande valeur au moment de sa publication. On y accède généralement via une page listant les articles triés de façon antéchronologique (les derniers articles publiés en premier) et non via un lien dédié dans le menu de navigation. Bref, c’est ce qui constitue ce que l’on appelle un blog ! Une page est un contenu statique, généralement non daté et ayant une valeur constante dans le temps. On s’en sert en général pour présenter une société (page “à propos”), un service (page “nos services”), des informations et fonctionnalités de contact (page “contact”) et on y accède généralement via un menu de navigation (dans l’entête ou le pied de page du site). WordPress permet aussi de créer des types de contenus personnalisés, aussi appelés Custom Post Types. Un type de contenu “Produits” est ainsi créé quand vous installez WooCommerce, l’extension e-commerce n°1 pour WordPress.

WordPress propose par défaut deux façons de trier ses articles : les catégories, qui ont une hiérarchie (on peut créer des sous-catégories) et qu’il faut choisir soigneusement pour refléter de façon pertinente les sujets traités dans le blog et pour optimiser son référencement naturel. On n’attribue généralement qu’une catégorie (ou sous-catégorie) par article et on essaye de ne pas multiplier le nombre de catégories proposées au total ; les tags qui n’ont pas de hiérarchie et que l’on peut attribuer en masse à chaque article. Leur objectif est d’identifier les sujets importants traités dans l’article et récurrents sur le blog.

WordPress offre la possibilité : de sauvegarder les contenus en brouillon (“Save draft”). Cela signifie que l‘article sera enregistré, mais n’apparaîtra pas sur le site pour les visiteurs ; de prévisualiser le contenu (“Preview”). Cela permet de voir le contenu tel qu’il sera affiché sur le site sans avoir à le publier ; de “dépublier” un article ‘Switch to draft”. Cela permet, si l’on a publié un article par erreur ou que l’on ne veut finalement plus qu’il soit accessible, de ne plus l’afficher sur le site et de le conserver en brouillon.

Ce que l'on appelle "client", c'est l'ordinateur (ou téléphone/tablette) qui vous sert à vous connecter à Internet. Le client effectue une requête (lorsque vous cliquez sur un lien ou quand vous tapez une adresse directement dans votre navigateur) pour obtenir une page web. La base de données est l'espace où sont stockées les informations nécessaires à afficher la page web demandée (textes, images...). Enfin, le serveur est la machine qui permet de faire le lien entre les deux. D'abord, le serveur reçoit une demande de la part du client (qui pourrait se traduire par : "Envoie moi la page xxx"). (1) Il récupère les informations nécessaires dont il a besoin pour construire la page sur la base de données. (2) et (3) Il envoie (on dit aussi qu'il sert) la page demandée au client (4) et le client interprète ce qu'il reçoit pour l'afficher. À partir de là, la page s'affiche sur votre écran !

ôté client Comme vous le savez peut-être, une page web est généralement construite avec du HTML/CSS/JavaScript : HTML est une norme qui permet de structurer un document (titres, parties, header, footer...). C'est le seul élément indispensable à la création d'une page web. CSS est un formalisme qui permet de mettre en forme un document (couleur, police, taille de caractère...). JavaScript est un langage de programmation permettant d'animer le contenu d'une page web (réagir à une action de l'utilisateur, afficher un élément évolutif, etc.). Lorsque vous demandez à afficher une page web, vous demandez au serveur de vous envoyer un ou plusieurs fichier(s) HTML, JavaScript et CSS. Une fois reçus, ces fichiers seront utilisés par votre navigateur (Chrome, Firefox, Opéra...) pour vous afficher la page demandée. Côté serveur À la différence du HTML qui est standard côté client, il existe de très nombreux langages pour programmer un serveur web (PHP, JSP, ASP, Java...). En fait, presque tous les langages permettent de faire un serveur web ! Cependant certains, tels que PHP, sont dédiés à la création de serveur web. La plupart des CMS sont écrits en PHP. Quel que soit le langage utilisé, l'objectif du serveur reste le même lors d'une requête d'affichage de page. D'abord, il va interpréter le message envoyé par le client (sous la forme d'un lien, d'une adresse, d'un formulaire...). Il va ensuite récupérer les informations sur la base de données. Cela va lui permettre de construire la page en assemblant le HTML, le CSS et le JavaScript. Enfin, il pourra envoyer la page au client. Côté base de données Sans rentrer trop dans le détail, la plupart des bases de données utilisées dans le Web aujourd'hui sont des bases de données relationnelles utilisant le langage SQL (Structured Query Language, soit langage de requête structurée). Comme son nom l'indique, SQL est un langage dédié au stockage et à la récupération d'informations sur (ou à partir) d'une base de données

Pour faire simple, la base de données a deux utilités : sauvegarder des informations envoyées par le serveur ; envoyer au serveur des informations préalablement enregistrées.F

Tous les sites ont-ils besoin d'une base de données et d'un serveur ? Non. Il est tout à fait possible de se passer de base de données et/ou de serveur. Comme je l'ai dit, seul le HTML est indispensable à la création d'une page web. Sans serveur ni base de données, la page sera statique : c'est-à-dire qu'elle sera toujours la même quel que soit le moment où vous la consultez. Avec une base de données et un serveur, il est possible de créer une page web dynamique : une page web qui peut évoluer avec les utilisateurs (comme une page Facebook) ou au cours du temps (comme un blog par exemple). Front-office et back-office Dernier point de connaissance à aborder : la différence entre ce que l'on appelle le front-office et le back-office ("boutique" et "arrière-boutique" en français). Comme nous venons de le voir, le rôle du serveur, lorsque l'on demande à afficher une page, est d'aller chercher des informations sur la base de données. D'où la question légitime : d'où viennent ces informations qui sont présentes dans la base de données ? Si vous avez lu le titre de cette section, vous devez vous douter de la réponse : du back-office ! On appelle back-office la partie du site web qui permet de modifier/ajouter/retirer des informations sur notre site. La partie d'un site web où sont affichées ces informations, c'est le front-office.

Le Web est apparu aux alentours des années 1990 avec l'invention du HTML, par Tim Berners-Lee qui travaillait au CERN (Conseil européen pour la recherche nucléaire) à l'époque. L'objectif était de permettre la diffusion de documents sur le réseau mondial (Internet).

Le format HTML a évolué au cours des années. En 1990, on pouvait seulement formater des documents (titres, tableaux...) et créer des liens entre documents grâce aux liens hypertextes. Depuis 2014, nous en sommes au HTML5 et le format est beaucoup plus riche ! L'arrivée du CSS et des langages web Le CSS a été ajouté en 1995 lors de la spécification du HTML 3 : il permet de mettre en forme les documents HTML. La même année, le JavaScript a été introduit par le navigateur Netscape (l'un des tout premiers navigateurs). Côté serveur, c'est en 1994 qu'est apparu le langage PHP (diffusé en 1995)

es bases de données existent en fait depuis bien plus longtemps que le Web ! Elles ont commencé à apparaître vers le milieu des années 1960 pour évoluer et se perfectionner au fil des années.

Les CMS permettent de mettre en place un site web sans connaissances en programmation. Toutes les actions se font à travers des interfaces graphiques, et non avec des lignes de code.

un CMS est un site web dynamique pré-construit qui dispose d'un back-office et qui automatise pour nous la gestion de l'affichage des pages et la relation avec la base de données.

Dans un même site web, de nombreuses pages, si ce n'est toutes, ont un design similaire. Les CMS intègrent des outils permettant de ne pas avoir à refaire ce design pour chaque page : une fois le design du site choisi, il s'appliquera automatiquement à toutes les pages. Ceci a deux avantages : vous pouvez récupérer des designs "touts faits" (que l'on appelle des thèmes ou des templates) et les appliquer à votre site directement ; vous pouvez modifier le design du site sans avoir à vous soucier de son contenu. Le nouveau design sera appliqué automatiquement.

Les utilisateurs peuvent avoir des rôles différents au sein d'un site web, et donc avoir le droit, ou non, d'effectuer certaines actions ou d'accéder à certaines pages.

Comme nous venons de le voir, les CMS ont de nombreux avantages. Ils sont accessibles : pas besoin de connaître un langage de programmation pour pouvoir les utiliser ou les installer. Ils sont rapides à mettre en place : quelques heures pour les plus complexes, quelques minutes pour les plus simples. Ils font gagner du temps : développer tout un site web à partir de zéro – plutôt qu'utiliser des outils préconçus – est chronophage. Ils sont soutenus par une communauté : c'est le meilleur moyen d'avoir des outils performants et variés, et d'obtenir de l'aide. Nous reviendrons plus en détails là-dessus dans la deuxième partie de ce cours. Ils sont faciles à maintenir et à faire évoluer : le Web évolue, les CMS répercutent ces évolutions et permettent d'avoir un site qui évolue également (usage, technologie, design, ergonomie, etc.). Inconvénients Cependant, comme toute solution technique, les CMS ont également des inconvénients intrinsèques. Voici les plus notables et les plus répandus. Ils manquent de flexibilité : la grande majorité des CMS proposent énormément de fonctionnalités, néanmoins il est souvent complexe et coûteux d'ajouter celles qui ne sont pas initialement prévues. Ils sont moins performants : la généricité et la complexité des CMS les rend, à qualité égale, moins performants qu'un site construit sans CMS. Ils sont plus susceptibles d'être attaqués : comme tous les sites utilisant le même CMS partagent un code source commun, il est nettement plus aisé de pirater un CMS, surtout s'il est mal protégé ou implémenté. Par ailleurs, le temps investi par un pirate pour attaquer un site web peut être rentabilisé sur d'autres sites construits avec le même CMS. Ils sont difficiles à migrer : changer de CMS est souvent beaucoup plus long et complexe que de faire évoluer un site web construit sans CMS. Dans certains cas, les CMS peuvent pâtir d'autres inconvénients. Ils sont moins faciles à référencer : la structure des pages et les redondances limitent souvent l'adéquation avec les règles du référencement. Ils sont moins stables : la complexité des CMS les rend parfois moins stables – toujours à qualité égale – qu'un site construit sans CMS.

Définissez le type de site que vous souhaitez créer

- Maintenant que nous avons pris en main l’interface d’administration de WordPress, nous allons pouvoir commencer à travailler sur notre projet.
- Comme nous l’avons évoqué en introduction, la grande force de WordPress réside dans la multitude de composants (thèmes et plugins) à disposition permettant d’ajouter des fonctionnalités ou de personnaliser l’apparence de votre site.
- La première chose à faire est donc de définir le type de site que vous souhaitez créer, d’installer et de configurer les composants les plus adaptés.
- Définissez les objectifs du site
- Avant de se lancer dans la création d’un site, il est essentiel de définir précisément les objectifs de ce dernier. En effet, en prenant des exemples extrêmes, on ne va pas construire le même type de site si notre objectif est de vendre des produits en ligne (site e-commerce) ou s’il est de partager des astuces et des bons plans (blog).
- Dans notre cas, notre objectif est de trouver des clients pour notre activité de création de sites WordPress ! Il s’agit donc d’un site qui aura vocation à générer des contacts commerciaux. Cela implique :
- qu’il soit visuellement attractif ;
- qu’il soit rassurant quant à notre professionnalisme grâce à des références et/ou des témoignages clients ;
- que les visiteurs puissent facilement laisser un message, voire demander un devis via un formulaire de contact ;
- que les visiteurs soient encouragés à s’abonner à une newsletter pour nous permettre de maintenir la relation une fois qu’ils auront quitté le site (optionnel).
- Les contacts commerciaux sont précieux et les visiteurs ont peu de temps et une attention limitée. C’est la raison pour laquelle beaucoup de sites proposent, parfois de manière un peu agressive, de s’abonner à une newsletter. Cela permet de maintenir le contact avec le visiteur pour potentiellement convertir le contact en client par la suite !
- Pensez au référencement dès le début
- L’optimisation du référencement naturel est souvent appelée SEO pour “Search Engine Optimisation”, soit “Optimisation pour les moteurs de recherche”.
- En bref, il s’agit de toutes les techniques visant à faire remonter son site dans les résultats de moteurs de recherche tels que Google. C’est essentiel, car c’est en général ce qui va générer la grande majorité des visites sur votre site (à moins que vous ne disposiez d’un budget publicitaire ou de liens entrants depuis des sites à gros trafic) !
- Définissez les expressions de recherche sur lesquelles vous souhaitez être positionné
- Dans notre cas, nous souhaitons être bien positionnés sur des mots-clés comme “agence web”. C’est cependant un terme bien trop générique et sur lequel beaucoup d’agences sont déjà positionnées. On va donc essayer d’affiner l’expression de recherche en ajoutant la localité : “agence web bordeaux”.
- On peut se rendre compte en effectuant la recherche “agence web bordeaux” dans Google qu’il y a encore beaucoup de concurrence sur cette expression de recherche et qu’il risque d’être très difficile de remonter en première page.
- On peut donc encore affiner sur une spécialité, comme “agence wordpress bordeaux”. Il y a encore un peu de monde, mais la première page semble beaucoup plus accessible ! Pour bien choisir les expressions de recherche sur lesquelles vous positionner, vous pouvez utiliser des outils comme [https://neilpatel.com/ubersuggest/](https://neilpatel.com/ubersuggest/) pour comparer la concurrence et le potentiel de trafic entre différentes expressions de recherche.
- L’objectif : vous positionner sur des expressions où la concurrence est la plus faible possible, mais avec le maximum de potentiel de trafic !
- Cependant, ce type d’outils a ses limites et il est parfois préférable de se fier à son bon sens et aux résultats de recherche Google plutôt qu’aux statistiques qu’ils proposent, en particulier sur des expressions de recherche ayant de faibles volumes de recherche et sur lesquelles les statistiques générées seront moins précises.
- Dans notre cas, nous allons choisir l’expression de recherche principale “agence WordPress Bordeaux”.
- Il est essentiel de définir l’expression de recherche principale sur laquelle nous souhaitons nous positionner, mais il faut aussi définir des expressions de recherche secondaires qui peuvent être :
- soit des déclinaisons de l’expression principale (par exemple : “freelance WordPress Bordeaux”) ;
- soit des expressions ciblant des activités complémentaires (par exemple : “agence de référencement Bordeaux” ou “création de logo Bordeaux”).
- Nous allons choisir les expressions de recherche secondaires suivantes :
- freelance WordPress Bordeaux ;
- création logo Bordeaux ;
- agence référencement Bordeaux .
- Ce travail préliminaire est essentiel et va contribuer à déterminer la structure du site, que nous allons voir tout de suite !
- Définissez la structure de votre site
- De la même façon que l’on fait généralement des plans avant de construire une maison, il est essentiel de définir la structure de son site avant de commencer à le créer.
- Définissez une arborescence
- La première chose à faire est de lister en vrac tout ce dont vous avez envie de parler et toutes les fonctionnalités dont vous avez besoin.
- Essayez ensuite de regrouper tout cela de façon cohérente pour constituer les pages du site, tout en prenant en compte les expressions de recherche cibles identifiées précédemment.
- Partout
    - Pop-up newsletter
- Accueil
    - Présenter mes services
    - Rassurer sur mes compétences
    - Inciter à prendre contact
        - Services
        - Expertises
        - Testimoniaux clients via un carrousel de témoignages
        - Références clients via un carrousel de logos
- Création de sites WordPress
    - Présenter ce service spécifique
    - Montrer des exemples de réalisations
    - Inciter à prendre contact
        - Description
        - Réalisations via un carrousel d’images
- Création de logos
    - Présenter ce service spécifique
- Référencement naturel
    - Description
    - Résultats obtenus via des compteurs dynamiques
- Contact
    - Formulaire de contact >> pour faciliter la prise de contact
- Nous nous limiterons dans ce cours à créer ensemble la page d’accueil sans quoi le cours serait beaucoup trop long ! Mais une fois une première page réalisée, vous verrez qu’il vous sera très simple d’en faire d’autres en autonomie.
- Créez des wireframes
- Une fois l’arborescence définie, il est recommandé de définir la structure de ses pages via des wireframes, c’est-à-dire des schémas très simples présentant les différentes zones de la page.
- Cela peut être fait tout simplement avec un crayon et un papier ou via des outils dédiés comme Cacoo ou [wireframe.cc](http://wireframe.cc).
- Exemple de wireframe

## Choisir un thème WordPress

Le thème WordPress va gérer l’affichage des articles, pages, produits de la boutique e-commerce, pied de page (footer), les menus, les barres latérales, le blog...
Il configure la structure et l’apparence de votre site, et peut ajouter des fonctionnalités.

## À quoi sert un page builder ?

Un page builder (constructeur de pages) est un composant WordPress permettant de créer des pages au design avancées en “drag-and-drop” et souvent en “front-end editing”, c’est-à-dire que vous voyez directement les modifications sur la page telle qu’elle se présentera aux visiteurs.

Ils disposent d’une bibliothèque de modules ou widgets (colonnes, slider, carrousel, bloc titre, bouton, etc.) et facilitent la construction de pages complexes, vous pouvez tout faire avec.
les plus connu est Elementor et sa bibliothèque de composants riche, il y en a aussi des dizaines d'autres comme Divi, Wp Bakery, Brix, Themeum…Mais ils sont lourds, le code généré n’est pas propre et l’interface utilisateur est moins fluide.

Il existe de très nombreux types de thèmes. 
### Gratuit / freemium / premium

Le thème est entièrement gratuit et peut en général (si il a été approuvé par les modérateurs de [WordPress.org](http://WordPress.org)) être installé directement depuis la bibliothèque [WordPress.org](http://WordPress.org) dans Apparence>> Thèmes >> Ajouter. Les thèmes gratuits sont très nombreux, mais il faut faire attention, car nombre d’entre eux sont de qualité médiocre !

Les thèmes freemium sont très nombreux dans la bibliothèque WordPress.org. Le thème est gratuit, mais dispose soit d’une version payante avec plus d’options, soit de composants additionnels payants permettant d’étendre les fonctionnalités.

Les thèmes payants ne sont pas disponibles via la bibliothèque [WordPress.org](http://WordPress.org), mais via des boutiques ou des marketplaces dédiées. La plus connue est Themeforest qui regroupe 10.000 thèmes premium ! La qualité de ces thèmes est très variable et il est important de bien vérifier les points importants que nous allons évoquer avant d’en acheter un.

### Framework / multipurpose / spécialisés

Starter themes

Il s’agit de thèmes neutres et minimalistes, en général destinés à des développeurs pour qu’ils les déclinent afin de construire leur propre thème sur cette base. Nous n’allons donc pas explorer cette option plus avant. On peut cependant citer quelques-uns des plus connus : Genesis Framework, Underscores, FoundationPress...

Thèmes spécialisés

Ils représentent la majorité des thèmes, ciblant principalement les blogs (en particulier pour les gratuits), mais couvrant tous types de sites : site immobilier, site de petites annonces, sites e-commerce, marketplaces, etc. Il est vraiment possible de trouver n’importe quelle thématique, même les plus précises : blog cuisine, site e-commerce automobile, etc.

Ces thèmes permettent de créer très rapidement des sites complexes entièrement fonctionnels, mais ils sont souvent lourds, passablement codés et il est en général compliqué de les faire évoluer ou de mettre en place des personnalisations poussées.

Thèmes multipurposes

C’est une grosse tendance commencée sur Themeforest. Initialement, ces thèmes embarquaient généralement un page builder “maison”, étaient très lourds, généraient du code médiocre et étaient globalement à éviter. Vous avez peut-être déjà entendu parler des plus connus comme Avada ou Enfold.

Aujourd’hui, le paysage a évolué et il en existe des gratuits, légers et optimisés pour des page builders reconnus comme Elementor ou Beaver Builder. On citera en particulier OceanWP (notre favori) et Astra.

### Apprenez à bien choisir votre thème WordPress

Vérifier la dernière date de mise à jour, la popularité, les notes et commentaires, le support, la documentation...

Si un thème n’est plus mis à jour depuis plus de 6 mois, c’est inquiétant. Il est peut-être abandonné par son développeur et vous risquez de rencontrer des incompatibilités lors des mises à jour de WordPress ou de vos plugins (WooCommerce…) dans le futur.

Plus un thème est utilisé, plus il y a de chances qu’il ait des qualités, qu’il soit régulièrement maintenu, etc. Mais attention, les thèmes à éviter (surchargés d’options bling-bling, etc.) sont souvent très populaires aussi !

Nous choisissons donc le thème OceanWP qui répond à l’ensemble de ces critères et qui est en plus créé par un Français ;)

## Définissez une charte graphique

- Pour qu’un site fasse pro, il faut que son design soit cohérent sur toutes les pages. C’est la raison pour laquelle on se repose généralement sur une charte graphique qui va définir les polices de caractères, les couleurs, les versions de logos, etc., à utiliser sur tous les supports de communication d’une marque.

## Définissez une palette de couleur

- Utilisez un service comme [http://paletton.com/](http://paletton.com/) ou [http://colormind.io/](http://colormind.io/) pour créer votre palette de couleurs manuellement, ou plus simple encore, partez d’une image d’inspiration dont l’atmosphère vous plaît pour générer automatiquement une palette de couleur avec [https://www.canva.com/color-palette/](https://www.canva.com/color-palette/).

## Choisissez des polices de caractères

- Le choix des polices de caractères a tendance à être négligé, alors que c’est peut-être l’aspect le plus important de la charte graphique. Les sites utilisent de plus en plus les typos gratuites disponibles sur Google Fonts (ce que nous allons faire ici), mais choisir une police premium peut beaucoup apporter au design d’un site ; nous vous conseillons donc de ne pas oublier cette option ! Il y aurait donc beaucoup à dire sur le choix d’une typo, mais cela n’est pas le sujet ici. Nous allons donc arbitrairement partir sur : la police Abezee en graisse regular (400) pour les titres de page afin de donner un côté un peu décalé tout en restant élégant ; la police Open Sans (un grand classique du webdesign !) pour le corps de page. Remarque : évitez d’utiliser une police trop exotique pour le corps de page, cela risque de nuire à la lisibilité et de donner un côté cheap au rendu global. Choisissez un master visuel Le master visuel va être l’image qui va représenter la marque et que l’on utilisera en priorité sur les supports de communication. Certains sites proposent de belles photos utilisables gratuitement. C’est en particulier le cas de [unsplash.com](http://unsplash.com) sur lequel nous avons retrouvé la photo de banane contenue dans le visuel d’inspiration choisi. Nous allons utiliser cette image (légèrement modifiée par nos soins) comme master visuel pour notre marque :

## Créez un logo

- Si vous n’êtes pas graphiste, la simplicité est en général le meilleur choix. Le nom de votre marque dans une belle police et éventuellement une icône simple suffit à avoir un logo professionnel (pensez à Apple, Sony, etc.). Évitez de vouloir en faire trop avec des illustrations ou des effets qui seront peu lisibles et feront vite amateur. Gardez aussi en tête qu’un logo doit rester lisible en petit et doit pouvoir être décliné sur différentes couleurs de fond (fond noir et fond blanc en particulier). Vous pouvez chercher des icônes gratuites sur [https://fr.freepik.com](https://fr.freepik.com) et créer votre logo gratuitement sur les sites comme [snappa.com](http://snappa.com) ou [canva.com](http://canva.com) (attention, la version gratuite est très limitée) qui proposent des interfaces très simples pour créer des visuels en ligne.

## Configurez le logo

- La première chose que nous allons faire est d’ajouter notre logo. Cliquez “Entête” >> “Logo” >> “Changer le logo” >> “Téléverser des fichiers”. Sélectionnez votre logo en local et téléversez-le. Faites de même dans la section “Logo Retina”. Cette section est dédiée aux écrans “retina” ayant une meilleure définition que les écrans classiques. Il faut donc si possible téléverser une image faisant le double (en pixels) que la taille souhaitée à l’écran. Le logo est aussi présent dans le pied de page. Cliquez l’icône “crayon” en bleu sur ce dernier pour accéder directement à la section du customizer permettant de l’éditer (Widgets >> Pied de page). Vous remarquerez que le logo et le texte en dessous sont insérés directement en HTML. Nous avions promis que vous n’auriez pas à coder, donc nous allons tout simplement supprimer ce widget. Cliquez “retirer” sous la zone d’édition. Cliquez ensuite “Ajouter un widget”, sélectionnez le widget “Image” et glissez-le au-dessus du widget “Icônes Sociales”. Sélectionnez le logo dans la bibliothèque de média. N’hésitez pas à en profiter pour paramétrer les liens vers les profils de réseaux sociaux du widget “Icônes sociales”. Et voilà, notre logo est en place, aussi bien dans l’entête que dans le pied de page ! Paramétrez les palettes de couleurs Nous avons précédemment installé le plugin Central Color Palette permettant de configurer de façon centralisée la palette de couleur du site. La personnaliser avec les couleurs de la palette que nous avons définie nous fera gagner beaucoup de temps par la suite et nous évitera de choisir des couleurs au “feeling”, qui s’avère être bien souvent plus du hasard. Depuis le dashboard WordPress, Allez dans “Réglages >> Central Color Palette”. Cochez les 4 checkbox. Ajoutez les couleurs et les noms de la palette définie précédemment. Ajoutez aussi les couleurs suivantes pour les textes :  Dark Grey, pour les textes sur fonds clairs ; White, pour les textes sur fonds sombres. Evitez d’utiliser du “vrai” noir sur des fonds blancs. Le contraste est trop fort et cela va avoir tendance à faire “vibrer” les contours. Il est donc généralement préférable d’utiliser un gris foncé.

titres

- Il existe différents niveaux de titres en HTML. Bien comprendre ces niveaux est essentiel pour optimiser son référencement naturel.
- H1 : titre de la page, doit être unique et doit contenir l’expression de recherche principale sur laquelle on souhaite positionner le site
- H2 : titre secondaire, ne doit pas être utilisé plus de 3 ou 4 fois.
- H3 : titre de niveau trois.
- Etc.
- Il est essentiel de faire en sorte que les titres contiennent les mots-clés sur lesquels on cherche à se positionner en SEO, les titres ayant le plus de “poids” SEO étant évidemment ceux de plus haut niveau.
- C’est la raison pour laquelle nous avons passé le premier titre qui n’est pas optimisé SEO en “p” et le sous-titre qui contient les termes SEO cibles en “H1”.

## Ajouter des formulaires et popup de newsletter

- [https://openclassrooms.com/fr/courses/5489551-creez-un-site-moderne-et-professionnel-avec-wordpress-5/5804171-integrez-des-fonctionnalites-complementaires-grace-aux-extensions#/id/r-5872728](https://openclassrooms.com/fr/courses/5489551-creez-un-site-moderne-et-professionnel-avec-wordpress-5/5804171-integrez-des-fonctionnalites-complementaires-grace-aux-extensions#/id/r-5872728)