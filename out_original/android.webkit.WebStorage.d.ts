/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.webkit.ValueCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class WebStorage {
			public getOrigins(param0: android.webkit.ValueCallback): void;
			public getUsageForOrigin(param0: string, param1: android.webkit.ValueCallback): void;
			public getQuotaForOrigin(param0: string, param1: android.webkit.ValueCallback): void;
			public setQuotaForOrigin(param0: string, param1: number): void;
			public deleteOrigin(param0: string): void;
			public deleteAllData(): void;
			public static getInstance(): android.webkit.WebStorage;
		}
		export module WebStorage {
			export class Origin {
				public getOrigin(): string;
				public getQuota(): number;
				public getUsage(): number;
			}
			export class QuotaUpdater {
				public updateQuota(param0: number): void;
			}
		}
	}
}
