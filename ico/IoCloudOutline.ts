import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * loudOutline icon from Ionicons 5
 * @module
 */
export function IoCloudOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"32",d:"M400 240c-8.89-89.54-71-144-144-144-69 0-113.44 48.2-128 96-60 6-112 43.59-112 112 0 66 54 112 120 112h260c55 0 100-27.44 100-88 0-59.82-53-85.76-96-88z"}}]})(props);
}
export default IoCloudOutline;
