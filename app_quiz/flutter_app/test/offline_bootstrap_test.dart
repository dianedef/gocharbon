import "package:flutter/material.dart";
import "package:flutter_riverpod/flutter_riverpod.dart";
import "package:flutter_test/flutter_test.dart";
import "package:gocharbon_quiz/src/services/api/gocharbon_api.dart";
import "package:gocharbon_quiz/src/services/auth/auth_service.dart";
import "package:gocharbon_quiz/src/services/auth/firebase_bootstrap_service.dart";
import "package:gocharbon_quiz/src/services/auth/supabase_bootstrap_service.dart";
import "package:gocharbon_quiz/src/services/session/session_service.dart";
import "package:gocharbon_quiz/src/services/storage/storage_service.dart";
import "package:gocharbon_quiz/src/state/providers.dart";
import "package:gocharbon_quiz/src/ui/screens/home_screen.dart";
import "package:shared_preferences/shared_preferences.dart";

SessionService _service({Future<UserSession> Function()? remoteLoader}) {
  return SessionService(
    auth: const AuthService(
      supabase: SupabaseBootstrapService(),
      firebaseBootstrap: FirebaseBootstrapService(),
    ),
    api: GoCharbonApi(baseUrl: ""),
    storage: const StorageService(),
    backendConfigured: false,
    remoteSessionLoader: remoteLoader,
  );
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  setUp(() => SharedPreferences.setMockInitialValues({}));

  test(
    "unconfigured backend returns local guest without network bootstrap",
    () async {
      var remoteCalls = 0;
      final session = await _service(
        remoteLoader: () async {
          remoteCalls++;
          throw StateError("network must not be called");
        },
      ).ensureSession();

      expect(remoteCalls, 0);
      expect(session.isOffline, isTrue);
      expect(session.localProfile?.username, "Invité");
    },
  );

  test("server-only API fails fast when backend is unconfigured", () async {
    final api = GoCharbonApi(baseUrl: "");
    final stopwatch = Stopwatch()..start();

    await expectLater(
      api.getQuestions(category: "finance"),
      throwsA(isA<Exception>()),
    );

    expect(stopwatch.elapsed, lessThan(const Duration(seconds: 1)));
  });

  testWidgets("Home leaves loading and exposes offline state", (tester) async {
    final service = _service();
    await tester.pumpWidget(
      ProviderScope(
        overrides: [sessionServiceProvider.overrideWithValue(service)],
        child: const MaterialApp(home: HomeScreen()),
      ),
    );

    await tester.pumpAndSettle();

    expect(find.byType(CircularProgressIndicator), findsNothing);
    expect(find.text("Mode hors ligne · profil invité local"), findsOneWidget);
    expect(find.text("Invité"), findsOneWidget);
  });
}
