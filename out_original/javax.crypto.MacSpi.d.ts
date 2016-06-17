/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />

declare module javax {
	export module crypto {
		export class MacSpi {
			public constructor();
			public engineGetMacLength(): number;
			public engineInit(param0: java.security.Key, param1: java.security.spec.AlgorithmParameterSpec): void;
			public engineUpdate(param0: number): void;
			public engineUpdate(param0: native.Array<number>, param1: number, param2: number): void;
			public engineUpdate(param0: java.nio.ByteBuffer): void;
			public engineDoFinal(): native.Array<number>;
			public engineReset(): void;
			public clone(): java.lang.Object;
		}
	}
}
