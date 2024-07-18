import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * oveSharp icon from Ionicons 5
 * @module
 */
export function IoMoveSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none","strokeMiterlimit":"10",strokeWidth:"32",d:"m176 112 80-80 80 80m-80.02-80 .02 448m-80-80 80 80 80-80m64-224 80 80-80 80M112 176l-80 80 80 80m-80-80h448"}}]})(props);
}
export default IoMoveSharp;
