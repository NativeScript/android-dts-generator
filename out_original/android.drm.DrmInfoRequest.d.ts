/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module android {
	export module drm {
		export class DrmInfoRequest {
			public constructor();
			public constructor(param0: number, param1: string);
			public getMimeType(): string;
			public getInfoType(): number;
			public put(param0: string, param1: java.lang.Object): void;
			public get(param0: string): java.lang.Object;
			public keyIterator(): java.util.Iterator;
			public iterator(): java.util.Iterator;
			public static ACCOUNT_ID: string;
			public static SUBSCRIPTION_ID: string;
			public static TYPE_REGISTRATION_INFO: number;
			public static TYPE_RIGHTS_ACQUISITION_INFO: number;
			public static TYPE_RIGHTS_ACQUISITION_PROGRESS_INFO: number;
			public static TYPE_UNREGISTRATION_INFO: number;
		}
	}
}
