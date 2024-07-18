import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ontrastOutline icon from Ionicons 5
 * @module
 */
export function IoContrastOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{"cx":"256","cy":"256","r":"208",fill:"none",strokeLinejoin:"round",strokeWidth:"32"}},{tag:"path",attr:{d:"M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z"},child:[]}]})(props);
}
export default IoContrastOutline;
