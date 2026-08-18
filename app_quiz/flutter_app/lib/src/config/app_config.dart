class AppConfig {
  static const String _runtimeRaw = String.fromEnvironment(
    "GOCHARBON_RUNTIME",
    defaultValue: "legacy",
  );

  /// `convex` is deliberately opt-in until the Firebase and Convex projects
  /// have been configured and validated in each target environment.
  static bool get useConvexRuntime =>
      _runtimeRaw.trim().toLowerCase() == "convex";

  static const String apiBaseUrl = String.fromEnvironment(
    "API_BASE_URL",
    defaultValue: "",
  );

  static bool get legacyApiConfigured => apiBaseUrl.trim().isNotEmpty;

  static const String supabaseUrl = String.fromEnvironment(
    "SUPABASE_URL",
    defaultValue: "",
  );

  static const String supabasePublishableKey = String.fromEnvironment(
    "SUPABASE_PUBLISHABLE_KEY",
    defaultValue: "",
  );

  static const String supabaseLegacyAnonKey = String.fromEnvironment(
    "SUPABASE_ANON_KEY",
    defaultValue: "",
  );

  static String get supabaseAnonKey => supabasePublishableKey.trim().isNotEmpty
      ? supabasePublishableKey
      : supabaseLegacyAnonKey;

  static const String _supabaseLegacyRedirectUrl = String.fromEnvironment(
    "SUPABASE_REDIRECT_URL",
    defaultValue: "",
  );

  static const String supabaseAuthRedirectUrl = String.fromEnvironment(
    "SUPABASE_AUTH_REDIRECT_URL",
    defaultValue: _supabaseLegacyRedirectUrl,
  );

  static const String supabaseSubmitQuizRpc = String.fromEnvironment(
    "SUPABASE_SUBMIT_QUIZ_RPC",
    defaultValue: "submit_quiz",
  );

  static const String supabaseProfileRpc = String.fromEnvironment(
    "SUPABASE_PROFILE_RPC",
    defaultValue: "get_my_profile",
  );

  static const String supabaseLeaderboardRpc = String.fromEnvironment(
    "SUPABASE_LEADERBOARD_RPC",
    defaultValue: "get_leaderboard",
  );

  static const String supabaseUserRankRpc = String.fromEnvironment(
    "SUPABASE_USER_RANK_RPC",
    defaultValue: "get_my_rank",
  );

  static const String supabaseLeaderboardNotificationsRpc =
      String.fromEnvironment(
        "SUPABASE_LEADERBOARD_NOTIFICATIONS_RPC",
        defaultValue: "",
      );

  static const String supabaseProfilesTable = String.fromEnvironment(
    "SUPABASE_PROFILES_TABLE",
    defaultValue: "profiles",
  );

  static const String supabaseLeaderboardView = String.fromEnvironment(
    "SUPABASE_LEADERBOARD_VIEW",
    defaultValue: "leaderboard_public",
  );

  static const String _supabaseUserScopedDataRaw = String.fromEnvironment(
    "SUPABASE_USER_SCOPED_DATA",
    defaultValue: "true",
  );

  static bool get supabaseConfigured =>
      supabaseUrl.trim().isNotEmpty && supabaseAnonKey.trim().isNotEmpty;

  static bool get useSupabaseUserScopedData =>
      _supabaseUserScopedDataRaw.trim().toLowerCase() != "false";

  static const String convexHttpUrl = String.fromEnvironment(
    "CONVEX_HTTP_URL",
    defaultValue: "",
  );

  static const String publicAppUrl = String.fromEnvironment(
    "APP_PUBLIC_URL",
    defaultValue: "https://gocharbon-quiz.vercel.app",
  );

  static bool get convexConfigured => convexHttpUrl.trim().isNotEmpty;

  static const String firebaseApiKey = String.fromEnvironment(
    "FIREBASE_API_KEY",
    defaultValue: "",
  );

  static const String firebaseAppId = String.fromEnvironment(
    "FIREBASE_APP_ID",
    defaultValue: "",
  );

  static const String firebaseMessagingSenderId = String.fromEnvironment(
    "FIREBASE_MESSAGING_SENDER_ID",
    defaultValue: "",
  );

  static const String firebaseProjectId = String.fromEnvironment(
    "FIREBASE_PROJECT_ID",
    defaultValue: "",
  );

  static const String firebaseAuthDomain = String.fromEnvironment(
    "FIREBASE_AUTH_DOMAIN",
    defaultValue: "",
  );

  static const String firebaseStorageBucket = String.fromEnvironment(
    "FIREBASE_STORAGE_BUCKET",
    defaultValue: "",
  );

  static const String firebaseMeasurementId = String.fromEnvironment(
    "FIREBASE_MEASUREMENT_ID",
    defaultValue: "",
  );

  static bool get firebaseConfigured =>
      firebaseApiKey.trim().isNotEmpty &&
      firebaseAppId.trim().isNotEmpty &&
      firebaseMessagingSenderId.trim().isNotEmpty &&
      firebaseProjectId.trim().isNotEmpty;

  static bool get convexRuntimeConfigured =>
      useConvexRuntime && firebaseConfigured && convexConfigured;
}
