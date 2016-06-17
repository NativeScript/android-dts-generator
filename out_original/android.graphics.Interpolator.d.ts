/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class Interpolator {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: number, param1: number);
			public reset(param0: number): void;
			public reset(param0: number, param1: number): void;
			public getKeyFrameCount(): number;
			public getValueCount(): number;
			public setKeyFrame(param0: number, param1: number, param2: native.Array<number>): void;
			public setKeyFrame(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): void;
			public setRepeatMirror(param0: number, param1: boolean): void;
			public timeToValues(param0: native.Array<number>): android.graphics.Interpolator.Result;
			public timeToValues(param0: number, param1: native.Array<number>): android.graphics.Interpolator.Result;
			public finalize(): void;
		}
		export module Interpolator {
			export class Result {
				public static values(): native.Array<android.graphics.Interpolator.Result>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Interpolator.Result;
				public static FREEZE_END: android.graphics.Interpolator.Result;
				public static FREEZE_START: android.graphics.Interpolator.Result;
				public static NORMAL: android.graphics.Interpolator.Result;
			}
		}
	}
}
