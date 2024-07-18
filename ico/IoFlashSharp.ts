import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * lashSharp icon from Ionicons 5
 * @module
 */
export function IoFlashSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432 208H288l32-192L80 304h144l-32 192z"}}]})(props);
}
export default IoFlashSharp;
