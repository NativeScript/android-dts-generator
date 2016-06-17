/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.util.zip.Checksum.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class CheckedOutputStream {
				public constructor(param0: java.io.OutputStream);
				public constructor();
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Checksum);
				public getChecksum(): java.util.zip.Checksum;
				public write(param0: native.Array<number>, param1: number, param2: number): void;
				public write(param0: native.Array<number>): void;
				public write(param0: number): void;
				public write(param0: native.Array<number>, param1: number, param2: number): void;
			}
		}
	}
}
