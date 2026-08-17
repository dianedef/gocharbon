import type { StudioPreviewCommand } from "./heroContract";

export interface PreviewStyleMutation {
  readonly property: string;
  readonly value: string;
}
const colors = {
  brand: { accent: "#f1c40f", panel: "rgba(20, 20, 20, 0.92)" },
  mint: { accent: "#0f766e", panel: "rgba(224, 247, 242, 0.94)" },
  amber: { accent: "#a16207", panel: "rgba(255, 247, 214, 0.94)" },
  violet: { accent: "#6d28d9", panel: "rgba(243, 232, 255, 0.94)" },
} as const;
const spacing = {
  gap: "gap",
  paddingTop: "padding-top",
  paddingRight: "padding-right",
  paddingBottom: "padding-bottom",
  paddingLeft: "padding-left",
  marginTop: "margin-top",
  marginRight: "margin-right",
  marginBottom: "margin-bottom",
  marginLeft: "margin-left",
} as const;
const radius = {
  all: "border-radius",
  topLeft: "border-top-left-radius",
  topRight: "border-top-right-radius",
  bottomRight: "border-bottom-right-radius",
  bottomLeft: "border-bottom-left-radius",
} as const;

export function previewOverridePlan(
  command: StudioPreviewCommand,
): readonly PreviewStyleMutation[] {
  const parameters = command.parameters as Record<string, unknown>;
  switch (command.capability) {
    case "token.set": {
      const token = parameters.token === "color.accent" ? "accent" : "panel";
      const preset = parameters.value as keyof typeof colors;
      return [
        {
          property: token === "accent" ? "--gc-accent" : "--gc-panel",
          value: colors[preset][token],
        },
      ];
    }
    case "spacing.set":
      return [
        {
          property: spacing[parameters.property as keyof typeof spacing],
          value: `${parameters.value}px`,
        },
      ];
    case "radius.set":
      return [
        {
          property: radius[parameters.corner as keyof typeof radius],
          value: `${parameters.value}px`,
        },
      ];
    case "opacity.set":
      return [{ property: "opacity", value: String(parameters.value) }];
    case "transform.set":
      return [
        {
          property: `--sg-studio-${parameters.axis}`,
          value:
            parameters.axis === "scale"
              ? String(parameters.value)
              : `${parameters.value}${parameters.axis === "rotate" ? "deg" : "px"}`,
        },
      ];
    case "visibility.set":
      return [
        {
          property: "visibility",
          value: parameters.visible ? "visible" : "hidden",
        },
      ];
    case "motion.duration":
      return [
        {
          property: "--sg-studio-motion-duration",
          value: `${parameters.milliseconds}ms`,
        },
      ];
    case "motion.easing":
      return [
        {
          property: "--sg-studio-motion-easing",
          value: String(parameters.easing),
        },
      ];
  }
}
