import "../../config/app_config.dart";
import "../auth/auth_service.dart";
import "../api/gocharbon_api.dart";
import "../storage/storage_service.dart";

class UserSession {
  const UserSession({
    required this.userId,
    required this.userSecret,
    required this.isAnonymous,
  });

  final String userId;
  final String userSecret;
  final bool isAnonymous;
}

class SessionService {
  const SessionService({
    required this.auth,
    required this.api,
    required this.storage,
  });

  final AuthService auth;
  final GoCharbonApi api;
  final StorageService storage;

  Future<UserSession> ensureSession() async {
    if (AppConfig.useConvexRuntime || AppConfig.supabaseConfigured) {
      final session = await auth.ensureAnonymousSession();
      return UserSession(
        userId: session.userId,
        userSecret: session.accessToken,
        isAnonymous: session.isAnonymous,
      );
    }

    final userId = await storage.getUserId();
    final userSecret = await storage.getUserSecret();
    if (userId == null ||
        userId.isEmpty ||
        userSecret == null ||
        userSecret.isEmpty) {
      final created = await api.createUser();
      await storage.setUserId(created.profile.userId);
      await storage.setUserSecret(created.userSecret);
      return UserSession(
        userId: created.profile.userId,
        userSecret: created.userSecret,
        isAnonymous: true,
      );
    }
    return UserSession(
      userId: userId,
      userSecret: userSecret,
      isAnonymous: true,
    );
  }
}
