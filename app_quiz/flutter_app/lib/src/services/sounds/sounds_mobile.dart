import "package:flutter/services.dart";

class Sounds {
  Sounds._();

  static final Sounds instance = Sounds._();

  Future<void> correct() async {
    HapticFeedback.lightImpact();
  }

  Future<void> wrong() async {
    HapticFeedback.heavyImpact();
  }

  Future<void> click() async {
    HapticFeedback.selectionClick();
  }

  Future<void> tick() async {
    HapticFeedback.selectionClick();
  }

  Future<void> streak() async {
    HapticFeedback.mediumImpact();
  }

  Future<void> complete() async {
    HapticFeedback.lightImpact();
  }

  Future<void> levelUp() async {
    HapticFeedback.mediumImpact();
  }

  Future<void> share() async {
    HapticFeedback.selectionClick();
  }
}

