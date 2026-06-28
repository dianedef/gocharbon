import "dart:convert";

import "package:shared_preferences/shared_preferences.dart";
import "package:supabase_flutter/supabase_flutter.dart";

import "supabase_bootstrap_service.dart";

enum AuthLinkStatus {
  linked,
  alreadyLinked,
  pendingConfirmation,
  inProgress,
  blockedByOtherDevice,
  failed,
}

class AuthLinkResult {
  const AuthLinkResult({
    required this.status,
    required this.message,
    this.code,
  });

  final AuthLinkStatus status;
  final String message;
  final String? code;
}

class AuthSessionSnapshot {
  const AuthSessionSnapshot({
    required this.userId,
    required this.accessToken,
    required this.isAnonymous,
  });

  final String userId;
  final String accessToken;
  final bool isAnonymous;
}

class AuthService {
  const AuthService({required this.supabase});

  final SupabaseBootstrapService supabase;

  static const _linkLockKey = "gocharbon_supabase_link_lock";
  static const _magicOriginUserIdKey = "gocharbon_magic_origin_user_id";
  static const _magicOriginStartedAtKey = "gocharbon_magic_origin_started_at";
  static const Duration _linkLockTtl = Duration(minutes: 2);
  static const Duration _magicOriginTtl = Duration(hours: 1);

  Future<AuthSessionSnapshot> ensureAnonymousSession() async {
    await supabase.ensureInitialized();
    final auth = supabase.client.auth;
    Session? session = auth.currentSession;

    if (session == null) {
      final response = await auth.signInAnonymously();
      session = response.session;
    }

    if (session == null || session.user.id.isEmpty) {
      throw Exception("Impossible de créer une session Supabase.");
    }

    return AuthSessionSnapshot(
      userId: session.user.id,
      accessToken: session.accessToken,
      isAnonymous: _isAnonymousIdentity(session.user),
    );
  }

  Future<AuthLinkResult> linkWithGoogle() {
    return _linkOAuth(provider: OAuthProvider.google, method: "google");
  }

  Future<AuthLinkResult> linkWithFacebook() {
    return _linkOAuth(provider: OAuthProvider.facebook, method: "facebook");
  }

  Future<AuthLinkResult> linkWithMagicLink({required String email}) async {
    return _runWithLinkLock(
      method: "magic_link",
      action: (auth, user) async {
        if (_hasIdentity(user, "email")) {
          return const AuthLinkResult(
            status: AuthLinkStatus.alreadyLinked,
            message: "Un provider email est déjà lié à ce compte.",
          );
        }

        await auth.signInWithOtp(
          email: email.trim().toLowerCase(),
          emailRedirectTo: supabase.redirectTo,
          shouldCreateUser: false,
        );

        await _persistMagicLinkOrigin(user.id);

        return const AuthLinkResult(
          status: AuthLinkStatus.pendingConfirmation,
          message:
              "Magic link envoyé. Ouvre-le sur ce même device pour conserver la progression locale.",
          code: "OPEN_ON_ORIGIN_DEVICE",
        );
      },
    );
  }

  Future<AuthLinkResult> linkWithEmailPassword({
    required String email,
    required String password,
  }) async {
    final normalizedEmail = email.trim().toLowerCase();
    return _runWithLinkLock(
      method: "email_password",
      action: (auth, user) async {
        if (_hasIdentity(user, "email")) {
          return const AuthLinkResult(
            status: AuthLinkStatus.alreadyLinked,
            message: "Le compte est déjà lié à un provider email.",
          );
        }

        await auth.updateUser(
          UserAttributes(email: normalizedEmail, password: password),
        );

        return const AuthLinkResult(
          status: AuthLinkStatus.pendingConfirmation,
          message:
              "Compte email/mot de passe configuré. Vérifie l'email si confirmation requise.",
        );
      },
    );
  }

