/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.util.zip.CRC32.d.ts" />
/// <reference path="./java.util.zip.Inflater.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class GZIPInputStream {
				public constructor(param0: java.io.InputStream, param1: java.util.zip.Inflater);
				public constructor(param0: java.io.InputStream, param1: java.util.zip.Inflater, param2: number);
				public constructor();
				public constructor(param0: java.io.InputStream);
				public constructor(param0: java.io.InputStream, param1: number);
				public close(): void;
				public read(): number;
				public read(param0: native.Array<number>): number;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public static GZIP_MAGIC: number;
				public crc: java.util.zip.CRC32;
				public eos: boolean;
			}
		}
	}
}
