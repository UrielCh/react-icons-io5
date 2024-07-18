import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * top icon from Ionicons 5
 * @module
 */
export function IoStop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M392 432H120a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h272a40 40 0 0 1 40 40v272a40 40 0 0 1-40 40z"}}]})(props);
}
export default IoStop;
