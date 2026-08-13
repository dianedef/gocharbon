import "package:flutter/material.dart";

import "../../theme/app_colors.dart";
import "../../theme/generated/design_tokens.g.dart";

class GcQuizAnswerOption extends StatelessWidget {
  const GcQuizAnswerOption({
    super.key,
    required this.label,
    required this.text,
    required this.onTap,
    required this.borderColor,
    required this.background,
    required this.foreground,
    this.selected = false,
    this.enabled = true,
    this.trailing,
    this.showLeading = true,
  });
  final String label;
  final String text;
  final VoidCallback onTap;
  final Color borderColor;
  final Color background;
  final Color foreground;
  final bool selected;
  final bool enabled;
  final Widget? trailing;
  final bool showLeading;
  @override
  Widget build(BuildContext context) => Semantics(
    button: true,
    selected: selected,
    enabled: enabled,
    label: '$label. $text',
    child: Material(
      color: GcAppColors.transparent,
      child: InkWell(
        onTap: enabled ? onTap : null,
        focusColor: Theme.of(context).focusColor,
        child: Container(
          constraints: const BoxConstraints(minHeight: GcSizes.touchTarget),
          decoration: BoxDecoration(
            color: background,
            border: Border.all(
              color: borderColor,
              width: GcDarkTokens.componentCardBorderWidth,
            ),
          ),
          padding: const EdgeInsets.symmetric(
            horizontal: GcSpace.threeAndHalf,
            vertical: GcSpace.threeAndHalf,
          ),
          child: Row(
            children: [
              if (showLeading) ...[
                Container(
                  width: GcSizes.iconMedium,
                  height: GcSizes.iconMedium,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    border: Border.all(color: foreground),
                  ),
                  child: Text(
                    label,
                    style: TextStyle(
                      fontWeight: GcType.black,
                      color: foreground,
                    ),
                  ),
                ),
                const SizedBox(width: GcSpace.x3),
              ],
              Expanded(
                child: Text(
                  text,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    fontSize: GcType.body,
                    fontWeight: GcType.bold,
                    color: foreground,
                    height: GcType.tightHeight,
                  ),
                ),
              ),
              if (trailing case final Widget trailingWidget) trailingWidget,
            ],
          ),
        ),
      ),
    ),
  );
}
