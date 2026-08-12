import "package:flutter/material.dart";
import "package:flutter_riverpod/flutter_riverpod.dart";
import "package:go_router/go_router.dart";
import "package:flutter_material_design_icons/flutter_material_design_icons.dart";

import "../../assets/app_images.dart";
import "../../models/user_profile.dart";
import "../../services/sounds/sounds.dart";
import "../../state/providers.dart";
import "../../theme/app_colors.dart";
import "../../theme/category_config.dart";
import "../../utils/color_utils.dart";
import "../../utils/format_utils.dart";
import "../widgets/depth_button.dart";

class HomeScreen extends ConsumerStatefulWidget {
  const HomeScreen({super.key});

  @override
  ConsumerState<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends ConsumerState<HomeScreen> {
  UserProfile? _user;
  String _mode = "timed";
  bool _loading = true;
  String? _error;
  bool _offline = false;

  @override
  void initState() {
    super.initState();
    _init();
  }

  Future<void> _init() async {
    setState(() {
      _loading = true;
      _error = null;
    });

    try {
      final session = await ref.read(sessionProvider.future);
      final user = await ref.read(sessionServiceProvider).loadProfile(session);
      final mode = await ref.read(storageProvider).getQuizMode();
      setState(() {
        _user = user;
        _mode = mode;
        _offline = session.isOffline;
      });
    } catch (_) {
      setState(() => _error = "Impossible de charger le quiz pour l'instant.");
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  Future<void> _toggleMode(String mode) async {
    await Sounds.instance.click();
    setState(() => _mode = mode);
    await ref.read(storageProvider).setQuizMode(mode);
  }

  Future<void> _go(String category) async {
    await Sounds.instance.click();
    if (!mounted) return;
    context.push("/quiz/$category?mode=$_mode");
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
                      fontWeight: GcType.bold,
                      color: GcAppColors.textSecondary,
                    ),
                  ),
                  const SizedBox(height: GcSpace.x4),
                  DepthButton(
                    onPressed: _init,
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
                          fontSize: GcType.body,
                          fontWeight: GcType.black,
                          color: GcAppColors.textPrimary,
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
      return SafeArea(
        child: Scaffold(
          backgroundColor: GcAppColors.bg,
          body: Center(
            child: Padding(
              padding: const EdgeInsets.all(GcSpace.x4),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Text(
                    "Impossible de charger le quiz pour l'instant.",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: GcType.body,
                      height: GcType.bodyHeight,
                      fontWeight: GcType.bold,
                      color: GcAppColors.textSecondary,
                    ),
                  ),
                  const SizedBox(height: GcSpace.x4),
                  DepthButton(
                    onPressed: _init,
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
                          fontSize: GcType.body,
                          fontWeight: GcType.black,
                          color: GcAppColors.textPrimary,
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
    final avatarColor = colorFromHex(user.avatarColor);

    return SafeArea(
      child: Scaffold(
        backgroundColor: GcAppColors.bg,
        body: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(
            horizontal: GcSpace.x4,
            vertical: GcSpace.x2,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              if (_offline) ...[
                Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: GcSpace.x3,
                    vertical: GcSpace.x2,
                  ),
                  decoration: BoxDecoration(
                    color: GcAppColors.surface,
                    borderRadius: GcRadii.card,
                    border: Border.all(color: GcAppColors.gold),
                  ),
                  child: const Text(
                    "Mode hors ligne · profil invité local",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: GcType.caption,
                      fontWeight: GcType.bold,
                      color: GcAppColors.gold,
                    ),
                  ),
                ),
                const SizedBox(height: GcSpace.x3),
              ],
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Expanded(
                    child: Row(
                      children: [
                        Container(
                          width: GcSizes.avatarMedium,
                          height: GcSizes.avatarMedium,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            boxShadow: [
                              BoxShadow(
                                color: avatarColor.withValues(
                                  alpha: GcOpacity.muted,
                                ),
                                blurRadius: GcSpace.twoAndHalf,
                                spreadRadius: GcSpace.zero,
                              ),
                            ],
                          ),
                          child: DecoratedBox(
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: LinearGradient(
                                colors: [
                                  avatarColor,
                                  GcAppColors.primaryShadow,
                                ],
                                begin: Alignment.topLeft,
                                end: Alignment.bottomRight,
                              ),
                              border: Border.all(
                                color: GcAppColors.borderLight,
                                width: GcBorders.medium,
                              ),
                            ),
                            child: Center(
                              child: Text(
                                user.username.isNotEmpty
                                    ? user.username[0].toUpperCase()
                                    : "P",
                                style: const TextStyle(
                                  fontSize: GcType.titleSmall,
                                  fontWeight: GcType.black,
                                  color: GcAppColors.textPrimary,
                                ),
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(width: GcSpace.x3),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text(
                                "Salut,",
                                style: TextStyle(
                                  fontSize: GcType.caption,
                                  fontWeight: GcType.medium,
                                  color: GcAppColors.textSecondary,
                                ),
                              ),
                              Text(
                                user.username,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: const TextStyle(
                                  fontSize: GcType.bodyLarge,
                                  fontWeight: GcType.black,
                                  color: GcAppColors.textPrimary,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: GcSpace.threeAndHalf,
                      vertical: GcSpace.oneAndThreeQuarter,
                    ),
                    decoration: BoxDecoration(
                      color: GcAppColors.surface,
                      borderRadius: GcRadii.card,
                      border: Border.all(color: GcAppColors.borderLight),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Image.asset(
                          AppImages.diamond,
                          width: GcSizes.iconSmall,
                          height: GcSizes.iconSmall,
                        ),
                        const SizedBox(width: GcSpace.x2),
                        Text(
                          formatNumber(user.xp),
                          style: const TextStyle(
                            fontSize: GcType.body,
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

              // Daily challenge
              GestureDetector(
                onTap: () => _go("daily"),
                child: Container(
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [GcAppColors.primary, GcAppColors.gold],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                    borderRadius: GcRadii.card,
                    boxShadow: const [
                      BoxShadow(
                        color: GcAppColors.primary,
                        blurRadius: GcSpace.x5,
                        offset: Offset(GcSpace.zero, GcSpace.x2),
                      ),
                    ],
                  ),
                  padding: const EdgeInsets.all(GcSpace.x5),
                  child: Row(
                    children: [
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(
                                horizontal: GcSpace.x2,
                                vertical: GcSpace.threeQuarter,
                              ),
                              decoration: BoxDecoration(
                                color: GcAppColors.bg,
                                borderRadius: GcRadii.card,
                              ),
                              child: Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Icon(
                                    MdiIcons.fire,
                                    size: GcType.caption,
                                    color: GcAppColors.textPrimary,
                                  ),
                                  const SizedBox(width: GcSpace.x1),
                                  const Text(
                                    "DÉFI DU JOUR",
                                    style: TextStyle(
                                      fontSize: GcType.caption,
                                      fontWeight: GcType.black,
                                      color: GcAppColors.textPrimary,
                                      letterSpacing: GcType.wideTracking,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            const SizedBox(height: GcSpace.x2),
                            const Text(
                              "Testez vos connaissances !",
                              style: TextStyle(
                                fontSize: GcType.titleSmall,
                                fontWeight: GcType.black,
                                color: GcAppColors.textPrimary,
                              ),
                            ),
                            const SizedBox(height: GcSpace.x1),
                            const Text(
                              "10 questions mix · Bonus XP x2",
                              style: TextStyle(
                                fontSize: GcType.caption,
                                fontWeight: GcType.bold,
                                color: GcAppColors.textPrimary,
                              ),
                            ),
                          ],
                        ),
                      ),
                      Image.asset(
                        AppImages.trophy,
                        width: GcSizes.achievementCompact,
                        height: GcSizes.achievementCompact,
                      ),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: GcSpace.x3),

              // Mode toggle
              Container(
                decoration: BoxDecoration(
                  color: GcAppColors.surface,
                  borderRadius: GcRadii.card,
                  border: Border.all(color: GcAppColors.borderLight),
                ),
                padding: const EdgeInsets.all(GcSpace.threeQuarter),
                child: Row(
                  children: [
                    Expanded(
                      child: _ModeButton(
                        selected: _mode == "timed",
                        icon: MdiIcons.timer,
                        label: "Chrono",
                        onTap: () => _toggleMode("timed"),
                      ),
                    ),
                    Expanded(
                      child: _ModeButton(
                        selected: _mode == "relaxed",
                        icon: MdiIcons.infinity,
                        label: "Libre",
                        onTap: () => _toggleMode("relaxed"),
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: GcSpace.x3),

              // Categories
              Row(
                children: [
                  Expanded(
                    child: _CategoryCard(
                      info: CategoryConfig.finance,
                      onTap: () => _go("finance"),
                    ),
                  ),
                  const SizedBox(width: GcSpace.x3),
                  Expanded(
                    child: _CategoryCard(
                      info: CategoryConfig.marketing,
                      onTap: () => _go("marketing"),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: GcSpace.x3),
              Row(
                children: [
                  Expanded(
                    child: _CategoryCard(
                      info: CategoryConfig.management,
                      onTap: () => _go("management"),
                    ),
                  ),
                  const SizedBox(width: GcSpace.x3),
                  Expanded(
                    child: _CategoryCard(
                      info: CategoryConfig.ecommerce,
                      onTap: () => _go("ecommerce"),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: GcSpace.x4),

              // Quick play
              DepthButton(
                onPressed: () => _go("random"),
                colors: const [GcAppColors.gold, GcAppColors.goldShadow],
                shadowColor: GcAppColors.goldShadow,
                borderRadius: GcRadii.card,
                child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: GcSpace.x4),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        MdiIcons.shuffleVariant,
                        size: GcSizes.iconSmall,
                        color: GcAppColors.textOnAccent,
                      ),
                      const SizedBox(width: GcSpace.x3),
                      const Text(
                        "Quick Play",
                        style: TextStyle(
                          fontSize: GcType.bodyLarge,
                          fontWeight: GcType.black,
                          color: GcAppColors.textOnAccent,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _ModeButton extends StatelessWidget {
  const _ModeButton({
    required this.selected,
    required this.icon,
    required this.label,
    required this.onTap,
  });

  final bool selected;
  final IconData icon;
  final String label;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: GcSpace.twoAndHalf),
        decoration: BoxDecoration(
          color: selected ? GcAppColors.primary : GcAppColors.transparent,
          borderRadius: GcRadii.card,
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              icon,
              size: GcSizes.iconXSmall,
              color: selected
                  ? GcAppColors.textPrimary
                  : GcAppColors.textTertiary,
            ),
            const SizedBox(width: GcSpace.x2),
            Text(
              label,
              style: TextStyle(
                fontSize: GcType.caption,
                fontWeight: GcType.bold,
                color: selected
                    ? GcAppColors.textPrimary
                    : GcAppColors.textTertiary,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _CategoryCard extends StatelessWidget {
  const _CategoryCard({required this.info, required this.onTap});

  final CategoryInfo info;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          color: GcAppColors.surface,
          borderRadius: GcRadii.card,
          border: Border.all(
            color: info.color.withValues(alpha: GcOpacity.disabled),
          ),
          boxShadow: const [
            BoxShadow(
              color: GcAppColors.primaryShadow,
              blurRadius: GcSpace.x3,
              offset: Offset(GcSpace.zero, GcSpace.oneAndHalf),
            ),
          ],
        ),
        padding: const EdgeInsets.all(GcSpace.x4),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: GcSizes.categoryBadge,
              height: GcSizes.categoryBadge,
              decoration: BoxDecoration(
                color: info.color.withValues(alpha: GcOpacity.disabled),
                borderRadius: GcRadii.card,
              ),
              child: Icon(
                info.icon,
                size: GcSizes.iconMedium,
                color: info.color,
              ),
            ),
            const SizedBox(height: GcSpace.x3),
            Text(
              info.name,
              style: TextStyle(
                fontSize: GcType.body,
                fontWeight: GcType.black,
                color: info.color,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
