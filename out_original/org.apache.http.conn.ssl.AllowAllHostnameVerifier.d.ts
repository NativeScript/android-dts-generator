/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />

declare module org {
	export module apache {
		export module http {
			export module conn {
				export module ssl {
					export class AllowAllHostnameVerifier {
						public constructor();
						public verify(param0: string, param1: javax.net.ssl.SSLSocket): void;
						public verify(param0: string, param1: javax.net.ssl.SSLSession): boolean;
						public verify(param0: string, param1: java.security.cert.X509Certificate): void;
						public verify(param0: string, param1: native.Array<string>, param2: native.Array<string>, param3: boolean): void;
						public verify(param0: string, param1: native.Array<string>, param2: native.Array<string>): void;
						public toString(): string;
					}
				}
			}
		}
	}
}
