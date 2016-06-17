/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityRecordCompatIcs {
						public static obtain(): java.lang.Object;
						public static obtain(param0: java.lang.Object): java.lang.Object;
						public static getAddedCount(param0: java.lang.Object): number;
						public static getBeforeText(param0: java.lang.Object): string;
						public static getClassName(param0: java.lang.Object): string;
						public static getContentDescription(param0: java.lang.Object): string;
						public static getCurrentItemIndex(param0: java.lang.Object): number;
						public static getFromIndex(param0: java.lang.Object): number;
						public static getItemCount(param0: java.lang.Object): number;
						public static getParcelableData(param0: java.lang.Object): android.os.Parcelable;
						public static getRemovedCount(param0: java.lang.Object): number;
						public static getScrollX(param0: java.lang.Object): number;
						public static getScrollY(param0: java.lang.Object): number;
						public static getSource(param0: java.lang.Object): java.lang.Object;
						public static getText(param0: java.lang.Object): java.util.List;
						public static getToIndex(param0: java.lang.Object): number;
						public static getWindowId(param0: java.lang.Object): number;
						public static isChecked(param0: java.lang.Object): boolean;
						public static isEnabled(param0: java.lang.Object): boolean;
						public static isFullScreen(param0: java.lang.Object): boolean;
						public static isPassword(param0: java.lang.Object): boolean;
						public static isScrollable(param0: java.lang.Object): boolean;
						public static recycle(param0: java.lang.Object): void;
						public static setAddedCount(param0: java.lang.Object, param1: number): void;
						public static setBeforeText(param0: java.lang.Object, param1: string): void;
						public static setChecked(param0: java.lang.Object, param1: boolean): void;
						public static setClassName(param0: java.lang.Object, param1: string): void;
						public static setContentDescription(param0: java.lang.Object, param1: string): void;
						public static setCurrentItemIndex(param0: java.lang.Object, param1: number): void;
						public static setEnabled(param0: java.lang.Object, param1: boolean): void;
						public static setFromIndex(param0: java.lang.Object, param1: number): void;
						public static setFullScreen(param0: java.lang.Object, param1: boolean): void;
						public static setItemCount(param0: java.lang.Object, param1: number): void;
						public static setParcelableData(param0: java.lang.Object, param1: android.os.Parcelable): void;
						public static setPassword(param0: java.lang.Object, param1: boolean): void;
						public static setRemovedCount(param0: java.lang.Object, param1: number): void;
						public static setScrollX(param0: java.lang.Object, param1: number): void;
						public static setScrollY(param0: java.lang.Object, param1: number): void;
						public static setScrollable(param0: java.lang.Object, param1: boolean): void;
						public static setSource(param0: java.lang.Object, param1: android.view.View): void;
						public static setToIndex(param0: java.lang.Object, param1: number): void;
					}
				}
			}
		}
	}
}
