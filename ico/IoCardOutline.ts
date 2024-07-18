import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ardOutline icon from Ionicons 5
 * @module
 */
export function IoCardOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{"width":"416","height":"320",x:"48",y:"96",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32","rx":"56","ry":"56"}},{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"60",d:"M48 192h416M128 300h48v20h-48z"},child:[]}]})(props);
}
export default IoCardOutline;
