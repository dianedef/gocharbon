---
section: apps
metadataEnrichedAt: null
title: Comment Marche Un Site Web
author: Diane
tags:
- Outils
description: 'Découvre Comment Marche Un Site Web : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

Ahttps://www.youtube.com/watch?v=C4nWUvFBMX0&list=PL5BcU-_5Oa_rqxq-O7dRyM0k8ehfA0go0

[https://www.youtube.com/watch?v=C4nWUvFBMX0&list=PL5BcU-_5Oa_rqxq-O7dRyM0k8ehfA0go0](https://www.youtube.com/watch?v=C4nWUvFBMX0&list=PL5BcU-_5Oa_rqxq-O7dRyM0k8ehfA0go0)

## Créez votre premier site web - Connecter le réseau
## Découvrez les Dessous des Sites Web

Avant de passer à la création à proprement parler de votre site web, prenons quelques minutes ensemble pour voir ce qui vous attend…

Allez sur n’importe quel site, par exemple c
Faites un clic droit sur la page et sélectionnez “Voir le code source de la page” (“_View page source_”, en anglais).

Une nouvelle page s’affiche, qui ressemble à ça :

Vous l’avez deviné, il s’agit du code de votre page web, c’est-à-dire **la manière dont elle a été codée pour apparaître dans votre navigateur**.

Remarquez que ce code source commence par :!DOCTYPE html>html>

Le **HTML**, c’est en effet le langage que vous allez utiliser pour coder votre première page web dans quelques instants. Si vous descendez un peu plus sur cette page, vous tomberez sur des blocs de texte, comme ça :

Et ce texte, vous le retrouvez bien sûr sur le site comme ceci, interprété par votre navigateur :

En comparant ces deux images, vous remarquerez peut-être que **les bouts de texte du code source apparaissent différemment sur la page web** : certains comme des titres, d’autres comme du texte “normal”, d’autres encore dans des couleurs différentes.

Vous souhaitez passer à l’action et tester tout ça ? Essayez tout de suite de créer et d’afficher une première page web dans votre navigateur !

## Créez Votre Première Page Web

Si vous êtes sous Linux, ouvrez un éditeur de texte. Sous Windows, vous pouvez ouvrir le bloc-note, et sous Mac TextEdit. Tapez n’importe quoi dedans. Par exemple :

Puis enregistrez ce fichier en lui donnant un nom (sans espaces ni caractères spéciaux) et une extension. Ici, l’extension sera .html comme ceci :

Ouvrez ensuite le fichier avec un navigateur. Vous devriez voir ceci :

Comme vous avez précisé par l'extension que ce fichier était écrit en langage HTML, votre navigateur peut l’ouvrir : vous avez créé votre première page web !

Bon, c’est plutôt basique, me direz-vous, alors passons aux choses sérieuses et ajoutons un peu de code :)

Vous avez vu, dans le code source de la page web de Class’Code, que celui-ci commençait par html>. Eh bien on appelle cela une **“balise html”**, et c’est ce qui signale, en plus de son extension, que c’est un document html. Mais cette balise ne fait “qu’ouvrir” le document, c’est pourquoi on l’appelle **une balise ouvrante**. Si vous vous rendez tout en bas du code source, vous constaterez que celui-ci se termine par : /html>. C’est ce qu’on appelle **une balise fermante**.

Autrement dit, l’intégralité de votre code est compris entre les balises html> et /html>. Tout ce qu’il y aura entre ces deux balises sera du code html.

Bien entendu, il existe d’autres balises : nous allons essayer la balise **h2>,** que vous pouvez voir sur la première ligne de cette image :

Je vous propose donc de reprendre votre fichier, et d’encadrer la totalité de son contenu entre les balises html> et /html>. Puis encadrez une phrase avec la balise ouvrante h2> et la balise fermante /h2>, comme ceci :

Enregistrez à nouveau votre fichier et lancez-le dans votre navigateur (ou rafraîchissez la page si vous ne l’aviez pas fermée).

Alors, vous comprenez à quoi sert la balise h2 ? ;)

N’hésitez pas à tester h1, h3, h4, etc. Évidemment, **des balises html, il en existe beaucoup** : elles permettent d’ajouter des liens, des images, de structurer la page, de la mettre en forme, etc. Nous verrons tout cela dans le prochain chapitre. Mais pour terminer celui-ci, je vous laisse en découvrir une autre : la balise em>.

* Les pages web sont codées en **langage html**.
* Pour accéder au **code source** d’une page web, il suffit de faire un clic droit sur cette page et de sélectionner “Voir le code source”.
* Le langage html est constitué de **balises ouvrantes** et **fermantes** qui déterminent la structure et la mise en forme d’une page web.
Ça y est, vous venez de créer votre première page web ! Tout ça est encore très rudimentaire, et en plus, vous seul avez accès à votre page, puisqu’elle n’existe pour le moment que sur votre ordinateur.

À ce stade, vous connaissez les balises **h1**, **h2**, **h3**, etc., ainsi que la balise **em**. Je vous laisse donc jouer avec les balises **p** et **strong** déjà présentes dans le projet de base : amusez-vous à créer une petite page web avec Thimble !:)

## Créez Un “site Dont Vous Êtes le héros”

Maintenant que vous avez vu le fonctionnement de Thimble, je vous propose de vous lancer dans la création d’un petit site-jeu : le site web que vous allez créer est un site “dont vous êtes le héros”, à l’instar des [livres dont vous êtes le héros](https://fr.wikipedia.org/wiki/Livre-jeu).

Pour faire ce site, vous aurez besoin de plusieurs éléments :

* créer des liens hypertextes pour naviguer de page en page
* ajouter des images

## Ajoutez des Liens Vers d’autres Pages

La balise html permettant d’ajouter un **lien hypertexte**, c’est la balise **a>**, comme “ancre”. C’est en fait une balise qui indique qu’à cet endroit, il y a une ancre dans la page à laquelle on va pouvoir se raccrocher, c’est-à-dire faire un lien vers celle-ci.

Mais cette balise ne s’utilise pas seule, comme les précédentes : elle aura **un attribut** (ou plusieurs dans l’absolu, mais nous n’en verrons qu’un seul dans ce cours). Cet attribut, c’est **href**, qui indique vers quel endroit on veut renvoyer lorsqu’on clique sur le lien.

Un bon exemple valant mieux qu’un long discours, voici en vidéo comment créer un lien :

Ça y est, vous avez de quoi faire un site dont vous êtes le héros, avec des liens qui vont dans tous les sens !

Pour un site plus agréable, ajoutez des images ! La balise à utiliser pour cela, c’est **img>**, comme “image”. Mais contrairement à ce que je vous ai montré jusqu’à présent, la balise img> **n’a pas besoin de balise fermante** /img>. Elle se ferme simplement en ajoutant “/” à la fin, comme ceci : img />

Pour ajouter une image, vous n’avez donc besoin que d’une seule balise ! Mais vous aurez, comme pour a>, besoin d’au moins un attribut pour que votre navigateur sache quelle image aller chercher…Cet attribut, c’est src=””, src comme “source”. Il s’utilise comme href pour la balise a>.

Vous devriez maintenant disposer de tous les outils pour créer un site amusant dont vous êtes le héros : à vous de coder !

* Un site web, c’est finalement **un réseau de pages connectées les unes aux autres** par des liens hypertextes.

* **La balise a>** comme “ancre” permet de créer des liens ; elle a besoin d’un attribut pour indiquer vers quelle page renvoyer lorsqu’on clique sur le lien et s’écrit de la manière suivante :

a href=”page2.html”>Lien vers la deuxième page/a>.

* **La balise img>** permet de mettre une image. Comme a>, elle a besoin d’au moins un attribut : src, pour indiquer quelle image doit être affichée. Contrairement aux autres balises vues jusqu’ici, elle s’écrit : img src=”mon-image.jpg” />, il n’y a donc pas de balise /img>.


## Comprenez le langage HTML
- Le fait d’avoir **un fichier HTML** pour écrire le contenu de la page, et **un fichier CSS** pour dire comment sera mis en page ce contenu permet de **distinguer le fond de la forme**.
- **HTML n’est pas un langage de programmation,** mais de description.

C’est une belle histoire, quand on sait finalement que Tim Berners-Lee a inventé le Web pour partager des documents avec ses collègues du monde entier ! ;)

