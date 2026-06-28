from fastapi import FastAPI, APIRouter, HTTPException, Query, Header
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import random
import hashlib
from pathlib import Path
from pydantic import BaseModel, Field, field_validator, model_validator
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime, timezone, date
from recommendations import build_course_recommendations

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

# ============ MODELS ============

VALID_CATEGORIES = {"finance", "marketing", "management", "ecommerce", "random", "daily"}
VALID_QUIZ_CATEGORIES = {"finance", "marketing", "management", "ecommerce", "random", "daily"}
VALID_MODES = {"timed", "relaxed"}
MAX_QUIZ_ANSWERS = 20


class UserCreate(BaseModel):
    username: Optional[str] = None

class QuizAnswer(BaseModel):
    question_id: str
    selected_answer: int
    time_taken: float

    @field_validator("question_id")
    @classmethod
    def question_id_required(cls, value: str) -> str:
        if not value.strip():
            raise ValueError("question_id is required")
        return value

    @field_validator("selected_answer")
    @classmethod
    def selected_answer_in_range(cls, value: int) -> int:
        if value < -1 or value > 10:
            raise ValueError("selected_answer is out of range")
        return value

    @field_validator("time_taken")
    @classmethod
    def time_taken_in_range(cls, value: float) -> float:
        if value < 0 or value > 3600:
            raise ValueError("time_taken is out of range")
        return value

class QuizSubmission(BaseModel):
    user_id: str
    category: str
    mode: str
    answers: List[QuizAnswer]
    user_secret: Optional[str] = None

    @field_validator("category")
    @classmethod
    def category_supported(cls, value: str) -> str:
        if value not in VALID_QUIZ_CATEGORIES:
            raise ValueError("unsupported category")
        return value

    @field_validator("mode")
    @classmethod
    def mode_supported(cls, value: str) -> str:
        if value not in VALID_MODES:
            raise ValueError("unsupported quiz mode")
        return value

    @model_validator(mode="after")
    def answers_are_bounded_and_distinct(self) -> "QuizSubmission":
        if not self.answers:
            raise ValueError("answers are required")
        if len(self.answers) > MAX_QUIZ_ANSWERS:
            raise ValueError("too many answers")
        ids = [answer.question_id for answer in self.answers]
        if len(ids) != len(set(ids)):
            raise ValueError("duplicate question answers are not allowed")
        return self

# ============ CONSTANTS ============

LEVEL_THRESHOLDS = [
    (0, "Débutant"),
    (1000, "Apprenti"),
    (3000, "Intermédiaire"),
    (8000, "Expert"),
    (15000, "Maître"),
]

AVATAR_COLORS = ["#4F46E5", "#3B82F6", "#EC4899", "#8B5CF6", "#F59E0B", "#10B981", "#EF4444", "#06B6D4"]

BADGES_DEFINITIONS = {
    "first_quiz": {"name": "Premier Pas", "description": "Complétez votre premier quiz", "icon": "flag"},
    "perfect_score": {"name": "Score Parfait", "description": "Obtenez 10/10 dans un quiz", "icon": "star"},
    "speed_demon": {"name": "Éclair", "description": "Terminez un quiz chronométré en moins de 60s", "icon": "flash"},
    "streak_5": {"name": "En Feu", "description": "5 bonnes réponses consécutives", "icon": "fire"},
    "streak_10": {"name": "Inarrêtable", "description": "10 bonnes réponses consécutives", "icon": "shield"},
    "finance_5": {"name": "Gourou Finance", "description": "5 quiz Finance complétés", "icon": "cash"},
    "marketing_5": {"name": "Pro Marketing", "description": "5 quiz Marketing complétés", "icon": "bullhorn"},
    "management_5": {"name": "As du Management", "description": "5 quiz Management complétés", "icon": "briefcase"},
    "ecommerce_5": {"name": "Expert E-commerce", "description": "5 quiz E-commerce complétés", "icon": "cart"},
    "level_3": {"name": "Intermédiaire", "description": "Atteignez le niveau 3", "icon": "trending-up"},
    "level_5": {"name": "Maître Business", "description": "Atteignez le niveau 5", "icon": "trophy"},
    "quiz_10": {"name": "Quizzeur Assidu", "description": "Complétez 10 quiz", "icon": "book"},
    "quiz_25": {"name": "Expert Quiz", "description": "Complétez 25 quiz", "icon": "school"},
}

