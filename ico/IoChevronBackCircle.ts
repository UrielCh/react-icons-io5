import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * hevronBackCircle icon from Ionicons 5
 * @module
 */
export function IoChevronBackCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm35.31 292.69a16 16 0 1 1-22.62 22.62l-96-96a16 16 0 0 1 0-22.62l96-96a16 16 0 0 1 22.62 22.62L206.63 256z"}}]})(props);
}
export default IoChevronBackCircle;
