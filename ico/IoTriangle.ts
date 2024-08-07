import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * riangle icon from Ionicons 5
 * @module
 */
export function IoTriangle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 464H48a16 16 0 0 1-14.07-23.62l208-384a16 16 0 0 1 28.14 0l208 384A16 16 0 0 1 464 464z"}}]})(props);
}
export default IoTriangle;
