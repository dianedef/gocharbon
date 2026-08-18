import "api_question.dart";

class QuizChallenge {
  const QuizChallenge({
    required this.code,
    required this.category,
    required this.mode,
    required this.expiresAt,
    required this.questions,
    required this.entries,
  });

  final String code;
  final String category;
  final String mode;
  final DateTime expiresAt;
  final List<ApiQuestion> questions;
  final List<ChallengeEntry> entries;

  factory QuizChallenge.fromJson(Map<String, dynamic> json) => QuizChallenge(
    code: json["code"] as String? ?? "",
    category: json["category"] as String? ?? "random",
    mode: json["mode"] as String? ?? "timed",
    expiresAt: DateTime.fromMillisecondsSinceEpoch(
      (json["expires_at"] as num?)?.toInt() ?? 0,
    ),
    questions: (json["questions"] as List<dynamic>? ?? const [])
        .map((item) => ApiQuestion.fromJson(item as Map<String, dynamic>))
        .toList(growable: false),
    entries: (json["entries"] as List<dynamic>? ?? const [])
        .map((item) => ChallengeEntry.fromJson(item as Map<String, dynamic>))
        .toList(growable: false),
  );
}

class ChallengeEntry {
  const ChallengeEntry({
    required this.username,
    required this.totalScore,
    required this.correctCount,
    required this.totalQuestions,
  });

  final String username;
  final int totalScore;
  final int correctCount;
  final int totalQuestions;

  factory ChallengeEntry.fromJson(Map<String, dynamic> json) => ChallengeEntry(
    username: json["username"] as String? ?? "Joueur",
    totalScore: (json["total_score"] as num?)?.toInt() ?? 0,
    correctCount: (json["correct_count"] as num?)?.toInt() ?? 0,
    totalQuestions: (json["total_questions"] as num?)?.toInt() ?? 0,
  );
}

class CreatedChallenge {
  const CreatedChallenge({required this.code, required this.expiresAt});

  final String code;
  final DateTime expiresAt;

  factory CreatedChallenge.fromJson(Map<String, dynamic> json) =>
      CreatedChallenge(
        code: json["code"] as String? ?? "",
        expiresAt: DateTime.fromMillisecondsSinceEpoch(
          (json["expires_at"] as num?)?.toInt() ?? 0,
        ),
      );
}
