import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ubeSharp icon from Ionicons 5
 * @module
 */
export function IoCubeSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 170v196.92L240 480V284L48 170zm224 310 192-113.08V170L272 284zm176-122.36zM448 144 256 32 64 144l192 112 192-112z"}}]})(props);
}
export default IoCubeSharp;
