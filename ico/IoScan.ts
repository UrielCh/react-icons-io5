import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * can icon from Ionicons 5
 * @module
 */
export function IoScan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"44",d:"M342 444h46a56 56 0 0 0 56-56v-46m0-172v-46a56 56 0 0 0-56-56h-46M170 444h-46a56 56 0 0 1-56-56v-46m0-172v-46a56 56 0 0 1 56-56h46"}}]})(props);
}
export default IoScan;
