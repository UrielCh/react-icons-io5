import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ontrast icon from Ionicons 5
 * @module
 */
export function IoContrast(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32A224 224 0 0 0 97.61 414.39 224 224 0 1 0 414.39 97.61 222.53 222.53 0 0 0 256 32zM64 256c0-105.87 86.13-192 192-192v384c-105.87 0-192-86.13-192-192z"}}]})(props);
}
export default IoContrast;
