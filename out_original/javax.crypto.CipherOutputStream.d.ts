/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./javax.crypto.Cipher.d.ts" />

declare module javax {
	export module crypto {
		export class CipherOutputStream {
			public constructor(param0: java.io.OutputStream);
			public constructor();
			public constructor(param0: java.io.OutputStream, param1: javax.crypto.Cipher);
			public constructor(param0: java.io.OutputStream);
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: native.Array<number>): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public flush(): void;
			public close(): void;
		}
	}
}
