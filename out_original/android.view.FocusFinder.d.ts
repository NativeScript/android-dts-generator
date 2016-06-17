/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module view {
		export class FocusFinder {
			public static getInstance(): android.view.FocusFinder;
			public findNextFocus(param0: android.view.ViewGroup, param1: android.view.View, param2: number): android.view.View;
			public findNextFocusFromRect(param0: android.view.ViewGroup, param1: android.graphics.Rect, param2: number): android.view.View;
			public findNearestTouchable(param0: android.view.ViewGroup, param1: number, param2: number, param3: number, param4: native.Array<number>): android.view.View;
		}
	}
}
