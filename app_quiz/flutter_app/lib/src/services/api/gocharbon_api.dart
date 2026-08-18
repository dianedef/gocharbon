import "dart:developer" as developer;

import "package:dio/dio.dart";
import "package:supabase_flutter/supabase_flutter.dart";

import "../../config/app_config.dart";
import "../../models/api_question.dart";
import "../../models/badge.dart";
import "../../models/daily_challenge.dart";
import "../../models/leaderboard_entry.dart";
import "../../models/quiz_answer.dart";
import "../../models/quiz_result.dart";
import "../../models/quiz_challenge.dart";
import "../../models/user_profile.dart";
import "convex_http_client.dart";

class GoCharbonApi {
  GoCharbonApi({
    required String baseUrl,
    String convexHttpUrl = "",
    Future<String?> Function()? accessToken,
  }) : _convex = AppConfig.useConvexRuntime
           ? ConvexHttpClient(
               baseUrl: convexHttpUrl,
               accessToken: accessToken ?? (() async => null),
             )
           : null,
       _dio = Dio(
         BaseOptions(
           baseUrl: baseUrl,
           connectTimeout: const Duration(seconds: 10),
           receiveTimeout: const Duration(seconds: 20),
           sendTimeout: const Duration(seconds: 20),
           headers: const {"content-type": "application/json"},
         ),
       ) {
    if (baseUrl.trim().isEmpty && !AppConfig.useConvexRuntime) {
      _dio.interceptors.add(
        InterceptorsWrapper(
          onRequest: (options, handler) => handler.reject(
            DioException(
              requestOptions: options,
              type: DioExceptionType.connectionError,
              message:
                  "Backend non configuré : cette fonctionnalité nécessite une connexion serveur.",
            ),
          ),
        ),
      );
    }
  }

  final Dio _dio;
  final ConvexHttpClient? _convex;

  Future<UserCreationResponse> createUser({String? username}) async {
    final res = await _dio.post<Map<String, dynamic>>(
      "/api/users",
      data: {
        "username": (username == null || username.trim().isEmpty)
            ? null
            : username.trim(),
      },
    );
    return UserCreationResponse.fromJson(_expectJsonMap(res.data));
  }

  Future<UserProfile> getUser(String userId) async {
    final convex = _convex;
    if (convex != null) return convex.getProfile();
    if (_shouldUseSupabaseUserScopedData) {
      final client = _supabaseClientOrNull();
      if (client != null) {
        try {
          final fromRpc = await _getUserFromSupabaseRpc(client, userId);
          if (fromRpc != null) return fromRpc;
        } catch (error) {
          _logSupabaseProfileFallback(
            "profile RPC failed; falling back to profiles table",
            error,
          );
        }

        try {
          final fromTable = await _getUserFromSupabaseTable(client, userId);
          if (fromTable != null) return fromTable;
        } catch (error) {
          _logSupabaseProfileFallback(
            "profiles table lookup failed; falling back to REST API",
            error,
          );
        }
      }
    }

    final res = await _dio.get<Map<String, dynamic>>("/api/users/$userId");
    return UserProfile.fromJson(_expectJsonMap(res.data));
  }

  Future<List<ApiQuestion>> getQuestions({
    required String category,
    int count = 10,
  }) async {
    final convex = _convex;
    if (convex != null) {
      return convex.getQuestions(category: category, count: count);
    }
    final res = await _dio.get<List<dynamic>>(
      "/api/questions",
      queryParameters: {"category": category, "count": count},
    );
    final arr = _expectJsonList(res.data);
    return arr
        .map((q) => ApiQuestion.fromJson(q as Map<String, dynamic>))
        .toList(growable: false);
  }

  Future<DailyChallenge> getDailyChallenge() async {
    final convex = _convex;
    if (convex != null) return convex.getDailyChallenge();
    final res = await _dio.get<Map<String, dynamic>>("/api/questions/daily");
    return DailyChallenge.fromJson(_expectJsonMap(res.data));
  }

