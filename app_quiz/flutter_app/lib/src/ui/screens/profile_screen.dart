import "dart:async";
import "dart:math";

import "package:flutter/material.dart";
import "package:flutter_riverpod/flutter_riverpod.dart";
import "package:flutter_material_design_icons/flutter_material_design_icons.dart";
import "package:url_launcher/url_launcher.dart";

import "../../assets/app_images.dart";
import "../../config/app_config.dart";
import "../../models/badge.dart";
import "../../models/user_profile.dart";
import "../../services/auth/auth_service.dart";
import "../../services/sounds/sounds.dart";
import "../../state/providers.dart";
import "../../theme/app_colors.dart";
import "../../utils/format_utils.dart";
import "../../utils/icon_utils.dart";
import "../widgets/depth_button.dart";

class ProfileScreen extends ConsumerStatefulWidget {
  const ProfileScreen({super.key});

  @override
  ConsumerState<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends ConsumerState<ProfileScreen> {
  static const _thresholds = [0, 1000, 3000, 8000, 15000];

  UserProfile? _user;
  Map<String, BadgeDef> _badges = const {};
  bool _loading = true;
  bool _linkingGoogle = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    _fetch();
  }

  Future<void> _fetch() async {
    setState(() {
      _loading = true;
      _error = null;
    });

    try {
      final session = await ref.read(sessionProvider.future);
      final api = ref.read(apiProvider);
      final res = await Future.wait([
        api.getUser(session.userId),
        api.getAllBadges(),
      ]);
      setState(() {
        _user = res[0] as UserProfile;
        _badges = res[1] as Map<String, BadgeDef>;
      });
    } catch (_) {
      setState(() => _error = "Impossible de charger ton profil.");
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  Future<void> _openGoCharbon() async {
    unawaited(Sounds.instance.click());
    final uri = Uri.parse("https://gocharbon.fr");
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }

  void _showAuthMessage(String message, {bool error = false}) {
    if (!mounted) return;
    final messenger = ScaffoldMessenger.of(context);
    messenger
      ..hideCurrentSnackBar()
      ..showSnackBar(
        SnackBar(
          content: Text(message),
          backgroundColor: error ? GcAppColors.error : GcAppColors.primary,
        ),
      );
  }

  Future<void> _linkWithGoogle() async {
    if (_linkingGoogle) return;
    unawaited(Sounds.instance.click());
    setState(() => _linkingGoogle = true);
    try {
      final result = await ref.read(authServiceProvider).linkWithGoogle();
      _showAuthMessage(result.message, error: _isAuthLinkError(result.status));
    } catch (error) {
      _showAuthMessage("Échec du linking Google: $error", error: true);
    } finally {
      if (mounted) {
        setState(() => _linkingGoogle = false);
      }
    }
  }

  bool _isAuthLinkError(AuthLinkStatus status) {
    return status == AuthLinkStatus.failed ||
        status == AuthLinkStatus.blockedByOtherDevice;
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
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      fontSize: GcType.body,
                      height: GcType.bodyHeight,
                      color: GcAppColors.textSecondary,
                      fontWeight: GcType.bold,
                    ),
                  ),
                  const SizedBox(height: GcSpace.x4),
                  DepthButton(
                    onPressed: _fetch,
                    colors: const [
                      GcAppColors.primary,
                      GcAppColors.primaryShadow,
                    ],
                    shadowColor: GcAppColors.primaryShadow,
                    borderRadius: GcRadii.card,
                    child: const Padding(
                      padding: EdgeInsets.symmetric(
                        horizontal: GcSpace.x5,
                        vertical: GcSpace.x3,
                      ),
                      child: Text(
                        "Réessayer",
                        style: TextStyle(
                          color: GcAppColors.textPrimary,
                          fontWeight: GcType.black,
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

    final user = _user;
    if (user == null) {
      return const SafeArea(
        child: Scaffold(
          backgroundColor: GcAppColors.bg,
          body: Center(
            child: Text(
              "Profil indisponible.",
              style: TextStyle(
                color: GcAppColors.textSecondary,
                fontWeight: GcType.bold,
              ),
            ),
          ),
        ),
      );
    }

    final lv = max(1, user.level);
    final xp = user.xp;
    final cur = (lv - 1 < _thresholds.length)
        ? _thresholds[lv - 1]
        : _thresholds.last;
    final nxt = (lv < _thresholds.length) ? _thresholds[lv] : _thresholds.last;
    final denom = max(nxt - cur, 1);
    final prog = min(1.0, (xp - cur) / denom);

    final stats = user.stats;
    final acc = stats.totalAnswers > 0
        ? ((stats.correctAnswers / stats.totalAnswers) * 100).round()
        : 0;

    final unlocked = user.badges.toSet();
    final badgeKeys = _badges.keys.toList(growable: false)..sort();
    final shownBadges = badgeKeys.take(8).toList(growable: false);

    return SafeArea(
      child: Scaffold(
        backgroundColor: GcAppColors.bg,
        body: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: GcSpace.x4),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const SizedBox(height: GcSpace.x3),

              // Header
              Row(
                children: [
                  Container(
                    decoration: BoxDecoration(
                      boxShadow: [
                        BoxShadow(
                          color: GcAppColors.gold.withValues(
                            alpha: GcOpacity.disabled,
                          ),
                          blurRadius: GcSpace.x4,
                        ),
                      ],
                      shape: BoxShape.circle,
                    ),
                    child: DecoratedBox(
                      decoration: const BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: LinearGradient(
                          colors: [GcAppColors.gold, GcAppColors.primary],
                        ),
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(GcSpace.x1),
                        child: Container(
                          width: GcSizes.avatarLarge,
                          height: GcSizes.avatarLarge,
                          decoration: const BoxDecoration(
                            shape: BoxShape.circle,
                            color: GcAppColors.surface,
                          ),
                          child: Center(
                            child: Text(
                              user.username.isNotEmpty
                                  ? user.username[0].toUpperCase()
                                  : "P",
                              style: const TextStyle(
                                fontSize: GcType.title,
                                fontWeight: GcType.black,
                                color: GcAppColors.textPrimary,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: GcSpace.x4),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          user.username,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(
                            fontSize: GcType.titleSmall,
                            fontWeight: GcType.black,
                            color: GcAppColors.textPrimary,
                          ),
                        ),
                        const SizedBox(height: GcSpace.x1),
                        Row(
                          children: [
                            Icon(
                              MdiIcons.shieldStar,
                              size: GcType.caption,
                              color: GcAppColors.gold,
                            ),
                            const SizedBox(width: GcSpace.x1),
                            Text(
                              "Niv. $lv · ${user.levelName}",
                              style: const TextStyle(
                                fontSize: GcType.caption,
                                fontWeight: GcType.bold,
                                color: GcAppColors.gold,
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  Image.asset(
                    AppImages.diamond,
                    width: GcSizes.iconHero,
                    height: GcSizes.iconHero,
                  ),
                ],
              ),

              const SizedBox(height: GcSpace.x4),

              // XP Progress
              Container(
                decoration: BoxDecoration(
                  color: GcAppColors.surface,
                  borderRadius: GcRadii.card,
                  border: Border.all(color: GcAppColors.borderLight),
                ),
                padding: const EdgeInsets.all(GcSpace.x4),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Text(
                          "XP",
                          style: TextStyle(
                            fontSize: GcType.caption,
                            fontWeight: GcType.bold,
                            color: GcAppColors.textSecondary,
                          ),
                        ),
                        Text(
                          formatNumber(xp),
                          style: const TextStyle(
                            fontSize: GcType.caption,
                            fontWeight: GcType.black,
                            color: GcAppColors.gold,
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: GcSpace.x2),
                    Container(
                      height: GcSizes.progressComfortable,
                      decoration: BoxDecoration(
                        color: GcAppColors.surfaceElevated,
                        borderRadius: GcRadii.control,
                      ),
                      clipBehavior: Clip.antiAlias,
                      child: Align(
                        alignment: Alignment.centerLeft,
                        child: FractionallySizedBox(
                          widthFactor: prog,
                          child: const DecoratedBox(
                            decoration: BoxDecoration(
                              gradient: LinearGradient(
                                colors: [GcAppColors.gold, GcAppColors.primary],
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: GcSpace.x4),

              // Stats
              LayoutBuilder(
                builder: (context, constraints) {
                  final w = (constraints.maxWidth - GcSpace.x2) / 2;
                  final items = [
                    _StatDef(
                      icon: MdiIcons.gamepadVariant,
                      value: formatNumber(stats.totalQuizzes),
                      label: "Quiz",
                      color: GcAppColors.primary,
                    ),
                    _StatDef(
                      icon: MdiIcons.checkCircle,
                      value: "$acc%",
                      label: "Précision",
                      color: GcAppColors.success,
                    ),
                    _StatDef(
                      icon: MdiIcons.fire,
                      value: formatNumber(stats.bestStreak),
                      label: "Streak",
                      color: GcAppColors.gold,
                    ),
                    _StatDef(
                      icon: MdiIcons.star,
                      value: formatNumber(user.totalScore),
                      label: "Score",
                      color: GcAppColors.secondary,
                    ),
                  ];

                  return Wrap(
                    spacing: GcSpace.x2,
                    runSpacing: GcSpace.x2,
                    children: items
                        .map(
                          (st) => SizedBox(
                            width: w,
                            child: Container(
                              decoration: BoxDecoration(
                                color: GcAppColors.surface,
                                borderRadius: GcRadii.card,
                                border: Border.all(
                                  color: GcAppColors.borderLight,
                                ),
                              ),
                              padding: const EdgeInsets.all(GcSpace.x3),
                              child: Column(
                                children: [
                                  Icon(
                                    st.icon,
                                    size: GcSpace.x5,
                                    color: st.color,
                                  ),
                                  const SizedBox(height: GcSpace.x1),
                                  Text(
                                    st.value,
                                    style: const TextStyle(
                                      fontSize: GcType.bodyLarge,
                                      fontWeight: GcType.black,
                                      color: GcAppColors.textPrimary,
                                    ),
                                  ),
                                  Text(
                                    st.label,
                                    style: const TextStyle(
                                      fontSize: GcType.caption,
                                      fontWeight: GcType.bold,
                                      color: GcAppColors.textSecondary,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        )
                        .toList(growable: false),
                  );
                },
              ),

              const SizedBox(height: GcSpace.x4),

              // Badges
              Text(
                "Badges (${unlocked.length}/${_badges.length})",
                style: const TextStyle(
                  fontSize: GcType.body,
                  fontWeight: GcType.black,
                  color: GcAppColors.textPrimary,
                ),
              ),
              const SizedBox(height: GcSpace.x3),
              LayoutBuilder(
                builder: (context, constraints) {
                  final itemW = (constraints.maxWidth - (GcSpace.x2 * 3)) / 4;
                  return Wrap(
                    spacing: GcSpace.x2,
                    runSpacing: GcSpace.x2,
                    children: shownBadges
                        .map((k) {
                          final b = _badges[k];
                          if (b == null) return const SizedBox.shrink();
                          final on = unlocked.contains(k);
                          final child = Column(
                            children: [
                              Container(
                                width: GcSizes.iconXLarge,
                                height: GcSizes.iconXLarge,
                                decoration: BoxDecoration(
                                  color: on
                                      ? GcAppColors.primary.withValues(
                                          alpha: GcOpacity.disabled,
                                        )
                                      : GcAppColors.surfaceElevated,
                                  borderRadius: GcRadii.card,
                                ),
                                child: Center(
                                  child: Icon(
                                    mdiFromName(b.icon),
                                    size: GcSizes.iconXSmall,
                                    color: on
                                        ? GcAppColors.primary
                                        : GcAppColors.textTertiary,
                                  ),
                                ),
                              ),
                              const SizedBox(height: GcSpace.x1),
                              Text(
                                b.name,
                                maxLines: 2,
                                overflow: TextOverflow.ellipsis,
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  fontSize: GcType.caption,
                                  fontWeight: GcType.bold,
                                  color: on
                                      ? GcAppColors.textPrimary
                                      : GcAppColors.textTertiary,
                                  height: GcType.tightHeight,
                                ),
                              ),
                            ],
                          );

                          return SizedBox(
                            width: itemW,
                            child: Opacity(
                              opacity: on ? 1 : 0.35,
                              child: child,
                            ),
                          );
                        })
                        .toList(growable: false),
                  );
                },
              ),

              const SizedBox(height: GcSpace.x4),

              DepthButton(
                onPressed: _linkWithGoogle,
                colors: _linkingGoogle
                    ? const [GcAppColors.textTertiary, GcAppColors.textTertiary]
                    : const [
                        GcAppColors.secondary,
                        GcAppColors.secondaryShadow,
                      ],
                shadowColor: _linkingGoogle
                    ? GcAppColors.borderLight
                    : GcAppColors.secondaryShadow,
                borderRadius: GcRadii.card,
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: GcSpace.x4,
                    vertical: GcSpace.threeAndHalf,
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      if (_linkingGoogle)
                        const SizedBox(
                          width: GcSizes.iconXSmall,
                          height: GcSizes.iconXSmall,
                          child: CircularProgressIndicator(
                            strokeWidth: GcBorders.medium,
                            color: GcAppColors.textPrimary,
                          ),
                        )
                      else
                        Icon(
                          MdiIcons.account,
                          size: GcSpace.x5,
                          color: GcAppColors.textPrimary,
                        ),
                      const SizedBox(width: GcSpace.x3),
                      Text(
                        _linkingGoogle
                            ? "Redirection OAuth..."
                            : "Lier mon compte Google",
                        style: const TextStyle(
                          fontSize: GcType.body,
                          fontWeight: GcType.black,
                          color: GcAppColors.textPrimary,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              if (!AppConfig.supabaseConfigured)
                const Padding(
                  padding: EdgeInsets.only(
                    top: GcSpace.x2,
                    left: GcSpace.half,
                    right: GcSpace.half,
                  ),
                  child: Text(
                    "OAuth web nécessite SUPABASE_URL et SUPABASE_PUBLISHABLE_KEY au build.",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: GcType.caption,
                      fontWeight: GcType.bold,
                      color: GcAppColors.textSecondary,
                    ),
                  ),
                ),

              const SizedBox(height: GcSpace.x4),

              InkWell(
                onTap: _openGoCharbon,
                borderRadius: GcRadii.card,
                child: Container(
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [GcAppColors.primary, GcAppColors.gold],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                    borderRadius: GcRadii.card,
                    boxShadow: [
                      BoxShadow(
                        color: GcAppColors.primary.withValues(
                          alpha: GcOpacity.disabled,
                        ),
                        blurRadius: GcSpace.x3,
                        offset: const Offset(GcSpace.zero, GcSpace.oneAndHalf),
                      ),
                    ],
                  ),
                  padding: const EdgeInsets.symmetric(
                    vertical: GcSpace.threeAndThreeQuarter,
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        MdiIcons.school,
                        size: GcSizes.iconSmall,
                        color: GcAppColors.textPrimary,
                      ),
                      const SizedBox(width: GcSpace.x3),
                      const Text(
                        "Formations sur gocharbon.fr",
                        style: TextStyle(
                          fontSize: GcType.body,
                          fontWeight: GcType.black,
                          color: GcAppColors.textPrimary,
                        ),
                      ),
                      const SizedBox(width: GcSpace.x3),
                      Icon(
                        MdiIcons.arrowRight,
                        size: GcSpace.x5,
                        color: GcAppColors.textPrimary,
                      ),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: GcSpace.x4),
            ],
          ),
        ),
      ),
    );
  }
}

class _StatDef {
  const _StatDef({
    required this.icon,
    required this.value,
    required this.label,
    required this.color,
  });

  final IconData icon;
  final String value;
  final String label;
  final Color color;
}
