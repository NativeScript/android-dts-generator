/// <reference path="./_helpers.d.ts" />
/// <reference path="./org.apache.http.params.HttpParams.d.ts" />

declare module org {
	export module apache {
		export module http {
			export module params {
				export class HttpConnectionParams {
					public static getSoTimeout(param0: org.apache.http.params.HttpParams): number;
					public static setSoTimeout(param0: org.apache.http.params.HttpParams, param1: number): void;
					public static getTcpNoDelay(param0: org.apache.http.params.HttpParams): boolean;
					public static setTcpNoDelay(param0: org.apache.http.params.HttpParams, param1: boolean): void;
					public static getSocketBufferSize(param0: org.apache.http.params.HttpParams): number;
					public static setSocketBufferSize(param0: org.apache.http.params.HttpParams, param1: number): void;
					public static getLinger(param0: org.apache.http.params.HttpParams): number;
					public static setLinger(param0: org.apache.http.params.HttpParams, param1: number): void;
					public static getConnectionTimeout(param0: org.apache.http.params.HttpParams): number;
					public static setConnectionTimeout(param0: org.apache.http.params.HttpParams, param1: number): void;
					public static isStaleCheckingEnabled(param0: org.apache.http.params.HttpParams): boolean;
					public static setStaleCheckingEnabled(param0: org.apache.http.params.HttpParams, param1: boolean): void;
				}
			}
		}
	}
}
