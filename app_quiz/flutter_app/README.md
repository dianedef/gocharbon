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

## Migration Firebase Auth + Convex

Le runtime cible est activé explicitement par `GOCHARBON_RUNTIME=convex`. Tant
que cette valeur n'est pas définie, l'application conserve le chemin
Supabase/FastAPI pour permettre le rollback.

```bash
flutter run -d chrome \
  --dart-define=GOCHARBON_RUNTIME=convex \
  --dart-define=CONVEX_HTTP_URL="https://<deployment>.convex.site" \
  --dart-define=FIREBASE_API_KEY="<web-api-key>" \
  --dart-define=FIREBASE_APP_ID="<web-app-id>" \
  --dart-define=FIREBASE_MESSAGING_SENDER_ID="<sender-id>" \
  --dart-define=FIREBASE_PROJECT_ID="<project-id>" \
  --dart-define=FIREBASE_AUTH_DOMAIN="<project-id>.firebaseapp.com"
```

Firebase Auth crée d'abord une session anonyme et permet de la lier à Google.
Les routes Convex authentifiées reçoivent un jeton Firebase frais via
`Authorization: Bearer <id-token>`; elles doivent déterminer l'identité depuis
ce jeton et ne doivent jamais accepter un UID envoyé par le client.

Pour Android, iOS, macOS et Windows, les fichiers de configuration Firebase
doivent encore être produits depuis le projet Firebase autorisé. Ils ne sont
pas ajoutés ici sans accès au fournisseur. Google Sign-In natif exige aussi les
identifiants OAuth correspondants. Les autres fournisseurs (Facebook, email,
magic link) restent volontairement disponibles seulement dans le runtime
legacy tant que leur politique de linking Firebase n'est pas spécifiée.

## Variables

- `API_BASE_URL` : URL du backend `/api/*`
- `SUPABASE_URL` : URL du projet Supabase
- `SUPABASE_PUBLISHABLE_KEY` : clé publique Supabase
- `SUPABASE_AUTH_REDIRECT_URL` : callback OAuth/magic link
- `GOCHARBON_RUNTIME` : `legacy` (défaut) ou `convex`
- `CONVEX_HTTP_URL` : origine des routes HTTP Convex, sans suffixe `/api`
- `APP_PUBLIC_URL` : origine HTTPS ajoutée devant `/challenge/<code>` lors du partage
- `FIREBASE_*` : configuration publique Firebase Web passée au build

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
