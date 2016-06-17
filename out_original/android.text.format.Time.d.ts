/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module text {
		export module format {
			export class Time {
				public constructor();
				public constructor(param0: string);
				public constructor();
				public constructor(param0: android.text.format.Time);
				public normalize(param0: boolean): number;
				public switchTimezone(param0: string): void;
				public getActualMaximum(param0: number): number;
				public clear(param0: string): void;
				public static compare(param0: android.text.format.Time, param1: android.text.format.Time): number;
				public format(param0: string): string;
				public toString(): string;
				public parse(param0: string): boolean;
				public parse3339(param0: string): boolean;
				public static getCurrentTimezone(): string;
				public setToNow(): void;
				public toMillis(param0: boolean): number;
				public set(param0: number): void;
				public format2445(): string;
				public set(param0: android.text.format.Time): void;
				public set(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public set(param0: number, param1: number, param2: number): void;
				public before(param0: android.text.format.Time): boolean;
				public after(param0: android.text.format.Time): boolean;
				public getWeekNumber(): number;
				public format3339(param0: boolean): string;
				public static isEpoch(param0: android.text.format.Time): boolean;
				public static getJulianDay(param0: number, param1: number): number;
				public setJulianDay(param0: number): number;
				public static getWeeksSinceEpochFromJulianDay(param0: number, param1: number): number;
				public static getJulianMondayFromWeeksSinceEpoch(param0: number): number;
				public static EPOCH_JULIAN_DAY: number;
				public static FRIDAY: number;
				public static HOUR: number;
				public static MINUTE: number;
				public static MONDAY: number;
				public static MONDAY_BEFORE_JULIAN_EPOCH: number;
				public static MONTH: number;
				public static MONTH_DAY: number;
				public static SATURDAY: number;
				public static SECOND: number;
				public static SUNDAY: number;
				public static THURSDAY: number;
				public static TIMEZONE_UTC: string;
				public static TUESDAY: number;
				public static WEDNESDAY: number;
				public static WEEK_DAY: number;
				public static WEEK_NUM: number;
				public static YEAR: number;
				public static YEAR_DAY: number;
				public allDay: boolean;
				public gmtoff: number;
				public hour: number;
				public isDst: number;
				public minute: number;
				public month: number;
				public monthDay: number;
				public second: number;
				public timezone: string;
				public weekDay: number;
				public year: number;
				public yearDay: number;
			}
		}
	}
}
