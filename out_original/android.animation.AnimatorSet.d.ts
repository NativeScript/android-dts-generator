/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module animation {
		export class AnimatorSet {
			public constructor();
			public playTogether(param0: native.Array<android.animation.Animator>): void;
			public playTogether(param0: java.util.Collection): void;
			public playSequentially(param0: native.Array<android.animation.Animator>): void;
			public playSequentially(param0: java.util.List): void;
			public getChildAnimations(): java.util.ArrayList;
			public setTarget(param0: java.lang.Object): void;
			public setInterpolator(param0: android.animation.TimeInterpolator): void;
			public getInterpolator(): android.animation.TimeInterpolator;
			public play(param0: android.animation.Animator): android.animation.AnimatorSet.Builder;
			public cancel(): void;
			public end(): void;
			public isRunning(): boolean;
			public isStarted(): boolean;
			public getStartDelay(): number;
			public setStartDelay(param0: number): void;
			public getDuration(): number;
			public setDuration(param0: number): android.animation.Animator;
			public setDuration(param0: number): android.animation.AnimatorSet;
			public setupStartValues(): void;
			public setupEndValues(): void;
			public pause(): void;
			public resume(): void;
			public start(): void;
			public clone(): android.animation.Animator;
			public clone(): java.lang.Object;
			public clone(): android.animation.AnimatorSet;
			public toString(): string;
		}
		export module AnimatorSet {
			export class Builder {
				public with(param0: android.animation.Animator): android.animation.AnimatorSet.Builder;
				public before(param0: android.animation.Animator): android.animation.AnimatorSet.Builder;
				public after(param0: android.animation.Animator): android.animation.AnimatorSet.Builder;
				public after(param0: number): android.animation.AnimatorSet.Builder;
			}
		}
	}
}
