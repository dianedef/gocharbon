---
section: apps
metadataEnrichedAt: null
tags:
- Outils
u_site: null
title: Apprendre Davinci Resolve Pour Youtube
author: Diane
description: 'Découvre Apprendre Davinci Resolve Pour Youtube : outil français pour
  entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

N'oublie pas ces astuces pratiques qui peuvent considérablement faciliter ton expérience avec DaVinci Resolve. De la gestion de projet à la personnalisation de l'interface, en passant par des conseils de couleur avancés, ces astuces peuvent faire la différence entre une séance de montage ordinaire et une expérience fluide et productive. Prends le temps de les intégrer dans ta pratique quotidienne, et tu verras une amélioration significative dans la fluidité de ton travail avec DaVinci Resolve. Amuse-toi bien à créer !

### Edition & manip

W = Couper et supprimer jusqu'à la coupe gauche précédente (START TO PLAYHEAD)
X = Couper (SPLIT)
C = Couper et supprimer jusqu'à la coupe droite suivante (END TO PLAYHEAD )
DELETE = Supprimer et avancer le clip suivant (RIPPLE DELETE)
ALT + HAUT/BAS = Monter/descendre d'une piste la sélection
CTRL + I = Importer des fichiers
CTRL + Z = Défaire
CTRL + MAJ + Z = Refaire
ALT + UP = Remonter le clip
Insérer
Trim Edit Mode
MAJ + UP & DOWN = Naviguer entre les marqueurs
N = Snapping
? = Link Selection
= Vitesse du clip
R = Retime control
CTRL + R= Reset la vitesse
CTRL + MAJ + R = Retime curve

MAJ + Z = Full timeline
= Créer compound clip
= Entrer le compound clip
CTRL + MAJ + E = Décomposer le clip
= Find in media pool
Tab = 
MAJ = TAB
² = Fullscreen
= Loop
MAJ + ESPACE = Play between outpoints

MAJ + C = Curve editor
CTRL + MAJ + C = Keyframe editor

CTRL + X = Attributs
CTRL + MAJ + X = Retirer tous les attributs

H = Show selected timeline in the mediapool

Y = Sélectionner la droite du playhead
CTRL + Y = Sélectionner la gauche du playhead

MAJ + T = Switch on/off Fusion effects
### Prévisualisations (Source Viewer Controls) 

3 points Bouton en haut 
* Gang viewer = Synchroniser les deux têtes de lecture
	* Cela laisse la possibilité de créer des In & Outs de la même longueur par exemple
	* Attention, ça ne fonctionne que si les deux clips ont le même nombre d'images par seconde
* Live Media Preview = Affiche la prévisualisation des clips du Media Pool directement au survol
* Show all frames = Chaque image sera affichée, et priorisée par rapport au son s'il y a un problème de ressources processeur
* Show Zoomed Audio Wave Form = Affiche l'onde sonore en gros plan sous le clip
* Show marker overlay = Montre en surimpression la description des marqueurs lorsqu'il y en a


🎬 Utilisation de l'outil Dynamic Trim Mode dans DaVinci Resolve 18.1

