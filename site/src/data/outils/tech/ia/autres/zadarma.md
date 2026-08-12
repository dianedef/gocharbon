---
section: apps
metadataEnrichedAt: null
statut: []
type: Logiciel
_priorité: normal
tags:
- Outils
imageNameKey: zadarma
title: Zadarma
author: Diane
description: 'Découvre Zadarma : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

C’est un sujet que j’ai peu vu passer, je sais qu’il n’intéressera pas tout le monde,  
Mais je veux vous partager le prestataire que j’utilise pour avoir un Standard Vocal Interactif pour ma boîte : Zadarma. Bien moins cher qu’un Aircall, RingCentral, etc.

Oui, à 2€/mois 

J’ai fait un article là-dessus sur notre blog,  
Ainsi que des captures d’écran de toute ma config’ si quelqu’un veut se lancer là-dedans,

 [Lien de l’Article 90](https://leszoutils.com/blog/voip-standard-telephonique-a-2e-mois-zadarma/)


Dans la série des services VoIP pas cher, il y a aussi OVH : [VoIP : Solutions de téléphonie sur IP - OVH TELECOM 13](https://www.ovhtelecom.fr/telephonie/voip/)  
A partir de 1€ht/mois pour une ligne simple, 5€ht/mois pour un standard.

J’utilise ça depuis on bon paquet d’années et ça marche très correctement pour le prix.

Il y a une api ouverte et quelques fonctions basiques pour mettre en place du CTI. (jamais testé) Typiquement si votre CRM est accessible via une url contenant le numéro de tel du contact, ce script devrait pouvoir l’ouvrir automatiquement.  
Il y a une démo avec SugarCRM ici : [Intégration CTI de la téléphonie OVH aux CRM et ERP - exemple avec SugarCRM | Documentation OVH 4](https://docs.ovh.com/fr/voip/integration-cti-ovh-aux-crm-erp-avec-sugarcrm/)


Moi aussi j’utilise OVH avec :

-   une enregistrement audio d’une jolie voix disant que toute les lignes sont occupées,  
    -laissez vos coordonnées et l’objet de votre appel
-   nous vous rappelerons de suite

> > > > je recois le message en audio mp3 dans mes email et je le traite comme un lead entrant normal après.
> 

Bon plan, tu parles de 2 EUR pour le standard vocal? pour les appels sortants (pour mes commerciaux qui prospectent ), il me semble qu’il y a une facturation différente. Il ne s’agit pas d’un forfait illimité comme tu pourrait trouver chez aircall or ringover.

Répondre

[](https://www.growthhacking.fr/u/Kevin-Zimmermann)

[Kevin-Zimmermann](https://www.growthhacking.fr/u/Kevin-Zimmermann)[Grosseteam](https://www.growthhacking.fr/g/grosseteam)

[déc. '21](https://www.growthhacking.fr/t/voip-standard-tel-numero-virtuel-2-mois/25043/7?u=dianeleonie "Date de publication")

Hello [@Adzul](https://www.growthhacking.fr/u/adzul),

Oui, le standard et le numéro virtuel à 2€,  
Ça aurait été beau avec l’illimité mais ce n’est pas le cas.

Je n’émet pas avec le numéro de fixe mais avec mon portable uniquement et je ne fais pas plus de 200 numéros / mois.  
Très différent de tes besoins.

Juste une fois on a fait un peu d’outbound avec les collaborateurs en stage mais rien de poussé.

Je t’invite à regarder l’article où il y a les prix et/ou de regarder la tarification de Zadarma directement, doit y avoir une différence entre les portables et les fixes en termes de tarification.

Je ne conseillerais pas Zadarma pour tes besoins.

1

Répondre

dernière visite

[](https://www.growthhacking.fr/u/Kevin-Zimmermann)

[Kevin-Zimmermann](https://www.growthhacking.fr/u/Kevin-Zimmermann)[Grosseteam](https://www.growthhacking.fr/g/grosseteam)


[déc. '21](https://www.growthhacking.fr/t/voip-standard-tel-numero-virtuel-2-mois/25043/8?u=dianeleonie "Date de publication")

[@YannDeBulle](https://www.growthhacking.fr/u/yanndebulle),

Je vais faire un edit de l’article de blog en bas de page pour proposer ta solution OVH en te citant (si ça te convient)

1 réponse

Répondre

[](https://www.growthhacking.fr/u/Berfhaen)

[Berfhaen](https://www.growthhacking.fr/u/Berfhaen)

[déc. '21](https://www.growthhacking.fr/t/voip-standard-tel-numero-virtuel-2-mois/25043/9?u=dianeleonie "Date de publication")

Pareil. OVH pour moi. Je pensais mettre en place un serveur Asterisk mais finalement, les configurations de base fournies par OVH suffisent. Et en plus c’est Cloud, c’est à dire dire multisite (pratique pour le remote par exemple).  
J’ai mis une musique d’attente. Si je décroche pas sur le fixe, ça sonne sur le portable en 2g (plus fiable que de la voip sur smartphone).

1

Répondre

[](https://www.growthhacking.fr/u/embargo)

[embargo](https://www.growthhacking.fr/u/embargo)


[déc. '21](https://www.growthhacking.fr/t/voip-standard-tel-numero-virtuel-2-mois/25043/10?u=dianeleonie "Date de publication")

Idem je suis chez OVH telecom pour toutes mes lignes fixes géographiques, depuis 2012… Par contre pas mal de bugs de connexion avec zoiper ces derniers temps

1

Répondre

[](https://www.growthhacking.fr/u/YannDeBulle)

[YannDeBulle](https://www.growthhacking.fr/u/YannDeBulle)


[déc. '21](https://www.growthhacking.fr/t/voip-standard-tel-numero-virtuel-2-mois/25043/11?u=dianeleonie "Date de publication")

Pas de problème. C’est fait pour partager. 

1

Répondre

[](https://www.growthhacking.fr/u/Kevin-Zimmermann)

[Kevin-Zimmermann](https://www.growthhacking.fr/u/Kevin-Zimmermann)[Grosseteam](https://www.growthhacking.fr/g/grosseteam)

[déc. '21](https://www.growthhacking.fr/t/voip-standard-tel-numero-virtuel-2-mois/25043/12?u=dianeleonie "Date de publication")

J’ai mis un lien direct vers ton post 

Répondre

[](https://www.growthhacking.fr/u/YannDeBulle)

[YannDeBulle](https://www.growthhacking.fr/u/YannDeBulle)

[déc. '21](https://www.growthhacking.fr/t/voip-standard-tel-numero-virtuel-2-mois/25043/13?u=dianeleonie "Date de publication")

Pour ceux qui n’aiment pas les softphones, la bonne astuce consiste à racheter des téléphones SIP d’occasion sur eBay.  
Le top étant de trouver des postes sur un protocole propriétaire (genre Avaya etc…) mais qui soient flashables en SIP.  
Personne n’en veut donc les prix sont au raz des pâquerettes mais comme ce sont des téléphones destinés à des centres d’appel ou autre, ce sont de vrais tanks increvables.

Perso j’ai équipé ma boite il y a une dizaine d’années avec des DORO IP840c (80€ les 6 environ) que j’ai flashé en SIP et ils marchent toujours nickel.

2

Répondre

[](https://www.growthhacking.fr/u/Berfhaen)

[Berfhaen](https://www.growthhacking.fr/u/Berfhaen)

[déc. '21](https://www.growthhacking.fr/t/voip-standard-tel-numero-virtuel-2-mois/25043/14?u=dianeleonie "Date de publication")

[](https://www.growthhacking.fr/t/voip-standard-tel-numero-virtuel-2-mois/25043/13 "accéder au message cité")

 YannDeBulle:

> DORO IP840c (80€ les 6 environ)

Pas mal. Perso, j’ai pris un Yealink T54W sur Amazon (ne pas oublier le chargeur car de base il est PoE). Dans mon cas, il est top car je peux:

-   compléter automatiquement le répertoire du téléphone avec les contacts de mon CRM (plus de 2500 contacts potentiel pour ma part). Il consulte un lien que j’ai configuré pour récupérer les tels. Comme ça, quand un client appelle, je sais qui c’est (avec la ville et le code postal). Les clients sont contents quand je les reconnais.
-   Tu peux aussi notifier ton CRM quand tu décroches/raccroches ou que le tel sonne sonne avec le numéro de tel. Ca permet une traçabilité des appels passés voir même d’adapter ton CRM en fonction de l’appel courant (genre le CRM cherche automatiquement à qui appartient ce tel et te propose un bouton à cliquer pour accéder à la fiche). C’est pas encore implémenté dans mon CRM mais ça le sera.

OVH c’est bien mais il manque les webhook (appels pris, durée etc…). La seule solution, c’est la boucle infinie qui demande les infos courantes à OVH…

1

Répondre

[](https://www.growthhacking.fr/u/YannDeBulle)

[YannDeBulle](https://www.growthhacking.fr/u/YannDeBulle)

[déc. '21](https://www.growthhacking.fr/t/voip-standard-tel-numero-virtuel-2-mois/25043/15?u=dianeleonie "Date de publication")

Pour les webhooks, tu as visiblement un truc un peu équivalent avec [Projet communautaire CTI | Documentation OVH 3](https://docs.ovh.com/fr/voip/projet_communautaire_cti/) .

Exemple avec Sugar CRM : [Intégration CTI de la téléphonie OVH aux CRM et ERP - exemple avec SugarCRM | Documentation OVH 3](https://docs.ovh.com/fr/voip/integration-cti-ovh-aux-crm-erp-avec-sugarcrm/)

Si vous avez besoin de numéro de téléphone temporaire , y’a aussi [https://www.2fapva.com/fr 4](https://www.2fapva.com/fr)