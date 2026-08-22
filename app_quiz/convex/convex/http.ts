import { anyApi, httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { BADGES } from "./_shared";

const http = httpRouter();

const jsonHeaders = {
  "content-type": "application/json",
  "access-control-allow-origin": "*",
  "access-control-allow-headers": "authorization, content-type",
  "access-control-allow-methods": "GET, POST, OPTIONS",
};

function options(path: string) {
  http.route({
    path,
    method: "OPTIONS",
    handler: httpAction(async () => new Response(null, { status: 204, headers: jsonHeaders })),
  });
}

function json(value: unknown, status = 200) {
  return new Response(JSON.stringify(value), { status, headers: jsonHeaders });
}

function errorResponse(error: unknown) {
  const message = error instanceof Error ? error.message : "REQUEST_FAILED";
  const status = message === "AUTH_REQUIRED" ? 401 : 400;
  return json({ error: message }, status);
}

function queryNumber(request: Request, name: string, fallback: number) {
  const raw = new URL(request.url).searchParams.get(name);
  const value = raw == null ? fallback : Number(raw);
  return Number.isFinite(value) ? value : fallback;
}

function toQuestion(question: any) {
  return {
    id: question.id,
    text: question.text,
    type: question.kind,
    category: question.category,
    difficulty: question.difficulty,
    options: question.options,
  };
}

function toProfile(profile: any) {
  return {
    user_id: profile.userId,
    username: profile.username,
    avatar_color: profile.avatarColor,
    total_score: profile.totalScore,
    xp: profile.xp,
    level: profile.level,
    level_name: profile.levelName,
    badges: profile.badges,
    stats: {
      total_quizzes: profile.stats.totalQuizzes,
      correct_answers: profile.stats.correctAnswers,
      total_answers: profile.stats.totalAnswers,
      best_streak: profile.stats.bestStreak,
    },
  };
}

function toQuizResult(result: any) {
  return {
    attempt_token: result.attemptToken,
    total_score: result.totalScore,
    base_score: result.baseScore,
    time_bonus: result.timeBonus,
    streak_bonus: result.streakBonus,
    xp_gained: result.xpGained,
    correct_count: result.correctCount,
    total_questions: result.totalQuestions,
    best_streak: result.bestStreak,
    streak_multiplier: result.streakMultiplier,
    new_badges: result.newBadges,
    level_up: result.levelUp,
    new_level: result.newLevel,
    new_level_name: result.newLevelName,
    category: result.category,
    course_recommendations: result.courseRecommendations,
    recommendation_context: result.recommendationContext
      ? {
          target_category: result.recommendationContext.targetCategory,
          target_category_label: result.recommendationContext.targetCategoryLabel,
          target_level: result.recommendationContext.targetLevel,
          eyebrow: result.recommendationContext.eyebrow,
          title: result.recommendationContext.title,
          summary: result.recommendationContext.summary,
          focus: result.recommendationContext.focus,
          reason: result.recommendationContext.reason,
          cta_label: result.recommendationContext.ctaLabel,
        }
      : undefined,
    answers: result.answers,
  };
}

function toChallenge(challenge: any) {
  return {
    code: challenge.code,
    category: challenge.category,
    mode: challenge.mode,
    expires_at: challenge.expiresAt,
    questions: challenge.questions?.map(toQuestion) ?? [],
    entries: (challenge.entries ?? []).map((entry: any) => ({
      username: entry.username,
      total_score: entry.totalScore,
      correct_count: entry.correctCount,
      total_questions: entry.totalQuestions,
      completed_at: entry.completedAt,
    })),
  };
}

http.route({
  path: "/questions",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    try {
      const url = new URL(request.url);
      const category = url.searchParams.get("category") ?? "random";
      const questions = await (ctx as any).runQuery(anyApi.questions.list, {
        category,
        limit: queryNumber(request, "count", 10),
      });
      return json(questions.map(toQuestion));
    } catch (error) {
      return errorResponse(error);
    }
  }),
});

