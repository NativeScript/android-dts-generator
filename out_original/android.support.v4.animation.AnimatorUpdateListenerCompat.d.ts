/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.animation.ValueAnimatorCompat.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module animation {
				export class AnimatorUpdateListenerCompat {
					public onAnimationUpdate(param0: android.support.v4.animation.ValueAnimatorCompat): void;
				}
			}
		}
	}
}
