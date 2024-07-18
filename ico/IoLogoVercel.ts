import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ogoVercel icon from Ionicons 5
 * @module
 */
export function IoLogoVercel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"m256 48 240 416H16z"}}]})(props);
}
export default IoLogoVercel;
