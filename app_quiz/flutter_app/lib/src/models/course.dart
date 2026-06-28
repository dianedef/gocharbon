class Course {
  Course({
    required this.id,
    required this.title,
    required this.category,
    required this.description,
    required this.url,
    required this.level,
  });

  final String id;
  final String title;
  final String category;
  final String description;
  final String url;
  final String level;

  static const Map<String, String> _frenchTitles = {
    "drip marketing": "Marketing automatisé (Drip)",
    "drip campaign": "Séquence de nurturing (Drip)",
    "drip campaign guide": "Guide de drip marketing",
  };

  static const Map<String, String> _frenchDescriptions = {
    "learn": "Découvrez comment améliorer votre acquisition, l'engagement et les conversions avec une approche par étapes.",
    "automate your customer retention": "Automatisez votre relance client et fluidifiez vos séquences de messages.",
    "drip marketing": "Le drip marketing consiste à envoyer des messages automatisés par étapes pour transformer des visiteurs en clients.",
  };

  static String _toFrenchTitle(String title) {
    final normalized = title.trim().toLowerCase();
    return _frenchTitles[normalized] ?? title;
  }

  static String _toFrenchDescription(String description) {
    final normalized = description.trim().toLowerCase();
    for (final entry in _frenchDescriptions.entries) {
      if (normalized.contains(entry.key)) {
        return entry.value;
      }
    }
    return description;
  }

  factory Course.fromJson(Map<String, dynamic> json) {
    final title = (json["title"] as String);
    final description = (json["description"] as String);
    return Course(
      id: json["id"] as String,
      title: _toFrenchTitle(title),
      category: json["category"] as String,
      description: _toFrenchDescription(description),
      url: json["url"] as String,
      level: json["level"] as String,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      "id": id,
      "title": title,
      "category": category,
      "description": description,
      "url": url,
      "level": level,
    };
  }
}
