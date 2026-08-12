---
section: apps
metadataEnrichedAt: null
title: Le Edge Tooling
author: Diane
tags:
- Outils
description: 'Découvre Le Edge Tooling : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

C'est très utile, mais pas de la manière dont on pourrait l'imaginer. ESLint n'est pas un outil d'IA en soi, mais c'est le meilleur ami de l'IA pour deux raisons majeures :
1. Il corrige les erreurs de l'IA (le "Filet de sécurité")
Quand tu demandes à une IA (comme ChatGPT, Claude ou moi-même) de générer du code pour ton projet Astro ou Vue, l'IA fait parfois des erreurs :
 * Elle utilise des variables qui n'existent pas.
 * Elle oublie de fermer une parenthèse.
 * Elle utilise des fonctions dépréciées (vieilles versions).
ESLint va immédiatement souligner ces erreurs en rouge dans ton éditeur (VS Code). C'est ce qui t'évite de copier-coller du code "cassé" généré par l'IA sans t'en rendre compte.
2. Il aide l'IA à mieux coder pour toi
Si tu configures bien ESLint dans ton projet, les outils comme GitHub Copilot ou Cursor vont lire tes règles ESLint.
 * L'IA va comprendre ton style de code (ex: "Ah, il utilise des points-virgules et des guillemets simples").
 * Elle va s'adapter pour te proposer du code qui respecte déjà tes standards.
Est-ce indispensable pour ta stack (Astro + Vue + Convex) ?
Oui, absolument. Voici pourquoi :
 * Conformité Astro/Vue : Il existe des plugins ESLint spécifiques qui vérifient que tu n'as pas oublié de propriétés obligatoires dans tes composants Vue ou que tu n'utilises pas mal les scripts d'Astro.
 * Qualité Convex : Il t'aidera à vérifier que tes fonctions "server-side" Convex sont bien écrites (par exemple, vérifier que tu as bien mis await devant tes appels à la base de données).
 * Travail d'équipe : Si tu travailles avec quelqu'un d'autre, ESLint force tout le monde à écrire le code de la même façon.
Résumé : Utile ou dépassé ?
 * Totalement utile. Ce n'est pas une "option", c'est le standard de l'industrie.
 * Un développeur qui n'utilise pas ESLint en 2025, c'est comme un écrivain qui n'utiliserait pas de correcteur d'orthographe : il perd un temps fou à corriger des fautes d'inattention.
Veux-tu que je te donne la commande magique pour l'installer et le configurer automatiquement sur ton projet actuel ?