/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorListener.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class ViewPropertyAnimatorCompatSet {
					public constructor();
					public play(param0: android.support.v4.view.ViewPropertyAnimatorCompat): android.support.v7.view.ViewPropertyAnimatorCompatSet;
					public playSequentially(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.support.v4.view.ViewPropertyAnimatorCompat): android.support.v7.view.ViewPropertyAnimatorCompatSet;
					public start(): void;
					public cancel(): void;
					public setDuration(param0: number): android.support.v7.view.ViewPropertyAnimatorCompatSet;
					public setInterpolator(param0: android.view.animation.Interpolator): android.support.v7.view.ViewPropertyAnimatorCompatSet;
					public setListener(param0: android.support.v4.view.ViewPropertyAnimatorListener): android.support.v7.view.ViewPropertyAnimatorCompatSet;
				}
			}
		}
	}
}
