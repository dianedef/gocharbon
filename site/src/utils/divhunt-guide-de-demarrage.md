---
title: "DivHunt, plateforme nocode, Guide de Démarrage"
description: "Apprends à utiliser DivHunt pour créer des sites dynamiques, professionnels et de hautes qualités en quelques minutes seulement ! Wow :)"
pubDate: 02-21-2023
author: "Diane"
tags:
  - Lifetime Deals
  - Création de Site Web
imgUrl: '../assets/astro.jpeg'
---

Bonjour à toi !

Après avoir lu ce guide tu aura une idée globable des différents élèments mis en place sur une page web, ces élèments sont construits en HTML et CSS d'ailleurs, mais tu n'as même pas besoin de savoir ça. L'important est de pouvoir créer le style de ton site tel que tu le souhaites, comprendre le fonctionnement du web-design et savoir où se trouve les options appropriées à cela, dans l'interface du Builder de DivHunt.

Ce guide s'inspire très fortement de la playlist YouTube [Divhunt Basics](https://www.youtube.com/playlist?list=PLNFGGrw9WrdmYMssE-bCcgGehMLTJSIKY) que je t'invite vivement à suivre en même temps pour approfondir ta compréhension de l'outil et du développement web front-end; c'est peu ou prou une traduction de l'[Academie Officielle DIvhunt](https://divhunt.com/academy/get-started
Si tu as des questions précises, tu peux retrouver le support sur leur [Forum](https://discourse.divhunt.com/). Bonne chance !

## Les Composants HTML

Comprendre comment utiliser efficacement les éléments de texte tels que les conteneurs, les paragraphes, les liens et autres balises est crucial dans la conception d'un site Web. En language HTML ce sont des texte entouré de chevrons, on les appelle "tags" en anglais ou "balises" en français, et sur DivHunt ce sont des éléments à cliquer puisque c'est du low-code.

```
<html> : permet de définir un document en tant que document HTML.
<head> : définit l'entête
<title> : définit le titre du document
<p> : définit un paragraphe
<section> : permet de rassembler des éléments en un groupe
<h2> : Un sous-titre de niveau 2
<img> : une image
<form> : un formulaire
<button> : un bouton
<b> : un texte en gras
Etc...
```

### Les Textes, Paragraphes, Titres, Span…

Ajouter et styliser un paragraphe : Pour insérer un paragraphe, sélectionne sur le canva ou dans le panneau des calques, la div du parent où tu souhaites le placer et ajoute un élément paragraphe à partir du menu en haut. Pour l'éditer double-clique dessus ou utilise le panneau des options à droite pour saisir ton texte. Pour éviter que le texte ne colle aux éléments adjacents, ajoute des marges via le panneau des options.

Tu peux y modifier toutes les options de typographie : taille, gras, italic, hauteur des lignes, couleur du texte, alignement, décoration, option de rupture (cette option permet de maintenir une apparence propre et ordonnée du texte dans ta conception lorsqu'il s'agit de mots longs ou d'URL qui risquent de ne pas rentrer parfaitement à la mise en page).

La balise span te permet d'ajouter un texte sans aucune bordure, et les balises titres ajoutent de titres qui seront compris par les moteurs de recherche, et les internautes, avec une mise en page cohérente : une taille et une police qui sera toujours la même. Tu peux gérer cela dans la page "Stylesheet" de DivHunt
https://global.divhunt.com/8825803651aa2e2216adf3ec70f6689e_14043.png

### La Balise "Div" 💻

Tu t'es déjà demandé comment les pages Web professionnelles parviennent à organiser et à styliser sans effort leurs mises en page ? La réponse se trouve dans la balise polyvalente Div. Considère une Div comme un conteneur ; une toile vierge dans laquelle tu peux empiler des images, du texte ou même d'autres divs. C'est la pierre angulaire de la conception Web.

En plus de gérer la structure principale d'une page, voici quelques moyens clés pour laquelle elle est utilisée :

👉 **Réglage de la largeur maximale :** Regroupe des éléments dans une div, puis ajuste la largeur maximale pour aligner ou empiler automatiquement tous les éléments contenus.

👉 **Setting Background Color :** Applique une couleur à une div pour stylisé un endroit de ta page 🎨.

👉 **Changer la couleur du texte :** Pour changer la couleur de plusieurs éléments de texte, stylise plutôt la div parente. La couleur mise à jour se répercutera en cascade sur tous les éléments de texte enfants

👉 **Résoudre les bords du contenu :** Utilise le padding ou la marge pour empêcher le contenu de coller aux bords du conteneur et maintenir un espacement agréable à regarder

### La Balise "Image"

Apprends à insérer et à ajuster des images sur des pages Web avec cette balise, à les dimensionner, les positionner, définir des rapports d'aspect, ajouter des descriptions et à utiliser le chargement paresseux.

Sélectionne la div dans laquelle tu veux insérer ton image et clique sur l'option image pour insérer ta balise image
https://global.divhunt.com/3982ec0cc3c7b971acc36aa73ccbeccf_71552.webp
Ouvre le panneau des paramètres, cherche le champ source, choisis le fichier sur ton ordinateur et télécharge-le
https://global.divhunt.com/2a213930ef0b10683afc86913a5ea92a_70262.webp

Si ton image semble étirée, pas besoin de la modifier en externe. Divhunt te propose des options de dimensionnement :
- Choisis "couvrir" pour t'assurer que ton image couvre toute la surface sans être étirée ou floue.
https://global.divhunt.com/7814759ac38841e7f65a4f29ba2b1d03_71798.webp
- Joue avec les dimensions pour que la largeur et la hauteur de ton image soient parfaites
https://global.divhunt.com/2e6fe44249eb7e675da2adace5c689ce_78820.webp

Tu peux aussi ajouter des border radius pour créer des images ovales ou des rondes.

Utilise les champs de positionnement pour ajuster son emplacement :
- Saisis une valeur pour pousser l'image du haut ou du bas
- Fixe-la à "50 %" pour centrer l'image de manière agréable
https://global.divhunt.com/94334adc2b8018f43888ad5ee9553e4e_73374.webp

Le rapport d'aspect est crucial car il détermine si ton image a l'air écrasée ou non. Divhunt te permet de définir des rapports d'aspect tels que 4:3 ou 16:9, ce qui garantit que tes images conservent leurs proportions.
https://global.divhunt.com/d44b2de3b454e94269a0dbde8f6430e6_15856.png

Le texte Alt est important pour le référencement et l'accessibilité. Il décrit ton image et est affiché lorsqu'elle ne peut pas être lue, comme sur une connexion lente ou par quelqu'un d'aveugle. Elle est aussi utilisée par Google pour mieux comprendre ta page. Ajoute toujours une description pertinente dans le champ du texte alt !
https://global.divhunt.com/95813a36308ab235ed00ba5996607899_23340.png

Le lazy loading (chargement paresseux) est une technique qui permet d'accélérer le temps de chargement de ta page web, une métrique très importante pour l'internaute et pour Google. Il ne charge que les images actuellement visibles, et charger les autres au fil du défilement de la page. Utilise le pour les pages contenant plusieurs images.
https://global.divhunt.com/ee2111535f48dc8bbba88301ec255453_15853.png

Regarde cette vidéo pour améliorer le chargement des images : [How to Optimize Images for Faster Web Loading | Divhunt Tutorial - YouTube](https://www.youtube.com/watch?v=8MKe--eIqcA)
### La Balise "Lien"

Apprends à utiliser la balise de lien HTML dans Divhunt, en rendant les éléments comme le texte et les boutons cliquables ! Semblable à une Div, un bloc de lien est un conteneur qui peut contenir différents types de contenu, tels que du texte, des images ou des sections entières. La principale différence réside dans sa capacité à être cliquée.
Tu peux envoyer ce clic vers un lien interne, un lien externe, une section de ta page, ou même pour générer un appel ou la création d'un email.

1. Sélectionne la zone où tu veux placer le bouton et ajoute la balise de lien
2. Modifie ton bloc de lien pour qu'il ressemble à un bouton en choisissant les couleurs, les marges et les paramètres de police dans le panneau des options
https://global.divhunt.com/5e0200d633180b8475cccc0c95ff5c85_6922.webp

Pour créer un lien interne (à l'intérieur de ton site), sélectionne le bloc de lien et ouvre le panneau des paramètres, choisis l'option 'Page' et sélectionne une page existante dans la liste déroulante de ton projet.
https://global.divhunt.com/b73dcc1ee47ca86e3f26819e29bef96a_13334.webp

Pour créer des liens externes (qui renvoient à d'autres sites web), il suffit de coller l'URL externe souhaitée dans le champ de saisie du lien dans le panneau des paramètres.
https://global.divhunt.com/4d83024f8dd4720a7d064bbe596a77d1_15066.webp

Pour diriger les utilisateurs vers des sections spécifiques de la même page (liens vers des ancres), sélectionne la section que tu veux cibler et attribue-lui un ID dans le panneau avancé des options.
https://global.divhunt.com/fb15dc4aacc6cde096e24a5a73043d78_34472.webp
Choisis l'élément que tu souhaites transformer en lien et dans le panneau des paramètres, opte pour l'option "Anchor", saisis l'identifiant que tu as établis précédemment.
https://global.divhunt.com/0ca7d044504c6178c8ede520679339bc_52398.webp

Option de décalage : Dans les paramètres du lien, spécifie le décalage en pixels pour contrôler à quelle distance au-dessus de la section le défilement s'arrêtera, empêchant ainsi le comportement par défaut où le haut de la section s'aligne sur le haut de l'écran.
https://global.divhunt.com/b8986a3241c6ff2d06d380c0ba366892_12816.webp

Appels téléphoniques et courriels : Dans le panneau des paramètres, sélectionne l'option 'Téléphone' ou 'Courriel'. Saisis le numéro de téléphone ou l'adresse électronique lorsque cela t'est demandé.

Utiliser les attributs "Rel" : Dans le panneau des paramètres, tu trouveras des options telles que "no-follow", "no-opener" et "no-referrer" dans le champ "Rel". Ces options peuvent améliorer la confidentialité et la sécurité de tes liens externes.
- no-follow : Empêche les moteurs de recherche de suivre le lien.
- no-opener : Renforce la sécurité en empêchant la nouvelle page d'accéder à la page d'origine.
- no-referrer : empêche le navigateur d'envoyer l'URL de référence à la nouvelle page.
https://global.divhunt.com/224c4f2e52af72c3613400ccdcaba789_19846.webp
### Les Composants Réutilisables

Les Divhunt "Components" ou "composants réutilisables" sont des éléments de conception réutilisables, permettant aux utilisateurs de créer des conceptions Web cohérentes et efficaces en reproduisant et en personnalisant les composants sur plusieurs pages, on les utilise d'abord pour l'entête/menu (header) et le pied de page (footer), mais tu peux en créer comme bon te semble pour travailler plus rapidement. Modifie ensuite seulement le composant pour le changer partout, gardant ton design cohérent et en gagnant du temps.

Sélectionne n'importe quel élément de ta page que tu veux transformer en composant réutilisable et clique avec le bouton droit de la souris sur "Convert" (Convertir en composant) dans le menu. Tu viens de créer le composant principal. Toutes les modifications de texte ou de style que tu y apportes mettent automatiquement à jour toutes les copies (instances) que tu as placées sur différentes pages.

Pour créer une instance, sélectionne la div parente, puis Ctrl E et le nom de ton composant. Pour modifier le composant principal, rends-toi dans le panneau des composants (ou cliques sur n'importe quelle instance du composant, et sur le bouton "Modifier le composant principal").

## Le Panneau des Calques (Layers)

Le "Layers panel" se situe sur la gauche de l'interface du Builder, à côté de la liste des pages, et des fichiers. Il affiche les élèments présents sur ta page web en arborescence, comme sous forme de strates. Toutes les div, textes, images, boutons, etc. y sont répertoriés.

Ce panneau de calques fonctionne comme sur Figma ou PhotoShop par exemple, il représente la disposition et la hiérarchie des éléments de ta page et tu peux organiser, réorganiser et gérer les éléments ici. Certains sont au dessus d'autres, à côté, à l'intérieur, ce sont comme des briques avec lesquelles tu peux jouer, ces briques sont souvent des Div (on voit ça juste après !)

Le menu ruban tout en haut te permet d'accéder aux nouveaux éléments à ajouter sur ta page : titres, texte, section, liens…

En faisant un clic droit sur un élément en particulier tu retrouvera les contrôles disponibles liés à cet élément de ta page.

* Étiquette (Tag) : Juste pour ton organisation, donne un nom à cet élément si tu le souhaites
* Boucle (Loop) : C'est pour dupliquer des éléments au lieu de les copier-coller, ça facilite la répétition du contenu.
* Copier/Coller/Dupliquer (Copy/Duplicate/Paste): Permet de faire facilement une copie d'un élément ou un groupe d'élément, tu peux utiliser les habituels Ctrl C et Ctrl V pour ça.
* Convertir (Convert) : Transforme un calque en un composant réutilisable.
* Verrouiller (Lock) : Verrouille une couche pour éviter les modifications accidentelles.
* Effacer/Enlever (Clear/Remove): Efface les options d'un calque ou le supprime complètement.

Cliques sur les calques et fais les glisser pour en modifier l'ordre. Cela te permet de déplacer des éléments sur ta page ou de les placer à l'intérieur d'autres éléments pour créer une structure. Par exemple, tu peux faire glisser plusieurs boutons dans une div pour les regrouper.

## Le Panneau des Options

Sur la droite du Builder tu trouvera un panneau avec les options de Design, Settings et Advanced. C'est ici que tu pourras modifier l'apparence de tes éléments, leur positions, leurs conditions, les sources de données, etc.

### Marges Internes et Externes (Margins & Paddings)

Les marges internes (paddings) et les marges externes (margins) servent pour structurer et espacer les éléments de ta page web. Tu peux les utiliser sur les images, les div, le texte… Partout ! Ajustes les paramètres d'espacement et de marge en cliquant et en faisant glisser, ou en entrant une valeur spécifique manuellement. Double clique pour revenir aux options de remplissage prédéfinies. Maintiens ALT et fais glisser pour appliquer les valeurs en haut et en bas ou à gauche et à droite simultanément, ou maintiens MAJ pour les quatre côtés en même temps.  

Tu peux même utiliser des marges négatives pour faire se chevaucher des éléments ou de tirer un élément dans une direction spécifique (utilise de petites valeurs pour éviter de perturber le responsive). L'option 'margin auto' permet de centrer un élément mais nécessite qu'il ait une largeur définie (ne fonctionne pas avec les options d'affichage inline ou inline-block).

### Dimensionnement (Sizing)

Ajuste la taille des éléments à l'aide des propriétés width, height et boundary dans Divhunt pour des mises en page web responsive et de meilleure qualité.
![](divhunt-largeur.png)

La largeur fixe n'est pas toujours la meilleure approche, et tu devrais éviter de l'utiliser dans la plupart des cas parce qu'en changeant l'affichage vers tablette ou téléphone, ton design sera cassé. L'utilisation de la propriété max-width (Max W sur l'écran) est recommandée pour une meilleure adaptabilité à travers différentes tailles d'écran et éviter les ajustements manuels pour chaque point de rupture. Ajoute également 100% à width pour la largeur maximale respecte toujours la taille des petits écrans.

Tout en haut à droite du Builder à côté des flèches pour annuler et refaire l'action précédente, tu trouves sur la droite un bouton pour changer la taille de l'écran en pixels et pouvoir y vérifier l'affichage de tes éléments. Tu peux désactiver ou activer des fonctions ou des tailles d'écran différentes pour gérer le responsive.

https://global.divhunt.com/ab1b0b32c17baaaf240faa08840c5e63_20694.webp

max-width définit la largeur maximale à laquelle un élément peut s'étendre, ce qui l'empêche de devenir trop grand et de perturber la mise en page. Dans certains cas, comme lors de la création d'icônes qui doivent conserver une taille constante ou la formation d'un carré ou d'un cercle parfait, la définition d'une largeur et d'une hauteur fixes est essentielle pour s'assurer qu'elles apparaissent uniformément dans tous les viewports (appareils). 

https://global.divhunt.com/2026d859ce4d81daae7e5ac8c3d9b743_17030.webp
Min-width fonctionne à l'inverse, définissant la plus petite taille à laquelle l'élément peut se rétrécir, pour qu'il ne devient pas trop petit sur différents appareils ou tailles d'écran.
Pour la hauteur, nous laissons généralement les éléments la déterminer en fonction du contenu. Contrairement à la largeur, la hauteur fixe n'a généralement pas d'effet négatif sur la responsivité cependant.

### Ancrage (Positions)

Le positionnement CSS est un concept fondamental de la conception Web, qui permet aux concepteurs de placer les éléments précisément là où ils le souhaitent sur une page Web. Le langage web CSS permet de gérer toute la partie visuelle, quand le HTML permet de créer la structure (les div) en développement web. Pour le CSS, on utilise des propriétés pour choisir chaque option de design.
Chaque élément a une position par défaut sur la page appelée "statique". Dans cet état, l'élément suit le flux normal du document. C'est le réglage standard, tu n'as donc souvent pas besoin de l'ajuster.
https://global.divhunt.com/a58ee8deb0a46fbb375981dd6a61b9b2_3251.png

Le positionnement relatif revient à éloigner un élément de sa position d'origine. En réglant un élément sur la position relative, tu peux le déplacer vers la gauche, la droite, le haut ou le bas par rapport à l'endroit où il se trouverait normalement (relatif à sa position d'origine). Par exemple, le déplacement d'une carte de 50 pixels vers la droite par rapport à sa position statique démontre cet effet.
https://global.divhunt.com/7e032b874591e0aa00b2f9483571e76b_6642.png

Le positionnement absolu permet à un élément de s'affranchir du flux normal au niveau de toutes les directions. Règle d'abord l'élèment ancre par rapport auquel tu veux un positionnement absolu sur "relatif", ensuite l'élément secondaire sur absolu et ajuste ses valeurs en haut et à droite pour un positionnement précis.
https://global.divhunt.com/e6da011741e6c49b4d2e37137550f2ec_12839.png

Le positionnement fixe est utilisé pour les éléments qui restent en place pendant le défilement, comme les barres de navigation. Lorsqu'un élément est en position fixe, il est ancré à l'écran. L'ajustement de la valeur supérieure le positionnera à un point spécifique du haut de l'écran.
https://global.divhunt.com/8c43e7e927aed1e891c00303634cb97c_38546.gif

Le positionnement collant est un hybride de relatif et de fixe. Un élément se comporte normalement jusqu'à ce qu'il atteigne un point spécifié, après quoi il devient fixe. Par exemple, le fait de rendre un titre collant signifie qu'il défilera avec le contenu jusqu'à ce qu'il atteigne le haut de la fenêtre, puis qu'il restera en place.
https://global.divhunt.com/733c1e7c7f3991a503c0219519580088_117924.gif

## Flexbox

Flexbox est une propriété CSS qui permet de ranger nos contenants facilement à l'horizontale ou à la verticale. Il s'organise automatiquement et permet des mises en page responsive et adaptables, c'est une solution de choix pour la conception web moderne, mais un peu compliqué à prendre en main. Commence par paramétrer l'activation de Flexbox sur un conteneur, ce qui permettra d'aligner ses éléments enfants.
https://global.divhunt.com/acdcf5df7ee4299cbc7baa546750683b_13360.png

Contrôle la direction des éléments enfants avec :
- row (rangée): pour une orientation de gauche à droite
- row-reverse (rangée inversée) : de la droite vers la gauche
- column (colonne) : de haut en bas
- column-reverse (colonne inversée) : de bas en haut
https://global.divhunt.com/e2b770f7e3a3ebda16cb76e9793dad1e_11660.png

Utilise les propriétés d'alignement pour placer les éléments :
- align-items (éléments alignés) : pour l'alignement vertical (haut, centre, bas, étirement)
https://global.divhunt.com/d335e5e7d3719fac2adbf90fe2892a74_6205.png
- justify-content (éléments justifiés): pour l'alignement horizontal (début, centre, fin, espace entre les éléments, espace autour des éléments)

Ajuste l'espace entre les éléments en utilisant les espaces pour maintenir un espacement cohérent.
- row-gap (espace entre les rangées): définit l'espace entre les éléments verticalement
- column-gap (espace entre les colonnes) : définit l'espace entre les éléments horizontalement
https://global.divhunt.com/e8d5c98d3cee0c98aeb561351ea902f2_7504.png

Contrôle la réaction des éléments lorsqu'ils sont trop :
flex-wrap (envelopper les éléments) : empêche le surpeuplement, déplace les éléments sur la ligne suivante dans le conteneur lorsqu'il n'y a pas assez d'espace.
https://global.divhunt.com/4b6fc95bd53b62c7bdbcd5840720d703_4387.png

Propriétés Flex des éléments enfants : ces propriétés déterminent l'ampleur de l'expansion ou de la contraction d'un élément enfant par rapport à l'espace disponible dans le conteneur.
- flex-grow : Cette propriété définit de combien un enfant doit s'agrandir par rapport aux autres s'il y a de l'espace supplémentaire dans le conteneur. Par exemple, une valeur de flex-grow de 2 signifie que l'élément s'agrandira deux fois plus qu'un élément dont la valeur de flex-grow est de 1.
- flex-shrink : Cette propriété détermine de combien un article flex doit se rétrécir par rapport aux autres articles lorsqu'il n'y a pas assez d'espace. Une valeur de 1 signifie que l'élément se rétrécit à un rythme égal à celui des autres éléments.
- flex-basis : Cette propriété définit la taille principale initiale d'un élément flex avant que l'espace disponible ne soit distribué. Elle peut être définie sur une largeur, une hauteur ou une taille de contenu spécifique, et elle détermine la taille par défaut de l'élément avant l'application de flex-grow ou flex-shrink.
- Order : réorganise l'ordre des éléments enfants avec la propriété order, et aligne-les individuellement avec self-align, en remplaçant les paramètres d'alignement par défaut du conteneur.
`display: Flex` tells a container to follow flex rules.
Flex items can flow as rows or columns.

🎯 Controlling Flex Item Direction [00:26 - 01:08]
Items can flow as rows (left to right) or columns (top to bottom).
`direction: row-reverse` reverses the flow from right to left.
`direction: column` and `direction: column-reverse` change the flow vertically.

🔧 Aligning Flex Items [01:08 - 01:55]
Vertical alignment options include `start`, `center`, `end`, and `stretch`.
Horizontal alignment options include `start`, `center`, `end`, and `stretch`.
Combining vertical and horizontal alignment options can center items perfectly.

🛠️ Additional Flexbox Options [01:55 - 02:30]
`justify-content: space-between` pushes the first and last items to the edges.
`justify-content: space-around` distributes the remaining space evenly.
`justify-content: space-around` gives each item a personal space on all sides.

🔧 Aligning a Button to the Bottom of a Container [02:30 - 02:56]
Set `margin-top: auto` on the button to push it to the bottom.
This allows the remaining content to be pushed to the top.

🌐 Column and Row Gap [02:56 - 03:24]
`column-gap` sets the gap between items in a column.
`row-gap` sets the gap between rows.
These properties help create a more visually appealing layout.

🌄 Wrapping with Flexbox [03:24 - 03:52]
`flex-wrap: wrap` allows items to wrap onto new rows when there's no space.
This is useful for creating responsive layouts.

🔄 Sizing with Flexbox [03:52 - 04:59]
`flex-shrink` controls how much an item shrinks when there's limited space.
`flex-grow` controls how much an item grows when there's extra space.
`flex` sets an element to be flexible, allowing it to grow and shrink.

🔢 Ordering Flex Items [04:59 - 06:08]
`order: auto` automatically aligns items within a container.
`order` can be manually set to control the order of items.
Items with higher `order` values appear later in the layout.

🎯 Self-Alignment with Flexbox [06:08 - 06:34]
`align-self` allows separate control of the alignment of individual items.
`align-self: auto` makes an item follow the direction of its parent.
Other options include `flex-start`, `center`, `flex-end`, `stretch`, and `baseline`.


## Boucles

Apprends à utiliser le champ de boucle dans Divhunt pour dupliquer rapidement des éléments, pour des mises à jour homogènes et une gestion facile. La fonctionnalité loop te permet de répéter des éléments plusieurs fois sans avoir à les copier et les coller manuellement. Cette fonction est particulièrement utile !

Pour l'utiliser clique avec le bouton droit de la souris sur l'élément que tu veux mettre en boucle et saisis le nombre de fois que tu veux dupliquer/boucler cet élément dans le champ "loop".

Tu ne verras pas 10 cartes d'éléments distinctes dans le panneau des calques. À la place, tu verras une petite étiquette indiquant que la feature card est dupliquée 10 fois (x10), ça rend les choses bien plus lisibles.

Si tu modifies le parent (l'élément original), ces modifications s'appliqueront à tous les éléments dupliqués, à moins que tu n'aies apporté des modifications individuelles à certains des éléments dupliqués séparément.

Si tu veux modifier des éléments en boucle enfants pour qu'ils soient différents de l'original, tu devras utiliser des classes ou des sélecteurs CSS comme nth-child. Les modifier directement sur le canevas appliquera les changements à tous les autres éléments de la boucle. Tu ne peux modifier le contenu, comme le texte et les images, que séparément sur chacun d'entre eux.

## How to Format a Date

Lorsque tu travailles avec des dates dans la plupart des cas, y compris dans le CMS DivHunt et dans la plupart des API REST de tiers, tu obtiendras une date au format "ISO 8601" qui ressemble à ceci : 2025-06-11T10:59:36.

Avec Divhunt, tu peux formater les dates de manière native en utilisant la fonction date. Et en lui donnant le format souhaité.

Pour l'instant, cette fonction est très limitée, elle ne te propose que des options pour afficher le jour, le mois et l'année. Si tu as besoin de paramètres plus avancés, tu peux utiliser le plugin Moment.js pour formater tes dates.

Sur la capture d'écran ci-dessous, tu peux voir que nous avons utilisé la fonction "date(D M, Y)" , qui nous renvoie le format "10 janvier 2025".
- D représente un jour (nombre)
- M représente un mois (chaîne de caractères)
- Y représente une année (nombre)
- Tu peux utiliser des caractères entre les deux, dans mon cas j'ai utilisé une virgule (,) après le nom d'un mois.
https://global.divhunt.com/1266736214722214576b7e38dc44f226_33193.png

## Mettre en place des Redirections 301

Les redirections 301 servent à diriger de façon transparente les visiteurs des pages anciennes ou manquantes vers de nouvelles. C'est important de les implémenter pour les moteurs de recherche et les internautes.

Depuis le tableau de bord, va dans les paramètres du projet, ou accède aux paramètres du projet depuis le constructeur. Trouve et clique sur l'onglet "Redirections" sous les paramètres généraux. Tape l'ancien chemin dans le champ "Ancien chemin" et le nouveau chemin dans le champ "Rediriger vers". Clique sur le bouton "Ajouter une redirection" pour créer la redirection.
Redirections appliquées
Une fois la redirection ajoutée, tu verras les redirections appliquées listées sous les champs de saisie.
Chaque redirection appliquée indique l'ancien chemin et le nouveau chemin vers lequel elle redirige.
À côté de chaque redirection appliquée, il y a un bouton "Supprimer" pour supprimer la redirection si nécessaire.

## La Fonctionnalité Source

**Source** fait référence aux données dynamiques qui peuvent être appliquées aux éléments d'une page web ou à la page entière, en répondant à tes besoins spécifiques. Ces données proviennent souvent de systèmes de gestion de contenu (CMS), d'API REST ou d'autres sources similaires.

Prenons l'exemple d'un blog créé avec Divhunt. Avec un CMS intégré ou un CMS tiers connecté via une API REST, le système obtient l'accès aux données qui peuvent être affichées sur le site Web.

Pour illustrer, imagine que nous ayons 15 articles de blog. Deux pages sont nécessaires : une page de liste et une page de blog unique. **L'application de la source à un élément** consiste à choisir un élément - comme une carte affichant un titre, une image et un bref résumé - et à lui attribuer la source (par exemple, "Blogs"). Une fois appliqué, Divhunt reproduit cet élément pour chaque article de blog trouvé dans la Source, affichant ainsi les 15 articles de blog sur la page d'inscription.

De plus, lors de **l'application de la source à une page**, il est essentiel que la source récupère des données pour un seul élément spécifique, et non pour tous les éléments. Par exemple, lorsqu'un utilisateur visite yourwebsite.com/blog/awesome-post, la source ne doit récupérer que les données relatives à "awesome-post" et non les 15 articles. Cela permet de s'assurer que le contenu affiché reste pertinent par rapport à l'URL spécifique à laquelle l'utilisateur accède.

### Connecter des données à un élément

Page de liste des blogs : Cette page affiche les 15 articles du blog. Les utilisateurs peuvent cliquer sur chaque article pour en savoir plus.
Sur la page de liste des blogs, nous devons afficher tous nos articles de blog. Pour ce faire, tu choisis d'abord un élément qui représentera un seul article de blog, comme une carte qui affiche le titre, l'image et un bref résumé. Ensuite, tu appliques la Source (dans notre cas, "Blogs") à cet élément. Cela indique à Divhunt d'utiliser les données de notre Source.

Lorsque la Source est appliquée, Divhunt dupliquera automatiquement cet élément pour chaque article de blog dans la Source. Ainsi, si tu as 15 articles de blog, tu verras 15 copies de cet élément sur ta page.

Maintenant que nous avons appliqué la Source à cet élément, l'élément et tous ses enfants ont accès à ces données et sont prêts à être connectés. Toutes les données reçues de la Source sont stockées dans la variable "Valeur". Tu peux utiliser cette variable pour connecter des champs tels que le titre, l'image de couverture, la description, etc.
### Appliquer la source à une page

Page de blog unique : Cette page affichera les informations complètes de l'article de blog spécifique.
Nous devons appliquer la Source à notre page d'affichage et définir une variable dynamique dans notre URL, cette page tirera les données de l'article actuel en fonction du slug et stockera ces données dans la variable Page sous l'objet Data.

Pour appliquer la source à une page entière, nous devons nous assurer que la source récupère les données d'un seul élément spécifique, et non de tous les éléments.
https://global.divhunt.com/dd34940817a765e1b52070876bdd3d33_24592.png
Par exemple, si nous affichons un seul article de blog, la source ne doit récupérer que les données de cet article particulier en fonction de l'URL de la page. Par exemple, si un utilisateur visite yourwebsite.com/blog/awesome-post, la source ne doit récupérer que les données relatives à "awesome-post", et non les 15 articles du blog. De cette façon, le contenu affiché sur la page correspond à l'URL spécifique que l'utilisateur visite.
https://global.divhunt.com/5fdb6fecf839828064c79a959d53ccde_20335.png

Récupérer le bon article via l'URL :
Lorsque tu travailles avec Divhunt CMS, cela fonctionnera d'emblée, sans aucune configuration nécessaire, Divhunt saura exactement quel article extraire en fonction du slug.

Dans les paramètres de l'itinéraire, nous devons indiquer à Divhunt quelle partie de l'URL est dynamique. Dans la capture d'écran ci-dessous, nous avons défini la route comme étant "/post/". Cela indique à Divhunt que la partie slug de l'URL est dynamique, et il l'utilisera pour charger les données spécifiques en conséquence.

Les données sont connectées !

![](divhunt-source.png)

## Invite des Collaborateurs aux Projets

Apprends à inviter des collaborateurs à ton projet Divhunt, à leur attribuer des rôles et à gérer leur accès par le biais des paramètres du projet.

Depuis le tableau de bord, va dans les paramètres du projet, ou accède aux paramètres du projet depuis le constructeur. Trouve l'onglet "Collaborateurs" et clique dessus, saisis l'email du collaborateur dans le champ email. Attribue un rôle au collaborateur parmi les options disponibles. Clique sur le bouton "Ajouter un collaborateur" pour envoyer l'invitation.

Une fois ajouté, le collaborateur verra le projet apparaître dans son tableau de bord Divhunt sous sa page "Projets".
Il peut alors accéder au projet et commencer à collaborer.
À côté de chaque collaborateur ajouté, il y a un bouton "Supprimer" pour le retirer si nécessaire.

## Les Variables

Apprends à gérer les données dynamiques dans Divhunt à l'aide d'un système unifié de partage des variables, à travers diverses fonctionnalités, notamment le CMS, l'API REST, et les futures intégrations comme le e-commerce. Cela signifie que partout où tu travailles le processus est le même.

Tu peux utiliser les variables presque partout, sauf dans l'onglet designer (stylisme). Les variables peuvent être appliquées à de nombreux éléments, tels que le contenu textuel, les images, les attributs, la visibilité conditionnelle, les paramètres de référencement, le code personnalisé, etc. Dans la plupart des zones où des variables peuvent être appliquées, tu verras une petite icône "Définir une variable" en haut à droite. En cliquant sur cette icône, tu ouvriras une fenêtre contextuelle avec toutes les variables disponibles.
https://global.divhunt.com/3a4afb7027d47dc4d3d6d1cd7cde3c33_13384.png

Les variables dans Divhunt sont divisées en trois catégories : Personnalisé, Page et Système.
https://global.divhunt.com/0bc212863968ee500570ba8d5b35c150_33373.png
Personnalisé : Cette catégorie comprend les données provenant d'une Source ou d'un Iterable appliqué à un élément sélectionné ou à un élément parent.
	- Source : Lorsque tu ajoutes une Source à un élément spécifique, tel qu'un "article de blog", les données de cet article sont stockées dans la variable "Valeur". Tu peux ensuite connecter des données à partir de là.
	- Iterable : Lorsque tu utilises la fonctionnalité Iterable, il te sera demandé de saisir une clé. Par exemple, si nous listons des catégories, nous utiliserons le nom de clé "catégorie". Dans nos variables, nous aurons une variable "Catégorie" où toutes les données d'Iterable seront stockées.

Page :
- Par défaut :  Par défaut, dans la variable Page, tu peux trouver les données de cette page telles que la route, le titre, le seo et plus encore au cas où tu aurais besoin de les afficher sur la page.
- Data : Lorsque tu définis une Source sur une page spécifique, tu indiques à Divhunt que cette page affichera des données dynamiques. Ces données sont stockées dans cette variable. Le contenu de cette variable dépendra des paramètres de l'URL, tels qu'un slug ou un ID. Cela permet à la page d'afficher dynamiquement des données en fonction des paramètres URL fournis. Pour en savoir plus sur la source, clique ici.

Système : Par défaut, tu as accès à plusieurs variables globales fournies par Divhunt, que tu peux utiliser de manière créative. Par exemple, la variable Request stocke des données sur l'utilisateur qui accède à ton site Web, comme son navigateur, son adresse IP et s'il s'agit d'un bot. En utilisant la visibilité conditionnelle, tu peux choisir de cacher des informations spécifiques ou même l'intégralité du site Web à certains utilisateurs, adresses IP, lieux, et plus encore.

Comment appliquer des variables ? Sélectionne une balise de texte, par exemple le titre, ouvre le panneau d'options et va dans paramètres dans la barre latérale droite. Dans le coin supérieur droit de la zone de texte du contenu, clique sur l'icône violette "Définir une variable". Ouvre le menu déroulant "Valeur" et sélectionne le texte que tu veux récupérer pour cet endroit précis.
Balises d'images et de vidéos

Une fois que tu as une variable, tu peux utiliser des fonctions pour manipuler les données. Par exemple, tu peux mettre en forme des dates, raccourcir du texte, afficher la longueur du texte, calculer le temps de lecture, et bien d'autres choses encore !

Divhunt est livré avec de nombreuses fonctions intégrées par défaut comme la génération de slugs, le formatage des dates, le remplacement de caractères, et plus encore.
https://global.divhunt.com/7e87c0b8a06af5f1b1b9ee7ea6db9a4b_48598.png

Si tu es un développeur JavaScript, tu n'as pas besoin de te fier uniquement aux fonctions par défaut proposées par Divhunt ; tu peux créer les tiennes, regarde la vidéo de DivHunt à propos des variables :

- Appelle une fonction : Après avoir sélectionné une variable, tu vas appeler une fonction. Dans la capture d'écran ci-dessous, nous appelons la fonction personnalisée 'custom-date-format' après avoir sélectionné une date (data->created).
- Crée un fichier portant exactement le même nom "custom-date-format" avec l'extension "Function".
- Maintenant, à l'intérieur de ce fichier, tu as accès aux données de la variable qui a été appelée juste avant notre fonction. Ces données sont stockées dans la variable 'data.value'.
- Utilise cette variable et le javascript pour faire ce que tu veux avec le contenu, dans notre cas pour formater la date.
- La dernière ligne de ton code doit être un retour. Ce que tu as en retour sera affiché sur une page.  (Capture d'écran 2 - exemple d'une fonction avec l'utilisation de data.value et de l'instruction return).
https://global.divhunt.com/9a7f4ae6c758525dea404524c79db512_36959.png
https://global.divhunt.com/524dc8e6c6c5562cfc191cba169e582f_21209.png

Pour écrire des variables à la main (si nécessaire d'ajouter du texte à côté par exemple) : ${page→get('data')->get('name')}

Créer une fonction qui affiche le temps de lecture d'un article : [Lien](https://youtu.be/PHk11h6p4hU?t=820)
## Paramètres Globaux de Référencement

Apprends à configurer les paramètres SEO globaux dans Divhunt, notamment les métadonnées, Open Graph, sitemap et robots.txt, pour optimiser la visibilité de ton site Web et contrôler les interactions avec les moteurs de recherche.

Divhunt prend en charge toutes les balises de texte HTML pour un contrôle complet du référencement. Tu peux accéder à toutes les balises en utilisant la fenêtre modale CTRL + E / CMD + E, où tu trouveras des balises comme strong, em, blockquote, et plus encore.

Divhunt te permet de définir des paramètres SEO globaux dans les paramètres du projet. Ces paramètres fournissent des valeurs par défaut pour chaque nouvelle page créée et contrôlent les aspects SEO au niveau du site.

### Paramètres Généraux
Description : Il s'agit de la description par défaut utilisée comme méta et description Open Graph (OG) si elle n'est pas remplacée dans les paramètres de la page. Elle fournit un résumé du contenu de ta page. Saisis une description concise et attrayante qui résume avec précision ton site Web ou ton entreprise. Maintiens-la entre 100 et 160 caractères pour obtenir les meilleurs résultats. Cela permet de s'assurer que ta description est entièrement visible dans les résultats des moteurs de recherche.
Image OG : Il s'agit de la vignette par défaut qui s'affiche lorsque le site Web est partagé sur les médias sociaux. Chaque page peut définir sa propre image OG, mais tu peux en définir une par défaut ici pour assurer une représentation visuelle cohérente.
Utilise une image d'une résolution de 1200x630 pixels et d'une taille ne dépassant pas 1 Mo. Ces paramètres sont utilisés par défaut pour les nouvelles pages. Tu peux les modifier dans les paramètres de chaque page.

### Paramètres du Plan du Site
Les sitemaps aident les moteurs de recherche à découvrir et à indexer les pages de ton site. Dans Divhunt, tu peux configurer les pages et les collections qui doivent être incluses dans le sitemap.

Pages
- Bascule pour inclure ou exclure toutes les pages dont l'indexation est définie sur true dans le sitemap.
- Active la bascule pour t'assurer que toutes les pages importantes sont incluses dans le sitemap.
- En activant cette option, tu t'assures que toutes tes pages importantes sont indexées par les moteurs de recherche, ce qui améliore la visibilité de ton site.
Collections
- Bascule pour inclure des collections spécifiques dans le plan du site. Les collections sont des groupes d'éléments similaires, comme des articles de blog ou des listes de produits.
- Active la bascule pour chaque collection que tu veux que les moteurs de recherche indexent.
- Inclus les collections qui sont importantes pour le référencement de ton site afin de t'assurer qu'elles sont indexées par les moteurs de recherche.
Plan du site personnalisé
- Modifie manuellement le plan du site pour les utilisateurs avancés qui ont besoin d'inclure des liens provenant d'un CMS tiers.
- Clique pour modifier et ajouter ou supprimer manuellement des liens dans le plan du site.
- Ne modifie manuellement que si tu as de l'expérience. Des erreurs peuvent empêcher ton site d'être indexé correctement.
- L'ajustement du sitemap permet de contrôler le contenu que les moteurs de recherche peuvent découvrir et indexer.

### Paramètres du fichier robots.txt
Le fichier robots.txt indique aux robots des moteurs de recherche les pages qu'ils peuvent ou ne peuvent pas explorer sur ton site. Une configuration correcte de robots.txt permet de guider les robots des moteurs de recherche sur les pages à explorer et à indexer.

- User-agent : Définit le robot d'exploration du web auquel la règle s'applique.
Exemple : 'User-agent : Bingbot' applique la règle au robot d'exploration de Bing.

- Disallow : Bloque les robots d'indexation pour qu'ils n'accèdent pas à des parties spécifiques du site.
Example: 'Disallow: /private' prevents crawlers from accessing any URL that starts with /private.

- Allow : Permet aux robots d'indexation d'accéder à des parties spécifiques du site, même au sein d'un répertoire parent interdit.
Example: 'Allow: /public' permet aux robots d'indexation d'accéder à toute URL commençant par /.public.

- Crawl-delay : Spécifie le nombre de secondes qu'un crawler doit attendre entre les requêtes au serveur.
Example: 'Crawl-delay: 10' tells crawlers to wait 10 seconds between requests.

- Host : Spécifie le domaine préféré pour le site. Utile pour les sites avec plusieurs domaines.
Example: 'Host: www.example.com'

- Sitemap : Spécifie l'emplacement du ou des sitemap(s) pour le site.
Example: 'Sitemap: https://www.example.com/sitemap.xml'

## Paramètres de Référencement des Pages

Google et les autres moteurs de recherche peuvent prendre quelques jours à plusieurs semaines pour indexer tes modifications, alors sois patient, mais ils visitent ton contenu et l'optimisation de ta page pour les moteurs de recherche est cruciale pour la visibilité et le trafic. Divhunt facilite la gestion des paramètres de référencement de ta page :

1. Clique avec le bouton droit de la souris sur la page dans la barre latérale Pages et clique sur "Paramètres"
https://global.divhunt.com/8fbc557430ebf586a751dff3212b1b4d_6642.webp

Paramètres des métadonnées :
- Dans le champ "Titre", saisis un titre bref et pertinent pour ta page. Ce titre apparaît comme le principal lien cliquable dans les résultats des moteurs de recherche et dans la barre de titre du navigateur. Ne dépasse pas 60 caractères pour obtenir les meilleurs résultats.
- Dans le champ "Description", fournis un extrait court et engageant qui décrit le contenu de la page. Il apparaîtra sous le titre dans les résultats des moteurs de recherche. Les descriptions doivent comporter entre 100 et 160 caractères.

Paramètres Open Graph :
- Titre : C'est le nom de ta page web lorsqu'elle est partagée sur des sites de médias sociaux comme Facebook ou Twitter. Veille à ce qu'il ne dépasse pas 60 caractères pour qu'il soit bien présenté lorsqu'il est partagé. Si tu ne le remplis pas, il utilisera le "Titre" de tes paramètres de métadonnées.
- Description : Il s'agit d'un court résumé de ta page qui apparaît avec le titre lorsque ta page est partagée. Garde-le entre 100 et 160 caractères pour qu'il soit clair et concis. Si tu ne le remplis pas, il utilisera la "Description" de tes paramètres de métadonnées.
- Image : Il s'agit de l'image qui apparaît lorsque ta page est partagée sur les médias sociaux. Utilise une image d'une résolution de 1200x630 pixels et d'une taille ne dépassant pas 1 Mo. Si tu ne choisis pas d'image, il utilisera l'image du projet par défaut.
- Type : Cela indique aux plateformes de médias sociaux le type de contenu de ta page, comme un site Web, un article ou une vidéo. Choisis le type qui correspond le mieux à ton contenu pour aider les plateformes de médias sociaux à mieux le comprendre.
- URL : Il s'agit de l'adresse Web à laquelle les internautes accèdent lorsqu'ils cliquent sur ton contenu partagé. Si tu ne définis pas cette adresse, l'URL de la page sera utilisée.

Paramètres d'indexation : 
- URL canonique : Saisis l'URL complète de la version préférée de ta page. Cela aide les moteurs de recherche à comprendre quelle version d'une page indexer lorsqu'il y a plusieurs versions avec un contenu similaire. Ne remplis l'URL canonique que si tu as plusieurs versions d'une page pour éviter les problèmes de contenu dupliqué.

Robots : Donne des instructions aux robots des moteurs de recherche sur la façon dont ils doivent interagir avec ta page.
- Indexer, suivre : Indexe la page et suit ses liens.
- Indexer, Nofollow : Indexer la page mais ne pas suivre ses liens.
- Noindex, Follow : Ne pas indexer la page mais suivre ses liens.
- Noindex, Nofollow : Ne pas indexer la page et ne pas suivre ses liens.

## Conclusion
Avec Divhunt, tes possibilités de conception sont illimitées. Prends une div et transforme-la en séparateur personnalisé ou même en forme de cercle en utilisant juste un peu de magie CSS ✨🎉

Rejoins-nous dans nos tutoriels, et explorons ensemble les possibilités infinies de DivHunt et des autres logiciels 🌟🎈

Bon codage, chers développeurs ! 🤓⌨️🖱️

## Optimisation et Visibilité

### Référencement Naturel
- [Guide SEO Complet](/seo)
- [Fondamentaux du SEO](/seo/fondamentaux/bases-seo)
- [Checklist SEO](/seo/guides/checklist)
- [Bonnes pratiques SEO](/seo/fondamentaux/bonnes-pratiques)
