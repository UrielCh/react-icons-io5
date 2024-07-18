import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * hevronForward icon from Ionicons 5
 * @module
 */
export function IoChevronForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m184 112 144 144-144 144"}}]})(props);
}
export default IoChevronForward;
