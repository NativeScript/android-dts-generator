/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityWindowInfoCompatApi21 {
						public static obtain(): java.lang.Object;
						public static obtain(param0: java.lang.Object): java.lang.Object;
						public static getType(param0: java.lang.Object): number;
						public static getLayer(param0: java.lang.Object): number;
						public static getRoot(param0: java.lang.Object): java.lang.Object;
						public static getParent(param0: java.lang.Object): java.lang.Object;
						public static getId(param0: java.lang.Object): number;
						public static getBoundsInScreen(param0: java.lang.Object, param1: android.graphics.Rect): void;
						public static isActive(param0: java.lang.Object): boolean;
						public static isFocused(param0: java.lang.Object): boolean;
						public static isAccessibilityFocused(param0: java.lang.Object): boolean;
						public static getChildCount(param0: java.lang.Object): number;
						public static getChild(param0: java.lang.Object, param1: number): java.lang.Object;
						public static recycle(param0: java.lang.Object): void;
					}
				}
			}
		}
	}
}
