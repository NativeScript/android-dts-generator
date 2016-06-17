/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module view {
		export class ViewAnimationUtils {
			public static createCircularReveal(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): android.animation.Animator;
		}
	}
}
