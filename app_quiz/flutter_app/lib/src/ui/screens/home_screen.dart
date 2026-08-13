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
import "../widgets/gc_button.dart";
import "../widgets/app_card.dart";
import "../widgets/gc_segmented_control.dart";

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
                  GcButton.primary(onPressed: _init, label: "Réessayer"),
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
                  GcButton.primary(onPressed: _init, label: "Réessayer"),
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
                GcStatusCard(
                  variant: GcStatusCardVariant.warning,
                  padding: const EdgeInsets.symmetric(
                    horizontal: GcSpace.x3,
                    vertical: GcSpace.x2,
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
              GcNavigationCard(
                onTap: () => _go("daily"),
                label: "Défi du jour",
                backgroundColor: GcAppColors.primary,
                borderColor: GcAppColors.gold,
                padding: const EdgeInsets.all(GcSpace.x5),
                child: Container(
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [GcAppColors.primary, GcAppColors.gold],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                  ),
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
              GcSegmentedControl(
                selectedIndex: _mode == "timed" ? 0 : 1,
                options: [
                  GcSegmentOption(
                    label: "Chrono",
                    icon: MdiIcons.timer,
                    onTap: () => _toggleMode("timed"),
                  ),
                  GcSegmentOption(
                    label: "Libre",
                    icon: MdiIcons.infinity,
                    onTap: () => _toggleMode("relaxed"),
                  ),
                ],
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
              GcButton.primary(
                onPressed: () => _go("random"),
                label: "Quick Play",
                icon: MdiIcons.shuffleVariant,
              ),
            ],
          ),
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
    return GcSelectableCard(
      onTap: onTap,
      label: info.name,
      accent: info.color,
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
            child: Icon(info.icon, size: GcSizes.iconMedium, color: info.color),
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
    );
  }
}
