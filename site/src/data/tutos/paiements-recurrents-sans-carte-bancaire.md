---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Paiements Récurrents Sans Carte Bancaire
author: Diane
description: 'Découvre Paiements Récurrents Sans Carte Bancaire : outil français pour
  entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Mettre en place des paiements recurrents sans carte bancaire

Si tu vends des abonnements, des formations en plusieurs fois ou des services mensuels, tu sais que le prelevement par carte bancaire pose un probleme : les cartes expirent, les plafonds bloquent, et les paiements echouent. La solution ? Le prelevement SEPA. Le client donne son IBAN une fois, et c'est regle. Pas d'expiration, pas de plafond, pas de friction.

Voici comment mettre ca en place.

## Pourquoi le prelevement SEPA est superieur pour le recurrent

- **Pas d'expiration** : un IBAN ne change quasi jamais, contrairement a une carte (tous les 2-3 ans)
- **Taux d'echec tres bas** : environ 1-2% contre 5-10% pour les cartes bancaires
- **Moins de frais** : en general 0,20 a 0,50 EUR par transaction contre 1,4% + 0,25 EUR pour Stripe
- **Fonctionne dans toute la zone SEPA** : 36 pays europeens
- **Pas de plafond** : ideal pour les gros montants (formations, services B2B)

## Etape 1 : Choisir ton prestataire de prelevement SEPA

### GoCardless (la reference)

