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
          backgroundColor: error ? AppColors.error : AppColors.primary,
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
          backgroundColor: AppColors.bg,
          body: Center(
            child: CircularProgressIndicator(color: AppColors.primary),
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
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      fontSize: 15,
                      height: 1.4,
                      color: AppColors.textSecondary,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(height: 14),
                  DepthButton(
                    onPressed: _fetch,
                    colors: const [AppColors.primary, AppColors.primaryShadow],
                    shadowColor: AppColors.primaryShadow,
                    borderRadius: BorderRadius.circular(14),
                    child: const Padding(
                      padding: EdgeInsets.symmetric(
                        horizontal: 20,
                        vertical: 12,
                      ),
                      child: Text(
                        "Réessayer",
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
        ),
      );
    }

    final user = _user;
    if (user == null) {
      return const SafeArea(
        child: Scaffold(
          backgroundColor: AppColors.bg,
          body: Center(
            child: Text(
              "Profil indisponible.",
              style: TextStyle(
                color: AppColors.textSecondary,
                fontWeight: FontWeight.w600,
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
        backgroundColor: AppColors.bg,
        body: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const SizedBox(height: 10),

              // Header
              Row(
                children: [
                  Container(
                    decoration: BoxDecoration(
                      boxShadow: [
                        BoxShadow(
                          color: AppColors.gold.withValues(alpha: 0.5),
                          blurRadius: 16,
                        ),
                      ],
                      shape: BoxShape.circle,
                    ),
                    child: DecoratedBox(
                      decoration: const BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: LinearGradient(
                          colors: [AppColors.gold, AppColors.primary],
                        ),
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(4),
                        child: Container(
                          width: 56,
                          height: 56,
                          decoration: const BoxDecoration(
                            shape: BoxShape.circle,
                            color: AppColors.surface,
                          ),
                          child: Center(
                            child: Text(
                              user.username.isNotEmpty
                                  ? user.username[0].toUpperCase()
                                  : "P",
                              style: const TextStyle(
                                fontSize: 24,
                                fontWeight: FontWeight.w900,
                                color: AppColors.textPrimary,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 14),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          user.username,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.w900,
                            color: AppColors.textPrimary,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Row(
                          children: [
                            Icon(
                              MdiIcons.shieldStar,
                              size: 14,
                              color: AppColors.gold,
                            ),
                            const SizedBox(width: 4),
                            Text(
                              "Niv. $lv · ${user.levelName}",
                              style: const TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.w700,
                                color: AppColors.gold,
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  Image.asset(AppImages.diamond, width: 44, height: 44),
                ],
              ),

              const SizedBox(height: 14),

              // XP Progress
              Container(
                decoration: BoxDecoration(
                  color: AppColors.surface,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: AppColors.borderLight),
                ),
                padding: const EdgeInsets.all(14),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Text(
                          "XP",
                          style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w700,
                            color: AppColors.textSecondary,
                          ),
                        ),
                        Text(
                          formatNumber(xp),
                          style: const TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w800,
                            color: AppColors.gold,
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),
                    Container(
                      height: 14,
                      decoration: BoxDecoration(
                        color: AppColors.surfaceElevated,
                        borderRadius: BorderRadius.circular(7),
                      ),
                      clipBehavior: Clip.antiAlias,
                      child: Align(
                        alignment: Alignment.centerLeft,
                        child: FractionallySizedBox(
                          widthFactor: prog,
                          child: const DecoratedBox(
                            decoration: BoxDecoration(
                              gradient: LinearGradient(
                                colors: [AppColors.gold, AppColors.primary],
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 14),

              // Stats
              LayoutBuilder(
                builder: (context, constraints) {
                  final w = (constraints.maxWidth - 8) / 2;
                  final items = [
                    _StatDef(
                      icon: MdiIcons.gamepadVariant,
                      value: formatNumber(stats.totalQuizzes),
                      label: "Quiz",
                      color: AppColors.primary,
                    ),
                    _StatDef(
                      icon: MdiIcons.checkCircle,
                      value: "$acc%",
                      label: "Précision",
                      color: AppColors.success,
                    ),
                    _StatDef(
                      icon: MdiIcons.fire,
                      value: formatNumber(stats.bestStreak),
                      label: "Streak",
                      color: AppColors.gold,
                    ),
                    _StatDef(
                      icon: MdiIcons.star,
                      value: formatNumber(user.totalScore),
                      label: "Score",
                      color: AppColors.secondary,
                    ),
                  ];

                  return Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: items
                        .map(
                          (st) => SizedBox(
                            width: w,
                            child: Container(
                              decoration: BoxDecoration(
                                color: AppColors.surface,
                                borderRadius: BorderRadius.circular(14),
                                border: Border.all(
                                  color: AppColors.borderLight,
                                ),
                              ),
                              padding: const EdgeInsets.all(10),
                              child: Column(
                                children: [
                                  Icon(st.icon, size: 20, color: st.color),
                                  const SizedBox(height: 4),
                                  Text(
                                    st.value,
                                    style: const TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.w900,
                                      color: AppColors.textPrimary,
                                    ),
                                  ),
                                  Text(
                                    st.label,
                                    style: const TextStyle(
                                      fontSize: 12,
                                      fontWeight: FontWeight.w700,
                                      color: AppColors.textSecondary,
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

              const SizedBox(height: 16),

              // Badges
              Text(
                "Badges (${unlocked.length}/${_badges.length})",
                style: const TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w800,
                  color: AppColors.textPrimary,
                ),
              ),
              const SizedBox(height: 10),
              LayoutBuilder(
                builder: (context, constraints) {
                  final itemW = (constraints.maxWidth - (8 * 3)) / 4;
                  return Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: shownBadges
                        .map((k) {
                          final b = _badges[k];
                          if (b == null) return const SizedBox.shrink();
                          final on = unlocked.contains(k);
                          final child = Column(
                            children: [
                              Container(
                                width: 40,
                                height: 40,
                                decoration: BoxDecoration(
                                  color: on
                                      ? AppColors.primary.withValues(
                                          alpha: 0.18,
                                        )
                                      : AppColors.surfaceElevated,
                                  borderRadius: BorderRadius.circular(14),
                                ),
                                child: Center(
                                  child: Icon(
                                    mdiFromName(b.icon),
                                    size: 18,
                                    color: on
                                        ? AppColors.primary
                                        : AppColors.textTertiary,
                                  ),
                                ),
                              ),
                              const SizedBox(height: 4),
                              Text(
                                b.name,
                                maxLines: 2,
                                overflow: TextOverflow.ellipsis,
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.w700,
                                  color: on
                                      ? AppColors.textPrimary
                                      : AppColors.textTertiary,
                                  height: 1.2,
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

              const SizedBox(height: 16),

              DepthButton(
                onPressed: _linkWithGoogle,
                colors: _linkingGoogle
                    ? const [Color(0xFF455A64), Color(0xFF455A64)]
                    : const [Color(0xFF4285F4), Color(0xFF0F5BD8)],
                shadowColor: _linkingGoogle
                    ? AppColors.borderLight
                    : const Color(0xFF0D47A1),
                borderRadius: BorderRadius.circular(16),
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 14,
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      if (_linkingGoogle)
                        const SizedBox(
                          width: 18,
                          height: 18,
                          child: CircularProgressIndicator(
                            strokeWidth: 2.2,
                            color: Colors.white,
                          ),
                        )
                      else
                        Icon(MdiIcons.account, size: 20, color: Colors.white),
                      const SizedBox(width: 10),
                      Text(
                        _linkingGoogle
                            ? "Redirection OAuth..."
                            : "Lier mon compte Google",
                        style: const TextStyle(
                          fontSize: 15,
                          fontWeight: FontWeight.w800,
                          color: Colors.white,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              if (!AppConfig.supabaseConfigured)
                const Padding(
                  padding: EdgeInsets.only(top: 8, left: 2, right: 2),
                  child: Text(
                    "OAuth web nécessite SUPABASE_URL et SUPABASE_PUBLISHABLE_KEY au build.",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                      color: AppColors.textSecondary,
                    ),
                  ),
                ),

              const SizedBox(height: 16),

              InkWell(
                onTap: _openGoCharbon,
                borderRadius: BorderRadius.circular(16),
                child: Container(
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [AppColors.primary, AppColors.gold],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                    borderRadius: BorderRadius.circular(16),
                    boxShadow: [
                      BoxShadow(
                        color: AppColors.primary.withValues(alpha: 0.4),
                        blurRadius: 12,
                        offset: const Offset(0, 6),
                      ),
                    ],
                  ),
                  padding: const EdgeInsets.symmetric(vertical: 15),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(MdiIcons.school, size: 22, color: Colors.white),
                      const SizedBox(width: 10),
                      const Text(
                        "Formations sur gocharbon.fr",
                        style: TextStyle(
                          fontSize: 15,
                          fontWeight: FontWeight.w800,
                          color: Colors.white,
                        ),
                      ),
                      const SizedBox(width: 10),
                      Icon(MdiIcons.arrowRight, size: 20, color: Colors.white),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 16),
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
