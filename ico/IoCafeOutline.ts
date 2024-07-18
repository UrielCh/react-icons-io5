import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * afeOutline icon from Ionicons 5
 * @module
 */
export function IoCafeOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 80h64a16 16 0 0 1 16 16v34a46 46 0 0 1-46 46h-34M96 80h272v192a80 80 0 0 1-80 80H176a80 80 0 0 1-80-80V80h0zM64 416h336"}}]})(props);
}
export default IoCafeOutline;
