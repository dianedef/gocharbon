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
import "../widgets/gc_button.dart";
import "../widgets/app_card.dart";

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
    _scaleCtrl = AnimationController(vsync: this, duration: GcMotion.slow);
    _fadeCtrl = AnimationController(vsync: this, duration: GcMotion.slow);
    _scale = CurvedAnimation(
      parent: _scaleCtrl,
      curve: GcMotion.emphasizedCurve,
    );
    _fade = CurvedAnimation(parent: _fadeCtrl, curve: GcMotion.standardCurve);
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
    _scoreTimer = Timer.periodic(GcMotion.scoreTick, (t) {
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
          backgroundColor: GcAppColors.bg,
          body: Center(
            child: CircularProgressIndicator(color: GcAppColors.primary),
          ),
        ),
      );
    }

    final result = _result;
    if (result == null) {
      return SafeArea(
        child: Scaffold(
          backgroundColor: GcAppColors.bg,
          body: Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Text(
                  "Résultats non disponibles",
                  style: TextStyle(
                    fontSize: GcType.body,
                    color: GcAppColors.textSecondary,
                    fontWeight: GcType.bold,
                  ),
                ),
                const SizedBox(height: GcSpace.x3),
                GcButton.primary(onPressed: _goHome, label: "Accueil"),
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
        backgroundColor: GcAppColors.bg,
        body: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: GcSpace.x4),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const SizedBox(height: GcSpace.x3),
              AnimatedBuilder(
                animation: Listenable.merge([_scaleCtrl, _fadeCtrl]),
                builder: (context, _) {
                  return Opacity(
                    opacity: _fade.value,
                    child: Transform.scale(
                      scale: 0.5 + (_scale.value * 0.5),
                      child: Column(
                        children: [
                          Image.asset(
                            AppImages.trophy,
                            width: GcSizes.achievementHero,
                            height: GcSizes.achievementHero,
                          ),
                          const SizedBox(height: GcSpace.x2),
                          Text(
                            scoreLabel,
                            style: const TextStyle(
                              fontSize: GcType.caption,
                              fontWeight: GcType.black,
                              color: GcAppColors.textSecondary,
                              letterSpacing: GcType.wideTracking,
                            ),
                          ),
                          Text(
                            formatNumber(_displayScore),
                            style: const TextStyle(
                              fontSize: GcType.displayLarge,
                              fontWeight: GcType.black,
                              color: GcAppColors.textPrimary,
                              height: GcType.tightHeight,
                            ),
                          ),
                          const Text(
                            "points",
                            style: TextStyle(
                              fontSize: GcType.caption,
                              fontWeight: GcType.bold,
                              color: GcAppColors.textSecondary,
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                },
              ),

              const SizedBox(height: GcSpace.x3),

              AppCard.outlined(
                backgroundColor: GcAppColors.surfaceElevated,
                borderColor: GcAppColors.borderLight,
                padding: const EdgeInsets.all(GcSpace.x3),
                child: Row(
                  children: [
                    Icon(
                      MdiIcons.target,
                      size: GcSizes.iconXSmall,
                      color: GcAppColors.primary,
                    ),
                    const SizedBox(width: GcSpace.x2),
                    Expanded(
                      child: Text(
                        actionText,
                        style: const TextStyle(
                          fontSize: GcType.caption,
                          height: GcType.bodyHeight,
                          fontWeight: GcType.bold,
                          color: GcAppColors.textPrimary,
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: GcSpace.x3),

              Wrap(
                alignment: WrapAlignment.center,
                spacing: GcSpace.twoAndHalf,
                runSpacing: GcSpace.twoAndHalf,
                children: [
                  _StatPill(
                    icon: MdiIcons.checkCircle,
                    iconColor: GcAppColors.success,
                    value: "${result.correctCount}/${result.totalQuestions}",
                    borderColor: GcAppColors.success.withValues(
                      alpha: GcOpacity.disabled,
                    ),
                    valueColor: GcAppColors.success,
                  ),
                  _StatPill(
                    icon: MdiIcons.fire,
                    iconColor: GcAppColors.gold,
                    value: "x$smStr",
                    borderColor: GcAppColors.gold.withValues(
                      alpha: GcOpacity.disabled,
                    ),
                    valueColor: GcAppColors.gold,
                  ),
                  _StatPill(
                    icon: MdiIcons.star,
                    iconColor: GcAppColors.secondary,
                    value: "+${formatNumber(result.xpGained)}",
                    borderColor: GcAppColors.secondary.withValues(
                      alpha: GcOpacity.disabled,
                    ),
                    valueColor: GcAppColors.secondary,
                  ),
                ],
              ),

              const SizedBox(height: GcSpace.x3),

              AppCard.compact(
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
                        valueColor: GcAppColors.secondary,
                      ),
                    if (result.streakBonus > 0)
                      _BreakdownRow(
                        label: "Bonus streak",
                        value: "+${formatNumber(result.streakBonus)}",
                        valueColor: GcAppColors.gold,
                      ),
                  ],
                ),
              ),

              const SizedBox(height: GcSpace.x2),

              if (result.levelUp)
                GcStatusCard(
                  variant: GcStatusCardVariant.reward,
                  padding: const EdgeInsets.all(GcSpace.x3),
                  child: Row(
                    children: [
                      Icon(
                        MdiIcons.arrowUpCircle,
                        size: GcSpace.x6,
                        color: GcAppColors.gold,
                      ),
                      const SizedBox(width: GcSpace.x3),
                      Expanded(
                        child: Text(
                          "Niveau ${result.newLevel} · ${result.newLevelName}",
                          style: const TextStyle(
                            fontSize: GcType.caption,
                            fontWeight: GcType.black,
                            color: GcAppColors.gold,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),

              if (result.levelUp) const SizedBox(height: GcSpace.x2),

              if (result.newBadges.isNotEmpty)
                Wrap(
                  spacing: GcSpace.x2,
                  runSpacing: GcSpace.x2,
                  children: result.newBadges
                      .take(2)
                      .map((b) {
                        return GcStatusPill(
                          icon: mdiFromName(b.icon),
                          label: b.name,
                          accent: GcAppColors.primary,
                        );
                      })
                      .toList(growable: false),
                ),

              if (result.newBadges.isNotEmpty)
                const SizedBox(height: GcSpace.x2),

              AppCard(
                padding: const EdgeInsets.all(GcSpace.x4),
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
                                  fontSize: GcType.caption,
                                  fontWeight: GcType.black,
                                  color: GcAppColors.primary,
                                  letterSpacing: GcType.wideTracking,
                                ),
                              ),
                              const SizedBox(height: GcSpace.x1),
                              Text(
                                context?.title ??
                                    (good
                                        ? "Tu as déjà de bons réflexes en $categoryName."
                                        : "Les bases restent à consolider en $categoryName."),
                                style: const TextStyle(
                                  fontSize: GcType.bodyLarge,
                                  height: GcType.tightHeight,
                                  fontWeight: GcType.black,
                                  color: GcAppColors.textPrimary,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Container(
                          decoration: BoxDecoration(
                            color: GcAppColors.surfaceElevated,
                            borderRadius: GcRadii.card,
                            border: Border.all(
                              color: GcAppColors.secondary.withValues(
                                alpha: GcOpacity.disabled,
                              ),
                            ),
                          ),
                          padding: const EdgeInsets.symmetric(
                            horizontal: GcSpace.x3,
                            vertical: GcSpace.twoAndQuarter,
                          ),
                          child: Column(
                            children: [
                              Text(
                                "$acc%",
                                style: const TextStyle(
                                  fontSize: GcType.bodyLarge,
                                  fontWeight: GcType.black,
                                  color: GcAppColors.secondary,
                                ),
                              ),
                              const Text(
                                "juste",
                                style: TextStyle(
                                  fontSize: GcType.caption,
                                  fontWeight: GcType.bold,
                                  color: GcAppColors.textSecondary,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: GcSpace.x3),
                    Text(
                      context?.summary ??
                          "Ton score permet de cibler une suite utile sur GoCharbon.",
                      style: const TextStyle(
                        fontSize: GcType.caption,
                        height: GcType.bodyHeight,
                        fontWeight: GcType.bold,
                        color: GcAppColors.textSecondary,
                      ),
                    ),
                    const SizedBox(height: GcSpace.x3),
                    _DiagnosticRow(
                      icon: MdiIcons.checkDecagramOutline,
                      iconColor: GcAppColors.secondary,
                      text:
                          "${result.correctCount}/${result.totalQuestions} bonnes réponses en $categoryName",
                    ),
                    const SizedBox(height: GcSpace.x2),
                    _DiagnosticRow(
                      icon: MdiIcons.flagCheckered,
                      iconColor: GcAppColors.gold,
                      text:
                          context?.focus ??
                          "Continue avec une ressource plus structurée.",
                    ),
                  ],
                ),
              ),

              const SizedBox(height: GcSpace.x3),

              if (course != null)
                Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    GcNavigationCard(
                      onTap: () => _openCourse(course),
                      label: course.title,
                      padding: const EdgeInsets.all(GcSpace.x3),
                      child: Container(
                        decoration: BoxDecoration(
                          color: GcAppColors.surface,
                          border: Border.all(color: GcAppColors.borderLight),
                        ),
                        child: Row(
                          children: [
                            Container(
                              width: GcSizes.listAccentWidth,
                              height: GcSizes.listAccentHeight,
                              decoration: BoxDecoration(
                                color: GcAppColors.primary,
                                borderRadius: GcRadii.card,
                              ),
                            ),
                            const SizedBox(width: GcSpace.x3),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  const Text(
                                    "TA PROCHAINE ÉTAPE SUR GOCHARBON",
                                    style: TextStyle(
                                      fontSize: GcType.caption,
                                      fontWeight: GcType.black,
                                      color: GcAppColors.primary,
                                      letterSpacing: GcType.wideTracking,
                                    ),
                                  ),
                                  const SizedBox(height: GcSpace.x1),
                                  Text(
                                    course.title,
                                    style: const TextStyle(
                                      fontSize: GcType.caption,
                                      fontWeight: GcType.black,
                                      color: GcAppColors.textPrimary,
                                    ),
                                  ),
                                  if (course.description.isNotEmpty) ...[
                                    const SizedBox(height: GcSpace.x1),
                                    Text(
                                      course.description,
                                      maxLines: 2,
                                      overflow: TextOverflow.ellipsis,
                                      style: const TextStyle(
                                        fontSize: GcType.caption,
                                        height: GcType.bodyHeight,
                                        fontWeight: GcType.bold,
                                        color: GcAppColors.textSecondary,
                                      ),
                                    ),
                                  ],
                                ],
                              ),
                            ),
                            Container(
                              width: GcSizes.iconLarge,
                              height: GcSizes.iconLarge,
                              decoration: BoxDecoration(
                                color: GcAppColors.surfaceElevated,
                                borderRadius: GcRadii.card,
                              ),
                              child: Icon(
                                MdiIcons.arrowTopRight,
                                size: GcSizes.iconXSmall,
                                color: GcAppColors.primary,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(height: GcSpace.x2),
                    AppCard.compact(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            "Pourquoi cette ressource ?",
                            style: TextStyle(
                              fontSize: GcType.caption,
                              fontWeight: GcType.black,
                              color: GcAppColors.textPrimary,
                            ),
                          ),
                          const SizedBox(height: GcSpace.x1),
                          Text(
                            context?.reason ??
                                "Cette recommandation est choisie à partir de tes réponses et de ton niveau.",
                            style: const TextStyle(
                              fontSize: GcType.caption,
                              height: GcType.bodyHeight,
                              fontWeight: GcType.bold,
                              color: GcAppColors.textSecondary,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),

              const SizedBox(height: GcSpace.x4),

              GcButton.secondary(
                onPressed: _shareScore,
                label: "Partager mon score",
                icon: MdiIcons.shareVariant,
              ),

              const SizedBox(height: GcSpace.x3),

              Row(
                children: [
                  Expanded(
                    child: GcButton.primary(
                      onPressed: _playAgain,
                      label: "Rejouer",
                      icon: Icons.refresh,
                    ),
                  ),
                  const SizedBox(width: GcSpace.x3),
                  Expanded(
                    child: GcButton.secondary(
                      onPressed: _goHome,
                      label: "Accueil",
                      icon: MdiIcons.home,
                    ),
                  ),
                ],
              ),

              const SizedBox(height: GcSpace.x4),
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
  Widget build(BuildContext context) => ConstrainedBox(
    constraints: const BoxConstraints(minWidth: GcSizes.compactStatMinimum),
    child: GcStatusPill(icon: icon, label: value, accent: valueColor),
  );
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
      padding: const EdgeInsets.symmetric(vertical: GcSpace.x1),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            label,
            style: const TextStyle(
              fontSize: GcType.caption,
              color: GcAppColors.textSecondary,
              fontWeight: GcType.bold,
            ),
          ),
          Text(
            value,
            style: TextStyle(
              fontSize: GcType.caption,
              fontWeight: GcType.black,
              color: valueColor ?? GcAppColors.textPrimary,
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
        Icon(icon, size: GcSizes.iconXSmall, color: iconColor),
        const SizedBox(width: GcSpace.x2),
        Expanded(
          child: Text(
            text,
            style: const TextStyle(
              fontSize: GcType.caption,
              height: GcType.bodyHeight,
              fontWeight: GcType.bold,
              color: GcAppColors.textSecondary,
            ),
          ),
        ),
      ],
    );
  }
}
