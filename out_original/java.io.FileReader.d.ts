/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./java.nio.charset.CharsetDecoder.d.ts" />

declare module java {
	export module io {
		export class FileReader {
			public constructor(param0: java.io.InputStream);
			public constructor(param0: java.io.InputStream, param1: string);
			public constructor(param0: java.io.InputStream, param1: java.nio.charset.CharsetDecoder);
			public constructor(param0: java.io.InputStream, param1: java.nio.charset.Charset);
			public constructor();
			public constructor(param0: java.lang.Object);
			public constructor(param0: java.io.File);
			public constructor(param0: java.io.FileDescriptor);
			public constructor(param0: string);
		}
	}
}