COURSES = [
    {"id": "1", "title": "Les Fondamentaux de la Finance", "category": "finance", "description": "Maîtrisez les bases de la gestion financière", "url": "https://gocharbon.fr/tutos?utm_source=gocharbon_quiz&utm_medium=app&utm_campaign=business_quiz&utm_content=finance_beginner", "level": "beginner"},
    {"id": "2", "title": "Analyse Financière Avancée", "category": "finance", "description": "Techniques avancées d'analyse financière", "url": "https://gocharbon.fr/tutos?utm_source=gocharbon_quiz&utm_medium=app&utm_campaign=business_quiz&utm_content=finance_advanced", "level": "advanced"},
    {"id": "3", "title": "Marketing Digital de A à Z", "category": "marketing", "description": "Stratégies complètes de marketing en ligne", "url": "https://gocharbon.fr/tag/marketing?utm_source=gocharbon_quiz&utm_medium=app&utm_campaign=business_quiz&utm_content=marketing_beginner", "level": "beginner"},
    {"id": "4", "title": "Growth Hacking & Acquisition", "category": "marketing", "description": "Techniques de croissance rapide", "url": "https://gocharbon.fr/tag/seo?utm_source=gocharbon_quiz&utm_medium=app&utm_campaign=business_quiz&utm_content=marketing_advanced", "level": "advanced"},
    {"id": "5", "title": "Leadership & Management", "category": "management", "description": "Devenez un leader inspirant", "url": "https://gocharbon.fr/tag/productivite?utm_source=gocharbon_quiz&utm_medium=app&utm_campaign=business_quiz&utm_content=management_beginner", "level": "beginner"},
    {"id": "6", "title": "Stratégie d'Entreprise", "category": "management", "description": "Élaborer une stratégie gagnante", "url": "https://gocharbon.fr/tag/productivite?utm_source=gocharbon_quiz&utm_medium=app&utm_campaign=business_quiz&utm_content=management_advanced", "level": "advanced"},
    {"id": "7", "title": "Lancer sa Boutique E-commerce", "category": "ecommerce", "description": "Guide complet pour démarrer en e-commerce", "url": "https://gocharbon.fr/parcours/e-commerce?utm_source=gocharbon_quiz&utm_medium=app&utm_campaign=business_quiz&utm_content=ecommerce_beginner", "level": "beginner"},
    {"id": "8", "title": "Optimisation des Conversions", "category": "ecommerce", "description": "Boostez vos ventes en ligne", "url": "https://gocharbon.fr/parcours/e-commerce?utm_source=gocharbon_quiz&utm_medium=app&utm_campaign=business_quiz&utm_content=ecommerce_advanced", "level": "advanced"},
]

