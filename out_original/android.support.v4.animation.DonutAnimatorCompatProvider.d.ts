/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.animation.AnimatorListenerCompat.d.ts" />
/// <reference path="./android.support.v4.animation.AnimatorUpdateListenerCompat.d.ts" />
/// <reference path="./android.support.v4.animation.ValueAnimatorCompat.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module animation {
				export class DonutAnimatorCompatProvider {
					public emptyValueAnimator(): android.support.v4.animation.ValueAnimatorCompat;
					public clearInterpolator(param0: android.view.View): void;
				}
				export module DonutAnimatorCompatProvider {
					export class DonutFloatValueAnimator {
						public constructor();
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
