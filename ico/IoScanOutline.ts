import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * canOutline icon from Ionicons 5
 * @module
 */
export function IoScanOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M336 448h56a56 56 0 0 0 56-56v-56m0-160v-56a56 56 0 0 0-56-56h-56M176 448h-56a56 56 0 0 1-56-56v-56m0-160v-56a56 56 0 0 1 56-56h56"}}]})(props);
}
export default IoScanOutline;
