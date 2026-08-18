---
artifact: documentation
metadata_schema_version: "1.0"
artifact_version: "1.2.0"
project: "gocharbon_quiz"
updated: "2026-08-18"
status: reviewed
scope: readme
linked_systems:
  - "Flutter"
  - "Supabase"
  - "Backend FastAPI"
---

# gocharbon_quiz

Quiz business mobile et web pour `gocharbon.fr`, construit en Flutter.

Le produit sert de lead magnet interactif :

- parties de sept questions par thème business
- score, XP, badges, classement et événement quotidien
- défis asynchrones partageables, comparaison et revanche
- corrections courtes et redirection facultative vers GoCharbon

## Architecture

- `flutter_app/` : application Flutter mobile + web
- `backend/` : API FastAPI legacy pour questions, scoring, leaderboard et recommandations
- `supabase/` : migrations Postgres/RLS pour les flux auth et données user-scoped
- `convex/` : cible locale de migration, avec HTTP, schéma, scoring et recommandations serveur

La cible Firebase Auth → Convex est activée uniquement avec
`GOCHARBON_RUNTIME=convex`. Tant que les projets fournisseurs ne sont pas
créés et validés, le runtime `legacy` reste le rollback par défaut.
- `scripts/vercel_build_flutter.sh` : build web Flutter pour Vercel

L'ancien client mobile a été archivé sur une branche dédiée.

## Démarrage

```bash
cd flutter_app
flutter pub get
flutter run -d chrome --dart-define=API_BASE_URL="http://localhost:3001"
```

Le script racine démarre le backend local puis Flutter web :

```bash
npm run dev
```

Il lance `backend/` sur `http://localhost:3001` et Flutter web sur `http://localhost:3000`.

## Variables

| Portée | Variable | Usage |
| --- | --- | --- |
| `flutter_app/` | `API_BASE_URL` | URL de base des routes `/api/*` |
| `flutter_app/` | `APP_PUBLIC_URL` | Origine HTTPS utilisée pour les liens de défi partageables |
| `flutter_app/` | `SUPABASE_URL` | URL du projet Supabase |
| `flutter_app/` | `SUPABASE_PUBLISHABLE_KEY` | Clé publique Supabase côté client |
| `flutter_app/` | `SUPABASE_AUTH_REDIRECT_URL` | Callback OAuth/magic link |
| `backend/` | `MONGO_URL` | Connexion MongoDB du backend FastAPI |
| `backend/` | `DB_NAME` | Nom de la base MongoDB |
| Build Vercel | `API_BASE_URL` | URL backend injectée au build Flutter web legacy |

Pour la cible Convex, fournir aussi `CONVEX_HTTP_URL` et les cinq définitions
Firebase publiques (`FIREBASE_API_KEY`, `FIREBASE_APP_ID`,
`FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_PROJECT_ID`,
`FIREBASE_AUTH_DOMAIN`). Le client ne reçoit jamais les clés de correction des
questions ; le score est calculé par Convex lors de la soumission.

Exemple backend : [backend/.env.example](backend/.env.example).
Le modèle consolidé pour Flutter, Vercel et le backend est disponible dans [.env.example](.env.example).

Pour installer uniquement les dépendances de production du backend :

```bash
cd backend
pip install -r requirements.txt
```

Pour le développement et les tests :

```bash
cd backend
pip install -r requirements-dev.txt
```

## Validation

```bash
cd flutter_app
flutter analyze
flutter test
flutter build web --release
```

Tests backend :

```bash
cd backend
pytest
```

## Déploiement

- `vercel.json` utilise `scripts/vercel_build_flutter.sh`
- la sortie servie est `flutter_app/build/web`
- `.github/workflows/flutter_ci.yml` valide Flutter sur PR et `main`

## Documentation

- [shipglows_data/technical/app_quiz/architecture.md](../shipglows_data/technical/app_quiz/architecture.md)
- [shipglows_data/technical/app_quiz/guidelines.md](../shipglows_data/technical/app_quiz/guidelines.md)
- [shipglows_data/product/app_quiz/product.md](../shipglows_data/product/app_quiz/product.md)
- [shipglows_data/technical/app_quiz/API.md](../shipglows_data/technical/app_quiz/API.md)
- [shipglows_data/technical/app_quiz/SUPABASE.md](../shipglows_data/technical/app_quiz/SUPABASE.md)
- [flutter_app/README.md](flutter_app/README.md)
