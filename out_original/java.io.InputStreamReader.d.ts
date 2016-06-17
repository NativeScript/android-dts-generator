/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.CharBuffer.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./java.nio.charset.CharsetDecoder.d.ts" />

declare module java {
	export module io {
		export class InputStreamReader {
			public constructor();
			public constructor(param0: java.lang.Object);
			public constructor(param0: java.io.InputStream);
			public constructor(param0: java.io.InputStream, param1: string);
			public constructor(param0: java.io.InputStream, param1: java.nio.charset.CharsetDecoder);
			public constructor(param0: java.io.InputStream, param1: java.nio.charset.Charset);
			public close(): void;
			public getEncoding(): string;
			public read(param0: native.Array<string>): number;
			public read(param0: native.Array<string>, param1: number, param2: number): number;
			public read(param0: java.nio.CharBuffer): number;
			public read(): number;
			public read(param0: native.Array<string>, param1: number, param2: number): number;
			public ready(): boolean;
		}
	}
}
