import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ogoTwitch icon from Ionicons 5
 * @module
 */
export function IoLogoTwitch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m80 32-32 80v304h96v64h64l64-64h80l112-112V32zm336 256-64 64h-96l-64 64v-64h-80V80h304z"}},{tag:"path",attr:{d:"M320 143h48v129h-48zm-112 0h48v129h-48z"},child:[]}]})(props);
}
export default IoLogoTwitch;
