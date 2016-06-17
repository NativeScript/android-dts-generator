/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />

declare module android {
	export module drm {
		export class DrmInfoEvent {
			public constructor(param0: number, param1: number, param2: string, param3: java.util.HashMap);
			public constructor();
			public constructor(param0: number, param1: number, param2: string);
			public constructor(param0: number, param1: number, param2: string, param3: java.util.HashMap);
			public static TYPE_ACCOUNT_ALREADY_REGISTERED: number;
			public static TYPE_ALREADY_REGISTERED_BY_ANOTHER_ACCOUNT: number;
			public static TYPE_REMOVE_RIGHTS: number;
			public static TYPE_RIGHTS_INSTALLED: number;
			public static TYPE_RIGHTS_REMOVED: number;
			public static TYPE_WAIT_FOR_RIGHTS: number;
		}
	}
}
