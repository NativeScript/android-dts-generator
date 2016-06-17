/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />

declare module java {
	export module security {
		export class KeyPair {
			public constructor();
			public constructor(param0: java.security.PublicKey, param1: java.security.PrivateKey);
			public getPrivate(): java.security.PrivateKey;
			public getPublic(): java.security.PublicKey;
		}
	}
}
