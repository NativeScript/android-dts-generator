/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />

declare module javax {
	export module crypto {
		export class CipherSpi {
			public constructor();
			public engineSetMode(param0: string): void;
			public engineSetPadding(param0: string): void;
			public engineGetBlockSize(): number;
			public engineGetOutputSize(param0: number): number;
			public engineGetIV(): native.Array<number>;
			public engineGetParameters(): java.security.AlgorithmParameters;
			public engineInit(param0: number, param1: java.security.Key, param2: java.security.SecureRandom): void;
			public engineInit(param0: number, param1: java.security.Key, param2: java.security.spec.AlgorithmParameterSpec, param3: java.security.SecureRandom): void;
			public engineInit(param0: number, param1: java.security.Key, param2: java.security.AlgorithmParameters, param3: java.security.SecureRandom): void;
			public engineUpdate(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
			public engineUpdate(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: number): number;
			public engineUpdate(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): number;
			public engineUpdateAAD(param0: native.Array<number>, param1: number, param2: number): void;
			public engineUpdateAAD(param0: java.nio.ByteBuffer): void;
			public engineDoFinal(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
			public engineDoFinal(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: number): number;
			public engineDoFinal(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): number;
			public engineWrap(param0: java.security.Key): native.Array<number>;
			public engineUnwrap(param0: native.Array<number>, param1: string, param2: number): java.security.Key;
			public engineGetKeySize(param0: java.security.Key): number;
		}
	}
}
