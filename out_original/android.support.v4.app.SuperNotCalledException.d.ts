/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class SuperNotCalledException {
					public constructor();
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: java.lang.Exception);
					public constructor(param0: java.lang.Throwable);
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string);
				}
			}
		}
	}
}
