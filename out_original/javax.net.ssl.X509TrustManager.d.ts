/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class X509TrustManager {
				public checkClientTrusted(param0: native.Array<java.security.cert.X509Certificate>, param1: string): void;
				public checkServerTrusted(param0: native.Array<java.security.cert.X509Certificate>, param1: string): void;
				public getAcceptedIssuers(): native.Array<java.security.cert.X509Certificate>;
			}
		}
	}
}
