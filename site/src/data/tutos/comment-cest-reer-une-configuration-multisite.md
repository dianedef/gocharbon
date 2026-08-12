---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment C’Est Réer Une Configuration Multisite Wordpress Sur O2Switch
author: Diane
description: 'Découvre Comment C’Est Réer Une Configuration Multisite Wordpress Sur
  O2Switch : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

Vous pouvez **héberger plusieurs sites internet** sur votre espace d'hébergement web. Il n'y a pas de limite, l'offre unique o2switch est un [hébergement multisite](https://www.o2switch.fr/hebergement-illimite/), multi-domaine.

Pour héberger plusieurs sites sur la même offre d'hébergement, il suffit de configurer tous les domaines avec [l'outil domaines supplémentaires / configurés](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/domaines-compagnons).

<aside> 💡 **Configuration recommandée**

Pour éviter des problèmes de [contenu dupliqué](https://support.google.com/webmasters/answer/66359?hl=fr), nous recommandons de suivre une certaine structure.

Voici l'arborescence de dossiers que nous recommandons, c'est-à-dire avoir un dossier par site directement à la racine de votre espace:

- _public_html_ : votre site principal, [site-principal.fr](http://site-principal.fr)
- _[siteb.com](http://siteb.com)_ : votre deuxième site, [siteb.com](http://siteb.com)
- _[sitec.fr](http://sitec.fr)_ : votre troisième site, [sitec.fr](http://sitec.fr)
- _truc_ : votre sous domaine “[truc.sitec.com](http://truc.sitec.com)” par exemple

C'est normalement la configuration par défaut que propose cPanel lors de l'ajout d'un domaine supplémentaire.

</aside>

<aside> 💡 **Domaine de référence**

Lorsque vous commandez un espace d'hébergement, nous vous attribuons une adresse de référence qui est de la forme `identifiant.odns.fr`. Il s'agit d'une adresse technique, permettant d'identifier un compte d'hébergement.

Ce domaine temporaire peut également être une source de contenu dupliqué si vous ne faites pas attention. En effet, ce domaine temporaire est en réalité un [domaine garé](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/domaines-gares) sur votre espace d'hébergement et il pointe vers le dossier “public_html”, le même dossier que votre site principal.

Lorsque votre nom de domaine pointe sur votre espace d'hébergement, pensez à mettre en place une redirection du domaine temporaire “[identifiant.odns.fr](http://identifiant.odns.fr)” vers “[votre-site.fr](http://votre-site.fr)” sinon votre site sera accessible à partir des deux adresses. Vous pouvez faire cela avec l'outil [redirections](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/redirections) de cPanel.

</aside>

1. Acheter l’offre unique
    
2. Acheter un second domaine
    
3. Intégrer ce second panel à l’hébergement principal grâce à l’outil “domaines supplémentaires” du cPanel
    
    L'interface d'hébergement cPanel dispose d'une liste d'outils exhaustive. Si vous n'êtes pas famillier avec le fonctionnement de cPanel, vous pouvez le découvrir en vous [aidant de notre documentation technique](https://faq.o2switch.fr/#fonctionnement-des-outils-cpanel).
    
    Il faut configurer le domaine avec l'outil "Domaines Configurés" (cPanel > Domaines > Domaines Configurés).
    
    C'est l'outil qui permet de faire le lien entre votre nom de domaine et un répertoire de votre choix de votre hébergement.
    
    _Choix du dossier dans lequel seront contenus les fichiers du site internet dans l'outil “domaines supplémentaires” de cPanel_
    
    
    
    - [Domaines supplémentaires, configurer un domaine](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/domaines-compagnons)
4. Génrer des certificats SSL
    
    1. [activez un certificat SSL](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/lets-encrypt-certificat-ssl) avec Let's Encrypt SSL qui se trouve dans cPanel dans la catégorie `sécurité` avec les options par défaut
    2. **3** Allez sur l'outil [WPTiger](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/wptiger) puis cliquez sur `gérer mon site`. Le premier chargement peut être long, c'est normal.
        1. **4** Rendez-vous dans la section `SSL/TLS` de l'outil [WPTiger](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/wptiger) puis cliquer sur `Forcer HTTPS`. En arrière plan, l'outil va effectuer une sauvegarde de précaution de votre base de données et remplacement proprement toutes les références à la version HTTP du site par la version HTTPS. L'outil va également ajouter des règles dans le .htaccess pour forcer l'usage du HTTPS.
        2. **5** Dans 90% des cas, le site devrait fonctionner à ce moment. Si ce n'est pas le cas, videz bien le cache de votre site (avec l'extension que vous pouvez avoir ou manuellement en supprimant le contenu de `wp-content/cache`). Si cela persiste, utilisez un outil comme [whynopadlock](https://www.whynopadlock.com/) pour comprendre ce qu'il bloque
    
    - Chercher wptiger dans cpanel et aller forcer le HTTPS pour chaque site
        
        
        
    - il est possible de recevoir des alertes de la part de l'outil Let's Encrypt sur cPanel ! C'est notamment pratique pour suivre les renouvellements automatiques de certificats SSL et en cas de problème agir avant que le certificat expire.
        
        Dans un premier temps, il faut aller définir votre adresse email dans la partie `coordonnées` de cPanel, accessible en cliquant sur votre identifiant en haut à droite puis en allant dans `Coordonnées`. Sur la page suivante, il faut renseigner son adresse email et cocher les `préférences de contacts`.
        
5. redirections
    
    - [https://faq.o2switch.fr/hebergement-mutualise/gestion-web/arborescence-dossiers-multisite](https://faq.o2switch.fr/hebergement-mutualise/gestion-web/arborescence-dossiers-multisite)
    
    Lorsque vous commandez un espace d'hébergement, nous vous attribuons une adresse de référence qui est de la forme `identifiant.odns.fr`. Il s'agit d'une adresse technique, permettant d'identifier un compte d'hébergement.
    
    Ce domaine temporaire peut également être une source de contenu dupliqué si vous ne faites pas attention. En effet, ce domaine temporaire est en réalité un [domaine garé](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/domaines-gares) sur votre espace d'hébergement et il pointe vers le dossier “public_html”, le même dossier que votre site principal.
    
    Lorsque votre nom de domaine pointe sur votre espace d'hébergement, pensez à mettre en place une redirection du domaine temporaire “[identifiant.odns.fr](http://identifiant.odns.fr)” vers “[votre-site.fr](http://votre-site.fr)” sinon votre site sera accessible à partir des deux adresses. Vous pouvez faire cela avec l'outil [redirections](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/redirections) de cPanel.
    
6. Emails
    
    Après avoir configuré le domaine sur votre hébergement, vous pouvez créer des comptes emails avec [l'outil "Comptes de Messagerie"](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/comptes-courriels) (cPanel > Mail > Compte de messagerie) et installer un CMS comme WordPress avec [Softaculous](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/softaculous).
    
    Vous pouvez créer des adresses de messagerie sur votre hébergement avec l'outil "comptes de messagerie". Vous pouvez en créer autant que vous le souhaitez, il n'y a pas de limite sur le nombre de comptes emails que vous pouvez avoir.
    
    - [Tutoriel pour créer des comptes emails](https://faq.o2switch.fr/hebergement-mutualise/tutoriels-cpanel/comptes-courriels)
    
    Ensuite vous pouvez consulter vos emails avec l'aide du webmail, qui permet de gérer vos emails depuis un navigateur web.
    
    - [](https://pablo.o2switch.net:2096/)[https://pablo.o2switch.net:2096](https://pablo.o2switch.net:2096) (webmail)
    
    Il est aussi possible de configurer un client de messagerie (Outlook, Thunderbird, votre téléphone) en POP ou IMAP. Voici les réglages qu'il faut utiliser, suivi d'un tutoriel plus exhaustif.
    
    - Adresse de serveur SMTP, POP ou IMAP : [pablo.o2switch.net](http://pablo.o2switch.net/)
    - Ports : 993 pour l'IMAP, 995 pour le POP, 465 pour le SMTP
    - Chiffrement : Oui, SSL
    - Authentification : Oui
    - Identifiant : une adresse email complète, créée sur cPanel avec l'outil "compte de messagerie"
    - Mot de passe : celui de l'adresse email
    - [Guides pour configurer les logiciels de messageries courants (Outlook, Thunderbird, Android)](https://faq.o2switch.fr/hebergement-mutualise/gestion-emails)

[Documentation o2switch](https://faq.o2switch.fr/#fonctionnement-des-outils-cpanel)

### Besoin d'aide ?

Vous pouvez obtenir de l'aide de plusieurs façons.

- Par email : [**support@o2switch.fr**](mailto:support@o2switch.fr) 7 jours sur 7
- Par téléphone : **04 44 44 60 40** du Lundi au vendredi, 9h à 18h,
- Par un ticket : [**clients.o2switch.fr**](https://clients.o2switch.fr/) en étant connecté.

Vous pouvez également consulter notre [documentation](https://faq.o2switch.fr/). Elle répond à la majorité des questions que vous pouvez avoir. Vous pouvez regarder ce guide de démarrage.