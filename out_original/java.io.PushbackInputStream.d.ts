/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />

declare module java {
	export module io {
		export class PushbackInputStream {
			public constructor();
			public constructor(param0: java.io.InputStream);
			public constructor(param0: java.io.InputStream, param1: number);
			public available(): number;
			public close(): void;
			public markSupported(): boolean;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public read(param0: native.Array<number>): number;
			public read(): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public skip(param0: number): number;
			public unread(param0: native.Array<number>): void;
			public unread(param0: native.Array<number>, param1: number, param2: number): void;
			public unread(param0: number): void;
			public mark(param0: number): void;
			public reset(): void;
			public buf: native.Array<number>;
			public pos: number;
		}
	}
}
