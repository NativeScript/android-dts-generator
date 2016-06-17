/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.KeyFactorySpi.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />
/// <reference path="./java.security.spec.KeySpec.d.ts" />

declare module java {
	export module security {
		export class KeyFactory {
			public constructor();
			public constructor(param0: java.security.KeyFactorySpi, param1: java.security.Provider, param2: string);
			public static getInstance(param0: string): java.security.KeyFactory;
			public static getInstance(param0: string, param1: string): java.security.KeyFactory;
			public static getInstance(param0: string, param1: java.security.Provider): java.security.KeyFactory;
			public getProvider(): java.security.Provider;
			public getAlgorithm(): string;
			public generatePublic(param0: java.security.spec.KeySpec): java.security.PublicKey;
			public generatePrivate(param0: java.security.spec.KeySpec): java.security.PrivateKey;
			public getKeySpec(param0: java.security.Key, param1: java.lang.Class): java.security.spec.KeySpec;
			public translateKey(param0: java.security.Key): java.security.Key;
		}
	}
}
