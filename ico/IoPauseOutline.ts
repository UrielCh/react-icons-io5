import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * auseOutline icon from Ionicons 5
 * @module
 */
export function IoPauseOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M176 96h16v320h-16zm144 0h16v320h-16z"}}]})(props);
}
export default IoPauseOutline;
