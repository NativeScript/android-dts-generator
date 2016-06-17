/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export module audiofx {
			export class LoudnessEnhancer {
				public constructor();
				public constructor(param0: number);
				public setTargetGain(param0: number): void;
				public getTargetGain(): number;
				public static PARAM_TARGET_GAIN_MB: number;
			}
		}
	}
}
