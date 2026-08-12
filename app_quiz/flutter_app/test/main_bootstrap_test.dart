import "dart:io";

import "package:flutter_test/flutter_test.dart";

void main() {
  test("Flutter binding and runApp stay inside the guarded zone", () {
    final source = File("lib/main.dart").readAsStringSync();
    final zoneStart = source.indexOf("await runZonedGuarded(");
    final bindingInit = source.indexOf(
      "WidgetsFlutterBinding.ensureInitialized();",
    );
    final runAppCall = source.indexOf(
      "runApp(const ProviderScope(child: App()));",
    );

    expect(zoneStart, isNonNegative);
    expect(bindingInit, greaterThan(zoneStart));
    expect(runAppCall, greaterThan(bindingInit));
    expect(
      source.substring(0, zoneStart),
      isNot(contains("WidgetsFlutterBinding.ensureInitialized();")),
    );
  });
}