[DaVinci Resolve Tutorial: How to Use the Dynamic Trim Mode Tool - YouTube](https://www.youtube.com/watch?v=XRM9-56QwbI)

Activation du mode Dynamic Trim et observation des modifications sur les clips vidéo.

 🔄 Déplacement horizontal avec Dynamic Trim Mode

  - Activation du Dynamic Trim Mode avec le mode de sélection et d'édition de trim.
  
  - Déplacement horizontal du clip sélectionné en utilisant les touches J et L.
  - Comparaison entre les modes "Slip" et "Slide" dans Dynamic Trim Mode.
  - Utilisation du mode "Slip" pour déplacer le contenu horizontal du clip sélectionné.
  - Utilisation du mode "Slide" pour déplacer l'ensemble du clip sans créer de vide entre les clips adjacents.
  - Démonstration des variations en déplaçant vers la gauche (J) et vers la droite (L).
### - Audio checklist
1. Fading the audio
2. Pan
3. Pitch
4. égaliseur
5. Fairlight → Dynamics → Compressor
6. Effects
7. Noise reduction
8. Normalize the audio 
9. Add busses and route tracks https://youtu.be/uD7r2lWStPc?t=458
10. Sound cinematic : Duplicate audio and make it - 1 cent pitch or -7 semitone and quieter
11. Duck audio https://youtu.be/uD7r2lWStPc?t=731
12. Automations https://youtu.be/uD7r2lWStPc?t=566
13. Voir les décibels, ils doivent pas aller en zone rouge
14. Click on equalizer and enable itInter
#### Comment faire un fondu audio

##### Fondu Audio avec poignées audio : Effet de fondu-enchaîné manuel

Cette méthode pour effectuer un fondu audio dans DaVinci Resolve est destinée à ceux qui veulent passer moins de temps à faire du montage et qui souhaitent réaliser une vidéo de bonne qualité avec un bel effet de fondu en entrée ou en sortie. Elle se fait manuellement sur la Timeline ; rapide et facile sans avoir besoin de plonger dans de nombreux paramètres.

Si tu passes la souris sur le clip audio, deux poignées de fondu blanches apparaîtront dans les coins supérieurs du clip.
Sélectionne celle qui se trouve à la fin avec un clic gauche et fais-la glisser vers l'arrière. Tu peux faire la même chose pour un fondu d'entrée.
Tu verras que le clip audio fait une ligne pour montrer le fondu. Tu peux faire glisser les poignées audio pour régler la durée de l'effet de fondu.
Lorsque tu fais glisser la poignée audio, tu peux la faire glisser de haut en bas pour ajuster la courbure du fondu. Cela modifiera la lenteur ou la rapidité de l'effet de fondu.
Prévisualise le clip et fais les ajustements nécessaires.

Les avantages de cette méthode sont qu'elle est simple et rapide. Il te suffit de déplacer les poignées de fondu à la position souhaitée, et le tour est joué !
Mais il y a aussi des inconvénients. Tu ne peux pas régler des paramètres de volume et de durée plus spécifiques, donc tu ne peux pas avoir les mêmes réglages sur différents clips audio. De plus, tu ne peux ajouter un fondu qu'au début ou à la fin du clip.

##### Fondu audio à l'aide d'images clés

L'ajout d'une image clé dans notre clip audio nous permettra de créer correctement des fondus audio avec plus de contrôle sur le temps, la forme de la courbure et les points de départ et d'arrivée. Pour ce faire, nous créons des marqueurs de fondu sur le clip, que nous pouvons ajuster manuellement ou dans l'écran des paramètres.
Nous allons travailler sur le contrôle du volume, la fine ligne au milieu qui traverse le clip audio. En faisant glisser cette ligne vers le haut et le bas, tu régleras le volume, mais il changera tout au long du clip. Pour le modifier dans une section spécifique, nous utiliserons des images clés. Suis les étapes suivantes pour créer un fondu audio à l'aide d'images clés.

1. Passe la souris sur la ligne fine à l'endroit où tu veux ajouter l'effet de fondu. Elle peut se trouver au début, au milieu ou à la fin du clip.
2. Appuie sur Alt + Click sous Windows (Option + Click sous Mac) pour créer une image clé sur le clip. Tu peux créer plusieurs images clés, mais elles doivent être au moins deux.
3. Place la première image clé à l'endroit où tu veux que ton audio commence à s'estomper et la seconde plus près de la fin.
4. Clique sur la deuxième image clé et déplace-la vers la gauche et la droite pour la durée et vers le haut et le bas pour le volume. Si tu crées plusieurs images clés, tu peux ajuster chacune d'entre elles pour obtenir un fondu plus personnalisé.
5. Si tu veux encore plus de contrôle, tu peux aller dans l'onglet Inspecteur pour ouvrir la fenêtre Inspecteur, où tu peux régler manuellement le volume avec le curseur ou taper le dB désiré.
6. Tu peux ajouter des images clés supplémentaires à partir de la fenêtre Inspecteur si tu cliques sur le bouton en forme de losange à côté de Volume du clip. L'image clé apparaîtra à l'endroit où se trouve la tête de lecture sur la ligne de temps. Tu peux d'abord la régler, puis ajouter l'image clé à partir de l'inspecteur.
7. Prévisualise ton audio et modifie les paramètres jusqu'à ce que le résultat te plaise.

##### Effets de fondu enchaîné : Réglages prédéfinis prêts à l'emploi

La troisième méthode pour effectuer un fondu audio dans DaVinci Resolve est un moyen automatique d'ajouter des transitions de fondu sortant et de fondu entrant. Les paramètres des effets Crossfades sont prédéfinis, mais tu peux les ajuster dans l'onglet Inspecteur. Maintenant, ajoutons le fondu enchaîné.

1. Importe ta piste audio ou sélectionne-en une dans ton projet.
2. Va dans la bibliothèque d'effets et sélectionne Transition audio dans la boîte à outils.
3. Tu verras trois types de fondu enchaîné : Fondu enchaîné +3 dB, Fondu enchaîné -3 dB et Fondu enchaîné 0 dB.
4. Sélectionne-en un et fais-le glisser à l'endroit où tu veux faire un fondu audio.
5. Tu peux faire glisser l'effet Crossfade pour modifier la longueur et le volume ou cliquer dessus pour ouvrir la fenêtre de l'inspecteur afin d'effectuer d'autres réglages.
6. À partir de l'inspecteur, tu peux modifier manuellement la durée, l'alignement, le style de transition et le volume en dB.
7. Prévisualise ta piste audio.
### Fairlight

ADR (Remplacement automatique des dialogues) dans DaVinci Resolve 17 | Comment utiliser ADR dans DaVinci Resolve - YouTube
Clic droit 'onde statique' → Elastic wave, la vitesse s'adapte à la taille du clip, you can drag them to move the wave
Add a keyframe : Ctrl + Clic

#### Synchroniser audio et musique
[How to REMOVE Green Screen in Davinci Resolve 18 (Tutorial) - YouTube](https://www.youtube.com/watch?v=zeXtLEcordY&lc=Ugy7MYhAOJAl_o6kSkJ4AaABAg)  
[Davinci Resolve : Synchroniser une vidéo sur le rythme de la musique - YouTube](https://www.youtube.com/watch?v=eZeqG1RcB6w)  
[DaVinci Resolve 18.1 : remonter une musique grâce à la grille de tempo⎟Tuto DaVinci Resolve - YouTube](https://www.youtube.com/watch?v=eAPyIEB-Y1A)

### smart bins ?


### Must have settings

Preferences > User > Project Save and Load
=> Check off the box next to “Live Save“
=> “Project Backups”, there are three boxes you can change the time.


## Les meilleurs workflow
source : [These Editing Tips Will Save You HOURS in Resolve - YouTube](https://www.youtube.com/watch?v=EF_Wysanmn0&t=70s)
## Astuce 1 : Empiler ses clips et ses Timelines

Lorsque j'importe des séquences, je crée trois lignes de temps distinctes : 
* une pour toutes mes séquences brutes (dérushage)
* une autre pour les sélections
* la dernière pour la vidéo finale
En choisissant méticuleusement et en déplaçant les clips préférés vers des pistes plus élevées, je peux organiser et rationaliser efficacement le processus de sélection. La magie opère lorsque j'empile les timelines, ce qui me permet de faire glisser et de déposer des clips sans effort. Cette méthode permet non seulement d'accélérer le processus de montage, mais aussi d'améliorer l'organisation générale du projet, en facilitant la navigation dans les séquences.

## Astuce 2 : Accélérer le découpage des clips avec les raccourcis clavier

Voici mon astuce de montage préférée, une technique deux en un qui m'a fait gagner un nombre incalculable d'heures au fil des ans. En personnalisant les raccourcis clavier pour les commandes "Split Clip" et "Ripple Delete", je peux rapidement découper des clips plus longs, en supprimant les sections non désirées sans laisser d'espace sur la ligne de temps. Pour les clips plus courts, comme le rouleau B, j'utilise les commandes "Start to Playhead" et "End to Playhead". Ces raccourcis clavier, réglés sur des touches pratiques, me permettent de couper et d'enclencher des clips de façon transparente, ce qui accélère considérablement le processus de montage. Avec ces techniques, tu peux découper tes clips dix fois plus vite et devenir un monteur plus efficace.

## Astuce bonus : Optimiser les mouvements de la tête de lecture

Pour améliorer encore ta vitesse de montage, pense à personnaliser les raccourcis clavier pour "Commencer à la tête de lecture" et "Finir à la tête de lecture". Ces commandes te permettent de découper précisément tes clips, en garantissant une ligne de temps fluide et sans décalage. Grâce à une disposition stratégique des raccourcis clavier, tu peux effectuer ces actions d'une seule main, ce qui simplifie l'ensemble du processus de découpage et fait de toi un monteur plus rapide et plus agile.

## Conclusion

En conclusion, ces astuces de montage, nées de mon passage de Premiere Pro à DaVinci Resolve, se sont révélées inestimables pour gagner du temps et économiser des efforts. Essaie-les, et tu remarqueras probablement une amélioration significative de ton efficacité en matière de montage. Si tu as des questions ou si tu as besoin d'éclaircissements sur un point, n'hésite pas à laisser un commentaire. Merci d'avoir pris le temps d'explorer ces conseils, et j'espère qu'ils amélioreront ton expérience du montage vidéo dans DaVinci Resolve. Bon montage !


# 10 Astuces pour Améliorer Votre Workflow de Montage Vidéo

## 1. Optez pour un Grand Écran
Travailler sur un grand écran peut sembler évident, mais cela peut vraiment faire toute la différence. Avoir plus d'espace facilite le montage, rendant l'expérience plus agréable. Un setup idéal inclut trois moniteurs, comme l'Apple Studio Display, offrant une vue étendue pour une productivité maximale.

## 2. Utilisez les Bureaux Virtuels
Organisez votre espace de travail avec des bureaux virtuels. Sur Mac, utilisez les "spaces" pour séparer vos applications et optimiser votre espace écran. Cela vous permet de passer facilement entre DaVinci Resolve, Google Docs, et d'autres applications essentielles sans perdre de temps.

## 3. Profitez de la Barre Latérale de Finder
Simplifiez l'accès à vos dossiers fréquemment utilisés en les ajoutant à la barre latérale du Finder. Plus besoin de naviguer manuellement vers ces dossiers, faites-les simplement glisser dans la barre latérale pour un accès rapide. Et lorsque vous n'en avez plus besoin, retirez-les d'un simple clic droit.

## 4. Renommez Vos Exportations Rapidement
Économisez du temps en évitant de taper à chaque fois le nom complet de votre exportation. Double-cliquez simplement sur le nom de l'exportation précédente, ajoutez la version souhaitée, comme V2 ou V30, et le tour est joué.

## 5. Familiarisez-vous avec Vos Séquences
Investissez du temps dans la sélection minutieuse de vos séquences. Créez des "Sizzle reels" en faisant des sélections à partir de vos journées de tournage. Référez-vous à ces extraits pour une recherche rapide des moments forts, améliorant ainsi l'efficacité de votre montage.

## 6. Utilisez les "Smart Bins" ou "Search Bins"
Gardez votre pool média organisé avec les "Smart Bins" dans DaVinci ou les "Search Bins" dans Premiere Pro. Créez des dossiers dynamiques qui regroupent automatiquement vos éléments en fonction de critères spécifiques, simplifiant ainsi la gestion de vos projets.

## 7. Montez à partir de Disques SSD
Privilégiez les disques SSD pour le montage vidéo. Ces disques, bien que plus coûteux, offrent une fiabilité accrue, des vitesses de transfert plus rapides, et améliorent considérablement la fluidité du processus de montage.

## 8. Adoptez des Raccourcis Clavier Personnalisés
Ne restez pas avec les raccourcis par défaut. Personnalisez-les en fonction de votre flux de travail. Avoir des raccourcis accessibles d'une seule main sur la gauche du clavier peut considérablement accélérer le processus d'édition.

## 9. Optez pour une Souris de Jeu Programmable
Investissez dans une souris de jeu avec des boutons programmables pour une productivité maximale. Programmez les boutons pour des actions spécifiques, comme le défilement entre les clips ou le contrôle de lecture, permettant ainsi une édition plus fluide.

## 10. Passez à DaVinci Resolve
Faites le saut vers DaVinci Resolve, une décision qui peut transformer votre expérience d'édition. Outre ses capacités exceptionnelles en colorimétrie, DaVinci offre une gamme complète d'outils pour améliorer tous les aspects de votre montage. Découvrez pourquoi de nombreux éditeurs considèrent DaVinci Resolve comme le meilleur logiciel du marché.

Voilà, avec ces astuces, votre workflow de montage vidéo devrait être plus fluide et agréable. N'hésitez pas à partager vos propres conseils dans les commentaires et à explorer davantage ces suggestions pour améliorer votre expérience d'édition vidéo.


# Des Astuces Oubliées pour Faciliter Ton Travail avec DaVinci Resolve
[about these timesaving beginner quick tips for Davinci Resolve 18.6 - YouTube](https://www.youtube.com/watch?v=EijTiybLt-o&t=513s)
## Gestion de Projet Simplifiée
### Dossiers et Notes dans le Gestionnaire de Projets

Bien souvent, dans l'effervescence de la création, j'oublie des fonctionnalités essentielles. Par exemple, l'utilisation de dossiers dans le gestionnaire de projets. Il suffit de cliquer sur l'icône pour ajouter un dossier, facilitant grandement l'organisation. De même, la fonction de notes dans le gestionnaire de projets peut être un véritable atout. En ouvrant un projet et en cliquant sur "Fichier," tu peux ajouter des notes pour garder une trace de détails importants.

### Gestion Efficace des Paramètres de Projet

Lorsqu'on crée un nouveau projet, il peut être fastidieux de réajuster tous les paramètres. Cependant, il existe une astuce simple. En ouvrant le gestionnaire de projets et en cliquant sur l'icône de la maison, tu peux importer les paramètres d'un projet existant. Un gain de temps précieux pour te concentrer sur la création plutôt que sur la configuration.

## Personnalisation de l'Interface
### Ajustements Subtils pour une Expérience Optimale

Parfois, les détails d'interface peuvent échapper à notre attention. Si ton interface DaVinci Resolve semble différente, c'est peut-être à cause d'une option que tu as activée sans t'en rendre compte. Dans les préférences, sous "Utilisateur," explore les paramètres d'interface utilisateur pour choisir entre un arrière-plan gris ou bleu. De plus, n'oublie pas de régler l'échelle d'affichage pour une expérience visuelle optimale.

### Préservation Automatique et Gestion des Projets

La fonction de sauvegarde automatique peut t'éviter des tracas inutiles. Assure-toi qu'elle est activée dans les préférences. De plus, dans les paramètres généraux d'édition, explore les options de durée pour les générateurs standard, les transitions, et les images fixes. Ces ajustements préviennent les surprises lors de l'ajout de nouveaux éléments sur la timeline.

## Astuces Pratiques en Montage Vidéo
### Maîtrise de l'Inspecteur et de l'Histoire des Modifications

L'inspecteur offre des astuces qui peuvent échapper à notre attention. Par exemple, en maintenant la touche Alt (Option sur Mac) tout en cliquant et faisant glisser, tu peux ajuster finement les paramètres de zoom, position, et rotation. L'option "Réinitialiser" en haut de l'inspecteur permet de restaurer rapidement toutes les modifications.

### Navigation Intelligente et Historique des Annulations

Naviguer dans l'historique des annulations peut t'économiser du temps. Au lieu de frénétiquement utiliser Ctrl+Z, accède à l'historique complet sous "Édition." Cela te permet de revenir à des étapes précédentes en un clic, évitant ainsi les erreurs coûteuses.

## Conseils de Couleur et d'Édition Finale
### Copie de Grades et Utilisation Avancée du Color Page

Savais-tu que tu peux copier des grades directement depuis la page d'édition ? En sélectionnant un clip avec un grade, utilise Ctrl+C et Alt/Option+V sur un autre clip pour copier rapidement l'ajustement de couleur. Cela fonctionne également avec Fusion.

### Maîtrise du Sizing dans la Page Couleur

La page couleur offre des outils puissants, notamment le "Sizing." Comprendre la différence entre "Edit Sizing," "Input Sizing," et "Output Sizing" peut améliorer significativement ton flux de travail. Consulte le diagramme pour une référence visuelle.


# Les Petits Plaisirs de la Page de Montage de DaVinci Resolve
[The SURPRISINGLY good CUT page features Davinci Resolve - YouTube](https://www.youtube.com/watch?v=ol6h3E0Oheg)

La page de coupe de DaVinci Resolve offre une expérience de montage unique, et il y a quelques fonctionnalités spécifiques qui rendent le processus plus fluide et agréable.

## Vue en Bande : Une Nouvelle Façon de Voir vos Clips

Lorsque vous explorez votre pool média sur la page de coupe, vous pouvez rencontrer la "Vue en Bande," une fonctionnalité spécifique à cette page. Contrairement aux vues traditionnelles, la Vue en Bande présente des extraits individuels sous forme de bandes de film. Non seulement vous pouvez voir toute la longueur des clips, mais vous pouvez également visualiser la piste audio, ce qui facilite le repérage des moments clés. En un simple clic, vous pouvez marquer les points d'entrée et de sortie, glisser-déposer sur la chronologie, et voilà, votre coupe est faite.

## Outils d'Accès Rapide : Simplifier le Processus

La page de coupe offre des outils d'accès rapide situés sous la fenêtre de prévisualisation. Ces outils, comme la transformation et le recadrage, sont facilement accessibles sans avoir à ouvrir l'inspecteur. La fonction de zoom dynamique est particulièrement intéressante, avec des préréglages qui simplifient les zooms et les déplacements de manière rapide et efficace.

## Modèles de Résolution de la Chronologie : Simplifiez vos Projets

La possibilité de changer rapidement la résolution de votre chronologie sur la page de coupe est un gain de temps considérable. Au lieu de naviguer dans les paramètres du projet, un simple clic en haut à droite vous donne accès à des modèles prédéfinis tels que Ultra HD, Full HD, Portrait, et Carré. Ce processus facilite l'adaptation de votre projet à différentes plateformes sans avoir à ajuster manuellement chaque paramètre.

## La Bande Source : Rationaliser votre Montage

La Bande Source est une fonctionnalité puissante pour organiser et monter vos clips de manière chronologique. En sélectionnant un dossier dans votre pool média et activant la Bande Source, vous créez une timeline virtuelle avec tous les extraits alignés selon leur ordre d'apparition. Cela permet de parcourir rapidement vos clips, de marquer les points d'entrée et de sortie, et de les ajouter à votre chronologie principale sans tracas.

---

# Fonctionnalités Pratiques à Ne Pas Manquer

La page de coupe de DaVinci Resolve regorge de fonctionnalités pratiques qui rendent le montage plus intuitif et rapide. Jetons un coup d'œil à quelques-unes de ces fonctionnalités à ne pas manquer.

## Modèles de Résolution pour une Transition Facile

La possibilité de basculer entre différents modèles de résolution directement depuis la page de coupe est un atout majeur. En un simple clic, vous pouvez passer d'une résolution Ultra HD à une résolution Portrait, simplifiant ainsi l'adaptation de votre projet à différentes plateformes de diffusion.

## Aperçu des Zones Sûres : Visualisez vos Cadrages

Un petit détail qui fait toute la différence est l'option d'aperçu des zones sûres située au-dessus de la fenêtre de prévisualisation. Vous pouvez choisir parmi plusieurs options, telles que les médias sociaux, les formats de diffusion, et plus encore. Cela vous permet de visualiser rapidement comment votre vidéo apparaîtra sur différentes plateformes, optimisant ainsi vos cadrages sans effort.

## La Bande Source : Une Approche Chronologique

La Bande Source offre une méthode chronologique pour organiser vos clips avant de les intégrer à la chronologie principale. En alignant tous vos extraits dans l'ordre d'apparition, vous pouvez facilement sélectionner, marquer, et glisser-déposer pour construire votre vidéo finale de manière séquentielle.

## Exportation Rapide : Simplifiez le Processus

Enfin, la fonction d'exportation rapide située en haut à droite de la page de coupe offre une alternative rapide à la page de livraison traditionnelle. Les paramètres prédéfinis vous permettent d'exporter rapidement votre projet sans passer par des menus complexes, simplifiant ainsi le processus d'exportation.

---

# Conclusion : Profitez au Maximum de Votre Montage

La page de coupe de DaVinci Resolve regorge de fonctionnalités astucieuses qui rendent le montage vidéo plus accessible et efficace. De la Vue en Bande à la Bande Source en passant par les outils d'accès rapide, chaque fonction a été pensée pour rendre votre expérience de montage aussi agréable que possible. Explorez ces fonctionnalités, intégrez-les à votre flux de travail, et profitez au maximum de votre processus de montage avec DaVinci Resolve.


# Les meilleurs plugins pour DaVinci Resolve 2024

par [Alexandra Marriott](https://massive.io/fr/author/alexandra-marriott/) | 23 janvier 2024

DaVinci Resolve est déjà un outil puissant, doté d'une multitude de fonctions intégrées étonnantes. Mais avec ces fonctionnalités tierces, DaVinci Resolve est déjà un outil puissant. **Plugins DaVinci Resolve**Vous pourrez ainsi travailler plus rapidement et faire évoluer votre projet en toute simplicité.

Je suis bien placé pour le savoir : J'ai essayé des centaines de plugins différents et ce sont ceux que j'utilise tous les jours avec des séquences vidéo pour des clients - et le mieux, c'est que la plupart d'entre eux sont gratuits !

Il existe un large éventail de plugins et de modèles DaVinci Resolve gratuits, ainsi que des plugins et modèles payants, proposés par des créateurs tels que **Boris FX**, **Motion VFX**et **MrAlexTech** que je vais vous présenter ici afin que vous puissiez choisir celui qui vous convient le mieux pour le montage vidéo et d'autres activités de post-production. Je vous indiquerai même quelques entreprises et créateurs extraordinaires pour obtenir encore plus de plugins Resolve.

Voici mes **meilleurs plugins pour DaVinci Resolve**!

**Table des matières**

- [Meilleurs plugins DaVinci pour Zoom Effects](https://massive.io/fr/tutoriels/best-plugins-for-davinci-resolve/#zoom)
- [Les meilleurs plugins DaVinci pour l'étalonnage des couleurs](https://massive.io/fr/tutoriels/best-plugins-for-davinci-resolve/#color)
- [Meilleurs plugins DaVinci pour les effets spéciaux et le stylisme](https://massive.io/fr/tutoriels/best-plugins-for-davinci-resolve/#vfx)
- [Comment envoyer des images finies](https://massive.io/fr/tutoriels/best-plugins-for-davinci-resolve/#send)

##### Transfert de fichiers volumineux pour les coloristes, les éditeurs et les professionnels de DaVinci

Partagez des proxies haute résolution et des séquences d'enregistrement pour l'étalonnage, le montage et la transmission à d'autres départements de production.  

[Essayez MASV gratuitement](https://app.massive.io/fr/signup?)

## Zoom avant et zoom arrière

Le zoom avant et arrière peut ajouter une couche de dynamisme à votre séquence vidéo et mettre en évidence les moments importants de la chronologie de votre projet. Vous pouvez le faire à l'aide de votre caméra, mais le zoom avant et arrière à l'aide des plugins DaVinci Resolve peut changer la donne.

**Mcam Rig** est un plugin Resolve indispensable. Il permet des animations de zoom avant et arrière instantanées, mais son véritable intérêt réside dans le fait qu'il permet des mouvements de caméra plus contrôlés en ajustant la vitesse, la perspective et la profondeur de champ. Vous pouvez l'utiliser pour créer un effet de division RVB ou créer des arrière-plans si vous travaillez avec des vidéos verticales ou des récits d'écran.


**Collection d'éditeurs** de Jake Wipp est un autre bijou. Il propose également des zooms avant et arrière rapides et personnalisables, mais j'aime particulièrement le fait que vous puissiez le configurer pour qu'il soit un zoom avant ou arrière continu. Vous pouvez les utiliser comme effets ou générateurs, de sorte que vous pouvez les placer au-dessus de plusieurs clips sur la ligne de temps et adoucir une transition, par exemple. Vous pouvez opter pour la version Lite qui comprend un effet de grille et de tremblement et une transition panoramique, mais il existe également une version payante qui offre encore plus de fonctionnalités.


")

#### Partager des fichiers entre Premiere Pro et Resolve

Avec un flux de travail de Premiere à DaVinci, les monteurs et les coloristes peuvent partager des lignes de temps préconçues entre les stations de travail.

[Flux de travail entre Premiere et DaVinci Resolve >](https://massive.io/fr/(https://massive.io/tutoriels/flux-de-travail-de-premiere-a-davinci/)

## L'étalonnage des couleurs

DaVinci maîtrise parfaitement l'étalonnage des couleurs, cela ne fait aucun doute. Mais parfois, même les meilleurs peuvent bénéficier d'un peu d'aide.

**Mononodes** propose plusieurs DCTL (DaVinci Color Transform Language), mais c'est le "Utility DCTL" qui a remporté la palme à mes yeux. Il regorge d'outils permettant d'analyser, de mettre en valeur et de modifier les couleurs de vos séquences vidéo. Il comprend Balance DCTL, qui contrôle les tons de peau en mettant en évidence tout écart par rapport à la gamme naturelle de tons de peau, ce qui facilite les corrections. Il dispose également de l'outil Clipping DCTL, qui permet de trouver et de corriger les zones trop claires ou trop sombres. Ces analyses et représentations visuelles de l'image sont très utiles lors de la correction des couleurs et de l'exposition de l'image.


**FilmConvert** est un autre plugin Resolve exceptionnel. Il vous permet d'obtenir très rapidement un effet cinématographique en choisissant simplement votre caméra et en jouant avec les paramètres pour obtenir le format exact que vous souhaitez reproduire. Le grain et la texture qu'il ajoute sont purement magiques. Il donne instantanément à vos images un aspect cinématographique, [ambiance rétro](https://massive.io/fr/tutoriels/comment-ajouter-un-effet-vhs-videos-avec-premiere/).

Si vous souhaitez en savoir plus sur la correction des couleurs et l'étalonnage dans DaVinci Resolve, [Regardez cette vidéo que nous avons faite sur les techniques avancées d'étalonnage des couleurs](https://www.youtube.com/watch?v=vWSoGj2gKJA) pour passer à la vitesse supérieure en matière de manipulation des couleurs !


#### Mise en place d'une suite d'étalonnage à domicile

Comment mettre en place une suite d'étalonnage des couleurs productive à la maison, de l'équipement adéquat à l'espace nécessaire en passant par les considérations budgétaires.

[Créez votre propre suite d'étalonnage >](https://massive.io/fr/guides-dengrenages/color-grading-suite-at-home/)

## VFX et Styles

Il existe un large éventail de plugins et de modèles différents qui peuvent vous aider à créer des animations, des éclats de lentilles, des séparations RVB, des textures créatives, [effets visuels (VFX)](https://massive.io/fr/flux-de-travail/pipeline-vfx/)et plus encore.

**Réacteur 3** est un gestionnaire de plugins gratuit qui ouvre le monde des plugins et des outils gratuits. Il vous permet d'ajouter des plugins tiers pour Fusion et Resolve qui peuvent vous aider à tout faire ! L'utilisation est gratuite, mais certains développeurs acceptent les dons.

Si quelqu'un vous facilite la vie, un petit remerciement ne fait pas de mal, n'est-ce pas ?


Voici quelques-uns de mes plugins d'effets préférés que vous pouvez trouver dans Reactor 3 :

**XfchromaFuse** est un plugin gratuit qui vous permet de diviser facilement vos canaux RVB pour obtenir des effets trialisants.


**Tintensité** permet d'obtenir une coloration intense de l'ensemble de l'image.


**Problème de MT** Des outils tels que ChromaticAberration, Colorama, VHSStrip, GroundLoop, Glitch_Bars, ColorNoise et ChromaSubsample offrent différents styles et effets.


**Altus Denoiser Ultra** est un plugin gratuit idéal pour la réduction du bruit et la résolution d'autres problèmes de bruit de fond dans vos séquences.

**Outils Flare** permet de créer de magnifiques éclats de lentilles.

Ce n'est que la partie émergée de l'iceberg. Il existe de nombreux autres plugins et modèles payants de qualité, proposés par des sociétés telles que **Motion VFX** et **Boris FX** qui peuvent pimenter la chronologie de votre projet. Il existe plusieurs packs pour la correction des couleurs, les transitions, la réduction du bruit, l'animation, le traitement des images et les effets visuels qui sont tout simplement incroyables.

**Boris FX**, **Saphir**et **Continuum** vous offrent une telle variété d'effets visuels que vous pouvez facilement les manipuler et les combiner pour créer des visuels uniques, étonnants et cinématographiques. MotionVFX propose des packs impressionnants pour les titres graphiques, les LUTs et les VFX.


Il y a aussi des créateurs comme **[MrAlexTech](https://www.youtube.com/@MrAlexTech)** et **[Patrick Stirling](https://www.youtube.com/c/patrickstirling)** qui vendent leurs propres plugins d'effets pour la post-production, mais certains d'entre eux sont gratuits.

Les plus populaires sont **Zoom magique** et **Magic Animate** par Alex et **ProtoV2** par Patrick. Ces outils peuvent être incroyablement utiles et méritent vraiment d'être explorés.

D'autres créateurs méritent d'être consultés pour des plugins d'effets gratuits et payants :

- **[L'essentiel du montage vidéo](https://www.youtube.com/@EssentialVideoEditing)**
- **[Billy Rybka](https://www.youtube.com/c/BillyRybka)**
- **[Jamie Fenn](https://www.youtube.com/@JamieFenn)**
- **[Baldavenger](https://www.youtube.com/channel/UCKDc87OPzlc1A7NBGixq_vw)**

Le monde est à vous ! Quels que soient vos besoins, [édition vidéo](https://massive.io/fr/realisation-de-films/levolution-du-montage-video/) ou budget, il existe un plugin qui vous aidera à dynamiser votre flux de travail.


[BasketOfNekos/Midi-based-Animation-Iterator-For-DaVinci-Resolve: A DaVinci Resolve fuse plugin to repeat an animation based on the midi notes in a midi file. You can use this to sync animations to music. It’s useful for something like the guitar hero effect, but can be used for other things as well.](https://github.com/BasketOfNekos/Midi-based-Animation-Iterator-For-DaVinci-Resolve)