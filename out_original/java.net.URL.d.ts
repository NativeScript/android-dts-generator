/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.net.URLConnection.d.ts" />
/// <reference path="./java.net.URLStreamHandler.d.ts" />
/// <reference path="./java.net.URLStreamHandlerFactory.d.ts" />

declare module java {
	export module net {
		export class URL {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: java.net.URL, param1: string);
			public constructor(param0: java.net.URL, param1: string, param2: java.net.URLStreamHandler);
			public constructor(param0: string, param1: string, param2: string);
			public constructor(param0: string, param1: string, param2: number, param3: string);
			public constructor(param0: string, param1: string, param2: number, param3: string, param4: java.net.URLStreamHandler);
			public static setURLStreamHandlerFactory(param0: java.net.URLStreamHandlerFactory): void;
			public set(param0: string, param1: string, param2: number, param3: string, param4: string): void;
			public equals(param0: java.lang.Object): boolean;
			public sameFile(param0: java.net.URL): boolean;
			public hashCode(): number;
			public getContent(): java.lang.Object;
			public getContent(param0: native.Array<java.lang.Class>): java.lang.Object;
			public openStream(): java.io.InputStream;
			public openConnection(): java.net.URLConnection;
			public openConnection(param0: java.net.Proxy): java.net.URLConnection;
			public toURI(): java.net.URI;
			public toString(): string;
			public toExternalForm(): string;
			public getProtocol(): string;
			public getAuthority(): string;
			public getUserInfo(): string;
			public getHost(): string;
			public getPort(): number;
			public getDefaultPort(): number;
			public getFile(): string;
			public getPath(): string;
			public getQuery(): string;
			public getRef(): string;
			public set(param0: string, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: string): void;
		}
	}
}
