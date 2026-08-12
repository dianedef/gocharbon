import "package:flutter/material.dart";

import "../../theme/app_colors.dart";
import "../../theme/generated/design_tokens.g.dart";

class AppCard extends StatelessWidget {
  const AppCard({
    super.key,
    required this.child,
    this.padding = const EdgeInsets.all(GcSpace.x3),
    this.borderRadius = GcRadii.card,
    this.backgroundColor = GcAppColors.surface,
    this.borderColor = GcAppColors.borderLight,
  });

  final Widget child;
  final EdgeInsets padding;
  final BorderRadius borderRadius;
  final Color backgroundColor;
  final Color borderColor;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: borderRadius,
        border: Border.all(
          color: borderColor,
          width: GcDarkTokens.componentCardBorderWidth,
        ),
      ),
      padding: padding,
      child: child,
    );
  }
}
