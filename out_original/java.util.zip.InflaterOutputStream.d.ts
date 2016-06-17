/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.util.zip.Inflater.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class InflaterOutputStream {
				public constructor();
				public constructor(param0: java.io.OutputStream);
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Inflater);
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Inflater, param2: number);
				public close(): void;
				public flush(): void;
				public finish(): void;
				public write(param0: native.Array<number>, param1: number, param2: number): void;
				public write(param0: native.Array<number>): void;
				public write(param0: number): void;
				public write(param0: native.Array<number>, param1: number, param2: number): void;
				public buf: native.Array<number>;
				public inf: java.util.zip.Inflater;
			}
		}
	}
}
