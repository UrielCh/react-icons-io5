import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * llipsisHorizontal icon from Ionicons 5
 * @module
 */
export function IoEllipsisHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{"cx":"256","cy":"256","r":"48"}},{tag:"circle",attr:{"cx":"416","cy":"256","r":"48"},child:[]},{tag:"circle",attr:{"cx":"96","cy":"256","r":"48"},child:[]}]})(props);
}
export default IoEllipsisHorizontal;
