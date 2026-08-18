import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { BADGES, CONCRETE_CATEGORIES, levelForXp, requireFirebaseUid, scoreAnswers } from "./_shared";
import { buildRecommendations } from "./recommendations";

const category = v.union(v.literal("finance"), v.literal("marketing"), v.literal("management"), v.literal("ecommerce"), v.literal("random"), v.literal("daily"));
const mode = v.union(v.literal("timed"), v.literal("relaxed"));
const answer = v.object({ questionId: v.id("questions"), selectedAnswer: v.number(), timeTakenMs: v.number() });

async function consumeLimit(ctx: any, subject: string, action: string, windowMs: number, maximum: number) {
  const now = Date.now();
  const windowStartedAt = Math.floor(now / windowMs) * windowMs;
  const current = await ctx.db.query("rateLimits").withIndex("by_subject_action_window", (q: any) => q.eq("subject", subject).eq("action", action).eq("windowStartedAt", windowStartedAt)).unique();
  if (current) {
    if (current.hits >= maximum) throw new Error("RATE_LIMITED");
    await ctx.db.patch(current._id, { hits: current.hits + 1, updatedAt: now });
  } else await ctx.db.insert("rateLimits", { subject, action, windowStartedAt, hits: 1, updatedAt: now });
}

export const submit = mutation({
  args: { attemptToken: v.string(), category, mode, answers: v.array(answer) },
  handler: async (ctx, args) => {
    const uid = requireFirebaseUid(await ctx.auth.getUserIdentity());
    if (!/^[A-Za-z0-9_-]{16,128}$/.test(args.attemptToken)) throw new Error("INVALID_ATTEMPT_TOKEN");
    if (args.answers.length < 1 || args.answers.length > 20) throw new Error("INVALID_ANSWER_COUNT");
    if (new Set(args.answers.map((item) => item.questionId)).size !== args.answers.length) throw new Error("DUPLICATE_QUESTION");
    if (args.answers.some((item) => !Number.isInteger(item.selectedAnswer) || item.selectedAnswer < -1 || item.selectedAnswer > 10 || !Number.isFinite(item.timeTakenMs) || item.timeTakenMs < 0 || item.timeTakenMs > 3_600_000)) throw new Error("INVALID_ANSWER");

    const existing = await ctx.db.query("attempts").withIndex("by_user_attempt", (q) => q.eq("firebaseUid", uid).eq("attemptToken", args.attemptToken)).unique();
    if (existing) return existing.result;
    await consumeLimit(ctx, `user:${uid}`, "submit:minute", 60_000, 30);
    await consumeLimit(ctx, `user:${uid}`, "submit:day", 86_400_000, 500);

    const profile = await ctx.db.query("profiles").withIndex("by_firebase_uid", (q) => q.eq("firebaseUid", uid)).unique();
    if (!profile) throw new Error("PROFILE_REQUIRED");
    const questions = await Promise.all(args.answers.map(({ questionId }) => ctx.db.get(questionId)));
    if (questions.some((question) => !question || !question.isActive)) throw new Error("QUESTION_UNAVAILABLE");
    const resolved = questions as NonNullable<(typeof questions)[number]>[];
    if (args.category !== "random" && args.category !== "daily" && resolved.some((question) => question.category !== args.category)) throw new Error("QUESTION_CATEGORY_MISMATCH");

    const evaluated = args.answers.map((item, index) => ({ ...item, question: resolved[index], isCorrect: item.selectedAnswer === resolved[index].correctAnswer }));
    const scoring = scoreAnswers(evaluated);
    const now = Date.now();
    const nextXp = profile.xp + scoring.totalScore;
    const nextLevel = levelForXp(nextXp);
    const nextTotalQuizzes = profile.totalQuizzes + 1;
    const badges = new Set(profile.badges);
    const award = (id: keyof typeof BADGES) => badges.add(id);
    if (nextTotalQuizzes === 1) award("first_quiz");
    if (scoring.correctCount === evaluated.length) award("perfect_score");
    if (args.mode === "timed" && args.answers.reduce((sum, item) => sum + item.timeTakenMs, 0) < 60_000) award("speed_demon");
    if (scoring.bestStreak >= 5) award("streak_5");
    if (scoring.bestStreak >= 10) award("streak_10");
    if (nextLevel.level >= 3) award("level_3");
    if (nextLevel.level >= 5) award("level_5");
    if (nextTotalQuizzes >= 10) award("quiz_10");
    if (nextTotalQuizzes >= 25) award("quiz_25");

    if ((CONCRETE_CATEGORIES as readonly string[]).includes(args.category)) {
      const concreteCategory = args.category as (typeof CONCRETE_CATEGORIES)[number];
      const stat = await ctx.db.query("categoryStats").withIndex("by_user_category", (q) => q.eq("firebaseUid", uid).eq("category", concreteCategory)).unique();
      const played = (stat?.played ?? 0) + 1;
      const correct = (stat?.correct ?? 0) + scoring.correctCount;
      if (stat) await ctx.db.patch(stat._id, { played, correct, updatedAt: now });
      else await ctx.db.insert("categoryStats", { firebaseUid: uid, category: concreteCategory, played, correct, updatedAt: now });
      if (played >= 5) award(`${concreteCategory}_5` as keyof typeof BADGES);
    }
    const newBadges = [...badges].filter((id) => !profile.badges.includes(id));
    const courses = await ctx.db.query("courses").collect();
    const recommendation = buildRecommendations({ category: args.category, answers: evaluated.map((item) => ({ category: item.question.category, difficulty: item.question.difficulty, isCorrect: item.isCorrect })), courses, accuracy: scoring.correctCount / evaluated.length });
    const result = {
      attemptToken: args.attemptToken,
      totalScore: scoring.totalScore, baseScore: scoring.baseScore, timeBonus: scoring.timeBonus, streakBonus: scoring.streakBonus,
      xpGained: scoring.totalScore, correctCount: scoring.correctCount, totalQuestions: evaluated.length, bestStreak: scoring.bestStreak,
      streakMultiplier: scoring.streakMultiplier, newBadges: newBadges.map((id) => ({ id, ...BADGES[id as keyof typeof BADGES] })),
      levelUp: nextLevel.level > profile.level, newLevel: nextLevel.level, newLevelName: nextLevel.levelName, category: args.category,
      courseRecommendations: recommendation.recommendations, recommendationContext: recommendation.context,
      answers: evaluated.map((item) => ({ questionId: item.question._id, selectedAnswer: item.selectedAnswer, isCorrect: item.isCorrect, explanation: item.question.explanation })),
    };
    const attemptId = await ctx.db.insert("attempts", { firebaseUid: uid, attemptToken: args.attemptToken, requestHash: "server-calculated", category: args.category, mode: args.mode, answerCount: evaluated.length, correctCount: scoring.correctCount, baseScore: scoring.baseScore, timeBonus: scoring.timeBonus, streakBonus: scoring.streakBonus, totalScore: scoring.totalScore, xpGained: scoring.totalScore, bestStreak: scoring.bestStreak, streakMultiplier: scoring.streakMultiplier, result, submittedAt: now });
    await Promise.all(evaluated.map((item) => ctx.db.insert("answers", { attemptId, firebaseUid: uid, questionId: item.question._id, selectedAnswer: item.selectedAnswer, timeTakenMs: item.timeTakenMs, isCorrect: item.isCorrect, createdAt: now })));
    await ctx.db.patch(profile._id, { totalScore: profile.totalScore + scoring.totalScore, xp: nextXp, level: nextLevel.level, levelName: nextLevel.levelName, badges: [...badges], totalQuizzes: nextTotalQuizzes, correctAnswers: profile.correctAnswers + scoring.correctCount, totalAnswers: profile.totalAnswers + evaluated.length, bestStreak: Math.max(profile.bestStreak, scoring.bestStreak), lastSubmissionAt: now, updatedAt: now });
    return result;
  },
});
