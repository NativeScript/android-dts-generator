/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />

declare module android {
	export module animation {
		export class AnimatorListenerAdapter {
			public constructor();
			public onAnimationCancel(param0: android.animation.Animator): void;
			public onAnimationEnd(param0: android.animation.Animator): void;
			public onAnimationRepeat(param0: android.animation.Animator): void;
			public onAnimationStart(param0: android.animation.Animator): void;
			public onAnimationPause(param0: android.animation.Animator): void;
			public onAnimationResume(param0: android.animation.Animator): void;
		}
	}
}
