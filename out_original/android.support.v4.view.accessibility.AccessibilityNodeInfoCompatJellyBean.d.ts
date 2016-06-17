/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityNodeInfoCompatJellyBean {
						public static addChild(param0: java.lang.Object, param1: android.view.View, param2: number): void;
						public static setSource(param0: java.lang.Object, param1: android.view.View, param2: number): void;
						public static isVisibleToUser(param0: java.lang.Object): boolean;
						public static setVisibleToUser(param0: java.lang.Object, param1: boolean): void;
						public static performAction(param0: java.lang.Object, param1: number, param2: android.os.Bundle): boolean;
						public static setMovementGranularities(param0: java.lang.Object, param1: number): void;
						public static getMovementGranularities(param0: java.lang.Object): number;
						public static obtain(param0: android.view.View, param1: number): java.lang.Object;
						public static findFocus(param0: java.lang.Object, param1: number): java.lang.Object;
						public static focusSearch(param0: java.lang.Object, param1: number): java.lang.Object;
						public static setParent(param0: java.lang.Object, param1: android.view.View, param2: number): void;
						public static isAccessibilityFocused(param0: java.lang.Object): boolean;
						public static setAccesibilityFocused(param0: java.lang.Object, param1: boolean): void;
					}
				}
			}
		}
	}
}
