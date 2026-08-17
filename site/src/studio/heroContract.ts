export const STUDIO_BRIDGE_VERSION = "shipglows.studio.bridge.v1" as const;
export const STUDIO_CONTRACT_VERSION = "shipglows.studio.v1" as const;
export const STUDIO_PROFILE_ID = "gocharbon.astro.hero.v1" as const;
export const STUDIO_PARENT_ORIGIN = "http://127.0.0.1:3005" as const;
export const STUDIO_MESSAGE_LIMIT_BYTES = 256 * 1024;
export const STUDIO_COMMAND_LIMIT_BYTES = 16 * 1024;

export type HeroPreviewCapability =
  | "token.set"
  | "spacing.set"
  | "radius.set"
  | "opacity.set"
  | "transform.set"
  | "visibility.set"
  | "motion.duration"
  | "motion.easing";

export type HeroStudioAnchorId =
  | "hero.root"
  | "hero.copy"
  | "hero.eyebrow"
  | "hero.title"
  | "hero.intro"
  | "hero.actions"
  | "hero.miner"
  | "hero.depth";

type LayoutIntent = "flow" | "flex" | "grid" | "absolute";
interface AnchorDefinition {
  readonly label: string;
  readonly parentId: HeroStudioAnchorId | null;
  readonly order: number;
  readonly layoutIntent: LayoutIntent;
  readonly source: {
    readonly path: "site/src/pages/index.astro";
    readonly symbol: string;
    readonly confidence: "exact";
  };
  readonly capabilities: readonly HeroPreviewCapability[];
}

const source = (symbol: string) => ({
  path: "site/src/pages/index.astro" as const,
  symbol,
  confidence: "exact" as const,
});
const motion = [
  "opacity.set",
  "transform.set",
  "visibility.set",
  "motion.duration",
  "motion.easing",
] as const;

export const HERO_STUDIO_ANCHORS = Object.freeze({
  "hero.root": {
    label: "Hero",
    parentId: null,
    order: 0,
    layoutIntent: "grid",
    source: source("GoCharbonHero"),
    capabilities: ["token.set", "spacing.set", "radius.set"],
  },
  "hero.copy": {
    label: "Hero copy",
    parentId: "hero.root",
    order: 0,
    layoutIntent: "flow",
    source: source("GoCharbonHero.copy"),
    capabilities: ["spacing.set", "radius.set", ...motion],
  },
  "hero.eyebrow": {
    label: "Eyebrow",
    parentId: "hero.copy",
    order: 0,
    layoutIntent: "flow",
    source: source("GoCharbonHero.eyebrow"),
    capabilities: motion,
  },
  "hero.title": {
    label: "Title",
    parentId: "hero.copy",
    order: 1,
    layoutIntent: "flow",
    source: source("GoCharbonHero.title"),
    capabilities: motion,
  },
  "hero.intro": {
    label: "Intro",
    parentId: "hero.copy",
    order: 2,
    layoutIntent: "flow",
    source: source("GoCharbonHero.intro"),
    capabilities: motion,
  },
  "hero.actions": {
    label: "Actions",
    parentId: "hero.copy",
    order: 3,
    layoutIntent: "flex",
    source: source("GoCharbonHero.actions"),
    capabilities: ["spacing.set", ...motion],
  },
  "hero.miner": {
    label: "Miner image",
    parentId: "hero.root",
    order: 1,
    layoutIntent: "absolute",
    source: source("GoCharbonHero.miner"),
    capabilities: motion,
  },
  "hero.depth": {
    label: "Depth panel",
    parentId: "hero.root",
    order: 2,
    layoutIntent: "flow",
    source: source("GoCharbonHero.depthPanel"),
    capabilities: ["token.set", "spacing.set", "radius.set", ...motion],
  },
} as const satisfies Record<HeroStudioAnchorId, AnchorDefinition>);

export interface StudioBounds {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}
export interface StudioAnchorSnapshot extends AnchorDefinition {
  readonly id: HeroStudioAnchorId;
  readonly bounds: StudioBounds;
}
export interface StudioReadyAnchor {
  readonly id: HeroStudioAnchorId;
  readonly label: string;
  readonly sourceSymbol: string;
  readonly capabilities: readonly HeroPreviewCapability[];
}
export interface StudioSelectedAnchor extends StudioReadyAnchor {
  readonly bounds: StudioBounds;
}

export function studioAnchorAttributes(
  anchorId: HeroStudioAnchorId,
): Record<string, string> {
  return {
    "data-sg-studio-anchor": anchorId,
    "data-sg-studio-profile": STUDIO_PROFILE_ID,
  };
}

export interface StudioPreviewCommand {
  readonly commandId: string;
  readonly revision: number;
  readonly anchorId: HeroStudioAnchorId;
  readonly capability: HeroPreviewCapability;
  readonly parameters: Readonly<Record<string, string | number | boolean>>;
}

