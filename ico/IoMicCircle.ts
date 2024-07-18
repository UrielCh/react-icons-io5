import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * icCircle icon from Ionicons 5
 * @module
 */
export function IoMicCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-48 128a48.14 48.14 0 0 1 48-48 48.14 48.14 0 0 1 48 48v64a48.14 48.14 0 0 1-48 48 48.14 48.14 0 0 1-48-48zm144 72.22c0 23.36-10.94 45.61-30.79 62.66A103.71 103.71 0 0 1 272 334.26V352h16a16 16 0 0 1 0 32h-64a16 16 0 0 1 0-32h16v-17.74a103.71 103.71 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V224.3a16 16 0 0 1 32 0v23.92c0 25.66 28 55.48 64 55.48 29.6 0 64-24.23 64-55.48V224.3a16 16 0 1 1 32 0z"}}]})(props);
}
export default IoMicCircle;
