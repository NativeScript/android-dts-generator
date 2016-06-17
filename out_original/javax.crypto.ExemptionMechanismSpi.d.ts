/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />

declare module javax {
	export module crypto {
		export class ExemptionMechanismSpi {
			public constructor();
			public engineGenExemptionBlob(): native.Array<number>;
			public engineGenExemptionBlob(param0: native.Array<number>, param1: number): number;
			public engineGetOutputSize(param0: number): number;
			public engineInit(param0: java.security.Key): void;
			public engineInit(param0: java.security.Key, param1: java.security.AlgorithmParameters): void;
			public engineInit(param0: java.security.Key, param1: java.security.spec.AlgorithmParameterSpec): void;
		}
	}
}
