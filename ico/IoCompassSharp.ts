import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ompassSharp icon from Ionicons 5
 * @module
 */
export function IoCompassSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{"cx":"256","cy":"256","r":"24"}},{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm48 256-160 64 64-160 160-64z"},child:[]}]})(props);
}
export default IoCompassSharp;
