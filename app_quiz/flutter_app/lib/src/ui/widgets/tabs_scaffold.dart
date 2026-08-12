import "package:flutter/material.dart";
import "package:go_router/go_router.dart";
import "package:flutter_material_design_icons/flutter_material_design_icons.dart";

import "../../theme/app_colors.dart";

class TabsScaffold extends StatelessWidget {
  const TabsScaffold({super.key, required this.child, this.location});

  final Widget child;
  final String? location;

  int _indexFromLocation(String loc) {
    if (loc.startsWith("/leaderboard")) return 1;
    if (loc.startsWith("/profile")) return 2;
    return 0;
  }

  @override
  Widget build(BuildContext context) {
    final loc = location ?? "/";
    final index = _indexFromLocation(loc);
    const guideSafeBottomOffset = GcSizes.comfortableNavigation;

    return Scaffold(
      backgroundColor: GcAppColors.bg,
      body: Padding(
        padding: const EdgeInsets.only(bottom: guideSafeBottomOffset),
        child: child,
      ),
      bottomNavigationBar: SafeArea(
        top: false,
        child: Container(
          decoration: const BoxDecoration(
            border: Border(top: BorderSide(color: GcAppColors.borderLight)),
          ),
          child: BottomNavigationBar(
            currentIndex: index,
            onTap: (i) {
              if (i == 0) context.go("/");
              if (i == 1) context.go("/leaderboard");
              if (i == 2) context.go("/profile");
            },
            items: [
              BottomNavigationBarItem(
                icon: Icon(MdiIcons.homeVariant),
                label: "Home",
              ),
              BottomNavigationBarItem(
                icon: Icon(MdiIcons.trophy),
                label: "Leaderboard",
              ),
              BottomNavigationBarItem(
                icon: Icon(MdiIcons.account),
                label: "Profile",
              ),
            ],
          ),
        ),
      ),
    );
  }
}
