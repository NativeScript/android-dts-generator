/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module system {
		export class StructUtsname {
			public constructor();
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
			public toString(): string;
			public machine: string;
			public nodename: string;
			public release: string;
			public sysname: string;
			public version: string;
		}
	}
}
