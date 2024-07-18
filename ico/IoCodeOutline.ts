import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * odeOutline icon from Ionicons 5
 * @module
 */
export function IoCodeOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M160 368 32 256l128-112m192 224 128-112-128-112"}}]})(props);
}
export default IoCodeOutline;