  Future<AuthLinkResult> validateMagicLinkDeviceBinding() async {
    final prefs = await SharedPreferences.getInstance();
    final originUid = prefs.getString(_magicOriginUserIdKey);
    final startedAtMs = prefs.getInt(_magicOriginStartedAtKey);
    if (originUid == null || startedAtMs == null) {
      return const AuthLinkResult(
        status: AuthLinkStatus.linked,
        message: "Aucun linking magic link en attente.",
      );
    }

    final now = DateTime.now();
    final startedAt = DateTime.fromMillisecondsSinceEpoch(startedAtMs);
    if (now.difference(startedAt) > _magicOriginTtl) {
      await _clearMagicLinkOrigin();
      return const AuthLinkResult(
        status: AuthLinkStatus.failed,
        message: "L'état de linking magic link a expiré. Relance le linking.",
        code: "MAGIC_LINK_ORIGIN_EXPIRED",
      );
    }

    await supabase.ensureInitialized();
    final currentUid = supabase.client.auth.currentUser?.id;
    if (currentUid == null || currentUid.isEmpty) {
      return const AuthLinkResult(
        status: AuthLinkStatus.failed,
        message: "Aucune session active pour finaliser le linking magic link.",
        code: "NO_ACTIVE_SESSION",
      );
    }

    if (currentUid != originUid) {
      return const AuthLinkResult(
        status: AuthLinkStatus.blockedByOtherDevice,
        message:
            "Lien ouvert sur un autre device: aucun merge implicite n'est effectué.",
        code: "MAGIC_LINK_OTHER_DEVICE",
      );
    }

    await _clearMagicLinkOrigin();
    return const AuthLinkResult(
      status: AuthLinkStatus.linked,
      message: "Magic link validé sur le device d'origine.",
    );
  }

  Future<AuthLinkResult> _linkOAuth({
    required OAuthProvider provider,
    required String method,
  }) async {
    return _runWithLinkLock(
      method: method,
      action: (auth, user) async {
        if (_hasIdentity(user, method)) {
          return const AuthLinkResult(
            status: AuthLinkStatus.alreadyLinked,
            message: "Ce provider est déjà lié.",
          );
        }

        await auth.linkIdentity(provider, redirectTo: supabase.redirectTo);

        return const AuthLinkResult(
          status: AuthLinkStatus.pendingConfirmation,
          message:
              "Redirection OAuth lancée. Termine le flow puis reviens dans l'app.",
        );
      },
    );
  }

  Future<AuthLinkResult> _runWithLinkLock({
    required String method,
    required Future<AuthLinkResult> Function(GoTrueClient auth, User user)
    action,
  }) async {
    await supabase.ensureInitialized();
    final auth = supabase.client.auth;
    final session = auth.currentSession;
    final user = session?.user;
    if (user == null) {
      return const AuthLinkResult(
        status: AuthLinkStatus.failed,
        message: "Aucune session active.",
        code: "NO_ACTIVE_SESSION",
      );
    }

    final lock = await _acquireLocalLinkLock(method: method, userId: user.id);
    if (!lock) {
      return const AuthLinkResult(
        status: AuthLinkStatus.inProgress,
        message: "Une tentative de linking est déjà en cours sur ce device.",
        code: "LINKING_IN_PROGRESS",
      );
    }

    try {
      final result = await action(auth, user);
      return result;
    } catch (error) {
      return AuthLinkResult(
        status: AuthLinkStatus.failed,
        message: "Échec du linking: $error",
      );
    } finally {
      await _releaseLocalLinkLock();
    }
  }

  bool _hasIdentity(User user, String provider) {
    final wanted = provider.trim().toLowerCase();
    return (user.identities ?? const []).any(
      (identity) => identity.provider.toLowerCase() == wanted,
    );
  }

  bool _isAnonymousIdentity(User user) {
    final identities = user.identities ?? const [];
    if (identities.isEmpty) return true;
    return identities.every(
      (identity) => identity.provider.toLowerCase() == "anonymous",
    );
  }

  Future<bool> _acquireLocalLinkLock({
    required String method,
    required String userId,
  }) async {
    final prefs = await SharedPreferences.getInstance();
    final now = DateTime.now();
    final raw = prefs.getString(_linkLockKey);
    if (raw != null && raw.isNotEmpty) {
      try {
        final data = jsonDecode(raw) as Map<String, dynamic>;
        final existingUserId = data["user_id"] as String?;
        final existingMethod = data["method"] as String?;
        final startedAtMs = data["started_at_ms"] as int?;
        if (existingUserId != null &&
            existingMethod != null &&
            startedAtMs != null) {
          final startedAt = DateTime.fromMillisecondsSinceEpoch(startedAtMs);
          if (now.difference(startedAt) < _linkLockTtl &&
              existingUserId == userId &&
              existingMethod == method) {
            return false;
          }
        }
      } catch (_) {}
    }

    final payload = jsonEncode({
      "user_id": userId,
      "method": method,
      "started_at_ms": now.millisecondsSinceEpoch,
    });
    await prefs.setString(_linkLockKey, payload);
    return true;
  }

  Future<void> _releaseLocalLinkLock() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_linkLockKey);
  }

  Future<void> _persistMagicLinkOrigin(String userId) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_magicOriginUserIdKey, userId);
    await prefs.setInt(
      _magicOriginStartedAtKey,
      DateTime.now().millisecondsSinceEpoch,
    );
  }

  Future<void> _clearMagicLinkOrigin() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_magicOriginUserIdKey);
    await prefs.remove(_magicOriginStartedAtKey);
  }
}
