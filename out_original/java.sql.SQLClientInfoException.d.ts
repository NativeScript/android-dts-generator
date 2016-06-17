/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module sql {
		export class SQLClientInfoException {
			public constructor(param0: string);
			public constructor(param0: string, param1: string);
			public constructor(param0: string, param1: string, param2: number);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: string, param2: java.lang.Throwable);
			public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public constructor(param0: java.util.Map);
			public constructor(param0: java.util.Map, param1: java.lang.Throwable);
			public constructor(param0: string, param1: java.util.Map);
			public constructor(param0: string, param1: java.util.Map, param2: java.lang.Throwable);
			public constructor(param0: string, param1: string, param2: number, param3: java.util.Map);
			public constructor(param0: string, param1: string, param2: number, param3: java.util.Map, param4: java.lang.Throwable);
			public constructor(param0: string, param1: string, param2: java.util.Map);
			public constructor(param0: string, param1: string, param2: java.util.Map, param3: java.lang.Throwable);
			public getFailedProperties(): java.util.Map;
		}
	}
}
