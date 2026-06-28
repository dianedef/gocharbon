import "dart:async";

import "package:supabase_flutter/supabase_flutter.dart";

import "../../config/app_config.dart";

class SupabaseBootstrapService {
  const SupabaseBootstrapService();

  static Future<void>? _initialization;

  bool get isConfigured => AppConfig.supabaseConfigured;

  String? get redirectTo {
    final value = AppConfig.supabaseAuthRedirectUrl.trim();
    return value.isEmpty ? null : value;
  }

  Future<void> ensureInitialized() async {
    if (!isConfigured) {
      throw StateError(
        "Supabase n'est pas configuré. Fournis SUPABASE_URL et SUPABASE_PUBLISHABLE_KEY (ou SUPABASE_ANON_KEY legacy) via --dart-define.",
      );
    }

    _initialization ??= _initializeInternal();
    await _initialization;
  }

  SupabaseClient get client => Supabase.instance.client;

  Future<void> _initializeInternal() async {
    try {
      await Supabase.initialize(
        url: AppConfig.supabaseUrl,
        anonKey: AppConfig.supabaseAnonKey,
        authOptions: const FlutterAuthClientOptions(
          authFlowType: AuthFlowType.pkce,
          autoRefreshToken: true,
        ),
      );
    } catch (error) {
      if (_isAlreadyInitialized(error)) {
        return;
      }
      rethrow;
    }
  }

  bool _isAlreadyInitialized(Object error) {
    final message = error.toString().toLowerCase();
    return message.contains("already initialized");
  }
}
