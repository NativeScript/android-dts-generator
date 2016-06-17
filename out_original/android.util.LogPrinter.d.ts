/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module util {
		export class LogPrinter {
			public constructor();
			public constructor(param0: number, param1: string);
			public println(param0: string): void;
		}
	}
}
