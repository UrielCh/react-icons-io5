import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ropSharp icon from Ionicons 5
 * @module
 */
export function IoCropSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M166 346V32h-44v90H32v44h90v224h224v90h44v-90h90v-44H166z"}},{tag:"path",attr:{d:"M346 320h44V122H192v44h154v154z"},child:[]}]})(props);
}
export default IoCropSharp;
