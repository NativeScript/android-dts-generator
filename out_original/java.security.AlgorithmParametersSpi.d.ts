/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />

declare module java {
	export module security {
		export class AlgorithmParametersSpi {
			public constructor();
			public engineInit(param0: java.security.spec.AlgorithmParameterSpec): void;
			public engineInit(param0: native.Array<number>): void;
			public engineInit(param0: native.Array<number>, param1: string): void;
			public engineGetParameterSpec(param0: java.lang.Class): java.security.spec.AlgorithmParameterSpec;
			public engineGetEncoded(): native.Array<number>;
			public engineGetEncoded(param0: string): native.Array<number>;
			public engineToString(): string;
		}
	}
}
