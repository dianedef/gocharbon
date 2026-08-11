import "package:flutter/material.dart";
import "package:flutter_material_design_icons/flutter_material_design_icons.dart";

IconData mdiFromName(String? name) {
  switch (name) {
    case "flag":
      return MdiIcons.flag;
    case "star":
      return MdiIcons.star;
    case "flash":
      return MdiIcons.flash;
    case "fire":
      return MdiIcons.fire;
    case "shield":
      return MdiIcons.shield;
    case "cash":
      return MdiIcons.cash;
    case "bullhorn":
      return MdiIcons.bullhorn;
    case "briefcase":
      return MdiIcons.briefcase;
    case "cart":
      return MdiIcons.cart;
    case "trending-up":
      return MdiIcons.trendingUp;
    case "trophy":
      return MdiIcons.trophy;
    case "book":
      return MdiIcons.book;
    case "school":
      return MdiIcons.school;
    default:
      return MdiIcons.star;
  }
}

