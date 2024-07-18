import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * lertSharp icon from Ionicons 5
 * @module
 */
export function IoAlertSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"square","strokeMiterlimit":"10",strokeWidth:"32",d:"m240 80 8 240h16l8-240h-32zm0 320h32v32h-32z"}}]})(props);
}
export default IoAlertSharp;
