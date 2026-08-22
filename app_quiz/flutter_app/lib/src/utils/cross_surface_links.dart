const _siteOrigin = "https://gocharbon.fr";

Uri quizShareUri(String publicAppUrl) {
  final base = Uri.parse(publicAppUrl);
  return base.replace(
    path: base.path.isEmpty ? "/" : base.path,
    queryParameters: {
      ...base.queryParameters,
      "utm_source": "gocharbon_quiz",
      "utm_medium": "share",
      "utm_campaign": "knowledge_quiz",
    },
    fragment: "",
  );
}

Uri publicParcoursUri({String placement = "profile"}) {
  return Uri.parse(_siteOrigin).replace(
    path: "/parcours",
    queryParameters: {
      "utm_source": "gocharbon_quiz",
      "utm_medium": "app",
      "utm_campaign": "knowledge_quiz",
      "utm_content": placement,
    },
  );
}
