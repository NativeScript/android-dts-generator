/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.DateFormat.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module text {
		export module format {
			export class DateFormat {
				public constructor();
				public static is24HourFormat(param0: android.content.Context): boolean;
				public static getBestDateTimePattern(param0: java.util.Locale, param1: string): string;
				public static getTimeFormat(param0: android.content.Context): java.text.DateFormat;
				public static getDateFormat(param0: android.content.Context): java.text.DateFormat;
				public static getLongDateFormat(param0: android.content.Context): java.text.DateFormat;
				public static getMediumDateFormat(param0: android.content.Context): java.text.DateFormat;
				public static getDateFormatOrder(param0: android.content.Context): native.Array<string>;
				public static format(param0: string, param1: number): string;
				public static format(param0: string, param1: java.util.Date): string;
				public static format(param0: string, param1: java.util.Calendar): string;
			}
		}
	}
}
