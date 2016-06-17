/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.view.WindowInsetsCompat.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class OnApplyWindowInsetsListener {
					public onApplyWindowInsets(param0: android.view.View, param1: android.support.v4.view.WindowInsetsCompat): android.support.v4.view.WindowInsetsCompat;
				}
			}
		}
	}
}
