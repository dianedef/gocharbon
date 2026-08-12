import "package:flutter/material.dart";

import "generated/design_tokens.g.dart";

/// Semantic application palette backed exclusively by the generated authority.
abstract final class GcAppColors {
  static const bg = GcDarkTokens.semanticColorBackground;
  static const surface = GcDarkTokens.semanticColorSurface;
  static const surfaceElevated = GcDarkTokens.semanticColorSurfaceStrong;
  static const glass = GcDarkTokens.semanticColorSurface;
  static const primary = GcDarkTokens.semanticColorActionSecondary;
  static const primaryShadow = GcDarkTokens.semanticColorShadow;
  static const secondary = GcDarkTokens.semanticColorActionPrimary;
  static const secondaryShadow = GcDarkTokens.semanticColorShadow;
  static const gold = GcDarkTokens.primitiveColorBrandYellow;
  static const goldShadow = GcDarkTokens.semanticColorShadow;
  static const success = GcDarkTokens.semanticColorFeedbackSuccess;
  static const successShadow = GcDarkTokens.semanticColorShadow;
  static const error = GcDarkTokens.semanticColorFeedbackError;
  static const errorShadow = GcDarkTokens.semanticColorShadow;
  static const textPrimary = GcDarkTokens.semanticColorText;
  static const textSecondary = GcDarkTokens.semanticColorTextMuted;
  static const textTertiary = GcDarkTokens.semanticColorTextMuted;
  static const textOnAccent = GcDarkTokens.semanticColorTextOnAccent;
  static const borderLight = GcDarkTokens.semanticColorBorder;
  static const borderMedium = GcDarkTokens.semanticColorBorder;
  static const transparent = GcDarkTokens.primitiveColorTransparent;

  // Category differentiation uses the governed brand accents and always keeps
  // a text/icon label, so meaning never relies on colour alone.
  static const catFinance = GcDarkTokens.primitiveColorBrandYellow;
  static const catMarketing = GcDarkTokens.primitiveColorBrandOrange;
  static const catManagement = GcDarkTokens.primitiveColorBrandCream;
  static const catEcommerce = GcDarkTokens.primitiveColorBrandCharcoal;
}

abstract final class GcSpace {
  static const zero = GcDarkTokens.primitiveSpace0;
  static const x1 = GcDarkTokens.primitiveSpace1;
  static const x2 = GcDarkTokens.primitiveSpace2;
  static const x3 = GcDarkTokens.primitiveSpace3;
  static const x4 = GcDarkTokens.primitiveSpace4;
  static const x5 = GcDarkTokens.primitiveSpace5;
  static const x6 = GcDarkTokens.primitiveSpace6;
  static const x8 = GcDarkTokens.primitiveSpace8;
  static const x10 = GcDarkTokens.primitiveSpace10;
  static const x12 = GcDarkTokens.primitiveSpace12;
  static const x16 = GcDarkTokens.primitiveSpace16;
  static const half = GcDarkTokens.primitiveSpaceHalf;
  static const threeQuarter = GcDarkTokens.primitiveSpaceThreeQuarter;
  static const oneAndQuarter = GcDarkTokens.primitiveSpaceOneAndQuarter;
  static const oneAndHalf = GcDarkTokens.primitiveSpaceOneAndHalf;
  static const oneAndThreeQuarter =
      GcDarkTokens.primitiveSpaceOneAndThreeQuarter;
  static const twoAndQuarter = GcDarkTokens.primitiveSpaceTwoAndQuarter;
  static const twoAndHalf = GcDarkTokens.primitiveSpaceTwoAndHalf;
  static const threeAndHalf = GcDarkTokens.primitiveSpaceThreeAndHalf;
  static const threeAndThreeQuarter =
      GcDarkTokens.primitiveSpaceThreeAndThreeQuarter;
}

abstract final class GcRadii {
  static const none = Radius.circular(GcDarkTokens.primitiveRadiusNone);
  static const small = Radius.circular(GcDarkTokens.primitiveRadiusSmall);
  static const medium = Radius.circular(GcDarkTokens.primitiveRadiusMedium);
  static const pill = Radius.circular(GcDarkTokens.primitiveRadiusPill);
  static const control = BorderRadius.all(small);
  static const card = BorderRadius.all(medium);
  static const fullyRounded = BorderRadius.all(pill);
}

