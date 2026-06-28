class AppError {
  AppError({
    required this.error,
    required this.stackTrace,
    this.context,
    DateTime? occurredAt,
  }) : occurredAt = occurredAt ?? DateTime.now();

  final Object error;
  final StackTrace stackTrace;
  final String? context;
  final DateTime occurredAt;

  String toDebugString() {
    final ctx = (context?.trim().isEmpty ?? true) ? "" : "context: $context\n";
    return "${ctx}error: $error\n\n$stackTrace";
  }
}
