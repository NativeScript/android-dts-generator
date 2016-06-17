/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.KeyGeneratorSpi.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />

declare module javax {
	export module crypto {
		export class KeyGenerator {
			public constructor();
			public constructor(param0: javax.crypto.KeyGeneratorSpi, param1: java.security.Provider, param2: string);
			public getAlgorithm(): string;
			public getProvider(): java.security.Provider;
			public static getInstance(param0: string): javax.crypto.KeyGenerator;
			public static getInstance(param0: string, param1: string): javax.crypto.KeyGenerator;
			public static getInstance(param0: string, param1: java.security.Provider): javax.crypto.KeyGenerator;
			public generateKey(): javax.crypto.SecretKey;
			public init(param0: java.security.spec.AlgorithmParameterSpec): void;
			public init(param0: java.security.spec.AlgorithmParameterSpec, param1: java.security.SecureRandom): void;
			public init(param0: number): void;
			public init(param0: number, param1: java.security.SecureRandom): void;
			public init(param0: java.security.SecureRandom): void;
		}
	}
}
