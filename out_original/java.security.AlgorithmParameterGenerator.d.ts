/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.AlgorithmParameterGeneratorSpi.d.ts" />
/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />

declare module java {
	export module security {
		export class AlgorithmParameterGenerator {
			public constructor();
			public constructor(param0: java.security.AlgorithmParameterGeneratorSpi, param1: java.security.Provider, param2: string);
			public getAlgorithm(): string;
			public static getInstance(param0: string): java.security.AlgorithmParameterGenerator;
			public static getInstance(param0: string, param1: string): java.security.AlgorithmParameterGenerator;
			public static getInstance(param0: string, param1: java.security.Provider): java.security.AlgorithmParameterGenerator;
			public getProvider(): java.security.Provider;
			public init(param0: number): void;
			public init(param0: number, param1: java.security.SecureRandom): void;
			public init(param0: java.security.spec.AlgorithmParameterSpec): void;
			public init(param0: java.security.spec.AlgorithmParameterSpec, param1: java.security.SecureRandom): void;
			public generateParameters(): java.security.AlgorithmParameters;
		}
	}
}
