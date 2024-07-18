import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ileTraySharp icon from Ionicons 5
 * @module
 */
export function IoFileTraySharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316z"}}]})(props);
}
export default IoFileTraySharp;
