import "dart:async";

import "package:flutter/material.dart";
import "package:flutter_riverpod/flutter_riverpod.dart";
import "package:go_router/go_router.dart";
import "package:supabase_flutter/supabase_flutter.dart";

import "../../../state/providers.dart";
import "../../../theme/app_colors.dart";

class AuthCallbackScreen extends ConsumerStatefulWidget {
  const AuthCallbackScreen({required this.callbackUri, super.key});

  final Uri callbackUri;

  @override
  ConsumerState<AuthCallbackScreen> createState() => _AuthCallbackScreenState();
}

class _AuthCallbackScreenState extends ConsumerState<AuthCallbackScreen> {
  static const _minimumVisibleDuration = Duration(milliseconds: 700);
  static const _authEventGracePeriod = Duration(seconds: 4);

  @override
  void initState() {
    super.initState();
    unawaited(_completeCallback());
  }

  Future<void> _completeCallback() async {
    final startedAt = DateTime.now();
    var target = "/";

    try {
      final supabase = ref.read(supabaseBootstrapProvider);
      await supabase.ensureInitialized();

      if (!_hasOAuthError() && await _hasActiveSession()) {
        target = "/profile";
      }
    } catch (_) {
      target = "/";
    }

    await _keepTransitionVisible(startedAt);
    if (!mounted) return;

    ref.invalidate(sessionProvider);
    _goSafely(target);
  }

  Future<bool> _hasActiveSession() async {
    final auth = Supabase.instance.client.auth;
    if (auth.currentSession != null) return true;

    try {
      final state = await auth.onAuthStateChange
          .firstWhere((state) => state.session != null)
          .timeout(_authEventGracePeriod);
      return state.session != null;
    } catch (_) {
      return auth.currentSession != null;
    }
  }

  Future<void> _keepTransitionVisible(DateTime startedAt) async {
    final elapsed = DateTime.now().difference(startedAt);
    final remaining = _minimumVisibleDuration - elapsed;
    if (remaining > Duration.zero) {
      await Future<void>.delayed(remaining);
    }
  }

  bool _hasOAuthError() {
    return _uriHasOAuthError(widget.callbackUri) || _uriHasOAuthError(Uri.base);
  }

  bool _uriHasOAuthError(Uri uri) {
    return uri.queryParameters.containsKey("error") ||
        uri.queryParameters.containsKey("error_description") ||
        uri.fragment.contains("error=") ||
        uri.fragment.contains("error_description=");
  }

  void _goSafely(String target) {
    try {
      context.go(target);
    } catch (_) {
      if (target != "/" && mounted) {
        context.go("/");
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return const SafeArea(
      child: Scaffold(
        backgroundColor: AppColors.bg,
        body: Center(
          child: Padding(
            padding: EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                CircularProgressIndicator(color: AppColors.primary),
                SizedBox(height: 20),
                Text(
                  "Connexion en cours...",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: AppColors.textPrimary,
                    fontSize: 22,
                    fontWeight: FontWeight.w900,
                  ),
                ),
                SizedBox(height: 8),
                Text(
                  "Finalisation sécurisée du retour OAuth.",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: AppColors.textSecondary,
                    fontSize: 14,
                    height: 1.35,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
