/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />

declare module android {
	export module view {
		export class ViewOverlay {
			public add(param0: android.graphics.drawable.Drawable): void;
			public remove(param0: android.graphics.drawable.Drawable): void;
			public clear(): void;
		}
	}
}
