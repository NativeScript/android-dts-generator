/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class HostnameVerifier {
				public verify(param0: string, param1: javax.net.ssl.SSLSession): boolean;
			}
		}
	}
}
