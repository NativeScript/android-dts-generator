/// <reference path="./_helpers.d.ts" />

declare module java {
	export module io {
		export class ByteArrayInputStream {
			public constructor();
			public constructor(param0: native.Array<number>);
			public constructor(param0: native.Array<number>, param1: number, param2: number);
			public available(): number;
			public close(): void;
			public mark(param0: number): void;
			public markSupported(): boolean;
			public read(param0: native.Array<number>): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public read(): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public reset(): void;
			public skip(param0: number): number;
			public buf: native.Array<number>;
			public count: number;
			public pos: number;
		}
	}
}
