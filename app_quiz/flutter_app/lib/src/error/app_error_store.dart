import "package:flutter/foundation.dart";

import "app_error.dart";

class AppErrorStore {
  static final ValueNotifier<AppError?> notifier = ValueNotifier<AppError?>(null);

  static String? _lastFingerprint;

  static void report(Object error, StackTrace stackTrace, {String? context}) {
    final fingerprint = "${error.runtimeType}:${error.toString()}\n$stackTrace";
    if (_lastFingerprint == fingerprint) return;
    _lastFingerprint = fingerprint;
    notifier.value = AppError(error: error, stackTrace: stackTrace, context: context);
  }

  static void clear() {
    notifier.value = null;
  }
}

