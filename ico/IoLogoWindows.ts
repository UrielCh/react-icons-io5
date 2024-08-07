import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ogoWindows icon from Ionicons 5
 * @module
 */
export function IoLogoWindows(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 265H232v179l248 36V265zm-264 0H32v150l184 26.7V265zM480 32 232 67.4V249h248V32zM216 69.7 32 96v153h184V69.7z"}}]})(props);
}
export default IoLogoWindows;
