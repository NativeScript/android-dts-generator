/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.util.zip.Inflater.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class InflaterInputStream {
				public constructor();
				public constructor(param0: java.io.InputStream);
				public constructor(param0: java.io.InputStream, param1: java.util.zip.Inflater);
				public constructor(param0: java.io.InputStream, param1: java.util.zip.Inflater, param2: number);
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public read(param0: native.Array<number>): number;
				public read(): number;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public fill(): void;
				public skip(param0: number): number;
				public available(): number;
				public close(): void;
				public mark(param0: number): void;
				public reset(): void;
				public markSupported(): boolean;
				public buf: native.Array<number>;
				public inf: java.util.zip.Inflater;
				public len: number;
			}
		}
	}
}
