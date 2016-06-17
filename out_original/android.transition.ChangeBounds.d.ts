/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module transition {
		export class ChangeBounds {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public getTransitionProperties(): native.Array<string>;
			public setResizeClip(param0: boolean): void;
			public getResizeClip(): boolean;
			public setReparent(param0: boolean): void;
			public captureStartValues(param0: android.transition.TransitionValues): void;
			public captureEndValues(param0: android.transition.TransitionValues): void;
			public createAnimator(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: android.transition.TransitionValues): android.animation.Animator;
		}
	}
}
