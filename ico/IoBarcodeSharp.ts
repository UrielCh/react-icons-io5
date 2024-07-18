import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * arcodeSharp icon from Ionicons 5
 * @module
 */
export function IoBarcodeSharp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"square",strokeLinejoin:"round",strokeWidth:"32",d:"m400 400.33 48-.33V112l-48 .33M112 112l-48 .33v288l48-.33m272-208v128m-64-160v192m-64-176v160m-64-176v192m-64-160v128"}}]})(props);
}
export default IoBarcodeSharp;
