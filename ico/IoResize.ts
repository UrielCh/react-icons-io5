import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * esize icon from Ionicons 5
 * @module
 */
export function IoResize(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304"}}]})(props);
}
export default IoResize;
