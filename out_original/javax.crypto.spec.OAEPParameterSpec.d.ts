/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.spec.PSource.d.ts" />

declare module javax {
	export module crypto {
		export module spec {
			export class OAEPParameterSpec {
				public constructor();
				public constructor(param0: string, param1: string, param2: java.security.spec.AlgorithmParameterSpec, param3: javax.crypto.spec.PSource);
				public getDigestAlgorithm(): string;
				public getMGFAlgorithm(): string;
				public getMGFParameters(): java.security.spec.AlgorithmParameterSpec;
				public getPSource(): javax.crypto.spec.PSource;
				public static DEFAULT: javax.crypto.spec.OAEPParameterSpec;
			}
		}
	}
}
