/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module io {
		export class BufferedWriter {
			public constructor();
			public constructor(param0: java.lang.Object);
			public constructor(param0: java.io.Writer);
			public constructor(param0: java.io.Writer, param1: number);
			public close(): void;
			public flush(): void;
			public newLine(): void;
			public write(param0: native.Array<string>): void;
			public write(param0: number): void;
			public write(param0: string): void;
			public write(param0: string, param1: number, param2: number): void;
			public write(param0: native.Array<string>, param1: number, param2: number): void;
			public write(param0: number): void;
			public write(param0: string, param1: number, param2: number): void;
		}
	}
}
