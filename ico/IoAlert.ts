import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * lert icon from Ionicons 5
 * @module
 */
export function IoAlert(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8l8-216c.58-8.64-7.34-16-16-16z"}},{tag:"circle",attr:{"cx":"256","cy":"416","r":"16",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"},child:[]}]})(props);
}
export default IoAlert;
