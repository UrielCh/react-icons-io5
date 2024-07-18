import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * anOutline icon from Ionicons 5
 * @module
 */
export function IoBanOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{"cx":"256","cy":"256","r":"208",fill:"none","strokeMiterlimit":"10",strokeWidth:"32"}},{tag:"path",attr:{fill:"none","strokeMiterlimit":"10",strokeWidth:"32",d:"m108.92 108.92 294.16 294.16"},child:[]}]})(props);
}
export default IoBanOutline;
