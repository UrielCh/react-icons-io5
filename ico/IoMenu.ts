import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * enu icon from Ionicons 5
 * @module
 */
export function IoMenu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round","strokeMiterlimit":"10",strokeWidth:"48",d:"M88 152h336M88 256h336M88 360h336"}}]})(props);
}
export default IoMenu;
