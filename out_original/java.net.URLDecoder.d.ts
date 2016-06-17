/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module net {
		export class URLDecoder {
			public constructor();
			public static decode(param0: string): string;
			public static decode(param0: string, param1: string): string;
		}
	}
}
