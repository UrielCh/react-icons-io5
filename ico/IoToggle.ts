import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * oggle icon from Ionicons 5
 * @module
 */
export function IoToggle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M368 112H144C64.6 112 0 176.6 0 256s64.6 144 144 144h224c79.4 0 144-64.6 144-144s-64.6-144-144-144zm0 256a112 112 0 1 1 112-112 112.12 112.12 0 0 1-112 112z"}}]})(props);
}
export default IoToggle;
