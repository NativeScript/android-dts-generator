/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.http.SslCertificate.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />

declare module android {
	export module net {
		export module http {
			export class SslError {
				public constructor();
				public constructor(param0: number, param1: android.net.http.SslCertificate);
				public constructor(param0: number, param1: java.security.cert.X509Certificate);
				public constructor(param0: number, param1: android.net.http.SslCertificate, param2: string);
				public constructor(param0: number, param1: java.security.cert.X509Certificate, param2: string);
				public getCertificate(): android.net.http.SslCertificate;
				public getUrl(): string;
				public addError(param0: number): boolean;
				public hasError(param0: number): boolean;
				public getPrimaryError(): number;
				public toString(): string;
				public static SSL_DATE_INVALID: number;
				public static SSL_EXPIRED: number;
				public static SSL_IDMISMATCH: number;
				public static SSL_INVALID: number;
				public static SSL_MAX_ERROR: number;
				public static SSL_NOTYETVALID: number;
				public static SSL_UNTRUSTED: number;
			}
		}
	}
}
