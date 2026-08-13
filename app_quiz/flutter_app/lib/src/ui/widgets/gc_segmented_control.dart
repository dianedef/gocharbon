import "package:flutter/material.dart";

import "../../theme/app_colors.dart";
import "../../theme/generated/design_tokens.g.dart";

class GcSegmentedControl extends StatelessWidget {
  const GcSegmentedControl({
    super.key,
    required this.options,
    required this.selectedIndex,
  });
  final List<GcSegmentOption> options;
  final int selectedIndex;
  @override
  Widget build(BuildContext context) => DecoratedBox(
    decoration: BoxDecoration(
      border: Border.all(
        color: GcAppColors.borderLight,
        width: GcDarkTokens.componentCardBorderWidth,
      ),
    ),
    child: Row(
      children: List.generate(options.length, (index) {
        final option = options[index];
        final selected = index == selectedIndex;
        return Expanded(
          child: Semantics(
            button: true,
            selected: selected,
            label: option.label,
            child: Material(
              color: GcAppColors.transparent,
              child: InkWell(
                onTap: option.onTap,
                focusColor: Theme.of(context).focusColor,
                child: ConstrainedBox(
                  constraints: const BoxConstraints(
                    minHeight: GcSizes.touchTarget,
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        option.icon,
                        size: GcSizes.iconXSmall,
                        color: selected
                            ? GcAppColors.textPrimary
                            : GcAppColors.textTertiary,
                      ),
                      const SizedBox(width: GcSpace.x2),
                      Text(
                        option.label,
                        style: Theme.of(context).textTheme.labelMedium
                            ?.copyWith(
                              color: selected
                                  ? GcAppColors.textPrimary
                                  : GcAppColors.textTertiary,
                            ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        );
      }),
    ),
  );
}

class GcSegmentOption {
  const GcSegmentOption({
    required this.label,
    required this.icon,
    required this.onTap,
  });
  final String label;
  final IconData icon;
  final VoidCallback onTap;
}
