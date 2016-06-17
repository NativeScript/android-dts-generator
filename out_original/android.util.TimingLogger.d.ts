/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module util {
		export class TimingLogger {
			public constructor();
			public constructor(param0: string, param1: string);
			public reset(param0: string, param1: string): void;
			public reset(): void;
			public addSplit(param0: string): void;
			public dumpToLog(): void;
		}
	}
}
