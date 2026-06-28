import "package:flutter/material.dart";
import "package:material_design_icons_flutter/material_design_icons_flutter.dart";

import "app_colors.dart";

class CategoryInfo {
  const CategoryInfo({
    required this.id,
    required this.name,
    required this.color,
    required this.icon,
  });

  final String id;
  final String name;
  final Color color;
  final IconData icon;
}

class CategoryConfig {
  static final finance = CategoryInfo(
    id: "finance",
    name: "Finance",
    color: AppColors.catFinance,
    icon: MdiIcons.cash,
  );

  static final marketing = CategoryInfo(
    id: "marketing",
    name: "Marketing",
    color: AppColors.catMarketing,
    icon: MdiIcons.bullhorn,
  );

  static final management = CategoryInfo(
    id: "management",
    name: "Management",
    color: AppColors.catManagement,
    icon: MdiIcons.accountTie,
  );

  static final ecommerce = CategoryInfo(
    id: "ecommerce",
    name: "E-commerce",
    color: AppColors.catEcommerce,
    icon: MdiIcons.cart,
  );

  static final random = CategoryInfo(
    id: "random",
    name: "Business",
    color: AppColors.primary,
    icon: MdiIcons.shuffleVariant,
  );

  static final daily = CategoryInfo(
    id: "daily",
    name: "Défi du jour",
    color: AppColors.gold,
    icon: MdiIcons.fire,
  );

  static final Map<String, CategoryInfo> byId = {
    "finance": finance,
    "marketing": marketing,
    "management": management,
    "ecommerce": ecommerce,
    "random": random,
    "daily": daily,
  };

  static CategoryInfo get(String id) {
    return byId[id] ?? random;
  }
}