SEED_QUESTIONS = [
    # FINANCE - MCQ
    {"text": "Que signifie l'acronyme ROI en finance ?", "type": "mcq", "category": "finance", "difficulty": "easy",
     "options": ["Return On Investment", "Rate Of Interest", "Revenue Of Income", "Ratio Of Inflation"],
     "correct_answer": 0, "explanation": "ROI signifie Return On Investment (Retour sur Investissement), un indicateur clé de rentabilité."},
    {"text": "Quel document présente les actifs et passifs d'une entreprise ?", "type": "mcq", "category": "finance", "difficulty": "easy",
     "options": ["Le compte de résultat", "Le bilan comptable", "Le budget prévisionnel", "Le tableau de bord"],
     "correct_answer": 1, "explanation": "Le bilan comptable présente la situation patrimoniale avec actifs et passifs."},
    {"text": "Qu'est-ce que le BFR ?", "type": "mcq", "category": "finance", "difficulty": "medium",
     "options": ["Le bénéfice net annuel", "La différence entre actifs et passifs courants", "Le montant des emprunts", "Le capital social"],
     "correct_answer": 1, "explanation": "Le BFR mesure le besoin de financement lié au cycle d'exploitation."},
    {"text": "Quel est le taux de TVA standard en France ?", "type": "mcq", "category": "finance", "difficulty": "easy",
     "options": ["15%", "18%", "20%", "22%"],
     "correct_answer": 2, "explanation": "Le taux normal de TVA en France est de 20%."},
    {"text": "Qu'est-ce qu'une levée de fonds en Série A ?", "type": "mcq", "category": "finance", "difficulty": "hard",
     "options": ["Le premier prêt bancaire", "Le financement des fondateurs", "Le premier tour institutionnel significatif", "L'introduction en bourse"],
     "correct_answer": 2, "explanation": "La Série A est le premier tour de financement significatif par des investisseurs institutionnels."},
    # FINANCE - True/False
    {"text": "Le cash flow représente les flux de trésorerie d'une entreprise.", "type": "truefalse", "category": "finance", "difficulty": "easy",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "Le cash flow mesure les entrées et sorties d'argent."},
    {"text": "Un business angel investit généralement plus de 10 millions d'euros.", "type": "truefalse", "category": "finance", "difficulty": "medium",
     "options": ["Vrai", "Faux"], "correct_answer": 1, "explanation": "Les business angels investissent typiquement entre 5 000 et 500 000 euros."},
    {"text": "Le crowdfunding est une forme de financement participatif.", "type": "truefalse", "category": "finance", "difficulty": "easy",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "Le crowdfunding permet de collecter des fonds auprès d'un grand nombre de personnes."},
    {"text": "La marge brute est calculée après déduction de toutes les charges.", "type": "truefalse", "category": "finance", "difficulty": "medium",
     "options": ["Vrai", "Faux"], "correct_answer": 1, "explanation": "La marge brute ne déduit que le coût des marchandises vendues."},
    {"text": "Le seuil de rentabilité est le point où le CA couvre toutes les charges.", "type": "truefalse", "category": "finance", "difficulty": "medium",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "Le seuil de rentabilité (break-even) est atteint quand revenus = coûts."},
    {"text": "L'EBITDA inclut les amortissements et provisions.", "type": "truefalse", "category": "finance", "difficulty": "hard",
     "options": ["Vrai", "Faux"], "correct_answer": 1, "explanation": "L'EBITDA exclut spécifiquement les amortissements et provisions."},
    {"text": "Un compte de résultat montre la performance sur une période donnée.", "type": "truefalse", "category": "finance", "difficulty": "easy",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "Le compte de résultat présente revenus et charges sur une période."},
    # MARKETING - MCQ
    {"text": "Que signifie SEO en marketing digital ?", "type": "mcq", "category": "marketing", "difficulty": "easy",
     "options": ["Social Engagement Online", "Search Engine Optimization", "Sales Enhancement Operation", "Strategic Email Outreach"],
     "correct_answer": 1, "explanation": "SEO = Search Engine Optimization (Optimisation pour les moteurs de recherche)."},
    {"text": "Quel est l'objectif principal d'un tunnel de vente ?", "type": "mcq", "category": "marketing", "difficulty": "medium",
     "options": ["Augmenter le trafic web", "Convertir les visiteurs en clients", "Réduire les coûts pub", "Améliorer le service client"],
     "correct_answer": 1, "explanation": "Un tunnel de vente guide progressivement le prospect vers l'achat."},
    {"text": "Qu'est-ce que le taux de conversion ?", "type": "mcq", "category": "marketing", "difficulty": "easy",
     "options": ["Le nombre total de visiteurs", "Le % de visiteurs réalisant une action souhaitée", "Le coût par clic", "Le nombre d'abonnés"],
     "correct_answer": 1, "explanation": "Le taux de conversion mesure le % de visiteurs qui accomplissent l'objectif."},
    {"text": "Quelle stratégie crée du contenu utile pour attirer des prospects ?", "type": "mcq", "category": "marketing", "difficulty": "medium",
     "options": ["Outbound Marketing", "Inbound Marketing", "Guerrilla Marketing", "Affiliate Marketing"],
     "correct_answer": 1, "explanation": "L'Inbound Marketing attire les clients grâce à du contenu pertinent."},
    {"text": "Quel réseau social est le plus adapté au B2B ?", "type": "mcq", "category": "marketing", "difficulty": "easy",
     "options": ["TikTok", "Instagram", "LinkedIn", "Snapchat"],
     "correct_answer": 2, "explanation": "LinkedIn est la plateforme de référence pour le marketing B2B."},
    {"text": "Que mesure le CPA en publicité digitale ?", "type": "mcq", "category": "marketing", "difficulty": "hard",
     "options": ["Coût Par Affichage", "Coût Par Acquisition", "Clic Par Annonce", "Conversion Par Audience"],
     "correct_answer": 1, "explanation": "Le CPA mesure le coût moyen pour acquérir un client."},
    # MARKETING - True/False
    {"text": "Le marketing d'influence utilise des personnalités pour promouvoir des produits.", "type": "truefalse", "category": "marketing", "difficulty": "easy",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "Le marketing d'influence s'appuie sur des influenceurs."},
    {"text": "Le CTR mesure le taux de clics sur une publicité.", "type": "truefalse", "category": "marketing", "difficulty": "easy",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "Le CTR = ratio clics/impressions."},
    {"text": "Le remarketing cible les personnes qui n'ont jamais visité votre site.", "type": "truefalse", "category": "marketing", "difficulty": "medium",
     "options": ["Vrai", "Faux"], "correct_answer": 1, "explanation": "Le remarketing cible ceux qui ont déjà interagi avec votre marque."},
    {"text": "Un persona marketing est une représentation fictive du client idéal.", "type": "truefalse", "category": "marketing", "difficulty": "easy",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "Un persona est un archétype basé sur des données réelles."},
    {"text": "Le A/B testing compare deux versions d'un même élément.", "type": "truefalse", "category": "marketing", "difficulty": "easy",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "Le A/B testing identifie la variante la plus performante."},
    {"text": "Le Content Marketing a pour seul objectif de divertir.", "type": "truefalse", "category": "marketing", "difficulty": "medium",
     "options": ["Vrai", "Faux"], "correct_answer": 1, "explanation": "Le Content Marketing vise à attirer, engager et convertir."},
    # MANAGEMENT - MCQ
    {"text": "Quelle méthode utilise des sprints de 2-4 semaines ?", "type": "mcq", "category": "management", "difficulty": "medium",
     "options": ["Waterfall", "Scrum", "Kanban", "Six Sigma"],
     "correct_answer": 1, "explanation": "Scrum organise le travail en sprints de durée fixe."},
    {"text": "Qu'analyse la matrice SWOT ?", "type": "mcq", "category": "management", "difficulty": "easy",
     "options": ["Les finances", "Forces, Faiblesses, Opportunités, Menaces", "Les compétences", "La satisfaction client"],
     "correct_answer": 1, "explanation": "SWOT : Strengths, Weaknesses, Opportunities, Threats."},
    {"text": "Quel style de leadership implique une décision collaborative ?", "type": "mcq", "category": "management", "difficulty": "medium",
     "options": ["Autoritaire", "Démocratique", "Laissez-faire", "Transactionnel"],
     "correct_answer": 1, "explanation": "Le leadership démocratique implique les membres dans les décisions."},
    {"text": "Que signifie KPI en management ?", "type": "mcq", "category": "management", "difficulty": "easy",
     "options": ["Key Performance Indicator", "Knowledge Process Integration", "Key Product Innovation", "Knowledge Power Index"],
     "correct_answer": 0, "explanation": "KPI = Key Performance Indicator (indicateur clé de performance)."},
    {"text": "Quelle est la première étape du cycle PDCA ?", "type": "mcq", "category": "management", "difficulty": "hard",
     "options": ["Do (Faire)", "Plan (Planifier)", "Check (Vérifier)", "Act (Agir)"],
     "correct_answer": 1, "explanation": "PDCA commence par Plan, suivi de Do, Check, Act."},
    {"text": "Quel outil visualise les tâches sur un tableau avec colonnes ?", "type": "mcq", "category": "management", "difficulty": "easy",
     "options": ["Diagramme de Gantt", "Tableau Kanban", "Mind Map", "Organigramme"],
     "correct_answer": 1, "explanation": "Le Kanban organise les tâches en colonnes (À faire, En cours, Fait)."},
    # MANAGEMENT - True/False
    {"text": "La méthode OKR a été popularisée par Google.", "type": "truefalse", "category": "management", "difficulty": "medium",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "Google a largement popularisé la méthode OKR."},
    {"text": "Le micromanagement est considéré comme un style efficace.", "type": "truefalse", "category": "management", "difficulty": "easy",
     "options": ["Vrai", "Faux"], "correct_answer": 1, "explanation": "Le micromanagement étouffe l'autonomie et la créativité."},
    {"text": "La loi de Pareto (80/20) s'applique en gestion d'entreprise.", "type": "truefalse", "category": "management", "difficulty": "medium",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "80% des résultats proviennent souvent de 20% des efforts."},
    {"text": "Un organigramme hiérarchique est obligatoire pour toute entreprise.", "type": "truefalse", "category": "management", "difficulty": "easy",
     "options": ["Vrai", "Faux"], "correct_answer": 1, "explanation": "Pas d'obligation légale, certaines entreprises ont des structures plates."},
    {"text": "Le lean management vise à éliminer les gaspillages.", "type": "truefalse", "category": "management", "difficulty": "medium",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "Le lean maximise la valeur en minimisant les gaspillages."},
    {"text": "La culture d'entreprise n'a aucun impact sur la performance.", "type": "truefalse", "category": "management", "difficulty": "easy",
     "options": ["Vrai", "Faux"], "correct_answer": 1, "explanation": "La culture a un impact direct sur l'engagement et la performance."},
    # E-COMMERCE - MCQ
    {"text": "Qu'est-ce que le dropshipping ?", "type": "mcq", "category": "ecommerce", "difficulty": "easy",
     "options": ["Vente de produits numériques", "Vente sans stock, le fournisseur expédie", "Vente sur réseaux sociaux", "Livraison express"],
     "correct_answer": 1, "explanation": "Le dropshipping permet de vendre sans stocker."},
    {"text": "Quelle plateforme est la plus populaire pour une boutique en ligne ?", "type": "mcq", "category": "ecommerce", "difficulty": "easy",
     "options": ["WordPress", "Shopify", "Wix", "Tumblr"],
     "correct_answer": 1, "explanation": "Shopify est la plateforme e-commerce la plus utilisée."},
    {"text": "Que signifie 'panier moyen' en e-commerce ?", "type": "mcq", "category": "ecommerce", "difficulty": "easy",
     "options": ["Le prix du produit phare", "La valeur moyenne des commandes", "Le nombre de produits en stock", "Le coût de livraison moyen"],
     "correct_answer": 1, "explanation": "Le panier moyen est la valeur moyenne dépensée par commande."},
    {"text": "Qu'est-ce que le cross-selling ?", "type": "mcq", "category": "ecommerce", "difficulty": "medium",
     "options": ["Vendre à l'international", "Proposer des produits complémentaires", "Vendre sur plusieurs plateformes", "Promotions croisées"],
     "correct_answer": 1, "explanation": "Le cross-selling propose des produits complémentaires."},
    {"text": "Quel est le taux moyen d'abandon de panier en e-commerce ?", "type": "mcq", "category": "ecommerce", "difficulty": "hard",
     "options": ["30%", "50%", "70%", "90%"],
     "correct_answer": 2, "explanation": "Le taux moyen d'abandon de panier est d'environ 70%."},
    {"text": "Quelle stratégie propose un produit plus cher que celui envisagé ?", "type": "mcq", "category": "ecommerce", "difficulty": "medium",
     "options": ["Down-selling", "Up-selling", "Cross-selling", "Flash-selling"],
     "correct_answer": 1, "explanation": "L'up-selling propose une version supérieure ou plus chère."},
    # E-COMMERCE - True/False
    {"text": "Amazon a commencé comme une librairie en ligne.", "type": "truefalse", "category": "ecommerce", "difficulty": "easy",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "Jeff Bezos a fondé Amazon en 1994 comme librairie en ligne."},
    {"text": "Le SSL est optionnel pour un site e-commerce.", "type": "truefalse", "category": "ecommerce", "difficulty": "easy",
     "options": ["Vrai", "Faux"], "correct_answer": 1, "explanation": "Le SSL est essentiel pour la sécurité des transactions."},
    {"text": "Le social commerce désigne la vente directe via les réseaux sociaux.", "type": "truefalse", "category": "ecommerce", "difficulty": "medium",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "Le social commerce permet d'acheter depuis les plateformes sociales."},
    {"text": "Le taux de retour e-commerce est généralement inférieur à 5%.", "type": "truefalse", "category": "ecommerce", "difficulty": "medium",
     "options": ["Vrai", "Faux"], "correct_answer": 1, "explanation": "Le taux de retour est généralement entre 15% et 30%."},
    {"text": "Le m-commerce représente plus de 50% des ventes en ligne.", "type": "truefalse", "category": "ecommerce", "difficulty": "medium",
     "options": ["Vrai", "Faux"], "correct_answer": 0, "explanation": "Le m-commerce dépasse 50% des transactions mondiales."},
    {"text": "Les avis clients n'influencent pas les décisions d'achat en ligne.", "type": "truefalse", "category": "ecommerce", "difficulty": "easy",
     "options": ["Vrai", "Faux"], "correct_answer": 1, "explanation": "90%+ des consommateurs consultent les avis avant d'acheter."},
]

