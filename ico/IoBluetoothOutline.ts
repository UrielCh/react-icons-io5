import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * luetoothOutline icon from Ionicons 5
 * @module
 */
export function IoBluetoothOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m144 352 224-192L256 48v416l112-112-224-192"}}]})(props);
}
export default IoBluetoothOutline;
