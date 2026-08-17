import {
  HERO_STUDIO_ANCHORS,
  STUDIO_PARENT_ORIGIN,
  createStudioReadyMessage,
  createStudioSelectedMessage,
  isTrustedStudioOrigin,
  parseStudioHostMessage,
  type HeroStudioAnchorId,
  type StudioAnchorSnapshot,
  type StudioPreviewCommand,
  type StudioReadyMessage,
  type StudioSelectedMessage,
} from "./heroContract";
import { previewOverridePlan } from "./previewOverrides";

const anchorSelector = "[data-sg-studio-anchor]";
const selectedAttribute = "data-sg-studio-selected";
const overriddenAttribute = "data-sg-studio-overridden";
const overlayAttribute = "data-sg-studio-overlay";
const styleAttribute = "data-sg-studio-style";
const bridgeStyles = `
[${selectedAttribute}="true"] { outline: 3px solid #f1c40f !important; outline-offset: 4px !important; }
[${overriddenAttribute}="true"] { transform: translate(var(--sg-studio-translateX, 0px), var(--sg-studio-translateY, 0px)) rotate(var(--sg-studio-rotate, 0deg)) scale(var(--sg-studio-scale, 1)); transition-property: transform, opacity, visibility, gap, padding, border-radius; transition-duration: var(--sg-studio-motion-duration, 160ms); transition-timing-function: var(--sg-studio-motion-easing, ease); }
[${overlayAttribute}] { position: fixed; z-index: 2147483647; pointer-events: none; padding: 4px 8px; border-radius: 999px; color: #141414; background: #f1c40f; font: 700 12px/1.4 system-ui, sans-serif; box-shadow: 0 4px 18px rgba(0,0,0,.35); }
@media (prefers-reduced-motion: reduce) { [${overriddenAttribute}="true"] { transition-duration: 0ms !important; } }
`;

interface OriginalStyle {
  readonly value: string;
  readonly priority: string;
}

class BrowserHeroStudioRuntime {
  readonly #window: Window;
  readonly #document: Document;
  readonly #originalStyles = new Map<HTMLElement, Map<string, OriginalStyle>>();
  #selected: HTMLElement | null = null;
  #overlay: HTMLElement | null = null;

  constructor(targetWindow: Window, targetDocument: Document) {
    this.#window = targetWindow;
    this.#document = targetDocument;
  }

  snapshots(): readonly StudioAnchorSnapshot[] {
    const elements = this.#elements();
    const ids = Object.keys(HERO_STUDIO_ANCHORS) as HeroStudioAnchorId[];
    if (elements.size !== ids.length || ids.some((id) => !elements.has(id)))
      return [];
    return ids.map((id) => this.#snapshot(id, elements.get(id)!));
  }

  select(anchorId: HeroStudioAnchorId): StudioAnchorSnapshot | null {
    const element = this.#elements().get(anchorId);
    if (!element) return null;
    this.#selected?.removeAttribute(selectedAttribute);
    this.#selected = element;
    element.setAttribute(selectedAttribute, "true");
    this.#renderOverlay(anchorId);
    return this.#snapshot(anchorId, element);
  }

  apply(command: StudioPreviewCommand): StudioAnchorSnapshot | null {
    const element = this.#elements().get(command.anchorId);
    if (!element) return null;
    for (const mutation of previewOverridePlan(command))
      this.#setStyle(element, mutation.property, mutation.value);
    element.setAttribute(overriddenAttribute, "true");
    return this.#snapshot(command.anchorId, element);
  }

  reset(): void {
    for (const [element, properties] of this.#originalStyles) {
      for (const [property, original] of properties)
        original.value === ""
          ? element.style.removeProperty(property)
          : element.style.setProperty(
              property,
              original.value,
              original.priority,
            );
      element.removeAttribute(overriddenAttribute);
    }
    this.#originalStyles.clear();
    this.repositionOverlay();
  }

  post(
    message: StudioReadyMessage | StudioSelectedMessage,
    targetOrigin: string,
  ): void {
    if (this.#window.parent !== this.#window)
      this.#window.parent.postMessage(message, targetOrigin);
  }

  repositionOverlay(): void {
    if (!this.#selected || !this.#overlay) return;
    const bounds = this.#selected.getBoundingClientRect();
    this.#overlay.style.left = `${Math.max(4, bounds.left)}px`;
    this.#overlay.style.top = `${Math.max(4, bounds.top - 30)}px`;
  }

  dispose(): void {
    this.reset();
    this.#selected?.removeAttribute(selectedAttribute);
    this.#overlay?.remove();
    this.#document.querySelector(`[${styleAttribute}]`)?.remove();
  }

  #elements(): Map<HeroStudioAnchorId, HTMLElement> {
    const result = new Map<HeroStudioAnchorId, HTMLElement>();
    for (const element of this.#document.querySelectorAll<HTMLElement>(
      anchorSelector,
    )) {
      const id = element.dataset.sgStudioAnchor;
      if (
        !id ||
        !(id in HERO_STUDIO_ANCHORS) ||
        result.has(id as HeroStudioAnchorId)
      )
        return new Map();
      result.set(id as HeroStudioAnchorId, element);
    }
    return result;
  }

  #snapshot(
    id: HeroStudioAnchorId,
    element: HTMLElement,
  ): StudioAnchorSnapshot {
    const bounds = element.getBoundingClientRect();
    return {
      id,
      ...HERO_STUDIO_ANCHORS[id],
      bounds: {
        x: bounds.x,
        y: bounds.y,
        width: bounds.width,
        height: bounds.height,
      },
    };
  }

