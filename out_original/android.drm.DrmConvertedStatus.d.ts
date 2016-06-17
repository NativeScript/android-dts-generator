/// <reference path="./_helpers.d.ts" />

declare module android {
	export module drm {
		export class DrmConvertedStatus {
			public constructor();
			public constructor(param0: number, param1: native.Array<number>, param2: number);
			public static STATUS_ERROR: number;
			public static STATUS_INPUTDATA_ERROR: number;
			public static STATUS_OK: number;
			public convertedData: native.Array<number>;
			public offset: number;
			public statusCode: number;
		}
	}
}
