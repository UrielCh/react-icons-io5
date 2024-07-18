import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * tarHalf icon from Ionicons 5
 * @module
 */
export function IoStarHalf(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"32",d:"M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"}},{tag:"path",attr:{d:"M256 48v316L118 464l54-160-140-96h172l52-160z"},child:[]}]})(props);
}
export default IoStarHalf;
