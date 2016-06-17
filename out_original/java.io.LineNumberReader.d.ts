/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.CharBuffer.d.ts" />

declare module java {
	export module io {
		export class LineNumberReader {
			public constructor(param0: java.io.Reader, param1: number);
			public constructor();
			public constructor(param0: java.lang.Object);
			public constructor(param0: java.io.Reader);
			public constructor(param0: java.io.Reader, param1: number);
			public getLineNumber(): number;
			public mark(param0: number): void;
			public read(param0: native.Array<string>, param1: number, param2: number): number;
			public read(param0: native.Array<string>): number;
			public read(param0: java.nio.CharBuffer): number;
			public read(): number;
			public read(param0: native.Array<string>, param1: number, param2: number): number;
			public readLine(): string;
			public reset(): void;
			public setLineNumber(param0: number): void;
			public skip(param0: number): number;
		}
	}
}
