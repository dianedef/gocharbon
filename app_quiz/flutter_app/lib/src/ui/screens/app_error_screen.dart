import "package:flutter/material.dart";
import "package:flutter/services.dart";
import "package:material_design_icons_flutter/material_design_icons_flutter.dart";

import "../../error/app_error.dart";
import "../../error/app_error_store.dart";
import "../../theme/app_colors.dart";
import "../widgets/depth_button.dart";

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
      backgroundColor: AppColors.bg,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const SizedBox(height: 10),
              Row(
                children: [
                  Icon(MdiIcons.alertCircle, color: AppColors.error, size: 22),
                  const SizedBox(width: 10),
                  const Expanded(
                    child: Text(
                      "Une erreur est survenue",
                      style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: AppColors.textPrimary),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              Expanded(
                child: Container(
                  decoration: BoxDecoration(
                    color: AppColors.surface,
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: AppColors.error.withValues(alpha: 0.30)),
                  ),
                  padding: const EdgeInsets.all(12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        error.error.toString(),
                        style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: AppColors.textPrimary),
                      ),
                      const SizedBox(height: 8),
                      Expanded(
                        child: SingleChildScrollView(
                          child: SelectableText(
                            error.stackTrace.toString(),
                            style: const TextStyle(fontSize: 12, height: 1.3, color: AppColors.textSecondary),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 12),
              DepthButton(
                onPressed: () => _copy(context),
                colors: const [AppColors.secondary, AppColors.secondaryShadow],
                shadowColor: AppColors.secondaryShadow,
                borderRadius: BorderRadius.circular(14),
                child: const Padding(
                  padding: EdgeInsets.symmetric(vertical: 12),
                  child: Center(
                    child: Text("Copier", style: TextStyle(color: Colors.black, fontWeight: FontWeight.w900)),
                  ),
                ),
              ),
              const SizedBox(height: 10),
              DepthButton(
                onPressed: AppErrorStore.clear,
                colors: const [AppColors.primary, AppColors.primaryShadow],
                shadowColor: AppColors.primaryShadow,
                borderRadius: BorderRadius.circular(14),
                child: const Padding(
                  padding: EdgeInsets.symmetric(vertical: 12),
                  child: Center(
                    child: Text("Revenir à l'app", style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
                  ),
                ),
              ),
              const SizedBox(height: 8),
              const Text(
                "Astuce: copie l’erreur et donne-la à une IA pour corriger vite.",
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 12, color: AppColors.textTertiary, fontWeight: FontWeight.w600),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
