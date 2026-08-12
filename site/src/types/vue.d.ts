import { designTokens } from "../generated/design-tokens";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $colors: typeof designTokens;
  }
}
