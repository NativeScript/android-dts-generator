/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.security.spec.KeySpec.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />

declare module javax {
	export module crypto {
		export class SecretKeyFactorySpi {
			public constructor();
			public engineGenerateSecret(param0: java.security.spec.KeySpec): javax.crypto.SecretKey;
			public engineGetKeySpec(param0: javax.crypto.SecretKey, param1: java.lang.Class): java.security.spec.KeySpec;
			public engineTranslateKey(param0: javax.crypto.SecretKey): javax.crypto.SecretKey;
		}
	}
}
