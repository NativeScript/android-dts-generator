/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module net {
		export class URLEncoder {
			public static encode(param0: string): string;
			public static encode(param0: string, param1: string): string;
		}
	}
}
