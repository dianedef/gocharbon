"""
Backend API Tests for GoCharbon Business Quiz
Tests: Health, Users, Questions, Quiz Submit, Leaderboard, Badges
"""
import pytest
import requests
import os

BASE_URL = os.environ.get("API_BASE_URL", "http://localhost:3001")

class TestHealth:
    """Health check endpoint"""
    
    def test_health_endpoint(self):
        response = requests.get(f"{BASE_URL}/api/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "ok"
        print("✓ Health check passed")


class TestUsers:
    """User creation and retrieval"""
    
    def test_create_anonymous_user(self):
        """Create user without username"""
        response = requests.post(f"{BASE_URL}/api/users", json={})
        assert response.status_code == 200
        
        user = response.json()
        assert "user_id" in user
        assert "user_secret" in user
        assert "username" in user
        assert "avatar_color" in user
        assert user["total_score"] == 0
        assert user["xp"] == 0
        assert user["level"] == 1
        assert user["level_name"] == "Débutant"
        assert user["badges"] == []
        assert "stats" in user
        assert user["stats"]["total_quizzes"] == 0
        assert "_id" not in user  # MongoDB ObjectId should be excluded
        
        # Verify persistence with GET
        user_id = user["user_id"]
        get_response = requests.get(f"{BASE_URL}/api/users/{user_id}")
        assert get_response.status_code == 200
        fetched_user = get_response.json()
        assert fetched_user["user_id"] == user_id
        assert fetched_user["username"] == user["username"]
        assert "user_secret" not in fetched_user
        print(f"✓ Anonymous user created and verified: {user['username']}")
    
    def test_create_user_with_username(self):
        """Create user with custom username"""
        response = requests.post(f"{BASE_URL}/api/users", json={"username": "TEST_QuizMaster"})
        assert response.status_code == 200
        
        user = response.json()
        assert user["username"] == "TEST_QuizMaster"
        assert "user_id" in user
        assert "user_secret" in user
        print(f"✓ Named user created: {user['username']}")
    
    def test_get_nonexistent_user(self):
        """Get user that doesn't exist"""
        response = requests.get(f"{BASE_URL}/api/users/nonexistent-id-12345")
        assert response.status_code == 404
        print("✓ 404 returned for nonexistent user")


class TestQuestions:
    """Question retrieval endpoints"""
    
    def test_get_finance_questions(self):
        """Get finance category questions"""
        response = requests.get(f"{BASE_URL}/api/questions?category=finance&count=10")
        assert response.status_code == 200
        
        questions = response.json()
        assert isinstance(questions, list)
        assert len(questions) <= 10
        assert len(questions) > 0
        
        # Verify question structure
        q = questions[0]
        assert "id" in q
        assert "text" in q
        assert "type" in q
        assert "category" in q
        assert q["category"] == "finance"
        assert "options" in q
        assert "correct_answer" in q
        assert "explanation" in q
        assert "_id" not in q
        print(f"✓ Finance questions retrieved: {len(questions)} questions")
    
    def test_get_marketing_questions(self):
        """Get marketing category questions"""
        response = requests.get(f"{BASE_URL}/api/questions?category=marketing")
        assert response.status_code == 200
        questions = response.json()
        assert all(q["category"] == "marketing" for q in questions)
        print(f"✓ Marketing questions retrieved: {len(questions)} questions")
    
    def test_get_management_questions(self):
        """Get management category questions"""
        response = requests.get(f"{BASE_URL}/api/questions?category=management")
        assert response.status_code == 200
        questions = response.json()
        assert all(q["category"] == "management" for q in questions)
        print(f"✓ Management questions retrieved: {len(questions)} questions")
    
    def test_get_ecommerce_questions(self):
        """Get ecommerce category questions"""
        response = requests.get(f"{BASE_URL}/api/questions?category=ecommerce")
        assert response.status_code == 200
        questions = response.json()
        assert all(q["category"] == "ecommerce" for q in questions)
        print(f"✓ E-commerce questions retrieved: {len(questions)} questions")
    
    def test_get_random_questions(self):
        """Get random mix of questions"""
        response = requests.get(f"{BASE_URL}/api/questions?category=random&count=10")
        assert response.status_code == 200
        questions = response.json()
        assert len(questions) <= 10
        print(f"✓ Random questions retrieved: {len(questions)} questions")
    
    def test_get_daily_challenge(self):
        """Get daily challenge questions"""
        response = requests.get(f"{BASE_URL}/api/questions/daily")
        assert response.status_code == 200
        
        data = response.json()
        assert "date" in data
        assert "questions" in data
        assert isinstance(data["questions"], list)
        assert len(data["questions"]) == 10
        
        # Verify question structure
        q = data["questions"][0]
        assert "id" in q
        assert "text" in q
        assert "_id" not in q
        print(f"✓ Daily challenge retrieved: {len(data['questions'])} questions for {data['date']}")


class TestQuizSubmit:
    """Quiz submission and scoring"""
    
    def test_submit_quiz_perfect_score(self):
        """Submit quiz with all correct answers"""
        # Create test user
        user_response = requests.post(f"{BASE_URL}/api/users", json={"username": "TEST_PerfectPlayer"})
        user = user_response.json()
        user_id = user["user_id"]
        user_secret = user["user_secret"]
        
        # Get questions
        questions_response = requests.get(f"{BASE_URL}/api/questions?category=finance&count=10")
        questions = questions_response.json()
        
        # Build answers (all correct)
        answers = [
            {
                "question_id": q["id"],
                "selected_answer": q["correct_answer"],
                "time_taken": 5.0
            }
            for q in questions
        ]
        
        # Submit quiz
        submit_response = requests.post(f"{BASE_URL}/api/quiz/submit", json={
            "user_id": user_id,
            "user_secret": user_secret,
            "category": "finance",
            "mode": "timed",
            "answers": answers
        }, headers={"x-user-secret": user_secret})
        assert submit_response.status_code == 200
        
        result = submit_response.json()
        assert "total_score" in result
        assert "base_score" in result
        assert "time_bonus" in result
        assert "streak_bonus" in result
        assert "xp_gained" in result
        assert "correct_count" in result
        assert result["correct_count"] == len(questions)
        assert result["total_questions"] == len(questions)
        assert "best_streak" in result
        assert result["best_streak"] == len(questions)
        assert "streak_multiplier" in result
        assert result["streak_multiplier"] == 2.0  # 10+ streak
        assert "new_badges" in result
        assert "level_up" in result
        assert "course_recommendations" in result
        assert len(result["course_recommendations"]) > 0
        assert result["course_recommendations"][0]["category"] == "finance"
        assert result["course_recommendations"][0]["level"] == "advanced"
        assert "recommendation_context" in result
        assert result["recommendation_context"]["target_category"] == "finance"
        assert result["recommendation_context"]["target_level"] == "advanced"
        
        # Verify user was updated
        user_check = requests.get(f"{BASE_URL}/api/users/{user_id}")
        updated_user = user_check.json()
        assert updated_user["xp"] > 0
        assert updated_user["stats"]["total_quizzes"] == 1
        assert updated_user["stats"]["correct_answers"] == len(questions)
        
        print(f"✓ Perfect score quiz submitted: {result['total_score']} points, {result['xp_gained']} XP")
    
    def test_submit_quiz_partial_score(self):
        """Submit quiz with some wrong answers"""
        # Create test user
        user_response = requests.post(f"{BASE_URL}/api/users", json={"username": "TEST_PartialPlayer"})
        user = user_response.json()
        user_id = user["user_id"]
        user_secret = user["user_secret"]
        
        # Get questions
        questions_response = requests.get(f"{BASE_URL}/api/questions?category=marketing&count=10")
        questions = questions_response.json()
        
        # Build answers (50% correct)
        answers = []
        for i, q in enumerate(questions):
            answers.append({
                "question_id": q["id"],
                "selected_answer": q["correct_answer"] if i % 2 == 0 else (q["correct_answer"] + 1) % len(q["options"]),
                "time_taken": 8.0
            })
        
        # Submit quiz
        submit_response = requests.post(f"{BASE_URL}/api/quiz/submit", json={
            "user_id": user_id,
            "user_secret": user_secret,
            "category": "marketing",
            "mode": "relaxed",
            "answers": answers
        }, headers={"x-user-secret": user_secret})
        assert submit_response.status_code == 200
        
        result = submit_response.json()
        assert result["correct_count"] == 5
        assert result["total_score"] > 0
        assert result["time_bonus"] == 0  # relaxed mode has no time bonus
        assert result["course_recommendations"][0]["category"] == "marketing"
        assert result["course_recommendations"][0]["level"] == "beginner"
        assert result["recommendation_context"]["target_category"] == "marketing"
        assert result["recommendation_context"]["target_level"] == "beginner"

        print(f"✓ Partial score quiz submitted: {result['correct_count']}/{result['total_questions']} correct")
    
    def test_submit_quiz_nonexistent_user(self):
        """Submit quiz with invalid user_id"""
        response = requests.post(f"{BASE_URL}/api/quiz/submit", json={
            "user_id": "invalid-user-id",
            "category": "finance",
            "mode": "timed",
            "answers": []
        })
        assert response.status_code == 404
        print("✓ 404 returned for nonexistent user in quiz submit")


class TestLeaderboard:
    """Leaderboard endpoints"""
    
    def test_get_leaderboard(self):
        """Get global leaderboard"""
        response = requests.get(f"{BASE_URL}/api/leaderboard?limit=50")
        assert response.status_code == 200
        
        leaderboard = response.json()
        assert isinstance(leaderboard, list)
        assert len(leaderboard) > 0
        
        # Verify structure
        entry = leaderboard[0]
        assert "rank" in entry
        assert "user_id" in entry
        assert "username" in entry
        assert "avatar_color" in entry
        assert "total_score" in entry
        assert "level" in entry
        assert "level_name" in entry
        assert "_id" not in entry
        
        # Verify sorting (descending by score)
        if len(leaderboard) > 1:
            assert leaderboard[0]["total_score"] >= leaderboard[1]["total_score"]
        
        # Verify ranks are sequential
        for i, entry in enumerate(leaderboard):
            assert entry["rank"] == i + 1
        
        print(f"✓ Leaderboard retrieved: {len(leaderboard)} players")
    
    def test_get_user_rank(self):
        """Get specific user rank"""
        # Create test user with score
        user_response = requests.post(f"{BASE_URL}/api/users", json={"username": "TEST_RankPlayer"})
        user = user_response.json()
        user_id = user["user_id"]
        
        # Get rank
        rank_response = requests.get(f"{BASE_URL}/api/leaderboard/user/{user_id}")
        assert rank_response.status_code == 200
        
        rank_data = rank_response.json()
        assert "rank" in rank_data
        assert "total_score" in rank_data
        assert rank_data["total_score"] == 0
        
        print(f"✓ User rank retrieved: rank #{rank_data['rank']}")


class TestBadges:
    """Badge definitions endpoint"""
    
    def test_get_all_badges(self):
        """Get all badge definitions"""
        response = requests.get(f"{BASE_URL}/api/badges")
        assert response.status_code == 200
        
        badges = response.json()
        assert isinstance(badges, dict)
        assert len(badges) > 0
        
        # Verify badge structure
        badge_keys = ["first_quiz", "perfect_score", "speed_demon", "streak_5", "streak_10"]
        for key in badge_keys:
            assert key in badges
            badge = badges[key]
            assert "name" in badge
            assert "description" in badge
            assert "icon" in badge
        
        print(f"✓ Badges retrieved: {len(badges)} badge definitions")


@pytest.fixture
def api_client():
    """Shared requests session"""
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session
