import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * nvertMode icon from Ionicons 5
 * @module
 */
export function IoInvertMode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{"cx":"256","cy":"256","r":"208",fill:"none","strokeMiterlimit":"10",strokeWidth:"32"}},{tag:"path",attr:{d:"M256 176v160a80 80 0 0 0 0-160zm0-128v128a80 80 0 0 0 0 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48z"},child:[]}]})(props);
}
export default IoInvertMode;
