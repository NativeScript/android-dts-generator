/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />

declare module java {
	export module security {
		export class AlgorithmParameterGeneratorSpi {
			public constructor();
			public engineInit(param0: number, param1: java.security.SecureRandom): void;
			public engineInit(param0: java.security.spec.AlgorithmParameterSpec, param1: java.security.SecureRandom): void;
			public engineGenerateParameters(): java.security.AlgorithmParameters;
		}
	}
}
