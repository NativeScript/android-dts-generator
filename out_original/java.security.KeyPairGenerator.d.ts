/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.KeyPair.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />

declare module java {
	export module security {
		export class KeyPairGenerator {
			public constructor();
			public constructor(param0: string);
			public getAlgorithm(): string;
			public static getInstance(param0: string): java.security.KeyPairGenerator;
			public static getInstance(param0: string, param1: string): java.security.KeyPairGenerator;
			public static getInstance(param0: string, param1: java.security.Provider): java.security.KeyPairGenerator;
			public getProvider(): java.security.Provider;
			public initialize(param0: number, param1: java.security.SecureRandom): void;
			public initialize(param0: java.security.spec.AlgorithmParameterSpec, param1: java.security.SecureRandom): void;
			public initialize(param0: number): void;
			public initialize(param0: java.security.spec.AlgorithmParameterSpec): void;
			public genKeyPair(): java.security.KeyPair;
			public generateKeyPair(): java.security.KeyPair;
			public initialize(param0: number, param1: java.security.SecureRandom): void;
			public initialize(param0: java.security.spec.AlgorithmParameterSpec, param1: java.security.SecureRandom): void;
		}
	}
}
