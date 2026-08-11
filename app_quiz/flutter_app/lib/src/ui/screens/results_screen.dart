import "dart:async";

import "package:flutter/material.dart";
import "package:flutter_riverpod/flutter_riverpod.dart";
import "package:go_router/go_router.dart";
import "package:flutter_material_design_icons/flutter_material_design_icons.dart";
import "package:share_plus/share_plus.dart";
import "package:url_launcher/url_launcher.dart";

import "../../assets/app_images.dart";
import "../../models/course.dart";
import "../../models/quiz_result.dart";
import "../../services/notifications/notifications.dart";
import "../../services/sounds/sounds.dart";
import "../../state/providers.dart";
import "../../theme/app_colors.dart";
import "../../theme/category_config.dart";
import "../../utils/format_utils.dart";
import "../../utils/icon_utils.dart";
import "../widgets/depth_button.dart";

class ResultsScreen extends ConsumerStatefulWidget {
  const ResultsScreen({super.key});

  @override
  ConsumerState<ResultsScreen> createState() => _ResultsScreenState();
}

class _ResultsScreenState extends ConsumerState<ResultsScreen>
    with TickerProviderStateMixin {
  QuizResult? _result;
  bool _loading = true;
  int _displayScore = 0;
  Timer? _scoreTimer;
  bool _started = false;

  late final AnimationController _scaleCtrl;
  late final Animation<double> _scale;
  late final AnimationController _fadeCtrl;
  late final Animation<double> _fade;

  @override
  void initState() {
    super.initState();
    _scaleCtrl = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 500),
    );
    _fadeCtrl = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 500),
    );
    _scale = CurvedAnimation(parent: _scaleCtrl, curve: Curves.easeOutBack);
    _fade = CurvedAnimation(parent: _fadeCtrl, curve: Curves.easeOut);
    _load();
  }

  @override
  void dispose() {
    _scoreTimer?.cancel();
    _scaleCtrl.dispose();
    _fadeCtrl.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    final result = await ref.read(storageProvider).getLastResult();
    if (!mounted) return;
    setState(() {
      _result = result;
      _loading = false;
    });
  }

  bool get _reduceMotion {
    final mq = MediaQuery.maybeOf(context);
    return mq?.disableAnimations ?? false;
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (_started || _loading || _result == null) return;
    _started = true;
    _startEffects();
  }

  void _startEffects() {
    final res = _result;
    if (res == null) return;
    if (_reduceMotion) {
      setState(() => _displayScore = res.totalScore);
      _scaleCtrl.value = 1;
      _fadeCtrl.value = 1;
    } else {
      _scaleCtrl.forward(from: 0);
      _fadeCtrl.forward(from: 0);
      _animateScore(res.totalScore);
    }

    if (res.levelUp) {
      unawaited(Sounds.instance.levelUp());
    }
    unawaited(_postResultSideEffects());
  }

  void _animateScore(int total) {
    _scoreTimer?.cancel();
    var c = 0.0;
    final inc = total / 25.0;
    _scoreTimer = Timer.periodic(const Duration(milliseconds: 40), (t) {
      c += inc;
      if (c >= total) {
        c = total.toDouble();
        t.cancel();
      }
      if (!mounted) return;
      setState(() => _displayScore = c.round());
    });
  }

  Future<void> _postResultSideEffects() async {
    try {
      await NotificationsService.instance.cancelStreakReminder();
      await NotificationsService.instance.scheduleStreakReminder();
    } catch (_) {}

    try {
      final session = await ref.read(sessionProvider.future);
      await ref
          .read(apiProvider)
          .checkLeaderboardNotifications(
            userId: session.userId,
            userSecret: session.userSecret,
          );
    } catch (_) {}
  }

  void _goHome() {
    unawaited(Sounds.instance.click());
    context.go("/");
  }

  void _playAgain() {
    final cat = _result?.categoryDisplay ?? "random";
    unawaited(Sounds.instance.click());
    context.go("/quiz/$cat?mode=timed");
  }

  Future<void> _shareScore() async {
    final res = _result;
    if (res == null) return;
    unawaited(Sounds.instance.share());

    final catName = CategoryConfig.get(res.categoryDisplay ?? "random").name;
    final prefix = (res.correctCount >= 7) ? "🏆" : "💪";
    final msg =
        "$prefix J'ai obtenu ${res.totalScore} points sur GoCharbon Business Quizz ! ${res.correctCount}/${res.totalQuestions} en $catName. Teste-toi ➡️ gocharbon.fr";
    try {
      await SharePlus.instance.share(ShareParams(text: msg));
    } catch (_) {}
  }

  Future<void> _openCourse(Course course) async {
    unawaited(Sounds.instance.click());
    final uri = Uri.tryParse(course.url);
    if (uri == null) return;
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const SafeArea(
        child: Scaffold(
          backgroundColor: AppColors.bg,
          body: Center(
            child: CircularProgressIndicator(color: AppColors.primary),
          ),
        ),
      );
    }

    final result = _result;
    if (result == null) {
      return SafeArea(
        child: Scaffold(
          backgroundColor: AppColors.bg,
          body: Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Text(
                  "Résultats non disponibles",
                  style: TextStyle(
                    fontSize: 16,
                    color: AppColors.textSecondary,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                const SizedBox(height: 12),
                DepthButton(
                  onPressed: _goHome,
                  colors: const [AppColors.primary, AppColors.primaryShadow],
                  shadowColor: AppColors.primaryShadow,
                  borderRadius: BorderRadius.circular(14),
                  child: const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                    child: Text(
                      "Accueil",
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w800,
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

    final acc = result.totalQuestions > 0
        ? ((result.correctCount / result.totalQuestions) * 100).round()
        : 0;
    final good = acc >= 70;
    final course = result.courseRecommendations.isNotEmpty
        ? result.courseRecommendations.first
        : null;
    final context = result.recommendationContext;
    final categoryName =
        context?.targetCategoryLabel ??
        CategoryConfig.get(result.categoryDisplay ?? "random").name;
    final scoreLabel = context?.eyebrow ?? (good ? "BRAVO !" : "BON EFFORT !");
    final actionText = course != null
        ? "Action recommandée : ouvrir ${course.title} pour poursuivre sur GoCharbon."
        : "Action recommandée : refaire un quiz pour obtenir une recommandation plus ciblée.";
    final streakMultiplier = result.streakMultiplier;
    final smStr = (streakMultiplier == streakMultiplier.roundToDouble())
        ? streakMultiplier.toInt().toString()
        : streakMultiplier.toStringAsFixed(1);

    return SafeArea(
      child: Scaffold(
        backgroundColor: AppColors.bg,
        body: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const SizedBox(height: 10),
              AnimatedBuilder(
                animation: Listenable.merge([_scaleCtrl, _fadeCtrl]),
                builder: (context, _) {
                  return Opacity(
                    opacity: _fade.value,
                    child: Transform.scale(
                      scale: 0.5 + (_scale.value * 0.5),
                      child: Column(
                        children: [
                          Image.asset(AppImages.trophy, width: 80, height: 80),
                          const SizedBox(height: 8),
                          Text(
                            scoreLabel,
                            style: const TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.w800,
                              color: AppColors.textSecondary,
                              letterSpacing: 2,
                            ),
                          ),
                          Text(
                            formatNumber(_displayScore),
                            style: const TextStyle(
                              fontSize: 52,
                              fontWeight: FontWeight.w900,
                              color: AppColors.textPrimary,
                              height: 1.1,
                            ),
                          ),
                          const Text(
                            "points",
                            style: TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.w700,
                              color: AppColors.textSecondary,
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                },
              ),

              const SizedBox(height: 10),

              Container(
                decoration: BoxDecoration(
                  color: AppColors.surfaceElevated,
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: AppColors.borderLight),
                ),
                padding: const EdgeInsets.all(10),
                child: Row(
                  children: [
                    Icon(MdiIcons.target, size: 18, color: AppColors.primary),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Text(
                        actionText,
                        style: const TextStyle(
                          fontSize: 13,
                          height: 1.35,
                          fontWeight: FontWeight.w600,
                          color: AppColors.textPrimary,
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 10),

              Wrap(
                alignment: WrapAlignment.center,
                spacing: 10,
                runSpacing: 10,
                children: [
                  _StatPill(
                    icon: MdiIcons.checkCircle,
                    iconColor: AppColors.success,
                    value: "${result.correctCount}/${result.totalQuestions}",
                    borderColor: AppColors.success.withValues(alpha: 0.18),
                    valueColor: AppColors.success,
                  ),
                  _StatPill(
                    icon: MdiIcons.fire,
                    iconColor: AppColors.gold,
                    value: "x$smStr",
                    borderColor: AppColors.gold.withValues(alpha: 0.18),
                    valueColor: AppColors.gold,
                  ),
                  _StatPill(
                    icon: MdiIcons.star,
                    iconColor: AppColors.secondary,
                    value: "+${formatNumber(result.xpGained)}",
                    borderColor: AppColors.secondary.withValues(alpha: 0.18),
                    valueColor: AppColors.secondary,
                  ),
                ],
              ),

              const SizedBox(height: 12),

              Container(
                decoration: BoxDecoration(
                  color: AppColors.surface,
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: AppColors.borderLight),
                ),
                padding: const EdgeInsets.all(12),
                child: Column(
                  children: [
                    _BreakdownRow(
                      label: "Base",
                      value: formatNumber(result.baseScore),
                    ),
                    if (result.timeBonus > 0)
                      _BreakdownRow(
                        label: "Bonus temps",
                        value: "+${formatNumber(result.timeBonus)}",
                        valueColor: AppColors.secondary,
                      ),
                    if (result.streakBonus > 0)
                      _BreakdownRow(
                        label: "Bonus streak",
                        value: "+${formatNumber(result.streakBonus)}",
                        valueColor: AppColors.gold,
                      ),
                  ],
                ),
              ),

              const SizedBox(height: 8),

              if (result.levelUp)
                Container(
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [
                        AppColors.gold.withValues(alpha: 0.2),
                        AppColors.gold.withValues(alpha: 0.08),
                      ],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(
                      color: AppColors.gold.withValues(alpha: 0.15),
                    ),
                  ),
                  padding: const EdgeInsets.all(12),
                  child: Row(
                    children: [
                      Icon(
                        MdiIcons.arrowUpCircle,
                        size: 24,
                        color: AppColors.gold,
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Text(
                          "Niveau ${result.newLevel} · ${result.newLevelName}",
                          style: const TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w800,
                            color: AppColors.gold,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),

              if (result.levelUp) const SizedBox(height: 8),

              if (result.newBadges.isNotEmpty)
                Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  children: result.newBadges
                      .take(2)
                      .map((b) {
                        return Container(
                          decoration: BoxDecoration(
                            gradient: const LinearGradient(
                              colors: [
                                AppColors.primary,
                                AppColors.primaryShadow,
                              ],
                              begin: Alignment.topLeft,
                              end: Alignment.bottomRight,
                            ),
                            borderRadius: BorderRadius.circular(10),
                          ),
                          padding: const EdgeInsets.symmetric(
                            horizontal: 12,
                            vertical: 6,
                          ),
                          child: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Icon(
                                mdiFromName(b.icon),
                                size: 14,
                                color: Colors.white,
                              ),
                              const SizedBox(width: 6),
                              Text(
                                b.name,
                                style: const TextStyle(
                                  fontSize: 14,
                                  fontWeight: FontWeight.w700,
                                  color: Colors.white,
                                ),
                              ),
                            ],
                          ),
                        );
                      })
                      .toList(growable: false),
                ),

              if (result.newBadges.isNotEmpty) const SizedBox(height: 8),

              Container(
                decoration: BoxDecoration(
                  color: AppColors.surface,
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: AppColors.borderLight),
                ),
                padding: const EdgeInsets.all(14),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text(
                                "TON DIAGNOSTIC",
                                style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.w800,
                                  color: AppColors.primary,
                                  letterSpacing: 0.8,
                                ),
                              ),
                              const SizedBox(height: 4),
                              Text(
                                context?.title ??
                                    (good
                                        ? "Tu as déjà de bons réflexes en $categoryName."
                                        : "Les bases restent à consolider en $categoryName."),
                                style: const TextStyle(
                                  fontSize: 18,
                                  height: 1.25,
                                  fontWeight: FontWeight.w900,
                                  color: AppColors.textPrimary,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Container(
                          decoration: BoxDecoration(
                            color: AppColors.surfaceElevated,
                            borderRadius: BorderRadius.circular(14),
                            border: Border.all(
                              color: AppColors.secondary.withValues(
                                alpha: 0.22,
                              ),
                            ),
                          ),
                          padding: const EdgeInsets.symmetric(
                            horizontal: 12,
                            vertical: 9,
                          ),
                          child: Column(
                            children: [
                              Text(
                                "$acc%",
                                style: const TextStyle(
                                  fontSize: 18,
                                  fontWeight: FontWeight.w900,
                                  color: AppColors.secondary,
                                ),
                              ),
                              const Text(
                                "juste",
                                style: TextStyle(
                                  fontSize: 11,
                                  fontWeight: FontWeight.w700,
                                  color: AppColors.textSecondary,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 10),
                    Text(
                      context?.summary ??
                          "Ton score permet de cibler une suite utile sur GoCharbon.",
                      style: const TextStyle(
                        fontSize: 14,
                        height: 1.45,
                        fontWeight: FontWeight.w600,
                        color: AppColors.textSecondary,
                      ),
                    ),
                    const SizedBox(height: 10),
                    _DiagnosticRow(
                      icon: MdiIcons.checkDecagramOutline,
                      iconColor: AppColors.secondary,
                      text:
                          "${result.correctCount}/${result.totalQuestions} bonnes réponses en $categoryName",
                    ),
                    const SizedBox(height: 8),
                    _DiagnosticRow(
                      icon: MdiIcons.flagCheckered,
                      iconColor: AppColors.gold,
                      text:
                          context?.focus ??
                          "Continue avec une ressource plus structurée.",
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 10),

              if (course != null)
                Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    InkWell(
                      onTap: () => _openCourse(course),
                      borderRadius: BorderRadius.circular(14),
                      child: Container(
                        decoration: BoxDecoration(
                          color: AppColors.surface,
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(color: AppColors.borderLight),
                        ),
                        padding: const EdgeInsets.all(12),
                        child: Row(
                          children: [
                            Container(
                              width: 4,
                              height: 58,
                              decoration: BoxDecoration(
                                color: AppColors.primary,
                                borderRadius: BorderRadius.circular(8),
                              ),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  const Text(
                                    "TA PROCHAINE ÉTAPE SUR GOCHARBON",
                                    style: TextStyle(
                                      fontSize: 12,
                                      fontWeight: FontWeight.w800,
                                      color: AppColors.primary,
                                      letterSpacing: 0.8,
                                    ),
                                  ),
                                  const SizedBox(height: 2),
                                  Text(
                                    course.title,
                                    style: const TextStyle(
                                      fontSize: 14,
                                      fontWeight: FontWeight.w800,
                                      color: AppColors.textPrimary,
                                    ),
                                  ),
                                  if (course.description.isNotEmpty) ...[
                                    const SizedBox(height: 3),
                                    Text(
                                      course.description,
                                      maxLines: 2,
                                      overflow: TextOverflow.ellipsis,
                                      style: const TextStyle(
                                        fontSize: 13,
                                        height: 1.35,
                                        fontWeight: FontWeight.w600,
                                        color: AppColors.textSecondary,
                                      ),
                                    ),
                                  ],
                                ],
                              ),
                            ),
                            Container(
                              width: 32,
                              height: 32,
                              decoration: BoxDecoration(
                                color: AppColors.surfaceElevated,
                                borderRadius: BorderRadius.circular(16),
                              ),
                              child: Icon(
                                MdiIcons.arrowTopRight,
                                size: 18,
                                color: AppColors.primary,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(height: 8),
                    Container(
                      decoration: BoxDecoration(
                        color: AppColors.surface,
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: AppColors.borderLight),
                      ),
                      padding: const EdgeInsets.all(12),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            "Pourquoi cette ressource ?",
                            style: TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.w900,
                              color: AppColors.textPrimary,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            context?.reason ??
                                "Cette recommandation est choisie à partir de tes réponses et de ton niveau.",
                            style: const TextStyle(
                              fontSize: 13,
                              height: 1.4,
                              fontWeight: FontWeight.w600,
                              color: AppColors.textSecondary,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),

              const SizedBox(height: 16),

              InkWell(
                onTap: _shareScore,
                borderRadius: BorderRadius.circular(14),
                child: Container(
                  decoration: BoxDecoration(
                    color: AppColors.surface,
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(
                      color: AppColors.secondary.withValues(alpha: 0.18),
                    ),
                  ),
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        MdiIcons.shareVariant,
                        size: 20,
                        color: AppColors.secondary,
                      ),
                      const SizedBox(width: 8),
                      const Text(
                        "Partager mon score",
                        style: TextStyle(
                          fontSize: 15,
                          fontWeight: FontWeight.w800,
                          color: AppColors.secondary,
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 10),

              Row(
                children: [
                  Expanded(
                    child: DepthButton(
                      onPressed: _playAgain,
                      colors: const [
                        AppColors.primary,
                        AppColors.primaryShadow,
                      ],
                      shadowColor: AppColors.primaryShadow,
                      borderRadius: BorderRadius.circular(16),
                      child: Padding(
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: const [
                            // Using Material icon here to keep this const.
                            Icon(Icons.refresh, size: 20, color: Colors.white),
                            SizedBox(width: 8),
                            Text(
                              "Rejouer",
                              style: TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.w800,
                                color: Colors.white,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: InkWell(
                      onTap: _goHome,
                      borderRadius: BorderRadius.circular(16),
                      child: Container(
                        decoration: BoxDecoration(
                          color: AppColors.surface,
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: AppColors.borderMedium),
                        ),
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              MdiIcons.home,
                              size: 20,
                              color: AppColors.textPrimary,
                            ),
                            const SizedBox(width: 8),
                            const Text(
                              "Accueil",
                              style: TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.w800,
                                color: AppColors.textPrimary,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 16),
            ],
          ),
        ),
      ),
    );
  }
}

class _StatPill extends StatelessWidget {
  const _StatPill({
    required this.icon,
    required this.iconColor,
    required this.value,
    required this.borderColor,
    required this.valueColor,
  });

  final IconData icon;
  final Color iconColor;
  final String value;
  final Color borderColor;
  final Color valueColor;

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(minWidth: 94),
      decoration: BoxDecoration(
        color: AppColors.surface,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: borderColor),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 18, color: iconColor),
          const SizedBox(width: 6),
          Text(
            value,
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.w900,
              color: valueColor,
            ),
          ),
        ],
      ),
    );
  }
}

class _BreakdownRow extends StatelessWidget {
  const _BreakdownRow({
    required this.label,
    required this.value,
    this.valueColor,
  });

  final String label;
  final String value;
  final Color? valueColor;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            label,
            style: const TextStyle(
              fontSize: 14,
              color: AppColors.textSecondary,
              fontWeight: FontWeight.w600,
            ),
          ),
          Text(
            value,
            style: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w800,
              color: valueColor ?? AppColors.textPrimary,
            ),
          ),
        ],
      ),
    );
  }
}

class _DiagnosticRow extends StatelessWidget {
  const _DiagnosticRow({
    required this.icon,
    required this.iconColor,
    required this.text,
  });

  final IconData icon;
  final Color iconColor;
  final String text;

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(icon, size: 18, color: iconColor),
        const SizedBox(width: 8),
        Expanded(
          child: Text(
            text,
            style: const TextStyle(
              fontSize: 13,
              height: 1.35,
              fontWeight: FontWeight.w600,
              color: AppColors.textSecondary,
            ),
          ),
        ),
      ],
    );
  }
}
