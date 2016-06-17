/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.AlgorithmParametersSpi.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />

declare module java {
	export module security {
		export class AlgorithmParameters {
			public constructor();
			public constructor(param0: java.security.AlgorithmParametersSpi, param1: java.security.Provider, param2: string);
			public static getInstance(param0: string): java.security.AlgorithmParameters;
			public static getInstance(param0: string, param1: string): java.security.AlgorithmParameters;
			public static getInstance(param0: string, param1: java.security.Provider): java.security.AlgorithmParameters;
			public getProvider(): java.security.Provider;
			public getAlgorithm(): string;
			public init(param0: java.security.spec.AlgorithmParameterSpec): void;
			public init(param0: native.Array<number>): void;
			public init(param0: native.Array<number>, param1: string): void;
			public getParameterSpec(param0: java.lang.Class): java.security.spec.AlgorithmParameterSpec;
			public getEncoded(): native.Array<number>;
			public getEncoded(param0: string): native.Array<number>;
			public toString(): string;
		}
	}
}
