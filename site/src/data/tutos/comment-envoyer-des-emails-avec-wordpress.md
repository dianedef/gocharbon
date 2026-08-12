---
section: tutos
tags:
- Tutoriels
title: Comment Envoyer Des Emails Avec Wordpress
author: Diane
description: 'Découvre Comment Envoyer Des Emails Avec Wordpress : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

Par défaut, WordPress utilise PHP mail pour envoyer des courriels transactionnels. Cela signifie que tes courriels sont envoyés via ton serveur web. Le problème est que la plupart des hébergeurs WordPress n'ont pas de serveurs correctement configurés pour l'envoi de courriels. Il se peut donc que tu rencontres des problèmes d'acheminement des courriels, comme le fait que tes courriels ne s'envoient pas.

De plus, les fournisseurs de services de messagerie comme Gmail et Yahoo sont constamment en guerre contre les spammeurs. L'une des choses qu'ils vérifient lorsqu'un courriel atteint leurs serveurs est qu'il provient bien de l'endroit où il est censé avoir été envoyé. S'il n'y a pas d'authentification appropriée, les courriels sont envoyés dans les pourriels ou ne sont pas livrés du tout.

SMTP (Simple Mail Transfer Protocol) est une norme industrielle pour l'envoi de courriers électroniques. Une configuration **[SMTP](https://www.mailpoet.com/blog/top-three-smtp-plugins-for-wordpress/)** appropriée permet d'améliorer la délivrabilité des courriers en utilisant une authentification appropriée qui satisfait les fournisseurs de services de messagerie.

