class LeaderboardEntry {
  LeaderboardEntry({
    required this.rank,
    required this.userId,
    required this.username,
    required this.avatarColor,
    required this.totalScore,
    required this.level,
    required this.levelName,
  });

  final int rank;
  final String userId;
  final String username;
  final String avatarColor;
  final int totalScore;
  final int level;
  final String levelName;

  factory LeaderboardEntry.fromJson(Map<String, dynamic> json) {
    return LeaderboardEntry(
      rank: (json["rank"] as num).toInt(),
      userId: json["user_id"] as String,
      username: json["username"] as String,
      avatarColor: json["avatar_color"] as String,
      totalScore: (json["total_score"] as num).toInt(),
      level: (json["level"] as num).toInt(),
      levelName: json["level_name"] as String,
    );
  }
}

class UserRank {
  UserRank({required this.rank, required this.totalScore});

  final int rank;
  final int totalScore;

  factory UserRank.fromJson(Map<String, dynamic> json) {
    return UserRank(
      rank: (json["rank"] as num).toInt(),
      totalScore: (json["total_score"] as num).toInt(),
    );
  }
}

