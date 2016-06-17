/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module util {
		export class StringTokenizer {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: string);
			public constructor(param0: string, param1: string, param2: boolean);
			public countTokens(): number;
			public hasMoreElements(): boolean;
			public hasMoreTokens(): boolean;
			public nextElement(): java.lang.Object;
			public nextToken(): string;
			public nextToken(param0: string): string;
		}
	}
}
