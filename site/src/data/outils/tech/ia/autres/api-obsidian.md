---
section: apps
metadataEnrichedAt: null
title: Api Obsidian
author: Diane
tags:
- Outils
description: 'Découvre Api Obsidian : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

## Principales Parties de l'API Obsidian

1. **Structure Principale**

```typescript
export class App {
    vault: Vault;                // Gestion des fichiers
    workspace: Workspace;        // Gestion de l'interface
    metadataCache: MetadataCache; // Cache des métadonnées Markdown
}
```

2. **Gestion des Fichiers (Vault)**
- `vault.create(path, data)` : Crée un nouveau fichier
- `vault.read(file)` : Lit le contenu d'un fichier
- `vault.modify(file, data)` : Modifie un fichier
- `vault.delete(file)` : Supprime un fichier
- `vault.getAbstractFileByPath(path)` : Récupère un fichier/dossier par son chemin
- `vault.createFolder(path)` : Crée un dossier

1. **Interface Utilisateur (Workspace)**
- `workspace.getActiveFile()` : Obtient le fichier actif
- `workspace.getLeaf()` : Obtient une nouvelle feuille (onglet)
- `workspace.openLinkText()` : Ouvre un lien
- `workspace.getActiveViewOfType()` : Obtient la vue active d'un certain type

1. **Plugins**

```typescript
export abstract class Plugin {
    // Méthodes principales
    onload(): void;             // Appelé au chargement
    onunload(): void;           // Appelé à la désactivation
    
    // Fonctionnalités communes
    addRibbonIcon();            // Ajoute un icône dans la barre latérale
    addCommand();               // Ajoute une commande
    addSettingTab();            // Ajoute un onglet de paramètres
    loadData()/saveData();      // Gestion des données du plugin
}
```

2. **Composants UI**
- `Setting` : Pour créer des paramètres
- `Modal` : Pour les fenêtres modales
- `Notice` : Pour les notifications
- `Menu` : Pour les menus contextuels

1. **Éditeur**

```typescript
export abstract class Editor {
    getValue(): string;         // Obtient le contenu
    setValue(content: string);  // Définit le contenu
    getCursor();               // Position du curseur
    replaceSelection();        // Remplace la sélection
}
```

2. **Événements**

```typescript
// Exemples d'événements importants
vault.on('create', callback);   // Création de fichier
vault.on('modify', callback);   // Modification de fichier
vault.on('delete', callback);   // Suppression de fichier
workspace.on('file-open', callback); // Ouverture de fichier
workspace.on('layout-change', callback); // Changement de layout
```

3. **Métadonnées**

```typescript
metadataCache.getFileCache(file);     // Obtient le cache d'un fichier
metadataCache.getCache(path);         // Obtient le cache par chemin
metadataCache.resolvedLinks;          // Liens résolus
metadataCache.unresolvedLinks;        // Liens non résolus
```

4. **Adaptateurs de Données**

```typescript
interface DataAdapter {
    exists(path: string): Promise<boolean>;
    read(path: string): Promise<string>;
    write(path: string, data: string): Promise<void>;
    mkdir(path: string): Promise<void>;
    remove(path: string): Promise<void>;
}
```

Les points clés à retenir :
- L'API est fortement orientée Promise pour les opérations asynchrones
- La plupart des opérations sur les fichiers passent par le `vault`
- L'interface utilisateur est gérée via le `workspace`
- Les plugins ont un cycle de vie clair (load/unload)
- Il existe de nombreux composants UI réutilisables
- Le système d'événements permet de réagir aux changements

