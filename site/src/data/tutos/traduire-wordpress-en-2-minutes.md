---
section: tutos
type: tuto
statut: []
_priorité: normal
imageNameKey: null
tags:
- Tutoriels
title: Traduire Wordpress En 2 Minutes
author: Diane
description: 'Découvre Traduire Wordpress En 2 Minutes : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

[Comment traduire rapidement son site WordPress ? - Outils - Growthhacking.fr | Communauté française de growth hacking](https://www.growthhacking.fr/t/comment-traduire-rapidement-son-site-wordpress/21078)

[https://wprock.fr/blog/weglot-wordpress-multilingue-traduction/](https://wprock.fr/blog/weglot-wordpress-multilingue-traduction/)

rendre multilingues et offrir une première version **traduite de manière automatique**.

**Weglot**, c’est déjà **50.000 sites traduits** dont **30.000 sites WordPress** ! Avec une appréciation de **4,9 étoiles sur 5** sur le catalogue officiel des extensions WordPress, basé sur près de 1.000 évaluations. C’est aussi plus de **100 langues supportées**.

Weglot est reconnu comme **la méthode la plus simple** pour rendre un site **multilingue** ! En effet, les méthodes d’intégration sont très simple et rapide à mettre en place.

Weglot est un service **freemium**. Il propose un plan **gratuit** jusqu’à 2000 mots traduits. Les 10 premiers jours, vous disposez d’une version d’essais vous offrant plus de mots et de langues.

**C’est donc un site déjà entièrement rendu multilingue et traduit que vous obtiendrez juste après avoir activé l’extension Weglot et y avoir renseigné votre clé API. 🎉 🎊 🎉**

Avec Weglot, il n’est pas nécessaire de traiter les traductions des thèmes et des extensions en manipulant des fichiers .mo et .po (en espérant que les éditeurs de ces derniers ont bien pris en compte le multilingue). Nous n’avons plus besoins non plus de dupliquer chaque contenu présent sur nos sites pour les traduire. La base de donnée n’est pas surchargé avec Weglot, les seules informations à êtres stockés sur vos sites sont celles affichées dans la page des options de l’extension ainsi que les URL personnalisées.

Pour offrir une version traduite de nos site, Weglot fonctionne de la manière suivante :

* **Intercepter le contenu original :** Quand une page traduite est appelée, Weglot va le détecter et va intercepter le contenu HTML de celle-ci.
* **Analyse du contenu :** Avant de l’afficher, le contenu va être analysé afin d’y identifier les textes à traduire (ainsi que les URL des médias si cette option est activé).
* **Échange avec l’API Weglot :** Ce contenu est ensuite envoyé à l’API de Weglot qui va ensuite renvoyer toutes les traductions de ces contenus.

Soit la traduction est déjà connue par l’API (soit parce quelle à déjà été traduite automatiquement, soit parce quelle à déjà été modifié manuellement) et est directement renvoyée, soit elle est inconnue et c’est alors une traduction automatique qui sera proposée.

cet outil s’intègre à toutes les technologies web. Dans le cas de WordPress, l’intégration peut se faire avec une extension. Mais il est possible de traduire toutes sortes de sites. Vous pourrez en savoir plus sur les différentes possibilités d’intégration de Weglot ici : [https://weglot.com/integrations/](https://weglot.com/integrations/?fp_ref=wprock)

12 **créer un compte** pour accéder à l’administration des traductions et à notre **clé API**. Cette clé API permet de connecter Weglot avec le site à traduire et à rendre multilingue.

Pour l’obtenir, rendez-vous ici : [https://weglot.com/register-wordpress](https://weglot.com/register-wordpress?fp_ref=wprock)

Toujours dans un esprit de simplicité, la **création du compte** ne demande que 2 informations : **Une adresse mail** et **un mot de passe**.

Vous recevez alors immédiatement un mail de confirmation avec un lien qui vous mènera à votre fameuse clé API. Copier là et garder cette page de côté.

Maintenant que nous avons notre **clé API**, il nous faut **installer l’extension Weglot** sur le site WordPress. Depuis votre back office, Rendez-vous dans « Extensions » puis « Ajouter ». Recherchez l’extension « Weglot », installez-la et activez-la.

Une fois **installée et activée**, une nouvelle entrée « Weglot » est apparu dans le menu gauche de votre back office. Cliquez dessus pour afficher la **page des réglages** de l’extension.

Dans un 1er temps, ce sont 3 informations qui vous sont demandées :

* Votre clé API : Copier coller la clé que nous venons de créer
* La langue originale du site
* Les langues que vous souhaitez pour les traductions de votre site

Une fois que vous les aurez complété, Il vous suffit de valider pour que la magie opère ! Une fenêtre modale apparait pour vous informer que votre site est à présent multilingue et traduit. Vous êtes invité à visiter la page d’accueil de votre site et à profiter du résultat.

Au démarrage de Weglot sur votre site, c’est le sélecteur de langue par défaut qui sera utilisé, placé en bas à droite des pages.

Par défaut, Weglot ajoute un sélecteur de langue placé en bas à droite du navigateur sur les pages de votre site. Mais différentes options vous sont proposées pour pouvoir placer le sélecteur à l’endroit qui vous conviendra le mieux. Ces méthodes sont aussi rappelées dans les options de l’extension.

En vous rendant dans d’administration des menus (Apparence => Menus), vous pourrez constater qu’il vous est possible, après avoir mis Weglot en place, d’ajouter le sélecteur de langues comme un élément de menu.

En vous rendant dans l’administration des Widgets, il vous est maintenant possible d’ajouter un widget Weglot qui affichera le sélecteur de langue.

Republier Vos Articles Automatiquement sans Plugin Sur WordPress

Le procédé est simple. La première partie du code permet d’ajouter un [cron (ici un wp-cron plus précisément)](https://codex.wordpress.org/Function_Reference/wp_cron) qui se chargera d’exécuter une fonction à intervalle régulier. La seconde partie du code, quant à lui, se compose d’une requête qui appelle le post le plus ancien et qui lui attribut la date du jour.

Par défaut, WordPress propose 3 intervalles de temps pour l’exécution des wp-cron :

* **hourly** : toutes les heures
* **daily** : tous les jours, c’est celui qui est utilisé ici
* **twicedaily** : tous les deux jours

Il est également possible de créer vos propres intervalles en procédant comme ci-dessous.

Ici, nous créons un nouvel intervalle dont l’identifiant sera « **weekly**« , le nom affiché sera « **Once weekly** » et le délai entre chaque exécution sera de **604800 secondes**, ce qui équivaut à 7 jours. Une fois ce code ajouter, vous pourrez alors utiliser l’intervalle « **weekly** » comme s’y s’agissait d’un des trois intervalles par défaut de WordPress (**hourly**, **daily** et **twicedaily**).

Le **[plugin Republish Old Posts](https://fr.wordpress.org/plugins/republish-old-posts/)** propose de nombreuses options comme conserver la date original de l’article ou encore sélectionner les catégories des articles à republier. Cependant et à mon grand regret, elle ne fonctionne que sur les articles (posts) et ne permet donc pas de republier vos propre posts types.

[wp-pic type= »plugin » slug= »republish-old-posts » layout= »large » scheme= »scheme1″ align= »center » ajax= »no » ]

## Utiliser la Balise HTML

Vous pouvez placer le sélecteur de langue en utilisant le bout de code HTML suivant : <div id="weglot_here"></div>.

Retournons sur la page des paramètres Weglot pour voir les nouvelles options qui nous sont proposée.

Après les options de langues et de clés API précédemment complété, nous avons les maintenant des options liées au design du sélecteur de langues avec un aperçu de ce dernier.

## Personnaliser le Sélecteur de Langue

Plusieurs options sont disponibles pour personnaliser votre le sélecteur de langues. Il est possible de l’afficher en tant que liste déroulante ou les un à côté des autres. Il est possible d’utiliser ou non des drapeaux. D’afficher ou non le nom de la langue, ou encore de n’utiliser que 2 lettres pour les identifier.

## Personnaliser les Drapeaux

Vous pouvez choisir entre 4 designs de drapeaux. Vous disposez également d’options pour personnaliser les drapeaux des langues en fonction des pays. Par exemple, vous pouvez symboliser la version anglaise de vos site par un drapeau anglais, américain, australien, jamaïquain, etc.

Toujours dans les options Weglot, nous avons les exclusions de blocs et les exclusions de d’URL. L’exclusion d’URL peut par exemple être appliquée à la page de vos mentions légales. Et l’exclusion des blocs peut être appliqué sur les noms et pseudonymes affiché sur votre site.

Vous pouvez aussi décider de ne rendre qu’une petite partie de votre site multilingue, comme votre page d’accueil ou votre page a propos. Pour ce faire, vous pouvez, avec une regex, exclure toutes les pages du site à l’exception de celles que vous souhaitez voir traduite.

## Rediriger les Visiteurs Selon la Langue de Leur Navigateur

Si vous activé l’auto redirection, les utilisateurs arrivants sur votre page d’accueil seront redirigé sur la page traduite selon la langue définit dans leurs navigateurs web.

## Traduire les Emails à la Volée

En activant cette option, les emails seront traduit avant d’être envoyé a vos utilisateurs. Cette option est très utile si vous proposés une boutique en ligne.

## Traduire la Version AMP de Votre Site

Si vous proposé une version AMP de votre site, activez cette option si vous souhaitez la rendre multilingue et traduite.

## Rendre la Recherche Utilisable Dans Toutes les Langues

Cette option va permettre de lancer des recherches sur votre site depuis n’importe quelle langue.

Pour permettre cela, chaque recherches effectuées par vos utilisateurs sur les versions traduite de votre site est traduite à la volée par Weglot dans la langue originale du site avant d’être effectuée. Ainsi, les résultats de recherches affichés sont les mêmes que si la recherches avait était faites dans la version originale, mais affiché traduite pour vos utilisateurs.

Si vous souhaitez pouvoir tester votre site multilingue sans l’afficher pour vos utilisateurs, vous pouvez passer les langues en mode privée.

Le Dashboard est l’endroit où nous allons pouvoir gérer et modifier toutes nos traductions, consulté nos statistiques de visites sur les page traduites ainsi que les paramètres .

La partie « translation » est l’endroit ou nous allons pouvoir retrouver toutes nos paires de traductions, pour toutes nos paires de langues configurés.

Un moteur de recherche nous permet de retrouver des traductions en particulier. Il est aussi possible de les trier par URL, par type (texte, Informations Meta pour le SEO, ou médias), ou encore par qualité (Automatique, manuelle ou professionnelle).

Weglot propose également un éditeur visuel pour gérer les traductions. Ce dernier nous permet de visualiser notre site en ajoutant des marqueurs autours de tous les éléments traduisibles. En cliquant dessus, on peut alors voire toutes les traductions de l’élément et les éditer.

La partie « Translation tools » vas nous permettre de chercher et remplacer des termes au sein des traductions, et va nous permettre de paramétrer un glossaire pour nos traductions.

La partie glossaire va nous permettre d’appliquer des règles à appliquer à nos traductions. Par exemple, je peux imposer de toujours traduire le mot « extension » par « plugin », où encore imposer de ne jamais traduire « Orthotypo », le nom de l’une de mes extensions.

Enfin, l’outil « Search and Replace » vous permet d’effectuer des remplacements dans vos traductions déjà existantes.

Pour permettre aux moteurs de recherches de trouver les page traduites, Weglot va ajouter des données dans les header des sites. Ces données sont conformes avec [les meilleures pratique SEO conseillés par Google](https://support.google.com/webmasters/answer/189077). Dans ce cas, il s’agit de la méthode des balises HTML.

Voici à quoi ces données ressemblent. C’est un code ajouté sur les pages de votre site entre les balise :

Weglot a également été pensé pour les développeurs ! Voici les ressources mises à votre disposition :

* Toutes les méthodes pour gérer les textes qui resteraient non traduits : [https://developers.weglot.com/wordpress/filters/translations-filters](https://developers.weglot.com/wordpress/filters/translations-filters) (Il est à noter que vous pouvez également contacter le suport pour obtenir de l’aide)
* L’extension Weglot propose énormément de Hook qui vous permet de modifier son fonctionnement : [https://developers.weglot.com/wordpress/filters/other-filters](https://developers.weglot.com/wordpress/filters/other-filters)

## [WPML ou Polylang, comment choisir son extension multilingue](https://www.lumieredelune.com/wpml-polylang-choisir-extension-multilingue)

Très intéressant Polylang pas mal. Dans la liste j'aurais mis aussi Weglot très utilisé sur l'environnement Shopify que je connais bien. Et maintenant il y a chat GPT qui est vraiment pas mauvais pour l'anglais à défaut de l'allemand

Je ne l'ai volontairement pas mentionné parce qu'il fonctionne sur un principe totalement différent que je n'aime pas du tout. C'est un plugin de "traduction", pas un plugin de gestion multilingue, et les traductions faites ne sont pas intégrées dans la base de données du site, ou alors j'ai loupé une étape.

## Polylang Ou WPML ?

[WPML](https://wpml.org/?aid=7247&affiliate_key=qejpptl4CWrb) est une extension qui permet d'activer le multilinguisme sur WordPress et qui vient du monde de la traduction. La société éditrice du plugin, OnTheGo System gère aussi un service de traduction "I Can Localize". Il me semble, mais je peux me tromper qu'ICL a existé d'abord, puis OnTheGo avec le développement de WPML dans le monde WordPress. En tout cas, OnTheGo – et donc WPML – existe depuis **2007**. J'ai acheté WPML vers 2010, je pense, en 2014 j'ai acheté une licence illimitée à vie. WPML n'a pas de version gratuite.

[Polylang](https://fr.wordpress.org/plugins/polylang/) est venu nettement plus tard, avec une release 0.1 qui date du 22 septembre **2011**. Pour pouvoir s'imposer dans un mode où WPML était déjà omniprésent, Polylang a fait le choix de s'appuyer sur le paramétrage wpml (le fichier wpml-config.xml) et de redéfinir dans son plugin certaines fonctions comme icl_​get_​home_​url(). Polylang a une version gratuite, et trois packages payant. Polylang n'a **pas de fonction permettant de gérer les traducteurs et traductions**, que ce soit en interne ou en externe (à l'exception de l'import/export de traduction de chaines en xliff).

Ce sont donc **deux extensions différentes dans leur philosophie** et leurs objectifs, comme dans leurs options techniques.

### Au Fait, Polylang S'appuie Sur WPML, Mais Pas Partout

En particulier [pour ACF](https://www.lumieredelune.com/wpml-polylang-choisir-extension-multilingue#Le-cas-particulier-dACF), ils utilisent la même logique que WPML, mais pas avec les mêmes valeurs.

Par ailleurs, ils utilisent certaines fonctions wpml mais sans tester leur existence (message "Cannot redeclare icl_​get_​home_​url()") ce qui force à faire une gymnastique de désactivation/​réactivation des plugins quand on veut vérifier ses imports WPML vers Polylang.

Ma licence WPML m'a aidée à aimer le plugin et plus je l'utilise plus je le maîtrise. Il y a eu une époque où je le détestais sans avoir de meilleure solution. J'en ai déjà parlé ici, et [fait des comparatifs de plugins multilangues, mais avec l'affreux QTranslate](https://www.lumieredelune.com/wordpres-wpml-qtranslate).  Suite à quelques échanges et un article de Jean-​Baptiste Audras, [disant que WPML était "obsolète"](https://www.whodunit.fr/gestion-multilingue-dans-wordpress-adieu-wpml-bonjour-polylang/), j'ai voulu me mettre à jour et faire une comparaison à aujourd'hui, de ces deux outils.

### Ce Que Je N'ai Pas Testé

Ce que je n'utilise pas, ou presque pas, c'est à dire **la traduction de chaîne**, j'essaye de toujours passer par des fichiers .po. En particulier, pour [ACF j'active le domaine de texte](https://www.lumieredelune.com/custom-fields-options-acf-wpml-tuto) et je marque toutes mes chaînes avec les fonctions i8n (ce qui veut dire que je ne travaille pas avec des groupes de champ créés dans l'admin).

Je n'ai pas mis de **WooCommerce** dans le site, ni d'extension lourde et complexe comme **Gravity Forms**, pour laquelle il n'y a pas de support annoncé de la part de Polylang.

**J'utilise très peu Elementor**, et uniquement dans des pages, pas pour des headers, footers, sidebars.

Enfin, travaillant en localhost, je me suis totalement **désintéressée de la performance** (mais sur le site en ligne, avec WPML, ça fonctionne sans problème).

J'ai simplement essayé de voir si Polylang répondait à **mon besoin**, dans le cas d'un site complexe avec beaucoup de développements personnalisés, avec une méthode de travail qui me correspond pour les traductions.

## Configuration de Base En Important les Données de WPML

J'ai une configuration où **je gère les langues sur deux noms de domaines différents**. Parce que "lamarmitevagabonde" en anglais, ça ne veut rien dire. Les screens de cet article sont pris des versions de développement, en localhost, où [lamarmitevagabonde.com](https://lamarmitevagabonde.com/) se transforme en chiprijoki et la version anglaise, [cookontheways.com](https://cookontheways.com/) devient wanderingpot.

J'utilise de façon très importante [ACF](https://www.lumieredelune.com/outil/advanced-custom-fields), avec des champs personnalisés parfois complexes un peu partout, y compris sur la page user, dans des pages d'options, etc. J'ai surchargé mon plugin SEO, en particulier.

Voici les plugins que j'utilise pour WPML et la config équivalente (je pense) pour Polylang :


Mes extensions pour Wpml ou Polylang

Je sais déjà que pour utiliser Polylang sur ce site, **il me faut la version Pro pour pouvoir l'intégrer avec ACF Pro**, et d'autres plugins. Mais comme tout le monde n'utilise pas ACF, j'ai voulu tester ce qui se passe quand fait tourner l'importation de WPML vers Polylang dans la version de base, puis qu'on rajoute les plugins nécessaires pour ACF. Est-​ce que je peux récupérer mes données, ou bien… est-​ce que je dois recommencer ? Je fais donc un petit back up de ma base de données et on commence.

Alors que l'importation de données d'un plugin SEO à l'autre se fait très facilement, avec un warning sur un écran admin, du type "nous avons détecté des données de tel plugin, voulez-​vous les importer ?" **Polylang ne fait rien de tel**. Même en activant directement WPML Import, Polylang vous lance d'emblée dans la configuration. Or si on prend le temps de lire la doc de WPML Import, il faut **d'abord désactiver WPML** (et de toute façon il est impossible d'utiliser les deux à la fois, bug ou feature…) et surtout **ne créer aucune langue directement dans Polylang**.  
Quand on lance l'importateur, il vérifie qu'aucune langue n'a été créée. Je ne suis pas allée jusqu'à voir ce qui se passait quand on avait déjà créé ses langues avant de lancer l'importateur (comportement classique de l'utilisateur qui ne sait pas "read the fucking manual" avant de commencer).

### Ce Qui a Fonctionné :

Ce que le monsieur du plugin a dit : les articles, les taxonomies et les termes, les métas attachés aux termes et aux articles.

### Ce Qui N'a Pas Fonctionné :

toutes mes options générées avec WPML et certains de mes champs personnalisés ACF.

### La Confusion des Langues :

Chose étrange, alors que la langue des contenus est correctement déterminée, les filtres Polylang semblent ne pas s'appliquer partout dans l'admin, puisque la liste par défaut de mes pages en "français" affiche mes pages en français ET en anglais. Il faut cliquer sur un statut (publié, brouillon, en attente de relecture, etc). pour ne voir que les pages en français.

Pire encore, quand je clique sur "voir" pour une page en anglais, à partir de l'admin, (page d'édition de l'article) Polylang l'affiche avec le nom de domaine français si elle n'est pas publiée. C'est plus que troublant.

Autre détail, j'ai fait un filtre pour rajouter des termes de taxonomie dans ma fenêtre de recherche lors de l'insertion de lien. Avec Polylang le terme en français apparait comme le terme en anglais, avec WPML seul le terme dans la langue courante apparait. C'est un petit détail, certes…mais il y a beaucoup de petits détails de la sorte.


Je suis sur une page en anglais, et je vois des termes en français et en anglais.

## On Recommence Avec Tous les Plugins Nécessaires

Je repars donc à zéro, avec cette fois-​ci Polylang Pro et les plugins nécessaires pour gérer mes développements sur ACF Pro, en particulier mes pages d'options. Rien ne change. 

WPML vers Polylang avec ACF ne fonctionne que sur des sites simples et ne permet pas de **convertir tout ce qui a été fait avec ACF**.

## Configuration de Base de Polylang

Alors que la configuration de base de WPML est extrêmement détaillée et **complexe**, quand on ne connait pas le plugin, celle de Polylang est beaucoup plus simple.

### Choix des Langues

Dans WPML, les langues sont préconfigurées, avec la possibilité de rajouter avec des filtres les langues "bizarres" qui n'existeraient pas en standard.

Dans Polylang, ce sont des termes dans une custom taxonomie, où tout doit être paramétré. On peut aussi choisir dans une liste de langue pré-​paramétrées, en modifiant néanmoins n'importe quel élément.

**Fonctionnalités équivalentes, facilité équivalente**, risque de "faire des bêtises" supérieur chez Polylang en corrigeant de façon erronée une langue.

**Dans la version gratuite, il n'est pas possible de masquer une langue**, contrairement à WPML. Ou plutôt on peut la "masquer" en l'excluant du sélecteur de langue (et en codant), mais elle apparait toujours dans les sitemaps. C'est extrêmement compliqué, dans ces conditions, de mettre en place une nouvelle langue. Il faut **utiliser la version pro, qui permet de désactiver une langue**.

Sauf que… quand la langue est désactivée, on a toujours accès aux contenus, on peut les modifier et les prévisualiser quand ils ne sont pas publiés, mais c'est tout. Impossible, par exemple, de visualiser une page d'archive de catégorie, on tombe sur une 404. Il reste donc très difficile de préparer une version étrangère. Et oui, prévisualiser une catégorie, quand on a une description longue ou d'autres améliorations, c'est parfois nécessaire.

### Affichage des Traductions

WPML permet de **choisir si on traduit tout, ou seulement une partie du site**. Imaginons un site en français, avec des pages non traduites en anglais. On peut choisir, dans la version anglaise, de n'afficher que les contenus traduits, ou d'afficher en français les pages non traduites. Si ce n'est pas idéal d'un point de vue SEO, cela peut être bien pour l'utilisateur (j'ai développé un bout de code pour rajouter sur ces pages une traduction automatique). Polylang ne propose pas ces options.

### Paramétrage des Types de Contenus et des Customs Fields à Traduire

Polylang reprend les fichiers de configuration de WPML.

Par contre, à la différence de WPML, **il n'affiche que les éléments non inclus dans ces fichiers de configuration**.

En clair, j'ai un custom post type que j'ai configuré dans mon wpml-config.xml comme "traduisible". Dans WPML il apparait dans la liste des types de contenus, avec sa configuration en grisé. Je sais donc comment il fonctionne.

Dans Polylang je ne le vois pas. Je ne pense pas que cette option existe (autrement qu'en jouant sur le sélecteur de langue… mais les contenus apparaitront dans le sitemap).

### Duplication des Informations Vers la Traduction

J'ai parcouru la doc avec intérêt. J'y ai lu quelque chose que je ne comprends pas au sujet de la synchronisation entre un article et ses traductions :

> Note : other types of content (taxonomies, featured image, custom fields, page order and template…) are automatically copied whether this option is activated or not.

Ce qui, si je l’interprète correctement, veux dire que Polylang s'assied purement et simplement sur les choix de synchronisation des custom fields dans le wpml-​config ? Et cela pose problème pour le cas particulier de la [traduction des médias](https://www.lumieredelune.com/wpml-polylang-choisir-extension-multilingue#Traduction-des-medias).

## Le Cas Particulier d'ACF ….

Manifestement, Polylang et ACF Pro ne sont pas vraiment copains.

Ou plutôt, Polylang a décidé de **ne pas s'appuyer sur les configs WPML pour sa gestion d'ACF**.

Je passe sur le problème de la traduction des options, gérée par un **plugin externe**.  

Et j'en arrive au truc qui gêne vraiment plus que tout : **la gestion des préférences de traduction** pour chaque champ.

Avec WPML, on doit utiliser le plugin "ACF Multilingue", qui permet, lors de la création du groupe de champs, de choisir entre "ignorer, traduire, copier, copier une fois" et qui donne dans la définition php du champ une ligne **'wpml_​cf_​preferences' => 2** pour copier la valeur du champ. On a un marquage un peu différent mais similaire dans le fichier wpml-config.

Good.

Sauf que…

Avec Polylang, la même instruction est **'translations' => 'sync'** . Et que le plugin ne daigne pas tester les deux valeurs. Et ne prend pas en compte wpml-​config (j'ai testé.. même en créant un nouveau groupe de champ). Bref, tout recoder…

Donc, non, contrairement à ce que dit Jean-​Baptiste Audras,

> Grâce à cette extension, la migration de la base de données de votre site est la partie facile de la migration.

Ou plutôt si,c'est la partie la facile. Mais je dirais plutôt "la moins difficile".

> Dans tous les cas, le passage de WPML n’est pas très complexe, il faut « simplement » savoir quoi chercher. Les fonctions WPML sont généralement reconnaissables par leur préfixe : `ICL_` ou `wpml_`. Le plus simple est de scanner l’ensemble des fichiers de votre thème pour y rechercher les fonctions WPML et les remplacer par leur équivalent Polylang.

Sauf que…si vous utilisez ACF avec du code, comme moi, **vous ne trouvez nulle part cette info dans la doc**. (Vous ne la trouvez pas non plus dans la doc WPML). Et si vous utilisez ACF en mode GUI, avec la définition des groupes dans l'admin, vous devez repasser sur tous vos champs les uns après les autres.

Et réenregistrer la traduction de toutes vos options.

## Traduction des Médias

On arrive maintenant à la traduction des médias, où **vous risquez tout simplement, là encore de perdre des données si vous migrez**. WPML et Polylang fonctionne sur le même principe de non-​duplication des fichiers, et de traduction "simple" des chaines.

WPML offre une **fonctionnalité supplémentaire**, que Polylang considère inutile : **la possibilité de mettre un fichier différent dans une langue donnée**. Très utile si votre image comporte beaucoup de texte, un nom de recette par exemple ^^ et que vous l'avez en image à la une. Pour Polylang, il s'agit à ce moment là d'une image différente que vous n'avez pas besoin de traduire, vous avez un autre media et puis voilà, c'est tout.


La fenêtre de traduction d'un média

Sauf que…

Polylang **synchronise automatiquement les images à la une**. Donc avec le système Polylang on ne peut pas utiliser une image à la une différente dans deux langues différentes. Ou image pour Pinterest (ces images verticales avec plein de texte). Dans mon plugin WPRecipe Maker, je peux mettre des images spécifiques pour Pinterest, et j'aimerais bien ne pas avoir à les recharger dans la traduction.

## Traduction des Users

Là c'est simple, **Polylang ne permet pas de traduire autre chose que la bio**. Avec un champ "en anglais", "en français"… et j'ose à peine imaginer s'il y a une dizaine de langues :) La traduction est stockée comme un usermeta supplémentaire, avec comme meta_​key "description_​en", ce qui veut dire qu'**on ne peut pas gérer deux versions d'anglais différentes** (en-​US et en-​GB par exemple).

Avec WPML, il est possible de traduire un certain nombre d'éléments, soit par la traduction de chaine, soit par la traduction des champs ACF.

Par exemple, une profession, un diplôme, ou même le "nice name" (nom affiché). Eh oui, si mon user s'affiche comme "La Marmite" en français, il sera autre chose en anglais… Mais si on modifie la valeur d'un champ, ACF ou pas, avec Polylang, elle est automatiquement reportée dans l'autre langue, même si le champ est marqué comme "traduisible".

## Interface de Traduction

C'est ce qui m'a le plus surprise et j'avoue que ça suffirait pour me faire oublier Polylang, mais c'est **lié à ma façon de travailler**.

WPML propose deux interface de traduction, l'une dite "avancée" qui est plus adaptée à la gestion des traductions envoyées à l'extérieur ou traduites par un outil, et l'autre, la "classique" que j'utilise avec DeepL, je vous ferai une petite vidéo.

Pour un article, ça se présente comme ça :


La langue d'origine à gauche, la traduction à droite, avec la possibilité de saisir directement ou de "copier" et traduire

Chaque champ de type éditeur visuel peut être ouvert en full screen.

La petite case qui permet de valider la traduction est particulièrement utile si on copie a priori des valeurs de champs.

Je n'imagine pas comment **traduire sans avoir à la fois le texte d'origine et la traduction, ni pouvoir identifier ce qui est "réellement" traduit**.

## Synchronisation des Menus

Enfin dernière chose qui ne se traduit pas, ce sont les menus. Techniquement, cela pourrait puisque qu'un menu est un post_​type spécifique. En ne permettant pas de traduire les menus, Polylang perd la possibilité de synchroniser, comme le fait WPML (on ajoute une page dans un menu en français, sa traduction est disponible, elle s'affiche automatiquement dans le menu en anglais).

## Documentation et Développement

J'avais eu un échange sur Twitter avec Sébastien Serre au sujet de la qualité de la doc quand je m'interrogeais sur la traduction des pages d'options via un plugin externe, le tout "pas mis à jour".. 

et voilà, j'ai dû plonger dans la doc, pour savoir ce que l'outil faisait exactement et pour adapter mes développements à Polylang. J'ai donc vu que leur doc est de qualité (quand ils disent qu'ils font un truc et qu'ils en passent un autre sous silence, c'est effectivement qu'ils ne font pas le second), mais restreinte à l'essentiel.

Quoiqu'il en soit, j'ai trouvé dedans ce dont j'avais besoin pour éventuellement porter sur Polylang mes développements perso (en même temps c'est pas trop compliqué).

* liste des langues sur le site (actives et masquées) : pll_​languages_​list( $args ); les arguments ne permettent pas d'identifier les langues masquées, puisque Polylang ne connaît pas cette notion. Pour icl_​get_​languages, Polylang indique ne pas avoir d'équivalent (il utilise donc la fonction icl_get_languages)
* détermination de la langue du contenu affiché : pll_current_language
* détermination de la langue par défaut : pll_default_language
* déterminer si Polylang est actif. Il suffit de checker si une classe ou une constante est active. Par exemple PLL_FILTER_HOME_URL

Par contre, je trouve globalement la doc beaucoup moins complète que celle de WPML (merci la chasse dans la base de données et le code pour comprendre comment étaient stockées les traductions…) et surtout, c'est dommage qu'elle ne soit qu'en anglais. On peut vouloir utiliser un plugin multilingue sans parler anglais…

## Structure D'url

Ce serait ~~C'est~~ **la grande supériorité de Polylang sur WPML**.

En gros, WPML devine un certain nombre de choses à partir de l'url, il est donc sensible comme une princesse aux petits pois aux fonctionnalités qui modifient les urls, y compris le "no category base" que proposent beaucoup de plugins. Par contre, Polylang fonctionnant avec une logique différente, on est censé pouvoir martyriser les urls comme on veut (je demande quand même à voir sur des plugins comme "Post Types Taxonomies intersections"…). Cela dit je n'ai pas testé.

Pour être honnête, néanmoins, **je ne pense pas que cela soit très important aujourd'hui**. L'url est de moins en moins significative, elle n'est PAS un indicateur de profondeur de la page, ou de structure de site (à la différence du breadcrumb), et on peut vivre avec une telle base dans l'url.

Par contre, dès qu'on va dans du plus complexe, comme le fait le plugin "_Post Types Taxonomies intersection_" qui permet de générer des urls du type /​posttype/​term en rajoutant des variable dans "la" query (query_​var), **Polylang est tout aussi incapable que WPML** de traiter la chose correctement.

## Tables Supplémentaires

Pour Jean-​Baptiste Audras, le principal argument en faveur de Polylang, c'est que Polylang, développé plus tard que WPML, s'appuie sur les fonctionnalités de WordPress (custom taxonomie pour les langues, utilisation des metas pour le suivi des traductions). Dans cet article, il explique que c'est un grand avantage et que WPML serait d'ors et déjà obsolète avec ses nombreuses tables supplémentaires.

J'avoue que je suis **extrêmement dubitative sur cet argument**. Oui c'est bien d'utiliser le "Core" de WordPress, "quand on peut" et j'essaye de le faire au maximum. Mais si on est obsolète parce qu'on utilise des tables supplémentaires, à ce compte-​là, tous les grands plugins de la galaxie WordPress le sont, ou presque :

* WooCommerce
* Yoast
* RankMath SEO
* La plupart des plugins de cache ou de sécurité
* Gravity Forms
* etc…

Et la philosophie et les fonctionnalités des deux outils sont différentes. Je mets Polylang au défi de gérer les traductions et traducteurs comme le fait WPML en n'utilisant que les tables standards de WordPress.

Le deuxième point, **c'est l'argument de la performance**. Je suis allée voir la tête de mes tables après avoir fait la conversion de WPML à Polylang.

Ma table wp_​terms, qui faisait 2415 lignes a plus que doublé, avec deux terms pour les langues, et 1232 terms aux noms ésotériques, du type pll_62b3582366cc8.

La table wp_​term_​taxonomy a explosé aussi, chaque terme "pll_​" étant une custom taxonomy **term_​translations** ou **post_​translations**, dont chaque terme unique est associé avec l'objet "post" ou "terme" qui est traduit. La description du terme contient un tableau de type "a:2:{s:2:"fr";i:2076;s:2:"en";i:2077;}" pour affecter sa langue à chaque objet. Ces infos sont consultables via $GLOBALS.

Chez WPML, le lien entre un contenu et sa traduction est stocké à part, dans une table où tous les champs sont indexés. Chaque "paire" (langue d'origine-langue traduite) est sur une ligne.

En termes de performances pures, je ne sais pas réellement quelle est la meilleure solution. Avec un bon plugin de cache, de toute façon, le problème se pose surtout pour les utilisateurs connectés.

Je suis un peu surprise par le nombre de termes, mais je ne connais pas assez bien les modes d'optimisation de la performance de WordPress pour avoir un avis. Notamment sur **l'impact sur get_​terms()**. Par contre, je sais qu'on ne peut pas affecter un terme à un terme (je l'ai fait dans certains sites) et donc que toute la gestion des la traduction des termes **ne passe pas exclusivement par des fonctionnalités WordPress**. Et que la gestion de ces deux types de traduction passe obligatoirement par des process différents.

De plus, la solution Polylang est plus complexe en set-​up, puisqu'une taxonomie est définie par type de contenu (et comme la taxonomie user_​translations n'existe pas… ben [on ne traduit pas les utilisateurs](https://www.lumieredelune.com/wpml-polylang-choisir-extension-multilingue#Traduction-des-users)), alors que dans la solution WPML, traduire un "truc" supplémentaire est une valeur de champ différente dans la table des traductions.

De plus, dans l'intégration "seamless" dont parle Jean-​Baptiste, moi je vois quelques coutures, avec RankMath SEO qui m'avertit gentiment que quelque chose de bien obscur pour l'utilisateur final a été supprimé et qu'il faudrait éventuellement faire une redirection ?


A la suppression de la traduction d'un terme, un message ésotérique (qui n'apparait pas pour les articles).

Mais Polylang est compatible Yoast et ne dit rien sur RankMath, ça doit être pour ça :)

Dernier problème, qui est la gestion de la visibilité des taxonomies. J'ai dans une de mes pages d'options ACF une liste de taxonomies, filtrée pour ne sortir que les taxonomies publiques :

$all_taxos = get_taxonomies( array( 'public' => true ) , 'objects' ) ;

foreach ( $all_taxos as $the_tax ) {

   $taxid = $the_tax->name ;

   $taxname = $the_tax->label ;

  $field['choices'][ $taxid ] = $taxname; 

 }


La petite case sans nom, c'est "post_​translations"

Et sur la page d'option, ça donne ceci :

je comprends encore qu'on ait besoin d'utiliser les langues comme une taxonomie publique, encore qu'on aurait pu mettre 'public' => 'false' et gérer finement les autres paramètres.

Par contre, pour "post_​translations" je ne comprends pas.

Un détail ? Pas tant que ça en fait. Parce que **cette taxonomie "publique" est donc considérée par défaut comme indexable par votre plugin SEO préféré**, et si vous ne faites pas attention, **va vous envoyer dans le sitemap tout les termes en question**. Si par malheur vous installez Polylang après avoir fait votre paramétrage SEO, ben … in the baba, vous vous en apercevrez sur la Search Console.

## Coût : Ce N'est Pas Parce Qu'on Est Gratuit Qu'on Est Pas Cher

WPML a toujours été payant.

Sa version de base, à 39$ /​ an est réservée aux blogs ou aux petits sites vitrines. Elle a un niveau de fonctionnalités un peu supérieur à la version gratuite de Polylang, mais **si vous n'avez pas et n'aurez pas besoin** de l'ensemble des fonctionnalités de WPML, autant rester sur Polylang en version gratuite. C'est ce que je faisais il y a quelques années pour des petits sites.

Par contre, dès que vous avez besoin d'un peu plus, par exemple WooCommerce, ou l'intégration avec ACF, la situation est différente.

**WPML propose une licence à 99$ avec la totalité de ses fonctionnalités et une autre à 139$ avec les mêmes fonctionnalités, mais qui n'est pas limitée en nombre de site.**

Ces fonctionnalités incluent en plus la **synchronisation des menus**, ce qu'ils appellent les "**sticky links**" (faire en sorte qu'un lien interne, dans un contenu traduit, renvoie toujours vers la traduction du lien). Il y a aussi des plugins pour assurer la compatibilité avec Gravity Forms, Ninja Forms, Contact Form 7, WP Forms, Buddy Press, WP All Import, MailChimp.

Du côté Polylang, pour avoir l'intégration avec ACF et la possibilité d'activer ou de désactiver des langues, il faut payer entre **99€ pour un site et 495€ pour 25 sites** (pas de "sites illimités").

Mais pour avoir l'intégration avec WooCommerce avec, entre autres, la synchronisation des attributs dans toutes les langues, il faut aussi payer entre 99€ et 495€.

**Le tarif "offre groupé" (Polylang Pro + WooCommerce) va de 139€ pour un site (soit le prix pour un nombre illimités de sites chez WPML) à 649€ pour 25 sites.**

De plus, la licence WPML vient avec des crédits de traduction.

Pour résumer, dès qu'on sort d'un site simple, Polylang est beaucoup plus cher que WPML.

## WPML Ou Polylang, Un Choix Structurant

Que ce soit dans un sens ou un autre, dès que votre site est complexe, **la migration d'un plugin à l'autre sera compliquée**.

Polylang est compatible avec beaucoup moins de plugins que WPML (le dossier "intégrations" de Polylang inclut ACF, admin-​columns, Beaver Builder, Divi, Events Calendar, JetPack, Yoast, Yarpp et quelques autres). Ça ne veut pas dire qu'il est incompatible avec les autres, mais qu'il n'a pas fait l'effort d'assurer la compatibilité, se reposant sans doute un peu sur les configs WPML. Ou que des extensions ont été développées par des tiers. Il y a sur WordPress.org une extension pour Contact Form 7, mais elle n'a pas été développée par l'auteur de Contact Form 7 ni par Polylang. Dans ces cas là, si quelque chose ne va pas, ça tourne à la partie de ping-pong.

WPML a plus de fonctionnalités que Polylang, les fonctionnalités qui comptent quand on gère un site important avec du volume de contenu à traduire.

Donc "petit site pas destiné à évoluer, sans ACF, sans gestion des traductions" Polylang fait bien le taf. Pour le reste, pour moi, **c'est toujours WPML**.

### WPML est-​il "obsolète" ?

D'une certaine façon, peut-​être, oui. Mais à ce compte-​là, **php7.3 ou 7.4 sont aussi obsolètes**. Et pourtant une énorme partie du monde WP tourne encore dessus.

Php tout court est obsolète, face à d'autres langages plus évolués, plus ceci, plus cela…

**L'obsolescence est gênante quand elle se transforme en panne**. Avant, tant que ça marche bien et que ça fait ce dont on a besoin…

**WPML a énormément évolué, et en bien**. Quand je m'y suis remise, je n'ai pas reconnu le plugin de 2016.

Peut-​être ne changera-​t-​il pas ses structures et ses tables, quand le multilingue sera intégré au core de WordPress, mais il sera temps de voir. Le multilingue est sur la roadmap depuis si longtemps que j'ai des doutes sur une arrivée prochaine. Et **en attendant, j'ai du taf et des traductions**.

Peut-​être changera-​t-​il ses structures. Peut-​être que le multilingue du Core de WordPress restera si proche de Polylang qu'il en aura les mêmes limitations.

Aujourd'hui et maintenant, je n'ai **aucun moyen de prédire avec certitude** :

* quand WordPress sera multilingue
* quelles seront les fonctionnalités intégrées dans le core
* si WPML se rapprochera ou pas de cette nouvelle version.

"Impasse technologique" ? C'est aussi ce qu'on disait de WordPress, avant la migration vers Gutenberg. Et justement, Gutenberg montre bien à quel point le chemin vers un WordPress totalement rewampé a été long, et n'est pas fini. Il en sera de même pour le multilangue.

Donc, **pour moi**, la future obsolescence d'un produit qui répond à mes besoins et pour lequel je n'ai pas d'alternative est un faux sujet.

Les deux plugins répondent à des besoins différents, et ce qui me gêne chez Polylang sera une qualité pour d'autres.

En tout cas, si vous voulez investir 39$ ou plus pour voir WPML, [c'est par ici](https://wpml.org/?aid=7247&affiliate_key=qejpptl4CWrb) (et oui, c'est un lien affil).

## Je Vous Présente **Weglot** En Détails et Vous Explique Comment le Mettre En place Sur Vos Sites Pour les Rendre Multilingues et Offrir Une Première Version **traduite de Manière automatique**.

Weglot est un service **freemium**. Il propose un plan **gratuit** jusqu'à 2000 mots traduits. Les 10 premiers jours, vous disposez d'une version d'essais vous offrant plus de mots et de langues.

* [🍪 Confidentialité et Transparence](https://wprock.fr/blog/weglot-wordpress-multilingue-traduction/#-confidentialite-et-transparence)
* [Weglot : Présentation et fonctionnement](https://wprock.fr/blog/weglot-wordpress-multilingue-traduction/#weglot-presentation-et-fonctionnement)
* [Weglot : Traduire et rendre multilingue un site WordPress](https://wprock.fr/blog/weglot-wordpress-multilingue-traduction/#weglot-traduire-et-rendre-multilingue-un-site-wordpress)
* [Weglot : Placer le sélecteur de langue](https://wprock.fr/blog/weglot-wordpress-multilingue-traduction/#weglot-placer-le-selecteur-de-langue)
* [Weglot : Personnaliser le sélecteur de langue](https://wprock.fr/blog/weglot-wordpress-multilingue-traduction/#weglot-personnaliser-le-selecteur-de-langue)
* [Weglot : Exclusion de blocs et d'URL](https://wprock.fr/blog/weglot-wordpress-multilingue-traduction/#weglot-exclusion-de-blocs-et-durl)
* [Weglot : Configuration et options avancés](https://wprock.fr/blog/weglot-wordpress-multilingue-traduction/#weglot-configuration-et-options-avances)
* [Weglot : Gérer vos traductions dans le Dashboard](https://wprock.fr/blog/weglot-wordpress-multilingue-traduction/#weglot-gerer-vos-traductions-dans-le-dashboard)
* [Weglot : Le SEO multilingue](https://wprock.fr/blog/weglot-wordpress-multilingue-traduction/#weglot-le-seo-multilingue)
* [Weglot : Les ressources pour les développeurs](https://wprock.fr/blog/weglot-wordpress-multilingue-traduction/#weglot-les-ressources-pour-les-developpeurs)

## Weglot : Présentation et Fonctionnement

**Weglot**, c'est déjà **50.000 sites traduits** dont **30.000 sites WordPress** ! Avec une appréciation de **4,9 étoiles sur 5** sur le catalogue officiel des extensions WordPress, basé sur près de 1.000 évaluations. C'est aussi plus de **100 langues supportées**.

Weglot est reconnu comme **la méthode la plus simple** pour rendre un site **multilingue** ! En effet, les méthodes d'intégration sont très simple et rapide à mettre en place.

Avec Weglot, il n'est pas nécessaire de traiter les traductions des thèmes et des extensions en manipulant des fichiers .mo et .po (en espérant que les éditeurs de ces derniers ont bien pris en compte le multilingue). Nous n'avons plus besoins non plus de dupliquer chaque contenu présent sur nos sites pour les traduire. La base de donnée n'est pas surchargé avec Weglot, les seules informations à êtres stockés sur vos sites sont celles affichées dans la page des options de l'extension ainsi que les URL personnalisées.

Pour offrir une version traduite de nos site, Weglot fonctionne de la manière suivante :

* **Intercepter le contenu original :** Quand une page traduite est appelée, Weglot va le détecter et va intercepter le contenu HTML de celle-ci.
* **Analyse du contenu :** Avant de l'afficher, le contenu va être analysé afin d'y identifier les textes à traduire (ainsi que les URL des médias si cette option est activé).
* **Échange avec l'API Weglot :** Ce contenu est ensuite envoyé à l'API de Weglot qui va ensuite renvoyer toutes les traductions de ces contenus.

Soit la traduction est déjà connue par l'API (soit parce quelle à déjà été traduite automatiquement, soit parce quelle à déjà été modifié manuellement) et est directement renvoyée, soit elle est inconnue et c'est alors une traduction automatique qui sera proposée.

**C'est donc un site déjà entièrement rendu multilingue et traduit que vous obtiendrez juste après avoir activé l'extension Weglot et y avoir renseigné votre clé API. 🎉 🎊 🎉**

Jusqu'ici j'ai parlé de service et pas encore d'extension WordPress. En effet, cet outil s'intègre à toutes les technologies web. Dans le cas de WordPress, l'intégration peut se faire avec une extension. Mais il est possible de traduire toutes sortes de sites. Vous pourrez en savoir plus sur les différentes possibilités d'intégration de Weglot ici : [https://weglot.com/integrations/](https://weglot.com/integrations/?fp_ref=wprock)

## Weglot : Traduire et Rendre Multilingue Un Site WordPress

La **première étape** est de **créer un compte** pour accéder à l'administration des traductions et à notre **clé API**. Cette clé API permet de connecter Weglot avec le site à traduire et à rendre multilingue.

Pour l'obtenir, rendez-vous ici : [https://weglot.com/register-wordpress](https://weglot.com/register-wordpress?fp_ref=wprock)

[](https://wprock.fr/wp-content/uploads/2019/12/Weglot-creation-compte-API.png)

Toujours dans un esprit de simplicité, la **création du compte** ne demande que 2 informations : **Une adresse mail** et **un mot de passe**.

Vous recevez alors immédiatement un mail de confirmation avec un lien qui vous mènera à votre fameuse clé API. Copier là et garder cette page de côté.

[](https://wprock.fr/wp-content/uploads/2019/12/weglot-cle-api-copier-coller-scaled.png)

Maintenant que nous avons notre **clé API**, il nous faut **installer l'extension Weglot** sur le site WordPress. Depuis votre back office, Rendez-vous dans "Extensions" puis "Ajouter". Recherchez l'extension "Weglot", installez-la et activez-la.

[](https://wprock.fr/wp-content/uploads/2019/12/weglot-installer-extension-plugin-wordpress-scaled.png)

Une fois **installée et activée**, une nouvelle entrée "Weglot" est apparu dans le menu gauche de votre back office. Cliquez dessus pour afficher la **page des réglages** de l'extension.

[](https://wprock.fr/wp-content/uploads/2019/12/weglot-mise-en-route.png)

Dans un 1er temps, ce sont 3 informations qui vous sont demandées :

* Votre clé API : Copier coller la clé que nous venons de créer
* La langue originale du site
* Les langues que vous souhaitez pour les traductions de votre site

Une fois que vous les aurez complété, Il vous suffit de valider pour que la magie opère ! Une fenêtre modale apparait pour vous informer que votre site est à présent multilingue et traduit. Vous êtes invité à visiter la page d'accueil de votre site et à profiter du résultat.

Au démarrage de Weglot sur votre site, c'est le sélecteur de langue par défaut qui sera utilisé, placé en bas à droite des pages.

## Weglot : Placer le Sélecteur de Langue

Par défaut, Weglot ajoute un sélecteur de langue placé en bas à droite du navigateur sur les pages de votre site. Mais différentes options vous sont proposées pour pouvoir placer le sélecteur à l'endroit qui vous conviendra le mieux. Ces méthodes sont aussi rappelées dans les options de l'extension.

### Dans Un Menu

En vous rendant dans d'administration des menus (Apparence => Menus), vous pourrez constater qu'il vous est possible, après avoir mis Weglot en place, d'ajouter le sélecteur de langues comme un élément de menu.

### Comme Un Widget

En vous rendant dans l'administration des Widgets, il vous est maintenant possible d'ajouter un widget Weglot qui affichera le sélecteur de langue.

### Utiliser le Shortcode

Vous pouvez placer le sélecteur de langue en utilisant le shortcode .

### Utiliser la Balise HTML

Vous pouvez placer le sélecteur de langue en utilisant le bout de code HTML suivant : `<div id="weglot_here"></div>`.

## Weglot : Personnaliser le Sélecteur de Langue

Retournons sur la page des paramètres Weglot pour voir les nouvelles options qui nous sont proposée.

Après les options de langues et de clés API précédemment complété, nous avons les maintenant des options liées au design du sélecteur de langues avec un aperçu de ce dernier.

[](https://wprock.fr/wp-content/uploads/2020/02/weglot-personnaliser-selecteur-de-langues.png)

### Personnaliser le Sélecteur de Langue

Plusieurs options sont disponibles pour personnaliser votre le sélecteur de langues. Il est possible de l'afficher en tant que liste déroulante ou les un à côté des autres. Il est possible d'utiliser ou non des drapeaux. D'afficher ou non le nom de la langue, ou encore de n'utiliser que 2 lettres pour les identifier.

### Personnaliser les Drapeaux

Vous pouvez choisir entre 4 designs de drapeaux. Vous disposez également d'options pour personnaliser les drapeaux des langues en fonction des pays. Par exemple, vous pouvez symboliser la version anglaise de vos site par un drapeau anglais, américain, australien, jamaïquain, etc.

[](https://wprock.fr/wp-content/uploads/2020/02/weglot-personnaliser-drapeaux-pour-les-langues.png)

## Weglot : Exclusion de Blocs et d'URL

Toujours dans les options Weglot, nous avons les exclusions de blocs et les exclusions de d'URL. L'exclusion d'URL peut par exemple être appliquée à la page de vos mentions légales. Et l'exclusion des blocs peut être appliqué sur les noms et pseudonymes affiché sur votre site.

Vous pouvez aussi décider de ne rendre qu'une petite partie de votre site multilingue, comme votre page d'accueil ou votre page a propos. Pour ce faire, vous pouvez, avec une regex, exclure toutes les pages du site à l'exception de celles que vous souhaitez voir traduite.

[](https://wprock.fr/wp-content/uploads/2020/02/weglot-exclusion-block-et-url.png)

## Weglot : Configuration et Options Avancés

[](https://wprock.fr/wp-content/uploads/2019/12/weglot-options-avancees.png)

### Rediriger les Visiteurs Selon la Langue de Leur Navigateur

Si vous activé l'auto redirection, les utilisateurs arrivants sur votre page d'accueil seront redirigé sur la page traduite selon la langue définit dans leurs navigateurs web.

### Traduire les Emails à la Volée

En activant cette option, les emails seront traduit avant d'être envoyé a vos utilisateurs. Cette option est très utile si vous proposés une boutique en ligne.

### Traduire la Version AMP de Votre Site

Si vous proposé une version AMP de votre site, activez cette option si vous souhaitez la rendre multilingue et traduite.

### Rendre la Recherche Utilisable Dans Toutes les Langues

Cette option va permettre de lancer des recherches sur votre site depuis n'importe quelle langue.

Pour permettre cela, chaque recherches effectuées par vos utilisateurs sur les versions traduite de votre site est traduite à la volée par Weglot dans la langue originale du site avant d'être effectuée. Ainsi, les résultats de recherches affichés sont les mêmes que si la recherches avait était faites dans la version originale, mais affiché traduite pour vos utilisateurs.

### Rendre des Langues Privées

Si vous souhaitez pouvoir tester votre site multilingue sans l'afficher pour vos utilisateurs, vous pouvez passer les langues en mode privée.

## Weglot : Gérer Vos Traductions Dans le Dashboard

Le Dashboard est l'endroit où nous allons pouvoir gérer et modifier toutes nos traductions, consulté nos statistiques de visites sur les page traduites ainsi que les paramètres .

[](https://wprock.fr/wp-content/uploads/2019/12/weglot-dashboard-scaled.png)

### Dashboard Weglot : Translations

La partie "translation" est l'endroit ou nous allons pouvoir retrouver toutes nos paires de traductions, pour toutes nos paires de langues configurés.

Un moteur de recherche nous permet de retrouver des traductions en particulier. Il est aussi possible de les trier par URL, par type (texte, Informations Meta pour le SEO, ou médias), ou encore par qualité (Automatique, manuelle ou professionnelle).

[](https://wprock.fr/wp-content/uploads/2019/12/weglot-dashboard-translation-choix-langue-scaled.png)

[](https://wprock.fr/wp-content/uploads/2019/12/weglot-dashboard-translation-list-scaled.png)

### Dashboard Weglot : Visual Editor

Weglot propose également un éditeur visuel pour gérer les traductions. Ce dernier nous permet de visualiser notre site en ajoutant des marqueurs autours de tous les éléments traduisibles. En cliquant dessus, on peut alors voire toutes les traductions de l'élément et les éditer.

[](https://wprock.fr/wp-content/uploads/2019/12/weglot-dashboard-visual-editor-1-scaled.png)

[](https://wprock.fr/wp-content/uploads/2019/12/weglot-dashboard-visual-editor-2-scaled.png)

### Dashboard Weglot : Translation Tools

La partie "Translation tools" vas nous permettre de chercher et remplacer des termes au sein des traductions, et va nous permettre de paramétrer un glossaire pour nos traductions.

[](https://wprock.fr/wp-content/uploads/2019/12/weglot-dashboard-translation-tools-scaled.png)

### Translation Tools : Le Glossaire

La partie glossaire va nous permettre d'appliquer des règles à appliquer à nos traductions. Par exemple, je peux imposer de toujours traduire le mot "extension" par "plugin", où encore imposer de ne jamais traduire "Orthotypo", le nom de l'une de mes extensions.

### Translation Tools : Cherchez et Remplacer

Enfin, l'outil "Search and Replace" vous permet d'effectuer des remplacements dans vos traductions déjà existantes.

## Weglot : Le SEO Multilingue

Pour permettre aux moteurs de recherches de trouver les page traduites, Weglot va ajouter des données dans les header des sites. Ces données sont conformes avec [les meilleures pratique SEO conseillés par Google](https://support.google.com/webmasters/answer/189077). Dans ce cas, il s'agit de la méthode des balises HTML.

Voici à quoi ces données ressemblent. C'est un code ajouté sur les pages de votre site entre les balise :

```markup
<head>
<!-- ... -->
<link rel="alternate" href="https://wprock.fr/blog/" hreflang="fr"/>
<link rel="alternate" href="https://wprock.fr/en/blog/" hreflang="en"/>
<link rel="alternate" href="https://wprock.fr/es/blog/" hreflang="es"/>
<link rel="alternate" href="https://wprock.fr/pt/blog/" hreflang="pt"/>
<link rel="alternate" href="https://wprock.fr/ru/blog/" hreflang="ru"/>
<link rel="alternate" href="https://wprock.fr/de/blog/" hreflang="de"/>
<!-- ... -->
</head>
```

## Weglot : Les Ressources Pour les Développeurs

Weglot a également été pensé pour les développeurs ! Voici les ressources mises à votre disposition :

* Les fonctions "clés en main" : [https://developers.weglot.com/wordpress/helpers-functions](https://developers.weglot.com/wordpress/helpers-functions)
* Toutes les méthodes pour gérer les textes qui resteraient non traduits : [https://developers.weglot.com/wordpress/filters/translations-filters](https://developers.weglot.com/wordpress/filters/translations-filters) (Il est à noter que vous pouvez également contacter le suport pour obtenir de l'aide)
* L'extension Weglot propose énormément de Hook qui vous permet de modifier son fonctionnement : [https://developers.weglot.com/wordpress/filters/other-filters](https://developers.weglot.com/wordpress/filters/other-filters)
* Enfin, vous disposez de différents use cases expliqués ici : [https://developers.weglot.com/wordpress/use-cases](https://developers.weglot.com/wordpress/use-cases)