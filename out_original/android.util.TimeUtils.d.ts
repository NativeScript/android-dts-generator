/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.TimeZone.d.ts" />

declare module android {
	export module util {
		export class TimeUtils {
			public static getTimeZone(param0: number, param1: boolean, param2: number, param3: string): java.util.TimeZone;
			public static getTimeZoneDatabaseVersion(): string;
		}
	}
}
