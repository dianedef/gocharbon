import "package:flutter/foundation.dart";
import "package:flutter_local_notifications/flutter_local_notifications.dart";
import "package:flutter_timezone/flutter_timezone.dart";
import "package:timezone/data/latest_all.dart" as tz;
import "package:timezone/timezone.dart" as tz;

class NotificationsService {
  NotificationsService._();

  static final NotificationsService instance = NotificationsService._();

  final FlutterLocalNotificationsPlugin _plugin = FlutterLocalNotificationsPlugin();
  bool _initialized = false;

  Future<void> init() async {
    if (_initialized) return;

    tz.initializeTimeZones();
    try {
      final tzInfo = await FlutterTimezone.getLocalTimezone();
      tz.setLocalLocation(tz.getLocation(tzInfo.identifier));
    } catch (_) {
      // Keep default UTC if we can't detect timezone.
    }

    const androidInit = AndroidInitializationSettings("@mipmap/ic_launcher");
    const darwinInit = DarwinInitializationSettings();
    const initSettings = InitializationSettings(android: androidInit, iOS: darwinInit, macOS: darwinInit);
    await _plugin.initialize(settings: initSettings);

    // Request permissions where applicable.
    if (defaultTargetPlatform == TargetPlatform.iOS) {
      await _plugin
          .resolvePlatformSpecificImplementation<IOSFlutterLocalNotificationsPlugin>()
          ?.requestPermissions(alert: true, badge: true, sound: true);
    }
    if (defaultTargetPlatform == TargetPlatform.macOS) {
      await _plugin
          .resolvePlatformSpecificImplementation<MacOSFlutterLocalNotificationsPlugin>()
          ?.requestPermissions(alert: true, badge: true, sound: true);
    }
    if (defaultTargetPlatform == TargetPlatform.android) {
      await _plugin
          .resolvePlatformSpecificImplementation<AndroidFlutterLocalNotificationsPlugin>()
          ?.requestNotificationsPermission();
    }

    _initialized = true;
    // Schedule a daily reminder by default.
    await scheduleDailyReminder();
  }

  Future<void> scheduleDailyReminder() async {
    await cancelDailyReminder();
    final next9am = _nextInstanceOf(hour: 9, minute: 0);
    await _plugin.zonedSchedule(
      id: _Ids.daily,
      title: "GoCharbon Business Quizz",
      body: "Votre défi business du jour vous attend ! Testez vos connaissances maintenant.",
      scheduledDate: next9am,
      notificationDetails: const NotificationDetails(
        android: AndroidNotificationDetails(
          "daily",
          "Daily reminders",
          importance: Importance.defaultImportance,
          priority: Priority.defaultPriority,
        ),
        iOS: DarwinNotificationDetails(),
      ),
      androidScheduleMode: AndroidScheduleMode.exactAllowWhileIdle,
      matchDateTimeComponents: DateTimeComponents.time,
    );
  }

  Future<void> cancelDailyReminder() async {
    await _plugin.cancel(id: _Ids.daily);
  }

  Future<void> scheduleStreakReminder() async {
    await cancelStreakReminder();
    final when = tz.TZDateTime.now(tz.local).add(const Duration(hours: 24));
    await _plugin.zonedSchedule(
      id: _Ids.streak,
      title: "Ne perdez pas votre streak !",
      body: "Jouez un quiz aujourd'hui pour maintenir votre série de victoires.",
      scheduledDate: when,
      notificationDetails: const NotificationDetails(
        android: AndroidNotificationDetails(
          "streak",
          "Streak reminders",
          importance: Importance.defaultImportance,
          priority: Priority.defaultPriority,
        ),
        iOS: DarwinNotificationDetails(),
      ),
      androidScheduleMode: AndroidScheduleMode.exactAllowWhileIdle,
    );
  }

  Future<void> cancelStreakReminder() async {
    await _plugin.cancel(id: _Ids.streak);
  }

  tz.TZDateTime _nextInstanceOf({required int hour, required int minute}) {
    final now = tz.TZDateTime.now(tz.local);
    var scheduled = tz.TZDateTime(tz.local, now.year, now.month, now.day, hour, minute);
    if (scheduled.isBefore(now)) {
      scheduled = scheduled.add(const Duration(days: 1));
    }
    return scheduled;
  }
}

class _Ids {
  static const daily = 9001;
  static const streak = 9002;
}
