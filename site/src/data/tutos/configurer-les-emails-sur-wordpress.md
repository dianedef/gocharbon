---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Configurer Les Emails Sur Wordpress
author: Diane
description: 'Découvre Configurer Les Emails Sur Wordpress : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Configurer les emails sur WordPress

Par defaut, WordPress envoie ses emails avec la fonction PHP `mail()`. Le probleme ? La majorite de ces emails finissent dans les spams ou ne sont jamais delivres. Formulaire de contact, notification de commande WooCommerce, reinitialisation de mot de passe : tout passe a la trappe. La solution, c'est de configurer un vrai serveur SMTP.

## Pourquoi tes emails WordPress ne fonctionnent pas

Le probleme vient de la facon dont WordPress envoie ses mails :

- **Pas d'authentification** : le serveur qui envoie n'est pas verifie, donc les boites mail le traitent comme suspect
- **IP partagee** : sur un hebergement mutualise, tu partages l'IP avec des centaines de sites. Si un seul fait du spam, tout le monde est penalise.
- **Pas de SPF/DKIM** : sans ces enregistrements DNS, tes mails n'ont aucune credibilite aux yeux de Gmail, Outlook, etc.

Resultat : tes clients ne recoivent pas les confirmations de commande, les nouveaux inscrits ne recoivent pas leur mot de passe, et toi tu ne vois meme pas les messages de ton formulaire de contact.

## Etape 1 : Installer WP Mail SMTP

C'est le plugin de reference pour resoudre ce probleme :

1. Va dans **Extensions > Ajouter**
2. Cherche **WP Mail SMTP by WPForms**
3. Installe et active
4. Va dans **WP Mail SMTP > Reglages**

Le plugin va te demander de choisir un service d'envoi (mailer).

## Etape 2 : Choisir ton service SMTP

Plusieurs options selon ton volume et ton budget :

### Brevo (ex-Sendinblue) - Recommande pour debuter

- **Gratuit** : 300 emails/jour (pas de limite dans le temps, le plan gratuit est permanent). Attention : les emails envoyes en gratuit portent la mention "Sent with Brevo". Stockage de 100 000 contacts inclus.
- **Plans payants** : Starter a partir de 9 USD/mois pour 5 000 emails/mois. Business a partir de 18 USD/mois. Tarification basee sur le volume d'envoi, pas sur le nombre de contacts.
- **Avantage** : interface en francais, fiable, facile a configurer, API robuste, CRM integre
- **Ideal pour** : sites vitrine, blogs, petits e-commerces

