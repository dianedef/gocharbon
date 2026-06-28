import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

http.route({
  path: "/gamification/push",
  method: "OPTIONS",
  handler: httpAction(async () => {
    return new Response(null, { status: 204, headers: corsHeaders });
  }),
});

http.route({
  path: "/gamification/push",
  method: "POST",
  handler: httpAction(async (ctx, req) => {
    const body = await req.json();
    const userId = typeof body?.userId === "string" ? body.userId : "";

    if (!userId) {
      return new Response(JSON.stringify({ ok: false, error: "Missing userId" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const source = typeof body?.source === "string" ? body.source : undefined;
    const pathProgress = typeof body?.pathProgress === "object" && body?.pathProgress ? body.pathProgress : {};
    const xp = typeof body?.xp === "object" && body?.xp ? body.xp : {};

    const result = await ctx.runMutation(api.gamification.upsertSnapshot, {
      userId,
      source,
      pathProgress,
      xp,
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }),
});

http.route({
  path: "/gamification/pull",
  method: "GET",
  handler: httpAction(async (ctx, req) => {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId") ?? "";

    if (!userId) {
      return new Response(JSON.stringify({ pathProgress: {}, xp: {} }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const result = await ctx.runQuery(api.gamification.getSnapshot, { userId });
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }),
});

export default http;
