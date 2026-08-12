import "package:flutter/material.dart";
import "package:flutter_riverpod/flutter_riverpod.dart";
import "package:flutter_material_design_icons/flutter_material_design_icons.dart";

import "../../assets/app_images.dart";
import "../../models/leaderboard_entry.dart";
import "../../state/providers.dart";
import "../../theme/app_colors.dart";
import "../../utils/color_utils.dart";
import "../../utils/format_utils.dart";
import "../widgets/depth_button.dart";

class LeaderboardScreen extends ConsumerStatefulWidget {
  const LeaderboardScreen({super.key});

  @override
  ConsumerState<LeaderboardScreen> createState() => _LeaderboardScreenState();
}

class _LeaderboardScreenState extends ConsumerState<LeaderboardScreen> {
  List<LeaderboardEntry> _lb = const [];
  UserRank? _myRank;
  String? _myId;
  bool _loading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    _fetch();
  }

  Future<void> _fetch() async {
    setState(() {
      _loading = true;
      _error = null;
    });

    try {
      final session = await ref.read(sessionProvider.future);
      final api = ref.read(apiProvider);
      final data = await api.getLeaderboard(limit: 50);
      final rank = await api.getUserRank(session.userId);
      setState(() {
        _lb = data;
        _myRank = rank;
        _myId = session.userId;
      });
    } catch (_) {
      setState(() => _error = "Impossible de charger le classement.");
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const SafeArea(
        child: Scaffold(
          backgroundColor: GcAppColors.bg,
          body: Center(
            child: CircularProgressIndicator(color: GcAppColors.primary),
          ),
        ),
      );
    }

    if (_error != null) {
      return SafeArea(
        child: Scaffold(
          backgroundColor: GcAppColors.bg,
          body: Center(
            child: Padding(
              padding: const EdgeInsets.all(GcSpace.x4),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    _error!,
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      fontSize: GcType.body,
                      height: GcType.bodyHeight,
                      color: GcAppColors.textSecondary,
                      fontWeight: GcType.bold,
                    ),
                  ),
                  const SizedBox(height: GcSpace.x4),
                  DepthButton(
                    onPressed: _fetch,
                    colors: const [
                      GcAppColors.primary,
                      GcAppColors.primaryShadow,
                    ],
                    shadowColor: GcAppColors.primaryShadow,
                    borderRadius: GcRadii.card,
                    child: const Padding(
                      padding: EdgeInsets.symmetric(
                        horizontal: GcSpace.x5,
                        vertical: GcSpace.x3,
                      ),
                      child: Text(
                        "Réessayer",
                        style: TextStyle(
                          color: GcAppColors.textPrimary,
                          fontWeight: GcType.black,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      );
    }

    final top3 = _lb.take(3).toList(growable: false);
    final rest = _lb.length > 3 ? _lb.sublist(3) : const <LeaderboardEntry>[];

    const order = [1, 0, 2];
    const heights = [
      GcSizes.podiumMedium,
      GcSizes.podiumHigh,
      GcSizes.podiumLow,
    ];
    const sizes = [
      GcSizes.avatarMedium,
      GcSizes.listAccentHeight,
      GcSizes.avatarMedium,
    ];
    const medalColors = [
      GcAppColors.textSecondary, // silver
      GcAppColors.gold, // gold
      GcAppColors.primary, // bronze
    ];
    const gradients = [
      [GcAppColors.textSecondary, GcAppColors.textTertiary],
      [GcAppColors.gold, GcAppColors.goldShadow],
      [GcAppColors.primary, GcAppColors.primaryShadow],
    ];

    final myRank = _myRank;
    final myId = _myId;

    return SafeArea(
      child: Scaffold(
        backgroundColor: GcAppColors.bg,
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: GcSpace.x4),
          child: Column(
            children: [
              const SizedBox(height: GcSpace.x2),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Image.asset(
                    AppImages.podium,
                    width: GcSizes.iconLarge,
                    height: GcSizes.iconLarge,
                  ),
                  const SizedBox(width: GcSpace.x3),
                  const Text(
                    "Classement",
                    style: TextStyle(
                      fontSize: GcType.title,
                      fontWeight: GcType.black,
                      color: GcAppColors.textPrimary,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: GcSpace.x3),

              // Podium
              Row(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: List.generate(3, (i) {
                  final idx = order[i];
                  final entry = (idx < top3.length) ? top3[idx] : null;
                  if (entry == null) {
                    return const Expanded(
                      child: SizedBox(height: GcSizes.featurePanelMinimum),
                    );
                  }

                  final avatarBase = colorFromHex(entry.avatarColor);
                  final isMe = myId != null && entry.userId == myId;
                  final medal = medalColors[i];
                  final barGradient = gradients[i];

                  return Expanded(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Container(
                          width: sizes[i],
                          height: sizes[i],
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            boxShadow: [
                              BoxShadow(
                                color: medal.withValues(
                                  alpha: GcOpacity.overlay,
                                ),
                                blurRadius: GcSpace.x3,
                                spreadRadius: GcSpace.zero,
                              ),
                            ],
                          ),
                          child: DecoratedBox(
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: LinearGradient(
                                colors: [
                                  avatarBase,
                                  avatarBase.withValues(
                                    alpha: GcOpacity.disabled,
                                  ),
                                ],
                                begin: Alignment.topLeft,
                                end: Alignment.bottomRight,
                              ),
                              border: Border.all(
                                color: isMe
                                    ? GcAppColors.secondary
                                    : GcAppColors.borderMedium,
                                width: isMe
                                    ? GcBorders.strong
                                    : GcBorders.medium,
                              ),
                            ),
                            child: Center(
                              child: Text(
                                entry.username.isNotEmpty
                                    ? entry.username[0].toUpperCase()
                                    : "P",
                                style: TextStyle(
                                  fontWeight: GcType.black,
                                  color: GcAppColors.textPrimary,
                                  fontSize: sizes[i] * 0.36,
                                ),
                              ),
                            ),
                          ),
                        ),
                        Container(
                          width: GcSizes.iconSmall,
                          height: GcSizes.iconSmall,
                          margin: const EdgeInsets.only(
                            top: -GcSpace.x2,
                            bottom: GcSpace.x1,
                          ),
                          decoration: BoxDecoration(
                            color: medal,
                            shape: BoxShape.circle,
                          ),
                          child: Center(
                            child: Text(
                              "${idx + 1}",
                              style: const TextStyle(
                                fontSize: GcType.caption,
                                fontWeight: GcType.black,
                                color: GcAppColors.textPrimary,
                              ),
                            ),
                          ),
                        ),
                        Text(
                          entry.username,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          textAlign: TextAlign.center,
                          style: const TextStyle(
                            fontSize: GcType.caption,
                            fontWeight: GcType.bold,
                            color: GcAppColors.textPrimary,
                          ),
                        ),
                        Text(
                          formatNumber(entry.totalScore),
                          style: const TextStyle(
                            fontSize: GcType.caption,
                            fontWeight: GcType.bold,
                            color: GcAppColors.textSecondary,
                          ),
                        ),
                        const SizedBox(height: GcSpace.x1),
                        Container(
                          height: heights[i],
                          width: double.infinity,
                          margin: const EdgeInsets.symmetric(
                            horizontal: GcSpace.threeAndHalf,
                          ),
                          decoration: BoxDecoration(
                            gradient: LinearGradient(
                              colors: barGradient,
                              begin: Alignment.topCenter,
                              end: Alignment.bottomCenter,
                            ),
                            borderRadius: GcRadii.card,
                          ),
                        ),
                      ],
                    ),
                  );
                }),
              ),

              const SizedBox(height: GcSpace.x4),

              Expanded(
                child: ListView.builder(
                  itemCount: rest.length,
                  itemBuilder: (context, index) {
                    final item = rest[index];
                    final isMe = myId != null && item.userId == myId;
                    final avatarBase = colorFromHex(item.avatarColor);
                    return Container(
                      margin: const EdgeInsets.only(bottom: GcSpace.oneAndHalf),
                      padding: const EdgeInsets.all(GcSpace.x3),
                      decoration: BoxDecoration(
                        color: isMe
                            ? GcAppColors.secondary.withValues(
                                alpha: GcOpacity.disabled,
                              )
                            : GcAppColors.surface,
                        borderRadius: GcRadii.card,
                        border: Border.all(
                          color: isMe
                              ? GcAppColors.secondary.withValues(
                                  alpha: GcOpacity.disabled,
                                )
                              : GcAppColors.borderLight,
                        ),
                      ),
                      child: Row(
                        children: [
                          SizedBox(
                            width: GcSizes.iconMedium,
                            child: Text(
                              item.rank.toString(),
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                fontSize: GcType.caption,
                                fontWeight: GcType.black,
                                color: isMe
                                    ? GcAppColors.secondary
                                    : GcAppColors.textTertiary,
                              ),
                            ),
                          ),
                          Container(
                            width: GcSizes.avatarSmall,
                            height: GcSizes.avatarSmall,
                            margin: const EdgeInsets.only(
                              right: GcSpace.twoAndHalf,
                            ),
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: LinearGradient(
                                colors: [
                                  avatarBase,
                                  avatarBase.withValues(
                                    alpha: GcOpacity.disabled,
                                  ),
                                ],
                              ),
                            ),
                            child: Center(
                              child: Text(
                                item.username.isNotEmpty
                                    ? item.username[0].toUpperCase()
                                    : "P",
                                style: const TextStyle(
                                  fontSize: GcType.caption,
                                  fontWeight: GcType.black,
                                  color: GcAppColors.textPrimary,
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  item.username,
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                    fontSize: GcType.caption,
                                    fontWeight: GcType.bold,
                                    color: isMe
                                        ? GcAppColors.secondary
                                        : GcAppColors.textPrimary,
                                  ),
                                ),
                                Text(
                                  item.levelName,
                                  style: const TextStyle(
                                    fontSize: GcType.caption,
                                    fontWeight: GcType.bold,
                                    color: GcAppColors.textSecondary,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Text(
                            formatNumber(item.totalScore),
                            style: TextStyle(
                              fontSize: GcType.caption,
                              fontWeight: GcType.black,
                              color: isMe
                                  ? GcAppColors.gold
                                  : GcAppColors.textSecondary,
                            ),
                          ),
                        ],
                      ),
                    );
                  },
                ),
              ),

              if (myRank != null && myRank.rank > 0)
                Container(
                  margin: const EdgeInsets.only(
                    bottom: GcSpace.twoAndHalf,
                    top: GcSpace.oneAndHalf,
                  ),
                  padding: const EdgeInsets.symmetric(
                    vertical: GcSpace.x3,
                    horizontal: GcSpace.x4,
                  ),
                  decoration: BoxDecoration(
                    color: GcAppColors.surface,
                    borderRadius: GcRadii.card,
                    border: Border.all(
                      color: GcAppColors.secondary.withValues(
                        alpha: GcOpacity.disabled,
                      ),
                    ),
                  ),
                  child: Row(
                    children: [
                      Icon(
                        MdiIcons.accountCircle,
                        size: GcSpace.x5,
                        color: GcAppColors.secondary,
                      ),
                      const SizedBox(width: GcSpace.x2),
                      const Text(
                        "Vous",
                        style: TextStyle(
                          fontSize: GcType.caption,
                          fontWeight: GcType.bold,
                          color: GcAppColors.textPrimary,
                        ),
                      ),
                      const Spacer(),
                      Container(
                        decoration: BoxDecoration(
                          gradient: const LinearGradient(
                            colors: [
                              GcAppColors.secondary,
                              GcAppColors.secondaryShadow,
                            ],
                          ),
                          borderRadius: GcRadii.card,
                        ),
                        padding: const EdgeInsets.symmetric(
                          horizontal: GcSpace.threeAndHalf,
                          vertical: GcSpace.oneAndQuarter,
                        ),
                        child: Text(
                          "#${myRank.rank}",
                          style: const TextStyle(
                            fontSize: GcType.caption,
                            fontWeight: GcType.black,
                            color: GcAppColors.textPrimary,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
