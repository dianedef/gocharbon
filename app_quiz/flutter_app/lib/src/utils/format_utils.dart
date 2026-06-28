import "package:intl/intl.dart";

final _numFormat = NumberFormat.decimalPattern("fr");

String formatNumber(num value) => _numFormat.format(value);
