/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.CharBuffer.d.ts" />

declare module java {
	export module io {
		export class FilterReader {
			public constructor();
			public constructor(param0: java.lang.Object);
			public constructor(param0: java.io.Reader);
			public close(): void;
			public mark(param0: number): void;
			public markSupported(): boolean;
			public read(param0: native.Array<string>): number;
			public read(param0: native.Array<string>, param1: number, param2: number): number;
			public read(param0: java.nio.CharBuffer): number;
			public read(): number;
			public read(param0: native.Array<string>, param1: number, param2: number): number;
			public ready(): boolean;
			public reset(): void;
			public skip(param0: number): number;
			public in: java.io.Reader;
		}
	}
}
