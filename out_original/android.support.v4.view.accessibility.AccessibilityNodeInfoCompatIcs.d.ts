/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityNodeInfoCompatIcs {
						public static obtain(): java.lang.Object;
						public static obtain(param0: android.view.View): java.lang.Object;
						public static obtain(param0: java.lang.Object): java.lang.Object;
						public static addAction(param0: java.lang.Object, param1: number): void;
						public static addChild(param0: java.lang.Object, param1: android.view.View): void;
						public static findAccessibilityNodeInfosByText(param0: java.lang.Object, param1: string): java.util.List;
						public static getActions(param0: java.lang.Object): number;
						public static getBoundsInParent(param0: java.lang.Object, param1: android.graphics.Rect): void;
						public static getBoundsInScreen(param0: java.lang.Object, param1: android.graphics.Rect): void;
						public static getChild(param0: java.lang.Object, param1: number): java.lang.Object;
						public static getChildCount(param0: java.lang.Object): number;
						public static getClassName(param0: java.lang.Object): string;
						public static getContentDescription(param0: java.lang.Object): string;
						public static getPackageName(param0: java.lang.Object): string;
						public static getParent(param0: java.lang.Object): java.lang.Object;
						public static getText(param0: java.lang.Object): string;
						public static getWindowId(param0: java.lang.Object): number;
						public static isCheckable(param0: java.lang.Object): boolean;
						public static isChecked(param0: java.lang.Object): boolean;
						public static isClickable(param0: java.lang.Object): boolean;
						public static isEnabled(param0: java.lang.Object): boolean;
						public static isFocusable(param0: java.lang.Object): boolean;
						public static isFocused(param0: java.lang.Object): boolean;
						public static isLongClickable(param0: java.lang.Object): boolean;
						public static isPassword(param0: java.lang.Object): boolean;
						public static isScrollable(param0: java.lang.Object): boolean;
						public static isSelected(param0: java.lang.Object): boolean;
						public static performAction(param0: java.lang.Object, param1: number): boolean;
						public static setBoundsInParent(param0: java.lang.Object, param1: android.graphics.Rect): void;
						public static setBoundsInScreen(param0: java.lang.Object, param1: android.graphics.Rect): void;
						public static setCheckable(param0: java.lang.Object, param1: boolean): void;
						public static setChecked(param0: java.lang.Object, param1: boolean): void;
						public static setClassName(param0: java.lang.Object, param1: string): void;
						public static setClickable(param0: java.lang.Object, param1: boolean): void;
						public static setContentDescription(param0: java.lang.Object, param1: string): void;
						public static setEnabled(param0: java.lang.Object, param1: boolean): void;
						public static setFocusable(param0: java.lang.Object, param1: boolean): void;
						public static setFocused(param0: java.lang.Object, param1: boolean): void;
						public static setLongClickable(param0: java.lang.Object, param1: boolean): void;
						public static setPackageName(param0: java.lang.Object, param1: string): void;
						public static setParent(param0: java.lang.Object, param1: android.view.View): void;
						public static setPassword(param0: java.lang.Object, param1: boolean): void;
						public static setScrollable(param0: java.lang.Object, param1: boolean): void;
						public static setSelected(param0: java.lang.Object, param1: boolean): void;
						public static setSource(param0: java.lang.Object, param1: android.view.View): void;
						public static setText(param0: java.lang.Object, param1: string): void;
						public static recycle(param0: java.lang.Object): void;
					}
				}
			}
		}
	}
}
