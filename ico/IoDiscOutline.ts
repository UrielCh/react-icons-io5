import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * iscOutline icon from Ionicons 5
 * @module
 */
export function IoDiscOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{"cx":"256","cy":"256","r":"208",fill:"none","strokeMiterlimit":"10",strokeWidth:"32"}},{tag:"circle",attr:{"cx":"256","cy":"256","r":"96",fill:"none","strokeMiterlimit":"10",strokeWidth:"32"},child:[]},{tag:"circle",attr:{"cx":"256","cy":"256","r":"32"},child:[]}]})(props);
}
export default IoDiscOutline;
