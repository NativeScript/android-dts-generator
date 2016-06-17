/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.Formatter.d.ts" />

declare module android {
	export module text {
		export module format {
			export class DateUtils {
				public constructor();
				public static getDayOfWeekString(param0: number, param1: number): string;
				public static getAMPMString(param0: number): string;
				public static getMonthString(param0: number, param1: number): string;
				public static getRelativeTimeSpanString(param0: number): string;
				public static getRelativeTimeSpanString(param0: number, param1: number, param2: number): string;
				public static getRelativeTimeSpanString(param0: number, param1: number, param2: number, param3: number): string;
				public static getRelativeDateTimeString(param0: android.content.Context, param1: number, param2: number, param3: number, param4: number): string;
				public static formatElapsedTime(param0: number): string;
				public static formatElapsedTime(param0: java.lang.StringBuilder, param1: number): string;
				public static formatSameDayTime(param0: number, param1: number, param2: number, param3: number): string;
				public static isToday(param0: number): boolean;
				public static formatDateRange(param0: android.content.Context, param1: number, param2: number, param3: number): string;
				public static formatDateRange(param0: android.content.Context, param1: java.util.Formatter, param2: number, param3: number, param4: number): java.util.Formatter;
				public static formatDateRange(param0: android.content.Context, param1: java.util.Formatter, param2: number, param3: number, param4: number, param5: string): java.util.Formatter;
				public static formatDateTime(param0: android.content.Context, param1: number, param2: number): string;
				public static getRelativeTimeSpanString(param0: android.content.Context, param1: number, param2: boolean): string;
				public static getRelativeTimeSpanString(param0: android.content.Context, param1: number): string;
				public static ABBREV_MONTH_FORMAT: string;
				public static ABBREV_WEEKDAY_FORMAT: string;
				public static DAY_IN_MILLIS: number;
				public static FORMAT_12HOUR: number;
				public static FORMAT_24HOUR: number;
				public static FORMAT_ABBREV_ALL: number;
				public static FORMAT_ABBREV_MONTH: number;
				public static FORMAT_ABBREV_RELATIVE: number;
				public static FORMAT_ABBREV_TIME: number;
				public static FORMAT_ABBREV_WEEKDAY: number;
				public static FORMAT_CAP_AMPM: number;
				public static FORMAT_CAP_MIDNIGHT: number;
				public static FORMAT_CAP_NOON: number;
				public static FORMAT_CAP_NOON_MIDNIGHT: number;
				public static FORMAT_NO_MIDNIGHT: number;
				public static FORMAT_NO_MONTH_DAY: number;
				public static FORMAT_NO_NOON: number;
				public static FORMAT_NO_NOON_MIDNIGHT: number;
				public static FORMAT_NO_YEAR: number;
				public static FORMAT_NUMERIC_DATE: number;
				public static FORMAT_SHOW_DATE: number;
				public static FORMAT_SHOW_TIME: number;
				public static FORMAT_SHOW_WEEKDAY: number;
				public static FORMAT_SHOW_YEAR: number;
				public static FORMAT_UTC: number;
				public static HOUR_IN_MILLIS: number;
				public static HOUR_MINUTE_24: string;
				public static LENGTH_LONG: number;
				public static LENGTH_MEDIUM: number;
				public static LENGTH_SHORT: number;
				public static LENGTH_SHORTER: number;
				public static LENGTH_SHORTEST: number;
				public static MINUTE_IN_MILLIS: number;
				public static MONTH_DAY_FORMAT: string;
				public static MONTH_FORMAT: string;
				public static NUMERIC_MONTH_FORMAT: string;
				public static SECOND_IN_MILLIS: number;
				public static WEEKDAY_FORMAT: string;
				public static WEEK_IN_MILLIS: number;
				public static YEAR_FORMAT: string;
				public static YEAR_FORMAT_TWO_DIGITS: string;
				public static YEAR_IN_MILLIS: number;
				public static sameMonthTable: native.Array<number>;
				public static sameYearTable: native.Array<number>;
			}
		}
	}
}
