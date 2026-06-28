import "package:flutter/material.dart";
import "package:flutter_riverpod/flutter_riverpod.dart";

import "error/app_error_store.dart";
import "routing/app_router.dart";
import "theme/app_theme.dart";
import "ui/screens/app_error_screen.dart";

class App extends ConsumerWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final router = ref.watch(routerProvider);
    return ValueListenableBuilder(
      valueListenable: AppErrorStore.notifier,
      builder: (context, appError, _) {
        if (appError != null) {
          return MaterialApp(
            title: "GoCharbon Business Quizz",
            theme: AppTheme.dark(),
            debugShowCheckedModeBanner: false,
            home: AppErrorScreen(error: appError),
          );
        }

        return MaterialApp.router(
          title: "GoCharbon Business Quizz",
          theme: AppTheme.dark(),
          routerConfig: router,
          debugShowCheckedModeBanner: false,
        );
      },
    );
  }
}
