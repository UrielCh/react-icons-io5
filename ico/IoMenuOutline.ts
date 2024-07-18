import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * enuOutline icon from Ionicons 5
 * @module
 */
export function IoMenuOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round","strokeMiterlimit":"10",strokeWidth:"32",d:"M80 160h352M80 256h352M80 352h352"}}]})(props);
}
export default IoMenuOutline;
