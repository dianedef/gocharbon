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
import "../widgets/gc_button.dart";
import "../widgets/gc_quiz_answer_option.dart";

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
    _fadeCtrl = AnimationController(vsync: this, duration: GcMotion.fast);
    _fade = Tween<double>(begin: 1, end: 0).animate(
      CurvedAnimation(parent: _fadeCtrl, curve: GcMotion.standardCurve),
    );
    _shakeCtrl = AnimationController(vsync: this, duration: GcMotion.standard);
    _shake =
        TweenSequence<double>([
          TweenSequenceItem(
            tween: Tween(begin: GcSpace.zero, end: GcMotion.shakeStrong),
            weight: 1,
          ),
          TweenSequenceItem(
            tween: Tween(
              begin: GcMotion.shakeStrong,
              end: -GcMotion.shakeStrong,
            ),
            weight: 1,
          ),
          TweenSequenceItem(
            tween: Tween(begin: -GcMotion.shakeStrong, end: GcMotion.shakeSoft),
            weight: 1,
          ),
          TweenSequenceItem(
            tween: Tween(begin: GcMotion.shakeSoft, end: GcSpace.zero),
            weight: 1,
          ),
        ]).animate(
          CurvedAnimation(parent: _shakeCtrl, curve: GcMotion.standardCurve),
        );

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
    await Sounds.instance.click();

    setState(() {
      _selected = index;
    });

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
          backgroundColor: GcAppColors.bg,
          body: Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                CircularProgressIndicator(
                  color: _submitting ? GcAppColors.gold : GcAppColors.primary,
                ),
                const SizedBox(height: GcSpace.x3),
                Text(
                  _submitting ? "Calcul du score..." : "Chargement...",
                  style: const TextStyle(
                    fontSize: GcType.body,
                    fontWeight: GcType.bold,
                    color: GcAppColors.textSecondary,
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
          backgroundColor: GcAppColors.bg,
          body: Center(
            child: Padding(
              padding: const EdgeInsets.all(GcSpace.x4),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    _error!,
                    style: const TextStyle(
                      fontSize: GcType.body,
                      fontWeight: GcType.bold,
                      color: GcAppColors.textSecondary,
                    ),
                  ),
                  const SizedBox(height: GcSpace.x4),
                  GcButton.primary(onPressed: _load, label: "Réessayer"),
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
          backgroundColor: GcAppColors.bg,
          body: Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Text(
                  "Aucune question",
                  style: TextStyle(
                    color: GcAppColors.textSecondary,
                    fontWeight: GcType.bold,
                  ),
                ),
                const SizedBox(height: GcSpace.x3),
                GcButton.secondary(
                  onPressed: () => context.pop(),
                  label: "Retour",
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
    final cc = info?.color ?? GcAppColors.primary;
    final cn =
        info?.name ??
        (widget.category == "daily" ? "Défi du Jour" : "Quiz Mixte");
    final isTF = q.isTrueFalse;
    final answered = _selected != null;

    List<Color> optBg(int i) {
      if (!answered) return const [GcAppColors.surface, GcAppColors.surface];
      if (i == _selected) {
        return [
          cc.withValues(alpha: GcOpacity.disabled),
          cc.withValues(alpha: GcOpacity.disabled),
        ];
      }
      return const [GcAppColors.surface, GcAppColors.surface];
    }

    Color optBorder(int i) {
      if (!answered) return GcAppColors.borderMedium;
      if (i == _selected) return cc;
      return GcAppColors.borderLight;
    }

    Color optTextColor(int i) {
      if (!answered) return GcAppColors.textPrimary;
      if (i == _selected) return cc;
      return GcAppColors.textTertiary;
    }

    return SafeArea(
      child: Scaffold(
        backgroundColor: GcAppColors.bg,
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: GcSpace.x4),
          child: Column(
            children: [
              // Top bar
              Row(
                children: [
                  GcIconButton(
                    icon: MdiIcons.close,
                    tooltip: "Quitter le quiz",
                    onPressed: () {
                      _timer?.cancel();
                      unawaited(Sounds.instance.click());
                      if (!mounted) return;
                      context.pop();
                    },
                  ),
                  Expanded(
                    child: Container(
                      height: GcSizes.progressCompact,
                      decoration: BoxDecoration(
                        color: GcAppColors.surface,
                        borderRadius: GcRadii.fullyRounded,
                        border: Border.all(color: GcAppColors.borderLight),
                      ),
                      clipBehavior: Clip.antiAlias,
                      child: Align(
                        alignment: Alignment.centerLeft,
                        child: FractionallySizedBox(
                          widthFactor: prog,
                          child: DecoratedBox(
                            decoration: BoxDecoration(
                              gradient: LinearGradient(
                                colors: [cc, GcAppColors.gold],
                                begin: Alignment.centerLeft,
                                end: Alignment.centerRight,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: GcSpace.x3),
                  Text(
                    "${_currentIndex + 1}/${_questions.length}",
                    style: const TextStyle(
                      fontSize: GcType.caption,
                      fontWeight: GcType.bold,
                      color: GcAppColors.textSecondary,
                    ),
                  ),
                ],
              ),

              const SizedBox(height: GcSpace.x2),

              // Gamification row
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  AppCard(
                    padding: const EdgeInsets.symmetric(
                      horizontal: GcSpace.x3,
                      vertical: GcSpace.twoAndHalf,
                    ),
                    child: Row(
                      children: [
                        Icon(
                          MdiIcons.star,
                          size: GcSpace.x5,
                          color: GcAppColors.gold,
                        ),
                        const SizedBox(width: GcSpace.x2),
                        Text(
                          _score.toString(),
                          style: const TextStyle(
                            fontSize: GcType.body,
                            fontWeight: GcType.black,
                            color: GcAppColors.textPrimary,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    width: GcSizes.iconHero,
                    height: GcSizes.iconHero,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(
                        color: _timed && _timeLeft <= 5
                            ? GcAppColors.error
                            : (_timed ? cc : GcAppColors.borderMedium),
                        width: GcBorders.medium,
                      ),
                    ),
                    child: Center(
                      child: _timed
                          ? Text(
                              "$_timeLeft",
                              style: TextStyle(
                                fontSize: GcType.body,
                                fontWeight: GcType.black,
                                color: _timeLeft <= 5
                                    ? GcAppColors.error
                                    : GcAppColors.textPrimary,
                              ),
                            )
                          : Icon(
                              MdiIcons.infinity,
                              size: GcSizes.iconMedium,
                              color: GcAppColors.textTertiary,
                            ),
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: GcSpace.x3,
                      vertical: GcSpace.twoAndHalf,
                    ),
                    decoration: BoxDecoration(
                      color: _streak > 0
                          ? GcAppColors.gold.withValues(
                              alpha: GcOpacity.disabled,
                            )
                          : GcAppColors.surface,
                      borderRadius: GcRadii.card,
                      border: Border.all(
                        color: _streak > 0
                            ? GcAppColors.gold.withValues(
                                alpha: GcOpacity.disabled,
                              )
                            : GcAppColors.borderLight,
                      ),
                    ),
                    child: Row(
                      children: [
                        Icon(
                          MdiIcons.fire,
                          size: GcSpace.x5,
                          color: _streak > 0
                              ? GcAppColors.gold
                              : GcAppColors.textTertiary,
                        ),
                        const SizedBox(width: GcSpace.x2),
                        Text(
                          "$_streak",
                          style: TextStyle(
                            fontSize: GcType.body,
                            fontWeight: GcType.black,
                            color: _streak > 0
                                ? GcAppColors.gold
                                : GcAppColors.textTertiary,
                          ),
                        ),
                        if (_streak >= 10) const SizedBox(width: GcSpace.x2),
                        if (_streak >= 10)
                          const Text(
                            "x2",
                            style: TextStyle(
                              fontSize: GcType.caption,
                              fontWeight: GcType.black,
                              color: GcAppColors.gold,
                            ),
                          ),
                        if (_streak >= 5 && _streak < 10)
                          const SizedBox(width: GcSpace.x2),
                        if (_streak >= 5 && _streak < 10)
                          const Text(
                            "x1.5",
                            style: TextStyle(
                              fontSize: GcType.caption,
                              fontWeight: GcType.black,
                              color: GcAppColors.gold,
                            ),
                          ),
                      ],
                    ),
                  ),
                ],
              ),

              const SizedBox(height: GcSpace.x3),

              // Question
              Align(
                alignment: Alignment.centerLeft,
                child: Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: GcSpace.x3,
                    vertical: GcSpace.oneAndHalf,
                  ),
                  decoration: BoxDecoration(
                    color: cc.withValues(alpha: GcOpacity.disabled),
                    borderRadius: GcRadii.fullyRounded,
                  ),
                  child: Text(
                    cn,
                    style: TextStyle(
                      fontSize: GcType.caption,
                      fontWeight: GcType.black,
                      color: cc,
                    ),
                  ),
                ),
              ),
              const SizedBox(height: GcSpace.x3),
              AnimatedBuilder(
                animation: Listenable.merge([_fadeCtrl, _shakeCtrl]),
                builder: (context, child) {
                  return Opacity(
                    opacity: 1 - _fade.value,
                    child: Transform.translate(
                      offset: Offset(_shake.value, GcSpace.zero),
                      child: child,
                    ),
                  );
                },
                child: Text(
                  q.text,
                  style: const TextStyle(
                    fontSize: GcType.titleSmall,
                    fontWeight: GcType.black,
                    color: GcAppColors.textPrimary,
                    height: GcType.tightHeight,
                  ),
                ),
              ),

              const SizedBox(height: GcSpace.x3),

              if (answered) ...[
                AppCard(
                  padding: const EdgeInsets.all(GcSpace.x3),
                  borderColor: cc.withValues(alpha: GcOpacity.disabled),
                  child: Row(
                    children: [
                      Icon(MdiIcons.lockCheck, size: GcType.body, color: cc),
                      const SizedBox(width: GcSpace.x2),
                      const Expanded(
                        child: Text(
                          "Réponse enregistrée. Le score sera calculé à la fin du quiz.",
                          style: TextStyle(
                            fontSize: GcType.caption,
                            fontWeight: GcType.bold,
                            color: GcAppColors.textSecondary,
                            height: GcType.bodyHeight,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: GcSpace.x3),
                GcButton.primary(
                  onPressed: _next,
                  label: _currentIndex < _questions.length - 1
                      ? "Question suivante"
                      : "Voir les résultats",
                  icon: _currentIndex < _questions.length - 1
                      ? MdiIcons.arrowRight
                      : MdiIcons.trophy,
                ),
                const SizedBox(height: GcSpace.x3),
              ],

              // Options
              Expanded(
                child: ListView.separated(
                  padding: const EdgeInsets.only(bottom: GcSpace.x4),
                  itemCount: q.options.length,
                  separatorBuilder: (context, index) =>
                      const SizedBox(height: GcSpace.x3),
                  itemBuilder: (context, i) {
                    final opt = q.options[i];
                    return GcQuizAnswerOption(
                      label: String.fromCharCode(65 + i),
                      text: opt,
                      onTap: () => _answer(i),
                      enabled: !answered,
                      selected: i == _selected,
                      showLeading: !isTF,
                      borderColor: optBorder(i),
                      background: optBg(i).first,
                      foreground: optTextColor(i),
                      trailing: answered && i == _selected
                          ? Icon(
                              MdiIcons.checkCircle,
                              size: GcSpace.x5,
                              color: cc,
                            )
                          : null,
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