export type StudioHostMessage =
  | Readonly<{
      version: typeof STUDIO_BRIDGE_VERSION;
      type: "studio.attach";
      channelId: string;
    }>
  | Readonly<{
      version: typeof STUDIO_BRIDGE_VERSION;
      type: "studio.select";
      channelId: string;
      anchorId: HeroStudioAnchorId;
    }>
  | Readonly<{
      version: typeof STUDIO_BRIDGE_VERSION;
      type: "studio.commands";
      channelId: string;
      revision: number;
      commands: readonly StudioPreviewCommand[];
    }>;
export type StudioReadyMessage = Readonly<{
  version: typeof STUDIO_BRIDGE_VERSION;
  type: "studio.ready";
  channelId: string;
  profileId: typeof STUDIO_PROFILE_ID;
  anchors: readonly StudioReadyAnchor[];
}>;
export type StudioSelectedMessage = Readonly<{
  version: typeof STUDIO_BRIDGE_VERSION;
  type: "studio.selected";
  channelId: string;
  anchor: StudioSelectedAnchor;
}>;

const channelPattern = /^[A-Za-z0-9_-]{8,128}$/;
const commandPattern = /^[A-Za-z0-9._:-]{1,128}$/;
const isRecord = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === "object" && !Array.isArray(value);
const hasExactKeys = (
  value: Record<string, unknown>,
  expected: readonly string[],
) =>
  Object.keys(value).length === expected.length &&
  Object.keys(value).every((key) => expected.includes(key));
const isAnchorId = (value: unknown): value is HeroStudioAnchorId =>
  typeof value === "string" && value in HERO_STUDIO_ANCHORS;
const inRange = (
  value: unknown,
  minimum: number,
  maximum: number,
): value is number =>
  typeof value === "number" &&
  Number.isFinite(value) &&
  value >= minimum &&
  value <= maximum;

function withinBytes(value: unknown, maximum: number): boolean {
  try {
    return (
      new TextEncoder().encode(JSON.stringify(value)).byteLength <= maximum
    );
  } catch {
    return false;
  }
}
export const isWithinStudioMessageLimit = (value: unknown) =>
  withinBytes(value, STUDIO_MESSAGE_LIMIT_BYTES);
export const isWithinStudioCommandLimit = (value: unknown) =>
  withinBytes(value, STUDIO_COMMAND_LIMIT_BYTES);

function parseParameters(
  capability: HeroPreviewCapability,
  value: unknown,
): Readonly<Record<string, string | number | boolean>> | null {
  if (!isRecord(value)) return null;
  if (capability === "token.set") {
    if (
      !hasExactKeys(value, ["token", "value"]) ||
      !["color.accent", "color.panel"].includes(String(value.token)) ||
      !["brand", "mint", "amber", "violet"].includes(String(value.value))
    )
      return null;
  } else if (capability === "spacing.set") {
    if (
      !hasExactKeys(value, ["property", "value"]) ||
      ![
        "gap",
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "marginTop",
        "marginRight",
        "marginBottom",
        "marginLeft",
      ].includes(String(value.property)) ||
      !inRange(value.value, 0, 256)
    )
      return null;
  } else if (capability === "radius.set") {
    if (
      !hasExactKeys(value, ["corner", "value"]) ||
      !["all", "topLeft", "topRight", "bottomRight", "bottomLeft"].includes(
        String(value.corner),
      ) ||
      !inRange(value.value, 0, 256)
    )
      return null;
  } else if (capability === "opacity.set") {
    if (!hasExactKeys(value, ["value"]) || !inRange(value.value, 0, 1))
      return null;
  } else if (capability === "transform.set") {
    if (
      !hasExactKeys(value, ["axis", "value"]) ||
      !["translateX", "translateY", "rotate", "scale"].includes(
        String(value.axis),
      )
    )
      return null;
    const range =
      value.axis === "scale"
        ? [0.5, 1.5]
        : value.axis === "rotate"
          ? [-20, 20]
          : [-96, 96];
    if (!inRange(value.value, range[0]!, range[1]!)) return null;
  } else if (capability === "visibility.set") {
    if (!hasExactKeys(value, ["visible"]) || typeof value.visible !== "boolean")
      return null;
  } else if (capability === "motion.duration") {
    if (
      !hasExactKeys(value, ["milliseconds"]) ||
      !inRange(value.milliseconds, 0, 1_000)
    )
      return null;
  } else if (
    !hasExactKeys(value, ["easing"]) ||
    !["linear", "ease", "ease-in", "ease-out", "ease-in-out"].includes(
      String(value.easing),
    )
  )
    return null;
  return value as Readonly<Record<string, string | number | boolean>>;
}

