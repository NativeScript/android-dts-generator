/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./javax.net.ssl.X509TrustManager.d.ts" />

declare module android {
	export module net {
		export module http {
			export class X509TrustManagerExtensions {
				public constructor();
				public constructor(param0: javax.net.ssl.X509TrustManager);
				public checkServerTrusted(param0: native.Array<java.security.cert.X509Certificate>, param1: string, param2: string): java.util.List;
				public isUserAddedCertificate(param0: java.security.cert.X509Certificate): boolean;
			}
		}
	}
}
