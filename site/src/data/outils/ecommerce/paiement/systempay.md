---
section: outils
title: SystemPay
author: Diane
tags:
  - 'Outils Français'
  - 'Paiement'
  - 'E-commerce'
  - Outils
description: "SystemPay est la solution de paiement en ligne de BPCE (Banque Populaire, Caisse d'Épargne). Millions de transactions/an. PCI-DSS. Monétique bancaire."
pubDate: "2026-03-15"
imgUrl: ../../../../assets/astro.jpeg
u_site: https://paiement.systempay.fr/
u_origine: "FR"
u_langue_fr: true
u_derniere_maj: "2026-03-15"
---

# SystemPay

# PAIEMENT EN LIGNE : LA GATEWAY MONÉTIQUE DU GROUPE BPCE (BANQUE POPULAIRE + CAISSE D'ÉPARGNE)

## tl;dr

SystemPay (paiement.systempay.fr), c'est la **solution de paiement en ligne** du groupe **BPCE** — le **2e groupe bancaire français** qui regroupe la **Banque Populaire** et la **Caisse d'Épargne** (36 millions de clients, 100 000+ collaborateurs). SystemPay permet aux **e-commerçants, PME et grandes entreprises** d'accepter des paiements en ligne par **carte bancaire** (CB, Visa, Mastercard, Amex), **Apple Pay**, **Google Pay**, **prélèvement SEPA**, et **paiement fractionné**. La plateforme est opérée par **Lyra Network** (le même acteur technique derrière PayZen) pour le compte de BPCE. SystemPay est **PCI-DSS Niveau 1**, conforme **DSP2/SCA** (authentification forte), et traite des **millions de transactions** par an. L'avantage : si tu es client Banque Populaire ou Caisse d'Épargne, SystemPay s'intègre directement avec ton contrat de vente à distance (VAD) existant — pas besoin de changer de banque. Plugins disponibles pour **PrestaShop**, **WooCommerce**, **Magento**, **Shopify**.

## Alternative à

