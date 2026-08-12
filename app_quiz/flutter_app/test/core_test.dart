import "package:flutter_test/flutter_test.dart";
import "package:gocharbon_quiz/src/theme/category_config.dart";
import "package:gocharbon_quiz/src/theme/app_colors.dart";
import "package:gocharbon_quiz/src/theme/app_theme.dart";
import "package:gocharbon_quiz/src/theme/generated/design_tokens.g.dart";
import "package:gocharbon_quiz/src/utils/color_utils.dart";

void main() {
  test("colorFromHex parses 6-digit hex", () {
    expect(colorFromHex("#FF0000").toARGB32(), 0xFFFF0000);
  });

  test("CategoryConfig.get falls back to random", () {
    expect(CategoryConfig.get("unknown").id, "random");
  });

  test("generated semantic roles feed the Flutter theme", () {
    final theme = AppTheme.dark();
    final design = theme.extension<GcDesignTheme>();

    expect(theme.colorScheme.primary, GcDarkTokens.semanticColorActionPrimary);
    expect(theme.scaffoldBackgroundColor, GcDarkTokens.semanticColorBackground);
    expect(design, isNotNull);
    expect(design!.touchTarget, greaterThanOrEqualTo(48));
    expect(design.cardRadius, GcDarkTokens.semanticShapeCardRadius);
    expect(design.interactionDuration, GcMotion.standard);
  });

  test("canonical typography and component minimums are wired", () {
    final theme = AppTheme.dark();

    expect(theme.textTheme.bodyMedium!.fontSize, GcType.body);
    expect(theme.textTheme.titleLarge!.fontSize, GcType.title);
    expect(
      theme.filledButtonTheme.style!.minimumSize!.resolve({})!.height,
      GcSizes.touchTarget,
    );
  });
}
