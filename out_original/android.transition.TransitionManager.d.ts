/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.transition.Scene.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module transition {
		export class TransitionManager {
			public constructor();
			public setTransition(param0: android.transition.Scene, param1: android.transition.Transition): void;
			public setTransition(param0: android.transition.Scene, param1: android.transition.Scene, param2: android.transition.Transition): void;
			public transitionTo(param0: android.transition.Scene): void;
			public static go(param0: android.transition.Scene): void;
			public static go(param0: android.transition.Scene, param1: android.transition.Transition): void;
			public static beginDelayedTransition(param0: android.view.ViewGroup): void;
			public static beginDelayedTransition(param0: android.view.ViewGroup, param1: android.transition.Transition): void;
			public static endTransitions(param0: android.view.ViewGroup): void;
		}
	}
}
