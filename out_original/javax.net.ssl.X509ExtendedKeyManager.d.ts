/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./javax.net.ssl.SSLEngine.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class X509ExtendedKeyManager {
				public constructor();
				public chooseEngineClientAlias(param0: native.Array<string>, param1: native.Array<java.security.Principal>, param2: javax.net.ssl.SSLEngine): string;
				public chooseEngineServerAlias(param0: string, param1: native.Array<java.security.Principal>, param2: javax.net.ssl.SSLEngine): string;
			}
		}
	}
}
