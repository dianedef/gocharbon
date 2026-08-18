import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { publicQuestion, requireFirebaseUid } from "./_shared";

const lifetimeMs = 7 * 24 * 60 * 60 * 1000;

function codeFor() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return Array.from(bytes, (value) => alphabet[value % alphabet.length]).join("");
}

async function entryForAttempt(ctx: any, challengeId: any, attempt: any) {
  const profile = await ctx.db
    .query("profiles")
    .withIndex("by_firebase_uid", (q: any) => q.eq("firebaseUid", attempt.firebaseUid))
    .unique();
  if (!profile) throw new Error("PROFILE_REQUIRED");
  return {
    challengeId,
    attemptId: attempt._id,
    firebaseUid: attempt.firebaseUid,
    username: profile.username,
    totalScore: attempt.totalScore,
    correctCount: attempt.correctCount,
    totalQuestions: attempt.answerCount,
    completedAt: attempt.submittedAt,
  };
}

function publicEntry(entry: any) {
  return {
    username: entry.username,
    totalScore: entry.totalScore,
    correctCount: entry.correctCount,
    totalQuestions: entry.totalQuestions,
    completedAt: entry.completedAt,
  };
}

export const create = mutation({
  args: { attemptToken: v.string() },
  handler: async (ctx, args) => {
    const uid = requireFirebaseUid(await ctx.auth.getUserIdentity());
    const attempt = await ctx.db
      .query("attempts")
      .withIndex("by_user_attempt", (q) => q.eq("firebaseUid", uid).eq("attemptToken", args.attemptToken))
      .unique();
    if (!attempt) throw new Error("ATTEMPT_NOT_FOUND");
    if (attempt.answerCount !== 7) throw new Error("CHALLENGE_REQUIRES_SEVEN_QUESTIONS");

    const answers = await ctx.db
      .query("answers")
      .withIndex("by_attempt", (q) => q.eq("attemptId", attempt._id))
      .collect();
    if (answers.length !== attempt.answerCount) throw new Error("ATTEMPT_INCOMPLETE");

    const existingEntry = await ctx.db
      .query("challengeEntries")
      .withIndex("by_attempt", (q) => q.eq("attemptId", attempt._id))
      .first();
    if (existingEntry) {
      const existingChallenge = await ctx.db.get(existingEntry.challengeId);
      if (existingChallenge && existingChallenge.expiresAt > Date.now()) {
        return { code: existingChallenge.code, expiresAt: existingChallenge.expiresAt };
      }
    }

    const now = Date.now();
    let code = codeFor();
    for (let suffix = 0; suffix < 4; suffix += 1) {
      const collision = await ctx.db.query("challenges").withIndex("by_code", (q) => q.eq("code", code)).unique();
      if (!collision) break;
      code = codeFor();
      if (suffix === 3) throw new Error("CHALLENGE_CODE_UNAVAILABLE");
    }

    const challengeId = await ctx.db.insert("challenges", {
      code,
      creatorUid: uid,
      category: attempt.category,
      mode: attempt.mode,
      questionIds: answers.map((answer) => answer.questionId),
      expiresAt: now + lifetimeMs,
      createdAt: now,
    });
    await ctx.db.insert("challengeEntries", await entryForAttempt(ctx, challengeId, attempt));
    return { code, expiresAt: now + lifetimeMs };
  },
});

export const get = query({
  args: { code: v.string() },
  handler: async (ctx, args) => {
    const challenge = await ctx.db.query("challenges").withIndex("by_code", (q) => q.eq("code", args.code)).unique();
    if (!challenge || challenge.expiresAt <= Date.now()) throw new Error("CHALLENGE_NOT_FOUND");
    const questions = await Promise.all(challenge.questionIds.map((id) => ctx.db.get(id)));
    if (questions.some((question) => !question || !question.isActive)) throw new Error("QUESTION_UNAVAILABLE");
    const entries = await ctx.db.query("challengeEntries").withIndex("by_challenge", (q) => q.eq("challengeId", challenge._id)).collect();
    return {
      code: challenge.code,
      category: challenge.category,
      mode: challenge.mode,
      expiresAt: challenge.expiresAt,
      questions: questions.map((question) => publicQuestion(question!)),
      entries: entries.sort((a, b) => b.totalScore - a.totalScore).map(publicEntry),
    };
  },
});

export const join = mutation({
  args: { code: v.string(), attemptToken: v.string() },
  handler: async (ctx, args) => {
    const uid = requireFirebaseUid(await ctx.auth.getUserIdentity());
    const challenge = await ctx.db.query("challenges").withIndex("by_code", (q) => q.eq("code", args.code)).unique();
    if (!challenge || challenge.expiresAt <= Date.now()) throw new Error("CHALLENGE_NOT_FOUND");
    const attempt = await ctx.db.query("attempts").withIndex("by_user_attempt", (q) => q.eq("firebaseUid", uid).eq("attemptToken", args.attemptToken)).unique();
    if (!attempt) throw new Error("ATTEMPT_NOT_FOUND");
    const entries = await ctx.db.query("challengeEntries").withIndex("by_challenge", (q) => q.eq("challengeId", challenge._id)).collect();
    const mine = entries.find((entry) => entry.firebaseUid === uid);
    if (mine) {
      if (mine.attemptId === attempt?._id) return { ...challenge, entries: entries.map(publicEntry) };
      throw new Error("CHALLENGE_ALREADY_JOINED");
    }
    if (entries.length >= 2) throw new Error("CHALLENGE_FULL");

    if (attempt.category !== challenge.category || attempt.mode !== challenge.mode) throw new Error("CHALLENGE_RULES_MISMATCH");
    const answers = await ctx.db.query("answers").withIndex("by_attempt", (q) => q.eq("attemptId", attempt._id)).collect();
    const expected = new Set(challenge.questionIds.map(String));
    if (answers.length !== expected.size || answers.some((answer) => !expected.has(String(answer.questionId)))) throw new Error("CHALLENGE_QUESTIONS_MISMATCH");

    const entry = await entryForAttempt(ctx, challenge._id, attempt);
    await ctx.db.insert("challengeEntries", entry);
    return { ...challenge, entries: [...entries, entry].sort((a, b) => b.totalScore - a.totalScore).map(publicEntry) };
  },
});
