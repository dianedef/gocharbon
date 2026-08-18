import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { publicProfile, requireFirebaseUid } from "./_shared";

const AVATAR_COLORS = ["#4F46E5", "#3B82F6", "#EC4899", "#8B5CF6", "#F59E0B", "#10B981", "#EF4444", "#06B6D4"];

export const ensureMe = mutation({
  args: { username: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const uid = requireFirebaseUid(await ctx.auth.getUserIdentity());
    const existing = await ctx.db.query("profiles").withIndex("by_firebase_uid", (q) => q.eq("firebaseUid", uid)).unique();
    if (existing) return publicProfile(existing);
    const now = Date.now();
    const username = (args.username ?? "").trim().slice(0, 32) || "Quizzeur";
    const profileId = await ctx.db.insert("profiles", {
      firebaseUid: uid, username, avatarColor: AVATAR_COLORS[uid.length % AVATAR_COLORS.length],
      totalScore: 0, xp: 0, level: 1, levelName: "Débutant", badges: [], totalQuizzes: 0,
      correctAnswers: 0, totalAnswers: 0, bestStreak: 0, createdAt: now, updatedAt: now,
    });
    return publicProfile((await ctx.db.get(profileId))!);
  },
});

export const me = query({
  args: {},
  handler: async (ctx) => {
    const uid = requireFirebaseUid(await ctx.auth.getUserIdentity());
    const profile = await ctx.db.query("profiles").withIndex("by_firebase_uid", (q) => q.eq("firebaseUid", uid)).unique();
    return profile ? publicProfile(profile) : null;
  },
});
