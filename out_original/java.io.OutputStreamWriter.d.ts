/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./java.nio.charset.CharsetEncoder.d.ts" />

declare module java {
	export module io {
		export class OutputStreamWriter {
			public constructor();
			public constructor(param0: java.lang.Object);
			public constructor(param0: java.io.OutputStream);
			public constructor(param0: java.io.OutputStream, param1: string);
			public constructor(param0: java.io.OutputStream, param1: java.nio.charset.Charset);
			public constructor(param0: java.io.OutputStream, param1: java.nio.charset.CharsetEncoder);
			public close(): void;
			public flush(): void;
			public getEncoding(): string;
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
