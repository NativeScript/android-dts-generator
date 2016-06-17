/// <reference path="./_helpers.d.ts" />

declare module android {
	export module drm {
		export class ProcessedData {
			public getData(): native.Array<number>;
			public getAccountId(): string;
			public getSubscriptionId(): string;
		}
	}
}
