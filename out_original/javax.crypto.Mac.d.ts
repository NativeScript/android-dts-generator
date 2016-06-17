/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.MacSpi.d.ts" />

declare module javax {
	export module crypto {
		export class Mac {
			public constructor();
			public constructor(param0: javax.crypto.MacSpi, param1: java.security.Provider, param2: string);
			public getAlgorithm(): string;
			public getProvider(): java.security.Provider;
			public static getInstance(param0: string): javax.crypto.Mac;
			public static getInstance(param0: string, param1: string): javax.crypto.Mac;
			public static getInstance(param0: string, param1: java.security.Provider): javax.crypto.Mac;
			public getMacLength(): number;
			public init(param0: java.security.Key, param1: java.security.spec.AlgorithmParameterSpec): void;
			public init(param0: java.security.Key): void;
			public update(param0: number): void;
			public update(param0: native.Array<number>, param1: number, param2: number): void;
			public update(param0: native.Array<number>): void;
			public update(param0: java.nio.ByteBuffer): void;
			public doFinal(): native.Array<number>;
			public doFinal(param0: native.Array<number>, param1: number): void;
			public doFinal(param0: native.Array<number>): native.Array<number>;
			public reset(): void;
			public clone(): java.lang.Object;
		}
	}
}
