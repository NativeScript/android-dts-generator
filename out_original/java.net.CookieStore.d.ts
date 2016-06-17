/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.HttpCookie.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module java {
	export module net {
		export class CookieStore {
			public add(param0: java.net.URI, param1: java.net.HttpCookie): void;
			public get(param0: java.net.URI): java.util.List;
			public getCookies(): java.util.List;
			public getURIs(): java.util.List;
			public remove(param0: java.net.URI, param1: java.net.HttpCookie): boolean;
			public removeAll(): boolean;
		}
	}
}
