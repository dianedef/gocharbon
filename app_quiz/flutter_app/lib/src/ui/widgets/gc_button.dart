import "package:flutter/material.dart";

import "../../theme/app_colors.dart";
import "../../theme/app_theme.dart";
import "../../theme/generated/design_tokens.g.dart";

enum GcButtonVariant { primary, secondary }

/// Token-governed action button for all generic app actions.
///
/// Keep product-specific selection controls (quiz answers, segments and cards)
/// out of this component: their state is part of their interaction model.
class GcButton extends StatelessWidget {
  const GcButton.primary({
    super.key,
    required this.label,
    required this.onPressed,
    this.icon,
    this.isLoading = false,
    this.fullWidth = true,
  }) : variant = GcButtonVariant.primary;

  const GcButton.secondary({
    super.key,
    required this.label,
    required this.onPressed,
    this.icon,
    this.isLoading = false,
    this.fullWidth = true,
  }) : variant = GcButtonVariant.secondary;

  final String label;
  final VoidCallback? onPressed;
  final IconData? icon;
  final bool isLoading;
  final bool fullWidth;
  final GcButtonVariant variant;

  @override
  Widget build(BuildContext context) {
    final enabled = onPressed != null && !isLoading;
    final design = context.design;
    final isPrimary = variant == GcButtonVariant.primary;
    final accent = isPrimary ? design.primaryAction : design.secondaryAction;
    final background = enabled
        ? (isPrimary ? accent : design.surface)
        : GcDarkTokens.semanticColorActionDisabled;
    final foreground = isPrimary ? design.textOnAccent : accent;

    final button = Semantics(
      button: true,
      enabled: enabled,
      label: label,
      child: Material(
        color: GcAppColors.transparent,
        child: InkWell(
          onTap: enabled ? onPressed : null,
          borderRadius: GcRadii.control,
          focusColor: design.focus,
          child: Ink(
            decoration: BoxDecoration(
              color: background,
              borderRadius: GcRadii.control,
              border: Border.all(
                color: enabled
                    ? accent
                    : GcDarkTokens.semanticColorActionDisabled,
                width: GcDarkTokens.componentButtonBorderWidth,
              ),
              boxShadow: enabled ? const [GcShadows.medium] : null,
            ),
            child: ConstrainedBox(
              constraints: const BoxConstraints(
                minHeight: GcDarkTokens.componentButtonMinHeight,
              ),
              child: Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: GcDarkTokens.componentButtonPaddingInline,
                  vertical: GcDarkTokens.componentButtonPaddingBlock,
                ),
                child: Row(
                  mainAxisSize: fullWidth ? MainAxisSize.max : MainAxisSize.min,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    if (isLoading)
                      SizedBox(
                        width: GcSizes.iconXSmall,
                        height: GcSizes.iconXSmall,
                        child: CircularProgressIndicator(
                          strokeWidth: GcBorders.medium,
                          color: foreground,
                        ),
                      )
                    else if (icon != null)
                      Icon(icon, size: GcSizes.iconSmall, color: foreground),
                    if (isLoading || icon != null)
                      const SizedBox(width: GcSpace.x2),
                    Text(
                      label,
                      style: Theme.of(
                        context,
                      ).textTheme.labelLarge?.copyWith(color: foreground),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );

    return fullWidth ? SizedBox(width: double.infinity, child: button) : button;
  }
}

class GcIconButton extends StatelessWidget {
  const GcIconButton({
    super.key,
    required this.icon,
    required this.tooltip,
    required this.onPressed,
  });

  final IconData icon;
  final String tooltip;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) {
    final enabled = onPressed != null;
    final design = context.design;
    return Semantics(
      button: true,
      enabled: enabled,
      label: tooltip,
      child: Tooltip(
        message: tooltip,
        child: Material(
          color: GcAppColors.transparent,
          child: InkWell(
            onTap: onPressed,
            borderRadius: GcRadii.control,
            focusColor: design.focus,
            child: SizedBox(
              width: GcSizes.touchTarget,
              height: GcSizes.touchTarget,
              child: Center(
                child: Icon(
                  icon,
                  size: GcSizes.iconSmall,
                  color: GcAppColors.textTertiary,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
