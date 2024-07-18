import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * choolOutline icon from Ionicons 5
 * @module
 */
export function IoSchoolOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M32 192 256 64l224 128-224 128L32 192z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M112 240v128l144 80 144-80V240m80 128V192M256 320v128"},child:[]}]})(props);
}
export default IoSchoolOutline;
