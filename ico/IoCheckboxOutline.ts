import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * heckboxOutline icon from Ionicons 5
 * @module
 */
export function IoCheckboxOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352 176 217.6 336 160 272"}},{tag:"rect",attr:{"width":"384","height":"384",x:"64",y:"64",fill:"none",strokeLinejoin:"round",strokeWidth:"32","rx":"48","ry":"48"},child:[]}]})(props);
}
export default IoCheckboxOutline;
