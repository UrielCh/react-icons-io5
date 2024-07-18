import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * llipsisVerticalCircle icon from Ionicons 5
 * @module
 */
export function IoEllipsisVerticalCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{"cx":"256","cy":"256","r":"26"}},{tag:"circle",attr:{"cx":"256","cy":"346","r":"26"},child:[]},{tag:"circle",attr:{"cx":"256","cy":"166","r":"26"},child:[]},{tag:"path",attr:{fill:"none","strokeMiterlimit":"10",strokeWidth:"32",d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"},child:[]}]})(props);
}
export default IoEllipsisVerticalCircle;
