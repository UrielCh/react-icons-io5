import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * owlingBallOutline icon from Ionicons 5
 * @module
 */
export function IoBowlingBallOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{"cx":"256","cy":"256","r":"208",fill:"none","strokeMiterlimit":"10",strokeWidth:"32"}},{tag:"circle",attr:{"cx":"288","cy":"200","r":"24"},child:[]},{tag:"circle",attr:{"cx":"296","cy":"128","r":"24"},child:[]},{tag:"circle",attr:{"cx":"360","cy":"168","r":"24"},child:[]}]})(props);
}
export default IoBowlingBallOutline;