  Future<QuizResult> submitQuiz({
    required String userId,
    required String userSecret,
    required String category,
    required String mode,
    required List<QuizAnswer> answers,
  }) async {
    final convex = _convex;
    if (convex != null) {
      return convex.submitQuiz(
        category: category,
        mode: mode,
        answers: answers,
      );
    }
    if (_shouldUseSupabaseUserScopedData) {
      final client = _supabaseClientOrNull();
      if (client != null) {
        try {
          final fromRpc = await _submitQuizWithSupabaseRpc(
            client: client,
            category: category,
            mode: mode,
            answers: answers,
          );
          if (fromRpc != null) return fromRpc;
        } catch (_) {}
      }
    }

    final res = await _dio.post<Map<String, dynamic>>(
      "/api/quiz/submit",
      options: Options(
        headers: userSecret.isEmpty ? const {} : {"x-user-secret": userSecret},
      ),
      data: {
        "user_id": userId,
        "user_secret": userSecret,
        "category": category,
        "mode": mode,
        "answers": answers.map((a) => a.toJson()).toList(growable: false),
      },
    );
    return QuizResult.fromJson(_expectJsonMap(res.data));
  }

  Future<CreatedChallenge> createChallenge(String attemptToken) {
    final convex = _convex;
    if (convex == null) {
      throw StateError("Les défis nécessitent le runtime compétitif.");
    }
    return convex.createChallenge(attemptToken);
  }

  Future<QuizChallenge> getChallenge(String code) {
    final convex = _convex;
    if (convex == null) {
      throw StateError("Les défis nécessitent le runtime compétitif.");
    }
    return convex.getChallenge(code);
  }

  Future<QuizChallenge> joinChallenge({
    required String code,
    required String attemptToken,
  }) {
    final convex = _convex;
    if (convex == null) {
      throw StateError("Les défis nécessitent le runtime compétitif.");
    }
    return convex.joinChallenge(code: code, attemptToken: attemptToken);
  }

  Future<List<LeaderboardEntry>> getLeaderboard({int limit = 50}) async {
    final convex = _convex;
    if (convex != null) return convex.getLeaderboard(limit: limit);
    if (_shouldUseSupabaseUserScopedData) {
      final client = _supabaseClientOrNull();
      if (client != null) {
        try {
          final fromSupabase = await _getLeaderboardFromSupabase(
            client,
            limit: limit,
          );
          if (fromSupabase != null) return fromSupabase;
        } catch (_) {}
      }
    }

    final res = await _dio.get<List<dynamic>>(
      "/api/leaderboard",
      queryParameters: {"limit": limit},
    );
    final arr = _expectJsonList(res.data);
    return arr
        .map((e) => LeaderboardEntry.fromJson(e as Map<String, dynamic>))
        .toList(growable: false);
  }

  Future<UserRank> getUserRank(String userId) async {
    final convex = _convex;
    if (convex != null) return convex.getUserRank();
    if (_shouldUseSupabaseUserScopedData) {
      final client = _supabaseClientOrNull();
      if (client != null) {
        try {
          final fromSupabase = await _getUserRankFromSupabase(client, userId);
          if (fromSupabase != null) return fromSupabase;
        } catch (_) {}
      }
    }

    final res = await _dio.get<Map<String, dynamic>>(
      "/api/leaderboard/user/$userId",
    );
    return UserRank.fromJson(_expectJsonMap(res.data));
  }

  Future<Map<String, BadgeDef>> getAllBadges() async {
    final convex = _convex;
    if (convex != null) return convex.getAllBadges();
    final res = await _dio.get<Map<String, dynamic>>("/api/badges");
    final map = _expectJsonMap(res.data);
    return map.map(
      (key, value) =>
          MapEntry(key, BadgeDef.fromJson(value as Map<String, dynamic>)),
    );
  }

