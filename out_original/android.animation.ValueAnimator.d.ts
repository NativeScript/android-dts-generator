/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.animation.PropertyValuesHolder.d.ts" />
/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./android.animation.TypeEvaluator.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module animation {
		export class ValueAnimator {
			public constructor();
			public static ofInt(param0: native.Array<number>): android.animation.ValueAnimator;
			public static ofArgb(param0: native.Array<number>): android.animation.ValueAnimator;
			public static ofFloat(param0: native.Array<number>): android.animation.ValueAnimator;
			public static ofPropertyValuesHolder(param0: native.Array<android.animation.PropertyValuesHolder>): android.animation.ValueAnimator;
			public static ofObject(param0: android.animation.TypeEvaluator, param1: native.Array<java.lang.Object>): android.animation.ValueAnimator;
			public setIntValues(param0: native.Array<number>): void;
			public setFloatValues(param0: native.Array<number>): void;
			public setObjectValues(param0: native.Array<java.lang.Object>): void;
			public setValues(param0: native.Array<android.animation.PropertyValuesHolder>): void;
			public getValues(): native.Array<android.animation.PropertyValuesHolder>;
			public setDuration(param0: number): android.animation.Animator;
			public setDuration(param0: number): android.animation.ValueAnimator;
			public getDuration(): number;
			public setCurrentPlayTime(param0: number): void;
			public setCurrentFraction(param0: number): void;
			public getCurrentPlayTime(): number;
			public getStartDelay(): number;
			public setStartDelay(param0: number): void;
			public static getFrameDelay(): number;
			public static setFrameDelay(param0: number): void;
			public getAnimatedValue(): java.lang.Object;
			public getAnimatedValue(param0: string): java.lang.Object;
			public setRepeatCount(param0: number): void;
			public getRepeatCount(): number;
			public setRepeatMode(param0: number): void;
			public getRepeatMode(): number;
			public addUpdateListener(param0: android.animation.ValueAnimator.AnimatorUpdateListener): void;
			public removeAllUpdateListeners(): void;
			public removeUpdateListener(param0: android.animation.ValueAnimator.AnimatorUpdateListener): void;
			public setInterpolator(param0: android.animation.TimeInterpolator): void;
			public getInterpolator(): android.animation.TimeInterpolator;
			public setEvaluator(param0: android.animation.TypeEvaluator): void;
			public start(): void;
			public cancel(): void;
			public end(): void;
			public resume(): void;
			public pause(): void;
			public isRunning(): boolean;
			public isStarted(): boolean;
			public reverse(): void;
			public getAnimatedFraction(): number;
			public clone(): android.animation.Animator;
			public clone(): java.lang.Object;
			public clone(): android.animation.ValueAnimator;
			public toString(): string;
			public static INFINITE: number;
			public static RESTART: number;
			public static REVERSE: number;
		}
		export module ValueAnimator {
			export class AnimatorUpdateListener {
				public onAnimationUpdate(param0: android.animation.ValueAnimator): void;
			}
		}
	}
}
