/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module animation {
		export class LayoutTransition {
			public constructor();
			public setDuration(param0: number): void;
			public enableTransitionType(param0: number): void;
			public disableTransitionType(param0: number): void;
			public isTransitionTypeEnabled(param0: number): boolean;
			public setStartDelay(param0: number, param1: number): void;
			public getStartDelay(param0: number): number;
			public setDuration(param0: number, param1: number): void;
			public getDuration(param0: number): number;
			public setStagger(param0: number, param1: number): void;
			public getStagger(param0: number): number;
			public setInterpolator(param0: number, param1: android.animation.TimeInterpolator): void;
			public getInterpolator(param0: number): android.animation.TimeInterpolator;
			public setAnimator(param0: number, param1: android.animation.Animator): void;
			public getAnimator(param0: number): android.animation.Animator;
			public setAnimateParentHierarchy(param0: boolean): void;
			public isChangingLayout(): boolean;
			public isRunning(): boolean;
			public addChild(param0: android.view.ViewGroup, param1: android.view.View): void;
			public showChild(param0: android.view.ViewGroup, param1: android.view.View): void;
			public showChild(param0: android.view.ViewGroup, param1: android.view.View, param2: number): void;
			public removeChild(param0: android.view.ViewGroup, param1: android.view.View): void;
			public hideChild(param0: android.view.ViewGroup, param1: android.view.View): void;
			public hideChild(param0: android.view.ViewGroup, param1: android.view.View, param2: number): void;
			public addTransitionListener(param0: android.animation.LayoutTransition.TransitionListener): void;
			public removeTransitionListener(param0: android.animation.LayoutTransition.TransitionListener): void;
			public getTransitionListeners(): java.util.List;
			public static APPEARING: number;
			public static CHANGE_APPEARING: number;
			public static CHANGE_DISAPPEARING: number;
			public static CHANGING: number;
			public static DISAPPEARING: number;
		}
		export module LayoutTransition {
			export class TransitionListener {
				public startTransition(param0: android.animation.LayoutTransition, param1: android.view.ViewGroup, param2: android.view.View, param3: number): void;
				public endTransition(param0: android.animation.LayoutTransition, param1: android.view.ViewGroup, param2: android.view.View, param3: number): void;
			}
		}
	}
}