function parseCommand(value: unknown): StudioPreviewCommand | null {
  if (!isWithinStudioCommandLimit(value) || !isRecord(value)) return null;
  const required = [
    "schemaVersion",
    "commandId",
    "sessionId",
    "kind",
    "parameters",
    "affectedRuntimeNodeIds",
    "affectedDimensions",
    "provenance",
    "revision",
    "idempotencyKey",
    "previewOnly",
    "requiredCapability",
    "requiredUnprotectedDimensions",
  ];
  const keys = Object.keys(value);
  if (
    required.some((key) => !keys.includes(key)) ||
    keys.some((key) => ![...required, "compactionKey"].includes(key))
  )
    return null;
  if (
    value.schemaVersion !== STUDIO_CONTRACT_VERSION ||
    value.previewOnly !== true ||
    value.requiredCapability !== value.kind ||
    !Number.isSafeInteger(value.revision) ||
    (value.revision as number) < 1
  )
    return null;
  for (const key of ["commandId", "sessionId", "idempotencyKey"] as const)
    if (
      typeof value[key] !== "string" ||
      !commandPattern.test(value[key] as string)
    )
      return null;
  if (
    value.compactionKey !== undefined &&
    (typeof value.compactionKey !== "string" ||
      !commandPattern.test(value.compactionKey))
  )
    return null;
  if (
    !Array.isArray(value.affectedRuntimeNodeIds) ||
    value.affectedRuntimeNodeIds.length !== 1 ||
    !isAnchorId(value.affectedRuntimeNodeIds[0])
  )
    return null;
  const anchorId = value.affectedRuntimeNodeIds[0];
  const capability = value.kind;
  if (
    typeof capability !== "string" ||
    !HERO_STUDIO_ANCHORS[anchorId].capabilities.includes(capability as never)
  )
    return null;
  const parameters = parseParameters(
    capability as HeroPreviewCapability,
    value.parameters,
  );
  if (
    !parameters ||
    !Array.isArray(value.affectedDimensions) ||
    value.affectedDimensions.length === 0 ||
    !Array.isArray(value.requiredUnprotectedDimensions)
  )
    return null;
  if (
    !isRecord(value.provenance) ||
    !hasExactKeys(value.provenance, ["actorType", "actorId"]) ||
    value.provenance.actorType !== "operator" ||
    typeof value.provenance.actorId !== "string" ||
    !commandPattern.test(value.provenance.actorId)
  )
    return null;
  return {
    commandId: value.commandId as string,
    revision: value.revision as number,
    anchorId,
    capability: capability as HeroPreviewCapability,
    parameters,
  };
}

export function parseStudioHostMessage(
  value: unknown,
): StudioHostMessage | null {
  if (
    !isWithinStudioMessageLimit(value) ||
    !isRecord(value) ||
    value.version !== STUDIO_BRIDGE_VERSION ||
    typeof value.channelId !== "string" ||
    !channelPattern.test(value.channelId)
  )
    return null;
  if (
    value.type === "studio.attach" &&
    hasExactKeys(value, ["version", "type", "channelId"])
  )
    return value as StudioHostMessage;
  if (
    value.type === "studio.select" &&
    hasExactKeys(value, ["version", "type", "channelId", "anchorId"]) &&
    isAnchorId(value.anchorId)
  )
    return value as StudioHostMessage;
  if (
    value.type !== "studio.commands" ||
    !hasExactKeys(value, [
      "version",
      "type",
      "channelId",
      "revision",
      "commands",
    ]) ||
    !Number.isSafeInteger(value.revision) ||
    (value.revision as number) < 0 ||
    !Array.isArray(value.commands) ||
    value.commands.length > 128
  )
    return null;
  const commands = value.commands.map(parseCommand);
  if (commands.some((command) => command === null)) return null;
  const parsed = commands as StudioPreviewCommand[];
  if (
    new Set(parsed.map((command) => command.commandId)).size !==
      parsed.length ||
    parsed.some(
      (command, index) =>
        command.revision > (value.revision as number) ||
        (index > 0 && command.revision <= parsed[index - 1]!.revision),
    )
  )
    return null;
  return {
    version: STUDIO_BRIDGE_VERSION,
    type: "studio.commands",
    channelId: value.channelId,
    revision: value.revision as number,
    commands: parsed,
  };
}

export function isTrustedStudioOrigin(
  origin: string,
  expected: string = STUDIO_PARENT_ORIGIN,
): boolean {
  try {
    return origin === expected && origin === new URL(expected).origin;
  } catch {
    return false;
  }
}
const ready = (anchor: StudioAnchorSnapshot): StudioReadyAnchor => ({
  id: anchor.id,
  label: anchor.label,
  sourceSymbol: anchor.source.symbol,
  capabilities: anchor.capabilities,
});
export const createStudioReadyMessage = (
  channelId: string,
  anchors: readonly StudioAnchorSnapshot[],
): StudioReadyMessage => ({
  version: STUDIO_BRIDGE_VERSION,
  type: "studio.ready",
  channelId,
  profileId: STUDIO_PROFILE_ID,
  anchors: anchors.map(ready),
});
export const createStudioSelectedMessage = (
  channelId: string,
  anchor: StudioAnchorSnapshot,
): StudioSelectedMessage => ({
  version: STUDIO_BRIDGE_VERSION,
  type: "studio.selected",
  channelId,
  anchor: { ...ready(anchor), bounds: anchor.bounds },
});
