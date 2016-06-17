/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module java {
	export module io {
		export class PrintWriter {
			public constructor();
			public constructor(param0: java.lang.Object);
			public constructor(param0: java.io.OutputStream);
			public constructor(param0: java.io.OutputStream, param1: boolean);
			public constructor(param0: java.io.Writer);
			public constructor(param0: java.io.Writer, param1: boolean);
			public constructor(param0: java.io.File);
			public constructor(param0: java.io.File, param1: string);
			public constructor(param0: string);
			public constructor(param0: string, param1: string);
			public checkError(): boolean;
			public clearError(): void;
			public close(): void;
			public flush(): void;
			public format(param0: string, param1: native.Array<java.lang.Object>): java.io.PrintWriter;
			public format(param0: java.util.Locale, param1: string, param2: native.Array<java.lang.Object>): java.io.PrintWriter;
			public printf(param0: string, param1: native.Array<java.lang.Object>): java.io.PrintWriter;
			public printf(param0: java.util.Locale, param1: string, param2: native.Array<java.lang.Object>): java.io.PrintWriter;
			public print(param0: native.Array<string>): void;
			public print(param0: string): void;
			public print(param0: number): void;
			public print(param0: number): void;
			public print(param0: number): void;
			public print(param0: number): void;
			public print(param0: java.lang.Object): void;
			public print(param0: string): void;
			public print(param0: boolean): void;
			public println(): void;
			public println(param0: native.Array<string>): void;
			public println(param0: string): void;
			public println(param0: number): void;
			public println(param0: number): void;
			public println(param0: number): void;
			public println(param0: number): void;
			public println(param0: java.lang.Object): void;
			public println(param0: string): void;
			public println(param0: boolean): void;
			public setError(): void;
			public write(param0: native.Array<string>, param1: number, param2: number): void;
			public write(param0: number): void;
			public write(param0: string): void;
			public write(param0: string, param1: number, param2: number): void;
			public write(param0: native.Array<string>): void;
			public write(param0: native.Array<string>, param1: number, param2: number): void;
			public write(param0: number): void;
			public write(param0: string): void;
			public write(param0: string, param1: number, param2: number): void;
			public append(param0: string): java.io.Writer;
			public append(param0: string): java.io.Writer;
			public append(param0: string, param1: number, param2: number): java.io.Writer;
			public append(param0: string): java.io.PrintWriter;
			public append(param0: string): java.io.PrintWriter;
			public append(param0: string, param1: number, param2: number): java.io.PrintWriter;
			public out: java.io.Writer;
		}
	}
}
