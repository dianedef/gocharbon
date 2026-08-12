---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Créer Une Machine Virtuel En Un Éclair
author: Diane
description: 'Découvre Créer Une Machine Virtuel En Un Éclair : outil français pour
  entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Creer une machine virtuelle en quelques minutes

Besoin d'un serveur pour tester un projet, heberger une app, ou avoir un environnement de dev propre sans salir ta machine ? Une machine virtuelle (VM), c'est un ordinateur virtuel qui tourne sur un serveur distant ou sur ta propre machine. Tu la crees en quelques clics, tu l'utilises, et tu la supprimes quand tu n'en as plus besoin.

Voici comment faire, dans le cloud ou en local.

## Option 1 : VM dans le cloud (la plus rapide)

C'est la methode recommandee si tu veux un serveur accessible depuis n'importe ou, sans mobiliser les ressources de ton propre ordinateur.

### Nua.ge (cloud francais)

Nua.ge est un fournisseur cloud francais, avec des datacenters en France et des prix competitifs.

1. Cree un compte sur nua.ge
2. Dans le dashboard, clique sur "Creer une instance"
3. Choisis ton OS : Ubuntu, Debian, CentOS, ou Windows Server
4. Selectionne la taille : a partir de 1 vCPU / 1 Go RAM pour un petit projet
5. Choisis la region (Paris)
6. Ajoute ta cle SSH (ou choisis un mot de passe)
7. Lance la creation

**Temps** : 30 a 60 secondes. Ta VM est prete avec une IP publique.

**Prix** : a partir de 3,50 EUR/mois pour une petite instance. Facturation a l'heure possible.

**Avantage** : donnees hebergees en France, support en francais, conformite RGPD.

### DigitalOcean (le standard)

