/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />

declare module java {
	export module io {
		export class FilterOutputStream {
			public constructor();
			public constructor(param0: java.io.OutputStream);
			public close(): void;
			public flush(): void;
			public write(param0: native.Array<number>): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: number): void;
			public out: java.io.OutputStream;
		}
	}
}
