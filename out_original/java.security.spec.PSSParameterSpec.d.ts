/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class PSSParameterSpec {
				public constructor();
				public constructor(param0: number);
				public constructor(param0: string, param1: string, param2: java.security.spec.AlgorithmParameterSpec, param3: number, param4: number);
				public getSaltLength(): number;
				public getDigestAlgorithm(): string;
				public getMGFAlgorithm(): string;
				public getMGFParameters(): java.security.spec.AlgorithmParameterSpec;
				public getTrailerField(): number;
				public static DEFAULT: java.security.spec.PSSParameterSpec;
			}
		}
	}
}
