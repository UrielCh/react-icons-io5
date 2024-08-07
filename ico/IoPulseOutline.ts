import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ulseOutline icon from Ionicons 5
 * @module
 */
export function IoPulseOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M48 320h64l64-256 64 384 64-224 32 96h64"}},{tag:"circle",attr:{"cx":"432","cy":"320","r":"32",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"},child:[]}]})(props);
}
export default IoPulseOutline;
