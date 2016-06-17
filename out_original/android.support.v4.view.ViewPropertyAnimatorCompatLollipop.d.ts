/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewPropertyAnimatorCompatLollipop {
					public static translationZ(param0: android.view.View, param1: number): void;
					public static translationZBy(param0: android.view.View, param1: number): void;
					public static z(param0: android.view.View, param1: number): void;
					public static zBy(param0: android.view.View, param1: number): void;
				}
			}
		}
	}
}
