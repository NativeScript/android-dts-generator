/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./javax.crypto.Cipher.d.ts" />

declare module javax {
	export module crypto {
		export class CipherInputStream {
			public constructor(param0: java.io.InputStream);
			public constructor();
			public constructor(param0: java.io.InputStream, param1: javax.crypto.Cipher);
			public constructor(param0: java.io.InputStream);
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public read(param0: native.Array<number>): number;
			public read(): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public skip(param0: number): number;
			public available(): number;
			public close(): void;
			public markSupported(): boolean;
		}
	}
}
