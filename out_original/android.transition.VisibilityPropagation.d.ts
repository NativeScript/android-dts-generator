/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />

declare module android {
	export module transition {
		export class VisibilityPropagation {
			public constructor();
			public captureValues(param0: android.transition.TransitionValues): void;
			public getPropagationProperties(): native.Array<string>;
			public getViewVisibility(param0: android.transition.TransitionValues): number;
			public getViewX(param0: android.transition.TransitionValues): number;
			public getViewY(param0: android.transition.TransitionValues): number;
		}
	}
}
