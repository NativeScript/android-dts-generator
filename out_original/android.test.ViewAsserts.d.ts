/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module test {
		export class ViewAsserts {
			public static assertOnScreen(param0: android.view.View, param1: android.view.View): void;
			public static assertOffScreenBelow(param0: android.view.View, param1: android.view.View): void;
			public static assertOffScreenAbove(param0: android.view.View, param1: android.view.View): void;
			public static assertHasScreenCoordinates(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
			public static assertBaselineAligned(param0: android.view.View, param1: android.view.View): void;
			public static assertRightAligned(param0: android.view.View, param1: android.view.View): void;
			public static assertRightAligned(param0: android.view.View, param1: android.view.View, param2: number): void;
			public static assertLeftAligned(param0: android.view.View, param1: android.view.View): void;
			public static assertLeftAligned(param0: android.view.View, param1: android.view.View, param2: number): void;
			public static assertBottomAligned(param0: android.view.View, param1: android.view.View): void;
			public static assertBottomAligned(param0: android.view.View, param1: android.view.View, param2: number): void;
			public static assertTopAligned(param0: android.view.View, param1: android.view.View): void;
			public static assertTopAligned(param0: android.view.View, param1: android.view.View, param2: number): void;
			public static assertHorizontalCenterAligned(param0: android.view.View, param1: android.view.View): void;
			public static assertVerticalCenterAligned(param0: android.view.View, param1: android.view.View): void;
			public static assertGroupIntegrity(param0: android.view.ViewGroup): void;
			public static assertGroupContains(param0: android.view.ViewGroup, param1: android.view.View): void;
			public static assertGroupNotContains(param0: android.view.ViewGroup, param1: android.view.View): void;
		}
	}
}
