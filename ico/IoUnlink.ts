import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * nlink icon from Ionicons 5
 * @module
 */
export function IoUnlink(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66"}}]})(props);
}
export default IoUnlink;
