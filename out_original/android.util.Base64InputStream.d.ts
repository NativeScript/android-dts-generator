/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />

declare module android {
	export module util {
		export class Base64InputStream {
			public constructor(param0: java.io.InputStream);
			public constructor();
			public constructor(param0: java.io.InputStream, param1: number);
			public markSupported(): boolean;
			public mark(param0: number): void;
			public reset(): void;
			public close(): void;
			public available(): number;
			public skip(param0: number): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public read(param0: native.Array<number>): number;
			public read(): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
		}
	}
}
