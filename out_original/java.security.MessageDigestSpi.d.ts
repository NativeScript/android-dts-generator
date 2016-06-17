/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module java {
	export module security {
		export class MessageDigestSpi {
			public constructor();
			public engineGetDigestLength(): number;
			public engineUpdate(param0: number): void;
			public engineUpdate(param0: native.Array<number>, param1: number, param2: number): void;
			public engineUpdate(param0: java.nio.ByteBuffer): void;
			public engineDigest(): native.Array<number>;
			public engineDigest(param0: native.Array<number>, param1: number, param2: number): number;
			public engineReset(): void;
			public clone(): java.lang.Object;
		}
	}
}
