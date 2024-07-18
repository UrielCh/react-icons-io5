import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * loseCircleOutline icon from Ionicons 5
 * @module
 */
export function IoCloseCircleOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none","strokeMiterlimit":"10",strokeWidth:"32",d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M320 320 192 192m0 128 128-128"},child:[]}]})(props);
}
export default IoCloseCircleOutline;
