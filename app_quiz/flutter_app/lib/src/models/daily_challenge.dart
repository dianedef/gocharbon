import "api_question.dart";

class DailyChallenge {
  DailyChallenge({required this.date, required this.questions});

  final String date; // YYYY-MM-DD
  final List<ApiQuestion> questions;

  factory DailyChallenge.fromJson(Map<String, dynamic> json) {
    return DailyChallenge(
      date: json["date"] as String,
      questions: (json["questions"] as List<dynamic>)
          .map((q) => ApiQuestion.fromJson(q as Map<String, dynamic>))
          .toList(growable: false),
    );
  }
}

