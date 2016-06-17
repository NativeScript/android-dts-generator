/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module transition {
		export class CircularPropagation {
			public constructor();
			public setPropagationSpeed(param0: number): void;
			public getStartDelay(param0: android.view.ViewGroup, param1: android.transition.Transition, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): number;
		}
	}
}
