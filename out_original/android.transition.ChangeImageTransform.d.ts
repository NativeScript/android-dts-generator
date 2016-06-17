/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module transition {
		export class ChangeImageTransform {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public captureStartValues(param0: android.transition.TransitionValues): void;
			public captureEndValues(param0: android.transition.TransitionValues): void;
			public getTransitionProperties(): native.Array<string>;
			public createAnimator(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: android.transition.TransitionValues): android.animation.Animator;
		}
	}
}
