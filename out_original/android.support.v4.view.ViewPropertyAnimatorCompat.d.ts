/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorListener.d.ts" />
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorUpdateListener.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewPropertyAnimatorCompat {
					public setDuration(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public alpha(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public alphaBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationX(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationY(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public withEndAction(param0: java.lang.Runnable): android.support.v4.view.ViewPropertyAnimatorCompat;
					public getDuration(): number;
					public setInterpolator(param0: android.view.animation.Interpolator): android.support.v4.view.ViewPropertyAnimatorCompat;
					public getInterpolator(): android.view.animation.Interpolator;
					public setStartDelay(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public getStartDelay(): number;
					public rotation(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public rotationBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public rotationX(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public rotationXBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public rotationY(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public rotationYBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public scaleX(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public scaleXBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public scaleY(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public scaleYBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public cancel(): void;
					public x(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public xBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public y(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public yBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationXBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationYBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationZBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationZ(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public z(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public zBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public start(): void;
					public withLayer(): android.support.v4.view.ViewPropertyAnimatorCompat;
					public withStartAction(param0: java.lang.Runnable): android.support.v4.view.ViewPropertyAnimatorCompat;
					public setListener(param0: android.support.v4.view.ViewPropertyAnimatorListener): android.support.v4.view.ViewPropertyAnimatorCompat;
					public setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorUpdateListener): android.support.v4.view.ViewPropertyAnimatorCompat;
				}
				export module ViewPropertyAnimatorCompat {
					export class BaseViewPropertyAnimatorCompatImpl {
						public setDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public alpha(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withEndAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: java.lang.Runnable): void;
						public getDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public setInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.view.animation.Interpolator): void;
						public getInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): android.view.animation.Interpolator;
						public setStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public alphaBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotation(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public cancel(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public x(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public xBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public y(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public yBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public z(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public zBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZ(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public start(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public withLayer(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public withStartAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: java.lang.Runnable): void;
						public setListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.support.v4.view.ViewPropertyAnimatorListener): void;
						public setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.support.v4.view.ViewPropertyAnimatorUpdateListener): void;
					}
					export module BaseViewPropertyAnimatorCompatImpl {
						export class Starter {
							public run(): void;
						}
					}
					export class ICSViewPropertyAnimatorCompatImpl {
						public setDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public alpha(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public setInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.view.animation.Interpolator): void;
						public setStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public alphaBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotation(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public cancel(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public x(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public xBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public y(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public yBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public start(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public setListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.support.v4.view.ViewPropertyAnimatorListener): void;
						public withEndAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: java.lang.Runnable): void;
						public withStartAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: java.lang.Runnable): void;
						public withLayer(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
					}
					export module ICSViewPropertyAnimatorCompatImpl {
						export class MyVpaListener {
							public onAnimationStart(param0: android.view.View): void;
							public onAnimationEnd(param0: android.view.View): void;
							public onAnimationCancel(param0: android.view.View): void;
						}
					}
					export class JBMr2ViewPropertyAnimatorCompatImpl {
						public getInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): android.view.animation.Interpolator;
					}
					export class JBViewPropertyAnimatorCompatImpl {
						public setListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.support.v4.view.ViewPropertyAnimatorListener): void;
						public withStartAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: java.lang.Runnable): void;
						public withEndAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: java.lang.Runnable): void;
						public withLayer(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
					}
					export class KitKatViewPropertyAnimatorCompatImpl {
						public setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.support.v4.view.ViewPropertyAnimatorUpdateListener): void;
					}
					export class LollipopViewPropertyAnimatorCompatImpl {
						public translationZ(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public z(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public zBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
					}
					export class ViewPropertyAnimatorCompatImpl {
						public setDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public setInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.view.animation.Interpolator): void;
						public getInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): android.view.animation.Interpolator;
						public setStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public alpha(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public alphaBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotation(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public cancel(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public x(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public xBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public y(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public yBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public z(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public zBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZ(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public start(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public withLayer(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public withStartAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: java.lang.Runnable): void;
						public withEndAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: java.lang.Runnable): void;
						public setListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.support.v4.view.ViewPropertyAnimatorListener): void;
						public setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.support.v4.view.ViewPropertyAnimatorUpdateListener): void;
					}
				}
			}
		}
	}
}
