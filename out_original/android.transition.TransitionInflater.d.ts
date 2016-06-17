/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.transition.TransitionManager.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module transition {
		export class TransitionInflater {
			public static from(param0: android.content.Context): android.transition.TransitionInflater;
			public inflateTransition(param0: number): android.transition.Transition;
			public inflateTransitionManager(param0: number, param1: android.view.ViewGroup): android.transition.TransitionManager;
		}
	}
}
