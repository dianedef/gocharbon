import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const category = v.union(
  v.literal("finance"),
  v.literal("marketing"),
  v.literal("management"),
  v.literal("ecommerce"),
);

const quizCategory = v.union(category, v.literal("random"), v.literal("daily"));
const difficulty = v.union(v.literal("easy"), v.literal("medium"), v.literal("hard"));
const mode = v.union(v.literal("timed"), v.literal("relaxed"));

export default defineSchema({
  questions: defineTable({
    sourceId: v.string(),
    text: v.string(),
    kind: v.union(v.literal("mcq"), v.literal("truefalse")),
    category,
    difficulty,
    options: v.array(v.string()),
    correctAnswer: v.number(),
    explanation: v.string(),
    isActive: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_source_id", ["sourceId"])
    .index("by_category_active", ["category", "isActive"]),

  profiles: defineTable({
    firebaseUid: v.string(),
    username: v.string(),
    avatarColor: v.string(),
    totalScore: v.number(),
    xp: v.number(),
    level: v.number(),
    levelName: v.string(),
    badges: v.array(v.string()),
    totalQuizzes: v.number(),
    correctAnswers: v.number(),
    totalAnswers: v.number(),
    bestStreak: v.number(),
    lastSubmissionAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_firebase_uid", ["firebaseUid"]),

  categoryStats: defineTable({
    firebaseUid: v.string(),
    category,
    played: v.number(),
    correct: v.number(),
    updatedAt: v.number(),
  }).index("by_user_category", ["firebaseUid", "category"]),

  attempts: defineTable({
    firebaseUid: v.string(),
    attemptToken: v.string(),
    requestHash: v.string(),
    category: quizCategory,
    mode,
    answerCount: v.number(),
    correctCount: v.number(),
    baseScore: v.number(),
    timeBonus: v.number(),
    streakBonus: v.number(),
    totalScore: v.number(),
    xpGained: v.number(),
    bestStreak: v.number(),
    streakMultiplier: v.number(),
    result: v.any(),
    submittedAt: v.number(),
  }).index("by_user_attempt", ["firebaseUid", "attemptToken"]),

  challenges: defineTable({
    code: v.string(),
    creatorUid: v.string(),
    category: quizCategory,
    mode,
    questionIds: v.array(v.id("questions")),
    expiresAt: v.number(),
    createdAt: v.number(),
  }).index("by_code", ["code"]),

  challengeEntries: defineTable({
    challengeId: v.id("challenges"),
    attemptId: v.id("attempts"),
    firebaseUid: v.string(),
    username: v.string(),
    totalScore: v.number(),
    correctCount: v.number(),
    totalQuestions: v.number(),
    completedAt: v.number(),
  })
    .index("by_challenge", ["challengeId"])
    .index("by_challenge_user", ["challengeId", "firebaseUid"])
    .index("by_attempt", ["attemptId"]),

  answers: defineTable({
    attemptId: v.id("attempts"),
    firebaseUid: v.string(),
    questionId: v.id("questions"),
    selectedAnswer: v.number(),
    timeTakenMs: v.number(),
    isCorrect: v.boolean(),
    createdAt: v.number(),
  }).index("by_attempt", ["attemptId"]),

  rateLimits: defineTable({
    subject: v.string(),
    action: v.string(),
    windowStartedAt: v.number(),
    hits: v.number(),
    updatedAt: v.number(),
  }).index("by_subject_action_window", ["subject", "action", "windowStartedAt"]),

  courses: defineTable({
    sourceId: v.string(),
    title: v.string(),
    category,
    level: v.union(v.literal("beginner"), v.literal("advanced")),
    description: v.string(),
    url: v.string(),
    isActive: v.boolean(),
  })
    .index("by_source_id", ["sourceId"])
    .index("by_category_active", ["category", "isActive"]),
});
