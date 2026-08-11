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
          backgroundColor: AppColors.bg,
          body: Center(child: CircularProgressIndicator(color: AppColors.primary)),
        ),
      );
    }

    if (_error != null) {
      return SafeArea(
        child: Scaffold(
          backgroundColor: AppColors.bg,
          body: Center(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    _error!,
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 15, height: 1.4, color: AppColors.textSecondary, fontWeight: FontWeight.w600),
                  ),
                  const SizedBox(height: 14),
                  DepthButton(
                    onPressed: _fetch,
                    colors: const [AppColors.primary, AppColors.primaryShadow],
                    shadowColor: AppColors.primaryShadow,
                    borderRadius: BorderRadius.circular(14),
                    child: const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                      child: Text("Réessayer", style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
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
    const heights = [60.0, 84.0, 48.0];
    const sizes = [46.0, 58.0, 46.0];
    const medalColors = [
      Color(0xFF94A3B8), // silver
      AppColors.gold, // gold
      Color(0xFFCD7F32), // bronze
    ];
    const gradients = [
      [Color(0xFF94A3B8), Color(0xFF64748B)],
      [AppColors.gold, AppColors.goldShadow],
      [Color(0xFFCD7F32), Color(0xFFA0522D)],
    ];

    final myRank = _myRank;
    final myId = _myId;

    return SafeArea(
      child: Scaffold(
        backgroundColor: AppColors.bg,
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Column(
            children: [
              const SizedBox(height: 6),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Image.asset(AppImages.podium, width: 32, height: 32),
                  const SizedBox(width: 10),
                  const Text("Classement", style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: AppColors.textPrimary)),
                ],
              ),
              const SizedBox(height: 10),

              // Podium
              Row(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: List.generate(3, (i) {
                  final idx = order[i];
                  final entry = (idx < top3.length) ? top3[idx] : null;
                  if (entry == null) {
                    return const Expanded(child: SizedBox(height: 140));
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
                                color: medal.withValues(alpha: 0.6),
                                blurRadius: 12,
                                spreadRadius: 0,
                              ),
                            ],
                          ),
                          child: DecoratedBox(
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: LinearGradient(
                                colors: [avatarBase, avatarBase.withValues(alpha: 0.5)],
                                begin: Alignment.topLeft,
                                end: Alignment.bottomRight,
                              ),
                              border: Border.all(color: isMe ? AppColors.secondary : const Color(0x26FFFFFF), width: isMe ? 3 : 2),
                            ),
                            child: Center(
                              child: Text(
                                entry.username.isNotEmpty ? entry.username[0].toUpperCase() : "P",
                                style: TextStyle(fontWeight: FontWeight.w900, color: Colors.white, fontSize: sizes[i] * 0.36),
                              ),
                            ),
                          ),
                        ),
                        Container(
                          width: 22,
                          height: 22,
                          margin: const EdgeInsets.only(top: -8, bottom: 4),
                          decoration: BoxDecoration(color: medal, shape: BoxShape.circle),
                          child: Center(
                            child: Text("${idx + 1}", style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w900, color: Colors.white)),
                          ),
                        ),
                        Text(
                          entry.username,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          textAlign: TextAlign.center,
                          style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppColors.textPrimary),
                        ),
                        Text(
                          formatNumber(entry.totalScore),
                          style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppColors.textSecondary),
                        ),
                        const SizedBox(height: 4),
                        Container(
                          height: heights[i],
                          width: double.infinity,
                          margin: const EdgeInsets.symmetric(horizontal: 14),
                          decoration: BoxDecoration(
                            gradient: LinearGradient(colors: barGradient, begin: Alignment.topCenter, end: Alignment.bottomCenter),
                            borderRadius: BorderRadius.circular(8),
                          ),
                        ),
                      ],
                    ),
                  );
                }),
              ),

              const SizedBox(height: 14),

              Expanded(
                child: ListView.builder(
                  itemCount: rest.length,
                  itemBuilder: (context, index) {
                    final item = rest[index];
                    final isMe = myId != null && item.userId == myId;
                    final avatarBase = colorFromHex(item.avatarColor);
                    return Container(
                      margin: const EdgeInsets.only(bottom: 6),
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: isMe ? AppColors.secondary.withValues(alpha: 0.07) : AppColors.surface,
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: isMe ? AppColors.secondary.withValues(alpha: 0.30) : AppColors.borderLight),
                      ),
                      child: Row(
                        children: [
                          SizedBox(
                            width: 28,
                            child: Text(
                              item.rank.toString(),
                              textAlign: TextAlign.center,
                              style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: isMe ? AppColors.secondary : AppColors.textTertiary),
                            ),
                          ),
                          Container(
                            width: 34,
                            height: 34,
                            margin: const EdgeInsets.only(right: 10),
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: LinearGradient(colors: [avatarBase, avatarBase.withValues(alpha: 0.38)]),
                            ),
                            child: Center(
                              child: Text(
                                item.username.isNotEmpty ? item.username[0].toUpperCase() : "P",
                                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: Colors.white),
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
                                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: isMe ? AppColors.secondary : AppColors.textPrimary),
                                ),
                                Text(
                                  item.levelName,
                                  style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: AppColors.textSecondary),
                                ),
                              ],
                            ),
                          ),
                          Text(
                            formatNumber(item.totalScore),
                            style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: isMe ? AppColors.gold : AppColors.textSecondary),
                          ),
                        ],
                      ),
                    );
                  },
                ),
              ),

              if (myRank != null && myRank.rank > 0)
                Container(
                  margin: const EdgeInsets.only(bottom: 10, top: 6),
                  padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 16),
                  decoration: BoxDecoration(
                    color: AppColors.surface,
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: AppColors.secondary.withValues(alpha: 0.18)),
                  ),
                  child: Row(
                    children: [
                      Icon(MdiIcons.accountCircle, size: 20, color: AppColors.secondary),
                      const SizedBox(width: 8),
                      const Text("Vous", style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppColors.textPrimary)),
                      const Spacer(),
                      Container(
                        decoration: BoxDecoration(
                          gradient: const LinearGradient(colors: [AppColors.secondary, AppColors.secondaryShadow]),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 5),
                        child: Text(
                          "#${myRank.rank}",
                          style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w900, color: Colors.white),
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
