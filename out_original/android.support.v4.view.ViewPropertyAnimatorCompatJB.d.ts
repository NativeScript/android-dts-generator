/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorListener.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewPropertyAnimatorCompatJB {
					public static withStartAction(param0: android.view.View, param1: java.lang.Runnable): void;
					public static withEndAction(param0: android.view.View, param1: java.lang.Runnable): void;
					public static withLayer(param0: android.view.View): void;
					public static setListener(param0: android.view.View, param1: android.support.v4.view.ViewPropertyAnimatorListener): void;
				}
			}
		}
	}
}
