/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />
/// <reference path="./javax.net.ssl.SSLEngine.d.ts" />

declare module android {
	export module net {
		export class PskKeyManager {
			public constructor();
			public chooseServerKeyIdentityHint(param0: java.net.Socket): string;
			public chooseServerKeyIdentityHint(param0: javax.net.ssl.SSLEngine): string;
			public chooseClientKeyIdentity(param0: string, param1: java.net.Socket): string;
			public chooseClientKeyIdentity(param0: string, param1: javax.net.ssl.SSLEngine): string;
			public getKey(param0: string, param1: string, param2: java.net.Socket): javax.crypto.SecretKey;
			public getKey(param0: string, param1: string, param2: javax.net.ssl.SSLEngine): javax.crypto.SecretKey;
			public static MAX_IDENTITY_HINT_LENGTH_BYTES: number;
			public static MAX_IDENTITY_LENGTH_BYTES: number;
			public static MAX_KEY_LENGTH_BYTES: number;
		}
	}
}
