import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

const category = v.union(
  v.literal("finance"),
  v.literal("marketing"),
  v.literal("management"),
  v.literal("ecommerce"),
);

const question = v.object({
  sourceId: v.string(),
  text: v.string(),
  kind: v.union(v.literal("mcq"), v.literal("truefalse")),
  category,
  difficulty: v.union(v.literal("easy"), v.literal("medium"), v.literal("hard")),
  options: v.array(v.string()),
  correctAnswer: v.number(),
  explanation: v.string(),
});

const course = v.object({
  sourceId: v.string(),
  title: v.string(),
  category,
  level: v.union(v.literal("beginner"), v.literal("advanced")),
  description: v.string(),
  url: v.string(),
});

export const importLegacy = internalMutation({
  args: { questions: v.array(question), courses: v.array(course) },
  handler: async (ctx, args) => {
    const now = Date.now();
    let insertedQuestions = 0;
    let updatedQuestions = 0;
    for (const item of args.questions) {
      const existing = await ctx.db
        .query("questions")
        .withIndex("by_source_id", (query) => query.eq("sourceId", item.sourceId))
        .unique();
      if (existing) {
        await ctx.db.patch(existing._id, { ...item, isActive: true, updatedAt: now });
        updatedQuestions += 1;
      } else {
        await ctx.db.insert("questions", { ...item, isActive: true, createdAt: now, updatedAt: now });
        insertedQuestions += 1;
      }
    }

    let insertedCourses = 0;
    let updatedCourses = 0;
    for (const item of args.courses) {
      const existing = await ctx.db
        .query("courses")
        .withIndex("by_source_id", (query) => query.eq("sourceId", item.sourceId))
        .unique();
      if (existing) {
        await ctx.db.patch(existing._id, { ...item, isActive: true });
        updatedCourses += 1;
      } else {
        await ctx.db.insert("courses", { ...item, isActive: true });
        insertedCourses += 1;
      }
    }

    return { insertedQuestions, updatedQuestions, insertedCourses, updatedCourses };
  },
});
