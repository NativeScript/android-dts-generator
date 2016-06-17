/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.transition.PathMotion.d.ts" />
/// <reference path="./android.transition.TransitionPropagation.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module transition {
		export class Transition {
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public setDuration(param0: number): android.transition.Transition;
			public getDuration(): number;
			public setStartDelay(param0: number): android.transition.Transition;
			public getStartDelay(): number;
			public setInterpolator(param0: android.animation.TimeInterpolator): android.transition.Transition;
			public getInterpolator(): android.animation.TimeInterpolator;
			public getTransitionProperties(): native.Array<string>;
			public createAnimator(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: android.transition.TransitionValues): android.animation.Animator;
			public setMatchOrder(param0: native.Array<number>): void;
			public captureStartValues(param0: android.transition.TransitionValues): void;
			public captureEndValues(param0: android.transition.TransitionValues): void;
			public addTarget(param0: number): android.transition.Transition;
			public addTarget(param0: string): android.transition.Transition;
			public addTarget(param0: java.lang.Class): android.transition.Transition;
			public removeTarget(param0: number): android.transition.Transition;
			public removeTarget(param0: string): android.transition.Transition;
			public excludeTarget(param0: number, param1: boolean): android.transition.Transition;
			public excludeTarget(param0: string, param1: boolean): android.transition.Transition;
			public excludeChildren(param0: number, param1: boolean): android.transition.Transition;
			public excludeTarget(param0: android.view.View, param1: boolean): android.transition.Transition;
			public excludeChildren(param0: android.view.View, param1: boolean): android.transition.Transition;
			public excludeTarget(param0: java.lang.Class, param1: boolean): android.transition.Transition;
			public excludeChildren(param0: java.lang.Class, param1: boolean): android.transition.Transition;
			public addTarget(param0: android.view.View): android.transition.Transition;
			public removeTarget(param0: android.view.View): android.transition.Transition;
			public removeTarget(param0: java.lang.Class): android.transition.Transition;
			public getTargetIds(): java.util.List;
			public getTargets(): java.util.List;
			public getTargetNames(): java.util.List;
			public getTargetTypes(): java.util.List;
			public getTransitionValues(param0: android.view.View, param1: boolean): android.transition.TransitionValues;
			public isTransitionRequired(param0: android.transition.TransitionValues, param1: android.transition.TransitionValues): boolean;
			public addListener(param0: android.transition.Transition.TransitionListener): android.transition.Transition;
			public removeListener(param0: android.transition.Transition.TransitionListener): android.transition.Transition;
			public setEpicenterCallback(param0: android.transition.Transition.EpicenterCallback): void;
			public getEpicenterCallback(): android.transition.Transition.EpicenterCallback;
			public getEpicenter(): android.graphics.Rect;
			public setPathMotion(param0: android.transition.PathMotion): void;
			public getPathMotion(): android.transition.PathMotion;
			public setPropagation(param0: android.transition.TransitionPropagation): void;
			public getPropagation(): android.transition.TransitionPropagation;
			public canRemoveViews(): boolean;
			public toString(): string;
			public clone(): java.lang.Object;
			public clone(): android.transition.Transition;
			public getName(): string;
			public static MATCH_ID: number;
			public static MATCH_INSTANCE: number;
			public static MATCH_ITEM_ID: number;
			public static MATCH_NAME: number;
		}
		export module Transition {
			export class EpicenterCallback {
				public constructor();
				public onGetEpicenter(param0: android.transition.Transition): android.graphics.Rect;
			}
			export class TransitionListener {
				public onTransitionStart(param0: android.transition.Transition): void;
				public onTransitionEnd(param0: android.transition.Transition): void;
				public onTransitionCancel(param0: android.transition.Transition): void;
				public onTransitionPause(param0: android.transition.Transition): void;
				public onTransitionResume(param0: android.transition.Transition): void;
			}
		}
	}
}
