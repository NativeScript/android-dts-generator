/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />

declare module java {
	export module io {
		export class BufferedOutputStream {
			public constructor();
			public constructor(param0: java.io.OutputStream);
			public constructor(param0: java.io.OutputStream, param1: number);
			public flush(): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public close(): void;
			public write(param0: number): void;
			public buf: native.Array<number>;
			public count: number;
		}
	}
}
