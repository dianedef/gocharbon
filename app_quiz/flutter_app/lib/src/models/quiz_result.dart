import "badge.dart";
import "course.dart";

class QuizResult {
  QuizResult({
    required this.totalScore,
    required this.baseScore,
    required this.timeBonus,
    required this.streakBonus,
    required this.xpGained,
    required this.correctCount,
    required this.totalQuestions,
    required this.bestStreak,
    required this.streakMultiplier,
    required this.newBadges,
    required this.levelUp,
    required this.newLevel,
    required this.newLevelName,
    required this.courseRecommendations,
    this.attemptToken,
    this.challengeCode,
    this.recommendationContext,
    this.categoryDisplay,
  });

  final int totalScore;
  final int baseScore;
  final int timeBonus;
  final int streakBonus;
  final int xpGained;
  final int correctCount;
  final int totalQuestions;
  final int bestStreak;
  final double streakMultiplier;
  final List<EarnedBadge> newBadges;
  final bool levelUp;
  final int newLevel;
  final String newLevelName;
  final List<Course> courseRecommendations;
  final String? attemptToken;
  final String? challengeCode;
  final RecommendationContext? recommendationContext;
  final String? categoryDisplay;

  factory QuizResult.fromJson(Map<String, dynamic> json) {
    return QuizResult(
      totalScore: (json["total_score"] as num).toInt(),
      baseScore: (json["base_score"] as num).toInt(),
      timeBonus: (json["time_bonus"] as num).toInt(),
      streakBonus: (json["streak_bonus"] as num).toInt(),
      xpGained: (json["xp_gained"] as num).toInt(),
      correctCount: (json["correct_count"] as num).toInt(),
      totalQuestions: (json["total_questions"] as num).toInt(),
      bestStreak: (json["best_streak"] as num).toInt(),
      streakMultiplier: (json["streak_multiplier"] as num).toDouble(),
      newBadges: (json["new_badges"] as List<dynamic>? ?? [])
          .map((b) => EarnedBadge.fromJson(b as Map<String, dynamic>))
          .toList(growable: false),
      levelUp: json["level_up"] as bool? ?? false,
      newLevel: (json["new_level"] as num?)?.toInt() ?? 1,
      newLevelName: json["new_level_name"] as String? ?? "Débutant",
      courseRecommendations:
          (json["course_recommendations"] as List<dynamic>? ?? [])
              .map((c) => Course.fromJson(c as Map<String, dynamic>))
              .toList(growable: false),
      attemptToken: json["attempt_token"] as String?,
      challengeCode: json["challenge_code"] as String?,
      recommendationContext:
          json["recommendation_context"] is Map<String, dynamic>
          ? RecommendationContext.fromJson(
              json["recommendation_context"] as Map<String, dynamic>,
            )
          : null,
      categoryDisplay: json["category"] as String?,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      "total_score": totalScore,
      "base_score": baseScore,
      "time_bonus": timeBonus,
      "streak_bonus": streakBonus,
      "xp_gained": xpGained,
      "correct_count": correctCount,
      "total_questions": totalQuestions,
      "best_streak": bestStreak,
      "streak_multiplier": streakMultiplier,
      "new_badges": newBadges
          .map(
            (b) => {
              "id": b.id,
              "name": b.name,
              "description": b.description,
              "icon": b.icon,
            },
          )
          .toList(growable: false),
      "level_up": levelUp,
      "new_level": newLevel,
      "new_level_name": newLevelName,
      "course_recommendations": courseRecommendations
          .map((c) => c.toJson())
          .toList(growable: false),
      if (attemptToken != null) "attempt_token": attemptToken,
      if (challengeCode != null) "challenge_code": challengeCode,
      if (recommendationContext != null)
        "recommendation_context": recommendationContext!.toJson(),
      if (categoryDisplay != null) "category": categoryDisplay,
    };
  }
}

class RecommendationContext {
  const RecommendationContext({
    required this.targetCategory,
    required this.targetCategoryLabel,
    required this.targetLevel,
    required this.eyebrow,
    required this.title,
    required this.summary,
    required this.focus,
    required this.reason,
    required this.ctaLabel,
  });

  final String targetCategory;
  final String targetCategoryLabel;
  final String targetLevel;
  final String eyebrow;
  final String title;
  final String summary;
  final String focus;
  final String reason;
  final String ctaLabel;

  factory RecommendationContext.fromJson(Map<String, dynamic> json) {
    return RecommendationContext(
      targetCategory: json["target_category"] as String? ?? "random",
      targetCategoryLabel:
          json["target_category_label"] as String? ?? "Business",
      targetLevel: json["target_level"] as String? ?? "beginner",
      eyebrow: json["eyebrow"] as String? ?? "TON DIAGNOSTIC",
      title: json["title"] as String? ?? "Ton quiz donne une piste claire.",
      summary:
          json["summary"] as String? ??
          "Continue avec une ressource GoCharbon adaptée à ton niveau.",
      focus:
          json["focus"] as String? ??
          "Passe du quiz à une prochaine action concrète.",
      reason:
          json["reason"] as String? ??
          "Cette ressource est sélectionnée d'après tes réponses.",
      ctaLabel: json["cta_label"] as String? ?? "Continuer sur GoCharbon",
    );
  }

  Map<String, dynamic> toJson() {
    return {
      "target_category": targetCategory,
      "target_category_label": targetCategoryLabel,
      "target_level": targetLevel,
      "eyebrow": eyebrow,
      "title": title,
      "summary": summary,
      "focus": focus,
      "reason": reason,
      "cta_label": ctaLabel,
    };
  }
}
