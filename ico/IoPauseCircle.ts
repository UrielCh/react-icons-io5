import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * auseCircle icon from Ionicons 5
 * @module
 */
export function IoPauseCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-32 272a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0zm96 0a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0z"}}]})(props);
}
export default IoPauseCircle;
