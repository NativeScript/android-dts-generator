/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />

declare module java {
	export module security {
		export class SignatureSpi {
			public constructor();
			public engineInitVerify(param0: java.security.PublicKey): void;
			public engineInitSign(param0: java.security.PrivateKey): void;
			public engineInitSign(param0: java.security.PrivateKey, param1: java.security.SecureRandom): void;
			public engineUpdate(param0: number): void;
			public engineUpdate(param0: native.Array<number>, param1: number, param2: number): void;
			public engineUpdate(param0: java.nio.ByteBuffer): void;
			public engineSign(): native.Array<number>;
			public engineSign(param0: native.Array<number>, param1: number, param2: number): number;
			public engineVerify(param0: native.Array<number>): boolean;
			public engineVerify(param0: native.Array<number>, param1: number, param2: number): boolean;
			public engineSetParameter(param0: string, param1: java.lang.Object): void;
			public engineSetParameter(param0: java.security.spec.AlgorithmParameterSpec): void;
			public engineGetParameters(): java.security.AlgorithmParameters;
			public engineGetParameter(param0: string): java.lang.Object;
			public clone(): java.lang.Object;
			public appRandom: java.security.SecureRandom;
		}
	}
}
