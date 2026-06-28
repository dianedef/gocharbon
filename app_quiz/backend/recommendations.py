from typing import Any, Dict, Iterable, List, Tuple


CATEGORY_ORDER = ["finance", "marketing", "management", "ecommerce"]
CATEGORY_META = {
    "finance": {
        "label": "Finance",
        "beginner_focus": "Repose des bases claires sur les chiffres qui pilotent un business.",
        "advanced_focus": "Passe des notions de base à des décisions financières plus solides.",
    },
    "marketing": {
        "label": "Marketing",
        "beginner_focus": "Fixe les fondamentaux d'acquisition et de conversion avant d'aller plus loin.",
        "advanced_focus": "Passe de la compréhension des leviers à une stratégie d'acquisition plus structurée.",
    },
    "management": {
        "label": "Management",
        "beginner_focus": "Clarifie les repères utiles pour organiser, prioriser et mieux décider.",
        "advanced_focus": "Approfondis les cadres qui aident à piloter une équipe ou un projet.",
    },
    "ecommerce": {
        "label": "E-commerce",
        "beginner_focus": "Repars sur les bases qui font vendre sans complexité inutile.",
        "advanced_focus": "Passe des fondamentaux e-commerce à une logique d'optimisation plus fine.",
    },
}


def _answer_field(answer: Any, field: str, default: Any = None) -> Any:
    if isinstance(answer, dict):
        return answer.get(field, default)
    return getattr(answer, field, default)


def summarize_category_performance(answers: Iterable[Any], questions_map: Dict[str, Dict[str, Any]]) -> Dict[str, Dict[str, Any]]:
    performance: Dict[str, Dict[str, Any]] = {}
    for answer in answers:
        question = questions_map.get(_answer_field(answer, "question_id"))
        if not question:
            continue

        category = question.get("category") or "finance"
        stats = performance.setdefault(
            category,
            {
                "asked": 0,
                "correct": 0,
                "wrong": 0,
                "easy_wrong": 0,
                "medium_wrong": 0,
                "hard_wrong": 0,
                "accuracy": 0.0,
            },
        )
        stats["asked"] += 1

        if _answer_field(answer, "selected_answer") == question.get("correct_answer"):
            stats["correct"] += 1
        else:
            stats["wrong"] += 1
            difficulty = question.get("difficulty", "medium")
            key = f"{difficulty}_wrong"
            if key not in stats:
                key = "medium_wrong"
            stats[key] += 1

    for stats in performance.values():
        stats["accuracy"] = stats["correct"] / max(stats["asked"], 1)

    return performance


def choose_target_category(submission_category: str, performance: Dict[str, Dict[str, Any]]) -> Tuple[str, str]:
    if submission_category not in ("random", "daily"):
        return submission_category, "submitted_category"

    if not performance:
        return "finance", "fallback"

    ranked = list(performance.items())
    category_rank = {category: index for index, category in enumerate(CATEGORY_ORDER)}

    if any(stats["wrong"] > 0 for _, stats in ranked):
        ranked.sort(
            key=lambda item: (
                -item[1]["wrong"],
                item[1]["accuracy"],
                -item[1]["asked"],
                category_rank.get(item[0], len(CATEGORY_ORDER)),
            )
        )
        return ranked[0][0], "weakest_category"

    ranked.sort(
        key=lambda item: (
            -item[1]["asked"],
            -item[1]["correct"],
            category_rank.get(item[0], len(CATEGORY_ORDER)),
        )
    )
    return ranked[0][0], "dominant_category"


def choose_target_level(accuracy: float, category_stats: Dict[str, Any]) -> str:
    if accuracy >= 0.8 and category_stats.get("easy_wrong", 0) == 0:
        return "advanced"
    return "beginner"