# ============ HELPERS ============

def get_level_info(xp: int):
    level = 1
    level_name = "Débutant"
    for i, (threshold, name) in enumerate(LEVEL_THRESHOLDS):
        if xp >= threshold:
            level = i + 1
            level_name = name
    return level, level_name

def calculate_score(answers, questions_map, mode):
    base_score = 0
    time_bonus = 0
    streak = 0
    best_streak = 0
    total_streak_bonus = 0
    correct_count = 0

    for answer in answers:
        q = questions_map.get(answer.question_id)
        if not q:
            continue
        if answer.selected_answer == q["correct_answer"]:
            correct_count += 1
            streak += 1
            best_streak = max(best_streak, streak)
            base_score += 100
            if mode == "timed":
                remaining = max(0, 15 - answer.time_taken)
                time_bonus += int(remaining * 50 / 15)
            if streak >= 10:
                total_streak_bonus += 100
            elif streak >= 5:
                total_streak_bonus += 50
        else:
            streak = 0

    streak_multiplier = 2.0 if best_streak >= 10 else (1.5 if best_streak >= 5 else 1.0)
    return {
        "total_score": base_score + time_bonus + total_streak_bonus,
        "base_score": base_score,
        "time_bonus": time_bonus,
        "streak_bonus": total_streak_bonus,
        "correct_count": correct_count,
        "best_streak": best_streak,
        "streak_multiplier": streak_multiplier,
    }

