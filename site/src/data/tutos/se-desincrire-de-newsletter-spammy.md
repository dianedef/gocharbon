---
section: tutos
tags:
- Tutoriels
imageNameKey: null
title: Se Désincrire De Newsletter Spammy
author: Diane
description: 'Découvre Se Désincrire De Newsletter Spammy : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

🔹✅💡🥊🛡️🔇🧠📣🎁🏆📚🛠💥🙌😱❌✂️

# Comment se désabonner des listes de diffusion et des newsletters indésirables dans Gmail.

Unroll.me est un service en ligne gratuit qui te permet de te désabonner facilement des newsletters et autres messages groupés dans Gmail. Tu devras cependant accorder un accès complet à ta boîte aux lettres Gmail et à tes contacts Google pour qu'Unroll.me puisse supprimer automatiquement ton adresse électronique de diverses listes de diffusion.

Ce matin, il a été [révélé](https://twitter.com/labnol/status/856193422578679808) qu'Unroll.me racle silencieusement ta boîte aux lettres Gmail et vend les données à Uber. Il est peut-être caché quelque part dans les conditions d'utilisation que l'appli peut partager tes données avec d'autres entreprises, mais qui lit vraiment les petits caractères. Si cela t'inquiète, voici un [guide simple](https://twitter.com/labnol/status/856198650027954176) sur la façon d'empêcher l'application d'accéder à tes e-mails Gmail à l'avenir.

Le [tweet](https://twitter.com/codepo8/status/558568726552117248) de Christian Heilmann - _Feature request for Gmail : automatically find and follow the unsubscribe link in all highlighted emails_ - m'a incité à créer un système automatisé pour désabonner ton adresse Gmail des expéditeurs en masse. Voici à quoi cela ressemble :


## [](https://www.labnol.org/internet/gmail-unsubscribe/28806/?ref=producthunt#how-to-unsubscribe-from-email-newsletters-in-gmail)Comment se désabonner des lettres d'information dans Gmail ?

Ce que j'ai maintenant, c'est un simple script Google qui analyse le contenu des courriels en vrac et trouve le lien de désabonnement. Si un lien de désabonnement est trouvé, le script ouvre le lien et ton email est automatiquement désabonné. Dans certains cas, l'expéditeur de messages groupés te demande d'envoyer un message à une adresse électronique spéciale pour te désabonner et notre script Google peut également le faire.

Le grand avantage est que tu n'as pas besoin d'accorder l'accès à ton compte Gmail à un service tiers et que tu peux ajouter les e-mails d'abonnement à la file d'attente de désabonnement à partir de n'importe quel client de messagerie, y compris les applications de bureau et mobiles. Commençons :

1. [Clique ici](https://docs.google.com/spreadsheets/d/18hVYvHMeM1R7a_leHxGGjp2qzgRSd_-o7HxTF4-CM70/copy) pour copier la feuille de désabonnement de Gmail sur ton Google Drive.
2. Va dans le _menu Gmail_ de la feuille Google (voir la capture d'écran ci-dessus) et choisis _Configurer_. Autorise le script à accéder à ton compte Gmail. C'est un [Script Google](https://www.labnol.org/code/19959-gmail-unsubscribe) open source qui s'exécute et qui ne stocke ni ne télécharge un seul octet de tes données.
3. Dans la boîte de réception, saisis le nom de ton étiquette Gmail (la valeur par défaut est _Unsubscribe_) et tous les courriels marqués de cette étiquette seront désabonnés. Enregistre tes modifications.

Le programme de désabonnement Gmail est maintenant initialisé et fonctionne en arrière-plan. Tu peux maintenant appliquer l'étiquette **Unsubscribe** à n'importe quel message électronique dans Gmail et tu seras automatiquement désabonné en 10 à 15 minutes. Tout est consigné dans la feuille Google pour que tu saches ce qui se passe en coulisses. Essaie-le !

De plus, la solution fonctionne partout - tu peux appliquer l'étiquette aux bulletins d'abonnement non désirés sur le site Web de Gmail, les applications mobiles pour Gmail sur iPhone et Android ou même les clients de messagerie tiers comme Microsoft Outlook (déplacer l'e-mail vers le dossier Désabonnement) ou Apple Mail.

### [](https://www.labnol.org/internet/gmail-unsubscribe/28806/?ref=producthunt#how-gmail-unsubscribes-from-mailing-lists)Comment Gmail se désabonne des listes de diffusion

Tous les expéditeurs légitimes d'e-mails en nombre incluent un champ [List-Unsubscribe](https://tools.ietf.org/html/rfc2369#section-3.2) dans l'en-tête du message qui contient une URL ou une adresse e-mail pour [se désabonner d'une liste de diffusion](IETFUZADAYVQNPK). Voici une capture d'écran :


Tu peux voir ces détails en ouvrant n'importe quel message groupé dans Gmail et en choisissant "Afficher l'original" dans le menu. Dans d'autres cas, le lien de désabonnement peut être inclus dans le corps du message avec un texte d'ancrage comme "cliquez ici pour vous désabonner" - le script est suffisamment intelligent pour reconnaître tous ces liens, il les ouvre pour toi et supprime ton adresse électronique de la liste de diffusion.