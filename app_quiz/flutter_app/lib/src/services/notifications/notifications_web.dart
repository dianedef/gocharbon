class NotificationsService {
  NotificationsService._();

  static final NotificationsService instance = NotificationsService._();

  Future<void> init() async {}

  Future<void> scheduleDailyReminder() async {}

  Future<void> cancelDailyReminder() async {}

  Future<void> scheduleStreakReminder() async {}

  Future<void> cancelStreakReminder() async {}
}

