/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module io {
		export class CharArrayWriter {
			public constructor(param0: java.lang.Object);
			public constructor();
			public constructor(param0: number);
			public close(): void;
			public flush(): void;
			public reset(): void;
			public size(): number;
			public toCharArray(): native.Array<string>;
			public toString(): string;
			public write(param0: native.Array<string>): void;
			public write(param0: number): void;
			public write(param0: string): void;
			public write(param0: string, param1: number, param2: number): void;
			public write(param0: native.Array<string>, param1: number, param2: number): void;
			public write(param0: number): void;
			public write(param0: string, param1: number, param2: number): void;
			public writeTo(param0: java.io.Writer): void;
			public append(param0: string): java.io.Writer;
			public append(param0: string): java.io.Writer;
			public append(param0: string, param1: number, param2: number): java.io.Writer;
			public append(param0: string): java.io.CharArrayWriter;
			public append(param0: string): java.io.CharArrayWriter;
			public append(param0: string, param1: number, param2: number): java.io.CharArrayWriter;
			public buf: native.Array<string>;
			public count: number;
		}
	}
}
