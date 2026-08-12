---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Implémenter Une Sauvegarde 3 2 1 1 0
author: Diane
description: 'Découvre Comment Implémenter Une Sauvegarde 3 2 1 1 0 : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

Bien sûr, voici un tutoriel étape par étape sur la manière de réaliser une sauvegarde 3-2-1 1-0 avec Levia et Veeam :
[La sauvegarde 3-2-1 1-0 avec Leviia et Veeam - YouTube](https://www.youtube.com/watch?v=GFxLWaJe2hc)
**Étape 1 : Configuration de Levia**
- Connectez-vous à votre compte Levia sur le tableau de bord.
- Créez un nouveau "bucket" sur Levia pour stocker vos sauvegardes. Assurez-vous que ce bucket est configuré pour une utilisation avec l'Object Storage.

**Étape 2 : Installation de Veeam Backup & Replication**
- Assurez-vous d'avoir installé Veeam Backup & Replication sur la machine à partir de laquelle vous souhaitez effectuer la sauvegarde.
- Lancez Veeam Backup & Replication.

**Étape 3 : Configuration des identifiants Levia dans Veeam**
- Dans Veeam, accédez à la section "Credentials" ou "Identifiants" selon la version.
- Ajoutez les informations d'identification Levia pour permettre à Veeam d'accéder au bucket que vous avez créé.

**Étape 4 : Création d'un Job de Sauvegarde avec Veeam**
- Dans Veeam, accédez à la section "Backup & Replication" ou "Sauvegarde et Réplication".
- Cliquez sur "Backup Job" ou "Job de Sauvegarde" pour créer une nouvelle tâche de sauvegarde.
- Sélectionnez les machines virtuelles ou les données que vous souhaitez sauvegarder.

**Étape 5 : Configuration du Stockage de Sauvegarde**
- Lors de la configuration du job, choisissez le stockage de sauvegarde. Sélectionnez l'option "Object Storage".
- Sélectionnez Levia comme fournisseur de stockage objet.
- Entrez les informations spécifiques à votre compte Levia, telles que le nom du bucket et les identifiants.

**Étape 6 : Planification de la Stratégie 3-2-1 1-0**
- Configurez le job pour effectuer trois copies de sauvegarde différentes (3).
- Stockez ces copies sur deux supports différents, par exemple, un disque externe et un NAS (2).
- Assurez-vous que l'une des copies est stockée de manière "offsite", dans le bucket Levia (1).
- Ajoutez une couche supplémentaire de sécurité en activant la fonction "airgap" pour créer une copie déconnectée du réseau (1-0).

**Étape 7 : Exécution du Job de Sauvegarde**
- Une fois toutes les configurations terminées, lancez le job de sauvegarde.
- Surveillez la progression du job dans Veeam Backup & Replication.

**Étape 8 : Vérification des Sauvegardes sur Levia**
- Connectez-vous à votre compte Levia.
- Accédez à la section Object Storage et vérifiez que les sauvegardes ont été correctement transférées dans le bucket.

En suivant ces étapes, vous aurez mis en place une stratégie de sauvegarde 3-2-1 1-0 avec Levia et Veeam, assurant ainsi une redondance robuste de vos données tout en utilisant le stockage objet sécurisé de Levia.