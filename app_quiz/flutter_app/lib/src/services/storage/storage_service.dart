import "dart:convert";

import "package:flutter/foundation.dart";
import "package:flutter_secure_storage/flutter_secure_storage.dart";
import "package:shared_preferences/shared_preferences.dart";

import "../../models/quiz_result.dart";

class StorageService {
  static const _userIdKey = "gocharbon_user_id";
  static const _userSecretKey = "gocharbon_user_secret";
  static const _quizModeKey = "gocharbon_quiz_mode";
  static const _lastResultKey = "gocharbon_last_result";

  const StorageService();

  FlutterSecureStorage get _secure => const FlutterSecureStorage();

  Future<SharedPreferences> _prefs() => SharedPreferences.getInstance();

  Future<String?> getUserId() async {
    final prefs = await _prefs();
    return prefs.getString(_userIdKey);
  }

  Future<void> setUserId(String userId) async {
    final prefs = await _prefs();
    await prefs.setString(_userIdKey, userId);
  }

  Future<String?> getUserSecret() async {
    if (kIsWeb) {
      final prefs = await _prefs();
      return prefs.getString(_userSecretKey);
    }
    return _secure.read(key: _userSecretKey);
  }

  Future<void> setUserSecret(String secret) async {
    if (kIsWeb) {
      final prefs = await _prefs();
      await prefs.setString(_userSecretKey, secret);
      return;
    }
    await _secure.write(key: _userSecretKey, value: secret);
  }

  Future<void> clearUser() async {
    final prefs = await _prefs();
    await prefs.remove(_userIdKey);
    await prefs.remove(_userSecretKey);
    if (!kIsWeb) {
      await _secure.delete(key: _userSecretKey);
    }
  }

  Future<String> getQuizMode() async {
    final prefs = await _prefs();
    return prefs.getString(_quizModeKey) ?? "timed";
  }

  Future<void> setQuizMode(String mode) async {
    final prefs = await _prefs();
    await prefs.setString(_quizModeKey, mode);
  }

  Future<void> setLastResult(QuizResult result) async {
    final prefs = await _prefs();
    await prefs.setString(_lastResultKey, jsonEncode(result.toJson()));
  }

  Future<QuizResult?> getLastResult() async {
    final prefs = await _prefs();
    final raw = prefs.getString(_lastResultKey);
    if (raw == null || raw.isEmpty) return null;
    final json = jsonDecode(raw) as Map<String, dynamic>;
    return QuizResult.fromJson(json);
  }
}

