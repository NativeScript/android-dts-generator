/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export class CameraProfile {
			public constructor();
			public static getJpegEncodingQualityParameter(param0: number): number;
			public static getJpegEncodingQualityParameter(param0: number, param1: number): number;
			public static QUALITY_HIGH: number;
			public static QUALITY_LOW: number;
			public static QUALITY_MEDIUM: number;
		}
	}
}
