import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * istSharp icon from Ionicons 5
 * @module
 */
export function IoListSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"48",d:"M144 144h320M144 256h320M144 368h320"}},{tag:"path",attr:{fill:"none",strokeLinecap:"square",strokeLinejoin:"round",strokeWidth:"32",d:"M64 128h32v32H64zm0 112h32v32H64zm0 112h32v32H64z"},child:[]}]})(props);
}
export default IoListSharp;
