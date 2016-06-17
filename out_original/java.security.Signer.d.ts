/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.IdentityScope.d.ts" />
/// <reference path="./java.security.KeyPair.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />

declare module java {
	export module security {
		export class Signer {
			public constructor(param0: string);
			public constructor(param0: string, param1: java.security.IdentityScope);
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: java.security.IdentityScope);
			public getPrivateKey(): java.security.PrivateKey;
			public setKeyPair(param0: java.security.KeyPair): void;
			public toString(param0: boolean): string;
			public toString(): string;
		}
	}
}
