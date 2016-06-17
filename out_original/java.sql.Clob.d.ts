/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module sql {
		export class Clob {
			public getAsciiStream(): java.io.InputStream;
			public getCharacterStream(): java.io.Reader;
			public getSubString(param0: number, param1: number): string;
			public length(): number;
			public position(param0: java.sql.Clob, param1: number): number;
			public position(param0: string, param1: number): number;
			public setAsciiStream(param0: number): java.io.OutputStream;
			public setCharacterStream(param0: number): java.io.Writer;
			public setString(param0: number, param1: string): number;
			public setString(param0: number, param1: string, param2: number, param3: number): number;
			public truncate(param0: number): void;
			public free(): void;
			public getCharacterStream(param0: number, param1: number): java.io.Reader;
		}
	}
}
