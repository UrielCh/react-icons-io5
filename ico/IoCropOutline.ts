import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ropOutline icon from Ionicons 5
 * @module
 */
export function IoCropOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M144 48v272a48 48 0 0 0 48 48h272"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 304V192a48 48 0 0 0-48-48H208m160 224v96M144 144H48"},child:[]}]})(props);
}
export default IoCropOutline;
