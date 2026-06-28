class AppConfig {
  static const String apiBaseUrl = String.fromEnvironment(
    "API_BASE_URL",
    defaultValue: "http://localhost:3001",
  );

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
}
