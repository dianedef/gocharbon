class UserCategoryStats {
  UserCategoryStats({required this.played, required this.correct});

  final int played;
  final int correct;

  factory UserCategoryStats.fromJson(Map<String, dynamic> json) {
    return UserCategoryStats(
      played: (json["played"] as num?)?.toInt() ?? 0,
      correct: (json["correct"] as num?)?.toInt() ?? 0,
    );
  }
}

class UserStats {
  UserStats({
    required this.totalQuizzes,
    required this.correctAnswers,
    required this.totalAnswers,
    required this.bestStreak,
    required this.categories,
  });

  final int totalQuizzes;
  final int correctAnswers;
  final int totalAnswers;
  final int bestStreak;
  final Map<String, UserCategoryStats> categories;

  factory UserStats.fromJson(Map<String, dynamic> json) {
    final cats = (json["categories"] as Map<String, dynamic>? ?? {});
    return UserStats(
      totalQuizzes: (json["total_quizzes"] as num?)?.toInt() ?? 0,
      correctAnswers: (json["correct_answers"] as num?)?.toInt() ?? 0,
      totalAnswers: (json["total_answers"] as num?)?.toInt() ?? 0,
      bestStreak: (json["best_streak"] as num?)?.toInt() ?? 0,
      categories: cats.map((key, value) => MapEntry(
            key,
            UserCategoryStats.fromJson(value as Map<String, dynamic>),
          )),
    );
  }
}

class UserProfile {
  UserProfile({
    required this.userId,
    required this.username,
    required this.avatarColor,
    required this.totalScore,
    required this.xp,
    required this.level,
    required this.levelName,
    required this.badges,
    required this.stats,
  });

  final String userId;
  final String username;
  final String avatarColor;
  final int totalScore;
  final int xp;
  final int level;
  final String levelName;
  final List<String> badges;
  final UserStats stats;

  factory UserProfile.fromJson(Map<String, dynamic> json) {
    return UserProfile(
      userId: json["user_id"] as String,
      username: json["username"] as String,
      avatarColor: json["avatar_color"] as String,
      totalScore: (json["total_score"] as num?)?.toInt() ?? 0,
      xp: (json["xp"] as num?)?.toInt() ?? 0,
      level: (json["level"] as num?)?.toInt() ?? 1,
      levelName: json["level_name"] as String? ?? "Débutant",
      badges: (json["badges"] as List<dynamic>? ?? []).cast<String>(),
      stats: UserStats.fromJson(json["stats"] as Map<String, dynamic>? ?? {}),
    );
  }
}

class UserCreationResponse {
  UserCreationResponse({required this.profile, required this.userSecret});

  final UserProfile profile;
  final String userSecret;

  factory UserCreationResponse.fromJson(Map<String, dynamic> json) {
    return UserCreationResponse(
      profile: UserProfile.fromJson(json),
      userSecret: json["user_secret"] as String,
    );
  }
}

