import "package:flutter_test/flutter_test.dart";
import "package:gocharbon_quiz/src/utils/cross_surface_links.dart";

void main() {
  test("score sharing keeps the player on the quiz app with attribution", () {
    final uri = quizShareUri("https://quiz.gocharbon.fr");

    expect(uri.origin, "https://quiz.gocharbon.fr");
    expect(uri.queryParameters["utm_medium"], "share");
    expect(uri.queryParameters["utm_campaign"], "knowledge_quiz");
  });

  test("profile links to the published parcours hub with attribution", () {
    final uri = publicParcoursUri();

    expect(uri.origin, "https://gocharbon.fr");
    expect(uri.path, "/parcours");
    expect(uri.queryParameters["utm_content"], "profile");
  });
}
