import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * llipseOutline icon from Ionicons 5
 * @module
 */
export function IoEllipseOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{"cx":"256","cy":"256","r":"192",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}}]})(props);
}
export default IoEllipseOutline;
