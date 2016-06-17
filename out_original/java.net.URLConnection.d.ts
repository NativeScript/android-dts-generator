/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.ContentHandlerFactory.d.ts" />
/// <reference path="./java.net.FileNameMap.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module net {
		export class URLConnection {
			public constructor();
			public constructor(param0: java.net.URL);
			public connect(): void;
			public getAllowUserInteraction(): boolean;
			public getContent(): java.lang.Object;
			public getContent(param0: native.Array<java.lang.Class>): java.lang.Object;
			public getContentEncoding(): string;
			public getContentLength(): number;
			public getContentType(): string;
			public getDate(): number;
			public static getDefaultAllowUserInteraction(): boolean;
			public static getDefaultRequestProperty(param0: string): string;
			public getDefaultUseCaches(): boolean;
			public getDoInput(): boolean;
			public getDoOutput(): boolean;
			public getExpiration(): number;
			public static getFileNameMap(): java.net.FileNameMap;
			public getHeaderField(param0: number): string;
			public getHeaderFields(): java.util.Map;
			public getRequestProperties(): java.util.Map;
			public addRequestProperty(param0: string, param1: string): void;
			public getHeaderField(param0: string): string;
			public getHeaderFieldDate(param0: string, param1: number): number;
			public getHeaderFieldInt(param0: string, param1: number): number;
			public getHeaderFieldKey(param0: number): string;
			public getIfModifiedSince(): number;
			public getInputStream(): java.io.InputStream;
			public getLastModified(): number;
			public getOutputStream(): java.io.OutputStream;
			public getPermission(): java.security.Permission;
			public getRequestProperty(param0: string): string;
			public getURL(): java.net.URL;
			public getUseCaches(): boolean;
			public static guessContentTypeFromName(param0: string): string;
			public static guessContentTypeFromStream(param0: java.io.InputStream): string;
			public setAllowUserInteraction(param0: boolean): void;
			public static setContentHandlerFactory(param0: java.net.ContentHandlerFactory): void;
			public static setDefaultAllowUserInteraction(param0: boolean): void;
			public static setDefaultRequestProperty(param0: string, param1: string): void;
			public setDefaultUseCaches(param0: boolean): void;
			public setDoInput(param0: boolean): void;
			public setDoOutput(param0: boolean): void;
			public static setFileNameMap(param0: java.net.FileNameMap): void;
			public setIfModifiedSince(param0: number): void;
			public setRequestProperty(param0: string, param1: string): void;
			public setUseCaches(param0: boolean): void;
			public setConnectTimeout(param0: number): void;
			public getConnectTimeout(): number;
			public setReadTimeout(param0: number): void;
			public getReadTimeout(): number;
			public toString(): string;
			public allowUserInteraction: boolean;
			public connected: boolean;
			public doInput: boolean;
			public doOutput: boolean;
			public ifModifiedSince: number;
			public url: java.net.URL;
			public useCaches: boolean;
		}
	}
}
