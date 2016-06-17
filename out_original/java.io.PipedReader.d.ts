/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PipedWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.CharBuffer.d.ts" />

declare module java {
	export module io {
		export class PipedReader {
			public constructor(param0: java.lang.Object);
			public constructor();
			public constructor(param0: java.io.PipedWriter);
			public constructor(param0: number);
			public constructor(param0: java.io.PipedWriter, param1: number);
			public close(): void;
			public connect(param0: java.io.PipedWriter): void;
			public read(param0: native.Array<string>): number;
			public read(param0: native.Array<string>, param1: number, param2: number): number;
			public read(param0: java.nio.CharBuffer): number;
			public read(): number;
			public read(param0: native.Array<string>, param1: number, param2: number): number;
			public ready(): boolean;
		}
	}
}
