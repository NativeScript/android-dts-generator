/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityNodeInfoCompatApi21 {
						public static removeAction(param0: java.lang.Object, param1: java.lang.Object): boolean;
						public static obtainCollectionInfo(param0: number, param1: number, param2: boolean, param3: number): java.lang.Object;
						public static obtainCollectionItemInfo(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: boolean): java.lang.Object;
						public static getError(param0: java.lang.Object): string;
						public static setError(param0: java.lang.Object, param1: string): void;
						public static setMaxTextLength(param0: java.lang.Object, param1: number): void;
						public static getMaxTextLength(param0: java.lang.Object): number;
						public static getWindow(param0: java.lang.Object): java.lang.Object;
						public static removeChild(param0: java.lang.Object, param1: android.view.View): boolean;
						public static removeChild(param0: java.lang.Object, param1: android.view.View, param2: number): boolean;
					}
					export module AccessibilityNodeInfoCompatApi21 {
						export class CollectionItemInfo {
							public static isSelected(param0: java.lang.Object): boolean;
						}
					}
				}
			}
		}
	}
}