def build_recommendation_context(
    submission_category: str,
    answers: Iterable[Any],
    questions_map: Dict[str, Dict[str, Any]],
    accuracy: float,
) -> Dict[str, Any]:
    performance = summarize_category_performance(answers, questions_map)
    target_category, category_source = choose_target_category(submission_category, performance)
    category_stats = performance.get(
        target_category,
        {"asked": 0, "correct": 0, "wrong": 0, "easy_wrong": 0, "medium_wrong": 0, "hard_wrong": 0, "accuracy": accuracy},
    )
    target_level = choose_target_level(accuracy, category_stats)
    meta = CATEGORY_META.get(
        target_category,
        {
            "label": target_category.title(),
            "beginner_focus": "Reprends les bases avec une ressource claire et utile.",
            "advanced_focus": "Approfondis avec une ressource plus structurée.",
        },
    )

    if target_level == "advanced":
        eyebrow = "CAP SUR LA SUITE"
        title = f"Tu peux maintenant approfondir en {meta['label']}."
        summary = f"Ton score montre que les fondamentaux tiennent. La meilleure suite est un contenu GoCharbon plus structuré pour passer du quiz à des cas concrets."
        focus = meta["advanced_focus"]
        reason = f"Tu as déjà montré une base solide en {meta['label'].lower()}. Cette recommandation te fait avancer sans repasser par un contenu trop introductif."
        cta_label = f"Approfondir sur GoCharbon"
    elif accuracy >= 0.5:
        eyebrow = "BASES À CONSOLIDER"
        title = f"Tu as les bases en {meta['label']}, pas encore les automatismes."
        summary = f"Le quiz montre un socle utile, avec encore quelques repères à fixer. La bonne suite est un contenu plus guidé pour solidifier l'essentiel."
        focus = meta["beginner_focus"]
        reason = f"Cette recommandation reprend les points les plus utiles de {meta['label'].lower()} de façon plus structurée, sans te noyer dans l'avancé trop tôt."
        cta_label = f"Consolider sur GoCharbon"
    else:
        eyebrow = "REPARTIR SUR DU SOLIDE"
        title = f"Les fondamentaux restent à poser en {meta['label']}."
        summary = f"Ton score suggère qu'il faut d'abord remettre les bases dans l'ordre. La bonne suite n'est pas plus de pression, mais un contenu GoCharbon simple, clair et progressif."
        focus = meta["beginner_focus"]
        reason = f"Cette recommandation t'aide à reprendre {meta['label'].lower()} avec un cadre plus accessible que le quiz seul."
        cta_label = "Reprendre les bases sur GoCharbon"

    if category_source == "weakest_category":
        reason = f"On t'oriente vers {meta['label']} parce que c'est là que tu as perdu le plus de points aujourd'hui. {reason}"
    elif category_source == "dominant_category":
        reason = f"Ce thème est le plus présent dans ta session d'aujourd'hui. {reason}"

    return {
        "target_category": target_category,
        "target_category_label": meta["label"],
        "target_level": target_level,
        "category_source": category_source,
        "accuracy": round(accuracy, 4),
        "category_accuracy": round(category_stats.get("accuracy", accuracy), 4),
        "category_stats": category_stats,
        "eyebrow": eyebrow,
        "title": title,
        "summary": summary,
        "focus": focus,
        "reason": reason,
        "cta_label": cta_label,
    }


def select_course_recommendations(courses: List[Dict[str, Any]], context: Dict[str, Any]) -> List[Dict[str, Any]]:
    target_category = context["target_category"]
    target_level = context["target_level"]
    category_courses = [course for course in courses if course.get("category") == target_category]

    primary = next((course for course in category_courses if course.get("level") == target_level), None)
    secondary = next((course for course in category_courses if course.get("level") != target_level), None)

    selected: List[Dict[str, Any]] = []
    for index, course in enumerate([primary, secondary]):
        if not course:
            continue
        enriched = dict(course)
        enriched["match_priority"] = "primary" if index == 0 else "secondary"
        enriched["match_level"] = target_level if index == 0 else course.get("level")
        enriched["match_category"] = target_category
        selected.append(enriched)

    if selected:
        return selected

    return [dict(course) for course in courses[:2]]


def build_course_recommendations(
    submission_category: str,
    answers: Iterable[Any],
    questions_map: Dict[str, Dict[str, Any]],
    courses: List[Dict[str, Any]],
    accuracy: float,
) -> Tuple[List[Dict[str, Any]], Dict[str, Any]]:
    context = build_recommendation_context(submission_category, answers, questions_map, accuracy)
    recommendations = select_course_recommendations(courses, context)
    return recommendations, context
