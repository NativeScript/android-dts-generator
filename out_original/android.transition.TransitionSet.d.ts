/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.PathMotion.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.transition.TransitionPropagation.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module transition {
		export class TransitionSet {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public setOrdering(param0: number): android.transition.TransitionSet;
			public getOrdering(): number;
			public addTransition(param0: android.transition.Transition): android.transition.TransitionSet;
			public getTransitionCount(): number;
			public getTransitionAt(param0: number): android.transition.Transition;
			public setDuration(param0: number): android.transition.Transition;
			public setDuration(param0: number): android.transition.TransitionSet;
			public setStartDelay(param0: number): android.transition.Transition;
			public setStartDelay(param0: number): android.transition.TransitionSet;
			public setInterpolator(param0: android.animation.TimeInterpolator): android.transition.Transition;
			public setInterpolator(param0: android.animation.TimeInterpolator): android.transition.TransitionSet;
			public addTarget(param0: number): android.transition.Transition;
			public addTarget(param0: string): android.transition.Transition;
			public addTarget(param0: java.lang.Class): android.transition.Transition;
			public addTarget(param0: android.view.View): android.transition.Transition;
			public addTarget(param0: android.view.View): android.transition.TransitionSet;
			public addTarget(param0: number): android.transition.TransitionSet;
			public addTarget(param0: string): android.transition.TransitionSet;
			public addTarget(param0: java.lang.Class): android.transition.TransitionSet;
			public addListener(param0: android.transition.Transition.TransitionListener): android.transition.Transition;
			public addListener(param0: android.transition.Transition.TransitionListener): android.transition.TransitionSet;
			public removeTarget(param0: number): android.transition.Transition;
			public removeTarget(param0: string): android.transition.Transition;
			public removeTarget(param0: android.view.View): android.transition.Transition;
			public removeTarget(param0: java.lang.Class): android.transition.Transition;
			public removeTarget(param0: number): android.transition.TransitionSet;
			public removeTarget(param0: android.view.View): android.transition.TransitionSet;
			public removeTarget(param0: java.lang.Class): android.transition.TransitionSet;
			public removeTarget(param0: string): android.transition.TransitionSet;
			public excludeTarget(param0: number, param1: boolean): android.transition.Transition;
			public excludeTarget(param0: string, param1: boolean): android.transition.Transition;
			public excludeTarget(param0: java.lang.Class, param1: boolean): android.transition.Transition;
			public excludeTarget(param0: android.view.View, param1: boolean): android.transition.Transition;
			public excludeTarget(param0: string, param1: boolean): android.transition.Transition;
			public excludeTarget(param0: number, param1: boolean): android.transition.Transition;
			public excludeTarget(param0: java.lang.Class, param1: boolean): android.transition.Transition;
			public removeListener(param0: android.transition.Transition.TransitionListener): android.transition.Transition;
			public removeListener(param0: android.transition.Transition.TransitionListener): android.transition.TransitionSet;
			public setPathMotion(param0: android.transition.PathMotion): void;
			public removeTransition(param0: android.transition.Transition): android.transition.TransitionSet;
			public captureStartValues(param0: android.transition.TransitionValues): void;
			public captureEndValues(param0: android.transition.TransitionValues): void;
			public setPropagation(param0: android.transition.TransitionPropagation): void;
			public setEpicenterCallback(param0: android.transition.Transition.EpicenterCallback): void;
			public clone(): android.transition.Transition;
			public clone(): java.lang.Object;
			public clone(): android.transition.TransitionSet;
			public static ORDERING_SEQUENTIAL: number;
			public static ORDERING_TOGETHER: number;
		}
	}
}