DigitalOcean ([digitalocean.com](https://www.digitalocean.com)) est le choix par defaut de beaucoup de developpeurs pour sa simplicite et sa tarification transparente.

1. Cree un compte sur digitalocean.com
2. Clique sur "Create" > "Droplets"
3. Choisis ton image OS (Ubuntu 24.04 LTS recommande)
4. Selectionne un plan : a partir de 4$/mois (1 vCPU, 512 Mo RAM, 10 Go SSD)
5. Choisis une region (Amsterdam ou Frankfurt pour l'Europe)
6. Ajoute ta cle SSH
7. Clique sur "Create Droplet"

**Temps** : environ 55 secondes. Tu recois l'IP par email.

**Tarifs 2025** : les Droplets Basic commencent a 4$/mois (1 vCPU, 512 Mo). Le plan 1 vCPU / 1 Go RAM / 25 Go SSD est a 6$/mois. Les plans General Purpose (CPU dedie) commencent plus haut. Depuis janvier 2026, facturation a la seconde (plus de gaspillage sur les workloads ephemeres).

**Astuce** : DigitalOcean propose des "1-Click Apps" pre-configurees (WordPress, Docker, Node.js, etc.). Ca t'evite de tout installer a la main.

### AWS Lightsail (l'ecosysteme Amazon)

Si tu veux rester dans l'ecosysteme AWS sans la complexite d'EC2 :

1. Va sur lightsail.aws.amazon.com
2. Clique sur "Create instance"
3. Choisis ta plateforme (Linux ou Windows)
4. Selectionne un blueprint : OS brut ou app pre-installee
5. Choisis le plan : a partir de 3,50$/mois (512 Mo RAM)
6. Nomme ton instance et cree-la

**Avantage** : 3 mois gratuits pour le plan le moins cher. IP statique gratuite. Integration native avec les autres services AWS.

### Autres options cloud

- **Hetzner** ([hetzner.com/cloud](https://www.hetzner.com/cloud/)) : excellent rapport qualite/prix, regulierement elu meilleur VPS sous 15$. Datacenters en Allemagne, Finlande, USA et Singapour. Plans "Cost-Optimized" CX a partir de 3,49 EUR/mois (2 vCPU / 4 Go RAM / 40 Go SSD / 20 To trafic). Plans ARM (CAX) a partir de 3,79 EUR/mois. Plans CPU dedie (CCX) a partir de 12,49 EUR/mois. Facturation a l'heure avec plafond mensuel. IPv6 inclus, IPv4 en option
- **Scaleway** ([scaleway.com](https://www.scaleway.com)) : francais (Iliad Group), datacenters a Paris, Amsterdam et Varsovie. Instances DEV1 a partir de 0,0088 EUR/heure (~6,42 EUR/mois pour 2 vCPU / 2 Go RAM). Instances PLAY2 et BASIC2 aussi disponibles. Pas de frais d'egress. Savings Plans pour economiser jusqu'a 25%
- **Vultr** : bonne alternative a DigitalOcean, a partir de 2,50$/mois

## Option 2 : VM en local (sur ton ordinateur)

Utile pour des tests sans connexion internet ou pour des environnements de dev isoles.

### VirtualBox (gratuit, cross-platform)

VirtualBox est le logiciel gratuit de reference pour creer des VMs en local.

1. Telecharge et installe VirtualBox depuis virtualbox.org
2. Telecharge l'ISO de l'OS que tu veux installer (ubuntu.com, debian.org, etc.)
3. Dans VirtualBox, clique sur "Nouvelle"
4. Nomme ta VM et selectionne le type d'OS
5. Alloue la RAM (minimum 2 Go pour Ubuntu Desktop, 512 Mo pour un serveur)
6. Cree un disque virtuel (20 Go minimum)
7. Demarre la VM et selectionne l'ISO pour lancer l'installation

**Temps** : 15-20 minutes (telechargement ISO + installation de l'OS).

**Astuce** : utilise les "Guest Additions" pour avoir le copier-coller entre ta machine et la VM, le redimensionnement d'ecran, et les dossiers partages.

### Multipass (le plus rapide en local)

Multipass, par Canonical, cree des VMs Ubuntu en une commande.

```bash
# Installer Multipass
sudo snap install multipass

# Creer une VM Ubuntu
multipass launch --name ma-vm --cpus 2 --memory 2G --disk 20G

# Se connecter
multipass shell ma-vm

# Lister les VMs
multipass list

# Supprimer une VM
multipass delete ma-vm && multipass purge
```

**Temps** : 2 minutes pour une VM Ubuntu operationnelle.

### UTM (Mac Apple Silicon)

Si tu es sur Mac M1/M2/M3, UTM est l'alternative ideale :

1. Telecharge UTM depuis mac.getutm.app
2. Cree une nouvelle VM
3. Choisis "Virtualize" pour les OS ARM ou "Emulate" pour les OS x86
4. Selectionne ton ISO et configure les ressources
5. Lance l'installation

## Comparatif rapide

| Solution | Type | Prix minimum | Temps de creation | Ideal pour |
|----------|------|-------------|-------------------|------------|
| Nua.ge | Cloud FR | 3,50 EUR/mois | 60 secondes | Projets FR, RGPD |
| DigitalOcean | Cloud | 4$/mois | 55 secondes | Dev, SaaS, APIs |
| AWS Lightsail | Cloud | 3,50$/mois | 60 secondes | Ecosysteme AWS |
| Hetzner | Cloud EU | 3,49 EUR/mois (CX23) | 30 secondes | Meilleur rapport qualite/prix |
| Scaleway | Cloud FR | ~6 EUR/mois (DEV1-S) | 30 secondes | Donnees en France |
| VirtualBox | Local | Gratuit | 15-20 min | Tests, dev local |
| Multipass | Local | Gratuit | 2 minutes | Ubuntu rapide |
| UTM | Local (Mac) | Gratuit | 10-15 min | Mac Apple Silicon |

## Que faire une fois ta VM creee

### Se connecter en SSH (VM cloud)

```bash
ssh root@IP_DE_TA_VM
```

### Securiser ta VM

1. **Cree un utilisateur non-root** : `adduser tonnom && usermod -aG sudo tonnom`
2. **Desactive le login root SSH** : modifie `/etc/ssh/sshd_config`
3. **Active le pare-feu** : `ufw allow ssh && ufw allow 80 && ufw enable`
4. **Mets a jour** : `apt update && apt upgrade -y`

### Installer ce dont tu as besoin

- **Serveur web** : `apt install nginx` ou `apt install apache2`
- **Node.js** : `curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt install nodejs`
- **Docker** : `curl -fsSL https://get.docker.com | sh`
- **Python** : `apt install python3 python3-pip`

## Ce qu'il faut retenir

Pour un projet de prod ou un serveur permanent, prends une VM cloud (Hetzner ou DigitalOcean pour le rapport qualite/prix, Nua.ge si tu veux rester en France). Pour des tests rapides en local, Multipass est imbattable. Et ne laisse pas tourner une VM cloud que tu n'utilises plus, ca coute de l'argent pour rien.
