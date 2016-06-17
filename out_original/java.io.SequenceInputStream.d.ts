/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />

declare module java {
	export module io {
		export class SequenceInputStream {
			public constructor();
			public constructor(param0: java.io.InputStream, param1: java.io.InputStream);
			public constructor(param0: java.util.Enumeration);
			public available(): number;
			public close(): void;
			public read(param0: native.Array<number>): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public read(): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
		}
	}
}
