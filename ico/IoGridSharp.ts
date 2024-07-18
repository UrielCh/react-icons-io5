import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ridSharp icon from Ionicons 5
 * @module
 */
export function IoGridSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M240 240H32V32h208zm240 0H272V32h208zM240 480H32V272h208zm240 0H272V272h208z"}}]})(props);
}
export default IoGridSharp;
