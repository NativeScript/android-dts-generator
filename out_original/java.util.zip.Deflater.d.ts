/// <reference path="./_helpers.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class Deflater {
				public constructor();
				public constructor(param0: number);
				public constructor(param0: number, param1: boolean);
				public deflate(param0: native.Array<number>): number;
				public deflate(param0: native.Array<number>, param1: number, param2: number): number;
				public deflate(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
				public end(): void;
				public finalize(): void;
				public finish(): void;
				public finished(): boolean;
				public getAdler(): number;
				public getTotalIn(): number;
				public getTotalOut(): number;
				public needsInput(): boolean;
				public reset(): void;
				public setDictionary(param0: native.Array<number>): void;
				public setDictionary(param0: native.Array<number>, param1: number, param2: number): void;
				public setInput(param0: native.Array<number>): void;
				public setInput(param0: native.Array<number>, param1: number, param2: number): void;
				public setLevel(param0: number): void;
				public setStrategy(param0: number): void;
				public getBytesRead(): number;
				public getBytesWritten(): number;
				public static BEST_COMPRESSION: number;
				public static BEST_SPEED: number;
				public static DEFAULT_COMPRESSION: number;
				public static DEFAULT_STRATEGY: number;
				public static DEFLATED: number;
				public static FILTERED: number;
				public static FULL_FLUSH: number;
				public static HUFFMAN_ONLY: number;
				public static NO_COMPRESSION: number;
				public static NO_FLUSH: number;
				public static SYNC_FLUSH: number;
			}
		}
	}
}
