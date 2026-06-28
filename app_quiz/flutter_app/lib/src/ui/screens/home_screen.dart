import "package:flutter/material.dart";
import "package:flutter_riverpod/flutter_riverpod.dart";
import "package:go_router/go_router.dart";
import "package:material_design_icons_flutter/material_design_icons_flutter.dart";

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
      final user = await ref.read(apiProvider).getUser(session.userId);
      final mode = await ref.read(storageProvider).getQuizMode();
      setState(() {
        _user = user;
        _mode = mode;
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
          backgroundColor: AppColors.bg,
          body: Center(child: CircularProgressIndicator(color: AppColors.primary)),
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
                      fontWeight: FontWeight.w600,
                      color: AppColors.textSecondary,
                    ),
                  ),
                  const SizedBox(height: 14),
                  DepthButton(
                    onPressed: _init,
                    colors: const [AppColors.primary, AppColors.primaryShadow],
                    shadowColor: AppColors.primaryShadow,
                    borderRadius: BorderRadius.circular(14),
                    child: const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                      child: Text(
                        "Réessayer",
                        style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: Colors.white),
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
          backgroundColor: AppColors.bg,
          body: Center(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Text(
                    "Impossible de charger le quiz pour l'instant.",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 15,
                      height: 1.4,
                      fontWeight: FontWeight.w600,
                      color: AppColors.textSecondary,
                    ),
                  ),
                  const SizedBox(height: 14),
                  DepthButton(
                    onPressed: _init,
                    colors: const [AppColors.primary, AppColors.primaryShadow],
                    shadowColor: AppColors.primaryShadow,
                    borderRadius: BorderRadius.circular(14),
                    child: const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                      child: Text(
                        "Réessayer",
                        style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: Colors.white),
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
        backgroundColor: AppColors.bg,
        body: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Expanded(
                    child: Row(
                      children: [
                        Container(
                          width: 46,
                          height: 46,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            boxShadow: [
                              BoxShadow(
                                color: avatarColor.withValues(alpha: 0.7),
                                blurRadius: 10,
                                spreadRadius: 0,
                              ),
                            ],
                          ),
                          child: DecoratedBox(
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: LinearGradient(
                                colors: [avatarColor, AppColors.primaryShadow],
                                begin: Alignment.topLeft,
                                end: Alignment.bottomRight,
                              ),
                              border: Border.all(color: const Color(0x33FFFFFF), width: 2),
                            ),
                            child: Center(
                              child: Text(
                                user.username.isNotEmpty ? user.username[0].toUpperCase() : "P",
                                style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: Colors.white),
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text(
                                "Salut,",
                                style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500, color: AppColors.textSecondary),
                              ),
                              Text(
                                user.username,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w800, color: AppColors.textPrimary),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 7),
                    decoration: BoxDecoration(
                      color: AppColors.surface,
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: AppColors.borderLight),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Image.asset(AppImages.diamond, width: 22, height: 22),
                        const SizedBox(width: 6),
                        Text(
                          formatNumber(user.xp),
                          style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: AppColors.gold),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 12),

              // Daily challenge
              GestureDetector(
                onTap: () => _go("daily"),
                child: Container(
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [AppColors.primary, AppColors.gold],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                    borderRadius: BorderRadius.circular(24),
                    boxShadow: const [
                      BoxShadow(
                        color: Color(0x66FF4A00),
                        blurRadius: 20,
                        offset: Offset(0, 8),
                      ),
                    ],
                  ),
                  padding: const EdgeInsets.all(18),
                  child: Row(
                    children: [
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                              decoration: BoxDecoration(
                                color: const Color(0x33000000),
                                borderRadius: BorderRadius.circular(10),
                              ),
                              child: Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Icon(MdiIcons.fire, size: 14, color: Colors.white),
                                  const SizedBox(width: 4),
                                  const Text(
                                    "DÉFI DU JOUR",
                                    style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: Colors.white, letterSpacing: 1),
                                  ),
                                ],
                              ),
                            ),
                            const SizedBox(height: 8),
                            const Text(
                              "Testez vos connaissances !",
                              style: TextStyle(fontSize: 19, fontWeight: FontWeight.w900, color: Colors.white),
                            ),
                            const SizedBox(height: 3),
                            const Text(
                              "10 questions mix · Bonus XP x2",
                              style: TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: Color(0xE0FFFFFF)),
                            ),
                          ],
                        ),
                      ),
                      Image.asset(AppImages.trophy, width: 70, height: 70),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 12),

              // Mode toggle
              Container(
                decoration: BoxDecoration(
                  color: AppColors.surface,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: AppColors.borderLight),
                ),
                padding: const EdgeInsets.all(3),
                child: Row(
                  children: [
                    Expanded(child: _ModeButton(
                      selected: _mode == "timed",
                      icon: MdiIcons.timer,
                      label: "Chrono",
                      onTap: () => _toggleMode("timed"),
                    )),
                    Expanded(child: _ModeButton(
                      selected: _mode == "relaxed",
                      icon: MdiIcons.infinity,
                      label: "Libre",
                      onTap: () => _toggleMode("relaxed"),
                    )),
                  ],
                ),
              ),

              const SizedBox(height: 12),

              // Categories
              Row(
                children: [
                  Expanded(child: _CategoryCard(info: CategoryConfig.finance, onTap: () => _go("finance"))),
                  const SizedBox(width: 10),
                  Expanded(child: _CategoryCard(info: CategoryConfig.marketing, onTap: () => _go("marketing"))),
                ],
              ),
              const SizedBox(height: 10),
              Row(
                children: [
                  Expanded(child: _CategoryCard(info: CategoryConfig.management, onTap: () => _go("management"))),
                  const SizedBox(width: 10),
                  Expanded(child: _CategoryCard(info: CategoryConfig.ecommerce, onTap: () => _go("ecommerce"))),
                ],
              ),

              const SizedBox(height: 14),

              // Quick play
              DepthButton(
                onPressed: () => _go("random"),
                colors: const [AppColors.gold, AppColors.goldShadow],
                shadowColor: AppColors.goldShadow,
                borderRadius: BorderRadius.circular(20),
                child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(MdiIcons.shuffleVariant, size: 22, color: Colors.black),
                      const SizedBox(width: 10),
                      const Text(
                        "Quick Play",
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: Colors.black),
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
        padding: const EdgeInsets.symmetric(vertical: 10),
        decoration: BoxDecoration(
          color: selected ? AppColors.primary : Colors.transparent,
          borderRadius: BorderRadius.circular(13),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 18, color: selected ? Colors.white : AppColors.textTertiary),
            const SizedBox(width: 6),
            Text(
              label,
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.w700,
                color: selected ? Colors.white : AppColors.textTertiary,
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
          color: AppColors.surface,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: info.color.withValues(alpha: 0.25)),
          boxShadow: const [
            BoxShadow(color: Color(0x4D000000), blurRadius: 12, offset: Offset(0, 6)),
          ],
        ),
        padding: const EdgeInsets.all(16),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 52,
              height: 52,
              decoration: BoxDecoration(
                color: info.color.withValues(alpha: 0.15),
                borderRadius: BorderRadius.circular(18),
              ),
              child: Icon(info.icon, size: 26, color: info.color),
            ),
            const SizedBox(height: 10),
            Text(
              info.name,
              style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: info.color),
            ),
          ],
        ),
      ),
    );
  }
}
