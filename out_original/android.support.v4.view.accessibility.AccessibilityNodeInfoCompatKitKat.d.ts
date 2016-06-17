/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityNodeInfoCompatKitKat {
						public static setCollectionInfo(param0: java.lang.Object, param1: java.lang.Object): void;
						public static setCollectionItemInfo(param0: java.lang.Object, param1: java.lang.Object): void;
						public static setRangeInfo(param0: java.lang.Object, param1: java.lang.Object): void;
						public static obtainCollectionInfo(param0: number, param1: number, param2: boolean, param3: number): java.lang.Object;
						public static obtainCollectionItemInfo(param0: number, param1: number, param2: number, param3: number, param4: boolean): java.lang.Object;
						public static setContentInvalid(param0: java.lang.Object, param1: boolean): void;
						public static isContentInvalid(param0: java.lang.Object): boolean;
						public static canOpenPopup(param0: java.lang.Object): boolean;
						public static setCanOpenPopup(param0: java.lang.Object, param1: boolean): void;
						public static getExtras(param0: java.lang.Object): android.os.Bundle;
						public static getInputType(param0: java.lang.Object): number;
						public static setInputType(param0: java.lang.Object, param1: number): void;
						public static isDismissable(param0: java.lang.Object): boolean;
						public static setDismissable(param0: java.lang.Object, param1: boolean): void;
						public static isMultiLine(param0: java.lang.Object): boolean;
						public static setMultiLine(param0: java.lang.Object, param1: boolean): void;
					}
					export module AccessibilityNodeInfoCompatKitKat {
						export class CollectionInfo {
						}
						export class CollectionItemInfo {
						}
						export class RangeInfo {
						}
					}
				}
			}
		}
	}
}
