import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * erminalOutline icon from Ionicons 5
 * @module
 */
export function IoTerminalOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{"width":"448","height":"416",x:"32",y:"48",fill:"none",strokeLinejoin:"round",strokeWidth:"32","rx":"48","ry":"48"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m96 112 80 64-80 64m96 0h64"},child:[]}]})(props);
}
export default IoTerminalOutline;
