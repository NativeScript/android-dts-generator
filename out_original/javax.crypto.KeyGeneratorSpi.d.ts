/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />

declare module javax {
	export module crypto {
		export class KeyGeneratorSpi {
			public constructor();
			public engineGenerateKey(): javax.crypto.SecretKey;
			public engineInit(param0: java.security.spec.AlgorithmParameterSpec, param1: java.security.SecureRandom): void;
			public engineInit(param0: number, param1: java.security.SecureRandom): void;
			public engineInit(param0: java.security.SecureRandom): void;
		}
	}
}
