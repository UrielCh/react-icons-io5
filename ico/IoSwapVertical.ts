import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * wapVertical icon from Ionicons 5
 * @module
 */
export function IoSwapVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M464 208 352 96 240 208m112-94.87V416M48 304l112 112 112-112m-112 94V96"}}]})(props);
}
export default IoSwapVertical;
