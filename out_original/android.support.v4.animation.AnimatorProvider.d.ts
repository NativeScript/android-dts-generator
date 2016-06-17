/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.animation.ValueAnimatorCompat.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module animation {
				export class AnimatorProvider {
					public emptyValueAnimator(): android.support.v4.animation.ValueAnimatorCompat;
					public clearInterpolator(param0: android.view.View): void;
				}
			}
		}
	}
}
