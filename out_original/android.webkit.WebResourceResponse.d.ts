/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module webkit {
		export class WebResourceResponse {
			public constructor();
			public constructor(param0: string, param1: string, param2: java.io.InputStream);
			public constructor(param0: string, param1: string, param2: number, param3: string, param4: java.util.Map, param5: java.io.InputStream);
			public setMimeType(param0: string): void;
			public getMimeType(): string;
			public setEncoding(param0: string): void;
			public getEncoding(): string;
			public setStatusCodeAndReasonPhrase(param0: number, param1: string): void;
			public getStatusCode(): number;
			public getReasonPhrase(): string;
			public setResponseHeaders(param0: java.util.Map): void;
			public getResponseHeaders(): java.util.Map;
			public setData(param0: java.io.InputStream): void;
			public getData(): java.io.InputStream;
		}
	}
}