http.route({
  path: "/daily-challenge",
  method: "GET",
  handler: httpAction(async (ctx) => {
    try {
      const questions = await (ctx as any).runQuery(anyApi.questions.list, {
        category: "daily",
        limit: 10,
      });
      return json({ date: new Date().toISOString().slice(0, 10), questions: questions.map(toQuestion) });
    } catch (error) {
      return errorResponse(error);
    }
  }),
});

http.route({
  path: "/profile",
  method: "GET",
  handler: httpAction(async (ctx) => {
    try {
      let profile = await (ctx as any).runQuery(anyApi.profiles.me, {});
      if (!profile) profile = await (ctx as any).runMutation(anyApi.profiles.ensureMe, {});
      return json(toProfile(profile));
    } catch (error) {
      return errorResponse(error);
    }
  }),
});

http.route({
  path: "/leaderboard",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    try {
      const entries = await (ctx as any).runQuery(anyApi.leaderboard.list, {
        limit: queryNumber(request, "limit", 50),
      });
      return json(entries.map((entry: any) => ({
        rank: entry.rank,
        user_id: entry.userId ?? "",
        username: entry.username,
        avatar_color: entry.avatarColor,
        total_score: entry.totalScore,
        level: entry.level,
        level_name: entry.levelName,
      })));
    } catch (error) {
      return errorResponse(error);
    }
  }),
});

http.route({
  path: "/leaderboard/me",
  method: "GET",
  handler: httpAction(async (ctx) => {
    try {
      const rank = await (ctx as any).runQuery(anyApi.leaderboard.myRank, {});
      return json({ rank: rank.rank, total_score: rank.totalScore });
    } catch (error) {
      return errorResponse(error);
    }
  }),
});

http.route({
  path: "/badges",
  method: "GET",
  handler: httpAction(async () => json(BADGES)),
});

http.route({
  path: "/notifications/leaderboard-check",
  method: "POST",
  handler: httpAction(async (ctx) => {
    try {
      await (ctx as any).auth.getUserIdentity();
      return json({ ok: true });
    } catch (error) {
      return errorResponse(error);
    }
  }),
});

http.route({
  path: "/quiz/submit",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = (await request.json()) as any;
      const answers = Array.isArray(body.answers)
        ? body.answers.map((answer: any) => ({
            questionId: answer.question_id,
            selectedAnswer: Number(answer.selected_answer),
            timeTakenMs: Math.round(Number(answer.time_taken ?? 0) * 1000),
          }))
        : [];
      const result = await (ctx as any).runMutation(anyApi.submissions.submit, {
        attemptToken: body.attempt_token,
        category: body.category,
        mode: body.mode,
        answers,
      });
      return json(toQuizResult(result));
    } catch (error) {
      return errorResponse(error);
    }
  }),
});

http.route({
  path: "/challenges/create",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = (await request.json()) as any;
      const challenge = await (ctx as any).runMutation(anyApi.challenges.create, {
        attemptToken: body.attempt_token,
      });
      return json({ code: challenge.code, expires_at: challenge.expiresAt });
    } catch (error) {
      return errorResponse(error);
    }
  }),
});

http.route({
  path: "/challenges/get",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    try {
      const code = new URL(request.url).searchParams.get("code") ?? "";
      const challenge = await (ctx as any).runQuery(anyApi.challenges.get, { code });
      return json(toChallenge(challenge));
    } catch (error) {
      return errorResponse(error);
    }
  }),
});

http.route({
  path: "/challenges/join",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = (await request.json()) as any;
      const challenge = await (ctx as any).runMutation(anyApi.challenges.join, {
        code: body.code,
        attemptToken: body.attempt_token,
      });
      const full = await (ctx as any).runQuery(anyApi.challenges.get, { code: challenge.code });
      return json(toChallenge(full));
    } catch (error) {
      return errorResponse(error);
    }
  }),
});

http.route({
  path: "/health",
  method: "GET",
  handler: httpAction(async () => json({ service: "gocharbon-quiz-convex", status: "ready" })),
});

for (const path of [
  "/questions",
  "/daily-challenge",
  "/profile",
  "/leaderboard",
  "/leaderboard/me",
  "/badges",
  "/notifications/leaderboard-check",
  "/quiz/submit",
  "/challenges/create",
  "/challenges/get",
  "/challenges/join",
  "/health",
]) options(path);

export default http;
