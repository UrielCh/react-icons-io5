import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ellularSharp icon from Ionicons 5
 * @module
 */
export function IoCellularSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 432h-96V80h96zm-128 0h-96V160h96zm-128 0h-96V224h96zm-128 0H16V288h96z"}}]})(props);
}
export default IoCellularSharp;
