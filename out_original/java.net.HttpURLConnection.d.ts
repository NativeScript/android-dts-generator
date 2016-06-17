/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />

declare module java {
	export module net {
		export class HttpURLConnection {
			public constructor();
			public constructor(param0: java.net.URL);
			public disconnect(): void;
			public getErrorStream(): java.io.InputStream;
			public static getFollowRedirects(): boolean;
			public getPermission(): java.security.Permission;
			public getRequestMethod(): string;
			public getResponseCode(): number;
			public getResponseMessage(): string;
			public static setFollowRedirects(param0: boolean): void;
			public setRequestMethod(param0: string): void;
			public usingProxy(): boolean;
			public getContentEncoding(): string;
			public getInstanceFollowRedirects(): boolean;
			public setInstanceFollowRedirects(param0: boolean): void;
			public getHeaderFieldDate(param0: string, param1: number): number;
			public setFixedLengthStreamingMode(param0: number): void;
			public setFixedLengthStreamingMode(param0: number): void;
			public setChunkedStreamingMode(param0: number): void;
			public static HTTP_ACCEPTED: number;
			public static HTTP_BAD_GATEWAY: number;
			public static HTTP_BAD_METHOD: number;
			public static HTTP_BAD_REQUEST: number;
			public static HTTP_CLIENT_TIMEOUT: number;
			public static HTTP_CONFLICT: number;
			public static HTTP_CREATED: number;
			public static HTTP_ENTITY_TOO_LARGE: number;
			public static HTTP_FORBIDDEN: number;
			public static HTTP_GATEWAY_TIMEOUT: number;
			public static HTTP_GONE: number;
			public static HTTP_INTERNAL_ERROR: number;
			public static HTTP_LENGTH_REQUIRED: number;
			public static HTTP_MOVED_PERM: number;
			public static HTTP_MOVED_TEMP: number;
			public static HTTP_MULT_CHOICE: number;
			public static HTTP_NOT_ACCEPTABLE: number;
			public static HTTP_NOT_AUTHORITATIVE: number;
			public static HTTP_NOT_FOUND: number;
			public static HTTP_NOT_IMPLEMENTED: number;
			public static HTTP_NOT_MODIFIED: number;
			public static HTTP_NO_CONTENT: number;
			public static HTTP_OK: number;
			public static HTTP_PARTIAL: number;
			public static HTTP_PAYMENT_REQUIRED: number;
			public static HTTP_PRECON_FAILED: number;
			public static HTTP_PROXY_AUTH: number;
			public static HTTP_REQ_TOO_LONG: number;
			public static HTTP_RESET: number;
			public static HTTP_SEE_OTHER: number;
			public static HTTP_SERVER_ERROR: number;
			public static HTTP_UNAUTHORIZED: number;
			public static HTTP_UNAVAILABLE: number;
			public static HTTP_UNSUPPORTED_TYPE: number;
			public static HTTP_USE_PROXY: number;
			public static HTTP_VERSION: number;
			public chunkLength: number;
			public fixedContentLength: number;
			public fixedContentLengthLong: number;
			public instanceFollowRedirects: boolean;
			public method: string;
			public responseCode: number;
			public responseMessage: string;
		}
	}
}
