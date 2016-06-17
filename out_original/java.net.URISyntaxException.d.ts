/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module java {
	export module net {
		export class URISyntaxException {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor(param0: string, param1: string, param2: number);
			public constructor(param0: string, param1: string);
			public getIndex(): number;
			public getReason(): string;
			public getInput(): string;
			public getMessage(): string;
		}
	}
}
