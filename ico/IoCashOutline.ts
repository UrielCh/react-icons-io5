import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ashOutline icon from Ionicons 5
 * @module
 */
export function IoCashOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{"width":"448","height":"256",x:"32",y:"80",fill:"none",strokeLinejoin:"round",strokeWidth:"32","rx":"16","ry":"16","transform":"rotate(180 256 208)"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M64 384h384M96 432h320"},child:[]},{tag:"circle",attr:{"cx":"256","cy":"208","r":"80",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M480 160a80 80 0 0 1-80-80M32 160a80 80 0 0 0 80-80m368 176a80 80 0 0 0-80 80M32 256a80 80 0 0 1 80 80"},child:[]}]})(props);
}
export default IoCashOutline;
