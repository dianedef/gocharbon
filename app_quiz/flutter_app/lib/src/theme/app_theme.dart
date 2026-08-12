import "package:flutter/material.dart";

import "app_colors.dart";
import "generated/design_tokens.g.dart";

@immutable
class GcDesignTheme extends ThemeExtension<GcDesignTheme> {
  const GcDesignTheme({
    required this.background,
    required this.surface,
    required this.surfaceStrong,
    required this.text,
    required this.textMuted,
    required this.textOnAccent,
    required this.border,
    required this.shadow,
    required this.primaryAction,
    required this.secondaryAction,
    required this.focus,
    required this.success,
    required this.error,
    required this.touchTarget,
    required this.navigationHeight,
    required this.cardRadius,
    required this.controlRadius,
    required this.borderWidth,
    required this.interactionDuration,
    required this.interactionCurve,
  });

  final Color background;
  final Color surface;
  final Color surfaceStrong;
  final Color text;
  final Color textMuted;
  final Color textOnAccent;
  final Color border;
  final Color shadow;
  final Color primaryAction;
  final Color secondaryAction;
  final Color focus;
  final Color success;
  final Color error;
  final double touchTarget;
  final double navigationHeight;
  final double cardRadius;
  final double controlRadius;
  final double borderWidth;
  final Duration interactionDuration;
  final Curve interactionCurve;

  static const dark = GcDesignTheme(
    background: GcDarkTokens.semanticColorBackground,
    surface: GcDarkTokens.semanticColorSurface,
    surfaceStrong: GcDarkTokens.semanticColorSurfaceStrong,
    text: GcDarkTokens.semanticColorText,
    textMuted: GcDarkTokens.semanticColorTextMuted,
    textOnAccent: GcDarkTokens.semanticColorTextOnAccent,
    border: GcDarkTokens.semanticColorBorder,
    shadow: GcDarkTokens.semanticColorShadow,
    primaryAction: GcDarkTokens.semanticColorActionPrimary,
    secondaryAction: GcDarkTokens.semanticColorActionSecondary,
    focus: GcDarkTokens.semanticColorFocus,
    success: GcDarkTokens.semanticColorFeedbackSuccess,
    error: GcDarkTokens.semanticColorFeedbackError,
    touchTarget: GcDarkTokens.surfaceAppTouchTarget,
    navigationHeight: GcDarkTokens.surfaceAppComfortableNavigationHeight,
    cardRadius: GcDarkTokens.semanticShapeCardRadius,
    controlRadius: GcDarkTokens.semanticShapeControlRadius,
    borderWidth: GcDarkTokens.semanticShapeBorderWidth,
    interactionDuration: GcDarkTokens.semanticMotionInteractionDuration,
    interactionCurve: GcDarkTokens.semanticMotionInteractionEasing,
  );

  @override
  GcDesignTheme copyWith({
    Color? background,
    Color? surface,
    Color? surfaceStrong,
    Color? text,
    Color? textMuted,
    Color? textOnAccent,
    Color? border,
    Color? shadow,
    Color? primaryAction,
    Color? secondaryAction,
    Color? focus,
    Color? success,
    Color? error,
    double? touchTarget,
    double? navigationHeight,
    double? cardRadius,
    double? controlRadius,
    double? borderWidth,
    Duration? interactionDuration,
    Curve? interactionCurve,
  }) => GcDesignTheme(
    background: background ?? this.background,
    surface: surface ?? this.surface,
    surfaceStrong: surfaceStrong ?? this.surfaceStrong,
    text: text ?? this.text,
    textMuted: textMuted ?? this.textMuted,
    textOnAccent: textOnAccent ?? this.textOnAccent,
    border: border ?? this.border,
    shadow: shadow ?? this.shadow,
    primaryAction: primaryAction ?? this.primaryAction,
    secondaryAction: secondaryAction ?? this.secondaryAction,
    focus: focus ?? this.focus,
    success: success ?? this.success,
    error: error ?? this.error,
    touchTarget: touchTarget ?? this.touchTarget,
    navigationHeight: navigationHeight ?? this.navigationHeight,
    cardRadius: cardRadius ?? this.cardRadius,
    controlRadius: controlRadius ?? this.controlRadius,
    borderWidth: borderWidth ?? this.borderWidth,
    interactionDuration: interactionDuration ?? this.interactionDuration,
    interactionCurve: interactionCurve ?? this.interactionCurve,
  );

  @override
  GcDesignTheme lerp(covariant GcDesignTheme? other, double t) {
    if (other == null) return this;
    return t < 0.5 ? this : other;
  }
}

extension GcThemeContext on BuildContext {
  GcDesignTheme get design =>
      Theme.of(this).extension<GcDesignTheme>() ?? GcDesignTheme.dark;
}

