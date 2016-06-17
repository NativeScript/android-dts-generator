/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PipedReader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module io {
		export class PipedWriter {
			public constructor(param0: java.lang.Object);
			public constructor();
			public constructor(param0: java.io.PipedReader);
			public close(): void;
			public connect(param0: java.io.PipedReader): void;
			public flush(): void;
			public write(param0: native.Array<string>): void;
			public write(param0: number): void;
			public write(param0: string): void;
			public write(param0: string, param1: number, param2: number): void;
			public write(param0: native.Array<string>, param1: number, param2: number): void;
			public write(param0: number): void;
		}
	}
}
