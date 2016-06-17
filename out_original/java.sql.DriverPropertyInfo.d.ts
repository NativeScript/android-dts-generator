/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module sql {
		export class DriverPropertyInfo {
			public constructor();
			public constructor(param0: string, param1: string);
			public choices: native.Array<string>;
			public description: string;
			public name: string;
			public required: boolean;
			public value: string;
		}
	}
}
