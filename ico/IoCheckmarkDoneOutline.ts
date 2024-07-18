import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * heckmarkDoneOutline icon from Ionicons 5
 * @module
 */
export function IoCheckmarkDoneOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M464 128 240 384l-96-96m0 96-96-96m320-160L232 284"}}]})(props);
}
export default IoCheckmarkDoneOutline;
