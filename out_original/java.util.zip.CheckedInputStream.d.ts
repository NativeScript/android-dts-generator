/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.util.zip.Checksum.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class CheckedInputStream {
				public constructor(param0: java.io.InputStream);
				public constructor();
				public constructor(param0: java.io.InputStream, param1: java.util.zip.Checksum);
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public read(param0: native.Array<number>): number;
				public read(): number;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public getChecksum(): java.util.zip.Checksum;
				public skip(param0: number): number;
			}
		}
	}
}
