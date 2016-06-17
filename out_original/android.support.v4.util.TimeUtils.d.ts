/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module util {
				export class TimeUtils {
					public static formatDuration(param0: number, param1: java.lang.StringBuilder): void;
					public static formatDuration(param0: number, param1: java.io.PrintWriter, param2: number): void;
					public static formatDuration(param0: number, param1: java.io.PrintWriter): void;
					public static formatDuration(param0: number, param1: number, param2: java.io.PrintWriter): void;
					public static HUNDRED_DAY_FIELD_LEN: number;
				}
			}
		}
	}
}
