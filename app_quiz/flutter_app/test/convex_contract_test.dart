import "package:flutter_test/flutter_test.dart";
import "package:gocharbon_quiz/src/models/api_question.dart";

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
}
