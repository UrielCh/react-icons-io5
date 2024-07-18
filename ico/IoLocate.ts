import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ocate icon from Ionicons 5
 * @module
 */
export function IoLocate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M256 96V56m0 400v-40m0-304a144 144 0 1 0 144 144 144 144 0 0 0-144-144zm160 144h40m-400 0h40"}}]})(props);
}
export default IoLocate;
