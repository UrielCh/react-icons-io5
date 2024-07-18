import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * imer icon from Ionicons 5
 * @module
 */
export function IoTimer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.12 48 48 141.12 48 256s93.12 208 208 208 208-93.12 208-208S370.88 48 256 48zm-82.33 114.34 105 71a32.5 32.5 0 0 1-37.25 53.26 33.21 33.21 0 0 1-8-8l-71-105a8.13 8.13 0 0 1 11.32-11.32zM256 432c-97 0-176-78.95-176-176a174.55 174.55 0 0 1 53.87-126.72 14.15 14.15 0 1 1 19.64 20.37A146.53 146.53 0 0 0 108.3 256c0 81.44 66.26 147.7 147.7 147.7S403.7 337.44 403.7 256c0-76.67-58.72-139.88-133.55-147v55a14.15 14.15 0 1 1-28.3 0V94.15A14.15 14.15 0 0 1 256 80c97.05 0 176 79 176 176s-78.95 176-176 176z"}}]})(props);
}
export default IoTimer;
