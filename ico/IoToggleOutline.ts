import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * oggleOutline icon from Ionicons 5
 * @module
 */
export function IoToggleOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{"cx":"368","cy":"256","r":"128",fill:"none",strokeLinejoin:"round",strokeWidth:"32"}},{tag:"rect",attr:{"width":"480","height":"256",x:"16",y:"128",fill:"none",strokeLinejoin:"round",strokeWidth:"32","rx":"128","ry":"128"},child:[]}]})(props);
}
export default IoToggleOutline;