  #setStyle(element: HTMLElement, property: string, value: string): void {
    let properties = this.#originalStyles.get(element);
    if (!properties) {
      properties = new Map();
      this.#originalStyles.set(element, properties);
    }
    if (!properties.has(property))
      properties.set(property, {
        value: element.style.getPropertyValue(property),
        priority: element.style.getPropertyPriority(property),
      });
    element.style.setProperty(property, value);
  }

  #renderOverlay(anchorId: HeroStudioAnchorId): void {
    if (!this.#document.querySelector(`[${styleAttribute}]`)) {
      const style = this.#document.createElement("style");
      style.setAttribute(styleAttribute, "true");
      style.textContent = bridgeStyles;
      this.#document.head.append(style);
    }
    if (!this.#overlay) {
      this.#overlay = this.#document.createElement("div");
      this.#overlay.setAttribute(overlayAttribute, "true");
      this.#overlay.setAttribute("role", "status");
      this.#overlay.setAttribute("aria-live", "polite");
      this.#document.body.append(this.#overlay);
    }
    this.#overlay.textContent = `Surface Studio : ${HERO_STUDIO_ANCHORS[anchorId].label}`;
    this.repositionOverlay();
  }
}

export function installHeroStudioBridge(
  options: {
    readonly parentOrigin?: string;
    readonly targetWindow?: Window;
    readonly targetDocument?: Document;
  } = {},
): () => void {
  const targetWindow = options.targetWindow ?? window;
  const targetDocument = options.targetDocument ?? document;
  const parentOrigin = options.parentOrigin ?? STUDIO_PARENT_ORIGIN;
  if (
    targetWindow.parent === targetWindow ||
    parentOrigin !== STUDIO_PARENT_ORIGIN
  )
    return () => undefined;
  const runtime = new BrowserHeroStudioRuntime(targetWindow, targetDocument);
  let channelId: string | null = null;
  let revision = -1;
  let signature = "";
  const sendSelected = (anchorId: HeroStudioAnchorId) => {
    const anchor = runtime.select(anchorId);
    if (!anchor || !channelId) return false;
    runtime.post(createStudioSelectedMessage(channelId, anchor), parentOrigin);
    return true;
  };
  const onMessage = (event: MessageEvent) => {
    if (!isTrustedStudioOrigin(event.origin, parentOrigin)) return;
    const message = parseStudioHostMessage(event.data);
    if (!message) return;
    if (message.type === "studio.attach") {
      if (channelId !== null && channelId !== message.channelId) return;
      const anchors = runtime.snapshots();
      if (anchors.length !== Object.keys(HERO_STUDIO_ANCHORS).length) return;
      channelId = message.channelId;
      runtime.post(createStudioReadyMessage(channelId, anchors), parentOrigin);
      return;
    }
    if (message.channelId !== channelId) return;
    if (message.type === "studio.select") {
      sendSelected(message.anchorId);
      return;
    }
    const nextSignature = JSON.stringify(message.commands);
    if (
      message.revision < revision ||
      (message.revision === revision && nextSignature !== signature)
    )
      return;
    if (message.revision === revision) return;
    runtime.reset();
    for (const command of message.commands)
      if (!runtime.apply(command)) {
        runtime.reset();
        return;
      }
    revision = message.revision;
    signature = nextSignature;
  };
  const onClick = (event: MouseEvent) => {
    if (!(event.target instanceof Element)) return;
    const anchored = event.target.closest<HTMLElement>(anchorSelector);
    const anchorId = anchored?.dataset.sgStudioAnchor as
      | HeroStudioAnchorId
      | undefined;
    if (
      anchorId &&
      anchorId in HERO_STUDIO_ANCHORS &&
      channelId &&
      sendSelected(anchorId)
    ) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (channelId && event.target.closest("a[href], [formaction]")) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  const onSubmit = (event: SubmitEvent) => {
    if (channelId) event.preventDefault();
  };
  const reposition = () => runtime.repositionOverlay();
  const resizeObserver =
    typeof ResizeObserver === "undefined"
      ? null
      : new ResizeObserver(reposition);
  resizeObserver?.observe(targetDocument.documentElement);
  targetWindow.addEventListener("message", onMessage);
  targetDocument.addEventListener("click", onClick, true);
  targetDocument.addEventListener("submit", onSubmit, true);
  targetWindow.addEventListener("resize", reposition);
  targetWindow.addEventListener("scroll", reposition, true);
  return () => {
    resizeObserver?.disconnect();
    targetWindow.removeEventListener("message", onMessage);
    targetDocument.removeEventListener("click", onClick, true);
    targetDocument.removeEventListener("submit", onSubmit, true);
    targetWindow.removeEventListener("resize", reposition);
    targetWindow.removeEventListener("scroll", reposition, true);
    runtime.dispose();
  };
}
