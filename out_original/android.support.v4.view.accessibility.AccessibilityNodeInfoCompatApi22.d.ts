/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityNodeInfoCompatApi22 {
						public static getTraversalBefore(param0: java.lang.Object): java.lang.Object;
						public static setTraversalBefore(param0: java.lang.Object, param1: android.view.View): void;
						public static setTraversalBefore(param0: java.lang.Object, param1: android.view.View, param2: number): void;
						public static getTraversalAfter(param0: java.lang.Object): java.lang.Object;
						public static setTraversalAfter(param0: java.lang.Object, param1: android.view.View): void;
						public static setTraversalAfter(param0: java.lang.Object, param1: android.view.View, param2: number): void;
					}
				}
			}
		}
	}
}
