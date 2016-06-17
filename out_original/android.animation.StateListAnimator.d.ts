/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module animation {
		export class StateListAnimator {
			public constructor();
			public addState(param0: native.Array<number>, param1: android.animation.Animator): void;
			public clone(): java.lang.Object;
			public clone(): android.animation.StateListAnimator;
			public jumpToCurrentState(): void;
		}
	}
}
