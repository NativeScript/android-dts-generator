/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module io {
		export class Console {
			public flush(): void;
			public format(param0: string, param1: native.Array<java.lang.Object>): java.io.Console;
			public printf(param0: string, param1: native.Array<java.lang.Object>): java.io.Console;
			public reader(): java.io.Reader;
			public readLine(): string;
			public readLine(param0: string, param1: native.Array<java.lang.Object>): string;
			public readPassword(): native.Array<string>;
			public readPassword(param0: string, param1: native.Array<java.lang.Object>): native.Array<string>;
			public writer(): java.io.PrintWriter;
		}
	}
}
