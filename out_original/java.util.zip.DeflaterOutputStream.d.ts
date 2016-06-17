/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.util.zip.Deflater.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class DeflaterOutputStream {
				public constructor();
				public constructor(param0: java.io.OutputStream);
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Deflater);
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Deflater, param2: number);
				public constructor(param0: java.io.OutputStream, param1: boolean);
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Deflater, param2: boolean);
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Deflater, param2: number, param3: boolean);
				public deflate(): void;
				public close(): void;
				public finish(): void;
				public write(param0: native.Array<number>, param1: number, param2: number): void;
				public write(param0: native.Array<number>): void;
				public write(param0: number): void;
				public write(param0: native.Array<number>, param1: number, param2: number): void;
				public flush(): void;
				public buf: native.Array<number>;
				public def: java.util.zip.Deflater;
			}
		}
	}
}
