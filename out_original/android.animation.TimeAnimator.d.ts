/// <reference path="./_helpers.d.ts" />

declare module android {
	export module animation {
		export class TimeAnimator {
			public constructor();
			public start(): void;
			public setCurrentPlayTime(param0: number): void;
			public setTimeListener(param0: android.animation.TimeAnimator.TimeListener): void;
		}
		export module TimeAnimator {
			export class TimeListener {
				public onTimeUpdate(param0: android.animation.TimeAnimator, param1: number, param2: number): void;
			}
		}
	}
}
