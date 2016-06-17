/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class X509KeyManager {
				public chooseClientAlias(param0: native.Array<string>, param1: native.Array<java.security.Principal>, param2: java.net.Socket): string;
				public chooseServerAlias(param0: string, param1: native.Array<java.security.Principal>, param2: java.net.Socket): string;
				public getCertificateChain(param0: string): native.Array<java.security.cert.X509Certificate>;
				public getClientAliases(param0: string, param1: native.Array<java.security.Principal>): native.Array<string>;
				public getServerAliases(param0: string, param1: native.Array<java.security.Principal>): native.Array<string>;
				public getPrivateKey(param0: string): java.security.PrivateKey;
			}
		}
	}
}
