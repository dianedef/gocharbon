import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  gamificationSnapshots: defineTable({
    userId: v.string(),
    source: v.optional(v.string()),
    pathProgress: v.any(),
    xp: v.any(),
    updatedAt: v.number(),
  }).index("by_userId", ["userId"]),
});
