/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module transition {
		export class Fade {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor();
			public constructor(param0: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public onAppear(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: number, param3: android.transition.TransitionValues, param4: number): android.animation.Animator;
			public onAppear(param0: android.view.ViewGroup, param1: android.view.View, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): android.animation.Animator;
			public onDisappear(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: number, param3: android.transition.TransitionValues, param4: number): android.animation.Animator;
			public onDisappear(param0: android.view.ViewGroup, param1: android.view.View, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): android.animation.Animator;
			public static IN: number;
			public static OUT: number;
		}
	}
}
