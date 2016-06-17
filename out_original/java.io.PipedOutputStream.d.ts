/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PipedInputStream.d.ts" />

declare module java {
	export module io {
		export class PipedOutputStream {
			public constructor();
			public constructor(param0: java.io.PipedInputStream);
			public close(): void;
			public connect(param0: java.io.PipedInputStream): void;
			public flush(): void;
			public write(param0: native.Array<number>): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: number): void;
		}
	}
}
