/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.net.URLConnection.d.ts" />

declare module java {
	export module net {
		export class URLStreamHandler {
			public constructor();
			public openConnection(param0: java.net.URL): java.net.URLConnection;
			public openConnection(param0: java.net.URL, param1: java.net.Proxy): java.net.URLConnection;
			public parseURL(param0: java.net.URL, param1: string, param2: number, param3: number): void;
			public setURL(param0: java.net.URL, param1: string, param2: string, param3: number, param4: string, param5: string): void;
			public setURL(param0: java.net.URL, param1: string, param2: string, param3: number, param4: string, param5: string, param6: string, param7: string, param8: string): void;
			public toExternalForm(param0: java.net.URL): string;
			public equals(param0: java.lang.Object): boolean;
			public equals(param0: java.net.URL, param1: java.net.URL): boolean;
			public getDefaultPort(): number;
			public getHostAddress(param0: java.net.URL): java.net.InetAddress;
			public hashCode(): number;
			public hashCode(param0: java.net.URL): number;
			public hostsEqual(param0: java.net.URL, param1: java.net.URL): boolean;
			public sameFile(param0: java.net.URL, param1: java.net.URL): boolean;
		}
	}
}
