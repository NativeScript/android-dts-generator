/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./java.nio.charset.CharsetEncoder.d.ts" />

declare module java {
	export module io {
		export class FileWriter {
			public constructor(param0: java.io.OutputStream);
			public constructor(param0: java.io.OutputStream, param1: string);
			public constructor(param0: java.io.OutputStream, param1: java.nio.charset.Charset);
			public constructor(param0: java.io.OutputStream, param1: java.nio.charset.CharsetEncoder);
			public constructor();
			public constructor(param0: java.lang.Object);
			public constructor(param0: java.io.File);
			public constructor(param0: java.io.File, param1: boolean);
			public constructor(param0: java.io.FileDescriptor);
			public constructor(param0: string);
			public constructor(param0: string, param1: boolean);
		}
	}
}
