import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * riangleSharp icon from Ionicons 5
 * @module
 */
export function IoTriangleSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32 20 464h472L256 32z"}}]})(props);
}
export default IoTriangleSharp;
