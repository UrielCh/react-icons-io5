import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * enuSharp icon from Ionicons 5
 * @module
 */
export function IoMenuSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"}}]})(props);
}
export default IoMenuSharp;
