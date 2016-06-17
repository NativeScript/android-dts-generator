/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module net {
		export class CookieHandler {
			public constructor();
			public static getDefault(): java.net.CookieHandler;
			public static setDefault(param0: java.net.CookieHandler): void;
			public get(param0: java.net.URI, param1: java.util.Map): java.util.Map;
			public put(param0: java.net.URI, param1: java.util.Map): void;
		}
	}
}
