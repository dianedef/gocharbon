---
section: apps
metadataEnrichedAt: null
title: Astro Et Obsidian Symlinks
author: Diane
tags:
- Outils
description: 'Découvre Astro Et Obsidian Symlinks : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

## Approche Symlinks

créer un symlink : ouvrir PowerShell en admin et naviguer vers le dossier Obsidian Mon Coffre puis : 

```Powershell
cd "C:\Users\Shadow\Documents\Obsidian Mon Coffre"
```

```powershell
New-Item -ItemType SymbolicLink -Path "astro-webinde" -Target "C:\Users\Shadow\Documents\siteweb - webinde\src\content"
```

```powershell
New-Item -ItemType SymbolicLink -Path "astro-tmv" -Target "C:\Users\Shadow\Documents\siteweb - transformemavie\src\content"
```

```powershell
New-Item -ItemType SymbolicLink -Path "astro-winflowz" -Target "C:\Users\Shadow\Documents\siteweb - winflowz\src\content"
```


- Un seul dépôt Git à gérer
- Pas de double commit comme dans la citation
- Workflow simple et direct

Points importants :
- Utilisez des chemins absolus pour éviter les problèmes
- nom-du-lien sera le nom du dossier qui apparaîtra dans votre vault
- Exécutez la commande depuis l'endroit où vous voulez que le lien apparaisse dans votre vault

D'abord obtenir le chemin absolu du dossier content :
    # Depuis le dossier de votre projet Astro
    pwd
    # Cela vous donnera quelque chose comme : /chemin/vers/votre-projet-astro
- Puis créer le symlink dans votre vault Obsidian :
    # Depuis votre vault Obsidian
    ln -s /chemin/vers/votre-projet-astro/content nom-du-lien


Below are some limitations or issues we are aware of that you may want to keep in mind:  
  
Symlink loops are disallowed, to prevent crashing Obsidian due to an infinite loop.  
Symlink targets must be fully disjoint from the vault root or any other symlink targets. Disjoint means one folder doesn't contain another, or vice versa. Obsidian ignores any symlink to a parent folder of the vault, or from one folder in the vault to another folder in the same vault. It is a safeguard to ensure you don't end up with duplicated files in your vault, which could cause links to become ambiguous.  
Symlinks may not play well with Obsidian sync, or any other kind of sync. If the target of a symlink is itself a folder that's synced by a different Obsidian vault, you could (potentially) end up with sync conflicts or data loss. Some sync tools, such as Git, don't follow symlinks, but rather sync the path the symlink points to, which may produce undesirable results if you share your vault with other people that way.  
Obsidian's file manager can't move files across device boundaries, so if you symlink to a folder on a different drive from your vault, you won't be able to drag files between that folder and other folders using Obsidian's file explorer. (You'll need to use your OS's explorer for such moves, and Obsidian will see the move as a deletion and the creation of a new file. It will also not update any links that depended on the path of that file.)  
File symlinks (as opposed to folder symlinks) may work, but aren't officially supported at this time. Changes performed outside of Obsidian aren't watched for, so if you change the file directly, Obsidian won't detect the change, update search indexes, etc.  
Symlinking things under the .obsidian/ folder in order to share them between vaults has a high chance of corrupting your settings, unless you really know what you're doing. If you decide to go this way, at least have backups.

Points positifs pour votre usage :
- ✅ Pas de risque de boucle car vous pointez vers un dossier externe
- ✅ Les dossiers sont disjoints (Astro et Obsidian sont séparés)
- ✅ Vous n'utilisez pas Git pour synchroniser Obsidian (mais Obsidian Sync)

Points d'attention :
- ⚠️ "Some sync tools, such as Git, don't follow symlinks"
- OK dans votre cas car les fichiers sont physiquement dans Astro
- ⚠️ "Changes performed outside of Obsidian aren't watched for"
- Il faudra peut-être rafraîchir Obsidian après des modifications via Cursor

Pour créer le symlink en toute sécurité :
# Depuis votre vault Obsidian
# Assurez-vous que le dossier cible n'est pas déjà synchronisé par un autre vault
ln -s /chemin/absolu/vers/projet-astro/content astro-content


Les sous-modules Git ! C'était une mauvaise piste.

Pour votre cas avec les symlinks :
- Structure :
- Fichiers physiquement dans Astro/content
- Un symlink dans votre vault Obsidian qui pointe vers ce dossier
- Un seul Git à gérer (celui d'Astro)
- Vérifications de sécurité :
- Les dossiers sont bien disjoints
- Pas de risque de boucle
- Obsidian Sync et Git ne se marchent pas sur les pieds
- Pour créer le symlink :
    # Depuis votre vault Obsidian
    # Remplacer par votre chemin exact vers le projet Astro
    ln -s /chemin/absolu/vers/projet-astro/content astro-content
    

### Pour votre question sur la création de notes via Obsidian dans le symlink :
Oui, ça marche parfaitement !
- Quand vous créez une note dans Obsidian via le symlink
- La note est physiquement créée dans le dossier C:\Users\Shadow\Documents\siteweb - webinde\src\content
- Elle sera donc :
- Visible dans votre projet Astro
- Prête à être committée dans Git
- Synchronisée par Obsidian Sync

Le workflow est simple :
- Créez/modifiez vos notes dans Obsidian normalement
- Les fichiers sont automatiquement dans votre projet Astro
- Un seul commit Git nécessaire dans le projet Astro

C'est beaucoup plus simple que l'approche sous-module mentionnée dans la citation !

Important :
- Il faut lancer PowerShell en tant qu'administrateur pour créer un symlink
- Pour ouvrir PowerShell en admin :
- Clic droit sur PowerShell
- "Exécuter en tant qu'administrateur"
- Naviguer vers votre dossier Obsidian
- Exécuter la commande
	New-Item -ItemType SymbolicLink -Path "astro-webinde" -Target "C:\Users\Shadow\Documents\siteweb - webinde\src\content"

## Autres idées

automatiser les commits
Les sous-modules


## Images

## Junctions ??


On windows you need to make a Junction (mklink /J "path to junction link" "path to target folder"), not a symlink. Unless you are using WSL for a virtual Linux container. This is the only way to make sure the contents are also saved in your Astro Git repository. As for Linux and MacOS, also make sure the symbolic link reference path is relative to the repository or the contents will not be added to your Git repo. You can use the relative flag (ln -sr ... ...) to achieve this.
@TiBO_Uke
5 months ago
I also faced the same issue of not having the folder show up in the git repository and it therefore didn't sync/deploy to Netlify. Thanks for pointing toward a solution, it seems to be working (for now)