/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module util {
		export class Log {
			public static v(param0: string, param1: string): number;
			public static v(param0: string, param1: string, param2: java.lang.Throwable): number;
			public static d(param0: string, param1: string): number;
			public static d(param0: string, param1: string, param2: java.lang.Throwable): number;
			public static i(param0: string, param1: string): number;
			public static i(param0: string, param1: string, param2: java.lang.Throwable): number;
			public static w(param0: string, param1: string): number;
			public static w(param0: string, param1: string, param2: java.lang.Throwable): number;
			public static isLoggable(param0: string, param1: number): boolean;
			public static w(param0: string, param1: java.lang.Throwable): number;
			public static e(param0: string, param1: string): number;
			public static e(param0: string, param1: string, param2: java.lang.Throwable): number;
			public static wtf(param0: string, param1: string): number;
			public static wtf(param0: string, param1: java.lang.Throwable): number;
			public static wtf(param0: string, param1: string, param2: java.lang.Throwable): number;
			public static getStackTraceString(param0: java.lang.Throwable): string;
			public static println(param0: number, param1: string, param2: string): number;
			public static ASSERT: number;
			public static DEBUG: number;
			public static ERROR: number;
			public static INFO: number;
			public static VERBOSE: number;
			public static WARN: number;
		}
	}
}
