import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ddSharp icon from Ionicons 5
 * @module
 */
export function IoAddSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"square",strokeLinejoin:"round",strokeWidth:"32",d:"M256 112v288m144-144H112"}}]})(props);
}
export default IoAddSharp;
