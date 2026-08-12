---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Sortir Ses Mails Des Spams
author: Diane
description: 'Découvre Sortir Ses Mails Des Spams : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

[Question sur le cold emailing et lemlist - Emailing - Growthhacking.fr | Communauté française de growth hacking](https://www.growthhacking.fr/t/question-sur-le-cold-emailing-et-lemlist/24790)
[Délivrabilité cold emailing - Emailing - Growthhacking.fr | Communauté française de growth hacking](https://www.growthhacking.fr/t/delivrabilite-cold-emailing/25846)
[Mes campagnes emailing (broadcast) se retrouvent en SPAM (Mautic & Elastic Mail) - Emailing - Growthhacking.fr | Communauté française de growth hacking](https://www.growthhacking.fr/t/mes-campagnes-emailing-broadcast-se-retrouvent-en-spam-mautic-elastic-mail/11704)
[Paramétrage SPF, DKIM... - Emailing - Growthhacking.fr | Communauté française de growth hacking](https://www.growthhacking.fr/t/parametrage-spf-dkim/23066)
[Cold Emailing : éviter de se faire blacklister - Emailing - Growthhacking.fr | Communauté française de growth hacking](https://www.growthhacking.fr/t/cold-emailing-eviter-de-se-faire-blacklister/9671)
  
​  
​  
​  
Comment ne pas tomber dans les SPAM ?  
Salut,  
je dois envoyer plusieurs milliers d’emails via des formulaires de contact disponibles sur des sites Internet.  
Sauf qu si 80% de mes emails tombent dans les SPAM, autant ne pas gaspiller mon temps ^^.  
Quelqu’un ici a de bonnes notions dans ce domaine ?  
A propos des proxies, vous sauriez chez quel fournisseur je peux prendre des proxies qui ne soient pas flagué comme étant expéditeur d’emails spam ?  
Je vais spinner le sujet du mail. Mais, même pour 3 à 6 mots, il va falloir que je spin plutôt correctement car si je veux envoyer 50 000 emails… Le % de similarité va vite gonfler si il y a 50K spuns.  
Pour le contenu du mail, je ne vais pas utiliser de termes trop flagués comme viagra ou même SEO, publicité, marketing etc. Que des mots du français moyen, courant.  
Si vous avez d’autres conseils ou idées, je suis vivement preneur  
merci beaucoup en tout cas !  
  
  
Salut Vincent,  
  
Il faut changer de provider (prendre Mailgun, Mailchimp avec son fameux Mandrill, etc…) et respecter le quota de réception de mails par jour par provider (celui qui va recevoir le mail).  
  
Par exemple, chez Google, un mail venant du même envoyeur ne va accepter (par exemple) que 200 mails identique de sa part. Chez Hotmail, lui, il ne va accepter que 500 mails.  
  
Ce sont des exemples, je n’ai pas les quotas en tête, mais il faut faire attention à ça.  
  
Spinner le sujet du mail est une bonne idée mais ça ne servira à rien si les mails sont envoyés en batch (avec un nombre supérieur au quota du provider).  
  
Il faut vérifier que ton domain name ne soit pas considérer comme spam, tu pourras vérifier ça avec l’autorité de ton nom de domaine.  
  
  
tombent dans les SPAM, autant ne pas gaspiller mon temps ^^.  
Quelqu’un ici a de bonnes notions dans ce domaine ?  
A propos des proxies, vous sauriez chez quel fournisseur je peux prendre des proxies qui ne soient pas flagué comme étant expéditeur d’emails spam ?  
Je vais spinner le sujet du mail. Mais, même pour 3 à 6 mots, il va falloir que je spin plutôt correctement car si je veux envoyer 50 000 emails… Le % de similarité va vite gonfler si il y a 50K spuns.  
  
Hello Vincent !  
  
Un très bon article sur le sujet qui permet de cerner la question du blacklisting : Listes noires en emailing : tout ce que vous devez savoir en 2020 46  
  
SI tu regardes le dernier paragraphe, il y figure un listing du B.B.Ba des chose à faire / à ne pas faire pour éviter de tomber dans les listes noires. Tout y est !  
  
  
Salut  
merci pour votre coup de main !  
  
Ce site indique (2018) qu’on ne peut pas envoyer plus de 500 emails via l’interface web de Gmail : How the Gmail Email Limit Impacts Your Employee Emails 4  
  
Moi je souhaite envoyer des emails à des webmasters via le formulaire de contact disponible sur leur site. Donc je n’utiliserai pas de service du type Mailchimp.  
  
Mais au moins ça va m’aider à calibrer le nombre d’emails max que je peux envoyer tous les 24 heures. Car si je compte que 50% max des emails des webmasters (liées à leur formulaire de contact) sont sur Gmail, je vais pas envoyer des milliers chaque jour clairement.  
  
Je ne souhaite pas envoyer les emails depuis un hébergement web. Je vais faire ça via un logiciel sur mon desktop. On est d’accord, c’est bien mon IP qui va être utilisé à la place du domaine dont tu parles ici ? :  
  
Citation Il faut vérifier que ton domain name ne soit pas considérer comme spam, tu pourras vérifier ça avec l’autorité de ton nom de domaine.  
  
Donc si j’ai 10 IP différentes, sans prendre en compte le fait que le contenu du mail est identique (ou pas), je peux éventuellement envoyer environ 200*10 IP= 2000 emails par jour sans tomber en SPAM ? Je sais que c’est presque impossible de calculer ça sans connaitre exactement les services webmails de l’intégralité des destinataires car chacun à sa propre recette de SPAM Filters mais pour avoir une idée.
Fait un petit check avec [https://www.mail-tester.com 118](https://www.mail-tester.com/), cela devrait te donner plusieurs pistes

La signature utilise une image ?  
si oui, l’image vient d’un nom de domaine qui est peut etre blacklisté :  
check avec cet outil si le domain n’est pas blacklisté : [https://mxtoolbox.com/blacklists.aspx 117](https://mxtoolbox.com/blacklists.aspx)

tu peux faire un test en hébergeant l’image sur [cloudinary.com 8](http://cloudinary.com/), et voir si tu recois l’email en spam

Le nombre de liens dans la signature peut jouer aussi.


- Les signatures HTML peuvent causer des problèmes de classification en tant que spam avec certains fournisseurs d'e-mails.
- Certains hébergeurs, dont Gmail, peuvent avoir des problèmes techniques avec les signatures HTML.
- Les e-mails de l'entreprise peuvent être marqués comme spam en raison de la présence de la signature HTML de l'expéditeur.
-