Stripe, PayZen, Payplug, Worldline (Ingenico), HiPay, Adyen, Monetico (Crédit Mutuel/CIC). SystemPay se distingue par son **intégration bancaire directe** (les fonds arrivent sur ton compte Banque Populaire ou Caisse d'Épargne, pas sur un compte tiers), la **confiance du réseau BPCE** (2e groupe bancaire français — pas de risque de faillite comme avec une fintech), et le fait que **la technologie est celle de Lyra/PayZen** (même moteur, même fiabilité, mais sous marque bancaire).

# Bénéfices

**Intégration bancaire directe** — Les fonds des transactions arrivent directement sur ton compte Banque Populaire ou Caisse d'Épargne — pas de compte tiers, pas de délai de transfert supplémentaire. Pour un commerçant qui est déjà client BPCE, c'est le chemin le plus simple.

**La puissance de Lyra sous le capot** — SystemPay est techniquement opéré par Lyra Network, le spécialiste français du paiement. Tu bénéficies de la même technologie que PayZen (250+ moyens de paiement, PCI-DSS Niveau 1, API REST) mais avec le contrat monétique de ta banque.

**Pas besoin de changer de banque** — Si tu es client Banque Populaire ou Caisse d'Épargne avec un contrat VAD (vente à distance), tu actives SystemPay directement avec ton contrat existant. Pas de KYC supplémentaire, pas de nouveau compte — tu te connectes et tu commences.

**Support bancaire** — En cas de problème, tu as le support de ta banque (Banque Populaire ou Caisse d'Épargne) en plus du support technique de Lyra. Pour les entreprises qui veulent un interlocuteur bancaire traditionnel, c'est rassurant.

## Pour Qui ?

- E-commerçants clients Banque Populaire ou Caisse d'Épargne
- PME qui ont un contrat VAD bancaire et veulent l'utiliser pour le e-commerce
- Entreprises qui veulent garder les fonds dans leur banque (pas de compte tiers)
- Commerçants qui veulent la sécurité d'une solution bancaire PCI-DSS
- Associations et collectivités clientes BPCE qui collectent des paiements en ligne

# Comment Utiliser SystemPay

1. **Contrat VAD** — Active un contrat de vente à distance auprès de ta Banque Populaire ou Caisse d'Épargne
2. **Accès SystemPay** — Reçois tes identifiants d'accès à la plateforme SystemPay
3. **Intégration** — Installe le plugin sur ton CMS (PrestaShop, WooCommerce, Magento, Shopify) ou intègre via l'API REST
4. **Configuration** — Personnalise ta page de paiement, active les moyens de paiement souhaités
5. **Test** — Valide l'intégration en environnement de test (sandbox)
6. **Production** — Les transactions sont traitées en temps réel. Les fonds arrivent sur ton compte BPCE

# Fonctionnalités

## Encaissement en ligne

- **Cartes bancaires** — CB, Visa, Mastercard, American Express
- **Wallets** — Apple Pay, Google Pay
- **Prélèvement SEPA** — Paiement récurrent ou ponctuel
- **Paiement fractionné** — 2x, 3x, 4x
- **Paiement différé** — Encaissement retardé
- **E-ticket restaurant** — Conecs (titres-restaurant dématérialisés)

## Sécurité

- **PCI-DSS Niveau 1** — Certification de sécurité maximale
- **3D Secure 2** — Authentification forte conforme DSP2
- **Tokenisation** — Données de carte jamais stockées en clair
- **Anti-fraude** — Moteur de règles personnalisables
- **Data centers en France** — Hébergement souverain (via Lyra)

## Page de paiement

- **Personnalisable** — Logo, couleurs, champs
- **Responsive** — Mobile et desktop
- **Multi-modes** — Redirection, iframe, formulaire embarqué
- **Multi-langues** — Interface traduite

## Intégrations techniques

- **API REST** — Documentation complète (même base que PayZen)
- **Plugins CMS** — PrestaShop, WooCommerce, Magento 2, Shopify, OpenCart
- **SDK JavaScript** — Pour les intégrations front-end personnalisées
- **Webhooks** — Notifications en temps réel (IPN)

## Back-office

- **Tableau de bord** — Transactions, volumes, statistiques
- **Gestion** — Remboursements, annulations, captures
- **Rapports** — Export CSV, rapports financiers
- **Multi-boutiques** — Gestion centralisée

# Prix

SystemPay ne publie pas de tarification standard :

- **Commission par transaction** — Négociée dans le cadre du contrat VAD avec ta banque (Banque Populaire ou Caisse d'Épargne)
- **Abonnement mensuel** — Variable selon le contrat bancaire
- **Frais de mise en place** — Selon la complexité de l'intégration
- **Contact** — Renseigne-toi auprès de ton conseiller Banque Populaire ou Caisse d'Épargne

En général, les tarifs monétiques bancaires sont compétitifs pour les entreprises à volume (0,3-0,8% par transaction) mais moins transparents que les fintechs.

*Source : [SystemPay](https://paiement.systempay.fr/), [BPCE](https://www.groupebpce.com/)*

# Intégrations

- **CMS** : PrestaShop, WooCommerce, Magento 2, Shopify, OpenCart
- **Banque** : Banque Populaire, Caisse d'Épargne (contrat VAD direct)
- **Wallets** : Apple Pay, Google Pay
- **Paiement fractionné** : Module natif (2x, 3x, 4x)
- **Titres-restaurant** : Conecs (e-tickets)
- **API REST** : Documentation Lyra Network
- **Pas de marketplace type Zapier** — Intégrations limitées aux plugins CMS et à l'API

# L'équipe et l'Histoire

- **Années 2000** — Le groupe **BPCE** (né de la fusion entre Banque Populaire et Caisse d'Épargne) développe ses solutions de **monétique** pour ses clients commerçants. Les contrats VAD (vente à distance) permettent déjà l'encaissement par carte bancaire en ligne via des pages de paiement bancaires
- **2010s** — BPCE confie l'opération technique de sa solution de paiement en ligne à **Lyra Network** (Toulouse). SystemPay naît de ce partenariat : la technologie Lyra (la même que PayZen) au service du réseau bancaire BPCE. Les clients Banque Populaire et Caisse d'Épargne peuvent utiliser SystemPay avec leur contrat VAD existant
- **2015-2020** — SystemPay s'enrichit des fonctionnalités de Lyra : page de paiement personnalisable, API REST, plugins CMS, 3D Secure 2, Apple Pay, Google Pay. La solution est utilisée par des milliers de e-commerçants clients BPCE
- **2020-2023** — Ajout du paiement fractionné, du prélèvement SEPA, et des titres-restaurant dématérialisés (Conecs). Conformité DSP2/SCA. SystemPay évolue en parallèle de PayZen avec la même base technique Lyra
- **2024-2026** — SystemPay reste la solution de paiement en ligne de référence pour les clients BPCE. Le groupe BPCE (**36 millions de clients**, 2e groupe bancaire français) assure la pérennité de la solution. L'enjeu : moderniser l'expérience utilisateur face aux fintechs

*Source : [SystemPay](https://paiement.systempay.fr/), [Lyra Network](https://www.lyra.com/), [BPCE](https://www.groupebpce.com/)*

# Cas d'Usage Concrets

**Le e-commerçant client Banque Populaire** — Tu as une boutique en ligne sur PrestaShop et un compte pro à la Banque Populaire. Au lieu de passer chez Stripe (et d'avoir un compte tiers), tu actives SystemPay avec ton contrat VAD existant. Le plugin PrestaShop s'installe en 10 minutes, les fonds arrivent directement sur ton compte BP.

**La PME multi-canaux** — Tu vends en magasin (TPE de ta banque) et en ligne. Avec SystemPay, le paiement en ligne passe par le même contrat monétique que ton TPE en magasin. La réconciliation est simplifiée — tout est sur le même relevé bancaire.

**L'association qui collecte des dons en ligne** — Tu gères une association avec un compte Caisse d'Épargne. SystemPay te permet de créer une page de paiement pour collecter des dons en ligne. Les fonds arrivent directement sur ton compte associatif — pas d'intermédiaire.

# Points Forts

- Adossé au groupe BPCE — 2e groupe bancaire français, 36M de clients
- Fonds directement sur ton compte Banque Populaire ou Caisse d'Épargne
- Technologie Lyra Network (même moteur que PayZen) — fiabilité prouvée
- PCI-DSS Niveau 1, 3D Secure 2, données en France
- Plugins CMS prêts à l'emploi (PrestaShop, WooCommerce, Magento, Shopify)
- Pas besoin de changer de banque — utilise ton contrat VAD existant
- Paiement fractionné natif (2x, 3x, 4x)
- Support bancaire + support technique Lyra

# Points Faibles

- **Réservé aux clients BPCE** — Si tu n'es pas client Banque Populaire ou Caisse d'Épargne, tu ne peux pas utiliser SystemPay. Tu devras te tourner vers PayZen (même technologie, accessible à tous)
- **Pricing opaque** — Les tarifs sont négociés dans le contrat VAD bancaire. Pas de transparence comme chez Stripe. Difficile de comparer
- **Processus d'activation lent** — L'ouverture d'un contrat VAD bancaire prend du temps (rendez-vous en agence, validation, délais). Pas de self-service instantané
- **Interface back-office datée** — Comme PayZen, le back-office est fonctionnel mais pas aussi moderne que les dashboards Stripe ou Mollie
- **Marque peu connue** — SystemPay n'a pas la notoriété de Stripe ou PayPal. Tes développeurs ne connaissent probablement pas le produit et devront se former sur la documentation
- **Support parfois complexe** — Tu as deux interlocuteurs (ta banque pour le contrat + Lyra pour la technique), ce qui peut créer des confusions quand tu as un problème. Qui appeler ?
- **Pas d'innovation au rythme des fintechs** — Les mises à jour et nouvelles fonctionnalités arrivent au rythme bancaire (lent) plutôt qu'au rythme fintech (rapide). Les dernières tendances (Open Banking, BNPL avancé) arrivent avec du retard
