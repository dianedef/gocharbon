---
section: tutos
tags:
- Tutoriels
imageNameKey: null
title: Faire Des Ancres De Lien Sur Wordpress
author: Diane
description: 'Découvre Faire Des Ancres De Lien Sur Wordpress : outil français pour
  entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

🔹✅💡🥊🛡️🔇🧠📣🎁🏆📚🛠💥🙌😱❌✂️
## Qu’est-ce qu’un lien d’ancrage ?

Un lien d’ancrage est un lien hypertexte qui, lorsqu’un internaute clique dessus, le redirige automatiquement vers un autre emplacement situé sur la même page, ou vers une page externe. Le visiteur n’a plus besoin de faire défiler la page indéfiniment pour trouver l’information qu’il est venu chercher.

> Techniquement, [l’élement d’ancre](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a) est un élément HTML `<a>` (pour ancre ou _anchor_, en anglais)**.** 

Le texte entre les balises `<a>` constitue l’ancre. Par extension, cela désigne le lien complet, c’est-à-dire la balise `<a>` et son contenu, comme dans l’exemple ci-dessous : 

`<a href="https://wpmarmite.com">Se rendre sur WPMarmite</a>`

**Un lien d’ancrage peut être ajouté sur n’importe quel élément : texte, image, titre etc**.

