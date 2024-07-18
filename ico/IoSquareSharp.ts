import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * quareSharp icon from Ionicons 5
 * @module
 */
export function IoSquareSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 48h416v416H48z"}}]})(props);
}
export default IoSquareSharp;
