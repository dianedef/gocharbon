import "package:flutter_test/flutter_test.dart";
import "package:gocharbon_quiz/src/theme/category_config.dart";
import "package:gocharbon_quiz/src/utils/color_utils.dart";

void main() {
  test("colorFromHex parses 6-digit hex", () {
    expect(colorFromHex("#FF0000").toARGB32(), 0xFFFF0000);
  });

  test("CategoryConfig.get falls back to random", () {
    expect(CategoryConfig.get("unknown").id, "random");
  });
}