### En résumé

- Le Web est **une des applications qui utilise Internet**, ce n’est pas Internet.
- **Tim Berners-Lee est le papa du Web.**
- Le Web est issu d’**un croisement d’idées** qui ont bien progressé depuis sa création.
- Pour que le Web reste **un lieu libre et ouvert**, nous devons nous l'approprier !
## Entrainez-vous en créant votre premier site web

### Caractéristiques de votre site web

Votre site devra comporter les éléments suivants :

- **Une partie < head >** avec le nom de l’auteur et le titre de la page.
- Une page d’accueil avec **au moins une image**.
- **Deux autres pages** minimum, **reliées entre elles par des liens** (page précédente – page suivante – retour accueil).
- Des liens vers **des ressources externes** : une vidéo ou un site externe par exemple.
- Ces ressources externes doivent être **libres d’utilisation**

## Pistez les pages web grâce à leurs adresses

### Aidez Bobby à améliorer sa recette !

[Vous vous souvenez que nous avons laissé Bobby fort intimidé auprès d’Ada Lovelace.](https://openclassrooms.com/courses/connecter-le-reseau/exercises/1552) À présent, il souhaite faire encore mieux. Cliquez sur le lien ci-dessous et aidez-le, ça ne devrait pas vous prendre plus de quelques minutes...

[https://cyclic-wood.glitch.me/](https://cyclic-wood.glitch.me/)

Si vous avez terminé ce petit jeu, vous devriez être un peu mieux familiarisé avec la lecture d’adresses web. Mais continuons à jouer encore un peu, si vous le voulez bien. :)

### Rendez-vous sur mon site !

C’est entré dans le langage courant. On considère les “adresses” Internet comme désignant des lieux (virtuels) et on “nomme” les objets numériques comme on nommerait un objet du quotidien. L’idée est juste, et ce qu’on appelle "**URL**" ou "**URN**" ou "**URI**" (on vous dit tout dans le chapitre suivant) permet d'identifier de manière unique ces endroits ou objets. Mieux encore, cela permet d’y accéder et de les utiliser.

_Commençons par jouer aux devinettes : avant de cliquer sur ces différents liens, pouvez-vous deviner ce que vous allez y trouver ?_

### Première devinette

[https://zimbra.inria.fr/home/alan.turing@inria.fr/Calendar.html?view=week](https://zimbra.inria.fr/home/alan.turing@inria.fr/Calendar.html?view=week) (le lien n’est pas cliquable (ouf !) car c’est une information interne)

Si vous savez que Inria est un institut de recherche, que zimbra est un outil collaboratif et que Alan Turing y travaille (ça, c’est pas vrai :) ), parions que vous ne serez pas surpris de trouver le calendrier (ou agenda) de la personne avec une vue hebdomadaire.

C’est bien entendu une page Wikipédia, probablement la définition d’une URL (justement !), mais nous avons ajouté un paramètre "?printable=yes" pour que la page soit prête à l'impression. Ainsi, on peut non seulement accéder à une ressource mais aussi adapter la réponse selon ses besoins.

Là, pour deviner, il faut prendre votre smartphone et utiliser l’application qui lit les “QR-code” (le QR-code, comme les code-barres des supermarchés, code une information).

Ici, c’est l’adresse d’un site (très important !) qui est encodée. Au supermarché, chaque produit possède un identificateur unique qui le nomme : c'est le code-barre (et vous verrez dans le chapitre suivant que c’est un URN).

Aux arrêts de bus, l’URL correspond à une information en temps réel sur votre transport. Sur une publicité elle peut amener directement sur le site d’achat, par exemple.

Et la liste est sans fin :
- https://www.infotbm.com/journey/choose?departure=StopArea|441|Gare%20Saint-Jean|Bordeaux|||371122|1984790|863!0!2%3B&arrival=Site|668|Place%20de%20la%20Victoire|Bordeaux||lieu%20touristique|369888|1985418|1326!44!1%3B Cette URL vous donne vraiment les horaires des transports sur Bordeaux, entre deux destinations.
- https://pixees.fr/wp-content/uploads/2015/11/%C3%80-propos-des-nv-programmes-scolaires.pdf#page=08  Celle-ci permet d’ouvrir (si le lecteur PDF le permet) ce document qui analyse l’apprentissage du code dans les nouveaux programmes scolaires, directement à la page 8.
- dev:chauffage#Température-désirée=20 pourrait permettre, dans une maison automatisée … on vous laisse deviner quoi. :)
- mailto:classcode-accueil@inria.fr?subject=Hi!&body=Bonjour Class´Code j’en suis au module #4 ! permet (si votre navigateur est configuré comme il faut) d’envoyer un mail dont le sujet et le corps du message sont prédéfinis.
Omniprésents donc, il est important de comprendre et d'apprendre à construire ces URLs pour prendre la main sur Internet.

Dans le chapitre suivant, nous allons voir en détail ce qu'est une URL... Accrochez vos ceintures !

### En résumé

- Les adresses Internet (URL) permettent de **localiser une ressource et d’y accéder**.
- En **ajoutant des paramètres à cette adresse**, on peut obtenir une réponse à une question précise.
- Les URLs ne désignent pas que des pages webs mais **elles relient aussi à d’autres objets numériques**.


## Mais qu’est-ce qu’une URL

Depuis le chapitre précédent, vous vous doutiez bien que quelque chose se cache sous la notion d’URL, et qu’on peut en faire presque ce qu’on veut… **C’est donc l’heure des précisions !**

### Adressez-vous à une page web

Avant d’entrer dans le détail de la construction d’une URL, nous allons commencer par clarifier les termes **d’URL**, **d’URI** et **d’URN** qui prêtent souvent à confusion.

Une **URI** (_Uniform Resource Identifier_) est un Identificateur de Ressource Universel, c’est-à-dire un objet informatique spécifique qui permet d’identifier une ressource sur la toile.

Cet identificateur commence par un mot clé appelé "**schéma URI**" (ou _URI scheme_ en anglais) suivi de deux points.

Il existe ainsi plus de [250 schémas](https://www.iana.org/assignments/uri-schemes). On peut citer : "skype:", "http:", "chrome:", "bitcoin:, "mailto:", etc.

L’interprétation du texte qui suit cet URI dépend du mot clé utilisé. Par exemple :

- Le lien <a href="mailto:test@exemple.fr">TestMail</a>précise l’adresse courriel associée à TestMail
- Le lien <a href="skype:monpseudo?call">PseudoSkype</a>indique le pseudo à appeler par Skype

La notion d'URI concerne donc à la fois :

- la localisation de ressources (on parle de "**URL**", "L" pour "**location**"), c’est-à-dire l’endroit, sur le réseau, où est située la ressource pointée par l’URL ;
- et le nom de la ressource (on parle de "**URN**", "N" pour "**name**").

Le « schéma » associé à une URL définit donc le protocole à utiliser pour accéder à la ressource. Il peut être saisi directement dans la barre de navigation ou précisé à l’intérieur d’une page HTML, par la balise `<a href=” “></a>`.

Par exemple, cela peut être « http: » ou « https: » pour accéder à une page Web, ou « file: » pour accéder à un fichier de l’ordinateur, ou « mailto: » pour créer un courriel. On peut aussi définir des protocoles _ad hoc_, par exemple « dev: » pour accéder à un dispositif (_device_) relié à l’ordinateur.


Le schéma "file:" file:///Users/isabellechrisment/Workspace/ClassCode/click-me.png


Le schéma "mailto:" mailto:isabelle.chrisment@loria.fr

### Naviguez avec "http" et "https"

Nous allons maintenant voir deux exemples d'URLs spécifiques qui utilisent le schéma d’URI « http: » et « https: ».


Dans cet exemple, "http" est le protocole utilisé pour accéder à la ressource "article294" disponible sur le site www.adjectif.net dans le répertoire _spip_. Le point d’interrogation permet d’envoyer des paramètres à un programme appelé _spip.php_ auquel on demande de retourner la ressource _article294_.

Essayez de modifier le dernier chiffre de cette URL, vous allez voir ! www.adjectif.net/spip/spip.php?article294


Dans cet exemple, _https_ est le protocole utilisé pour accéder à la ressource _rfc7230_ disponible sur le site _[tools.ietf.org](http://tools.ietf.org)_. L’information après le caractère "#" indique une partie de la ressource (ici, la page 30).

### Les cinq parties d’une URL

Pour aller encore plus loin, sachez qu'une URL comporte cinq éléments :

[scheme:][//authority][path][?query][#fragment]
- authority	: Désigne l’hôte de la ressource (son adresse IP ou son nom, parfois le port d’entrée sur la machine, voire même le login de la connexion)
- path : Désigne le chemin de la ressource au sein de l’hôte
- query : Permet d'ajouter des paramètres (sous la forme "?nom=valeur")
- fragment : Désigne une partie de la ressource (par exemple un numéro de page spécifique)

### Au fait quelle est la différence entre "http" et "https" ?

Le protocole "http" (_hyper text transfer protocol_) permet d’échanger des pages html et des ressources associées (images, vidéos…) entre un client (le navigateur) et un serveur (le serveur web) où est localisée l’information.

**Super efficace ?** Pas vraiment... Toutes les informations passent en clair sur le réseau et n’importe qui peut analyser les données qui transitent sur celui-ci. Pas terrible pour le respect de notre vie privée.

Au début principalement réservé pour les transactions bancaires, l’usage du protocole "https" s’est considérablement développé au cours des cinq dernières années pour assurer la confidentialité des échanges réalisés. Le protocole https permet en effet d’authentifier le site web via un certificat numérique et aussi de chiffrer les échanges entre le navigateur et le serveur web.

Dans le navigateur, un petit cadenas apparaît pour indiquer que la communication est sécurisée :

En cliquant sur le cadenas, vous pouvez afficher le certificat numérique du serveur et constater qu'il est bien délivré par une autorité de confiance et qu’il est toujours valide :

Le protocole HTTPS est donc une extension du protocole HTTP qui permet au visiteur de vérifier l'identité du site, grâce à un certificat d'authentification émis par une autorité réputée fiable qui permet de chiffrer la communication, pour éviter qu’elle soit vue par un tiers.

### Partez à la pêche (le "Phishing")

Voici une activité simple permettant de montrer comment marche le harponnage (ou _fishing_).

1. Allez sur [](https://pixees.fr/)[https://pixees.fr](https://pixees.fr) (si vous n'êtes pas inscrit, c'est une bonne occasion !) et déconnectez-vous de votre compte.
2. Retournez sur la page de connexion [https://pixees.fr/wq-login.php](https://pixees.fr/wq-login.php) et entrez votre login et mot de passe (en faisant bien attention que personne ne vous regarde).

D'accord, c'est fait, et maintenant ?

En pratique, les pirates essaient de vous proposer un lien très proche du lien réel, par exemple [](https://twiiter.com/)[https://twiiter.com](https://twiiter.com) au lieu de [](https://twitter.com/)[https://twitter.com](https://twitter.com) ; ils y recopient tous les éléments graphiques de la page, pour vous inciter à entrer vos éléments d'identification et souvent renvoient sur la vraie page avec un message du type "il y a eu une petite erreur, veuillez recommencer". Nous pouvons donc ne même pas détecter ce piratage et nous en rendre compte plus tard... trop tard !

Pour ne pas se faire avoir, il faut savoir lire une URL !

Attention, car sur les tablettes ou les smartphones, très souvent, le lien du site que nous consultons ne s'affiche plus, nous ne pouvons pas savoir où nous sommes, ce qui est dangereux.

En revanche, si nous voyons l'URL et que nous savons la lire, quelles que soient les astuces déployées par les pirates, toutes ces tentatives de harponnage ne fonctionneront pas !

- Les adresses Internet sont **des identificateurs universels de ressources numériques**.
- On y encode **le protocole** (qui définit comment va se faire le mécanisme de question/réponse), **la localisation** et **les paramètres** souhaités de la ressource.
- Tous les objets numériques accessibles ont **un identificateur unique**.


## Faites transporter un message par vos lutins

Vous avez vu que saisir une URL permet d’accéder à une ressource sur le Web. Avant de vous expliquer plus en détail comment cette ressource arrive, depuis son point de départ (sa source) jusqu’à vous (sa destination), je vous propose une petite activité sur Scratch qui va permettre de **simuler le trajet de la ressource**.

### Mettez votre réseau en place

_Votre objectif, ici, c’est de satisfaire votre cliente : elle fait une requête auprès de vous, et en tant qu’admirable serveur, vous devez accéder à sa demande._

Dans [notre exemple précédent](https://thimbleprojects.org/magiclily/196846/), souvenez-vous que **Bobby** avait enfin pu satisfaire **Ada Lovelace** après s’être perdu dans son manoir. Mais Ada est tellement satisfaite qu’elle demande qu’on lui livre à nouveau des petits pains d’épices au miel.

Problème : le sens de l’orientation de Bobby ne s’est pas amélioré entre temps. Heureusement pour lui, **son ami Bretzel** dispose de toute une armée de petits bretzels prêts à aider. **Ces petits bretzels**, que nous nommerons **A, B, C, D, E, F et G** , sont placés à des endroits stratégiques dans le manoir :
La cuisine étant le lieu de stockage des gourmandises, c’est de là que tout partira. Pour éviter à Bobby d’avoir à se déplacer - et donc lui éviter de se perdre - les routeurs-bretzels ont été installés. Ils vont permettre d’acheminer les paquets de pâtisseries, chacun des bretzels passant le paquet à l’un de ses voisins.

**Votre premier défi** : mettre votre propre réseau en place.

Pour ce faire, il vous faut un **lutin-client** (Ada Lovelace, matérialisée par le bretzel D, dans notre exemple) et un **lutin-serveur** (Bobby dans notre exemple). Il vous faut également un **lutin-paquet** (ici les pâtisseries), qui est la chose demandée par le client au serveur. Mais il vous faut également placer un réseau de petits **lutins-routeurs** (les bretzels) qui permettront au paquet d’arriver jusqu’au client.

Placez ces différents éléments, ou reprenez ceux de mon projet ici : [https://scratch.mit.edu/projects/145833489](https://scratch.mit.edu/projects/145833489)

Puis passez à la suite pour commencer à coder et déterminer à quels voisins chacun des routeurs peut envoyer le paquet.

### Déterminez une liste de voisins

Dans notre exemple, le bretzel A est le premier qui reçoit le paquet. Pour le faire parvenir à Ada Lovelace, il peut soit l’envoyer au bretzel B, soit au bretzel E. S’il l’envoie à B, alors B devra l’envoyer à C, qui lui-même l’enverra à D : le paquet est alors arrivé à destination. Mais si A l’envoie à E, E l’enverra alors à F, qui lui-même l’enverra à G, qui l’enverra à C, qui l’enverra à D : le paquet arrive à destination.

Évidemment, de notre point de vue, si A envoyait le paquet à B directement, il arriverait à destination plus rapidement. Quoique… N’entrons pas dans les détails, mais considérons simplement, à ce stade, que A (comme Bobby dans la partie précédente) ne connaît pas le plus court chemin : il a ses deux voisins B et E, et donne aléatoirement le paquet à l’un ou l’autre. Nous allons donc devoir dire à A qui sont ses voisins, en créant une liste spécifique pour A.

Pour cela, dans la catégorie Données, je clique sur “Créer une liste” :

Une fenêtre apparaît, je sélectionne “Pour ce lutin uniquement” :
Puis je nomme ma liste “voisins” :
Et je valide en cliquant sur “Ok”. Ma liste apparaît alors, mais uniquement pour le lutin A :

**Votre deuxième défi** : déterminer, dans des listes propres à chacun de vos lutins-routeurs, chacun de leurs voisins.

Passez ensuite au routage à proprement parler…

Bien… votre réseau est en place, mais il reste l’essentiel à faire : acheminer le paquet de la source vers la destination.

Dans notre exemple, ça donne ça :
Quand on clique sur Bobby, il envoie le paquet à A. A peut alors soit l’acheminer via B, soit via E.

**Votre troisième défi** : faire en sorte que votre paquet parte bien de la source pour arriver à la destination.

La première étape, c’est d’indiquer vers quel voisin le paquet doit aller. Pour cela, j’ai créé une variable pour tous les lutins, que j’ai appelée “destination”. Cette variable va me permettre de savoir, à tous moments, vers quel routeur doit aller le paquet. La destination finale est bien sûr le client (représenté ici par le bretzel D).

Dans l’exemple, j’ai choisi de déclencher l’action d’envoi en cliquant sur Bobby. La première destination étant nécessairement le bretzel A, j’initialise ma variable, et j’envoie un signal à tous les lutins pour indiquer que Bobby a été cliqué (ou autrement dit, que la requête a été faite).

Lorsque le lutin-paquet reçoit ce signal, il va créer une copie de lui-même, ou un clone, que vous retrouverez dans la catégorie Contrôle :

C’est cette copie qui se déplacera. Où ira-t-elle ? Vers les coordonnées du lutin-routeur inscrit dans la variable “destination”. Pour indiquer ces coordonnées variables, vous trouverez les blocs adéquats dans la catégorie Capteurs :


À cette étape, votre variable “destination” est initialisée au premier routeur, ici A. La copie du lutin-paquet se déplace donc jusqu’au routeur A. Bien sûr, nous ne pouvons pas nous arrêter là : il faut changer la destination maintenant que le premier routeur a été atteint.

Le lutin A doit donc déjà détecter qu’il a bien reçu le paquet. Et si c’est le cas, il va rediriger la destination du paquet vers l’un de ses voisins (voisins que vous avez déterminés à l’étape précédente), comme ceci :


Si vous testez votre programme à ce stade, vous verrez que rien ne change : votre paquet va vers votre premier routeur, puis ss : vers A. Il va donc falloir lui dire de répéter cette action :


**Je vous laisse donc coder tous vos routeurs (ça devrait prendre 3 minutes à peine !) et re-tester votre programme.**

Si vous cliquez plusieurs fois sur votre lutin-serveur (ici Bobby), vous vous apercevrez peut-être d’un bug curieux : tous les clones arrivés à destination se déplacent à nouveau. Et c’est normal, puisque c’est ce que vous avez codé…

Pour parer à cela, vous pouvez supprimer vos clones une fois qu’ils sont arrivés à destination, comme ceci :


Et voilà, c’est tout ! Si vous souhaitez retrouver mon projet, cliquez sur le lien :

- **Les routeurs** permettent d’acheminer un paquet vers la destination.
- **Plusieurs chemins sont possibles** pour aller vers une même destination.
- Dans **Scratch**, **les listes permettent de stocker des variables**.
- Dans Scratch, **un clone est une copie du lutin** qui peut avoir son existence propre et être utilisée temporairement.


## Découvrez comment l’information circule sur le réseau

Pour solliciter du contenu sur internet (une page web, un service de consultation de données, etc.) on peut saisir une URL dans la barre de notre navigateur et ainsi obtenir la ressource désirée. $

Mais comment ce contenu arrive-t-il jusqu’à nous ?

Ce voyage, qui prend parfois seulement quelques fractions de secondes, peut commencer à l’autre bout du monde. Et pour cela, comme dans tous les voyages, il faut bien partir de quelque part…

### Mais où sont localisées les ressources ?

La bonne nouvelle, c’est que notre contenu se trouve à une adresse, et qu’il nous suffit de la contacter. Reste à savoir où trouver cette adresse. Vous vous souvenez : une URL permet de localiser une ressource dans le réseau. L’URL c’est un peu le matricule de la ressource, ça permet de lui donner un nom unique et reconnaissable par toutes les machines.

D’accord, notre ressource possède un identifiant.. Mais où se trouve-t-elle ?

Quand vous voulez envoyer une carte postale à un ami, indiquer son nom sur la carte ne suffit pas. Il vous faut aussi son adresse. Et comment faites-vous pour trouver l’adresse ? Vous consultez un annuaire qui vous donne la correspondance entre le nom de la personne et son adresse. Eh bien c’est un peu la même chose pour trouver l’adresse de nos ressources : on a besoin de faire correspondre le nom (l’URL) à une adresse (un emplacement physique sur le réseau). Et pour cela… **on a besoin d’un annuaire !**

Je vois ! Et quel est cet annuaire pour l’Internet ?

Le service permettant la résolution d’un nom (URL) vers une adresse s’appelle le **DNS** (_Domain Name System_) ou “système de noms de domaines”. Il peut être vu comme une base de données (même si, en réalité, c’est un peu plus compliqué).

Vous pouvez aller plus loin avec [ce cours sur OpenClassrooms](https://openclassrooms.com/courses/apprenez-le-fonctionnement-des-reseaux-tcp-ip/le-service-dns). Regardez également [cette vidéo](https://www.youtube.com/watch?v=dcIrB8qRCbA) faite par l’AFNIC, qui gère notamment le domaine ".fr".

Donc, grâce au DNS, vous pouvez trouver l’adresse qui correspond à une URL. On peut même le consulter juste pour le plaisir…

Prenons un exemple. Quelle est l’adresse du site [www.inria.fr](https://www.inria.fr/) ? Nous allons faire cette recherche ensemble.

Si vous utilisez **Linux** ou MAC OS, il vous suffit d’ouvrir un terminal de commande (en cherchant l'application "Terminal" par exemple) et d’y saisir la commande “_host [www.inria.fr](http://www.inria.fr)_”. Sur **Windows**, c’est la commande “_nslookup [www.inria.fr](http://www.inria.fr)_” qui, dans un terminal, vous permettra d’afficher l’adresse du site (pour ouvrir un terminal dans Windows, allez dans le menu Démarrer, puis Exécuter, tapez cmd puis cliquez sur Ok).

Si vous utilisez **une tablette**, ou que vous préférez simplement afficher cela dans un navigateur, il existe des services en ligne qui permettent d’afficher l’adresse d’un site. Une recherche du type “localiser url ip” dans votre moteur préféré vous permettra de trouver un service de localisation d’URL adapté.

Dans tous les cas, nous découvrons que le site est localisé sur le serveur [ezp3.inria.fr](http://ezp3.inria.fr) avec l’adresse 128.93.162.84

Cette adresse est connue sous le terme **adresse IP**, “IP” signifiant _Internet Protocol_. Cette adresse est un entier sur 32 bits (ou 4 octets).

Si vous avez suivi les précédents modules de Class’Code, alors vous savez que les ordinateurs représentent tout avec des “0” et des “1”… c’est-à-dire en binaire. Et si vous avez suivi le [module 2](https://openclassrooms.com/courses/manipuler-l-information), vous savez même comment ils comptent en binaire.

Revenons à nos adresses. Chaque octet est exprimé en décimal séparé par un point. Ainsi l’adresse 10.9.8.7 s’écrirait en binaire “00001010 00001001 00001000 0000 0111” soit la valeur 168 364 039.

C’est plutôt difficile à retenir n’est-ce pas ? Et même si vous releviez le challenge de retenir cette adresse, ça ne suffirait pas… eh oui, car un site peut avoir plusieurs adresses !

Le site d’OpenClassrooms possède deux adresses. Mais comment un site peut-il être localisé à plusieurs endroits en même temps ? En fait, cela permet de répartir la charge sur deux machines différentes. Ainsi, les utilisateurs seront redirigés sur l’une ou l’autre de ces deux machines, pour éviter les engorgements. Pour nous qui voulons consulter le site, cette gestion est complètement transparente, tout ce que nous avons à faire, c’est nous souvenir du nom du site (ou de l’enregistrer dans nos favoris).

Bon, maintenant que nous avons l’adresse, comment se transmet l’information ?

Une requête va être envoyée vers le site pour lui demander de nous retourner le contenu de la page web. Avant d’être expédiée, la requête est mise dans une “enveloppe” appelée “paquet” sur laquelle est indiquée l’adresse du destinataire (obtenue grâce au DNS) et celle de l’émetteur (c’est-à-dire la vôtre).

Si vous voulez connaître votre adresse IP, consultez [http://www.mon-ip.com/](http://www.mon-ip.com/).

Le paquet pour arriver à la destination va devoir traverser plusieurs réseaux. **En effet qu’est-ce que l’Internet ? C’est le réseau des réseaux.**

Pour passer d’un réseau à un autre, des équipements intermédiaires appelés “**routeurs**” sont utilisés. Le rôle d’un routeur est de décider quel chemin doit prendre le paquet qu’il reçoit et donc de choisir vers quel réseau et quel autre routeur envoyer le paquet jusqu’à ce que la destination soit atteinte.

Pour prendre sa décision, le routeur utilise une **table de routage** qui sert d’aiguillage : “pour telle destination, envoyer le paquet à mon routeur voisin de droite, pour telle autre destination envoyer le paquet à mon routeur voisin de gauche”, et ainsi de suite.

Peut-on avoir une idée de la route qui va être suivie ? Oui ! En effet, il existe des logiciels qui permettent d’afficher l’itinéraire emprunté par le paquet comme **Traceroute** (Linux ou Mac-Os) et **Tracert** (Windows).

Regardons avec le logiciel Traceroute le chemin entre ma machine et le site [www.inria.fr](http://www.inria.fr) :

On observe que les données traversent au moins 14 routeurs depuis ma livebox jusqu’au réseau d’Inria où est hébergé le site [www.inria.fr](https://www.inria.fr/).

Je vous le concède, cet affichage manque d’attraits ;) . Alors pour le site [www.openclassrooms.com](https://www.openclassrooms.com/) je vous propose d’utiliser **OpenVisualTraceroute**. 

Sur Traceroute, on observe que nous avons traversé l’Atlantique pour arriver à San Francisco.

En fait, c’est un peu plus complexe que ça. Il y a, au dessus d'Internet, un réseau qui permet la diffusion de contenus de manière optimisée (on parle de **CDN** pour _Content Delivery Network_). Les données y sont hébergées et répliquées, pour que la machine “la plus proche” réponde et améliore le temps de chargement des pages web. Voilà encore un mot technique expliqué :)

Nous avons une suggestion : faites essayer OpenVisualTraceroute aux jeunes à qui vous enseignez ces notions, cela va rendre les choses vraiment plus parlantes, donnera envie d'en savoir plus et sera aussi une excellente leçon de géographie. ;)

- Une machine connectée à l’Internet est identifiée par **une adresse IP**.
- Une adresse IP est un i**dentifiant numérique à 32 bits**.
- Le **DNS** permet d’établir la correspondance entre l’endroit où est localisée la ressource (URL) et une adresse numérique (l’IP).
- **Un routeur** permet d’**acheminer le paquet vers la destination** en utilisant **une table de routage.**
- Le logiciel **Traceroute** permet d’afficher le chemin suivi par les paquets entre une source et une destination.


## Animez un atelier : le routage élastique

Le "routage élastique" permet de comprendre la notion de routage et la façon dont les routeurs construisent leurs tables. Vous pouvez en trouver une version étendue sur [la page des activités débranchées](https://members.loria.fr/MDuflot/files/med/routage.html) de Marie Duflot-Kremer.

Rappel sur le **routage** :Pour passer d’un réseau à un autre, on utilise des **routeurs**. Le rôle d’un routeur est de décider quel chemin doit prendre le paquet qu’il reçoit et donc de choisir vers quel autre routeur envoyer le paquet jusqu’à ce que la destination soit atteinte.Pour prendre sa décision, le routeur utilise une **table de routage** qui sert d’aiguillage : “pour telle destination, envoyer le paquet à mon routeur voisin de droite, pour telle autre destination envoyer le paquet à mon routeur voisin de gauche”, et ainsi de suite.

On peut aussi simplement utiliser un marquage au sol pour représenter le réseau. Notre réseau doit ressembler à cela :

    
Ce réseau est tout petit

A, B, C et D chacun représente un routeur (une machine sur le réseau). Les connexions dans le réseau (qui est voisin de qui ?) sont représentées par les traits entre les participant·e·s.

- Dans un premier temps on va simplement voir comment fonctionnent les échanges en faisant circuler quelques messages.
- Dans un deuxième temps, le réseau va évoluer, et on va devoir s’adapter.
- Et, dans un troisième temps, on va voir que l’adaptation n’est pas toujours si facile que ça…

### Temps 1 : routons routons petits patapons !

Chaque participant·e joue le rôle d’un routeur et possède une table de routage. C’est cette table qui permet au routeur d’orienter un message en fonction de son destinataire.

On y voit, par exemple, que le routeur A peut rediriger des messages à destination de B, C ou D. Si le message est pour B, alors A va l’envoyer directement… à B. Si le message est pour C, c’est aussi facile, il l’envoie directement à C. Par contre, si le message est pour D, alors il doit le rediriger vers C, et ensuite… eh bien ensuite C saura bien se débrouiller ! Le routeur A n’a pas besoin d’en savoir plus.

Vous pouvez déjà faire distribuer quelques messages avec ce réseau et ces tables de routage et voir comment la communication se passe. Placer 2 ou 3 messages par routeur au départ avec des destinations plus ou moins éloignées et laissez les enfants acheminer tout ça. Normalement, on ne perd aucun message et tout se passe bien.

_Qu’a-t-on appris si on s’arrête là_ ? Que les messages sont acheminés sans problème alors que personne n’a une vue globale du réseau. Que certains routeurs sont plus sollicités que d’autres. Qu’il y a plusieurs façons de faire le routage et qu’elles ne sont pas équivalentes (par exemple, avec d’autres tables, au départ de D, un message pourrait passer par C puis B pour arriver jusqu’à A… et ça marche aussi, mais le chemin est plus long).

### Temps 2 : Attention, réseau mouvant !

Dans la vraie vie, la forme du réseau change : un câble peut être coupé, un routeur peut tomber en panne, on peut rajouter un nouveau routeur, de nouvelles connexions, etc. Que se passe-t-il dans ce cas-là ? Les tables de routage fonctionnent-elles toujours ? Evidemment non. Modifiez le réseau pour le schéma suivant :


Et maintenant, demandez aux participant·e·s de s’adapter. Eh oui… il faut refaire les tables de routage !

**Mise en œuvre** : les participant·e·s peuvent se concerter à l’avance pour définir l’algorithme à exécuter (par exemple “on n’a qu’à se montrer nos tables entre nous” ou bien “on peut recopier la table de l’autre dans un coin”, etc.) Ensuite, fin de la communication générale ! On applique l’algorithme ainsi établi pour voir si ça marche.

**Règles de communication** : quel que soit l’algorithme choisi, tout doit passer par des échanges 2 à 2, en respectant les règles suivantes.

- On ne peut communiquer qu’avec ses voisins directs (pas au-delà).
- Pas de personne extérieure pour aller voir tout ce qui se passe partout, on n’envoie pas d’explorateur/rapporteur.
- On a le droit de montrer sa table de routage, mais uniquement à ses voisins directs.

On peut laisser faire les participant·e·s jusqu’à ce qu’ils trouvent une solution, ou bien apporter la solution si c’est nécessaire.

**Une “solution”**. Les tables de routage seront mises à jour plusieurs fois, jusqu’à ce qu’elles se stabilisent. Pour cela, les routeurs s’échangent leurs tables régulièrement entre voisins directs. Montrer sa table à son voisin sera suffisant pour cette activité (et cela évitera la lenteur de la recopie et les erreurs qui vont avec). Ces échanges successifs entre les routeurs voisins font propager dans le réseau des petits bouts d’information, jusqu’à ce que tout le monde y trouve son compte. Pour cela, il y a une règle simple à respecter : à chaque modification de ma table, je l’envoie à mes voisins.

Ensuite, pour chaque routeur, il y a quatre questions à se poser en permanence, et une condition à vérifier pour savoir si sa table de routage est stabilisée. On peut noter ces quatre questions, visibles de tout le monde, pour que chacun·e puisse les appliquer sans se tromper. Elles sont, finalement, plutôt basiques.

1. _Que faire si j’ai perdu la connexion avec un de mes voisins ?_ Je le supprime de ma table ainsi que toutes les redirections qui passaient par lui.
2. _Que faire si j’ai un nouveau voisin, par exemple D ?_ Je note que le chemin vers D est direct : si le message est pour D, alors je l’envoie à D.
3. _Que faire si je passais par C pour aller à D, mais que C me dit ne plus savoir accéder à D ?_ Je supprime le chemin vers D qui passait par C.
4. _Que faire si mon voisin peut accéder à C, alors que moi je n’avais pas de chemin pour accéder à C ?_ J’ajoute dans ma table que pour atteindre F, je peux passer par le voisin en question.

_Et alors quand est-ce qu’on s'arrête ?_ Quand plus personne ne peut envoyer de message c’est fini ! Pour ne pas que ce soit le bazar, on peut faire envoyer les messages chaque routeur à son tour : A fait tous ses envois, puis B, etc. Et quand tout le monde y est passé, on recommence un tour et on demande à chaque routeur s'il a des envois à faire. Quand, lors d'un tour, personne ne veut plus rien envoyer… c'est qu'on a fini.

Ah mais c’est cool ! Et si on faisait un essai pour voir si ça marche ?

Dans notre cas, il suffira de 2 tours. Après la modification des connexions, A perd un voisin (C) et en gagne un (D) ; B gagne un voisin (D) ; C perd deux voisins (A et D) ; et D perd un voisin (C) et en gagne 2 (A et B). Voici donc les tables de chacun, juste en regardant qui sont ses voisins :


Ensuite on démarre les échanges de tables entre routeurs. Regardons ce qui se passe au tour 1. A envoie sa table à B (qui n'en fait rien, il a déjà une connexion directe vers tous les routeurs) et à D (qui n'en fait rien non plus car A ne peut pas lui permettre d'accéder à C, la seule connexion qui lui manque). Par contre quand B envoie sa table à ses voisins A, C et D alors là… tout le monde va se mettre à jour. Le résultat sera :

Comme les routeurs ont modifié leurs tables, ils vont vouloir les communiquer à nouveau à leurs voisins. Ce sera le tour 2. Personne ne mettra sa table à jour. Et donc les échanges sont terminés.

_Qu’a-t-on appris si on s’arrête là ?_ Que même sans explorer individuellement le réseau, les routeurs peuvent écrire des tables qui le couvrent entièrement (un message pourra être acheminé entre les points les plus éloignés du réseau). Que les échanges 2 à 2, par propagation, peuvent se faire plusieurs fois pour atteindre un état satisfaisant. Que l’algorithme qui permet de mettre à jour les tables est distribué et qu’il repose sur des principes simples.

Temps 3 : C’était trop beau !

L'algorithme vu au dessus est relativement simple, seulement il a un bug : il peut lui arriver de créer des cycles. Pour s’en rendre compte, vous pouvez disposer les participant·e·s selon le schéma de réseau suivant :


Sans surprise, les tables de routage sont comme cela :


Simplement, dans ces tables, chacun pousse les messages vers son ou ses voisins, façon “chenille”. Mais voilà que le réseau évolue, et prend maintenant cette forme :


Nous allons voir que, dans ce cas, C a perdu sa connexion à D mais… les routeurs A et B, ne vont pas s’en rendre compte ! Finalement, tout le monde va croire que D est toujours connecté dans le réseau.

C’est un peu ça… Voyons le déroulement.

Après le changement de connexions, tout le monde met à jour sa table en fonction des voisins qui sont toujours accessibles, qui sont nouveaux ou qui ont disparu, comme suit :


En fait A a une nouvelle connexion et va envoyer sa table à tous. 
B s'en moque, il a déjà des connexions vers tout le monde et ses voisins sont là, il ne change rien. C a perdu sa connexion vers D, il supprime donc D de sa table, et il reçoit la table de A, du coup il note dans sa table qu'il a un moyen de joindre D en passant par A. La table de C devient :


Comme C vient de modifier sa table, il la renvoie à tous. Mais plus personne n’a de modification à faire. D, lui, n’a personne à qui envoyer quoi que ce soit. L’algorithme s’arrête. On obtient donc un cycle A-B-C pour envoyer les messages à D et les routeurs ne se rendent pas compte que la connexion est perdue :


Qu’est-ce qu’on peut faire ?

Une première solution, simple à mettre en pratique, consiste à compter le nombre de routeurs par lesquels un message est passé. S’il passe par trop de routeurs, alors il est détruit.

Ok… c’est un peu brutal comme solution (et pourtant, elle est bien utilisée en pratique). Il existe une technique complémentaire qui permet d’éviter ces cycles : ajouter le nombre d’étapes nécessaires pour aller à destination.

Pour en savoir plus, n’hésitez pas à consulter la version complète de cette activité, proposée par Marie Duflot ici : [https://members.loria.fr/MDuflot/files/med/doc/routageelastique.pdf](https://members.loria.fr/MDuflot/files/med/doc/routageelastique.pdf)

## Partez à la découverte des acteurs du net

Au cours des dernières années, l’Internet est devenu un composant central de la communication, du commerce et du développement technologique. De nouveaux usages sont apparus, facilités par le déploiement des téléphones mobiles et des . Pour faire face à cette diversité et à l’explosion des services et par là même du trafic, l'écosystème de l’Internet s’est complexifié. Les acteurs intermédiaires se sont multipliés afin de proposer des solutions pour améliorer la qualité des services fournis. Faisons un petit tour d’horizon pour mieux comprendre cet éco-système.


## Rendez vos lutins protocolaires

Dans la partie précédente, vous avez créé un mini-réseau et routé un paquet à travers ce réseau. Mais plaçons-nous ici à la place du serveur (soit : **Bobby**). Lui ne sait pas si son paquet est bien arrivé à destination ou non. Dans ce chapitre, nous allons donc l'aider à… **recevoir un accusé de réception.**

### Mettez-vous à la place de l'émetteur

Pour vous aider à mieux comprendre le problème de Bobby, j’ai repris le projet de routage ici : [https://scratch.mit.edu/projects/150057625](https://scratch.mit.edu/projects/150057625)

En appuyant sur la touche “espace”, Bobby envoie un paquet de gâteaux. Mais il n’a aucune visibilité sur ce qui se passe ensuite ! Et on ne sait jamais ce qui peut arriver : un gentleman trop gourmand sur la route du paquet, un bretzel-routeur défaillant… Bref, on n’est pas à l’abri de perdre un paquet !

Il est donc nécessaire que Bobby sache si le paquet est bien arrivé ou non, car si ce n’est pas le cas, il faudra qu’il renvoie le paquet de nouveau.

Cette situation peut être simplifiée, comme dans le projet suivant, que vous pouvez remixer si vous le souhaitez : [https://scratch.mit.edu/projects/150095114](https://scratch.mit.edu/projects/150095114)

Lorsqu’on appuie sur la touche “espace”, Bobby envoie un paquet vers Ada. Ici, on se fiche de savoir par où passe le paquet. On sait juste qu’il part de Bobby, et qu’il arrive à Ada.

Mais comme je le disais, on n’est jamais à l’abri d’une perte de paquet.

**Votre premier défi** : simuler une perte aléatoire de paquet.

Dans le projet, le paquet arrive toujours à destination. Et pour cause : lorsqu’on appuie sur la touche “espace”, le paquet crée une copie de lui-même qui va directement vers Ada.

Si je souhaite simuler une perte aléatoire, je peux donc par exemple ajouter un script qui va “entrer en concurrence” avec le précédent, comme ceci :

Mon programme exécutera donc les deux scripts : dans le premier cas, le paquet arrive jusqu’à Ada, et dans le second, il est supprimé aléatoirement après 0.3 seconde, c’est-à-dire moins de temps que nécessaire pour arriver à Ada. Autrement dit, il sera supprimé sur le chemin.

Bien sûr, il n'y a pas qu’une seule manière de simuler une perte de paquet…

### Faites envoyer un accusé de réception par votre destinataire

Maintenant qu’on a un réseau presque réaliste avec pertes de paquets, revenons à notre problème initial : Bobby doit savoir si Ada a bien reçu le paquet.

**Votre deuxième défi** : faire envoyer un accusé de réception à votre lutin-client.

Eh oui, il va falloir ajouter un nouveau lutin, similaire au paquet de Bobby, mais qui sera cette fois envoyé par Ada uniquement si elle reçoit le paquet de Bobby (c’est-à-dire si elle est touchée par le paquet…). Et lorsque Bobby reçoit l’accusé de réception, il peut, par exemple, dire dans une bulle qu’il l’a bien reçu.

Vous avez fini de coder ce nouveau lutin-accusé de réception ? Dans ce cas vous devriez avoir quelque chose qui ressemble à ça :

Mais, là encore, on n’est pas à l’abri d’une perte de l’accusé de réception sur le réseau… Libre à vous d’ajouter ou non un petit script pour simuler cette perte aléatoire.

### Enrichissez vos protocoles

Voilà, vous venez de définir des règles simples et minimales de communication entre Bobby et Ada (ou entre votre serveur et votre client) : en somme, vous avez mis en place un protocole minimal de communication. Vous venez de _modéliser_ la transmission et de créer un _simulateur_. Je vous encourage fortement à l’enrichir en définissant d’autres actions.

Mais avant d’entrer dans le vif du sujet des protocoles, dans le chapitre suivant, je vous propose quelques réflexions sur des améliorations de votre propre protocole.

Pour le moment, Bobby sait quand il reçoit l’accusé de réception ou non. Mais s’il envoie un paquet, et qu’il ne reçoit jamais d’accusé de réception, que l’accusé s’est perdu ou bien que le paquet initial lui-même s’est perdu, comment va-t-il savoir quand envoyer à nouveau le paquet ?

**Grâce à un chronomètre !**

Quoi, un chronomètre ? Oui, il y a ça dans Scratch, dans la catégorie “Capteurs”. D’ailleurs, vous pouvez le tester avec les blocs suivants :

Je vous laisse donc tester ces quelques blocs si vous souhaitez améliorer votre protocole ; vous pouvez également ajouter des variables qui gardent en mémoire le nombre de paquets envoyés, et le nombre d’accusés de réception reçus… Facile, pour vous qui avez suivi le [module 1 de Class’Code !](https://openclassrooms.com/courses/decouvrir-la-programmation-creative) ;)

Et voici mon propre projet minimal si vous souhaitez le regarder avant de passer au chapitre suivant : [https://scratch.mit.edu/projects/150063418](https://scratch.mit.edu/projects/150063418)

- Sur les réseaux, il peut y avoir des **pertes de paquets** !
- Un **protocole de communication,** ce sont des règles établies pour que des machines puissent communiquer entre elles sans ambiguïté.
- Ces machines échangent des messages sous des **formats particuliers**, et les actions effectuées à la réception de ces messages sont **spécifiques** et **définies pour chacun des messages**.

## Mais qu’est-ce qu’un protocole

Notre environnement se peuple d’objects connectés, des réseaux de capteurs fournissent en permanence des informations sur un environnement. La communication entre ces objets, par les protocoles, est essentielle.

### Comprendre la notion de protocole

**On ne peut parler de réseaux sans parler de protocoles**. Qu’en est-il exactement ? D’après l’une des définitions du Larousse, un protocole est "un ensemble de règles définissant le mode de communication entre deux ordinateurs". On peut reprendre l’analogie avec la communication entre deux personnes. Le schéma ci-dessous représente les échanges entre Alice et Bob. La conversation effective débute une fois que les deux personnes se sont saluées (message “Bonjour”) et se termine par une fin explicite (message “Au revoir”).

Au niveau des ordinateurs et des réseaux, le **protocole** définit le format et l’enchaînement des messages qui doivent être échangés, ainsi que les actions à réaliser lors de la réception de ces messages. Le terme technique pour ces messages est **PDU** (_Protocol Data Unit_) ou **Unité de Données de Protocole**.

### Le protocole HTTP du Web

Dans la suite de ce chapitre, nous allons rentrer dans des détails un peu plus techniques. Rassurez-vous, pas besoin d'apprendre par cœur ;) Mais si vous souhaitez aller plus loin dans la compréhension des protocoles, alors allons-y !

Regardons de plus près le [protocole HTTP](https://fr.wikipedia.org/wiki/Hypertext_Transfer_Protocol) ou protocole de transfert hypertexte qui permet à un client (le navigateur) de communiquer avec un serveur web en lui envoyant des requêtes pour obtenir des documents (comme les pages HTML) qui peuvent contenir des liens vers d’autres documents.


Quand on entre l’URL [http://www.loria.fr/fr/](http://www.loria.fr/fr/) dans la barre de navigation, quel message est effectivement émis vers le serveur ?

Le message commence par **GET** (en majuscule !) suivi du chemin (_path_) pour indiquer le nom de la ressource et de la version du protocole HTTP (ici HTTP 1.1) :

> GET /fr/ HTTP/1.1suivi de la localisation de la ressourcehost: [www.loria.fr](http://www.loria.fr)

Ce message doit avoir un format bien précis et normalisé de façon à ce qu’il soit compréhensible par tous les serveurs web et puisse être généré par n’importe quel navigateur. C’est l’objectif même de la standardisation.

Vous pouvez voir juste en dessous le contenu exact de la requête envoyée :


Vous avez lu ? C'est pas plus incompréhensible qu'un SMS écrit avec des codes de lanages de jeunes :)

On y voit apparaître également un [cookie](https://fr.wikipedia.org/wiki/Cookie_(informatique)), c’est ce petit fichier texte stocké sur votre ordinateur qui, entre autres, permet de se ré-identifier auprès du serveur web et qui lui permet de garder vos données lors de vos différentes visites (achats effectués, pages consultées…) ; une sorte de carte de fidélité.

Le nom de mon navigateur (ici Safari) est également précisé ainsi que la machine que j’utilise avec la version du système d’exploitation (Macintosh Intel Mac OS X 10_12_2).

Pour plus d’informations, n’hésitez pas à consulter le cours OpenClassrooms sur [les requêtes http](https://openclassrooms.com/courses/les-requetes-http).

La requête est donc interprétée par le serveur qui peut ainsi transmettre la page HTML du site. 
Cette page contient elle-même des ressources (images, autres pages HTML…) Et, pour chacune d’elle, une nouvelle requête GET sera également émise.

### À chaque niveau son protocole

Cependant, dans la vraie vie, les requêtes et les réponses peuvent se perdre au sein du réseau. Oui, oui... elles peuvent se perdre (serveurs saturés, routeurs engorgés, panne…) Le travail du réseau Internet c'est de faire "au mieux" (_best effort_) pour que toutes les données arrivent à destination. C’est le rôle du protocole dit **IP** (_Internet Protocol_). Il est très efficace et cherche à aller au plus vite, mais il ne peut garantir que tout se passe parfaitement.

Alors, comment s’assurer que le message est bien transmis d’une machine à l’autre ?

Eh bien c’est le rôle d’un autre protocole, le protocole **TCP** (_Transmission Control Protocol_) qui va garantir une transmission fiable des données en utilisant des mécanismes comme les accusés de réception (appelés aussi acquittement) ou les temporisateurs (minuteurs qui déclenchent une alarme pour ne pas attendre indéfiniment un accusé de réception). En bref : il renvoie les données si quelque chose d’anormal s’est produit.

TCP va donc permettre à la machine destinataire, par exemple, de remettre les informations dans le bon ordre, ou bien à l’émetteur de ré-envoyer une donnée si elle semble perdue.

Bien entendu ce n’est pas le seul protocole, si pour une application peu importe l’ordre d’arrivée des données, ou les quelques pertes, alors elle peut utiliser le protocole **UDP** (_User Datagram Protocol_), **protocole de datagramme utilisateur**. C’est le cas par exemple pour un flux vidéo en temps réel, car on ne souhaite pas revenir en arrière.

### Suivons nos paquets de données pas à pas

Pour la navigation web, HTTP va donc s’appuyer sur TCP. La page HTML va être découpée en un ou plusieurs segments TCP (selon la taille de la page) qui sont numérotés.

Cela revient à envoyer un document par la poste en plusieurs parties ; chaque partie est numérotée et ensuite mise dans une enveloppe. Grâce à cette numérotation, il sera plus facile de les remettre dans l’ordre à l’arrivée et/ou d’identifier les parties manquantes.

De la même façon, chaque segment est encapsulé dans un paquet où seront indiquées l’adresse du destinataire ainsi que l’adresse de l’émetteur (si l’on a besoin de lui retourner de l’information)


Ce paquet va transiter sur le réseau et va être traité par le protocole Internet pour être acheminé jusqu’à la destination grâce aux **tables de routage** présentes dans les routeurs. Les paquets IP sont des paquets autonomes (ou datagramme) qui peuvent prendre des chemins différents, arriver dans le désordre et aussi se perdre.

Celui qui a inventé cette notion de datagramme est un chercheur français, un des pionniers de l’Internet, [Louis Pouzin](https://fr.wikipedia.org/wiki/Louis_Pouzin).

Donc, un paquet IP comprend un segment TCP qui contient tout ou partie d’une page html ou d’une autre ressource (images, vidéo…) À la réception des paquets, le processus inverse va être réalisé : les segments TCP sont extraits des paquets IP (les enveloppes sont ouvertes) ; les parties de la page HTML sont extraites des segments TCP et la page HTML est reconstituée pour être restituée à l’utilisateur via son navigateur.

### Résumons: encapsulation et désencapsulation

Les fonctionnalités sont bien séparées et modularisées : HTTP s’occupe de l’échange de document hypertexte, TCP de la fiabilité de la transmission de bout en bout (entre l’émetteur et le récepteur) et IP de l’acheminement des paquets jusqu’à la destination. Ce principe d’abstraction s’appelle le **découpage en couches**.

Lors de l’émission d’une donnée, chaque couche ajoute au message des informations spécifiques, appelées aussi “en-tête” (par exemple type de la requête pour HTTP, adresses pour IP) avant de le transmettre à la couche inférieure. C’est le principe **d’encapsulation**.

Lors de la réception, chaque couche analyse l’en-tête spécifique correspondant à son protocole, fait le traitement approprié et envoie le contenu du message (sans l’en-tête) à la couche supérieure. C’est le principe de **désencapsulation.**


Une autre façon de présenter les choses

Dans le modèle TCP/IP, on compte ainsi 5 couches (ou 4 couches si on regroupe les fonctionnalités liées à l’accès réseau en une seule couche : accès au réseau local et transmission des données sur le canal physique). La couche où réside le protocole IP est classiquement appelée [couche Internet](https://fr.wikipedia.org/wiki/Suite_des_protocoles_Internet) ou couche réseau.

_Référence : Manuel ISN, [Chapitre 16](https://pixees.fr/wp-content/uploads/2017/03/Informatique_et_Sciences_du_Num%C3%A9rique_-_Sp%C3%A9cialit%C3%A9_ISN_en_Terminale_S-Chap16.pdf), (le [manuel complet](https://wiki.inria.fr/wikis/sciencinfolycee/images/7/73/Informatique_et_Sciences_du_Num%C3%A9rique_-_Sp%C3%A9cialit%C3%A9_ISN_en_Terminale_S.pdf) est en accès libre en CC-BY-SA)._


- **Un protocole** spécifie un ensemble de messages qu’il est possible d’envoyer ou de recevoir, et des actions à exécuter selon le message reçu.
- Les deux mécanismes de base pour garantir le bon transfert des paquets d'information sont de **renvoyer un accusé de réception** et de **recommencer l'envoi** si cet accusé n'arrive pas au bout d'un certain temps.
- Pour fonctionner correctement, **Internet est organisé en couches**, chaque couche ayant un rôle précis et fonctionnant avec un protocole.
- On peut même apprendre et comprendre ça **en jouant**.

La stratégie de votre blog vous permet de créer votre plan éditorial, pour qu’il soit cohérent et que vous puissiez par la suite prioriser vos sujets clés et les articles qui en découleront.

Votre blog peut avoir des dizaines de raison d’être, trouvez pourquoi vous avez créé le vôtre ! Voulez-vous :

- Avoir plus de trafic sur votre site grâce à votre blog ?
- Donner plus de détails sur vos produits / services à vos clients ?
- Générer plus de leads / de conversions ?
- Fidéliser vos clients ?
- Récupérer les informations de vos internautes (leur mail par exemple)
- Attirer une nouvelle cible ?
- Simplement améliorer votre SEO ?