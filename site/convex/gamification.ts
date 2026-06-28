import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const upsertSnapshot = mutation({
  args: {
    userId: v.string(),
    source: v.optional(v.string()),
    pathProgress: v.any(),
    xp: v.any(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("gamificationSnapshots")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .first();

    const doc = {
      userId: args.userId,
      source: args.source,
      pathProgress: args.pathProgress,
      xp: args.xp,
      updatedAt: Date.now(),
    };

    if (existing) {
      await ctx.db.patch(existing._id, doc);
      return { ok: true, updated: true };
    }

    await ctx.db.insert("gamificationSnapshots", doc);
    return { ok: true, created: true };
  },
});

export const getSnapshot = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const existing = await ctx.db
      .query("gamificationSnapshots")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .first();

    if (!existing) {
      return {
        pathProgress: {},
        xp: {},
      };
    }

    return {
      pathProgress: existing.pathProgress ?? {},
      xp: existing.xp ?? {},
    };
  },
});
