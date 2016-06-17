/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />

declare module android {
	export module drm {
		export class DrmErrorEvent {
			public constructor(param0: number, param1: number, param2: string, param3: java.util.HashMap);
			public constructor();
			public constructor(param0: number, param1: number, param2: string);
			public constructor(param0: number, param1: number, param2: string, param3: java.util.HashMap);
			public static TYPE_ACQUIRE_DRM_INFO_FAILED: number;
			public static TYPE_NOT_SUPPORTED: number;
			public static TYPE_NO_INTERNET_CONNECTION: number;
			public static TYPE_OUT_OF_MEMORY: number;
			public static TYPE_PROCESS_DRM_INFO_FAILED: number;
			public static TYPE_REMOVE_ALL_RIGHTS_FAILED: number;
			public static TYPE_RIGHTS_NOT_INSTALLED: number;
			public static TYPE_RIGHTS_RENEWAL_NOT_ALLOWED: number;
		}
	}
}
