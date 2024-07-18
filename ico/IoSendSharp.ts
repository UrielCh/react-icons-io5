import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * endSharp icon from Ionicons 5
 * @module
 */
export function IoSendSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m16 464 480-208L16 48v160l320 48-320 48z"}}]})(props);
}
export default IoSendSharp;
