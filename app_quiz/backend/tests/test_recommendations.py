from pathlib import Path
import sys


sys.path.append(str(Path(__file__).resolve().parents[1]))

from recommendations import build_course_recommendations  # noqa: E402


COURSES = [
    {"id": "1", "title": "Finance Bases", "category": "finance", "description": "Bases", "url": "https://example.com/finance-beginner", "level": "beginner"},
    {"id": "2", "title": "Finance Avancée", "category": "finance", "description": "Avancé", "url": "https://example.com/finance-advanced", "level": "advanced"},
    {"id": "3", "title": "Marketing Bases", "category": "marketing", "description": "Bases", "url": "https://example.com/marketing-beginner", "level": "beginner"},
    {"id": "4", "title": "Marketing Avancé", "category": "marketing", "description": "Avancé", "url": "https://example.com/marketing-advanced", "level": "advanced"},
]


def test_explicit_category_high_accuracy_recommends_advanced_course():
    questions_map = {
        "q1": {"id": "q1", "category": "finance", "difficulty": "easy", "correct_answer": 0},
        "q2": {"id": "q2", "category": "finance", "difficulty": "medium", "correct_answer": 1},
        "q3": {"id": "q3", "category": "finance", "difficulty": "hard", "correct_answer": 2},
        "q4": {"id": "q4", "category": "finance", "difficulty": "medium", "correct_answer": 0},
        "q5": {"id": "q5", "category": "finance", "difficulty": "easy", "correct_answer": 1},
    }
    answers = [
        {"question_id": "q1", "selected_answer": 0},
        {"question_id": "q2", "selected_answer": 1},
        {"question_id": "q3", "selected_answer": 2},
        {"question_id": "q4", "selected_answer": 0},
        {"question_id": "q5", "selected_answer": 1},
    ]

    recs, context = build_course_recommendations("finance", answers, questions_map, COURSES, accuracy=1.0)

    assert context["target_category"] == "finance"
    assert context["target_level"] == "advanced"
    assert recs[0]["id"] == "2"
    assert recs[0]["match_priority"] == "primary"


def test_explicit_category_mid_accuracy_recommends_beginner_course():
    questions_map = {
        "q1": {"id": "q1", "category": "marketing", "difficulty": "easy", "correct_answer": 0},
        "q2": {"id": "q2", "category": "marketing", "difficulty": "medium", "correct_answer": 1},
        "q3": {"id": "q3", "category": "marketing", "difficulty": "hard", "correct_answer": 2},
        "q4": {"id": "q4", "category": "marketing", "difficulty": "easy", "correct_answer": 0},
    }
    answers = [
        {"question_id": "q1", "selected_answer": 0},
        {"question_id": "q2", "selected_answer": 0},
        {"question_id": "q3", "selected_answer": 2},
        {"question_id": "q4", "selected_answer": 1},
    ]

    recs, context = build_course_recommendations("marketing", answers, questions_map, COURSES, accuracy=0.5)

    assert context["target_category"] == "marketing"
    assert context["target_level"] == "beginner"
    assert recs[0]["id"] == "3"
    assert "structurée" in context["reason"]


def test_random_quiz_targets_weakest_category():
    questions_map = {
        "q1": {"id": "q1", "category": "finance", "difficulty": "easy", "correct_answer": 0},
        "q2": {"id": "q2", "category": "finance", "difficulty": "medium", "correct_answer": 1},
        "q3": {"id": "q3", "category": "marketing", "difficulty": "easy", "correct_answer": 0},
        "q4": {"id": "q4", "category": "marketing", "difficulty": "medium", "correct_answer": 1},
    }
    answers = [
        {"question_id": "q1", "selected_answer": 1},
        {"question_id": "q2", "selected_answer": 0},
        {"question_id": "q3", "selected_answer": 0},
        {"question_id": "q4", "selected_answer": 1},
    ]

    recs, context = build_course_recommendations("random", answers, questions_map, COURSES, accuracy=0.5)

    assert context["target_category"] == "finance"
    assert context["category_source"] == "weakest_category"
    assert context["target_level"] == "beginner"
    assert recs[0]["match_category"] == "finance"
