Analyse l'outil suivant et crée une fiche GoCharbon complète si pertinent.

Argument reçu : $ARGUMENTS

Charge et suis le skill complet dans `skills/gocharbon-fiche-outil/SKILL.md`.

Processus en 6 phases :
1. **Recherche** — Scraper le site officiel (accueil, tarifs, mentions légales). Si l'argument est un nom, chercher d'abord le site officiel.
2. **Doublons** — Vérifier que l'outil n'existe pas déjà dans `site/src/data/outils/`.
3. **Pertinence** — Évaluer si l'outil a sa place sur GoCharbon (audience, B2B, produit réel). Donner un verdict clair OUI/NON avec justification. Attendre validation avant de continuer.
4. **Placement** — Déterminer catégorie, sous-catégorie, facettes. Lire 1-2 fiches voisines.
5. **Rédaction** — Créer la fiche complète en suivant `site/src/data/outils/_template.md`. Ton GoCharbon, tutoiement, 150+ lignes, points faibles honnêtes.
6. **Qualification locale** — Remplir tous les champs de patriotisme français (`qualificationLocale`, `ancrageEconomique`, `niveauResponsabilite`, etc.) à partir des preuves légales. Suivre les règles de `skills/outils-qualification-locale/SKILL.md`. Ne jamais surqualifier.

Ne jamais lancer de build à la fin.
