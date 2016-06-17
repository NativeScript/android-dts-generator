/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />

declare module java {
	export module security {
		export class MessageDigest {
			public constructor();
			public constructor(param0: string);
			public static getInstance(param0: string): java.security.MessageDigest;
			public static getInstance(param0: string, param1: string): java.security.MessageDigest;
			public static getInstance(param0: string, param1: java.security.Provider): java.security.MessageDigest;
			public reset(): void;
			public update(param0: number): void;
			public update(param0: native.Array<number>, param1: number, param2: number): void;
			public update(param0: native.Array<number>): void;
			public digest(): native.Array<number>;
			public digest(param0: native.Array<number>, param1: number, param2: number): number;
			public digest(param0: native.Array<number>): native.Array<number>;
			public toString(): string;
			public static isEqual(param0: native.Array<number>, param1: native.Array<number>): boolean;
			public getAlgorithm(): string;
			public getProvider(): java.security.Provider;
			public getDigestLength(): number;
			public update(param0: java.nio.ByteBuffer): void;
		}
	}
}
