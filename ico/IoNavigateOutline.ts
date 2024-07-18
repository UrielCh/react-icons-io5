import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * avigateOutline icon from Ionicons 5
 * @module
 */
export function IoNavigateOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M448 64 64 240.14h200a8 8 0 0 1 8 8V448z"}}]})(props);
}
export default IoNavigateOutline;
