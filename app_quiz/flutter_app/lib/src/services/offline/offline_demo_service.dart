import "../../models/user_profile.dart";

class OfflineDemoService {
  const OfflineDemoService();

  static const String guestUserId = "local-guest";

  UserProfile guestProfile({String userId = guestUserId}) => UserProfile(
    userId: userId,
    username: "Invité",
    avatarColor: "#F6C700",
    totalScore: 0,
    xp: 0,
    level: 1,
    levelName: "Découverte",
    badges: const [],
    stats: UserStats(
      totalQuizzes: 0,
      correctAnswers: 0,
      totalAnswers: 0,
      bestStreak: 0,
      categories: const {},
    ),
  );
}
