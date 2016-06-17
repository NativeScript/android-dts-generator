/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class TimeUnit {
				public static values(): native.Array<java.util.concurrent.TimeUnit>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): java.util.concurrent.TimeUnit;
				public convert(param0: number, param1: java.util.concurrent.TimeUnit): number;
				public toNanos(param0: number): number;
				public toMicros(param0: number): number;
				public toMillis(param0: number): number;
				public toSeconds(param0: number): number;
				public toMinutes(param0: number): number;
				public toHours(param0: number): number;
				public toDays(param0: number): number;
				public timedWait(param0: java.lang.Object, param1: number): void;
				public timedJoin(param0: java.lang.Thread, param1: number): void;
				public sleep(param0: number): void;
				public static DAYS: java.util.concurrent.TimeUnit;
				public static HOURS: java.util.concurrent.TimeUnit;
				public static MICROSECONDS: java.util.concurrent.TimeUnit;
				public static MILLISECONDS: java.util.concurrent.TimeUnit;
				public static MINUTES: java.util.concurrent.TimeUnit;
				public static NANOSECONDS: java.util.concurrent.TimeUnit;
				public static SECONDS: java.util.concurrent.TimeUnit;
			}
		}
	}
}
