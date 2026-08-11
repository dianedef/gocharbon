import "package:dio/dio.dart";

import "../../models/api_question.dart";
import "../../models/badge.dart";
import "../../models/daily_challenge.dart";
import "../../models/leaderboard_entry.dart";
import "../../models/quiz_answer.dart";
import "../../models/quiz_result.dart";
import "../../models/user_profile.dart";

/// HTTP contract adapter for the Convex migration.
///
/// The corresponding Convex HTTP routes must own identity from the verified
/// Firebase bearer token. No Firebase UID or legacy `user_secret` is sent in a
/// request body, even though the public Flutter API keeps those parameters for
/// rollback compatibility.
class ConvexHttpClient {
  ConvexHttpClient({
    required String baseUrl,
    required Future<String?> Function() accessToken,
  }) : _accessToken = accessToken,
       _dio = Dio(
         BaseOptions(
           baseUrl: baseUrl,
           connectTimeout: const Duration(seconds: 10),
           receiveTimeout: const Duration(seconds: 20),
           sendTimeout: const Duration(seconds: 20),
           headers: const {"content-type": "application/json"},
         ),
       );

  final Dio _dio;
  final Future<String?> Function() _accessToken;

  Future<UserProfile> getProfile() async {
    final response = await _authorizedGet<Map<String, dynamic>>("/profile");
    return UserProfile.fromJson(_expectMap(response.data));
  }

  Future<List<ApiQuestion>> getQuestions({
    required String category,
    required int count,
  }) async {
    final response = await _dio.get<List<dynamic>>(
      "/questions",
      queryParameters: {"category": category, "count": count},
    );
    return _expectList(response.data)
        .map((value) => ApiQuestion.fromJson(value as Map<String, dynamic>))
        .toList(growable: false);
  }

  Future<DailyChallenge> getDailyChallenge() async {
    final response = await _dio.get<Map<String, dynamic>>("/daily-challenge");
    return DailyChallenge.fromJson(_expectMap(response.data));
  }

  Future<QuizResult> submitQuiz({
    required String category,
    required String mode,
    required List<QuizAnswer> answers,
  }) async {
    final response = await _authorizedPost<Map<String, dynamic>>(
      "/quiz/submit",
      data: {
        "category": category,
        "mode": mode,
        "answers": answers.map((answer) => answer.toJson()).toList(growable: false),
      },
    );
    return QuizResult.fromJson(_expectMap(response.data));
  }

  Future<List<LeaderboardEntry>> getLeaderboard({required int limit}) async {
    final response = await _dio.get<List<dynamic>>(
      "/leaderboard",
      queryParameters: {"limit": limit},
    );
    return _expectList(response.data)
        .map((value) => LeaderboardEntry.fromJson(value as Map<String, dynamic>))
        .toList(growable: false);
  }

  Future<UserRank> getUserRank() async {
    final response = await _authorizedGet<Map<String, dynamic>>("/leaderboard/me");
    return UserRank.fromJson(_expectMap(response.data));
  }

  Future<Map<String, BadgeDef>> getAllBadges() async {
    final response = await _dio.get<Map<String, dynamic>>("/badges");
    return _expectMap(response.data).map(
      (key, value) => MapEntry(key, BadgeDef.fromJson(value as Map<String, dynamic>)),
    );
  }

  Future<Map<String, dynamic>> checkLeaderboardNotifications() async {
    final response = await _authorizedPost<Map<String, dynamic>>(
      "/notifications/leaderboard-check",
    );
    return _expectMap(response.data);
  }

  Future<Response<T>> _authorizedGet<T>(String path) async {
    return _dio.get<T>(path, options: await _authorizedOptions());
  }

  Future<Response<T>> _authorizedPost<T>(String path, {Object? data}) async {
    return _dio.post<T>(path, data: data, options: await _authorizedOptions());
  }

  Future<Options> _authorizedOptions() async {
    final token = await _accessToken();
    if (token == null || token.trim().isEmpty) {
      throw StateError("Une session Firebase valide est requise.");
    }
    return Options(headers: {"authorization": "Bearer $token"});
  }

  Map<String, dynamic> _expectMap(Map<String, dynamic>? data) {
    if (data == null) throw StateError("Réponse Convex invalide.");
    return data;
  }

  List<dynamic> _expectList(List<dynamic>? data) {
    if (data == null) throw StateError("Réponse Convex invalide.");
    return data;
  }
}
