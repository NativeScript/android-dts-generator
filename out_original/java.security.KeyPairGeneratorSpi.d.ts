/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.KeyPair.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />

declare module java {
	export module security {
		export class KeyPairGeneratorSpi {
			public constructor();
			public generateKeyPair(): java.security.KeyPair;
			public initialize(param0: number, param1: java.security.SecureRandom): void;
			public initialize(param0: java.security.spec.AlgorithmParameterSpec, param1: java.security.SecureRandom): void;
		}
	}
}