Configuration :
1. Cree un compte sur [brevo.com](https://www.brevo.com)
2. Va dans **SMTP & API > Cles API**
3. Genere une cle API
4. Dans WP Mail SMTP, choisis **Brevo** comme mailer
5. Colle ta cle API

### Gmail / Google Workspace

- **Gratuit** avec un compte Gmail (limite a 500 mails/jour)
- **Configuration** : via OAuth 2.0 (un peu technique mais bien guide par le plugin)
- **Ideal pour** : usage personnel ou petite equipe

### Amazon SES

- **Prix** : 0.10 USD pour 1 000 emails envoyes. Les pieces jointes sont facturees separement a 0.12 USD/Go. Les IP dediees coutent 24.95 USD/mois par IP.
- **Free tier** : 3 000 emails/mois gratuits pendant les 12 premiers mois. Depuis juillet 2025, les nouveaux comptes AWS recoivent jusqu'a 200 USD de credits free tier utilisables sur SES.
- **Ideal pour** : gros volumes (newsletters, e-commerce avec beaucoup de commandes)
- **Configuration** : plus technique, necessite un compte AWS et la configuration des identites d'envoi (domaine ou adresse email)

### SMTP generique (ton hebergeur)

Si ton hebergeur fournit un SMTP (OVH, o2switch, Infomaniak) :
1. Dans WP Mail SMTP, choisis **Autre SMTP**
2. Renseigne : serveur SMTP, port (587 en general), identifiant, mot de passe
3. Chiffrement : TLS

## Etape 3 : Configurer les enregistrements DNS

Pour que tes mails arrivent a coup sur, configure ces 3 enregistrements dans la zone DNS de ton domaine :

### SPF (Sender Policy Framework)

Indique quels serveurs ont le droit d'envoyer des mails pour ton domaine.

```
Type: TXT
Nom: @
Valeur: v=spf1 include:brevo.com ~all
```

(Adapte `include:` selon ton service SMTP)

### DKIM (DomainKeys Identified Mail)

Signe numeriquement tes emails pour prouver qu'ils n'ont pas ete modifies.

Chaque service SMTP te fournit un enregistrement DKIM a ajouter en DNS. Par exemple chez Brevo, tu recois une cle a ajouter comme enregistrement TXT.

### DMARC

Dis aux serveurs de reception quoi faire avec les mails qui echouent aux verifications SPF/DKIM.

```
Type: TXT
Nom: _dmarc
Valeur: v=DMARC1; p=none; rua=mailto:ton@email.com
```

Commence par `p=none` (surveillance) puis passe a `p=quarantine` quand tu es sur que tout fonctionne.

## Etape 4 : Tester l'envoi

Dans WP Mail SMTP, va dans l'onglet **Test d'email** :

1. Entre une adresse email de test
2. Clique sur **Envoyer un email**
3. Verifie que tu le recois bien dans ta boite de reception (pas les spams)

Si ca ne marche pas :
- Verifie tes identifiants SMTP
- Verifie que le port 587 n'est pas bloque par ton hebergeur
- Teste avec le port 465 (SSL) en alternative
- Verifie les enregistrements DNS avec [MXToolbox](https://mxtoolbox.com)

## Etape 5 : Configurer l'adresse d'expediteur

Dans **WP Mail SMTP > Reglages** :

- **Email d'expediteur** : utilise une adresse de ton domaine (`contact@tonsite.com`), pas un Gmail
- **Forcer l'email d'expediteur** : coche cette case pour que tous les plugins utilisent cette adresse
- **Nom d'expediteur** : le nom qui s'affiche dans la boite mail du destinataire (ton nom ou celui de ta marque)

## Gerer les emails de WooCommerce

Si tu as une boutique WooCommerce, la configuration SMTP s'applique automatiquement a tous les emails transactionnels :

- Confirmation de commande
- Expedition
- Factures
- Reinitialisation de mot de passe

Verifie dans **WooCommerce > Reglages > Emails** que chaque type d'email est bien active et personnalise les templates si besoin.

## Astuces

- **Teste avec mail-tester.com** : envoie un email de test a l'adresse fournie par le site, tu recois un score sur 10 avec les points a corriger
- **Active le log des emails** : WP Mail SMTP Pro garde un historique de tous les mails envoyes. Utile pour diagnostiquer les problemes.
- **Ne mets jamais tes identifiants SMTP dans un email ou un ticket de support** : ce sont des credentials sensibles
- **o2switch** et **Infomaniak** offrent un SMTP integre de bonne qualite, parfois suffisant sans service externe
- Si tu envoies plus de 1 000 mails/jour, passe sur un service dedie (Brevo, Mailgun, Amazon SES)

## Alternatives a WP Mail SMTP

- **Post SMTP Mailer/Email Log** : alternative gratuite et open source a WP Mail SMTP. Supporte OAuth 2.0, les logs d'emails, et les notifications d'echec. Plus de 300 000 installations actives.
- **FluentSMTP** : plugin gratuit par FluentCRM, supporte Amazon SES, SendGrid, Mailgun, Brevo, et d'autres. Interface moderne et logs detailles.
- **Solid Mail** (par SolidWP) : nouveau plugin SMTP integre a la suite SolidWP (Solid Security, Solid Backups). Interface simple et integration native.

## Outils mentionnes

- **WP Mail SMTP** : plugin WordPress de reference pour la configuration SMTP, par WPForms. Plus de 3 millions d'installations actives, note 4.8/5. Version gratuite avec les mailers essentiels (Brevo, Gmail/Google Workspace, Amazon SES, Mailgun, SMTP generique). Version Pro a partir de 39 USD/an (1 site) avec logs d'emails, tracking d'ouverture/clic, alertes d'echec, backup de connexion, routage intelligent. Version Elite a 89 USD/an avec configuration "White Glove" (ils configurent tout pour toi). Version Agency a 389 USD/an pour 100 sites.
- **Brevo** (ex-Sendinblue) : service SMTP gratuit jusqu'a 300 mails/jour, sans limite dans le temps. Inscription sur [brevo.com](https://www.brevo.com). Plan Starter a 9 USD/mois.
- **Amazon SES** : service SMTP AWS pour les gros volumes a 0.10 USD/1 000 emails. Free tier de 3 000 emails/mois pendant 12 mois.
- **MXToolbox** : verification des enregistrements DNS sur [mxtoolbox.com](https://mxtoolbox.com)
- **mail-tester.com** : test de delivrabilite et scoring sur 10 points, gratuit
