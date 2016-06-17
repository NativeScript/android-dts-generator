/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.util.zip.Deflater.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class DeflaterInputStream {
				public constructor();
				public constructor(param0: java.io.InputStream);
				public constructor(param0: java.io.InputStream, param1: java.util.zip.Deflater);
				public constructor(param0: java.io.InputStream, param1: java.util.zip.Deflater, param2: number);
				public close(): void;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public read(param0: native.Array<number>): number;
				public read(): number;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public skip(param0: number): number;
				public available(): number;
				public markSupported(): boolean;
				public mark(param0: number): void;
				public reset(): void;
				public buf: native.Array<number>;
				public def: java.util.zip.Deflater;
			}
		}
	}
}
