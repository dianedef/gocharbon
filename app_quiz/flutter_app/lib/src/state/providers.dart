import "package:flutter_riverpod/flutter_riverpod.dart";

import "../config/app_config.dart";
import "../services/api/gocharbon_api.dart";
import "../services/auth/auth_service.dart";
import "../services/auth/supabase_bootstrap_service.dart";
import "../services/session/session_service.dart";
import "../services/storage/storage_service.dart";

final storageProvider = Provider<StorageService>(
  (ref) => const StorageService(),
);

final supabaseBootstrapProvider = Provider<SupabaseBootstrapService>(
  (ref) => const SupabaseBootstrapService(),
);

final authServiceProvider = Provider<AuthService>((ref) {
  final supabase = ref.watch(supabaseBootstrapProvider);
  return AuthService(supabase: supabase);
});

final apiProvider = Provider<GoCharbonApi>(
  (ref) => GoCharbonApi(baseUrl: AppConfig.apiBaseUrl),
);

final sessionServiceProvider = Provider<SessionService>((ref) {
  final auth = ref.watch(authServiceProvider);
  final api = ref.watch(apiProvider);
  final storage = ref.watch(storageProvider);
  return SessionService(auth: auth, api: api, storage: storage);
});

final sessionProvider = FutureProvider<UserSession>((ref) async {
  final svc = ref.watch(sessionServiceProvider);
  return svc.ensureSession();
});
