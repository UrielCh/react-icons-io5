import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * hapesOutline icon from Ionicons 5
 * @module
 */
export function IoShapesOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"32",d:"M336 320H32L184 48l152 272zm-70.68-125.49A144 144 0 1 1 192 320"}}]})(props);
}
export default IoShapesOutline;
