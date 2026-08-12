---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Résoudre Le Problème De Non Envoi D'E Mails De Wordpress
author: Diane
description: 'Découvre Comment Résoudre Le Problème De Non Envoi D''E Mails De Wordpress
  : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

La raison la plus courante pour laquelle des e-mails disparaissent est que votre serveur d'hébergement WordPress n'est pas correctement configuré pour utiliser la fonction PHP mail().

Même si votre hébergement est configuré pour l'utiliser, de nombreux fournisseurs de services de messagerie tels que Gmail et d'autres utilisent une variété d'outils pour réduire les spams. Ces outils tentent de détecter qu'un e-mail provient réellement de l'endroit d'où il prétend provenir. C'est la raison pour laquelle nous recommandons à tout le monde d'utiliser SMTP pour envoyer des e-mails dans WordPress. SMTP (Simple Mail Transfer Protocol) est la norme de l'industrie pour l'envoi d'e-mails.

Contrairement à la fonction PHP mail(), SMTP utilise une authentification appropriée qui conduit à une délivrabilité élevée des e-mails.

WordPress a un plugin WP Mail SMTP qui configure votre site WordPress pour envoyer des e-mails en utilisant SMTP au lieu de la fonction PHP mail().

Vous pouvez l'utiliser pour vous connecter à tous les services SMTP populaires tels que SendinBlue, Gmail (G Suite), Office365, Amazon SES, etc. Vous devrez commencer par entrer le nom et l'adresse e-mail professionnelle d'où proviennent les e-mails de votre site. Assurez-vous d'utiliser ici la même adresse e-mail que celle que vous utiliserez pour votre service de messagerie SMTP. Vous pouvez choisir de forcer les e-mails à utiliser ce nom et cette adresse e-mail, même si d'autres plugins (comme WPForms) ont des paramètres différents. WP Mail SMTP remplacera les paramètres des autres plugins.

Après cela, vous devez choisir un service de messagerie SMTP pour votre site. Configurer un sous-domaine pour votre site Web Tout d'abord, vous devrez configurer un sous-domaine. C'est comme une section distincte de votre site. Nous vous suggérons d'utiliser [mail1.votredomaine.com](http://mail1.votredomaine.com/).

Remarque : Votre hébergeur WordPress peut ne pas vous autoriser à utiliser le courrier comme sous-domaine, c'est pourquoi nous avons également mis le 1 dedans.

Pour ajouter votre sous-domaine, connectez-vous à votre compte d'hébergement Web et recherchez la section Domaines de votre panneau de contrôle. Dans votre compte Sendinblue, allez dans "Paramètres" puis recherchez "Vos expéditeurs" et cliquez sur le bouton "Configurer" Saisissez le sous-domaine entier (par exemple, [mail1.votresite.com](http://mail1.votresite.com/)) et cochez la case à côté de "Je souhaite utiliser ce nom de domaine pour signer numériquement mes e-mails (SPF, DKIM, DMARC)".

Ensuite, cliquez sur "Enregistrer" et vous verrez une fenêtre contextuelle avec plusieurs enregistrements DNS répertoriés. Vous devrez ajouter 3 des enregistrements TXT fournis par Sendinblue ici. Complétez le premier enregistrement comme suit : Enregistrement de l'hôte : mail._domainkey.mail1 Type d'enregistrement : TXT Valeur TXT : copiez-la depuis Sendinbl

ue. Durée de vie : 1 jour

Conseils : Host Record peut être appelé Host ou Name par votre hébergeur. Modifiez mail1 si vous avez utilisé quelque chose de différent pour votre sous-domaine. Le type d'enregistrement peut ne pas être requis. La valeur TXT peut également être appelée données TXT : c'est le premier long morceau de code dans les détails de Sendinblue. Le TTL peut être de 24 heures ou de 86 400 secondes (les deux équivalent à 1 jour). Si vous utilisez GoDaddy, réglez-le sur 1 heure.

Une fois que vous avez ajouté le premier enregistrement, cliquez sur "Enregistrer".

Ensuite, vous devez ajouter le deuxième enregistrement. Complétez-le comme suit :

Enregistrement de l'hôte : mail1 Type d'enregistrement : TXT Valeur TXT : v=spf1 include:spf.sendinblue.com mx ~all Durée de vie : 1 jour

Une fois que vous avez terminé, cliquez sur "Enregistrer".

Après avoir enregistré cela, vous devez ajouter le troisième enregistrement. Complétez-le comme suit :

Enregistrement de l'hôte : mail1 Type d'enregistrement : TXT Valeur TXT : copiez-la depuis Sendinblue. C'est le troisième morceau de code. Durée de vie : 1 jour

Une fois que vous avez terminé, continuez et enregistrez également cet enregistrement.

Attention : Sendinblue dispose également d'un quatrième morceau de code pour un enregistrement DMARC. Vous n'en avez pas besoin et nous vous recommandons fortement de l'ignorer, sauf si vous avez de l'expérience avec la configuration DMARC.

Après avoir ajouté vos enregistrements, retournez sur Sendinblue. Pour chaque enregistrement, cliquez sur le bouton "Enregistrement ajouté". Veuillez le vérifier. Cela peut prendre 24 à 48 heures avant que Sendinblue ne puisse vérifier vos enregistrements, mais c'est souvent beaucoup plus rapide. Revenez à vos paramètres SMTP WP Mail dans votre tableau de bord WordPress. Vous devriez déjà avoir saisi l'adresse e-mail de l'expéditeur et le nom de l'expéditeur, mais si ce n'est pas le cas, vous pouvez le faire maintenant.

Laissez la case "Return Path" décochée car cette option n'est pas utilisée par Sendinblue.

Ensuite, cliquez sur « Sendinblue » pour votre expéditeur. Vous devrez vous rendre sur votre compte Sendinblue pour trouver votre clé API. Cliquez simplement sur le lien sous la case "Clé API" et le tableau de bord de votre compte Sendinblue s'ouvrira au bon endroit, dans un nouvel onglet.

Copiez la clé d'API v3 à partir de cette page.

Toutes nos félicitations. Vous avez maintenant tout configuré. La dernière étape consiste à envoyer un e-mail de test pour s'assurer que tout fonctionne.

Accédez à l'onglet "Email Test" de WP Mail SMTP et entrez une adresse e-mail à laquelle envoyer un e-mail. Il s'agira par défaut de l'adresse e-mail de l'administrateur du site. Cliquez sur "Envoyer un e-mail".

Vous devriez voir le message "L'e-mail HTML de test a été envoyé avec succès!" Vérifiez votre boîte de réception pour voir s'il est arrivé. Cela ressemblera à ceci