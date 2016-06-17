/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export module ls {
				export class LSException {
					public constructor();
					public constructor(param0: string);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: java.lang.Throwable);
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: number, param1: string);
					public static PARSE_ERR: number;
					public static SERIALIZE_ERR: number;
					public code: number;
				}
			}
		}
	}
}
