import "package:flutter/material.dart";

import "../../theme/app_colors.dart";
import "../../theme/generated/design_tokens.g.dart";

class DepthButton extends StatelessWidget {
  const DepthButton({
    super.key,
    required this.onPressed,
    required this.colors,
    required this.shadowColor,
    required this.child,
    this.borderRadius = GcRadii.control,
    this.paddingBottom = GcSpace.x1,
  });

  final VoidCallback onPressed;
  final List<Color> colors;
  final Color shadowColor;
  final Widget child;
  final BorderRadius borderRadius;
  final double paddingBottom;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(color: shadowColor, borderRadius: borderRadius),
      padding: EdgeInsets.only(bottom: paddingBottom),
      child: Material(
        color: GcAppColors.transparent,
        child: InkWell(
          onTap: onPressed,
          borderRadius: borderRadius,
          child: Ink(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: colors,
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
              borderRadius: borderRadius,
              border: Border.all(
                color: GcAppColors.borderMedium,
                width: GcDarkTokens.componentButtonBorderWidth,
              ),
            ),
            child: child,
          ),
        ),
      ),
    );
  }
}
