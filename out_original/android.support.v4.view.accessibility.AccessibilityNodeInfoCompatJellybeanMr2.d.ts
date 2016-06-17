/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityNodeInfoCompatJellybeanMr2 {
						public static setViewIdResourceName(param0: java.lang.Object, param1: string): void;
						public static getViewIdResourceName(param0: java.lang.Object): string;
						public static findAccessibilityNodeInfosByViewId(param0: java.lang.Object, param1: string): java.util.List;
						public static setTextSelection(param0: java.lang.Object, param1: number, param2: number): void;
						public static getTextSelectionStart(param0: java.lang.Object): number;
						public static getTextSelectionEnd(param0: java.lang.Object): number;
						public static isEditable(param0: java.lang.Object): boolean;
						public static setEditable(param0: java.lang.Object, param1: boolean): void;
						public static refresh(param0: java.lang.Object): boolean;
					}
				}
			}
		}
	}
}