  Future<Map<String, dynamic>> checkLeaderboardNotifications({
    required String userId,
    required String userSecret,
  }) async {
    final convex = _convex;
    if (convex != null) return convex.checkLeaderboardNotifications();
    if (_shouldUseSupabaseUserScopedData &&
        AppConfig.supabaseLeaderboardNotificationsRpc.trim().isNotEmpty) {
      final client = _supabaseClientOrNull();
      if (client != null) {
        try {
          final raw = await client.rpc(
            AppConfig.supabaseLeaderboardNotificationsRpc,
          );
          if (raw is Map<String, dynamic>) return raw;
          if (raw is List &&
              raw.isNotEmpty &&
              raw.first is Map<String, dynamic>) {
            return raw.first as Map<String, dynamic>;
          }
          return {"ok": true, "source": "supabase_rpc"};
        } catch (_) {}
      }
    }

    final res = await _dio.post<Map<String, dynamic>>(
      "/api/notifications/leaderboard-check",
      queryParameters: {"user_id": userId},
      options: Options(
        headers: userSecret.isEmpty ? const {} : {"x-user-secret": userSecret},
      ),
    );
    return _expectJsonMap(res.data);
  }

  bool get _shouldUseSupabaseUserScopedData =>
      AppConfig.supabaseConfigured && AppConfig.useSupabaseUserScopedData;

  SupabaseClient? _supabaseClientOrNull() {
    try {
      return Supabase.instance.client;
    } catch (_) {
      return null;
    }
  }

  bool _isMissingSupabaseFunction(PostgrestException error, String rpcName) {
    if (error.code == "404") return true;

    final text = _postgrestErrorText(error);
    if (!text.contains(rpcName.toLowerCase())) return false;
    return error.code == "PGRST202" ||
        text.contains("could not find the function") ||
        text.contains("schema cache");
  }

  bool _shouldRetryRpcWithoutParams(PostgrestException error, String rpcName) {
    if (!_isMissingSupabaseFunction(error, rpcName)) return false;

    final text = _postgrestErrorText(error);
    return text.contains("perhaps you meant") ||
        text.contains("without parameters") ||
        text.contains("no parameters") ||
        text.contains("$rpcName()".toLowerCase());
  }

  String _postgrestErrorText(PostgrestException error) {
    return [
      error.message,
      error.details?.toString(),
      error.hint,
    ].whereType<String>().join(" ").toLowerCase();
  }

  void _logSupabaseProfileFallback(String message, Object error) {
    developer.log(message, name: "GoCharbonApi", error: error);
  }

  Future<UserProfile?> _getUserFromSupabaseRpc(
    SupabaseClient client,
    String userId,
  ) async {
    final rpcName = AppConfig.supabaseProfileRpc.trim();
    if (rpcName.isEmpty) return null;

    dynamic raw;
    try {
      raw = await client.rpc(rpcName, params: {"p_user_id": userId});
    } on PostgrestException catch (error) {
      if (!_shouldRetryRpcWithoutParams(error, rpcName)) {
        if (_isMissingSupabaseFunction(error, rpcName)) return null;
        rethrow;
      }

      try {
        raw = await client.rpc(rpcName);
      } on PostgrestException catch (fallbackError) {
        if (_isMissingSupabaseFunction(fallbackError, rpcName)) return null;
        rethrow;
      }
    }
    final map = _normalizeMapFromSupabase(raw);
    if (map == null) return null;
    return UserProfile.fromJson(
      _normalizeUserProfileJson(map, fallbackUserId: userId),
    );
  }

  Future<UserProfile?> _getUserFromSupabaseTable(
    SupabaseClient client,
    String userId,
  ) async {
    final raw = await client
        .from(AppConfig.supabaseProfilesTable)
        .select()
        .eq("user_id", userId)
        .maybeSingle();
    if (raw is! Map<String, dynamic>) return null;
    return UserProfile.fromJson(
      _normalizeUserProfileJson(raw, fallbackUserId: userId),
    );
  }

