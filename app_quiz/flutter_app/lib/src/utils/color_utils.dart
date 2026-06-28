import "package:flutter/material.dart";

Color colorFromHex(String hex) {
  final cleaned = hex.replaceAll("#", "").trim();
  if (cleaned.length == 6) {
    return Color(int.parse("FF$cleaned", radix: 16));
  }
  if (cleaned.length == 8) {
    return Color(int.parse(cleaned, radix: 16));
  }
  return Colors.white;
}

