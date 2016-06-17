/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module transition {
		export class TransitionPropagation {
			public constructor();
			public getStartDelay(param0: android.view.ViewGroup, param1: android.transition.Transition, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): number;
			public captureValues(param0: android.transition.TransitionValues): void;
			public getPropagationProperties(): native.Array<string>;
		}
	}
}
