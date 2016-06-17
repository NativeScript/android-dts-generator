/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.spec.KeySpec.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />
/// <reference path="./javax.crypto.SecretKeyFactorySpi.d.ts" />

declare module javax {
	export module crypto {
		export class SecretKeyFactory {
			public constructor();
			public constructor(param0: javax.crypto.SecretKeyFactorySpi, param1: java.security.Provider, param2: string);
			public getAlgorithm(): string;
			public getProvider(): java.security.Provider;
			public static getInstance(param0: string): javax.crypto.SecretKeyFactory;
			public static getInstance(param0: string, param1: string): javax.crypto.SecretKeyFactory;
			public static getInstance(param0: string, param1: java.security.Provider): javax.crypto.SecretKeyFactory;
			public generateSecret(param0: java.security.spec.KeySpec): javax.crypto.SecretKey;
			public getKeySpec(param0: javax.crypto.SecretKey, param1: java.lang.Class): java.security.spec.KeySpec;
			public translateKey(param0: javax.crypto.SecretKey): javax.crypto.SecretKey;
		}
	}
}
