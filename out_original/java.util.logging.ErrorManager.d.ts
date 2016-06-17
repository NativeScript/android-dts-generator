/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module util {
		export module logging {
			export class ErrorManager {
				public constructor();
				public error(param0: string, param1: java.lang.Exception, param2: number): void;
				public static CLOSE_FAILURE: number;
				public static FLUSH_FAILURE: number;
				public static FORMAT_FAILURE: number;
				public static GENERIC_FAILURE: number;
				public static OPEN_FAILURE: number;
				public static WRITE_FAILURE: number;
			}
		}
	}
}
