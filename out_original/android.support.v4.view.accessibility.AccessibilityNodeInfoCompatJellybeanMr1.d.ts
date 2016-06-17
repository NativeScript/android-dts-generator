/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityNodeInfoCompatJellybeanMr1 {
						public static setLabelFor(param0: java.lang.Object, param1: android.view.View): void;
						public static setLabelFor(param0: java.lang.Object, param1: android.view.View, param2: number): void;
						public static getLabelFor(param0: java.lang.Object): java.lang.Object;
						public static setLabeledBy(param0: java.lang.Object, param1: android.view.View): void;
						public static setLabeledBy(param0: java.lang.Object, param1: android.view.View, param2: number): void;
						public static getLabeledBy(param0: java.lang.Object): java.lang.Object;
					}
				}
			}
		}
	}
}