Pour bien accrocher au concept d’ancre, prenons un exemple simple. [Dans cet article qui vous montre comment installer un plugin](https://wpmarmite.com/installer-plugin-wordpress/), un sommaire en haut de la page résume son contenu.

Vous pouvez vous orienter dans le contenu grâce aux titres de chaque partie.

En cliquant sur le titre de votre choix à partir de cette table des matières (c’est souvent là que l’on insère des liens d’ancrage), vous atterrissez directement sur la partie que vous avez choisi de découvrir :


Un clic et hop, magie : me voilà sur la partie de l’article qui m’intéresse.

L’ancre, c’est donc ce qui permet de faire ce lien, entre le sommaire et les sections correspondantes de l’article.

## Pourquoi créer des ancres avec WordPress ?

Maintenant que vous avez compris ce qu’est une ancre, vous vous demandez peut-être si elle est utile. Eh bien oui, sans grande surprise. Et ce, pour 3 raisons principales :

- **cela améliore l’expérience utilisateur** (UX, _User eXperience_). Il s’agit d’un très bon moyen de faciliter la navigation des internautes dans une page, puisqu’ils peuvent accéder directement à la section de leur choix, comme vous l’avez vu précédemment dans l’exemple sur la table des matières ;
- **l’affichage de vos pages dans les résultats de recherche de Google peut être bonifié**. Le moteur de recherche peut afficher certains liens d’ancrage sous la méta-description de votre contenu, ce qui peut améliorer le taux de clics sur vos contenus, et donc augmenter le trafic sur votre site WordPress ;  
    


Aperçu d’ancres proposées sur la page de résultats de recherche de Google

- **vous pouvez lier vers une section d’une autre page**. Et ce, même si c’est en plein milieu ou en bas de celle-ci. Je m’explique : imaginons que vous soyez en train d’écrire un article. Vous parlez de vos services et vous voulez faire un lien directement vers une offre précise, qui se trouve à la fin de votre page de tarifs. Eh bien, c’est grâce à une ancre que vous pourrez le faire. Je vous détaille comment procéder en fin d’article.

Tout est clair pour vous ? À présent, place à la pratique. Découvrez comment mettre en place une ancre sur WordPress.

## Comment créer une ancre avec l’éditeur de contenu de WordPress ?

Pour rendre l’exercice encore plus concret, je vais concevoir un sommaire dans lequel je vais ajouter un lien d’ancrage. En avant !

### Étape 1 : Créer l’ancre sur le bloc titre de votre choix

Commençons par **créer l’identifiant de l’ancre qui se trouvera, non pas dans le sommaire, mais dans le corps du texte**.

Pour cette étape, il s’agit simplement de lui donner un nom unique. Voici comment procéder : 

- tout d’abord, choisissez le bloc du chapitre qui vous intéresse, celui vers lequel vous voulez pointer, par exemple un titre h2. On peut imaginer qu’il s’appelle « Créer des ancres ». Cliquez dessus ;


- **dans la colonne « Bloc » de l’éditeur**, sur la droite de l’écran, cliquez sur « Avancé ». Puis, dans le champ « Ancre HTML », choisissez le nom que vous souhaitez donner à votre ancre. Il s’agit de son identifiant.  
    Privilégiez un nom simple et court, comme « `creer-des-ancres` », par exemple. Le mieux est de donner un nom en rapport avec la section vers laquelle le lien est créé.


Concernant le nom de votre ancre, [la documentation de WordPress](https://fr.wordpress.org/support/article/page-jumps/) propose quelques conseils pratiques, à respecter sous peine de voir votre ancre non fonctionnelle :

- utilisez **un nom unique par ancre** et par page web ;
- **le nom de l’ancre est sensible à la casse**. Vous pouvez utiliser des majuscules et des minuscules, à condition que cela reste compréhensible ;
- vous pouvez utiliser certains caractères spéciaux comme le tiret « `-` » ou le tiret bas « `_` » pour séparer deux mots, mais **pas d’espace** (tout doit être collé). Évitez également les caractères accentués ;
- **le premier caractère du nom de l’ancre doit être une lettre**.

_L’éditeur de contenu de WordPress peut être un peu trompeur dans les mots qu’il utilise lorsque vous ajoutez votre ancre HTML. Il ne permet pas de créer une « adresse web unique », comme il le suggère._  
_Il permet d’ajouter un identifiant, comme on vient de le voir, que vous pouvez utiliser pour créer des liens vers l’élément choisi, c’est tout._

### Étape 2 : Créer un lien d’ancrage vers votre ancre HTML

Pour la deuxième étape, revenez au début de votre article :

- commencez par créer votre sommaire, à l’aide d’un bloc « Liste », par exemple. Renseignez tous les titres des chapitres de votre article. **Terminez en mettant en surbrillance le nom du chapitre choisi**. Ci-dessous, il s’agit de « Créer des ancres », pour notre exemple :


- créez un lien avec le nom d’ancre ajouté précédemment (`creer-des-ancres`). Attention, il y a une subtilité ici. Ce nom doit être précédé du caractère `#`. Dans notre exemple, cela donne : `#creer-des-ancres`.  
    Ce lien va conduire vers l’élément ayant l’identifiant correspondant dans la page courante (celui que vous avez choisi à l’étape précédente, c’est-à-dire votre titre h2) :


Et voilà, c’est tout bon : votre lien d’ancrage est sur pied et fonctionnel. Félicitations !

_Dans notre exemple, nous avons créé un lien d’ancrage vers un titre de la page. De façon générale, n’importe quel élément permettant d’insérer un lien hypertexte (ex : titre, texte, image etc.) peut devenir le lien vers l’ancre de votre page._

Pour l’ajout d’une ancre HTML, la documentation de WordPress précise que [le réglage est disponible pour tous les blocs sauf](https://fr.wordpress.org/support/article/reglages-avances-des-blocs/#ancre-html) :

- les blocs Classique, Lire la suite, Recherche, Saut de page ;
- les blocs Widgets (sauf Icônes de réseaux sociaux qui lui le propose) ;
- les blocs de Contenus embarqués ;
- les blocs de Thème.

Formez-vous à WordPress en 3 mois

Apprenez à concevoir des sites WordPress _sécurisés, rapides et conformes aux obligations légales_ avec la formation à distance la plus généreuse du marché (éligible au CPF).

[DÉCOUVRIR LE PROGRAMME](https://wpchef.fr/wordpress/)


## Comment créer une ancre sur WordPress en code HTML ?

Si vous ne souhaitez pas passer par l’option « Ancre HTML » proposée par l’éditeur de contenu de WordPress, il est aussi possible de créer une ancre manuellement en code HTML, toujours sur l’éditeur de contenu.

Je déroule le fil juste en dessous, toujours en deux temps.

### Étape 1 : Créer l’ancre pour la section choisie

Commencez par choisir le bloc qui vous intéresse. Ici, je vais reprendre mon exemple du h2 de l’explication précédente.

Cliquez sur le bouton du bloc avec les 3 petits points, puis choisissez « Modifier en HTML ».


**Le h2 choisi ci-dessus s’appelle « Créer des ancres »**. Quand vous allez passer en modification HTML, vous verrez alors :


À partir de là, **ajoutez manuellement un attribut `id` à la balise h2**, pour donner un nom à votre ancre (ce sera invisible sur l’éditeur visuel). Ce qui donnera :


Si vous voulez faire la même chose dans un paragraphe, ou tout autre type de bloc, c’est tout à fait possible.

La seule différence est que vous ne travaillerez pas avec une balise h2, mais avec une balise `p` (pour paragraphe) par exemple. Ce qui donnerait ici :


### Étape 2 : Placer le lien d’ancrage dans le sommaire

Là encore, revenez au sommaire que vous aurez créé au préalable, pour passer à la suite.

Dans ce sommaire, choisissez à nouveau « Modifier en HTML », si ce n’est pas déjà le cas.

Autour du texte d’ancrage (le nom de votre chapitre), ajoutez une balise `<a>`, et ajoutez-lui un attribut `href` ayant pour valeur le nom de l’identifiant, afin de créer un lien d’ancrage cliquable.

N’oubliez pas d’ajouter le préfixe `#` pour faire référence à l’attribut `id` du bloc vers lequel il est lié.

Vous verrez donc :


Encore une fois, attention de bien utiliser exactement le même nom (d’abord « `creer-des-ancres` », puis « `#creer-des-ancres` »).

## Comment créer un lien vers une ancre située sur une autre page ?

En début d’article, je vous avais promis de vous expliquer comment utiliser une ancre sur WordPress pour **renvoyer vos lecteurs directement au milieu d’une autre page**. 

Pour bien comprendre, je reprends l’exemple que j’avais utilisé : vous avez une page de tarifs avec plusieurs prestations. Dans votre dernier article, vous voulez envoyer vos lecteurs directement vers la dernière prestation de cette page.

La première chose à faire est évidemment de créer une ancre sur le bloc de cette fameuse dernière prestation  (ex : « `derniere-prestation` »), quelle qu’elle soit. Mais maintenant, vous savez faire ça. 😉

Ensuite, lorsque vous créez le lien dans votre article vers votre prestation, il vous suffit de : 

1. **Saisir l’URL de la page**, par exemple : « `https://www.monsite.fr/tarifs` » ;
2. Puis d’ajouter le préfixe `#` du nom de votre ancre, par exemple : « `https://www.monsite.fr/tarifs/#derniere-prestation` ».


En cliquant sur votre lien, la personne arrivera directement sur la dernière prestation de votre page de tarifs. 

Bon, jusqu’à présent, je vous ai montré comment créer une ancre manuellement, que ce soit à l’aide de l’éditeur de contenu de WordPress, ou de code HTML.

Pour être encore plus exhaustif sur le sujet, sachez qu’il est possible d’ajouter des ancres sur WordPress avec une extension. Je vous en dis plus sur le sujet dans la partie suivante.

## Comment créer une ancre sur WordPress avec un plugin ?

Vous écrivez régulièrement des articles sur votre blog ? Des articles plutôt longs sur lesquels vous avez l’habitude d’intégrer un sommaire (table des matières) avec des ancres cliquables ? 

Eh bien sachez qu’il est possible d’automatiser ce processus et d’aller encore plus vite lorsque vous allez créer des ancres sur votre site WordPress à l’aide d’une extension. Pour cela, il existe plusieurs solutions que l’on va voir en détails.

### Option 1 : Se servir de l’extension LuckyWP Table of Contents pour créer une table des matières

Différents plugins se tirent la bourre sur le répertoire officiel pour vous aider à concevoir une table des matières. Parmi les plus célèbres, vous tomberez sur [Easy Table of Contents](https://fr.wordpress.org/plugins/easy-table-of-contents/), [Table of Contents Plus](https://fr.wordpress.org/plugins/table-of-contents-plus/), ou encore LuckyWP Table of Contents. 

Cette dernière a retenu mon attention car **c’est la mieux notée des trois** (4,9 étoiles sur 5) et qu’elle est très **simple à utiliser**, avec bon nombre d’options de personnalisation.


Vous pouvez notamment ajouter une table des matières automatiquement, en choisissant son emplacement (ex : avant ou après le premier titre, après le premier bloc de texte, etc.). Ou, bien sûr, l’intégrer manuellement où vous le souhaitez dans votre contenu à l’aide d’un bloc Gutenberg dédié.

Une fois que c’est fait, **vous pouvez agir à la fois sur le contenu, le mode de fonctionnement du sommaire et son apparence**, avec les réglages suivants, entre autres :

- ajout d’une numérotation pour vos titres ;
- personnalisation du nom de votre table des matières et des différents libellés (« afficher », « masquer » etc.) ;
- gestion possible des couleurs (arrière-plan, bordure, titre, liens etc.) et de la police d’écriture (taille, graisse) ;
- possibilité d’activer [l’attribut nofollow](https://developers.google.com/search/docs/advanced/guidelines/qualify-outbound-links?hl=fr).


**Télécharger LuckyWP Table of Contents :**

[TÉLÉCHARGER](https://fr.wordpress.org/plugins/luckywp-table-of-contents/)

### Option 2 : Passer par une extension de blocs Gutenberg

Si LuckyWP Table of Contents et consorts se concentrent sur un objectif en particulier – ajouter et personnaliser une table des matières -, **il existe d’autres extensions plus généralistes avec une option pour ajouter un sommaire**.

C’est le cas des extensions de blocs Gutenberg. Il s’agit de plugins qui proposent leurs propres blocs (éléments de contenu) dédiés à l’éditeur de contenu de WordPress. Ils permettent d’ajouter des titres, des _[sliders](https://wpmarmite.com/glossaire/slider-diaporama/)_, des appels à l’action, des formulaires, une barre de recherche, des tableaux de prix etc.

Et, bien sûr, pour certains : une table des matières. Vous n’y trouverez pas toujours des réglages aussi avancés qu’avec une extension dédiée comme LuckyWP Table of Contents, mais cela pourra parfois vous suffire en fonction de vos besoins.

Parmi [les extensions de blocs Gutenberg](https://wpmarmite.com/plugins-gutenberg-wordpress/) proposant une table des matières, je pourrais par exemple vous citer : 

- [Ultimate Addons for Gutenberg](https://fr.wordpress.org/plugins/ultimate-addons-for-gutenberg/), conçue par les créateurs du [thème Astra](https://wpmarmite.com/astra/) ;
- [Kadence Blocks](https://fr.wordpress.org/plugins/kadence-blocks/), par les concepteurs du thème [Kadence](https://wpmarmite.com/kadence/) ;
- [Stackable](https://wpmarmite.com/stackable/).

### Option 3 : Utiliser le plugin Elementor

Enfin, la dernière option dont je souhaitais vous parler repose sur l’usage d’un plugin un peu particulier, puisqu’il s’agit d’un constructeur de page.

Son nom ? Elementor (lien aff). Il s’agit du plus célèbre de l’écosystème WordPress, qui cumule plus de 10 millions d’utilisateurs à travers la planète :


_Un constructeur de page, appelé « page builder » en anglais permet, grâce à des modules (image, texte, bouton, vidéo etc.) et des modèles prêts à l’emploi, de concevoir l’apparence visuelle de votre site sans mettre les mains dans le code (ou très peu). Il s’utilise très souvent en glisser-déposer. [On vous en présente dix incontournables dans cet article](https://wpmarmite.com/meilleur-page-builder-wordpress/)._

Dès sa version gratuite, Elementor dispose d’un widget dédié à la création d’ancres sur WordPress : le dénommé « Ancre de menu ». Il a cette apparence-là :


Pour vous en servir, [suivez ce petit tutoriel dédié](https://elementor.com/help/menu-anchor-widget/).

_Vous souhaitez aller plus loin et commencer à prendre en main Elementor ? Retrouvez [notre guide d’utilisation consacré au page builder](https://wpmarmite.com/guides-wordpress/elementor)._

Et pour créer intégralement des sites WordPress professionnels avec lui, découvrez notre formation dédiée sur le sujet 👇👇👇 :

Formez-vous à Elementor

Apprenez à créer votre site WordPress grâce au constructeur de page le plus populaire du marché.

[DÉCOUVRIR LA FORMATION](https://wpmarmite.com/formation-wordpress/elementor/)


## Récapitulatif

Tout au long de ces lignes, vous avez découvert plusieurs manières de créer des ancres sur WordPress. En résumé, vous pouvez opter pour l’une des solutions suivantes, en fonction de vos besoins : 

- les fonctionnalités natives de l’éditeur de contenu ;
- du code HTML ;
- une extension WordPress dédiée.

_N’hésitez pas à faire des tests sur un brouillon pour bien comprendre la manipulation à effectuer._ 

[

Vous désirez créer des ancres sur # WordPress mais ne savez pas comment procéder ? On lève le voile… et l’ancre sur les différents moyens à votre disposition pour y parvenir.

Click to Tweet

](https://twitter.com/intent/tweet?url=https%3A%2F%2Fwpmarmite.com%2Fancre-wordpress%2F&text=Vous+d%C3%A9sirez+cr%C3%A9er+des+ancres+sur+%23WordPress+mais+ne+savez+pas+comment+proc%C3%A9der+%3F+On+l%C3%A8ve+le+voile...+et+l%27ancre+sur+les+diff%C3%A9rents+moyens+%C3%A0+votre+disposition+pour+y+parvenir.&via=wpmarmite)

Rappelez-vous, le plus important est de garder exactement le même nom d’ancre ! Avec le `#` pour le lien d’ancrage cliquable, et sans le `#` pour l’`id` de l’ancre qui y est reliée. Une fois que vous aurez bien compris comment faire, ce sera un jeu d’enfant pour la suite. 

Pensez à vous en servir dès que vous avez du contenu long. Vos lecteurs vous remercieront. 

Alors, vous avez envie d’utiliser les ancres maintenant ? Dites-moi en commentaire sur quoi vous allez les tester en premier.