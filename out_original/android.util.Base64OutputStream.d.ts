/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />

declare module android {
	export module util {
		export class Base64OutputStream {
			public constructor(param0: java.io.OutputStream);
			public constructor();
			public constructor(param0: java.io.OutputStream, param1: number);
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: native.Array<number>): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public close(): void;
		}
	}
}
