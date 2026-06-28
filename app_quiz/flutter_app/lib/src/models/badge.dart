class BadgeDef {
  const BadgeDef({
    required this.name,
    required this.description,
    required this.icon,
  });

  final String name;
  final String description;
  final String icon;

  factory BadgeDef.fromJson(Map<String, dynamic> json) {
    return BadgeDef(
      name: json["name"] as String,
      description: json["description"] as String,
      icon: json["icon"] as String,
    );
  }
}

class EarnedBadge extends BadgeDef {
  const EarnedBadge({
    required this.id,
    required super.name,
    required super.description,
    required super.icon,
  });

  final String id;

  factory EarnedBadge.fromJson(Map<String, dynamic> json) {
    return EarnedBadge(
      id: json["id"] as String,
      name: json["name"] as String,
      description: json["description"] as String,
      icon: json["icon"] as String,
    );
  }
}