# ============ SEED ============

async def seed_data():
    question_count = await db.questions.count_documents({})
    if question_count == 0:
        questions_to_insert = []
        for q in SEED_QUESTIONS:
            q_doc = {**q, "id": str(uuid.uuid4())}
            questions_to_insert.append(q_doc)
        await db.questions.insert_many(questions_to_insert)
        logger.info(f"Seeded {len(questions_to_insert)} questions")

    user_count = await db.users.count_documents({})
    if user_count == 0:
        fake_names = [
            "BusinessPro42", "FinanceGuru", "MarketingWhiz", "StartupNinja",
            "CEOinTraining", "InvestorMind", "TechEntrepreneur", "GrowthHacker",
            "BizQueen", "MoneyMaster", "StrategyKing", "EcomWizard",
            "DigitalNomad", "HustleHard", "VisionaryLeader"
        ]
        for name in fake_names:
            score = random.randint(500, 15000)
            xp = score
            level, level_name = get_level_info(xp)
            user = {
                "user_id": str(uuid.uuid4()),
                "user_secret": str(uuid.uuid4()),
                "username": name,
                "avatar_color": random.choice(AVATAR_COLORS),
                "total_score": score,
                "xp": xp,
                "level": level,
                "level_name": level_name,
                "badges": random.sample(list(BADGES_DEFINITIONS.keys()), min(random.randint(1, 5), len(BADGES_DEFINITIONS))),
                "stats": {
                    "total_quizzes": random.randint(5, 50),
                    "correct_answers": random.randint(30, 300),
                    "total_answers": random.randint(50, 500),
                    "best_streak": random.randint(3, 10),
                    "categories": {
                        "finance": {"played": random.randint(0, 10), "correct": random.randint(0, 80)},
                        "marketing": {"played": random.randint(0, 10), "correct": random.randint(0, 80)},
                        "management": {"played": random.randint(0, 10), "correct": random.randint(0, 80)},
                        "ecommerce": {"played": random.randint(0, 10), "correct": random.randint(0, 80)},
                    }
                },
                "created_at": datetime.now(timezone.utc).isoformat()
            }
            await db.users.insert_one(user)
        logger.info(f"Seeded {len(fake_names)} users")

