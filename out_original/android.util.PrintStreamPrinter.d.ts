/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module util {
		export class PrintStreamPrinter {
			public constructor();
			public constructor(param0: java.io.PrintStream);
			public println(param0: string): void;
		}
	}
}