abstract final class GcSizes {
  static const touchTarget = GcDarkTokens.surfaceAppTouchTarget;
  static const compactNavigation =
      GcDarkTokens.surfaceAppCompactNavigationHeight;
  static const comfortableNavigation =
      GcDarkTokens.surfaceAppComfortableNavigationHeight;
  static const contentNarrow = GcDarkTokens.primitiveSizeContentNarrow;
  static const contentWide = GcDarkTokens.primitiveSizeContentWide;
  static const avatarSmall = GcDarkTokens.primitiveSizeAvatarSmall;
  static const avatarMedium = GcDarkTokens.primitiveSizeAvatarMedium;
  static const avatarLarge = GcDarkTokens.primitiveSizeAvatarLarge;
  static const iconXSmall = GcDarkTokens.primitiveSizeIconXSmall;
  static const iconSmall = GcDarkTokens.primitiveSizeIconSmall;
  static const iconMedium = GcDarkTokens.primitiveSizeIconMedium;
  static const iconLarge = GcDarkTokens.primitiveSizeIconLarge;
  static const iconXLarge = GcDarkTokens.primitiveSizeIconXLarge;
  static const iconHero = GcDarkTokens.primitiveSizeIconHero;
  static const mediaThumbnail = GcDarkTokens.primitiveSizeMediaThumbnail;
  static const achievementCompact =
      GcDarkTokens.componentAchievementMediaCompactSize;
  static const achievementHero = GcDarkTokens.componentAchievementMediaHeroSize;
  static const categoryBadge = GcDarkTokens.componentCategoryBadgeSize;
  static const featurePanelMinimum =
      GcDarkTokens.primitiveSizeFeaturePanelMinimum;
  static const listAccentWidth = GcDarkTokens.componentListAccentWidth;
  static const listAccentHeight = GcDarkTokens.componentListAccentHeight;
  static const progressCompact = GcDarkTokens.componentProgressCompactHeight;
  static const progressComfortable =
      GcDarkTokens.componentProgressComfortableHeight;
  static const podiumLow = touchTarget;
  static const podiumMedium = touchTarget + GcSpace.x3;
  static const podiumHigh = comfortableNavigation + GcSpace.x3;
  static const compactStatMinimum = touchTarget * 2 - GcSpace.half;
}

abstract final class GcMotion {
  static const fast = GcDarkTokens.primitiveDurationFast;
  static const standard = GcDarkTokens.semanticMotionInteractionDuration;
  static const slow = GcDarkTokens.primitiveDurationSlow;
  static const reduced = GcDarkTokens.semanticMotionReducedDuration;
  static const standardCurve = GcDarkTokens.semanticMotionInteractionEasing;
  static const emphasizedCurve = GcDarkTokens.primitiveEasingEmphasized;
  static final scoreTick = fast * 0.25;
  static const shakeStrong = GcSpace.twoAndHalf;
  static const shakeSoft = GcSpace.oneAndHalf;
}

abstract final class GcOpacity {
  static const disabled = GcDarkTokens.primitiveOpacityDisabled;
  static const muted = GcDarkTokens.primitiveOpacityMuted;
  static const overlay = GcDarkTokens.primitiveOpacityOverlay;
}

abstract final class GcType {
  static const caption = GcDarkTokens.primitiveFontSizeCaption;
  static const body = GcDarkTokens.primitiveFontSizeBody;
  static const bodyLarge = GcDarkTokens.primitiveFontSizeBodyLarge;
  static const titleSmall = GcDarkTokens.primitiveFontSizeTitleSmall;
  static const title = GcDarkTokens.primitiveFontSizeTitle;
  static const displaySmall = GcDarkTokens.primitiveFontSizeDisplaySmall;
  static const displayLarge = GcDarkTokens.primitiveFontSizeDisplayLarge;
  static const regular = FontWeight.w400;
  static const medium = FontWeight.w500;
  static const bold = FontWeight.w700;
  static const black = FontWeight.w900;
  static const tightHeight = GcDarkTokens.primitiveFontLineHeightTight;
  static const bodyHeight = GcDarkTokens.primitiveFontLineHeightBody;
  static const normalTracking = GcDarkTokens.primitiveFontLetterSpacingNormal;
  static const wideTracking = GcDarkTokens.primitiveFontLetterSpacingWide;
}

abstract final class GcShadows {
  static const small = BoxShadow(
    color: GcAppColors.primaryShadow,
    offset: Offset(GcSpace.x1, GcSpace.x1),
  );
  static const medium = BoxShadow(
    color: GcAppColors.primaryShadow,
    offset: Offset(GcSpace.oneAndQuarter, GcSpace.oneAndQuarter),
  );
  static const large = BoxShadow(
    color: GcAppColors.primaryShadow,
    offset: Offset(GcSpace.oneAndThreeQuarter, GcSpace.oneAndThreeQuarter),
  );
}

abstract final class GcBorders {
  static const thin = GcDarkTokens.primitiveBorderThin;
  static const medium = GcDarkTokens.primitiveBorderMedium;
  static const strong = GcDarkTokens.primitiveBorderStrong;
}
