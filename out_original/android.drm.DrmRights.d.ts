/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.drm.ProcessedData.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module drm {
		export class DrmRights {
			public constructor();
			public constructor(param0: string, param1: string);
			public constructor(param0: string, param1: string, param2: string);
			public constructor(param0: string, param1: string, param2: string, param3: string);
			public constructor(param0: java.io.File, param1: string);
			public constructor(param0: android.drm.ProcessedData, param1: string);
			public getData(): native.Array<number>;
			public getMimeType(): string;
			public getAccountId(): string;
			public getSubscriptionId(): string;
		}
	}
}