GoCardless ([gocardless.com](https://gocardless.com)) est le leader du prelevement SEPA, utilise par plus de 100 000 entreprises dans le monde. Interface simple, API robuste, et un dashboard clair pour suivre tous tes paiements. Paiements collectes dans 30+ pays avec le taux de change reel (via Wise).

- **Plan Standard** : 1% + 0,20 EUR par transaction (plafonne a 2 EUR pour les paiements domestiques). 2% + 0,20 EUR pour les transactions internationales
- **Plan Advanced** : 1,25% + 0,20 EUR (plafonne a 2,50 EUR). Inclut Success+ (relances intelligentes), verification de compte bancaire, delai d'encaissement raccourci
- **Plan Pro** : sur devis, inclut protection anti-fraude avancee (Protect+), pages de paiement 100% personnalisables
- **Integration** : 350+ partenaires (Xero, Sage, QuickBooks, Zuora), API complete, ou dashboard en ligne
- **Delai d'encaissement** : 3 a 5 jours ouvrables (2 jours sur le plan Advanced)
- **Relances automatiques** : en cas d'echec, GoCardless retente automatiquement (Success+ sur les plans Advanced et Pro)

### Stripe + SEPA Direct Debit

Si tu utilises deja Stripe ([stripe.com](https://stripe.com)), tu peux activer le prelevement SEPA directement dans ton compte.

- **Frais** : les frais SEPA varient selon le pays. En Europe, environ 0,35 EUR par transaction (plafonnes a 5 EUR). Frais separes pour les litiges et les paiements echoues depuis juin 2024
- **Frais carte classique** (pour comparaison) : 2,9% + 0,30 EUR pour les cartes en ligne, 1,4% + 0,25 EUR pour les cartes europeennes
- **ACH (US)** : 0,8% plafonne a 5$
- **Avantage** : tout centralise dans un seul dashboard avec tes paiements carte. Pas de frais mensuels ni de setup
- **Inconvenient** : le client doit valider le mandat SEPA via un formulaire en ligne

**Important** : depuis juillet 2025, Meta a modifie la tarification WhatsApp et Stripe a mis a jour ses frais SEPA (frais separes litiges/echecs). Verifie toujours les tarifs a jour sur [stripe.com/pricing](https://stripe.com/pricing).

### Autres options

- **SlimPay** : specialise grandes entreprises, gros volumes
- **Payplug** ([payplug.com](https://www.payplug.com)) : solution francaise avec SEPA integre
- **Mollie** ([mollie.com](https://www.mollie.com)) : populaire en Europe, modele pay-as-you-go sans abonnement mensuel. SEPA Direct Debit disponible pour les paiements recurrents et uniques. Frais variables selon le mode de paiement (cartes europeennes : 1,8% + 0,25 EUR, iDEAL : 0,29 EUR, SEPA : tarif competitif). Plus de 25 methodes de paiement supportees (iDEAL, Klarna, Bancontact, SEPA, cartes, Apple Pay, etc.)

## Etape 2 : Configurer ton premier prelevement

Exemple avec GoCardless :

1. **Cree ton compte** sur gocardless.com et valide ton identite
2. **Connecte ton compte bancaire** ou tu recevras les fonds
3. **Cree un plan de paiement** : montant, frequence (mensuel, trimestriel, annuel), date de debut
4. **Genere un lien de mandat** : c'est le formulaire que ton client remplit avec son IBAN
5. **Envoie le lien a ton client** par email ou integre-le dans ta page de checkout
6. **Le client signe le mandat** en ligne (nom, IBAN, validation)
7. **Les prelevements demarrent** automatiquement selon le calendrier defini

C'est fait. Tu n'as plus rien a faire, les prelevements tombent chaque mois.

## Etape 3 : Integrer dans ton workflow existant

### Avec un site e-commerce (WooCommerce, Shopify)

GoCardless et Stripe SEPA proposent des plugins pour WooCommerce. Le client choisit "Prelevement bancaire" au checkout, entre son IBAN, et c'est parti.

### Avec un outil de facturation

La plupart des outils de facturation (Pennylane, Tiime, Axonaut) s'integrent avec GoCardless. Tu crees la facture, le prelevement se fait automatiquement a la date d'echeance.

### Avec Zapier ou Make

Tu peux automatiser la creation de mandats SEPA quand un client signe un contrat, s'inscrit a ta formation, ou passe une commande. Exemple : nouveau client dans ton CRM -> creation automatique d'un plan de prelevement GoCardless.

## Etape 4 : Gerer les echecs et les litiges

Meme le SEPA n'est pas infaillible. Voici comment gerer :

- **Provision insuffisante** : GoCardless retente automatiquement 3 jours plus tard
- **Mandat annule** : le client a contacte sa banque. Relance-le pour comprendre pourquoi
- **Contestation** : le client a 8 semaines pour contester un prelevement SEPA autorise (13 mois si non autorise). Garde des preuves de consentement

**Astuce** : envoie un email de rappel 3 jours avant chaque prelevement. Ca reduit les contestations de 60%.

## Cas d'usage concrets

| Activite | Montant | Frequence | Outil recommande |
|----------|---------|-----------|-----------------|
| Coaching mensuel | 200-500 EUR | Mensuel | GoCardless |
| Formation en 3x | 300 EUR x 3 | Mensuel | Stripe SEPA |
| Abonnement SaaS | 29-99 EUR | Mensuel | Stripe SEPA |
| Loyer bureau | 800 EUR | Mensuel | GoCardless |
| Service B2B | 2000+ EUR | Mensuel/Trimestriel | GoCardless |

## Astuces pour maximiser le taux de recouvrement

- **Propose le SEPA par defaut** : beaucoup de clients preferent donner leur IBAN plutot que leur carte
- **Simplifie le formulaire de mandat** : moins il y a de champs, plus le taux de completion est eleve
- **Combine carte + SEPA** : propose les deux options et laisse le client choisir
- **Automatise les relances** : email a J-3 avant prelevement, email instantane en cas d'echec
- **Facture en meme temps** : envoie la facture automatiquement quand le prelevement est confirme

## Ce qu'il faut retenir

Le prelevement SEPA est la meilleure solution pour les paiements recurrents en Europe. Moins cher que la carte, plus fiable, et sans friction pour le client. Si tu vends des abonnements ou des services mensuels et que tu n'utilises pas encore le SEPA, tu laisses de l'argent sur la table.

## Ressources utiles

- [GoCardless - Tarifs Europe](https://gocardless.com/pricing-eu/) -- detail des plans Standard, Advanced et Pro
- [Stripe - SEPA Direct Debit](https://stripe.com/docs/payments/sepa-debit) -- documentation technique complete
- [Mollie - Pricing](https://www.mollie.com/pricing) -- tous les tarifs par methode de paiement
