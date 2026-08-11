import { query } from "./_generated/server";
import { v } from "convex/values";
import { CONCRETE_CATEGORIES, publicQuestion } from "./_shared";

const categoryArg = v.union(
  v.literal("finance"), v.literal("marketing"), v.literal("management"),
  v.literal("ecommerce"), v.literal("random"), v.literal("daily"),
);

function deterministicOffset(seed: string, size: number) {
  let value = 0;
  for (const character of seed) value = ((value << 5) - value + character.charCodeAt(0)) | 0;
  return Math.abs(value) % Math.max(size, 1);
}

export const list = query({
  args: { category: categoryArg, limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const requestedLimit = Math.min(Math.max(Math.floor(args.limit ?? 10), 1), 20);
    const categories = args.category === "random" || args.category === "daily"
      ? CONCRETE_CATEGORIES
      : [args.category];
    const all = (await Promise.all(categories.map((category) =>
      ctx.db.query("questions").withIndex("by_category_active", (q) => q.eq("category", category).eq("isActive", true)).collect(),
    ))).flat();
    const seed = args.category === "daily" ? new Date().toISOString().slice(0, 10) : `${Date.now()}`;
    const offset = deterministicOffset(seed, all.length);
    return [...all.slice(offset), ...all.slice(0, offset)].slice(0, requestedLimit).map(publicQuestion);
  },
});
