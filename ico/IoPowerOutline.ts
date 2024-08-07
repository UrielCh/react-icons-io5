import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * owerOutline icon from Ionicons 5
 * @module
 */
export function IoPowerOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M378 108a191.41 191.41 0 0 1 70 148c0 106-86 192-192 192S64 362 64 256a192 192 0 0 1 69-148m123-44v192"}}]})(props);
}
export default IoPowerOutline;
