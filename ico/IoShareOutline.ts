import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * hareOutline icon from Ionicons 5
 * @module
 */
export function IoShareOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M336 192h40a40 40 0 0 1 40 40v192a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V232a40 40 0 0 1 40-40h40m160-64-80-80-80 80m80 193V48"}}]})(props);
}
export default IoShareOutline;