# ============ ROUTES ============

@api_router.get("/")
async def root():
    return {"message": "GoCharbon Business Quizz API"}

@api_router.get("/health")
async def health():
    return {"status": "ok"}

# --- USERS ---
@api_router.post("/users")
async def create_user(data: UserCreate):
    random_num = random.randint(1000, 9999)
    username = data.username or f"Player{random_num}"
    avatar_color = random.choice(AVATAR_COLORS)
    user_secret = str(uuid.uuid4())
    user = {
        "user_id": str(uuid.uuid4()),
        "user_secret": user_secret,
        "username": username,
        "avatar_color": avatar_color,
        "total_score": 0,
        "xp": 0,
        "level": 1,
        "level_name": "Débutant",
        "badges": [],
        "stats": {
            "total_quizzes": 0,
            "correct_answers": 0,
            "total_answers": 0,
            "best_streak": 0,
            "categories": {
                "finance": {"played": 0, "correct": 0},
                "marketing": {"played": 0, "correct": 0},
                "management": {"played": 0, "correct": 0},
                "ecommerce": {"played": 0, "correct": 0},
            }
        },
        "created_at": datetime.now(timezone.utc).isoformat()
    }
    await db.users.insert_one(user)
    user.pop("_id", None)
    return user

@api_router.get("/users/{user_id}")
async def get_user(user_id: str):
    user = await db.users.find_one({"user_id": user_id}, {"_id": 0, "user_secret": 0})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# --- QUESTIONS ---
