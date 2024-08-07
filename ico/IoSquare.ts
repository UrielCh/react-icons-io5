import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * quare icon from Ionicons 5
 * @module
 */
export function IoSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 464H96a48.05 48.05 0 0 1-48-48V96a48.05 48.05 0 0 1 48-48h320a48.05 48.05 0 0 1 48 48v320a48.05 48.05 0 0 1-48 48z"}}]})(props);
}
export default IoSquare;
