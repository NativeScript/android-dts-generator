/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />

declare module android {
	export module drm {
		export class DrmEvent {
			public constructor();
			public constructor(param0: number, param1: number, param2: string, param3: java.util.HashMap);
			public constructor(param0: number, param1: number, param2: string);
			public getUniqueId(): number;
			public getType(): number;
			public getMessage(): string;
			public getAttribute(param0: string): java.lang.Object;
			public static DRM_INFO_OBJECT: string;
			public static DRM_INFO_STATUS_OBJECT: string;
			public static TYPE_ALL_RIGHTS_REMOVED: number;
			public static TYPE_DRM_INFO_PROCESSED: number;
		}
	}
}
