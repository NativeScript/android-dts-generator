/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.animation.StateListAnimator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module animation {
		export class AnimatorInflater {
			public constructor();
			public static loadAnimator(param0: android.content.Context, param1: number): android.animation.Animator;
			public static loadStateListAnimator(param0: android.content.Context, param1: number): android.animation.StateListAnimator;
		}
	}
}
