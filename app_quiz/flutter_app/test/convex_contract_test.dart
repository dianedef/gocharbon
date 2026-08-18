import "package:flutter_test/flutter_test.dart";
import "package:gocharbon_quiz/src/models/api_question.dart";
import "package:gocharbon_quiz/src/models/quiz_challenge.dart";
import "package:gocharbon_quiz/src/models/quiz_result.dart";

void main() {
  test("Convex question payload does not expose the answer key", () {
    final question = ApiQuestion.fromJson({
      "id": "question-1",
      "text": "Question publique",
      "type": "mcq",
      "category": "finance",
      "difficulty": "easy",
      "options": ["A", "B"],
    });

    expect(question.correctAnswer, isNull);
    expect(question.explanation, isNull);
    expect(question.toJson(), isNot(contains("correct_answer")));
    expect(question.toJson(), isNot(contains("explanation")));
  });

  test("challenge payload keeps the shared question set and public scores", () {
    final challenge = QuizChallenge.fromJson({
      "code": "ABCD2345",
      "category": "marketing",
      "mode": "timed",
      "expires_at": 1_800_000_000_000,
      "questions": [
        {
          "id": "question-1",
          "text": "Question publique",
          "type": "mcq",
          "category": "marketing",
          "difficulty": "easy",
          "options": ["A", "B"],
        },
      ],
      "entries": [
        {
          "username": "Mineur 1",
          "total_score": 720,
          "correct_count": 6,
          "total_questions": 7,
        },
      ],
    });

    expect(challenge.code, "ABCD2345");
    expect(challenge.questions.single.correctAnswer, isNull);
    expect(challenge.entries.single.totalScore, 720);
  });

  test(
    "quiz result retains the server attempt token for challenge creation",
    () {
      final result = QuizResult.fromJson({
        "attempt_token": "attempt-token",
        "total_score": 700,
        "base_score": 700,
        "time_bonus": 0,
        "streak_bonus": 0,
        "xp_gained": 700,
        "correct_count": 7,
        "total_questions": 7,
        "best_streak": 7,
        "streak_multiplier": 1.5,
        "new_badges": [],
        "level_up": false,
        "new_level": 1,
        "new_level_name": "Débutant",
        "course_recommendations": [],
      });

      expect(result.attemptToken, "attempt-token");
      expect(result.toJson()["attempt_token"], "attempt-token");
    },
  );
}
