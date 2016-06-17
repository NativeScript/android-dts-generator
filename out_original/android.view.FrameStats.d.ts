/// <reference path="./_helpers.d.ts" />

declare module android {
	export module view {
		export class FrameStats {
			public constructor();
			public getRefreshPeriodNano(): number;
			public getFrameCount(): number;
			public getStartTimeNano(): number;
			public getEndTimeNano(): number;
			public getFramePresentedTimeNano(param0: number): number;
			public static UNDEFINED_TIME_NANO: number;
		}
	}
}
