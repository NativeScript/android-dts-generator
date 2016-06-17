/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module animation {
		export class Animator {
			public constructor();
			public start(): void;
			public cancel(): void;
			public end(): void;
			public pause(): void;
			public resume(): void;
			public isPaused(): boolean;
			public getStartDelay(): number;
			public setStartDelay(param0: number): void;
			public setDuration(param0: number): android.animation.Animator;
			public getDuration(): number;
			public setInterpolator(param0: android.animation.TimeInterpolator): void;
			public getInterpolator(): android.animation.TimeInterpolator;
			public isRunning(): boolean;
			public isStarted(): boolean;
			public addListener(param0: android.animation.Animator.AnimatorListener): void;
			public removeListener(param0: android.animation.Animator.AnimatorListener): void;
			public getListeners(): java.util.ArrayList;
			public addPauseListener(param0: android.animation.Animator.AnimatorPauseListener): void;
			public removePauseListener(param0: android.animation.Animator.AnimatorPauseListener): void;
			public removeAllListeners(): void;
			public clone(): java.lang.Object;
			public clone(): android.animation.Animator;
			public setupStartValues(): void;
			public setupEndValues(): void;
			public setTarget(param0: java.lang.Object): void;
		}
		export module Animator {
			export class AnimatorListener {
				public onAnimationStart(param0: android.animation.Animator): void;
				public onAnimationEnd(param0: android.animation.Animator): void;
				public onAnimationCancel(param0: android.animation.Animator): void;
				public onAnimationRepeat(param0: android.animation.Animator): void;
			}
			export class AnimatorPauseListener {
				public onAnimationPause(param0: android.animation.Animator): void;
				public onAnimationResume(param0: android.animation.Animator): void;
			}
		}
	}
}
