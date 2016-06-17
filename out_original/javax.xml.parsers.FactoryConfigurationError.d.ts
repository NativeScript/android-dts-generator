/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module javax {
	export module xml {
		export module parsers {
			export class FactoryConfigurationError {
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor();
				public constructor(param0: string);
				public constructor(param0: java.lang.Exception);
				public constructor(param0: java.lang.Exception, param1: string);
				public getMessage(): string;
				public getException(): java.lang.Exception;
			}
		}
	}
}
