/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module io {
		export class StringBufferInputStream {
			public constructor();
			public constructor(param0: string);
			public available(): number;
			public read(param0: native.Array<number>): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public read(): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public reset(): void;
			public skip(param0: number): number;
			public buffer: string;
			public count: number;
			public pos: number;
		}
	}
}
