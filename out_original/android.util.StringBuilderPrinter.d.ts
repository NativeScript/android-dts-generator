/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />

declare module android {
	export module util {
		export class StringBuilderPrinter {
			public constructor();
			public constructor(param0: java.lang.StringBuilder);
			public println(param0: string): void;
		}
	}
}
