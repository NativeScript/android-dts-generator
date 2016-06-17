/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module java {
	export module sql {
		export class SQLWarning {
			public constructor(param0: string);
			public constructor(param0: string, param1: string);
			public constructor(param0: string, param1: string, param2: number);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: string, param2: java.lang.Throwable);
			public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: string);
			public constructor(param0: string, param1: string, param2: number);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: string, param2: java.lang.Throwable);
			public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
			public getNextWarning(): java.sql.SQLWarning;
			public setNextWarning(param0: java.sql.SQLWarning): void;
		}
	}
}
