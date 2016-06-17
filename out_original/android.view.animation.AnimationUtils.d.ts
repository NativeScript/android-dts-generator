/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./android.view.animation.LayoutAnimationController.d.ts" />

declare module android {
	export module view {
		export module animation {
			export class AnimationUtils {
				public constructor();
				public static currentAnimationTimeMillis(): number;
				public static loadAnimation(param0: android.content.Context, param1: number): android.view.animation.Animation;
				public static loadLayoutAnimation(param0: android.content.Context, param1: number): android.view.animation.LayoutAnimationController;
				public static makeInAnimation(param0: android.content.Context, param1: boolean): android.view.animation.Animation;
				public static makeOutAnimation(param0: android.content.Context, param1: boolean): android.view.animation.Animation;
				public static makeInChildBottomAnimation(param0: android.content.Context): android.view.animation.Animation;
				public static loadInterpolator(param0: android.content.Context, param1: number): android.view.animation.Interpolator;
			}
		}
	}
}
