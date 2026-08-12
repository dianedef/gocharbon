---
section: apps
metadataEnrichedAt: null
title: Osint
author: Diane
tags:
- Outils
description: 'Découvre Osint : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

# Turbolehe - Un peu d’OSINT pour trouver des emails cachés

Le 31 octobre 2023par Korben -

1. [Developpement](https://korben.info/categories/developpement/ "Voir tous les articles de la catégorie Developpement")
2. [Outils-Dev](https://korben.info/categories/developpement/outils-dev/ "Voir tous les articles de la sous-catégorie Outils-Dev")

Je ne sais pas si vous vous souvenez, mais il y a quelques mois. Je vous ai présenté [Holehe](https://korben.info/comment-savoir-si-des-comptes-en-ligne-sont-lies-a-une-adresse-email-precise-osint.html). C’est un outil d’OSINT qui permet de lancer des recherches sur les réseaux sociaux et divers sites web afin de collecter des informations sur une personne simplement à partir de son adresse email.

Très cool et pour l’installer, c’est easy :

```fallback
pip3 install holehe
```

Et en complément à cet outil, je vous présente aujourd’hui [Turbolehe](https://github.com/UserCr4ig/Turbolehe) qui se greffe sur Holehe et qui va vous permettre d’améliorer vos enquêtes OSINT grâce à une recherche pas nom + prénom, ainsi que de la génération de rapports.

Ça s’installe comme ça :

```fallback
git clone https://github.com/UserCr4ig/Turbolehe cd Turbolehe
```

Ça fonctionne presque tout pareil: il suffit d’entrer la commande suivante avec le nom et le prénom :

```fallback
python3 turbolehe.py NOM PRENOM
```

L’outil générera alors toutes les combinaisons d’adresse e-mail possible, puis les vérifieras sur tous les sites qu’il connaît. En plus, cela produira également des rapports en CSV que vous pourrez utiliser dans vos process, ou tout simplement lire avec n’importe quel tableur.


Noter que si vous voulez cibler sur un nom de domaine en particulier, pour vous limiter, par exemple à une entreprise, c’est également possible avec le paramètre -B :

```fallback
python turbolehe.py John Doe -B
```

Des améliorations futures incluront la gestion de plus grandes quantités de données et du **multithreading**, ce qui rendra l’outil encore plus rapide et efficace. Si ça vous intéresse, c’est disponible via [GitHub](https://github.com/UserCr4ig/Turbolehe), où vous pouvez également trouver le code source et les instructions pour l’installation et l’utilisation de l’outil.

Pour résumer, Turbolehe est un outil incroyablement utile pour les amateurs d’OSINT et les détectives du dimanche comme moi. Il automatise le processus de génération et de vérification d’adresses e-mail, ce qui vous permettra de gagner du temps dans vos enquêtes.
# Comment savoir si des comptes en ligne sont liés à une adresse email précise ? #osint

Le 6 octobre 2022par Korben -

1. [Securite-Vie-Privee](https://korben.info/categories/securite-vie-privee/ "Voir tous les articles de la catégorie Securite-Vie-Privee")
2. [Anonymat-en-Ligne](https://korben.info/categories/securite-vie-privee/anonymat-en-ligne/ "Voir tous les articles de la sous-catégorie Anonymat-en-Ligne")

Avec certains outils OSINT comme [Blackbird](https://korben.info/osint-pseudo-blackbird.html)que je vous ai présenté il y a quelques jours, il est possible de trouver des comptes en ligne à partir d’un simple pseudo. Mais l’information retournée n’est pas forcément fiable, car n’importe qui peut avoir le même pseudo que vous (j’en sais quelque chose).

Alors que faire ?

Et bien grâce à cet outil nommé [holehe](https://github.com/megadose/holehe), vous pourrez analyser plus de 120 sites à la recherche de comptes à partir d’une simple adresse email. Évidemment, l’adresse email étant unique, pas de risque de taper à côté.

Mais comment s’y prend ce script pour trouver les comptes utilisant telle ou telle adresse email ?

Et bien c’est assez simple. Il vérifie qu’une adresse email est attachée à un compte en ligne en utilisant tout simplement la fonctionnalité “_J’ai perdu mon mot de passe_” de ces sites. D’ailleurs, sont présents dans cet outil, [uniquement les sites qui ne préviennent pas immédiatement les utilisateurs qu’une demande de mot de passe perdu a été initiée](https://github.com/megadose/holehe/issues/12).

C’est malin. Évidemment, ce n’est à utiliser qu’avec vos propres adresses email, sinon vous irez en prison comme d’habitude.


Vert c’est OK, rose y’a pas de compte et rouge on ne sait pas, car timeout. Rassurez-vous, ça peut détecter par exemple qu’un compte Twitter existe pour votre adresse email, mais l’outil ne vous donne pas le fameux compte Twitter.

Pour l’installer, vous pouvez utiliser PyPi :

```fallback
pip3 install holehe
```

Ou cloner le dépôt comme ceci :

```fallback
git clone https://github.com/megadose/holehe.gitcd holehe/python3 setup.py install
```

Ensuite, il n’y a plus qu’à appeler le script avec l’adresse email de votre choix :

```fallback
holehe test@gmail.com
```

Et si le site divulgue d’autres infos sur vous (nom complet, numéro de téléphone…etc.), le script vous informe également.