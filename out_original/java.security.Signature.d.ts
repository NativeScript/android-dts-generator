/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />

declare module java {
	export module security {
		export class Signature {
			public constructor();
			public constructor(param0: string);
			public static getInstance(param0: string): java.security.Signature;
			public static getInstance(param0: string, param1: string): java.security.Signature;
			public static getInstance(param0: string, param1: java.security.Provider): java.security.Signature;
			public getProvider(): java.security.Provider;
			public getAlgorithm(): string;
			public initVerify(param0: java.security.PublicKey): void;
			public initVerify(param0: java.security.cert.Certificate): void;
			public initSign(param0: java.security.PrivateKey): void;
			public initSign(param0: java.security.PrivateKey, param1: java.security.SecureRandom): void;
			public sign(): native.Array<number>;
			public sign(param0: native.Array<number>, param1: number, param2: number): number;
			public verify(param0: native.Array<number>): boolean;
			public verify(param0: native.Array<number>, param1: number, param2: number): boolean;
			public update(param0: number): void;
			public update(param0: native.Array<number>): void;
			public update(param0: native.Array<number>, param1: number, param2: number): void;
			public update(param0: java.nio.ByteBuffer): void;
			public toString(): string;
			public setParameter(param0: string, param1: java.lang.Object): void;
			public setParameter(param0: java.security.spec.AlgorithmParameterSpec): void;
			public getParameters(): java.security.AlgorithmParameters;
			public getParameter(param0: string): java.lang.Object;
			public static SIGN: number;
			public static UNINITIALIZED: number;
			public static VERIFY: number;
			public state: number;
		}
	}
}
