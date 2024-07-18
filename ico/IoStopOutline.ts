import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * topOutline icon from Ionicons 5
 * @module
 */
export function IoStopOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{"width":"320","height":"320",x:"96",y:"96",fill:"none",strokeLinejoin:"round",strokeWidth:"32","rx":"24","ry":"24"}}]})(props);
}
export default IoStopOutline;
