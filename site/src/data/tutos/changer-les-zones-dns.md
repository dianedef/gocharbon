---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Changer Les Zones Dns
author: Diane
description: 'Découvre Changer Les Zones Dns : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

<aside> 💡 Ne confondez pas l'option permettant de changer les serveurs DNS associés à votre nom de domaine avec l'outil permettant de modifier les zones DNS. Ce n'est pas la même chose !

Les zones DNS, sont des fichiers de configuration présents sur le serveur DNS contenant des précisions sur les types d’associations “nom de domaine ⇔ adresse IP”, qui permettent de diriger les emails, les sous-domaines, et autres, au bon endroit. cPanel propose un outil pour gérer cela de manière simple : [Zone Editor](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/editeur-zone-dns-zone-editor)


</aside>

Zone DNS par défaut de cPanel pour un nom de domaine

Chaque ligne représente une entrée DNS, c'est-à-dire une correspondance “quelque chose ⇔ autre chose”. Généralement il s'agit d'une correspondance “nom de domaine ⇔ adresse IP” mais il peut y avoir d'autres types d'entrées possibles sur cPanel :

- **Champs A** : permet de faire correspondre un domaine ou sous-domaine à une adresse IP
    
- **CNAME** : permet de faire correspondre un domaine ou sous domaine à un autre domaine (sorte d'alias)
    
- **MX** : permet de définir votre ou vos serveurs emails pour le domaine en question. Sur cPanel, les champs MX ne se gèrent pas dans les DNS (c'est pour cela qu'ils n'apparaissent pas) mais directement depuis l'outil [Zone Editor](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/editeur-zone-dns-zone-editor).
    
    Passons en revue une ligne précise :
    
    
    
- **Nom** : précise le nom de domaine concerné, ici c'est pour “[votre-site-exemple.fr](http://votre-site-exemple.fr).”. Le point final est important, pour le comprendre il suffit de regarder le schéma présent plus haut dans cette page sur la “hiérarchie” des domaines.
    
- **TTL** : représente le temps de vie, c'est-à-dire pendant combien de temps cette information peut être mise en cache avant d'être considérée comme obsolète. 14400 secondes = 4h
    
- **Class** : vous n'avez pas à vous en soucier, c'est toujours IN pour internet
    
- **Type** : type de l'enregistrement, comme vu plus haut, le type A permet de faire des associations avec une adresse IP
    
- **Enregistrement** : permet de définir vers où pointe le nom, vers quelle adresse IP. Ici 109.234.161.38, l'un des serveurs pour l'espace mutualisé d'o2switch.
    

Outils pour travailler avec ces zones DNS

Il existe plusieurs outils qui vous permettent d’interroger des serveurs DNS pour voir leur réponse. Vous en aurez généralement besoin lorsque vous serez en train de procéder à un transfert de domaine ou lorsque l'un de vos noms de domaines ne répond plus (page inaccessible).

Vérifier la propagation DNS