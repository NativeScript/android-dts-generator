/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />

declare module android {
	export module view {
		export class ViewPropertyAnimator {
			public setDuration(param0: number): android.view.ViewPropertyAnimator;
			public getDuration(): number;
			public getStartDelay(): number;
			public setStartDelay(param0: number): android.view.ViewPropertyAnimator;
			public setInterpolator(param0: android.animation.TimeInterpolator): android.view.ViewPropertyAnimator;
			public getInterpolator(): android.animation.TimeInterpolator;
			public setListener(param0: android.animation.Animator.AnimatorListener): android.view.ViewPropertyAnimator;
			public setUpdateListener(param0: android.animation.ValueAnimator.AnimatorUpdateListener): android.view.ViewPropertyAnimator;
			public start(): void;
			public cancel(): void;
			public x(param0: number): android.view.ViewPropertyAnimator;
			public xBy(param0: number): android.view.ViewPropertyAnimator;
			public y(param0: number): android.view.ViewPropertyAnimator;
			public yBy(param0: number): android.view.ViewPropertyAnimator;
			public z(param0: number): android.view.ViewPropertyAnimator;
			public zBy(param0: number): android.view.ViewPropertyAnimator;
			public rotation(param0: number): android.view.ViewPropertyAnimator;
			public rotationBy(param0: number): android.view.ViewPropertyAnimator;
			public rotationX(param0: number): android.view.ViewPropertyAnimator;
			public rotationXBy(param0: number): android.view.ViewPropertyAnimator;
			public rotationY(param0: number): android.view.ViewPropertyAnimator;
			public rotationYBy(param0: number): android.view.ViewPropertyAnimator;
			public translationX(param0: number): android.view.ViewPropertyAnimator;
			public translationXBy(param0: number): android.view.ViewPropertyAnimator;
			public translationY(param0: number): android.view.ViewPropertyAnimator;
			public translationYBy(param0: number): android.view.ViewPropertyAnimator;
			public translationZ(param0: number): android.view.ViewPropertyAnimator;
			public translationZBy(param0: number): android.view.ViewPropertyAnimator;
			public scaleX(param0: number): android.view.ViewPropertyAnimator;
			public scaleXBy(param0: number): android.view.ViewPropertyAnimator;
			public scaleY(param0: number): android.view.ViewPropertyAnimator;
			public scaleYBy(param0: number): android.view.ViewPropertyAnimator;
			public alpha(param0: number): android.view.ViewPropertyAnimator;
			public alphaBy(param0: number): android.view.ViewPropertyAnimator;
			public withLayer(): android.view.ViewPropertyAnimator;
			public withStartAction(param0: java.lang.Runnable): android.view.ViewPropertyAnimator;
			public withEndAction(param0: java.lang.Runnable): android.view.ViewPropertyAnimator;
		}
	}
}