@api_router.get("/questions")
async def get_questions(
    category: str = Query(default="random"),
    count: int = Query(default=10, ge=1, le=50),
):
    if category not in VALID_CATEGORIES:
        raise HTTPException(status_code=400, detail="Unsupported category")
    query = {}
    if category != "random":
        query["category"] = category
    questions = await db.questions.find(query, {"_id": 0}).to_list(100)
    if len(questions) > count:
        questions = random.sample(questions, count)
    random.shuffle(questions)
    return questions

@api_router.get("/questions/daily")
async def get_daily_challenge():
    today = date.today().isoformat()
    seed = int(hashlib.md5(today.encode()).hexdigest(), 16)
    questions = await db.questions.find({}, {"_id": 0}).to_list(100)
    rng = random.Random(seed)
    daily_questions = rng.sample(questions, min(10, len(questions)))
    return {"date": today, "questions": daily_questions}

# --- QUIZ ---
@api_router.post("/quiz/submit")
async def submit_quiz(submission: QuizSubmission, x_user_secret: Optional[str] = Header(default=None)):
    question_ids = [a.question_id for a in submission.answers]
    questions = await db.questions.find({"id": {"$in": question_ids}}, {"_id": 0}).to_list(100)
    questions_map = {q["id"]: q for q in questions}

    result = calculate_score(submission.answers, questions_map, submission.mode)

    user = await db.users.find_one({"user_id": submission.user_id}, {"_id": 0})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    expected_secret = user.get("user_secret")
    provided_secret = x_user_secret or submission.user_secret
    if not expected_secret or provided_secret != expected_secret:
        raise HTTPException(status_code=401, detail="Unauthorized")

    xp_gained = result["total_score"]
    new_xp = user["xp"] + xp_gained
    new_level, new_level_name = get_level_info(new_xp)
    level_up = new_level > user["level"]

    new_badges = []
    existing_badges = set(user.get("badges", []))
    stats = user.get("stats", {})
    total_quizzes = stats.get("total_quizzes", 0) + 1
    cat = submission.category if submission.category != "random" and submission.category != "daily" else "finance"
    cat_stats = stats.get("categories", {}).get(cat, {"played": 0, "correct": 0})
    cat_played = cat_stats.get("played", 0) + 1

    # Badge checks
    badge_checks = [
        ("first_quiz", True),
        ("perfect_score", result["correct_count"] == len(submission.answers)),
        ("speed_demon", submission.mode == "timed" and sum(a.time_taken for a in submission.answers) < 60),
        ("streak_5", result["best_streak"] >= 5),
        ("streak_10", result["best_streak"] >= 10),
        ("level_3", new_level >= 3),
        ("level_5", new_level >= 5),
        ("quiz_10", total_quizzes >= 10),
        ("quiz_25", total_quizzes >= 25),
    ]
    cat_badge = f"{cat}_5"
    if cat_badge in BADGES_DEFINITIONS:
        badge_checks.append((cat_badge, cat_played >= 5))

    for badge_id, condition in badge_checks:
        if condition and badge_id not in existing_badges and badge_id in BADGES_DEFINITIONS:
            new_badges.append({"id": badge_id, **BADGES_DEFINITIONS[badge_id]})
            existing_badges.add(badge_id)

    update_data = {
        "$set": {
            "xp": new_xp,
            "level": new_level,
            "level_name": new_level_name,
            "total_score": user["total_score"] + result["total_score"],
            "badges": list(existing_badges),
            "stats.total_quizzes": total_quizzes,
            "stats.correct_answers": stats.get("correct_answers", 0) + result["correct_count"],
            "stats.total_answers": stats.get("total_answers", 0) + len(submission.answers),
            "stats.best_streak": max(stats.get("best_streak", 0), result["best_streak"]),
        }
    }
    if submission.category not in ("random", "daily"):
        update_data["$set"][f"stats.categories.{submission.category}.played"] = cat_played
        update_data["$set"][f"stats.categories.{submission.category}.correct"] = cat_stats.get("correct", 0) + result["correct_count"]

    await db.users.update_one({"user_id": submission.user_id}, update_data)

    accuracy = result["correct_count"] / max(len(submission.answers), 1)
    course_recs, recommendation_context = build_course_recommendations(
        submission.category,
        submission.answers,
        questions_map,
        COURSES,
        accuracy,
    )

    return {
        "total_score": result["total_score"],
        "base_score": result["base_score"],
        "time_bonus": result["time_bonus"],
        "streak_bonus": result["streak_bonus"],
        "xp_gained": xp_gained,
        "correct_count": result["correct_count"],
        "total_questions": len(submission.answers),
        "best_streak": result["best_streak"],
        "streak_multiplier": result["streak_multiplier"],
        "new_badges": new_badges,
        "level_up": level_up,
        "new_level": new_level,
        "new_level_name": new_level_name,
        "course_recommendations": course_recs[:2],
        "recommendation_context": recommendation_context,
    }

