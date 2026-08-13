import "package:flutter/material.dart";

import "../../theme/app_colors.dart";
import "../../theme/generated/design_tokens.g.dart";

class AppCard extends StatelessWidget {
  const AppCard({
    super.key,
    required this.child,
    this.padding = const EdgeInsets.all(GcDarkTokens.componentCardPadding),
    this.backgroundColor = GcAppColors.surface,
    this.borderColor = GcAppColors.borderLight,
    this.margin = EdgeInsets.zero,
  });

  const AppCard.outlined({
    super.key,
    required this.child,
    required this.borderColor,
    this.padding = const EdgeInsets.all(GcDarkTokens.componentCardPadding),
    this.backgroundColor = GcAppColors.surface,
    this.margin = EdgeInsets.zero,
  });

  const AppCard.compact({
    super.key,
    required this.child,
    this.backgroundColor = GcAppColors.surface,
    this.borderColor = GcAppColors.borderLight,
    this.margin = EdgeInsets.zero,
  }) : padding = const EdgeInsets.all(GcSpace.x3);

  final Widget child;
  final EdgeInsets padding;
  final Color backgroundColor;
  final Color borderColor;
  final EdgeInsets margin;

  @override
  Widget build(BuildContext context) => Padding(
    padding: margin,
    child: DecoratedBox(
      decoration: BoxDecoration(
        color: backgroundColor,
        border: Border.all(
          color: borderColor,
          width: GcDarkTokens.componentCardBorderWidth,
        ),
        boxShadow: const [GcShadows.medium],
      ),
      child: Padding(padding: padding, child: child),
    ),
  );
}

class GcNavigationCard extends StatelessWidget {
  const GcNavigationCard({
    super.key,
    required this.onTap,
    required this.child,
    this.borderColor = GcAppColors.borderLight,
    this.backgroundColor = GcAppColors.surface,
    this.padding = const EdgeInsets.all(GcDarkTokens.componentCardPadding),
    this.margin = EdgeInsets.zero,
    this.label,
  });
  final VoidCallback onTap;
  final Widget child;
  final Color borderColor;
  final Color backgroundColor;
  final EdgeInsets padding;
  final String? label;
  final EdgeInsets margin;
  @override
  Widget build(BuildContext context) => Semantics(
    button: true,
    label: label,
    child: Material(
      color: GcAppColors.transparent,
      child: InkWell(
        onTap: onTap,
        focusColor: Theme.of(context).focusColor,
        child: AppCard.outlined(
          borderColor: borderColor,
          backgroundColor: backgroundColor,
          padding: padding,
          margin: margin,
          child: child,
        ),
      ),
    ),
  );
}

class GcSelectableCard extends StatelessWidget {
  const GcSelectableCard({
    super.key,
    required this.onTap,
    required this.child,
    required this.accent,
    this.selected = false,
    this.padding = const EdgeInsets.all(GcDarkTokens.componentCardPadding),
    this.margin = EdgeInsets.zero,
    this.label,
  });
  final VoidCallback onTap;
  final Widget child;
  final Color accent;
  final bool selected;
  final EdgeInsets padding;
  final String? label;
  final EdgeInsets margin;
  @override
  Widget build(BuildContext context) => Semantics(
    button: true,
    selected: selected,
    label: label,
    child: Material(
      color: GcAppColors.transparent,
      child: InkWell(
        onTap: onTap,
        focusColor: Theme.of(context).focusColor,
        child: AppCard.outlined(
          borderColor: accent,
          backgroundColor: selected
              ? GcAppColors.surfaceElevated
              : GcAppColors.surface,
          padding: padding,
          margin: margin,
          child: child,
        ),
      ),
    ),
  );
}

enum GcStatusCardVariant { info, success, warning, error, reward }

class GcStatusCard extends StatelessWidget {
  const GcStatusCard({
    super.key,
    required this.variant,
    required this.child,
    this.padding = const EdgeInsets.all(GcDarkTokens.componentCardPadding),
    this.margin = EdgeInsets.zero,
  });
  final GcStatusCardVariant variant;
  final Widget child;
  final EdgeInsets padding;
  final EdgeInsets margin;
  Color get _accent => switch (variant) {
    GcStatusCardVariant.success => GcAppColors.success,
    GcStatusCardVariant.warning ||
    GcStatusCardVariant.reward => GcAppColors.gold,
    GcStatusCardVariant.error => GcAppColors.error,
    GcStatusCardVariant.info => GcAppColors.secondary,
  };
  @override
  Widget build(BuildContext context) => AppCard.outlined(
    borderColor: _accent,
    padding: padding,
    margin: margin,
    child: child,
  );
}

class GcStatusPill extends StatelessWidget {
  const GcStatusPill({
    super.key,
    required this.icon,
    required this.label,
    required this.accent,
  });
  final IconData icon;
  final String label;
  final Color accent;
  @override
  Widget build(BuildContext context) => AppCard.compact(
    borderColor: accent,
    child: Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(icon, size: GcSizes.iconXSmall, color: accent),
        const SizedBox(width: GcSpace.x2),
        Text(
          label,
          style: Theme.of(
            context,
          ).textTheme.labelMedium?.copyWith(color: accent),
        ),
      ],
    ),
  );
}
