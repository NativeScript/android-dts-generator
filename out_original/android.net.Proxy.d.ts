/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module net {
		export class Proxy {
			public constructor();
			public static getHost(param0: android.content.Context): string;
			public static getPort(param0: android.content.Context): number;
			public static getDefaultHost(): string;
			public static getDefaultPort(): number;
			public static EXTRA_PROXY_INFO: string;
			public static PROXY_CHANGE_ACTION: string;
		}
	}
}