  Future<QuizResult?> _submitQuizWithSupabaseRpc({
    required SupabaseClient client,
    required String category,
    required String mode,
    required List<QuizAnswer> answers,
  }) async {
    final rpcName = AppConfig.supabaseSubmitQuizRpc.trim();
    if (rpcName.isEmpty) return null;

    final answerPayload = answers
        .map((a) => a.toJson())
        .toList(growable: false);
    dynamic raw;
    try {
      raw = await client.rpc(
        rpcName,
        params: {
          "p_attempt_token": _buildAttemptToken(
            category: category,
            mode: mode,
            answers: answers,
          ),
          "p_category": category,
          "p_mode": mode,
          "p_answers": answerPayload,
        },
      );
    } catch (_) {
      raw = await client.rpc(
        rpcName,
        params: {
          "p_attempt_token": _buildAttemptToken(
            category: category,
            mode: mode,
            answers: answers,
          ),
          "p_category": category,
          "p_mode": mode,
          "p_answers": answerPayload,
        },
      );
    }

    final map = _normalizeMapFromSupabase(raw);
    if (map == null) return null;
    return QuizResult.fromJson(map);
  }

  Future<List<LeaderboardEntry>?> _getLeaderboardFromSupabase(
    SupabaseClient client, {
    required int limit,
  }) async {
    final rpcName = AppConfig.supabaseLeaderboardRpc.trim();
    dynamic raw;

    if (rpcName.isNotEmpty) {
      try {
        raw = await client.rpc(rpcName, params: {"p_limit": limit});
      } catch (_) {
        raw = await client.rpc(rpcName, params: {"limit": limit});
      }
    } else {
      raw = await client
          .from(AppConfig.supabaseLeaderboardView)
          .select()
          .order("rank", ascending: true)
          .limit(limit);
    }

    final list = _normalizeListFromSupabase(raw);
    if (list == null) return null;
    return list
        .map(
          (e) => LeaderboardEntry.fromJson(_normalizeLeaderboardEntryJson(e)),
        )
        .toList(growable: false);
  }

  Future<UserRank?> _getUserRankFromSupabase(
    SupabaseClient client,
    String userId,
  ) async {
    final rpcName = AppConfig.supabaseUserRankRpc.trim();
    if (rpcName.isNotEmpty) {
      dynamic raw;
      try {
        raw = await client.rpc(rpcName, params: {"p_user_id": userId});
      } catch (_) {
        raw = await client.rpc(rpcName);
      }

      final map = _normalizeMapFromSupabase(raw);
      if (map != null) {
        return UserRank.fromJson(_normalizeUserRankJson(map));
      }
    }

    final lb = await _getLeaderboardFromSupabase(client, limit: 200);
    if (lb == null) return null;
    final idx = lb.indexWhere((entry) => entry.userId == userId);
    if (idx < 0) return UserRank(rank: 0, totalScore: 0);
    return UserRank(rank: lb[idx].rank, totalScore: lb[idx].totalScore);
  }

  String _buildAttemptToken({
    required String category,
    required String mode,
    required List<QuizAnswer> answers,
  }) {
    final b = StringBuffer("$category|$mode");
    for (final answer in answers) {
      b
        ..write("|")
        ..write(answer.questionId)
        ..write(":")
        ..write(answer.selectedAnswer)
        ..write(":")
        ..write(answer.timeTakenSeconds.toStringAsFixed(3));
    }
    return _uuidFromStableString(b.toString());
  }

  String _uuidFromStableString(String value) {
    final chunks = <String>[];
    final seeds = <int>[0x811c9dc5, 0x12345678, 0x9e3779b9, 0x7f4a7c15];
    for (final seed in seeds) {
      var hash = seed;
      for (final unit in value.codeUnits) {
        hash ^= unit;
        hash = (hash * 0x01000193) & 0xffffffff;
      }
      chunks.add(hash.toRadixString(16).padLeft(8, "0"));
    }
    final hex = chunks.join();
    return "${hex.substring(0, 8)}-${hex.substring(8, 12)}-4${hex.substring(13, 16)}-a${hex.substring(17, 20)}-${hex.substring(20, 32)}";
  }

  Map<String, dynamic>? _normalizeMapFromSupabase(dynamic raw) {
    if (raw == null) return null;
    if (raw is Map<String, dynamic>) return raw;
    if (raw is List && raw.isNotEmpty && raw.first is Map<String, dynamic>) {
      return raw.first as Map<String, dynamic>;
    }
    return null;
  }

