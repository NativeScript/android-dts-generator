/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module view {
		export class ViewOutlineProvider {
			public constructor();
			public getOutline(param0: android.view.View, param1: android.graphics.Outline): void;
			public static BACKGROUND: android.view.ViewOutlineProvider;
			public static BOUNDS: android.view.ViewOutlineProvider;
			public static PADDED_BOUNDS: android.view.ViewOutlineProvider;
		}
	}
}
