---
section: apps
metadataEnrichedAt: null
title: Installer Un Compiler C Sur Windows
author: Diane
tags:
- Outils
description: 'Découvre Installer Un Compiler C Sur Windows : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

Le moyen le plus simple d'installer un compilateur C sur Windows est d'utiliser MinGW via l'installateur MSYS2. Voici la procédure pas à pas :

1. Téléchargez MSYS2 :
- Allez sur https://www.msys2.org/
- Cliquez sur le lien de téléchargement (msys2-x86_64-*.exe)

1. Installez MSYS2 :
- Exécutez le fichier .exe téléchargé
- Gardez le chemin d'installation par défaut (C:\msys64)
- Suivez l'assistant d'installation

1. Une fois installé :
- Ouvrez "MSYS2 MSYS" depuis le menu démarrer
- Copiez-collez cette commande :
```bash
pacman -S mingw-w64-x86_64-gcc
```
- Appuyez sur Entrée et tapez 'Y' quand demandé

1. Ajoutez au PATH Windows :
- Recherchez "variables d'environnement" dans le menu démarrer
- Cliquez sur "Variables d'environnement"
- Dans "Variables système", sélectionnez "Path"
- Cliquez "Modifier"
- Ajoutez : C:\msys64\mingw64\bin

1. Vérification :
- Ouvrez un nouveau CMD ou PowerShell
- Tapez : `gcc --version`

	Si vous voyez la version de gcc, c'est installé avec succès !

Essayons de résoudre ce problème étape par étape :

1. D'abord, vérifions si gcc est bien installé. Ouvrez un nouveau CMD et tapez :
```
where gcc
```
Si ça ne renvoie rien, c'est que le PATH n'est pas correctement configuré.

1. Revérifions le PATH :
- Appuyez sur Windows + R
- Tapez "sysdm.cpl"
- Allez dans l'onglet "Avancé"
- Cliquez sur "Variables d'environnement"
- Dans "Variables système", trouvez et sélectionnez "Path"
- Vérifiez que cette ligne existe exactement :
```
C:\msys64\mingw64\bin
```

1. Si le chemin est correct, essayez de :
- Fermer tous vos terminaux/CMD
- Redémarrer votre ordinateur
- Ouvrir un nouveau CMD et retester `gcc --version`

1. Alternative : essayez le chemin complet :
```
C:\msys64\mingw64\bin\gcc.exe --version
```

Si cette dernière commande fonctionne mais pas `gcc --version`, c'est définitivement un problème de PATH.

Dites-moi ce que ces tests donnent et je pourrai vous aider plus précisément.

```
PS C:\Users\Shadow> C:\msys64\mingw64\bin\gcc.exe --version
gcc.exe (Rev2, Built by MSYS2 project) 14.2.0
Copyright (C) 2024 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

PS C:\Users\Shadow> gcc --version
gcc.exe (Rev2, Built by MSYS2 project) 14.2.0
Copyright (C) 2024 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```


Je vois que gcc fonctionne parfaitement dans PowerShell ! Les deux commandes renvoient la même chose, ce qui signifie que gcc est bien installé et correctement configuré dans votre PATH.

Si vous avez toujours l'erreur "No C compiler found" dans votre application ou IDE, essayez de :

1. Fermer complètement votre IDE/application
2. Redémarrer votre IDE/application
3. Si c'est un IDE spécifique (comme VS Code), vous devrez peut-être :
   - Installer les extensions C/C++ appropriées
   - Configurer l'IDE pour utiliser gcc
   - Vérifier les paramètres du projet

Pouvez-vous me dire :
1. Dans quel contexte exact vous obtenez encore l'erreur ?
2. Quel IDE ou application vous utilisez ?

Cela m'aidera à vous donner une solution plus précise.