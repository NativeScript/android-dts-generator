/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class Trace {
			public static beginSection(param0: string): void;
			public static endSection(): void;
		}
	}
}
