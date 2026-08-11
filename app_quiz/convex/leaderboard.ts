import { query } from "./_generated/server";
import { v } from "convex/values";
import { requireFirebaseUid } from "./_shared";

async function ranked(ctx: any) {
  return (await ctx.db.query("profiles").collect())
    .sort((a: any, b: any) => b.totalScore - a.totalScore || a.updatedAt - b.updatedAt);
}

export const list = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => (await ranked(ctx)).slice(0, Math.min(Math.max(Math.floor(args.limit ?? 50), 1), 200))
    .map((profile: any, index: number) => ({ rank: index + 1, username: profile.username, avatarColor: profile.avatarColor, totalScore: profile.totalScore, level: profile.level, levelName: profile.levelName })),
});

export const myRank = query({
  args: {},
  handler: async (ctx) => {
    const uid = requireFirebaseUid(await ctx.auth.getUserIdentity());
    const profiles = await ranked(ctx);
    const index = profiles.findIndex((profile: any) => profile.firebaseUid === uid);
    return index < 0 ? { rank: 0, totalScore: 0 } : { rank: index + 1, totalScore: profiles[index].totalScore };
  },
});
