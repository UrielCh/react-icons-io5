import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * tarOutline icon from Ionicons 5
 * @module
 */
export function IoStarOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"32",d:"M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"}}]})(props);
}
export default IoStarOutline;