abstract final class AppTheme {
  static ThemeData dark() {
    const colors = ColorScheme.dark(
      primary: GcDarkTokens.semanticColorActionPrimary,
      onPrimary: GcDarkTokens.semanticColorTextOnAccent,
      secondary: GcDarkTokens.semanticColorActionSecondary,
      onSecondary: GcDarkTokens.semanticColorTextOnAccent,
      surface: GcDarkTokens.semanticColorSurface,
      onSurface: GcDarkTokens.semanticColorText,
      error: GcDarkTokens.semanticColorFeedbackError,
      onError: GcDarkTokens.semanticColorTextOnAccent,
      outline: GcDarkTokens.semanticColorBorder,
      shadow: GcDarkTokens.semanticColorShadow,
    );
    final base = ThemeData(
      brightness: Brightness.dark,
      useMaterial3: true,
      colorScheme: colors,
      // Canonical web fonts are not bundled yet. Flutter falls back to the
      // platform sans-serif until governed font assets become available.
      fontFamily: GcDarkTokens.semanticTypeBodyFamily,
    );
    final textTheme = base.textTheme
        .copyWith(
          displayLarge: const TextStyle(
            fontFamily: GcDarkTokens.semanticTypeDisplayFamily,
            fontSize: GcDarkTokens.primitiveFontSizeDisplayLarge,
            height: GcDarkTokens.primitiveFontLineHeightTight,
            fontWeight: FontWeight.w900,
          ),
          displaySmall: const TextStyle(
            fontFamily: GcDarkTokens.semanticTypeDisplayFamily,
            fontSize: GcDarkTokens.primitiveFontSizeDisplaySmall,
            height: GcDarkTokens.primitiveFontLineHeightTight,
            fontWeight: FontWeight.w900,
          ),
          titleLarge: const TextStyle(
            fontFamily: GcDarkTokens.semanticTypeDisplayFamily,
            fontSize: GcDarkTokens.primitiveFontSizeTitle,
            fontWeight: FontWeight.w900,
          ),
          titleMedium: const TextStyle(
            fontFamily: GcDarkTokens.semanticTypeDisplayFamily,
            fontSize: GcDarkTokens.primitiveFontSizeTitleSmall,
            fontWeight: FontWeight.w700,
          ),
          bodyLarge: const TextStyle(
            fontSize: GcDarkTokens.primitiveFontSizeBodyLarge,
            height: GcDarkTokens.primitiveFontLineHeightBody,
            fontWeight: FontWeight.w500,
          ),
          bodyMedium: const TextStyle(
            fontSize: GcDarkTokens.primitiveFontSizeBody,
            height: GcDarkTokens.primitiveFontLineHeightBody,
            fontWeight: FontWeight.w400,
          ),
          labelLarge: const TextStyle(
            fontFamily: GcDarkTokens.semanticTypeActionFamily,
            fontSize: GcDarkTokens.primitiveFontSizeBody,
            fontWeight: FontWeight.w700,
          ),
          labelMedium: const TextStyle(
            fontFamily: GcDarkTokens.semanticTypeActionFamily,
            fontSize: GcDarkTokens.primitiveFontSizeCaption,
            fontWeight: FontWeight.w700,
          ),
        )
        .apply(bodyColor: colors.onSurface, displayColor: colors.onSurface);

    const controlShape = RoundedRectangleBorder(
      borderRadius: GcRadii.control,
      side: BorderSide(
        color: GcAppColors.borderMedium,
        width: GcDarkTokens.semanticShapeBorderWidth,
      ),
    );
    return base.copyWith(
      scaffoldBackgroundColor: GcAppColors.bg,
      dividerColor: GcAppColors.borderLight,
      textTheme: textTheme,
      extensions: const [GcDesignTheme.dark],
      visualDensity: VisualDensity.standard,
      materialTapTargetSize: MaterialTapTargetSize.padded,
      focusColor: GcDarkTokens.semanticColorFocus,
      appBarTheme: const AppBarTheme(
        backgroundColor: GcAppColors.transparent,
        elevation: 0,
        scrolledUnderElevation: 0,
        foregroundColor: GcAppColors.textPrimary,
        centerTitle: true,
      ),
      cardTheme: const CardThemeData(
        color: GcAppColors.surface,
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: GcRadii.card,
          side: BorderSide(
            color: GcAppColors.borderLight,
            width: GcDarkTokens.componentCardBorderWidth,
          ),
        ),
      ),
      filledButtonTheme: FilledButtonThemeData(
        style: FilledButton.styleFrom(
          minimumSize: const Size.fromHeight(GcSizes.touchTarget),
          padding: const EdgeInsets.symmetric(
            horizontal: GcDarkTokens.componentButtonPaddingInline,
            vertical: GcDarkTokens.componentButtonPaddingBlock,
          ),
          shape: controlShape,
          textStyle: textTheme.labelLarge,
        ),
      ),
      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          minimumSize: const Size.fromHeight(GcSizes.touchTarget),
          shape: controlShape,
          textStyle: textTheme.labelLarge,
        ),
      ),
      inputDecorationTheme: const InputDecorationTheme(
        constraints: BoxConstraints(minHeight: GcSizes.touchTarget),
        contentPadding: EdgeInsets.symmetric(
          horizontal: GcDarkTokens.componentInputPaddingInline,
          vertical: GcSpace.x3,
        ),
        border: OutlineInputBorder(borderRadius: GcRadii.control),
      ),
      bottomNavigationBarTheme: const BottomNavigationBarThemeData(
        backgroundColor: GcAppColors.surface,
        selectedItemColor: GcAppColors.secondary,
        unselectedItemColor: GcAppColors.textTertiary,
        showSelectedLabels: false,
        showUnselectedLabels: false,
        type: BottomNavigationBarType.fixed,
      ),
      progressIndicatorTheme: const ProgressIndicatorThemeData(
        color: GcDarkTokens.componentProgressFillColor,
        linearTrackColor: GcDarkTokens.componentProgressTrackColor,
      ),
      snackBarTheme: const SnackBarThemeData(
        backgroundColor: GcAppColors.surface,
        contentTextStyle: TextStyle(color: GcAppColors.textPrimary),
      ),
    );
  }
}
