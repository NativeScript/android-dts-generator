/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.CipherSpi.d.ts" />
/// <reference path="./javax.crypto.ExemptionMechanism.d.ts" />

declare module javax {
	export module crypto {
		export class Cipher {
			public constructor();
			public constructor(param0: javax.crypto.CipherSpi, param1: java.security.Provider, param2: string);
			public static getInstance(param0: string): javax.crypto.Cipher;
			public static getInstance(param0: string, param1: string): javax.crypto.Cipher;
			public static getInstance(param0: string, param1: java.security.Provider): javax.crypto.Cipher;
			public getProvider(): java.security.Provider;
			public getAlgorithm(): string;
			public getBlockSize(): number;
			public getOutputSize(param0: number): number;
			public getIV(): native.Array<number>;
			public getParameters(): java.security.AlgorithmParameters;
			public getExemptionMechanism(): javax.crypto.ExemptionMechanism;
			public init(param0: number, param1: java.security.Key): void;
			public init(param0: number, param1: java.security.Key, param2: java.security.SecureRandom): void;
			public init(param0: number, param1: java.security.Key, param2: java.security.spec.AlgorithmParameterSpec): void;
			public init(param0: number, param1: java.security.Key, param2: java.security.spec.AlgorithmParameterSpec, param3: java.security.SecureRandom): void;
			public init(param0: number, param1: java.security.Key, param2: java.security.AlgorithmParameters): void;
			public init(param0: number, param1: java.security.Key, param2: java.security.AlgorithmParameters, param3: java.security.SecureRandom): void;
			public init(param0: number, param1: java.security.cert.Certificate): void;
			public init(param0: number, param1: java.security.cert.Certificate, param2: java.security.SecureRandom): void;
			public update(param0: native.Array<number>): native.Array<number>;
			public update(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
			public update(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>): number;
			public update(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: number): number;
			public update(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): number;
			public updateAAD(param0: native.Array<number>): void;
			public updateAAD(param0: native.Array<number>, param1: number, param2: number): void;
			public updateAAD(param0: java.nio.ByteBuffer): void;
			public doFinal(): native.Array<number>;
			public doFinal(param0: native.Array<number>, param1: number): number;
			public doFinal(param0: native.Array<number>): native.Array<number>;
			public doFinal(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
			public doFinal(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>): number;
			public doFinal(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: number): number;
			public doFinal(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): number;
			public wrap(param0: java.security.Key): native.Array<number>;
			public unwrap(param0: native.Array<number>, param1: string, param2: number): java.security.Key;
			public static getMaxAllowedKeyLength(param0: string): number;
			public static getMaxAllowedParameterSpec(param0: string): java.security.spec.AlgorithmParameterSpec;
			public static DECRYPT_MODE: number;
			public static ENCRYPT_MODE: number;
			public static PRIVATE_KEY: number;
			public static PUBLIC_KEY: number;
			public static SECRET_KEY: number;
			public static UNWRAP_MODE: number;
			public static WRAP_MODE: number;
		}
	}
}