Cette API est conçue pour être :
1. Asynchrone (utilisation intensive des Promises)
2. Extensible (système de plugins)
3. Réactive (système d'événements)
4. Sûre (gestion des erreurs et des permissions)

Obsidian offre plusieurs API aux développeurs pour gérer les plugins installés sur l'instance de l'application. Voici les principales interfaces et fonctionnalités disponibles :

## API de Gestion des Plugins

### App et Plugin

L'objet `App` est le point d'entrée principal pour interagir avec l'application Obsidian. Il fournit l'accès à plusieurs interfaces importantes[2] :

- `app.plugins` : Permet d'accéder aux plugins installés et activés.
- `Plugin` : Classe de base que les développeurs doivent étendre pour créer leurs propres plugins[2].

### Méthodes de Gestion des Plugins

- `app.plugins.enablePlugin(id)` : Active un plugin spécifique[3].
- `app.plugins.disablePlugin(id)` : Désactive un plugin spécifique[3].
- `app.plugins.enablePluginAndSave(id)` : Active un plugin et sauvegarde son état[3].

### Vérification de L'état des Plugins

```javascript
const pluginStatus = function (pluginId) {
    return app.plugins.plugins.hasOwnProperty(pluginId);
};
```

Cette fonction permet de vérifier si un plugin est activé[3].

## API de Configuration des Plugins

### Manifest du Plugin

Le fichier `manifest.json` contient les métadonnées du plugin, notamment[2] :

- `id` : Identifiant unique du plugin
- `name` : Nom d'affichage du plugin
- `version` : Version du plugin
- `minAppVersion` : Version minimale d'Obsidian requise

### Méthodes de Configuration

- `this.addSettingTab()` : Ajoute un onglet de paramètres pour le plugin[2].
- `this.loadData()` et `this.saveData()` : Permettent de charger et sauvegarder les données du plugin[2].

## Événements et Commandes

- `this.registerEvent()` : Enregistre un gestionnaire d'événements pour le plugin[2].
- `this.addCommand()` : Ajoute une commande globale pour le plugin[2].

## Exemple D'utilisation

```typescript
import { Plugin, Notice } from 'obsidian';

export default class HelloWorldPlugin extends Plugin {
    async onload() {
        this.addRibbonIcon('dice', 'Greet', () => {
            new Notice('Hello, world!');
        });
    }
}
```

Ce code crée un plugin simple qui ajoute une icône dans la barre latérale et affiche un message lorsqu'on clique dessus[4].

Ces API permettent aux développeurs de créer, gérer et configurer des plugins pour Obsidian, offrant ainsi une grande flexibilité pour étendre les fonctionnalités de l'application.

Citations:
[1] https://forum.obsidian.md/t/creating-a-formatted-list-of-plugins-currently-installed-and-whether-they-are-enabled-or-disabled/70563
[2] https://github.com/obsidianmd/obsidian-api?tab=readme-ov-file
[3] https://github.com/ohm-en/obsidian-plugin-manager/
[4] https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin
[5] https://docs.obsidian.md/Reference/TypeScript+API/Plugin
[6] https://docs.obsidian.md
[7] https://github.com/obsidianmd/obsidian-api/blob/master/README.md
[8] https://forum.obsidian.md/t/inter-plugin-communication-expose-api-to-other-plugins/23618

## Couleurs

```
/* Couleurs principales _/
--color-base-00: #ffffff; /_ Arrière-plan principal _/
--color-base-10: #f6f7f8; /_ Arrière-plan secondaire _/
--color-base-20: #f0f1f2;
--color-base-25: #e9e9e9;
--color-base-30: #e3e5e6;
--color-base-35: #d9d9d9;
--color-base-40: #bcc0c2;
--color-base-50: #9ba1a5;
--color-base-60: #808487;
--color-base-70: #68696b;
--color-base-100: #101014; /_ Texte principal */

/* Couleurs d'accentuation _/
--color-red: #e06c75; /_ Rouge _/
--color-orange: #d19a66; /_ Orange _/
--color-yellow: #e5c07b; /_ Jaune _/
--color-green: #98c379; /_ Vert _/
--color-cyan: #56b6c2; /_ Cyan _/
--color-blue: #61afef; /_ Bleu _/
--color-purple: #c678dd; /_ Violet _/
--color-pink: #ff79c6; /_ Rose */

/* Couleurs interactives _/
--interactive-normal: #f2f3f5;
--interactive-hover: #e9e9e9;
--interactive-accent: #7b6cd9; /_ Couleur d'accent principale */
--interactive-accent-hover: #8875ff;

--color-base-00: #ffffff; /* Blanc pur - Fond le plus clair _/
--color-base-10: #f6f7f8; /_ Gris très clair _/
--color-base-20: #f0f1f2; /_ Gris clair _/
--color-base-30: #e3e5e6; /_ Gris moyen clair _/
--color-base-50: #9ba1a5; /_ Gris moyen _/
--color-base-70: #68696b; /_ Gris foncé _/
--color-base-100: #101014; /_ Presque noir - Le plus foncé */
```
 
## manipulation des URLs :

1. `requestUrl` :
   - Une fonction native d'Obsidian pour faire des requêtes HTTP
   - Contourne les restrictions CORS car fonctionne dans l'environnement Electron
   - Accepte des paramètres de type string ou ArrayBuffer
   - Ne gère pas nativement FormData ou multipart/form-data

2. `normalizePath` :
   - Utilisé pour normaliser les chemins de fichiers dans le vault
   - Gère les chemins relatifs et absolus

3. `getResourcePath` :
   - Permet d'obtenir l'URL d'une ressource (fichier) dans le vault
   - Utilisé notamment dans `LocalMediaService` pour obtenir les URLs des fichiers locaux

4. `metadataCache.getFirstLinkpathDest` :
   - Permet de résoudre les liens dans les notes Obsidian
   - Utilisé dans `ImagePathService` pour retrouver les fichiers d'images

5. `vault.getAbstractFileByPath` :
   - Permet d'obtenir un fichier à partir de son chemin
   - Utilisé pour la gestion des fichiers locaux

Ces utilitaires sont déjà intégrés dans notre code à travers plusieurs services :

- `ImagePathService` : Gestion des chemins d'images
- `FileNameService` : Manipulation des noms de fichiers et URLs
- `LocalMediaService` : Gestion des médias locaux
- Services cloud (CloudinaryService, BunnyService, etc.) : Gestion des URLs des CDNs

Ces outils natifs d'Obsidian sont suffisants pour nos besoins actuels de manipulation d'URLs dans le plugin.

## Interagir Avec les Propriétés des Fichiers Markdown et des Dossiers :

1. **`app.vault.getFiles()`** : Récupère tous les fichiers dans le vault.
2. **`app.vault.getMarkdownFiles()`** : Récupère tous les fichiers Markdown dans le vault.
3. **`app.vault.getFileByPath(path: string)`** : Récupère un fichier spécifique en utilisant son chemin.
4. **`app.vault.create(path: string, content: string)`** : Crée un nouveau fichier avec le contenu spécifié à l'emplacement donné.
5. **`app.vault.modify(file: TFile, content: string)`** : Modifie le contenu d'un fichier existant.
6. **`app.vault.delete(file: TFile)`** : Supprime un fichier du vault.
7. **`app.vault.getFolder(path: string)`** : Récupère un dossier spécifique en utilisant son chemin.
8. **`app.vault.createFolder(path: string)`** : Crée un nouveau dossier à l'emplacement spécifié.
9. **`app.vault.rename(oldPath: string, newPath: string)`** : Renomme un fichier ou un dossier.
10. **`app.metadataCache.getFileCache(file: TFile)`** : Récupère le cache des métadonnées d'un fichier, y compris les métadonnées YAML.

Ces méthodes vous permettent de manipuler les fichiers et les dossiers dans votre vault Obsidian de manière programmatique. Pour plus de détails, vous pouvez consulter la documentation officielle d'Obsidian.