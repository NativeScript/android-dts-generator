/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module view {
		export class ViewManager {
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public removeView(param0: android.view.View): void;
		}
	}
}
