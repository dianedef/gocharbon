import "dart:async";

import "package:flutter/material.dart";
import "package:flutter/foundation.dart";
import "package:flutter_riverpod/flutter_riverpod.dart";
import "package:flutter_web_plugins/url_strategy.dart";

import "src/app.dart";
import "src/error/app_error_store.dart";
import "src/services/notifications/notifications.dart";
import "src/theme/app_colors.dart";

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  if (kIsWeb) {
    usePathUrlStrategy();
  }

  _setupGlobalErrorHandling();

  await NotificationsService.instance.init();

  runZonedGuarded(
    () => runApp(const ProviderScope(child: App())),
    (error, stack) => AppErrorStore.report(error, stack, context: "runZonedGuarded"),
  );
}

void _setupGlobalErrorHandling() {
  // Build/render errors.
  ErrorWidget.builder = (details) {
    AppErrorStore.report(
      details.exception,
      details.stack ?? StackTrace.current,
      context: details.context?.toString(),
    );
    return const ColoredBox(
      color: AppColors.bg,
      child: Center(
        child: Padding(
          padding: EdgeInsets.all(16),
          child: Text(
            "Une erreur est survenue.\nOuvre la console et copie l’erreur.",
            textAlign: TextAlign.center,
            style: TextStyle(color: AppColors.textSecondary, fontWeight: FontWeight.w700),
          ),
        ),
      ),
    );
  };

  // Flutter framework errors.
  FlutterError.onError = (details) {
    AppErrorStore.report(
      details.exception,
      details.stack ?? StackTrace.current,
      context: "FlutterError.onError",
    );
    FlutterError.presentError(details);
  };

  // Unhandled async errors (web + mobile).
  WidgetsBinding.instance.platformDispatcher.onError = (error, stack) {
    AppErrorStore.report(error, stack, context: "platformDispatcher.onError");
    return true;
  };
}
