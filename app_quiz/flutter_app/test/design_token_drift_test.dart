import "dart:io";

import "package:flutter_test/flutter_test.dart";

void main() {
  test("Flutter UI contains no raw visual decision literals", () {
    final roots = [Directory("lib/src/ui"), File("lib/main.dart")];
    final violations = <String>[];
    final patterns = <RegExp>[
      RegExp(
        r"\b(?:fontSize|letterSpacing|blurRadius|spreadRadius|elevation|strokeWidth)\s*:\s*-?\d",
      ),
      RegExp(
        r"\b(?:width|height|size|minWidth|maxWidth|minHeight|maxHeight)\s*:\s*-?\d",
      ),
      RegExp(r"\b(?:horizontal|vertical|left|right|top|bottom)\s*:\s*-?\d"),
      RegExp(r"\b(?:spacing|runSpacing)\s*:\s*-?\d"),
      RegExp(r"\b(?:BorderRadius|Radius)\.circular\(\s*-?\d"),
      RegExp(r"\bOffset\([^\n]*,\s*-?\d"),
      RegExp(r"\bCurves\."),
      RegExp(r"\bColor\(0x|\bColors\."),
      RegExp(r"\bwithValues\(alpha:\s*\d"),
    ];

    final files = <File>[];
    for (final root in roots) {
      if (root is File) {
        files.add(root);
      } else if (root is Directory) {
        files.addAll(
          root
              .listSync(recursive: true)
              .whereType<File>()
              .where((file) => file.path.endsWith(".dart")),
        );
      }
    }
    for (final file in files) {
      final lines = file.readAsLinesSync();
      for (var index = 0; index < lines.length; index += 1) {
        for (final pattern in patterns) {
          if (pattern.hasMatch(lines[index])) {
            violations.add("${file.path}:${index + 1}: ${lines[index].trim()}");
          }
        }
      }
    }

    expect(violations, isEmpty, reason: violations.join("\n"));
  });
}
