/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.KeyAgreementSpi.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />

declare module javax {
	export module crypto {
		export class KeyAgreement {
			public constructor();
			public constructor(param0: javax.crypto.KeyAgreementSpi, param1: java.security.Provider, param2: string);
			public getAlgorithm(): string;
			public getProvider(): java.security.Provider;
			public static getInstance(param0: string): javax.crypto.KeyAgreement;
			public static getInstance(param0: string, param1: string): javax.crypto.KeyAgreement;
			public static getInstance(param0: string, param1: java.security.Provider): javax.crypto.KeyAgreement;
			public init(param0: java.security.Key): void;
			public init(param0: java.security.Key, param1: java.security.SecureRandom): void;
			public init(param0: java.security.Key, param1: java.security.spec.AlgorithmParameterSpec): void;
			public init(param0: java.security.Key, param1: java.security.spec.AlgorithmParameterSpec, param2: java.security.SecureRandom): void;
			public doPhase(param0: java.security.Key, param1: boolean): java.security.Key;
			public generateSecret(): native.Array<number>;
			public generateSecret(param0: native.Array<number>, param1: number): number;
			public generateSecret(param0: string): javax.crypto.SecretKey;
		}
	}
}
