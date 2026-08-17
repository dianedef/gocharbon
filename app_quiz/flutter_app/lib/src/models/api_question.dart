class ApiQuestion {
  ApiQuestion({
    required this.id,
    required this.text,
    required this.type,
    required this.category,
    required this.difficulty,
    required this.options,
    this.correctAnswer,
    this.explanation,
  });

  final String id;
  final String text;
  final String type; // mcq | truefalse
  final String category; // finance | marketing | management | ecommerce
  final String difficulty; // easy | medium | hard
  final List<String> options;
  final int? correctAnswer;
  final String? explanation;

  bool get isTrueFalse => type == "truefalse";

  factory ApiQuestion.fromJson(Map<String, dynamic> json) {
    return ApiQuestion(
      id: json["id"] as String,
      text: json["text"] as String,
      type: json["type"] as String,
      category: json["category"] as String,
      difficulty: json["difficulty"] as String,
      options: (json["options"] as List<dynamic>).cast<String>(),
      correctAnswer: (json["correct_answer"] as num?)?.toInt(),
      explanation: json["explanation"] as String?,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      "id": id,
      "text": text,
      "type": type,
      "category": category,
      "difficulty": difficulty,
      "options": options,
      if (correctAnswer != null) "correct_answer": correctAnswer,
      if (explanation != null) "explanation": explanation,
    };
  }
}