# --- LEADERBOARD ---
@api_router.get("/leaderboard")
async def get_leaderboard(limit: int = Query(default=50)):
    users = await db.users.find({}, {"_id": 0}).sort("total_score", -1).to_list(limit)
    leaderboard = []
    for i, user in enumerate(users):
        leaderboard.append({
            "rank": i + 1,
            "user_id": user["user_id"],
            "username": user["username"],
            "avatar_color": user.get("avatar_color", "#4F46E5"),
            "total_score": user["total_score"],
            "level": user.get("level", 1),
            "level_name": user.get("level_name", "Débutant"),
        })
    return leaderboard

@api_router.get("/leaderboard/user/{user_id}")
async def get_user_rank(user_id: str):
    user = await db.users.find_one({"user_id": user_id}, {"_id": 0})
    if not user:
        return {"rank": 0, "total_score": 0}
    rank = await db.users.count_documents({"total_score": {"$gt": user["total_score"]}})
    return {"rank": rank + 1, "total_score": user["total_score"]}

# --- BADGES ---
@api_router.get("/badges")
async def get_all_badges():
    return BADGES_DEFINITIONS

# --- COURSES ---
@api_router.get("/courses/recommend")
async def recommend_courses(user_id: str = Query(default=""), category: str = Query(default="")):
    recs = []
    for course in COURSES:
        if not category or course["category"] == category:
            recs.append(course)
    return recs[:4]

@api_router.post("/notifications/leaderboard-check")
async def check_leaderboard_notifications(user_id: str = Query(...), x_user_secret: Optional[str] = Header(default=None)):
    """Check whether the user's leaderboard rank changed."""
    user = await db.users.find_one({"user_id": user_id}, {"_id": 0})
    if not user:
        return {"rank_changed": False}

    expected_secret = user.get("user_secret")
    if expected_secret and x_user_secret != expected_secret:
        raise HTTPException(status_code=401, detail="Unauthorized")

    user_score = user.get("total_score", 0)
    users_above = await db.users.count_documents({"total_score": {"$gt": user_score}})
    current_rank = users_above + 1

    stored_rank = user.get("last_known_rank", 0)
    rank_changed = stored_rank > 0 and current_rank != stored_rank

    await db.users.update_one({"user_id": user_id}, {"$set": {"last_known_rank": current_rank}})
    return {"rank_changed": rank_changed, "rank": current_rank}

# --- SEED ---
@api_router.post("/seed")
async def seed_endpoint(x_admin_key: Optional[str] = Header(default=None)):
    admin_key = os.environ.get("TRIVIA_ADMIN_KEY")
    if not admin_key or x_admin_key != admin_key:
        raise HTTPException(status_code=401, detail="Unauthorized")
    await seed_data()
    return {"message": "Data seeded successfully"}

# ============ APP CONFIG ============

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=False,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    await seed_data()
    logger.info("GoCharbon Business Quizz API started")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
