/// <reference path="./_helpers.d.ts" />

declare module java {
	export module io {
		export class OutputStream {
			public constructor();
			public close(): void;
			public flush(): void;
			public write(param0: native.Array<number>): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: number): void;
		}
	}
}
