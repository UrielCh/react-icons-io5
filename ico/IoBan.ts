import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * an icon from Ionicons 5
 * @module
 */
export function IoBan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{"cx":"256","cy":"256","r":"200",fill:"none","strokeMiterlimit":"10",strokeWidth:"48"}},{tag:"path",attr:{"strokeMiterlimit":"10",strokeWidth:"48",d:"m114.58 114.58 282.84 282.84"},child:[]}]})(props);
}
export default IoBan;
