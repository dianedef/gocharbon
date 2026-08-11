import "dart:async";
import "dart:math";

import "package:flutter/material.dart";
import "package:flutter_riverpod/flutter_riverpod.dart";
import "package:go_router/go_router.dart";
import "package:flutter_material_design_icons/flutter_material_design_icons.dart";

import "../../models/api_question.dart";
import "../../models/quiz_answer.dart";
import "../../models/quiz_result.dart";
import "../../services/sounds/sounds.dart";
import "../../state/providers.dart";
import "../../theme/app_colors.dart";
import "../../theme/category_config.dart";
import "../widgets/app_card.dart";
import "../widgets/depth_button.dart";

class QuizScreen extends ConsumerStatefulWidget {
  const QuizScreen({super.key, required this.category, required this.mode});

  final String category;
  final String mode; // timed | relaxed

  @override
  ConsumerState<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends ConsumerState<QuizScreen>
    with TickerProviderStateMixin {
  static const _timerSeconds = 15;

  List<ApiQuestion> _questions = const [];
  int _currentIndex = 0;
  int? _selected;
  bool? _correct;
  int _streak = 0;
  int _score = 0;
  List<QuizAnswer> _answers = [];
  int _timeLeft = _timerSeconds;
  bool _loading = true;
  bool _submitting = false;
  String? _error;
  DateTime _questionStart = DateTime.now();

  Timer? _timer;

  late final AnimationController _fadeCtrl;
  late final Animation<double> _fade;
  late final AnimationController _shakeCtrl;
  late final Animation<double> _shake;

  bool get _timed => widget.mode == "timed";

  @override
  void initState() {
    super.initState();
    _fadeCtrl = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 120),
    );
    _fade = Tween<double>(
      begin: 1,
      end: 0,
    ).animate(CurvedAnimation(parent: _fadeCtrl, curve: Curves.easeOut));
    _shakeCtrl = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 200),
    );
    _shake = TweenSequence<double>([
      TweenSequenceItem(tween: Tween(begin: 0, end: 10), weight: 1),
      TweenSequenceItem(tween: Tween(begin: 10, end: -10), weight: 1),
      TweenSequenceItem(tween: Tween(begin: -10, end: 6), weight: 1),
      TweenSequenceItem(tween: Tween(begin: 6, end: 0), weight: 1),
    ]).animate(CurvedAnimation(parent: _shakeCtrl, curve: Curves.linear));

    _load();
  }

  @override
  void dispose() {
    _timer?.cancel();
    _fadeCtrl.dispose();
    _shakeCtrl.dispose();
    super.dispose();
  }

  bool get _reduceMotion {
    final mq = MediaQuery.maybeOf(context);
    return mq?.disableAnimations ?? false;
  }

  Future<void> _load() async {
    setState(() {
      _loading = true;
      _submitting = false;
      _error = null;
      _selected = null;
      _correct = null;
      _streak = 0;
      _score = 0;
      _answers = [];
      _currentIndex = 0;
    });

    try {
      final api = ref.read(apiProvider);
      final questions = widget.category == "daily"
          ? (await api.getDailyChallenge()).questions
          : await api.getQuestions(
              category: widget.category.isEmpty ? "random" : widget.category,
              count: 10,
            );

      setState(() {
        _questions = questions;
        _questionStart = DateTime.now();
      });
      _startTimer();
    } catch (_) {
      setState(() => _error = "Impossible de charger ce quiz.");
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  void _startTimer() {
    _timer?.cancel();
    if (!_timed || _loading || _selected != null || _questions.isEmpty) return;
    setState(() => _timeLeft = _timerSeconds);
    _timer = Timer.periodic(const Duration(seconds: 1), (t) async {
      if (!mounted) return;
      setState(() {
        _timeLeft = max(0, _timeLeft - 1);
      });
      if (_timeLeft <= 6 && _timeLeft > 1) {
        await Sounds.instance.tick();
      }
      if (_timeLeft <= 0) {
        t.cancel();
        _handleTimeUp();
      }
    });
  }

  Future<void> _handleTimeUp() async {
    if (_selected != null) return;
    await Sounds.instance.wrong();
    final q = _questions[_currentIndex];
    setState(() {
      _selected = -1;
      _correct = false;
      _streak = 0;
      _answers = [
        ..._answers,
        QuizAnswer(
          questionId: q.id,
          selectedAnswer: -1,
          timeTakenSeconds: _timerSeconds.toDouble(),
        ),
      ];
    });
    _shakeOnce();
  }

  void _shakeOnce() {
    if (_reduceMotion) return;
    _shakeCtrl.forward(from: 0);
  }

  Future<void> _answer(int index) async {
    if (_selected != null) return;
    _timer?.cancel();

    final q = _questions[_currentIndex];
    final timeTaken =
        DateTime.now().difference(_questionStart).inMilliseconds / 1000.0;
    final ok = index == q.correctAnswer;

    if (ok) {
      await Sounds.instance.correct();
    } else {
      await Sounds.instance.wrong();
    }

    setState(() {
      _selected = index;
      _correct = ok;
    });

    if (ok) {
      final newStreak = _streak + 1;
      var points = 100;
      if (_timed) {
        points += ((max(0.0, _timerSeconds - timeTaken) * 50) / _timerSeconds)
            .round();
      }
      if (newStreak >= 10) {
        points += 100;
      } else if (newStreak >= 5) {
        points += 50;
      }

      setState(() {
        _streak = newStreak;
        _score += points;
      });
      if (newStreak == 5 || newStreak == 10) {
        await Sounds.instance.streak();
      }
    } else {
      setState(() => _streak = 0);
      _shakeOnce();
    }

    setState(() {
      _answers = [
        ..._answers,
        QuizAnswer(
          questionId: q.id,
          selectedAnswer: index,
          timeTakenSeconds: timeTaken,
        ),
      ];
    });
  }

  Future<void> _next() async {
    await Sounds.instance.click();
    if (_currentIndex < _questions.length - 1) {
      if (_reduceMotion) {
        setState(() {
          _currentIndex += 1;
          _selected = null;
          _correct = null;
          _questionStart = DateTime.now();
        });
        _startTimer();
        return;
      }

      await _fadeCtrl.forward(from: 0);
      if (!mounted) return;
      setState(() {
        _currentIndex += 1;
        _selected = null;
        _correct = null;
        _questionStart = DateTime.now();
      });
      await _fadeCtrl.reverse(from: 1);
      _startTimer();
      return;
    }

    await _submit();
  }

  Future<void> _submit() async {
    setState(() => _submitting = true);
    await Sounds.instance.complete();
    try {
      final session = await ref.read(sessionProvider.future);
      final effectiveCategory =
          (widget.category == "daily" || widget.category == "random")
          ? "random"
          : widget.category;
      final result = await ref
          .read(apiProvider)
          .submitQuiz(
            userId: session.userId,
            userSecret: session.userSecret,
            category: effectiveCategory.isEmpty ? "random" : effectiveCategory,
            mode: widget.mode,
            answers: _answers,
          );

      final stored = QuizResult(
        totalScore: result.totalScore,
        baseScore: result.baseScore,
        timeBonus: result.timeBonus,
        streakBonus: result.streakBonus,
        xpGained: result.xpGained,
        correctCount: result.correctCount,
        totalQuestions: result.totalQuestions,
        bestStreak: result.bestStreak,
        streakMultiplier: result.streakMultiplier,
        newBadges: result.newBadges,
        levelUp: result.levelUp,
        newLevel: result.newLevel,
        newLevelName: result.newLevelName,
        courseRecommendations: result.courseRecommendations,
        recommendationContext: result.recommendationContext,
        categoryDisplay: widget.category.isEmpty ? "random" : widget.category,
      );

      await ref.read(storageProvider).setLastResult(stored);
      if (!mounted) return;
      context.go("/quiz/results");
    } catch (_) {
      if (!mounted) return;
      setState(() => _submitting = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_loading || _submitting) {
      return SafeArea(
        child: Scaffold(
          backgroundColor: AppColors.bg,
          body: Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                CircularProgressIndicator(
                  color: _submitting ? AppColors.gold : AppColors.primary,
                ),
                const SizedBox(height: 12),
                Text(
                  _submitting ? "Calcul du score..." : "Chargement...",
                  style: const TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w600,
                    color: AppColors.textSecondary,
                  ),
                ),
              ],
            ),
          ),
        ),
      );
    }

    if (_error != null) {
      return SafeArea(
        child: Scaffold(
          backgroundColor: AppColors.bg,
          body: Center(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    _error!,
                    style: const TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.w600,
                      color: AppColors.textSecondary,
                    ),
                  ),
                  const SizedBox(height: 16),
                  DepthButton(
                    onPressed: _load,
                    colors: const [AppColors.primary, AppColors.primaryShadow],
                    shadowColor: AppColors.primaryShadow,
                    borderRadius: BorderRadius.circular(14),
                    child: const Padding(
                      padding: EdgeInsets.symmetric(
                        horizontal: 24,
                        vertical: 10,
                      ),
                      child: Text(
                        "Réessayer",
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      );
    }

    if (_questions.isEmpty) {
      return SafeArea(
        child: Scaffold(
          backgroundColor: AppColors.bg,
          body: Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Text(
                  "Aucune question",
                  style: TextStyle(
                    color: AppColors.textSecondary,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                const SizedBox(height: 12),
                DepthButton(
                  onPressed: () => context.pop(),
                  colors: const [AppColors.primary, AppColors.primaryShadow],
                  shadowColor: AppColors.primaryShadow,
                  borderRadius: BorderRadius.circular(14),
                  child: const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 24, vertical: 10),
                    child: Text(
                      "Retour",
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      );
    }

    final q = _questions[_currentIndex];
    final prog = (_currentIndex + 1) / _questions.length;
    final info = CategoryConfig.byId[widget.category];
    final cc = info?.color ?? AppColors.primary;
    final cn =
        info?.name ??
        (widget.category == "daily" ? "Défi du Jour" : "Quiz Mixte");
    final isTF = q.isTrueFalse;
    final answered = _selected != null;

    List<Color> optBg(int i) {
      if (!answered) return const [AppColors.surface, AppColors.surface];
      if (i == q.correctAnswer) {
        return [
          AppColors.success.withValues(alpha: 0.2),
          AppColors.success.withValues(alpha: 0.1),
        ];
      }
      if (i == _selected && _correct == false) {
        return [
          AppColors.error.withValues(alpha: 0.2),
          AppColors.error.withValues(alpha: 0.1),
        ];
      }
      return const [AppColors.surface, AppColors.surface];
    }

    Color optBorder(int i) {
      if (!answered) return AppColors.borderMedium;
      if (i == q.correctAnswer) return AppColors.success;
      if (i == _selected && _correct == false) return AppColors.error;
      return AppColors.borderLight;
    }

    Color optTextColor(int i) {
      if (!answered) return AppColors.textPrimary;
      if (i == q.correctAnswer) return AppColors.success;
      if (i == _selected && _correct == false) return AppColors.error;
      return AppColors.textTertiary;
    }

    return SafeArea(
      child: Scaffold(
        backgroundColor: AppColors.bg,
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Column(
            children: [
              // Top bar
              Row(
                children: [
                  SizedBox(
                    width: 44,
                    height: 44,
                    child: IconButton(
                      onPressed: () {
                        _timer?.cancel();
                        unawaited(Sounds.instance.click());
                        if (!mounted) return;
                        context.pop();
                      },
                      icon: Icon(
                        MdiIcons.close,
                        size: 22,
                        color: AppColors.textTertiary,
                      ),
                    ),
                  ),
                  Expanded(
                    child: Container(
                      height: 10,
                      decoration: BoxDecoration(
                        color: AppColors.surface,
                        borderRadius: BorderRadius.circular(999),
                        border: Border.all(color: AppColors.borderLight),
                      ),
                      clipBehavior: Clip.antiAlias,
                      child: Align(
                        alignment: Alignment.centerLeft,
                        child: FractionallySizedBox(
                          widthFactor: prog,
                          child: DecoratedBox(
                            decoration: BoxDecoration(
                              gradient: LinearGradient(
                                colors: [cc, AppColors.gold],
                                begin: Alignment.centerLeft,
                                end: Alignment.centerRight,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Text(
                    "${_currentIndex + 1}/${_questions.length}",
                    style: const TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w700,
                      color: AppColors.textSecondary,
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 8),

              // Gamification row
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  AppCard(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 12,
                      vertical: 10,
                    ),
                    borderRadius: BorderRadius.circular(14),
                    child: Row(
                      children: [
                        Icon(MdiIcons.star, size: 20, color: AppColors.gold),
                        const SizedBox(width: 6),
                        Text(
                          _score.toString(),
                          style: const TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w900,
                            color: AppColors.textPrimary,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    width: 44,
                    height: 44,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(
                        color: _timed && _timeLeft <= 5
                            ? AppColors.error
                            : (_timed ? cc : AppColors.borderMedium),
                        width: 2,
                      ),
                    ),
                    child: Center(
                      child: _timed
                          ? Text(
                              "$_timeLeft",
                              style: TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.w900,
                                color: _timeLeft <= 5
                                    ? AppColors.error
                                    : AppColors.textPrimary,
                              ),
                            )
                          : Icon(
                              MdiIcons.infinity,
                              size: 26,
                              color: AppColors.textTertiary,
                            ),
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 12,
                      vertical: 10,
                    ),
                    decoration: BoxDecoration(
                      color: _streak > 0
                          ? AppColors.gold.withValues(alpha: 0.1)
                          : AppColors.surface,
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(
                        color: _streak > 0
                            ? AppColors.gold.withValues(alpha: 0.2)
                            : AppColors.borderLight,
                      ),
                    ),
                    child: Row(
                      children: [
                        Icon(
                          MdiIcons.fire,
                          size: 20,
                          color: _streak > 0
                              ? AppColors.gold
                              : AppColors.textTertiary,
                        ),
                        const SizedBox(width: 6),
                        Text(
                          "$_streak",
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w900,
                            color: _streak > 0
                                ? AppColors.gold
                                : AppColors.textTertiary,
                          ),
                        ),
                        if (_streak >= 10) const SizedBox(width: 6),
                        if (_streak >= 10)
                          const Text(
                            "x2",
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.w900,
                              color: AppColors.gold,
                            ),
                          ),
                        if (_streak >= 5 && _streak < 10)
                          const SizedBox(width: 6),
                        if (_streak >= 5 && _streak < 10)
                          const Text(
                            "x1.5",
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.w900,
                              color: AppColors.gold,
                            ),
                          ),
                      ],
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 12),

              // Question
              Align(
                alignment: Alignment.centerLeft,
                child: Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 12,
                    vertical: 6,
                  ),
                  decoration: BoxDecoration(
                    color: cc.withValues(alpha: 0.18),
                    borderRadius: BorderRadius.circular(999),
                  ),
                  child: Text(
                    cn,
                    style: TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w800,
                      color: cc,
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 10),
              AnimatedBuilder(
                animation: Listenable.merge([_fadeCtrl, _shakeCtrl]),
                builder: (context, child) {
                  return Opacity(
                    opacity: 1 - _fade.value,
                    child: Transform.translate(
                      offset: Offset(_shake.value, 0),
                      child: child,
                    ),
                  );
                },
                child: Text(
                  q.text,
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w900,
                    color: AppColors.textPrimary,
                    height: 1.2,
                  ),
                ),
              ),

              const SizedBox(height: 12),

              if (answered) ...[
                AppCard(
                  padding: const EdgeInsets.all(12),
                  borderRadius: BorderRadius.circular(14),
                  borderColor: (_correct ?? false)
                      ? AppColors.success.withValues(alpha: 0.5)
                      : AppColors.error.withValues(alpha: 0.5),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Icon(
                        (_correct ?? false)
                            ? MdiIcons.checkCircle
                            : MdiIcons.closeCircle,
                        size: 16,
                        color: (_correct ?? false)
                            ? AppColors.success
                            : AppColors.error,
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(
                          q.explanation,
                          style: const TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w600,
                            color: AppColors.textSecondary,
                            height: 1.35,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 10),
                DepthButton(
                  onPressed: _next,
                  colors: _currentIndex == _questions.length - 1
                      ? const [AppColors.gold, AppColors.goldShadow]
                      : const [AppColors.primary, AppColors.primaryShadow],
                  shadowColor: _currentIndex == _questions.length - 1
                      ? AppColors.goldShadow
                      : AppColors.primaryShadow,
                  borderRadius: BorderRadius.circular(16),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          _currentIndex < _questions.length - 1
                              ? "Question Suivante"
                              : "Voir les résultats",
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w800,
                            color: _currentIndex == _questions.length - 1
                                ? Colors.black
                                : Colors.white,
                          ),
                        ),
                        const SizedBox(width: 8),
                        Icon(
                          _currentIndex < _questions.length - 1
                              ? MdiIcons.arrowRight
                              : MdiIcons.trophy,
                          size: 20,
                          color: _currentIndex == _questions.length - 1
                              ? Colors.black
                              : Colors.white,
                        ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 10),
              ],

              // Options
              Expanded(
                child: ListView.separated(
                  padding: const EdgeInsets.only(bottom: 16),
                  itemCount: q.options.length,
                  separatorBuilder: (context, index) =>
                      const SizedBox(height: 10),
                  itemBuilder: (context, i) {
                    final opt = q.options[i];
                    return GestureDetector(
                      onTap: answered ? null : () => _answer(i),
                      child: Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: optBorder(i)),
                        ),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(16),
                          child: DecoratedBox(
                            decoration: BoxDecoration(
                              gradient: LinearGradient(
                                colors: optBg(i),
                                begin: Alignment.topLeft,
                                end: Alignment.bottomRight,
                              ),
                            ),
                            child: Padding(
                              padding: const EdgeInsets.symmetric(
                                horizontal: 14,
                                vertical: 14,
                              ),
                              child: Row(
                                children: [
                                  if (!isTF) ...[
                                    Container(
                                      width: 28,
                                      height: 28,
                                      decoration: BoxDecoration(
                                        color: Colors.transparent,
                                        borderRadius: BorderRadius.circular(14),
                                        border: Border.all(
                                          color: optTextColor(
                                            i,
                                          ).withValues(alpha: 0.5),
                                        ),
                                      ),
                                      child: Center(
                                        child: Text(
                                          String.fromCharCode(65 + i),
                                          style: TextStyle(
                                            fontWeight: FontWeight.w900,
                                            color: optTextColor(i),
                                          ),
                                        ),
                                      ),
                                    ),
                                    const SizedBox(width: 10),
                                  ],
                                  Expanded(
                                    child: Text(
                                      opt,
                                      maxLines: 2,
                                      overflow: TextOverflow.ellipsis,
                                      style: TextStyle(
                                        fontSize: 15,
                                        fontWeight: FontWeight.w700,
                                        color: optTextColor(i),
                                        height: 1.2,
                                      ),
                                    ),
                                  ),
                                  if (answered && i == q.correctAnswer)
                                    Icon(
                                      MdiIcons.checkCircle,
                                      size: 20,
                                      color: AppColors.success,
                                    ),
                                  if (answered &&
                                      i == _selected &&
                                      _correct == false)
                                    Icon(
                                      MdiIcons.closeCircle,
                                      size: 20,
                                      color: AppColors.error,
                                    ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
