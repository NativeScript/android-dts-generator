/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.SecureRandomSpi.d.ts" />

declare module java {
	export module security {
		export class SecureRandom {
			public constructor(param0: number);
			public constructor();
			public constructor(param0: native.Array<number>);
			public constructor(param0: java.security.SecureRandomSpi, param1: java.security.Provider);
			public static getInstance(param0: string): java.security.SecureRandom;
			public static getInstance(param0: string, param1: string): java.security.SecureRandom;
			public static getInstance(param0: string, param1: java.security.Provider): java.security.SecureRandom;
			public getProvider(): java.security.Provider;
			public getAlgorithm(): string;
			public setSeed(param0: number): void;
			public setSeed(param0: native.Array<number>): void;
			public setSeed(param0: number): void;
			public nextBytes(param0: native.Array<number>): void;
			public next(param0: number): number;
			public static getSeed(param0: number): native.Array<number>;
			public generateSeed(param0: number): native.Array<number>;
		}
	}
}
