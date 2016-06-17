/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorListener.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewPropertyAnimatorCompatICS {
					public static setDuration(param0: android.view.View, param1: number): void;
					public static alpha(param0: android.view.View, param1: number): void;
					public static translationX(param0: android.view.View, param1: number): void;
					public static translationY(param0: android.view.View, param1: number): void;
					public static getDuration(param0: android.view.View): number;
					public static setInterpolator(param0: android.view.View, param1: android.view.animation.Interpolator): void;
					public static setStartDelay(param0: android.view.View, param1: number): void;
					public static getStartDelay(param0: android.view.View): number;
					public static alphaBy(param0: android.view.View, param1: number): void;
					public static rotation(param0: android.view.View, param1: number): void;
					public static rotationBy(param0: android.view.View, param1: number): void;
					public static rotationX(param0: android.view.View, param1: number): void;
					public static rotationXBy(param0: android.view.View, param1: number): void;
					public static rotationY(param0: android.view.View, param1: number): void;
					public static rotationYBy(param0: android.view.View, param1: number): void;
					public static scaleX(param0: android.view.View, param1: number): void;
					public static scaleXBy(param0: android.view.View, param1: number): void;
					public static scaleY(param0: android.view.View, param1: number): void;
					public static scaleYBy(param0: android.view.View, param1: number): void;
					public static cancel(param0: android.view.View): void;
					public static x(param0: android.view.View, param1: number): void;
					public static xBy(param0: android.view.View, param1: number): void;
					public static y(param0: android.view.View, param1: number): void;
					public static yBy(param0: android.view.View, param1: number): void;
					public static translationXBy(param0: android.view.View, param1: number): void;
					public static translationYBy(param0: android.view.View, param1: number): void;
					public static start(param0: android.view.View): void;
					public static setListener(param0: android.view.View, param1: android.support.v4.view.ViewPropertyAnimatorListener): void;
				}
			}
		}
	}
}
