import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * quareOutline icon from Ionicons 5
 * @module
 */
export function IoSquareOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M416 448H96a32.09 32.09 0 0 1-32-32V96a32.09 32.09 0 0 1 32-32h320a32.09 32.09 0 0 1 32 32v320a32.09 32.09 0 0 1-32 32z"}}]})(props);
}
export default IoSquareOutline;
