import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ournal icon from Ionicons 5
 * @module
 */
export function IoJournal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M290 32H144a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h146zm78 0h-18v448h18a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64z"}}]})(props);
}
export default IoJournal;
