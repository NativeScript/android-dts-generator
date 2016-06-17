/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module view {
		export class ViewGroupOverlay {
			public add(param0: android.graphics.drawable.Drawable): void;
			public add(param0: android.view.View): void;
			public remove(param0: android.graphics.drawable.Drawable): void;
			public remove(param0: android.view.View): void;
		}
	}
}
