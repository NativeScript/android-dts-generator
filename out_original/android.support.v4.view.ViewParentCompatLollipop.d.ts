/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewParentCompatLollipop {
					public static onStartNestedScroll(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): boolean;
					public static onNestedScrollAccepted(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): void;
					public static onStopNestedScroll(param0: android.view.ViewParent, param1: android.view.View): void;
					public static onNestedScroll(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: number, param5: number): void;
					public static onNestedPreScroll(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: native.Array<number>): void;
					public static onNestedFling(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: boolean): boolean;
					public static onNestedPreFling(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number): boolean;
				}
			}
		}
	}
}
