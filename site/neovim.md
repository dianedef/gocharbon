pourquoi utiliser neovim [(837) PDE: A different take on editing code - YouTube](https://www.youtube.com/watch?v=QMVIJhC9Veg)

Si vous ne trouvez pas le fichier .exe, cela signifie que l'installation n'a pas été complétée correctement. Voici les étapes pour installer Neovim sur Windows :

1. **Méthode recommandée avec winget** (le plus simple) :

```powershell
winget install Neovim.Neovim
```

2. **Alternative avec Chocolatey** (si vous avez Chocolatey installé) :

```powershell
choco install neovim
```

3. **Installation manuelle** :

- Allez sur la page officielle de Neovim : <https://github.com/neovim/neovim/releases/latest>
- Téléchargez le fichier `nvim-win64.msi` (l'installateur Windows)
- Exécutez l'installateur en double-cliquant dessus
- Suivez les instructions d'installation

Après l'installation, Neovim devrait être installé dans :

```
C:\Program Files\Neovim\
```

Pour vérifier que l'installation a réussi, vous pouvez :

1. Ouvrir l'Explorateur Windows
2. Naviguer vers `C:\Program Files\Neovim\bin\`
3. Vérifier la présence de `nvim.exe`

Si vous préférez une vérification via PowerShell :

```powershell
Test-Path "C:\Program Files\Neovim\bin\nvim.exe"
```

Quelle méthode d'installation souhaitez-vous utiliser ? Je peux vous guider à travers le processus.
