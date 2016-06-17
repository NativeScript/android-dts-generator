/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.support.v4.animation.AnimatorListenerCompat.d.ts" />
/// <reference path="./android.support.v4.animation.AnimatorUpdateListenerCompat.d.ts" />
/// <reference path="./android.support.v4.animation.ValueAnimatorCompat.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module animation {
				export class HoneycombMr1AnimatorCompatProvider {
					public emptyValueAnimator(): android.support.v4.animation.ValueAnimatorCompat;
					public clearInterpolator(param0: android.view.View): void;
				}
				export module HoneycombMr1AnimatorCompatProvider {
					export class AnimatorListenerCompatWrapper {
						public constructor();
						public constructor(param0: android.support.v4.animation.AnimatorListenerCompat, param1: android.support.v4.animation.ValueAnimatorCompat);
						public onAnimationStart(param0: android.animation.Animator): void;
						public onAnimationEnd(param0: android.animation.Animator): void;
						public onAnimationCancel(param0: android.animation.Animator): void;
						public onAnimationRepeat(param0: android.animation.Animator): void;
					}
					export class HoneycombValueAnimatorCompat {
						public constructor();
						public constructor(param0: android.animation.Animator);
						public setTarget(param0: android.view.View): void;
						public addListener(param0: android.support.v4.animation.AnimatorListenerCompat): void;
						public setDuration(param0: number): void;
						public start(): void;
						public cancel(): void;
						public addUpdateListener(param0: android.support.v4.animation.AnimatorUpdateListenerCompat): void;
						public getAnimatedFraction(): number;
					}
				}
			}
		}
	}
}
