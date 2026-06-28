class QuizAnswer {
  QuizAnswer({
    required this.questionId,
    required this.selectedAnswer,
    required this.timeTakenSeconds,
  });

  final String questionId;
  final int selectedAnswer;
  final double timeTakenSeconds;

  Map<String, dynamic> toJson() {
    return {
      "question_id": questionId,
      "selected_answer": selectedAnswer,
      "time_taken": timeTakenSeconds,
    };
  }
}

