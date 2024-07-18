import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * laySharp icon from Ionicons 5
 * @module
 */
export function IoPlaySharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m96 448 320-192L96 64v384z"}}]})(props);
}
export default IoPlaySharp;
