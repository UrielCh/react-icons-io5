import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * nformation icon from Ionicons 5
 * @module
 */
export function IoInformation(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"40",d:"M196 220h64v172"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round","strokeMiterlimit":"10",strokeWidth:"40",d:"M187 396h138"},child:[]},{tag:"path",attr:{d:"M256 160a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"},child:[]}]})(props);
}
export default IoInformation;
