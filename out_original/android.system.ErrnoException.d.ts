/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module system {
		export class ErrnoException {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor(param0: string, param1: number);
			public constructor(param0: string, param1: number, param2: java.lang.Throwable);
			public getMessage(): string;
			public errno: number;
		}
	}
}
