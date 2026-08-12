---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Améliorer Sa Déliverabilité
author: Diane
description: 'Découvre Améliorer Sa Déliverabilité : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# DELIVERABILITE EMAIL : FAIRE ATTERRIR TES EMAILS EN BOITE DE RECEPTION

Tu envoies des emails mais tes taux d'ouverture sont en chute libre ? Il y a de fortes chances que tes messages atterrissent dans les spams. La deliverabilite, c'est la capacite de tes emails a atteindre la boite de reception de tes destinataires. Voici comment la maximiser.

## Pourquoi la deliverabilite est critique

- En moyenne, 20% des emails marketing n'arrivent jamais en boite de reception
- Un email dans les spams = zero ouverture, zero clic, zero vente
- Une mauvaise reputation d'expediteur penalise TOUS tes emails, meme les transactionnels
- Gmail, Outlook et Yahoo durcissent leurs regles chaque annee. **Depuis fevrier 2024**, Gmail et Yahoo exigent SPF, DKIM et un enregistrement DMARC pour tous les expediteurs envoyant plus de 5 000 emails/jour. Meme en dessous de ce seuil, un DMARC en `p=none` est fortement recommande

## Etape 1 : Configurer l'authentification DNS

C'est la base technique. Sans ca, les fournisseurs de messagerie ne te font pas confiance.

### SPF (Sender Policy Framework)

SPF declare quels serveurs ont le droit d'envoyer des emails pour ton domaine.

1. Va dans la gestion DNS de ton domaine (chez ton hebergeur ou registrar)
2. Ajoute un enregistrement TXT :
```
Nom : @
Type : TXT
Valeur : v=spf1 include:spf.brevo.com include:_spf.google.com ~all
```
(adapte les "include" selon tes services d'envoi)

**Regles :**
- Un seul enregistrement SPF par domaine
- Si tu utilises plusieurs services (Brevo + Google Workspace), ajoute tous les `include` dans le meme enregistrement
- `~all` = soft fail (recommande). `-all` = hard fail (plus strict)

### DKIM (DomainKeys Identified Mail)

DKIM ajoute une signature numerique a chaque email pour prouver qu'il n'a pas ete modifie.

1. Dans ton outil d'emailing (Brevo, Mailchimp, etc.), va dans les parametres d'authentification
2. Copie l'enregistrement DKIM fourni (c'est un enregistrement TXT ou CNAME)
3. Ajoute-le dans ta zone DNS

Chaque outil fournit sa propre cle DKIM. Suis les instructions specifiques de ton outil.

### DMARC (Domain-based Message Authentication)

DMARC dit aux fournisseurs quoi faire quand SPF ou DKIM echoue. **Depuis fevrier 2024, Gmail et Yahoo exigent un enregistrement DMARC pour les expediteurs de plus de 5 000 emails/jour.** Mais meme si tu envoies moins, configurer DMARC protege ton domaine contre l'usurpation d'identite (spoofing) et ameliore ta reputation.

Ajoute un enregistrement DNS TXT :
```
Nom : _dmarc
Type : TXT
Valeur : v=DMARC1; p=none; rua=mailto:dmarc-reports@tondomaine.com
```

**Progression recommandee :**
- Commence par `p=none` (mode observation, pas de blocage)
- Analyse les rapports pendant 2-4 semaines
- Passe a `p=quarantine` (emails suspects vont en spam)
- Puis a `p=reject` (emails non authentifies sont rejetes)

### Verification