Nous te recommandons vivement de configurer un plugin et un service SMTP pour ton site WordPress afin d'améliorer la délivrabilité de tes courriels. Nous recommandons le plugin WP Mail SMTP (que tu peux lire plus en détail ci-dessous sur **[Meilleurs plugins WooCommerce pour l'automatisation, la personnalisation et la délivrabilité des emails](https://docs.google.com/document/d/1w9fbsIyGv2mCLNgq_23bBl9ITA_aIpb73AhtuA3oCGg/edit#heading=h.iqlfnaz96sdx)**) ainsi qu'un service SMTP de ton choix.


## * Personnaliser les modèles d'emails de WooCommerce - MailPoet

[https://www.mailpoet.com/blog/customizing-your-woocommerce-email-templates/](https://www.mailpoet.com/blog/customizing-your-woocommerce-email-templates/)

Les emails transactionnels sont un canal de communication essentiel entre le propriétaire d'une boutique de commerce électronique et ses clients. Mais tu as peut-être remarqué que les modèles d'emails disponibles dans WooCommerce sont un peu, eh bien, fades pour être honnête 😴.

Des milliers de propriétaires de magasins veulent personnaliser le contenu ou le design de ces emails par défaut, mais cela ne peut pas se faire sans se salir un peu les mains. En fait, c'est l'une des recherches les plus fréquentes sur Google pour WooCommerce.

Ne crains rien. Il existe de nombreuses façons d'embellir tes modèles d'emails WooCommerce et de commencer à envoyer des emails qui te raviront, toi et tes clients.

Dans ce billet, je vais t'expliquer tout ce que tu dois savoir pour personnaliser tes modèles d'emails WooCommerce en fonction de ta marque, afin que tu puisses te détacher du modèle générique que possèdent toutes les boutiques WooCommerce.

Le modèle d'email transactionnel standard disponible dans WooCommerce.

## Modèles d'emails par défaut de WooCommerce

WooCommerce est livré avec une gamme de modèles d'emails par défaut pour l'administration et les clients, qui sont tous personnalisables à la fois en termes de contenu et de style.

Voici une liste complète des courriels inclus dans WooCommerce.

**Nouvelle commande** - Notifie à l'administrateur du magasin qu'une nouvelle commande a été passée sur le site Web.
**Commande annulée** - Notifie à l'administrateur du magasin qu'une commande a été annulée.
**Commande échouée** - Informe l'administrateur du magasin de l'échec d'une commande.
**Commande en attente** - Envoyée au client et contenant les détails de la commande. Déclenché lorsque le statut de la commande est modifié en "En attente".
**Traitement de la commande** - Envoyé au client et contenant les détails de la commande. Déclenché lorsque le statut de la commande passe à "Traitement de la commande".
* **Commande terminée** - Envoyé au client et contenant les détails de la commande. Déclenchée lorsque le statut de la commande passe à "Commande terminée".
**Commande remboursée** - Envoyée au client lorsqu'une commande est remboursée.
* Facture du client** - Envoyée au client et contenant les informations relatives à la commande et les liens de paiement.
* Note du client** - Envoyée au client. Déclenchée lorsqu'un propriétaire de magasin ajoute une note à la commande.
**Réinitialisation du mot de passe** - Envoyé au client lorsqu'il demande un nouveau mot de passe via le magasin.
**Nouveau compte** - Envoyé à un client lorsqu'il crée un nouveau compte sur le magasin.

Certaines des modifications les plus utiles aux courriels transactionnels du point de vue de tes clients peuvent être des choses comme des informations sur la garantie, des manuels d'utilisation et des informations sur les retours. Et si ton magasin gère les paiements hors ligne, c'est l'occasion de fournir des détails sur la façon dont ils peuvent payer et terminer la commande.

## Pourquoi personnaliser les modèles d'emails transactionnels de WooCommerce ?

L'image de marque ! Si tu recevais les mêmes emails génériques de tous les magasins où tu as fait des achats, tu ne t'en souviendrais pas. Ils s'effaceraient dans la mer des similitudes.

En personnalisant tes modèles d'emails WooCommerce, tu peux **injecter la personnalité et l'identité de tes propres marques pour qu'elles correspondent aux autres emails que tu envoies**, qu'il s'agisse de newsletters ou d'[email marketing automation](https://www.mailpoet.com/blog/wordpress-email-automation-plugins/).

La cohérence est essentielle pour construire et maintenir la présence d'une marque. Prendre le temps de personnaliser tes modèles d'emails transactionnels WooCommerce pour qu'ils reflètent le ton et l'identité de ta marque est indispensable, et te donne également l'occasion parfaite d'inclure des informations supplémentaires qui vont améliorer l'expérience de tes clients.


## Comment personnaliser les modèles d'e-mails de WooCommerce

Il existe plusieurs façons de personnaliser tes modèles d'emails WooCommerce :

Jetons un coup d'œil à chacune d'entre elles.


### 1. Utiliser les paramètres de WooCommerce pour modifier tes modèles d'e-mails (par défaut).

Si tu veux seulement apporter des modifications simples à tes modèles d'e-mails et que tu n'as pas besoin d'un contrôle granulaire sur le style (couleurs, polices, etc.) de chaque type d'e-mail, WooCommerce peut le faire d'emblée.

Tu peux personnaliser les emails via ton ***wp-admin > WooCommerce > Paramètres > Emails***. Tu y trouveras la possibilité de personnaliser tous les e-mails que WooCommerce envoie à la fois à toi, en tant qu'administrateur du magasin, et à tes clients.

En outre, si tu fais défiler la page plus bas, tu verras des options de personnalisation de base pour les couleurs, une image d'en-tête et un texte de pied de page.

Et si tu as l'intention d'améliorer le texte de ton e-mail, tu peux le faire via l'onglet **Gestion** du modèle d'e-mail que tu souhaites modifier.

Tu peux alors modifier le texte de l'email en utilisant les espaces réservés intégrés proposés par WooCommerce. Tu peux également activer ou désactiver cet e-mail spécifique.

Bien que ces options ne soient pas aussi puissantes que celles offertes par les divers [plugins de personnalisation des courriels de WooCommerce](https://www.mailpoet.com/blog/customizing-your-woocommerce-email-templates/), si tu ne veux pas installer un plugin supplémentaire, c'est un moyen facile de commencer avec un minimum de tracas.


### 2. Personnaliser tes modèles WooCommerce avec un thème enfant et du code (hard)

Une autre façon de personnaliser tes modèles d'emails WooCommerce est de copier le modèle d'email dans ton thème et de le modifier directement.

C'est la plus complexe des options que je vais partager aujourd'hui et je **recommanderais plutôt d'utiliser un [WooCommerce email customizer plugin](https://www.mailpoet.com/blog/customizing-your-woocommerce-email-templates/) si tu n'es pas sûr de pouvoir modifier les thèmes enfants.**

Chaque fois que tu fais cela, tu dois être conscient de deux choses.

1. Utilise toujours un [thème enfant](https://premium.wpmudev.org/blog/how-to-create-wordpress-child-theme/). L'utilisation de thèmes enfants est essentielle. Sinon, si ton thème parent se met à jour, tu perdras toutes les modifications que tu as apportées à tes modèles d'emails WooCommerce. Tu n'es pas sûr de savoir ce qu'est un thème enfant ? [Consulte ce guide](https://codeable.io/what-is-a-child-theme-wordpress/)
2. WooCommerce se met à jour régulièrement, alors assure-toi de garder tes modèles à jour avec tous les changements. **Si tu n'es pas un développeur ou si tu n'as pas l'aide d'un développeur comme [Codeable](https://codeable.io/businesses/?ref=2wHL7), nous te recommandons d'utiliser un plugin.

Tu trouveras le code des modèles d'emails de WooCommerce dans ***wp-content/plugins/woocommerce/templates/emails***. Ne modifie pas les modèles ici ! Au lieu de cela, copie le chemin du fichier dans ton thème enfant.

Par exemple, disons que ton thème enfant s'appelle "mailpoet-child" ; le chemin d'accès à ton thème est ***wp-content/themes/mailpoet-child***. Ajoute un dossier à ce thème enfant appelé "woocommerce", ce qui donne le chemin ***wp-content/themes/mailpoet-child/woocommerce*.** Dans ce chemin, ajoute un dossier appelé "emails", ce qui donne le chemin ***wp-content/themes/mailpoet-child/woocommerce/emails***.

Maintenant que tu as le chemin pour tes modèles d'emails WooCommerce, tu peux copier les fichiers de WooCommerce vers ton thème enfant et faire tes modifications.

Tu remarqueras que chaque email a son propre modèle, et qu'il y a un modèle qui contrôle les styles généraux appelé email-styles.php. Tu y trouveras du CSS et des variables pour les couleurs. Copie ce fichier dans ton thème enfant si tu souhaites mettre à jour et unifier le style de tous tes emails WooCommerce.

Il est important de noter que **la modification des courriels WooCommerce n'est pas destinée au propriétaire de magasin moyen. Si tu n'es pas un développeur, nous te recommandons d'utiliser un plugin de personnalisation de WooCommerce.


### 3. Les meilleurs plugins de personnalisation de WooCommerce (recommandés)

**Utiliser un plugin pour personnaliser tes modèles d'emails WooCommerce est la méthode la plus rapide et la plus simple pour atteindre la grandeur de l'email transactionnel.**.

Au lieu de passer des heures à fouiller dans le code, tu peux être opérationnel en moins d'une heure.

Voici les principaux avantages de l'utilisation d'un plugin de personnalisation d'emails WooCommerce.

1. **Facilité d'utilisation** - L'utilisation d'un plugin est souvent le moyen le plus simple de personnaliser tes modèles d'emails WooCommerce. C'est simple à installer et à mettre en route. Aucune connaissance complexe en matière de codage ou de programmation n'est nécessaire. Il suffit de le brancher et de le faire fonctionner.
2. **Gratuit ou Premium?** - Ils constituent un point d'entrée peu coûteux pour personnaliser tes modèles de courriels WooCommerce. De nombreux plugins sont proposés sous un modèle freemium où tu peux commencer gratuitement et acheter la version premium si tu le souhaites.
3. **Support** - Bien que le support ne soit pas garanti si tu optes pour un plugin gratuit, la plupart des auteurs de plugins offrent un support pour leurs produits, ce qui limite les risques de problèmes !
4. **Compatibilité** - Tout bon développeur de plugin met régulièrement à jour son plugin pour qu'il soit compatible avec la dernière version de WooCommerce. WooCommerce est un écosystème qui évolue rapidement, et le code personnalisé peut rapidement devenir obsolète.

Il existe un certain nombre de plugins qui te permettront de personnaliser tes modèles d'emails WooCommerce. Cela peut être une longue tâche de les passer tous en revue, alors j'ai fait le plus dur pour toi et j'ai dressé une liste des meilleurs plugins disponibles.

Interface utilisateur du personnalisateur d'emails WooCommerce de MailPoet

L'un des plugins WordPress de marketing par courriel les plus puissants et les plus populaires du marché. La [fonctionnalité WooCommerce](https://www.mailpoet.com/blog/mailpoet-woocommerce-features/) de MailPoet comprend également des fonctionnalités telles que les emails de panier abandonné et l'automatisation des emails, ainsi qu'un éditeur de modèles complet et facile à utiliser. De plus, ces fonctionnalités sont [disponibles gratuitement](https://www.mailpoet.com/blog/mailpoet-premium-free-for-1000-subscribers-or-less/) si tu as 1 000 abonnés ou moins.

- Plus de 100 000 installations actives.
- Des mises à jour sont publiées chaque semaine.
- Note de 4,7 étoiles sur 730 commentaires.
- MailPoet permet de concevoir 1 modèle d'email pour tous tes emails WooCommerce.
- Nous donnons à ce plugin une note de 5 sur 5. Il est facile à utiliser et rempli de fonctionnalités géniales ; toutes sont disponibles à partir d'un seul plugin et sans avoir à quitter ton tableau de bord WordPress.

Interface utilisateur de Kadence WooCommerce Email Designer

L'un des plugins les plus complets pour la personnalisation des emails WooCommerce. Tu peux télécharger tes propres logos, changer les couleurs et modifier le texte, le tout à partir de l'interface familière du personnalisateur de WordPress.

- Plus de 30 000 installations actives.
- Les mises à jour sont publiées tous les mois environ.
- 5 étoiles sur 63 commentaires.
- Kadence propose quelques modèles préconçus parmi lesquels tu peux choisir.
- Nous attribuerions à ce plugin une note de 4,5 sur 5. C'est un plugin gratuit puissant et flexible disponible pour personnaliser les emails de WooCommerce.

Un plugin extrêmement compétent qui prend en charge un large éventail de plugins et de courriels WordPress de base, ainsi que WooCommerce. Bien que la fonctionnalité WooCommerce soit un add-on premium, le plugin a certainement assez de fonctionnalités pour justifier un achat.

- Plus de 10 000 installations actives.
- Les mises à jour sont publiées tous les 3 mois environ.
- 5 étoiles sur 52 commentaires.
- Nous donnons à ce plugin une note de 4 sur 5. Bien qu'il soit riche en fonctionnalités et qu'il fonctionne avec plus que WooCommerce, la facilité d'utilisation laisse à désirer pour les utilisateurs les plus débutants.

Interface utilisateur d'Email Customizer pour WooCommerce

Un plugin freemium riche en fonctionnalités qui offre tout ce dont tu as besoin gratuitement, avec encore plus de fonctionnalités dans la version premium. Simple à utiliser et convivial pour les développeurs. Bien qu'il soit un nouvel acteur sur le marché, il vaut certainement la peine de s'y intéresser si tu veux donner une chance aux nouveaux joueurs.

- Plus de 1000 installations actives
- Les mises à jour sont publiées toutes les quelques semaines environ.
- 4,5 étoiles pour 6 commentaires.
- Nous attribuons à ce plugin une note de 4 sur 5. Une nouvelle entrée forte sur le marché avec un grand site de fonctionnalités. Le seul petit bémol est que certaines des fonctionnalités les plus puissantes dont tu pourrais avoir besoin sont réservées à la version premium.

Nous l'avons inclus car c'est la version officielle du dépôt WooCommerce. Cependant, il est uniquement premium et, à 79 $ pour une licence de site unique, il est plus cher que les autres et manque de fonctionnalités, même si on le compare à certaines offres gratuites.

Si tu aimes que ta boutique n'utilise que des extensions créées par WooCommerce, cela fera toujours l'affaire, mais sache qu'il existe de meilleures alternatives.

- Installations actives : N/A
- Mises à jour tous les deux mois environ.
- Classement par étoiles : N/A.
- Nous lui donnons une note de 3 sur 5. Bien qu'il fasse ce qu'il est censé faire, l'ensemble des fonctionnalités est insuffisant par rapport à d'autres plugins similaires et le prix est bien plus élevé que les autres offres que nous avons mentionnées.


## Notre verdict

S'il est possible de personnaliser tes modèles d'emails transactionnels dans WooCommerce, les autres plugins mentionnés offrent bien plus en termes de fonctionnalités et de rapport qualité-prix.

Les quatre plugins alternatifs mentionnés te permettront d'injecter ta marque dans tes emails transactionnels, mais c'est notre propre contribution à la liste, **MailPoet**, et le personnalisateur de **Kadence** qui se sont vraiment démarqués pour moi.

Les deux offrent une expérience utilisateur fantastique et ont plus que suffisamment de fonctionnalités pour transformer les emails WooCommerce ennuyeux en quelque chose que les lecteurs apprécient de recevoir.

Avec Kadence, j'ai particulièrement aimé la façon dont je pouvais modifier la taille des conteneurs dans mes emails. Je pouvais leur donner un aspect complètement différent des modèles standard proposés par WooCommerce, ce qui est parfait si tu cherches juste une solution pour les emails de WooCommerce.

Cependant, si tu souhaites un plugin capable de gérer l'ensemble de ton [e-commerce email marketing](https://www.mailpoet.com/blog/guide-woocommerce-email/), MailPoet te conviendrait mieux.

En plus de pouvoir personnaliser entièrement tes emails transactionnels, [MailPoet possède de nombreuses fonctionnalités supplémentaires](https://www.mailpoet.com/blog/mailpoet-woocommerce-features/), notamment des [emails de panier abandonné](https://www.mailpoet.com/blog/woocommerce-abandoned-cart-emails/), des emails automatisés basés sur l'activité des acheteurs, des lettres d'information et des analyses détaillées des performances des campagnes. Le tout à partir d'un seul endroit - ton tableau de bord WordPress !

En prime, MailPoet peut désormais se charger de [l'envoi de ces courriels transactionnels](https://www.mailpoet.com/blog/mailpoets-smtp-plugin/). De nombreuses personnes rencontrent des problèmes de délivrabilité de ces courriels et doivent s'appuyer sur un plugin SMTP supplémentaire pour la livraison. MailPoet propose désormais ce service en standard.


## Quatre meilleurs plugins WordPress SendGrid

L'objectif de base d'un plugin WordPress SendGrid est de connecter ton site WordPress au service de livraison SendGrid, idéalement en utilisant l'API de SendGrid. De cette façon, WordPress enverra ses courriels en utilisant SendGrid, plutôt que la fonction PHP Mail par défaut.

Cela fonctionnera à la fois pour les courriels natifs de WordPress et pour les notifications provenant de plugins, comme Contact Form 7.

Tous ces plugins t'aident à réaliser cette fonction de haut niveau. La différence, cependant, réside dans les fonctionnalités que chaque plugin offre en plus.

WP Mail SMTP est un plugin WordPress SMTP populaire qui t'aide à connecter WordPress à SendGrid, ainsi qu'à un certain nombre d'autres services de livraison d'emails, notamment Amazon SES, Mailgun, Gmail et d'autres.

En plus de cette connexion, il dispose également d'une version premium qui enregistre tous les emails que ton site envoie et te permet de désactiver certains emails et notifications de WordPress.

Pour :
Tu peux te connecter via l'API de SendGrid, qui est la méthode optimale pour connecter WordPress à SendGrid.
La version gratuite est très simple et facile à utiliser.

Inconvénients :
Tu dois payer pour accéder à la fonction d'enregistrement des emails, que certains autres plugins proposent gratuitement. Dans tous les cas, SendGrid enregistre également les courriels.

Pour commencer, MailPoet te permet de connecter WordPress à SendGrid afin que tu puisses envoyer tes courriels transactionnels WordPress habituels via SendGrid.

Cependant, MailPoet va encore plus loin que tous ces autres plugins - il te permet également d'envoyer tes propres courriels ou bulletins d'information personnalisés à l'aide de SendGrid. Par exemple, tu peux envoyer des courriels de marketing ou un résumé hebdomadaire automatique des derniers articles de ton blog.

Avantages :
Tu peux te connecter via l'API de SendGrid.
MailPoet fonctionne aussi bien pour les courriels transactionnels que pour tes propres courriels personnalisés ou séquences automatisées.
Tu peux concevoir tes courriels à l'aide d'un constructeur de newsletter par glisser-déposer.
Tu peux configurer des emails automatiques basés sur le contenu de WordPress, comme un condensé de tes derniers articles de blog ou de tes produits WooCommerce.
Tu peux créer des séquences d'automatisation d'emails, comme l'envoi d'emails de panier abandonné sur ta boutique WooCommerce.

Inconvénients :
Si tu veux juste envoyer des emails transactionnels via SendGrid, MailPoet a plus de fonctionnalités que tu n'en as besoin.

Il s'agit du plugin WordPress officiel de SendGrid, on pourrait donc penser qu'il est le premier sur cette liste. Cependant, bien qu'il s'agisse de l'offre officielle, SendGrid ne l'a pas mis à jour depuis des années et les critiques sont mitigées. C'est une situation où l'utilisation d'une solution tierce est probablement un meilleur choix (bien que j'aie personnellement utilisé le plugin officiel sans aucun problème).

En plus de configurer WordPress pour qu'il envoie des courriels via SendGrid, il comprend également un widget d'abonnement pour permettre aux gens de s'abonner à tes courriels de marketing.

Pour :
C'est le plugin officiel de SendGrid.
Il comprend un widget d'abonnement.
Il est compatible avec WordPress multisite.

Inconvénients
Bien qu'il s'agisse du plugin officiel, SendGrid ne l'a pas mis à jour depuis deux ans.
Certains utilisateurs signalent des problèmes avec le plugin dans les commentaires sur WordPress.org.

Post SMTP Mailer/Email Log est une version mise à jour et activement maintenue d'un plugin populaire appelé Postman SMTP.

Parmi de nombreux autres fournisseurs, il te permet de te connecter à l'API SendGrid pour envoyer les courriels de ton site.

Au-delà de cela, il enregistrera également tous les courriels que ton site envoie et il peut même t'envoyer des notifications du navigateur Chrome ou des messages Slack si tes courriels ne parviennent pas à être envoyés afin que tu puisses rapidement rectifier le problème. Gratuitement !

Pour :
C'est 100 % gratuit.
Tu peux te connecter via l'API de SendGrid.
Il inclut des fonctionnalités pour t'aider à surveiller les emails de ton site, comme la journalisation et les notifications d'échec.

Inconvénients :

- Si tu ne veux pas de ces fonctions de notification avancées, il a plus de fonctionnalités que nécessaire pour connecter WordPress à SendGrid.
    

### * Comment connecter WordPress à SendGrid pour envoyer des e-mails - MailPoet

[https://www.mailpoet.com/blog/how-to-connect-wordpress-with-sendgrid-to-deliver-emails/?utm_source=mailpoet&utm_medium=email&utm_campaign=april+newsletter+2](https://www.mailpoet.com/blog/how-to-connect-wordpress-with-sendgrid-to-deliver-emails/?utm_source=mailpoet&utm_medium=email&utm_campaign=april+newsletter+2)


Si tu veux améliorer la fiabilité et la délivrabilité des emails que ton site WordPress envoie, connecter WordPress à SendGrid est une excellente décision.

Par défaut, [WordPress essaie d'envoyer ses courriels en utilisant PHP Mail](https://www.mailpoet.com/blog/wordpress-newsletter-plugin-myths-debunked/) ce qui, si ton hébergeur ne le désactive pas complètement par défaut, garantira presque à coup sûr que tes courriels iront directement dans les dossiers de spam des destinataires.

[SendGrid](https://sendgrid.com/) t'aide à résoudre ce problème - c'est un service de livraison d'emails dédié qui s'assure que les emails que ton site WordPress envoie parviennent à tes utilisateurs. En général, tu l'utilises pour les courriels transactionnels (comme les notifications d'administration et les réinitialisations de mot de passe), mais tu peux aussi utiliser SendGrid pour envoyer des courriels de marketing (avec le bon plugin WordPress, bien sûr).

D'autres services comme [Amazon SES](https://aws.amazon.com/ses/) et [Mailgun](https://www.mailgun.com/) peuvent t'aider à accomplir la même chose, mais SendGrid est excellent parce qu'il inclut un plan gratuit qui te permet d'envoyer jusqu'à 100 courriels par jour *pour toujours*. Amazon n'a pas de plan gratuit sans engagement et Mailgun a récemment supprimé son plan gratuit à vie.

Si tu as besoin de dépasser la limite de 100 courriels par jour du plan gratuit, les plans payants de SendGrid commencent à 14,95 $ par mois pour un maximum de 50 000 courriels.

Dans cet article, nous partagerons avec toi certains des meilleurs plugins WordPress SendGrid. Ensuite, nous te montrerons étape par étape comment tout mettre en place, de la génération de ta clé API SendGrid à la configuration de ton site WordPress pour qu'il envoie ses courriels via SendGrid, et aussi pour voir tes taux d'ouverture et de clics


## Comment configurer WordPress pour envoyer des e-mails avec SendGrid

Pour ce tutoriel, nous utiliserons le plugin gratuit WP Mail SMTP. Cependant, le processus de base est le même pour tous ces plugins - la seule différence réside dans l'interface et les fonctionnalités une fois que tu as connecté WordPress à SendGrid.

En gros, si tu préfères utiliser un autre plugin parce qu'il correspond mieux à tes besoins en termes de fonctionnalités, tu devrais quand même pouvoir suivre ce tutoriel et arriver là où tu dois être 🙂 .

Quel que soit le plugin que tu utilises, tu devrais pouvoir tout mettre en place en 15 minutes environ.

Si tu préfères regarder une vidéo, cette vidéo YouTube de deux minutes passe en revue la plupart des étapes de ce tutoriel :


### 1. Créer un compte SendGrid et une clé API

Pour commencer, tu dois créer un compte SendGrid gratuit. SendGrid te permet d'envoyer jusqu'à 40 000 courriels gratuitement au cours de tes 30 premiers jours. Ensuite, tu peux envoyer jusqu'à 100 courriels par jour gratuitement pour toujours.

Donc, à moins que ton site WordPress ne dépasse les 100 emails par jour, il n'est pas nécessaire de sortir ta carte de crédit.

Une fois que tu t'es enregistré pour ton compte SendGrid gratuit, tu dois générer une clé API SendGrid. C'est ce qui te permet de connecter ton site WordPress au service SendGrid.

Pour générer une clé API SendGrid, va sur ce lien ou navigue vers Paramètres → Clés API dans ton tableau de bord SendGrid.

Ensuite, clique sur le bouton Créer une clé API :

Sur l'écran suivant :
Donne-lui un nom pour t'aider à t'en souvenir (par exemple, le nom de ton site WordPress).
Choisis l'accès complet.
Clique sur Créer et afficher.

SendGrid affichera alors ta clé API. Ne ferme pas cette fenêtre car tu auras besoin de cette clé dans les prochaines étapes et SendGrid ne te la montrera plus.

Tu as accidentellement fermé la fenêtre ? Ne t'inquiète pas ! Bien que tu ne puisses plus afficher la clé, tu peux simplement créer une nouvelle clé API, ce n'est donc pas grave :
    

### 2. Installe le plugin WP Mail SMTP

Ensuite, va dans ton tableau de bord WordPress et installe le plugin gratuit Easy WP SMTP.


### 3. Configure WP Mail SMTP

Une fois que tu as installé le plugin, va dans la nouvelle zone WP Mail SMTP de ton tableau de bord WordPress pour le configurer.

En haut, configure les détails de base comme le nom "From" et l'adresse email qui s'afficheront sur les emails que ton site envoie :

Ensuite, fais défiler vers le bas jusqu'à la section Mailer et sélectionne SendGrid.

En dessous, colle ta clé API SendGrid obtenue lors de la première étape et clique sur Enregistrer les paramètres :

Et c'est tout !


### 4. Envoie un courriel de test

À ce stade, ton site WordPress devrait être correctement configuré pour envoyer des courriels via SendGrid.

Cependant, c'est l'une des choses que tu veux absolument tester avant de t'arrêter là.

Pour cela, va sur l'onglet Email Test dans les paramètres du plugin WP Mail SMTP.

Saisis ta propre adresse e-mail et clique sur Envoyer un e-mail :

Si tout se passe bien, tu devrais voir apparaître dans ta boîte de réception un email qui ressemble à ceci :


### 5. Configure MailPoet (optionnel)

À ce stade, ton site WordPress enverra automatiquement ses courriels transactionnels à l'aide de SendGrid. Encore une fois, les courriels transactionnels sont des courriels de base comme les notifications de nouveaux commentaires, les réinitialisations de mot de passe, etc.

Mais qu'en est-il si tu veux aussi envoyer des bulletins d'information et des courriels de marketing via SendGrid ?

Dans ce cas, tu peux utiliser le plugin gratuit MailPoet. Tu pourras créer tes propres courriels ponctuels ou séquences d'automatisation à l'aide d'un éditeur par glisser-déposer. Tu pourras ensuite les envoyer via l'API de SendGrid :


### 6. Affiche les journaux de tes courriels sur SendGrid

Si tu veux voir tes journaux d'emails sans acheter la version premium de WP Mail SMTP (*ou utiliser un autre plugin WordPress SendGrid*), tu peux aussi voir les journaux d'emails sur le site web de SendGrid.

Tu peux voir les statistiques de livraison de base à partir de l'onglet **Tableau de bord** :

Pour un aperçu plus détaillé des emails spécifiques que ton site envoie, tu peux aller dans l'onglet **Activité**.

Tu peux y rechercher les courriels que ton site a envoyés à une adresse électronique spécifique ou cliquer sur le bouton **Afficher toute l'activité** pour afficher tous les courriels que ton site a envoyés au cours des trois derniers jours :

Tu peux aussi configurer SendGrid pour qu'il te délivre un condensé d'emails qui résume l'activité de ton site. Tu peux choisir différentes fréquences, telles que quotidienne, hebdomadaire ou mensuelle.

Pour configurer ces alertes, va dans **Paramètres → Paramètres d'alerte → Créer une nouvelle alerte** :

Voici un exemple de ce à quoi ressemble la section **Stats de l'email** d'un email d'alerte :


## Commence à utiliser SendGrid sur WordPress dès aujourd'hui

Si tu veux t'assurer que les courriels de ton site sont envoyés de manière fiable et arrivent dans les boîtes de réception des gens, tu as besoin d'une alternative à l'approche par défaut de WordPress PHP Mail.

SendGrid est une de ces alternatives qui te permet d'envoyer gratuitement jusqu'à 100 courriels par jour.

Pour configurer SendGrid avec WordPress, tu dois.. :

- Choisir un [plugin WordPress SMTP](https://www.mailpoet.com/blog/top-three-smtp-plugins-for-wordpress/) qui prend en charge l'API de SendGrid. Nous t'avons donné quatre options dans cet article.
- Crée un compte SendGrid gratuit et génère une clé API.
- Ajoute ta clé API au plugin que tu as choisi.
- Envoie un e-mail de test pour t'assurer que tout fonctionne.

**Et si tu veux aller au-delà des emails transactionnels et envoyer également des newsletters et des emails marketing avec SendGrid, tu peux utiliser MailPoet. [Essaie-le dès aujourd'hui](https://wordpress.org/plugins/mailpoet/) - c'est gratuit!**.


### * backup wordpress

n

Dans cet article, j'aborderai les sujets suivants :

* Ce que signifie sauvegarder l'ensemble de ton site.
* Les mesures de prévention pour éviter d'utiliser ces sauvegardes.
* Pourquoi la sauvegarde sans plugin est meilleure que la sauvegarde *avec* plugin ?
* Différentes façons de sauvegarder ton site : automatique, manuelle et autres options.
* Pourquoi tu ne devrais jamais mettre tous tes œufs dans le même panier, ou compter sur une seule méthode de sauvegarde.

### *SAUVEGARDER, C'EST BIEN : MAIS ATTENTION !

MAIS ASSURE-TOI AUSSI DE METTRE EN PLACE DES MESURES DE PRÉVENTION*.

Avant de
Avant de parler plus en détail de la sauvegarde, réalise que des mesures de prévention peuvent et doivent être mises en place pour garder ton site sûr et sécurisé.
être mises en place pour assurer la sécurité de ton site.

Ces mesures
comprennent :

- La mise à jour des plugins et des thèmes
- Utiliser des combinaisons de nom d'utilisateur et de mot de passe fortes (c'est-à-dire pas **"admin "** et **"password "**)
- Créer des [préfixes de table de base de données](http://www.wpbeginner.com/wp-tutorials/how-to-change-the-wordpress-database-prefix-to-improve-security/) forts (c'est-à-dire ne pas utiliser l'élémentaire **"wp "**).

Mais
même lorsque tu es en sécurité et que tu mets en place toutes les bonnes mesures de sécurité : *les choses peuvent toujours mal tourner.*

C'est pourquoi il est important d'avoir un système de sauvegarde pour ton (tes) site(s) WordPress.
C'est pourquoi il est important d'avoir un système de sauvegarde pour ton ou tes sites WordPress.

C'est pourquoi il est important d'avoir un système de sauvegarde pour ton ou tes sites WordPress.
Cet article traite des différentes façons dont tu peux le faire, mais sans plugin.


### *ATTENDS...POURQUOI NE PAS UTILISER UN PLUGIN WORDPRESS ?

PLUGIN!*

Il n'y a
Il n'y a rien de mal à utiliser un plugin de sauvegarde fiable comme [BackupBuddy.](https://ithemes.com/purchase/backupbuddy/) Cependant, il est préférable d'effectuer la sauvegarde au niveau du serveur et non au niveau du site,
la sauvegarde doit être effectuée au niveau du serveur, et non au niveau du site.

Réfléchis
Pense à ça : un plugin qui fait des sauvegardes automatiques de ton (peut-être) très gros site,
est comme un poids supplémentaire sur ton serveur. Chaque fois qu'il effectue une sauvegarde (qui peut être quotidienne), c'est un poids supplémentaire pour ton serveur.
qui peut être quotidienne), il fait du "travail", ce qui peut ralentir ton site, entre autres choses.
entre autres choses.

Aussi,
selon mon opinion professionnelle, moins il y a de plugins sur ton site WordPress, mieux c'est.
mieux c'est.

Bien que
certains ne soient pas d'accord, de mon point de vue, plus tu as le contrôle sur
ton site et ses rouages, mieux c'est. Il est judicieux de s'en remettre à toi-même plutôt qu'à une tierce personne.
sur toi-même plutôt que sur un tiers, surtout lorsqu'il s'agit de sauvegarder les fichiers de ton précieux site.
fichiers précieux de ton site.


#### 2 différents types de sauvegardes

Avant de
de plonger dans les différentes façons de sauvegarder ton site sans plugin,
parlons de ce que tu peux et dois sauvegarder : **les fichiers du site et les bases de données**.


### *FICHIERS DE TON SITE WORDPRESS*

Ton site
site WordPress est composé de différents fichiers. Selon la [documentation de WordPress
documentation,](https://codex.wordpress.org/WordPress_Backups#Backing_Up_Your_WordPress_Site)ton site WordPress est composé de ces six éléments, d'une manière ou d'une autre.
d'une manière ou d'une autre :

I**Installation centrale de WordPress:** les fichiers que tu
Lorsque tu télécharges WordPress, tu reçois les fichiers suivants (photo ci-dessous)

1. **WordPress Plugins:** comme expliqué ci-dessus, fonctionnalité ajoutée à un site via des scripts PHP, se trouvant dans le dossier wp-content.
2. **WordPress Themes:** te permet de personnaliser l'apparence et certaines fonctionnalités du site, se trouve également dans le dossier wp-content.
3. **Images et fichiers:** différentes images et fichiers ajoutés pour le panneau d'administration ainsi que pour le site lui-même.
4. **scripts Java et PHP, et autres fichiers de code:** peuvent être ajoutés au backend interne ou au site orienté vers l'extérieur.
5. **Fichiers supplémentaires et pages Web statiques:** tout ce que tu pourrais ajouter.

Lorsque tu construis un site WordPress, tu n'as pas vraiment besoin d'être un expert.
Lorsque tu construis des sites WordPress, tu n'as pas grand-chose à bricoler en dehors des plugins et des thèmes de WordPress.
et les thèmes. (Tous deux se trouvent dans le répertoire wp-content).
Cependant, il est toujours sage de sauvegarder TOUTES les parties de ton site pour ne pas te retrouver à essayer de restaurer seulement une partie de ton site, ou pire encore, à essayer d'effacer toutes les données.
de restaurer seulement une partie de ton site, ou pire, d'essayer de comprendre quelle partie de ton site est manquante afin de pouvoir la reconstituer.
de ton site est manquante pour que tu puisses la reconstituer ! Sauvegarder l'ensemble du site
site est beaucoup plus facile à restaurer en cas de problème.

Pour
un examen plus approfondi des fichiers WordPress, consulte le [Codex WordPress](https://codex.wordpress.org/WordPress_Files).

Réalise
que lorsque tu fais des sauvegardes au niveau du serveur, la plupart des hébergeurs sauvegardent également les fichiers de ton site.
de ton site. Cependant, cela peut prendre un certain temps pour restaurer tous ces fichiers à partir de ton serveur si ton site devait tomber en panne.
serveur si ton site devait tomber en panne. Et il est évident que tu veux que tout fonctionne le plus vite possible.
et fonctionner à nouveau le plus rapidement possible.

De plus, il est toujours bon d'avoir une copie supplémentaire,
il est toujours bon d'avoir une copie supplémentaire. Comme je le dis plus loin : il n'est jamais
d'avoir tous tes œufs dans le même panier.

Tu peux facilement sauvegarder ou copier les fichiers de ton site à partir de ton FTP.
peux facilement sauvegarder, ou copier, les fichiers de ce site à partir de ton FTP. (C'est une méthode de
méthode de sauvegarde que j'utilise fréquemment).

Cependant,
Cependant, il existe aussi d'autres logiciels, comme [WinSCP](http://winscp.net/eng/index.php), qui font des copies miroirs des fichiers du site et les enregistrent sur ton bureau, ce qui peut te faire gagner du temps.
et les enregistrent sur ton bureau, ce qui peut te faire gagner du temps.

Et
pour les utilisateurs plus avancés qui utilisent l'interface de ligne de commande [WP-CLI](http://wp-cli.org/), la sauvegarde des fichiers du site peut se faire à l'aide d'une interface de ligne de commande [WP-CLI].
l'interface de ligne de commande, la sauvegarde des fichiers du site peut être effectuée à partir de la ligne de commande et sauvegardée sur ton ordinateur.
sauvegardés sur ton ordinateur.

Et
bien sûr, tu peux généralement faire des copies de sauvegarde des fichiers du site directement à partir de ton serveur.
serveur.

Comme tu le vois, il y a plusieurs façons de sauvegarder les fichiers de ton site Web.
tu peux le constater, il y a plusieurs façons de sauvegarder les fichiers de ton site Web. Ce qui compte le plus, c'est que tu sauvegardes
ce qui compte le plus, c'est que tu *sauvegardes* les fichiers de ton site WordPress.
les fichiers de ton site WordPress.


### *Ta base de données WordPress*

Sauvegarder
sauvegarder les fichiers de ton site ne suffit pas.

En effet, les fichiers de ton site **ne contiennent pas toutes les données de ton site.
fichiers de ton site **ne contiennent pas** toutes les
les informations de ton site (comme les articles de blog et les pages). Pour avoir une réplique complète de ton site, tu dois aussi sauvegarder ta base de données MySQL.
réplique complète de ton site, tu dois aussi sauvegarder ta base de données MySQL.

La base de données MySQL est l'endroit où toutes les données de WordPress sont stockées.
MySQL est l'endroit où vivent toutes les données de WordPress. Des données comme :

- Les articles
- Utilisateurs
- les commentaires
- Catégories et étiquettes (taxonomies)
- Et ainsi de suite

En regardant
à mon article, [Comment installer
WordPress on Your Mac Using MAMP](http://skillcrush.com/2015/04/14/install-wordpress-mac/), dans lequel j'ai créé un nouveau site WordPress
localement avec une base de données nommée **"skillcrush_db "**,
tu peux voir les tables de base de données fournies par WordPress.

Au fil du temps, tu peux acquérir d'autres tables.
Au fil du temps, tu peux acquérir d'autres tables. (En fonction des plugins utilisés et des autres types
de fonctionnalités ajoutées).

Ces
tables contiennent certains contenus du site. Par exemple, voici à quoi ressemble la table **skillcrush_db posts**.

Comme tu peux le voir, il n'y a que deux articles publiés.
tu peux le voir, il n'y a que deux articles publiés. (Les deux ont été livrés avec la nouvelle installation de
nouvelle installation de WP).

Bien sûr, un site plus grand avec beaucoup d'articles et de pages aura beaucoup plus d'entrées.
Bien sûr, un site plus grand avec beaucoup d'articles et de pages aura beaucoup plus d'entrées.

**Le fait est que tu veux sauvegarder ta base de données MySQL en même temps que les fichiers de ton site Web.
MySQL en même temps que les fichiers de ton site Web.

Ces deux éléments, les fichiers du site et la base de données, constituent la base du site.
fichiers du site et ta base de données, constituent l'ensemble de ton site.
site. **L'un sans l'autre n'est pas un site complet.
site complet.**


[Copie de Choisir les meilleurs modèles de sites Web WordPress - 10Web](UQJJMQQUOGLIQMU)

Selon une étude de cas de StrangeLoop portant sur Amazon, Google et d'autres sites de premier plan, un retard d'une seconde dans le temps de chargement des pages peut entraîner une perte de 7 % des conversions, 11 % de pages vues en moins et 16 % de baisse de la satisfaction des clients.Saviez-vous que Google pénalise les sites lents ?

[site vitrine](https://www.notion.so/site-vitrine-e160d3189dec4bfb85692e36c11e4f13?pvs=21)

[Créez un site moderne et professionnel avec WordPress 5 - OpenClassroomshttps://openclassrooms.com/fr/courses/5489551-creez-un-site-moderne-et-professionnel-avec-wordpress-5 1](https://www.notion.so/Cr-ez-un-site-moderne-et-professionnel-avec-WordPress-5-OpenClassroomshttps-openclassrooms-com-f-fcaa2d79ac604d669308e66eaed7e346?pvs=21)