# Flutter App

Application mobile et web principale du projet.

## Lancer

```bash
flutter pub get
flutter run -d chrome --dart-define=API_BASE_URL="http://localhost:3001"
```

Avec Supabase :

```bash
flutter run -d chrome \
  --dart-define=API_BASE_URL="http://localhost:3001" \
  --dart-define=SUPABASE_URL="https://<project-ref>.supabase.co" \
  --dart-define=SUPABASE_PUBLISHABLE_KEY="<publishable-key>" \
  --dart-define=SUPABASE_AUTH_REDIRECT_URL="https://<host>/auth/callback"
```

## Variables

- `API_BASE_URL` : URL du backend `/api/*`
- `SUPABASE_URL` : URL du projet Supabase
- `SUPABASE_PUBLISHABLE_KEY` : clé publique Supabase
- `SUPABASE_AUTH_REDIRECT_URL` : callback OAuth/magic link

## Validation

```bash
flutter analyze
flutter test
flutter build web --release --dart-define=API_BASE_URL="http://localhost:3001"
```

## Structure

- `lib/src/ui/screens` : écrans principaux
- `lib/src/ui/widgets` : composants UI partagés
- `lib/src/services/api` : client HTTP
- `lib/src/services/auth` : auth Supabase
- `lib/src/services/session` : session anonyme et persistance
- `lib/src/models` : modèles API et stockage local
- `lib/src/theme` : thème et configuration des catégories