Utilise [MXToolbox](https://mxtoolbox.com/emailhealth/) pour verifier que tes enregistrements SPF, DKIM et DMARC sont corrects. Tout doit etre au vert.

## Etape 2 : Warmer son domaine (si nouveau)

Si tu viens de creer ton domaine ou tu n'as jamais envoye d'emails en masse, tu dois le "chauffer" progressivement.

**Planning de warm-up :**
- Semaine 1 : 20-50 emails/jour a tes contacts les plus engages
- Semaine 2 : 100-200 emails/jour
- Semaine 3 : 500 emails/jour
- Semaine 4 : 1000+ emails/jour
- Augmente de 30-50% par semaine jusqu'a ton volume cible

**Outils de warm-up automatique :**
- **Lemwarm** ([lemwarm.com](https://www.lemwarm.com)) : envoie et recoit des emails automatiquement entre vrais comptes pour construire ta reputation. Reseau de 20 000+ domaines sains. **Prix** : Essential a 29 dollars/mois par email (warm-up auto, rapports de deliverabilite, check technique), Smart a 49 dollars/mois (emails personnalises, warm-up de tes vrais templates, alertes personnalisees, reseau par industrie). Reductions : -10% trimestriel, -20% annuel. Lemwarm est un produit de Lemlist, l'outil francais de cold emailing
- **Warmbox** ([warmbox.ai](https://www.warmbox.ai)) : warm-up automatique avec interactions realistes (GPT-4 et hybride), auto-suppression du spam, monitoring de reputation. **Prix** : Solo a 15 dollars/mois (1 boite, 50 emails/jour), Start-up a 69 dollars/mois (3 boites, 250 emails/jour), Growth a 139 dollars/mois (6 boites, 500 emails/jour). Plus de 35 000 boites dans leur reseau. Facturation mensuelle disponible aussi (Solo a 19 dollars/mois, etc.)
- **Mailreach** ([mailreach.co](https://www.mailreach.co)) : focus sur le warm-up avec rapport de placement (inbox vs spam), reseau de 30 000+ boites reelles (Google Workspace + Microsoft 365). **Prix** : 19,50 dollars/mois par boite mail (warmup + 20 tests spam inclus), avec reductions sur le volume (prix degressif a partir de 9+ boites). Inclut un AI deliverability assistant (Co-Pilot), checks DNS (SPF, DKIM, DMARC), et monitoring de blacklists

**Important** : pendant le warm-up, n'envoie qu'a des contacts qui t'ont donne leur consentement. Pas de listes achetees, jamais.

## Etape 3 : Nettoyer ta liste regulierement

Une liste sale est la premiere cause de problemes de deliverabilite.

**Ce qu'il faut retirer :**
- **Hard bounces** : adresses qui n'existent pas. A retirer immediatement. La plupart des outils le font automatiquement
- **Soft bounces repetes** : boite pleine ou serveur temporairement indisponible. Apres 3-5 soft bounces, retire l'adresse
- **Inactifs** : contacts qui n'ont pas ouvert un seul email depuis 6 mois. Envoie une sequence de reengagement, puis supprime ceux qui ne reagissent pas
- **Spam traps** : des adresses piege utilisees par les fournisseurs pour detecter les spammeurs. Elles se retrouvent dans les listes mal entretenues

**Outils de verification d'emails :**
- **ZeroBounce** : verifie les adresses en masse, detecte les spam traps
- **NeverBounce** : nettoyage en temps reel ou par batch
- **Hunter.io** : inclut un verificateur d'emails

**Frequence recommandee** : nettoie ta liste tous les 3-6 mois. Avant chaque gros envoi, verifie les nouvelles adresses.

## Etape 4 : Soigner le contenu de tes emails

Les filtres anti-spam analysent le contenu de tes emails. Evite les declencheurs classiques :

**Mots et phrases a eviter en objet :**
- "GRATUIT", "PROMO", "URGENT", "OFFRE LIMITEE" en majuscules
- Trop de points d'exclamation (!!!)
- Des symboles comme des euros, des pourcentages repetes

**Bonnes pratiques de contenu :**
- Ratio texte/images equilibre (au moins 60% de texte)
- Pas d'image unique sans texte (c'est un red flag pour les filtres)
- Liens vers des domaines sains (pas de URL raccourcies suspectes)
- Inclus toujours un lien de desabonnement visible
- Ajoute ton adresse physique en pied d'email (obligatoire RGPD et CAN-SPAM)

**Evite :**
- Les pieces jointes dans les emails marketing (utilise des liens de telechargement)
- Le HTML casse ou mal code
- Les polices exotiques ou les couleurs invisibles

## Etape 5 : Gerer le consentement et l'engagement

**Double opt-in** : fais confirmer l'inscription par email avant d'ajouter quelqu'un a ta liste. Ca ralentit la croissance mais ameliore massivement la qualite et la deliverabilite.

**Segmentation** : envoie du contenu pertinent a chaque segment. Un email envoye a toute ta liste avec un contenu generique aura moins d'engagement qu'un email cible.

**Frequence** : ne bombarde pas. 1 a 3 emails par semaine est un bon rythme pour la plupart des businesses. Plus que ca, les desabonnements et signalements spam augmentent.

## Etape 6 : Surveiller les metriques

**Indicateurs a suivre :**

| Metrique | Objectif | Alerte |
|----------|----------|--------|
| Taux d'ouverture | >25% | <15% |
| Taux de clic | >3% | <1% |
| Taux de bounce | <2% | >5% |
| Taux de desabonnement | <0.3% | >0.5% |
| Taux de plainte spam | <0.1% | >0.1% |

**Outils de monitoring :**
- **GlockApps** : teste ou tes emails atterrissent (inbox, spam, onglet promotions) chez Gmail, Outlook, Yahoo, etc.
- **Mail-tester.com** : envoie un email de test et obtiens un score de spam sur 10
- **Google Postmaster Tools** : gratuit, montre ta reputation aupres de Gmail

## Checklist deliverabilite

- [ ] SPF configure et valide
- [ ] DKIM configure et valide
- [ ] DMARC en place (au minimum p=none)
- [ ] Domaine warme progressivement
- [ ] Double opt-in active
- [ ] Liste nettoyee dans les 3 derniers mois
- [ ] Pas de mots-cles spam dans les objets
- [ ] Ratio texte/images correct
- [ ] Lien de desabonnement visible
- [ ] Adresse physique en footer
- [ ] Metriques surveillees chaque semaine
- [ ] Score mail-tester.com > 8/10

## Astuces

- **Sous-domaine dedie** : envoie tes emails marketing depuis `news.tondomaine.com` et garde `tondomaine.com` pour les transactionnels. Si ta reputation marketing se degrade, ca ne touche pas tes emails de confirmation
- **Teste avant d'envoyer** : envoie-toi l'email sur Gmail, Outlook et Yahoo avant de l'envoyer a ta liste. Verifie qu'il arrive en inbox, pas en spam
- **Attention a l'onglet Promotions** : chez Gmail, meme si tu n'es pas en spam, tu peux etre dans l'onglet Promotions. Ca baisse les taux d'ouverture. Pour en sortir : moins d'images, plus de texte brut, style conversationnel
- **Ne rachete JAMAIS une liste** : meme si on te la presente comme "opt-in". Les listes achetees contiennent des spam traps et des contacts non consentants. Un seul envoi a une liste achetee peut ruiner ta reputation pour des mois

La deliverabilite n'est pas un setup one-shot. C'est une hygiene permanente. Configure les bases techniques une fois, puis surveille, nettoie et optimise en continu.

## Ressources et liens utiles

- [MXToolbox](https://mxtoolbox.com/emailhealth/) -- verification SPF, DKIM, DMARC (gratuit)
- [Mail-tester.com](https://www.mail-tester.com) -- score de spam gratuit sur 10 points
- [Google Postmaster Tools](https://postmaster.google.com) -- reputation aupres de Gmail (gratuit)
- [Lemwarm](https://www.lemwarm.com) -- warm-up email, a partir de 29 dollars/mois par boite
- [Warmbox](https://www.warmbox.ai) -- warm-up email, a partir de 15 dollars/mois par boite
- [Mailreach](https://www.mailreach.co) -- warm-up + tests spam, a partir de 19,50 dollars/mois par boite
- [GlockApps](https://glockapps.com) -- test de placement inbox vs spam
- [ZeroBounce](https://www.zerobounce.net) -- verification et nettoyage de listes email
- [DMARC Analyzer](https://www.dmarcanalyzer.com) -- analyser les rapports DMARC
