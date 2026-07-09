---
artifact: documentation
metadata_schema_version: "1.0"
artifact_version: "1.1.0"
project: "gocharbon_quiz"
updated: "2026-04-27"
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

- quiz courts par thème business
- score, XP, badges, classement et recommandations
- redirection vers la bonne suite éditoriale ou pédagogique sur GoCharbon

## Architecture

- `flutter_app/` : application Flutter mobile + web
- `backend/` : API FastAPI legacy pour questions, scoring, leaderboard et recommandations
- `supabase/` : migrations Postgres/RLS pour les flux auth et données user-scoped
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
| `flutter_app/` | `SUPABASE_URL` | URL du projet Supabase |
| `flutter_app/` | `SUPABASE_PUBLISHABLE_KEY` | Clé publique Supabase côté client |
| `flutter_app/` | `SUPABASE_AUTH_REDIRECT_URL` | Callback OAuth/magic link |
| `backend/` | `MONGO_URL` | Connexion MongoDB du backend FastAPI |
| `backend/` | `DB_NAME` | Nom de la base MongoDB |
| Build Vercel | `API_BASE_URL` | URL backend injectée au build Flutter web |

Exemple backend : [backend/.env.example](backend/.env.example).

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

- [shipglowz_data/technical/app_quiz/architecture.md](../shipglowz_data/technical/app_quiz/architecture.md)
- [shipglowz_data/technical/app_quiz/guidelines.md](../shipglowz_data/technical/app_quiz/guidelines.md)
- [shipglowz_data/product/app_quiz/product.md](../shipglowz_data/product/app_quiz/product.md)
- [shipglowz_data/technical/app_quiz/API.md](../shipglowz_data/technical/app_quiz/API.md)
- [shipglowz_data/technical/app_quiz/SUPABASE.md](../shipglowz_data/technical/app_quiz/SUPABASE.md)
- [flutter_app/README.md](flutter_app/README.md)
