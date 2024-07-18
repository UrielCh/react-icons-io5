import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * emoveSharp icon from Ionicons 5
 * @module
 */
export function IoRemoveSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"square",strokeLinejoin:"round",strokeWidth:"32",d:"M400 256H112"}}]})(props);
}
export default IoRemoveSharp;
