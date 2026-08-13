import "package:flutter/material.dart";
import "package:flutter/services.dart";
import "package:flutter_material_design_icons/flutter_material_design_icons.dart";

import "../../error/app_error.dart";
import "../../error/app_error_store.dart";
import "../../theme/app_colors.dart";
import "../widgets/gc_button.dart";
import "../widgets/app_card.dart";

class AppErrorScreen extends StatelessWidget {
  const AppErrorScreen({super.key, required this.error});

  final AppError error;

  Future<void> _copy(BuildContext context) async {
    await Clipboard.setData(ClipboardData(text: error.toDebugString()));
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text("Copié dans le presse-papiers")),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: GcAppColors.bg,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(GcSpace.x4),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const SizedBox(height: GcSpace.x3),
              Row(
                children: [
                  Icon(
                    MdiIcons.alertCircle,
                    color: GcAppColors.error,
                    size: GcSizes.iconSmall,
                  ),
                  const SizedBox(width: GcSpace.x3),
                  const Expanded(
                    child: Text(
                      "Une erreur est survenue",
                      style: TextStyle(
                        fontSize: GcType.bodyLarge,
                        fontWeight: GcType.black,
                        color: GcAppColors.textPrimary,
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: GcSpace.x3),
              Expanded(
                child: GcStatusCard(
                  variant: GcStatusCardVariant.error,
                  padding: const EdgeInsets.all(GcSpace.x3),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        error.error.toString(),
                        style: const TextStyle(
                          fontSize: GcType.caption,
                          fontWeight: GcType.black,
                          color: GcAppColors.textPrimary,
                        ),
                      ),
                      const SizedBox(height: GcSpace.x2),
                      Expanded(
                        child: SingleChildScrollView(
                          child: SelectableText(
                            error.stackTrace.toString(),
                            style: const TextStyle(
                              fontSize: GcType.caption,
                              height: GcType.bodyHeight,
                              color: GcAppColors.textSecondary,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: GcSpace.x3),
              GcButton.secondary(
                onPressed: () => _copy(context),
                label: "Copier",
              ),
              const SizedBox(height: GcSpace.x3),
              GcButton.primary(
                onPressed: AppErrorStore.clear,
                label: "Revenir à l'app",
              ),
              const SizedBox(height: GcSpace.x2),
              const Text(
                "Astuce: copie l’erreur et donne-la à une IA pour corriger vite.",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: GcType.caption,
                  color: GcAppColors.textTertiary,
                  fontWeight: GcType.bold,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
