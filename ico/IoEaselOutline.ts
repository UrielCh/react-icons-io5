import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * aselOutline icon from Ionicons 5
 * @module
 */
export function IoEaselOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{"width":"416","height":"272",x:"48",y:"80",fill:"none",strokeLinejoin:"round",strokeWidth:"32","rx":"32","ry":"32"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 416v-64m0-272V48m144 416-32-112M112 464l32-112"},child:[]}]})(props);
}
export default IoEaselOutline;
