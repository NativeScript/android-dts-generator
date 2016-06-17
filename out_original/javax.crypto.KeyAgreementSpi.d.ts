/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />

declare module javax {
	export module crypto {
		export class KeyAgreementSpi {
			public constructor();
			public engineDoPhase(param0: java.security.Key, param1: boolean): java.security.Key;
			public engineGenerateSecret(): native.Array<number>;
			public engineGenerateSecret(param0: native.Array<number>, param1: number): number;
			public engineGenerateSecret(param0: string): javax.crypto.SecretKey;
			public engineInit(param0: java.security.Key, param1: java.security.SecureRandom): void;
			public engineInit(param0: java.security.Key, param1: java.security.spec.AlgorithmParameterSpec, param2: java.security.SecureRandom): void;
		}
	}
}
