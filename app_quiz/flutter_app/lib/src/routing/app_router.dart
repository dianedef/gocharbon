import "package:flutter/material.dart";
import "package:flutter_riverpod/flutter_riverpod.dart";
import "package:go_router/go_router.dart";

import "../ui/screens/home_screen.dart";
import "../ui/screens/leaderboard_screen.dart";
import "../ui/screens/profile_screen.dart";
import "../ui/screens/quiz_screen.dart";
import "../ui/screens/results_screen.dart";
import "../ui/screens/auth/auth_callback_screen.dart";
import "../ui/widgets/tabs_scaffold.dart";

final _rootNavigatorKey = GlobalKey<NavigatorState>();
final _shellNavigatorKey = GlobalKey<NavigatorState>();

final routerProvider = Provider<GoRouter>((ref) {
  return GoRouter(
    navigatorKey: _rootNavigatorKey,
    initialLocation: "/",
    routes: [
      ShellRoute(
        navigatorKey: _shellNavigatorKey,
        builder: (context, state, child) =>
            TabsScaffold(location: state.uri.toString(), child: child),
        routes: [
          GoRoute(path: "/", builder: (context, state) => const HomeScreen()),
          GoRoute(
            path: "/leaderboard",
            builder: (context, state) => const LeaderboardScreen(),
          ),
          GoRoute(
            path: "/profile",
            builder: (context, state) => const ProfileScreen(),
          ),
        ],
      ),
      GoRoute(
        path: "/auth/callback",
        parentNavigatorKey: _rootNavigatorKey,
        builder: (context, state) => AuthCallbackScreen(callbackUri: state.uri),
      ),
      GoRoute(
        path: "/quiz/:category",
        parentNavigatorKey: _rootNavigatorKey,
        builder: (context, state) {
          final category = state.pathParameters["category"] ?? "random";
          final mode = state.uri.queryParameters["mode"] ?? "timed";
          return QuizScreen(category: category, mode: mode);
        },
      ),
      GoRoute(
        path: "/quiz/results",
        parentNavigatorKey: _rootNavigatorKey,
        builder: (context, state) => const ResultsScreen(),
      ),
    ],
    errorBuilder: (context, state) => const HomeScreen(),
  );
});
