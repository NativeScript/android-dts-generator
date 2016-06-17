/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module util {
		export class PrintWriterPrinter {
			public constructor();
			public constructor(param0: java.io.PrintWriter);
			public println(param0: string): void;
		}
	}
}
