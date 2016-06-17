/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class MGF1ParameterSpec {
				public constructor();
				public constructor(param0: string);
				public getDigestAlgorithm(): string;
				public static SHA1: java.security.spec.MGF1ParameterSpec;
				public static SHA256: java.security.spec.MGF1ParameterSpec;
				public static SHA384: java.security.spec.MGF1ParameterSpec;
				public static SHA512: java.security.spec.MGF1ParameterSpec;
			}
		}
	}
}
