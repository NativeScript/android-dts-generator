/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.view.OnApplyWindowInsetsListener.d.ts" />
/// <reference path="./android.support.v4.view.WindowInsetsCompat.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewCompatLollipop {
					public static setTransitionName(param0: android.view.View, param1: string): void;
					public static getTransitionName(param0: android.view.View): string;
					public static requestApplyInsets(param0: android.view.View): void;
					public static setElevation(param0: android.view.View, param1: number): void;
					public static getElevation(param0: android.view.View): number;
					public static setTranslationZ(param0: android.view.View, param1: number): void;
					public static getTranslationZ(param0: android.view.View): number;
					public static setOnApplyWindowInsetsListener(param0: android.view.View, param1: android.support.v4.view.OnApplyWindowInsetsListener): void;
					public static isImportantForAccessibility(param0: android.view.View): boolean;
					public static onApplyWindowInsets(param0: android.view.View, param1: android.support.v4.view.WindowInsetsCompat): android.support.v4.view.WindowInsetsCompat;
					public static dispatchApplyWindowInsets(param0: android.view.View, param1: android.support.v4.view.WindowInsetsCompat): android.support.v4.view.WindowInsetsCompat;
					public static setNestedScrollingEnabled(param0: android.view.View, param1: boolean): void;
					public static isNestedScrollingEnabled(param0: android.view.View): boolean;
					public static startNestedScroll(param0: android.view.View, param1: number): boolean;
					public static stopNestedScroll(param0: android.view.View): void;
					public static hasNestedScrollingParent(param0: android.view.View): boolean;
					public static dispatchNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>): boolean;
					public static dispatchNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>, param4: native.Array<number>): boolean;
					public static dispatchNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public static dispatchNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public static getZ(param0: android.view.View): number;
				}
			}
		}
	}
}