  List<Map<String, dynamic>>? _normalizeListFromSupabase(dynamic raw) {
    if (raw is List) {
      return raw.whereType<Map<String, dynamic>>().toList(growable: false);
    }
    if (raw is Map<String, dynamic>) {
      return [raw];
    }
    return null;
  }

  Map<String, dynamic> _normalizeUserProfileJson(
    Map<String, dynamic> json, {
    required String fallbackUserId,
  }) {
    final stats =
        json["stats"] as Map<String, dynamic>? ?? const <String, dynamic>{};
    final levelName =
        (json["level_name"] as String?) ??
        (json["level_label"] as String?) ??
        (json["rank_name"] as String?) ??
        "Débutant";
    final username =
        (json["username"] as String?) ??
        (json["display_name"] as String?) ??
        (json["full_name"] as String?) ??
        _usernameFromEmail(json["email"] as String?) ??
        "Joueur";

    final badgesRaw = json["badges"];
    final badges = badgesRaw is List
        ? badgesRaw.whereType<String>().toList(growable: false)
        : const <String>[];

    return {
      "user_id":
          (json["user_id"] as String?) ??
          (json["id"] as String?) ??
          fallbackUserId,
      "username": username,
      "avatar_color": (json["avatar_color"] as String?) ?? "#FF6B35",
      "total_score": _toInt(
        json["total_score"] ?? json["score"] ?? json["points"],
      ),
      "xp": _toInt(json["xp"] ?? json["total_xp"]),
      "level": _toInt(json["level"], fallback: 1),
      "level_name": levelName,
      "badges": badges,
      "stats": {
        "total_quizzes": _toInt(
          stats["total_quizzes"] ?? json["total_quizzes"],
        ),
        "correct_answers": _toInt(
          stats["correct_answers"] ?? json["correct_answers"],
        ),
        "total_answers": _toInt(
          stats["total_answers"] ?? json["total_answers"],
        ),
        "best_streak": _toInt(stats["best_streak"] ?? json["best_streak"]),
        "categories": stats["categories"] is Map<String, dynamic>
            ? stats["categories"] as Map<String, dynamic>
            : const <String, dynamic>{},
      },
    };
  }

  Map<String, dynamic> _normalizeLeaderboardEntryJson(
    Map<String, dynamic> json,
  ) {
    return {
      "rank": _toInt(json["rank"], fallback: 0),
      "user_id": (json["user_id"] as String?) ?? (json["id"] as String?) ?? "",
      "username":
          (json["username"] as String?) ??
          (json["display_name"] as String?) ??
          _usernameFromEmail(json["email"] as String?) ??
          "Joueur",
      "avatar_color": (json["avatar_color"] as String?) ?? "#FF6B35",
      "total_score": _toInt(
        json["total_score"] ?? json["score"] ?? json["points"],
      ),
      "level": _toInt(json["level"], fallback: 1),
      "level_name": (json["level_name"] as String?) ?? "Débutant",
    };
  }

  Map<String, dynamic> _normalizeUserRankJson(Map<String, dynamic> json) {
    return {
      "rank": _toInt(json["rank"], fallback: 0),
      "total_score": _toInt(
        json["total_score"] ?? json["score"] ?? json["points"],
      ),
    };
  }

  int _toInt(Object? value, {int fallback = 0}) {
    if (value is num) return value.toInt();
    if (value is String) return int.tryParse(value) ?? fallback;
    return fallback;
  }

  String? _usernameFromEmail(String? email) {
    if (email == null || email.isEmpty || !email.contains("@")) return null;
    final username = email.split("@").first.trim();
    if (username.isEmpty) return null;
    return username;
  }

  Map<String, dynamic> _expectJsonMap(Map<String, dynamic>? data) {
    if (data == null) throw Exception("Réponse invalide du serveur.");
    return data;
  }

  List<dynamic> _expectJsonList(List<dynamic>? data) {
    if (data == null) throw Exception("Réponse invalide du serveur.");
    return data;
  }
}
