/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.ExemptionMechanismSpi.d.ts" />

declare module javax {
	export module crypto {
		export class ExemptionMechanism {
			public constructor();
			public constructor(param0: javax.crypto.ExemptionMechanismSpi, param1: java.security.Provider, param2: string);
			public getName(): string;
			public static getInstance(param0: string): javax.crypto.ExemptionMechanism;
			public static getInstance(param0: string, param1: string): javax.crypto.ExemptionMechanism;
			public static getInstance(param0: string, param1: java.security.Provider): javax.crypto.ExemptionMechanism;
			public getProvider(): java.security.Provider;
			public isCryptoAllowed(param0: java.security.Key): boolean;
			public getOutputSize(param0: number): number;
			public init(param0: java.security.Key): void;
			public init(param0: java.security.Key, param1: java.security.AlgorithmParameters): void;
			public init(param0: java.security.Key, param1: java.security.spec.AlgorithmParameterSpec): void;
			public genExemptionBlob(): native.Array<number>;
			public genExemptionBlob(param0: native.Array<number>): number;
			public genExemptionBlob(param0: native.Array<number>, param1: number): number;
			public finalize(): void;
		}
	}
}
