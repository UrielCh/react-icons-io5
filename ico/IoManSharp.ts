import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * anSharp icon from Ionicons 5
 * @module
 */
export function IoManSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{"cx":"256","cy":"56","r":"56"}},{tag:"path",attr:{d:"M336 128H176a32 32 0 0 0-32 32v160h48V192h8v320h52V328h8v184h52V192h8v128h48V160a32 32 0 0 0-32-32z"},child:[]}]})(props);
}
export default IoManSharp;
