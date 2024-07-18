import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * unnelSharp icon from Ionicons 5
 * @module
 */
export function IoFunnelSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m0 48 192 240v128l128 48V288L512 48H0z"}}]})(props);
}
export default IoFunnelSharp;
