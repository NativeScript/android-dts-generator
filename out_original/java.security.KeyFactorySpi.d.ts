/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />
/// <reference path="./java.security.spec.KeySpec.d.ts" />

declare module java {
	export module security {
		export class KeyFactorySpi {
			public constructor();
			public engineGeneratePublic(param0: java.security.spec.KeySpec): java.security.PublicKey;
			public engineGeneratePrivate(param0: java.security.spec.KeySpec): java.security.PrivateKey;
			public engineGetKeySpec(param0: java.security.Key, param1: java.lang.Class): java.security.spec.KeySpec;
			public engineTranslateKey(param0: java.security.Key): java.security.Key;
		}
	}
}
