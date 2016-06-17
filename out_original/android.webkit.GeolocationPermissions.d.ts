/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.webkit.ValueCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class GeolocationPermissions {
			public static getInstance(): android.webkit.GeolocationPermissions;
			public getOrigins(param0: android.webkit.ValueCallback): void;
			public getAllowed(param0: string, param1: android.webkit.ValueCallback): void;
			public clear(param0: string): void;
			public allow(param0: string): void;
			public clearAll(): void;
		}
		export module GeolocationPermissions {
			export class Callback {
				public invoke(param0: string, param1: boolean, param2: boolean): void;
			}
		}
	}
}
