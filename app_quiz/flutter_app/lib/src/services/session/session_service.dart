import "../../config/app_config.dart";
import "../../models/user_profile.dart";
import "../auth/auth_service.dart";
import "../api/gocharbon_api.dart";
import "../offline/offline_demo_service.dart";
import "../storage/storage_service.dart";

class UserSession {
  const UserSession({
    required this.userId,
    required this.userSecret,
    required this.isAnonymous,
    required this.isOffline,
    this.localProfile,
  });

  final String userId;
  final String userSecret;
  final bool isAnonymous;
  final bool isOffline;
  final UserProfile? localProfile;
}

class SessionService {
  SessionService({
    required this.auth,
    required this.api,
    required this.storage,
    this.offline = const OfflineDemoService(),
    this.bootstrapTimeout = const Duration(seconds: 4),
    this.remoteSessionLoader,
    bool? backendConfigured,
  }) : backendConfigured =
           backendConfigured ??
           (AppConfig.useConvexRuntime ||
               AppConfig.supabaseConfigured ||
               AppConfig.legacyApiConfigured);

  final AuthService auth;
  final GoCharbonApi api;
  final StorageService storage;
  final OfflineDemoService offline;
  final Duration bootstrapTimeout;
  final bool backendConfigured;
  final Future<UserSession> Function()? remoteSessionLoader;

  Future<UserSession> ensureSession() async {
    if (!backendConfigured) return _offlineSession();

    try {
      return await (remoteSessionLoader?.call() ?? _ensureRemoteSession())
          .timeout(bootstrapTimeout);
    } catch (_) {
      return _offlineSession();
    }
  }

  Future<UserSession> _ensureRemoteSession() async {
    if (AppConfig.useConvexRuntime || AppConfig.supabaseConfigured) {
      final session = await auth.ensureAnonymousSession();
      return UserSession(
        userId: session.userId,
        userSecret: session.accessToken,
        isAnonymous: session.isAnonymous,
        isOffline: false,
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
        isOffline: false,
      );
    }
    return UserSession(
      userId: userId,
      userSecret: userSecret,
      isAnonymous: true,
      isOffline: false,
    );
  }

  Future<UserProfile> loadProfile(UserSession session) async {
    if (session.localProfile != null) return session.localProfile!;
    try {
      return await api.getUser(session.userId).timeout(bootstrapTimeout);
    } catch (_) {
      return offline.guestProfile(userId: session.userId);
    }
  }

  UserSession _offlineSession() => UserSession(
    userId: OfflineDemoService.guestUserId,
    userSecret: "",
    isAnonymous: true,
    isOffline: true,
    localProfile: offline.guestProfile(),
  );
}
