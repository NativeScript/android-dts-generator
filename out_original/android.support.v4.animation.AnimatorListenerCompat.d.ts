/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.animation.ValueAnimatorCompat.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module animation {
				export class AnimatorListenerCompat {
					public onAnimationStart(param0: android.support.v4.animation.ValueAnimatorCompat): void;
					public onAnimationEnd(param0: android.support.v4.animation.ValueAnimatorCompat): void;
					public onAnimationCancel(param0: android.support.v4.animation.ValueAnimatorCompat): void;
					public onAnimationRepeat(param0: android.support.v4.animation.ValueAnimatorCompat): void;
				}
			}
		}
	}
}
