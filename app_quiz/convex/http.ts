import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";

const http = httpRouter();

// Deliberately public and data-free. Quiz operations use authenticated Convex
// functions after Firebase token configuration; never expose answer keys via a
// convenience REST endpoint.
http.route({ path: "/health", method: "GET", handler: httpAction(async () => new Response(JSON.stringify({ service: "gocharbon-quiz-convex", status: "ready" }), { headers: { "content-type": "application/json" } })) });

export default http;
