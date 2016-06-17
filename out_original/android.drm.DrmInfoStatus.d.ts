/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.drm.ProcessedData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module drm {
		export class DrmInfoStatus {
			public constructor();
			public constructor(param0: number, param1: number, param2: android.drm.ProcessedData, param3: string);
			public static STATUS_ERROR: number;
			public static STATUS_OK: number;
			public data: android.drm.ProcessedData;
			public infoType: number;
			public mimeType: string;
			public statusCode: number;
		}
	}
}
