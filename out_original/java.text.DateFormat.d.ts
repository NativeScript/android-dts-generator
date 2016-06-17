/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuffer.d.ts" />
/// <reference path="./java.text.FieldPosition.d.ts" />
/// <reference path="./java.text.NumberFormat.d.ts" />
/// <reference path="./java.text.ParsePosition.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.TimeZone.d.ts" />

declare module java {
	export module text {
		export class DateFormat {
			public constructor();
			public clone(): java.lang.Object;
			public equals(param0: java.lang.Object): boolean;
			public format(param0: java.lang.Object): string;
			public format(param0: java.lang.Object, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: java.util.Date): string;
			public format(param0: java.util.Date, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public static getAvailableLocales(): native.Array<java.util.Locale>;
			public getCalendar(): java.util.Calendar;
			public static getDateInstance(): java.text.DateFormat;
			public static getDateInstance(param0: number): java.text.DateFormat;
			public static getDateInstance(param0: number, param1: java.util.Locale): java.text.DateFormat;
			public static getDateTimeInstance(): java.text.DateFormat;
			public static getDateTimeInstance(param0: number, param1: number): java.text.DateFormat;
			public static getDateTimeInstance(param0: number, param1: number, param2: java.util.Locale): java.text.DateFormat;
			public static getInstance(): java.text.DateFormat;
			public getNumberFormat(): java.text.NumberFormat;
			public static getTimeInstance(): java.text.DateFormat;
			public static getTimeInstance(param0: number): java.text.DateFormat;
			public static getTimeInstance(param0: number, param1: java.util.Locale): java.text.DateFormat;
			public getTimeZone(): java.util.TimeZone;
			public hashCode(): number;
			public isLenient(): boolean;
			public parse(param0: string): java.util.Date;
			public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
			public parseObject(param0: string): java.lang.Object;
			public parseObject(param0: string, param1: java.text.ParsePosition): java.lang.Object;
			public setCalendar(param0: java.util.Calendar): void;
			public setLenient(param0: boolean): void;
			public setNumberFormat(param0: java.text.NumberFormat): void;
			public setTimeZone(param0: java.util.TimeZone): void;
			public static AM_PM_FIELD: number;
			public static DATE_FIELD: number;
			public static DAY_OF_WEEK_FIELD: number;
			public static DAY_OF_WEEK_IN_MONTH_FIELD: number;
			public static DAY_OF_YEAR_FIELD: number;
			public static DEFAULT: number;
			public static ERA_FIELD: number;
			public static FULL: number;
			public static HOUR0_FIELD: number;
			public static HOUR1_FIELD: number;
			public static HOUR_OF_DAY0_FIELD: number;
			public static HOUR_OF_DAY1_FIELD: number;
			public static LONG: number;
			public static MEDIUM: number;
			public static MILLISECOND_FIELD: number;
			public static MINUTE_FIELD: number;
			public static MONTH_FIELD: number;
			public static SECOND_FIELD: number;
			public static SHORT: number;
			public static TIMEZONE_FIELD: number;
			public static WEEK_OF_MONTH_FIELD: number;
			public static WEEK_OF_YEAR_FIELD: number;
			public static YEAR_FIELD: number;
			public calendar: java.util.Calendar;
			public numberFormat: java.text.NumberFormat;
		}
		export module DateFormat {
			export class Field {
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: number);
				public getCalendarField(): number;
				public static ofCalendarField(param0: number): java.text.DateFormat.Field;
				public static AM_PM: java.text.DateFormat.Field;
				public static DAY_OF_MONTH: java.text.DateFormat.Field;
				public static DAY_OF_WEEK: java.text.DateFormat.Field;
				public static DAY_OF_WEEK_IN_MONTH: java.text.DateFormat.Field;
				public static DAY_OF_YEAR: java.text.DateFormat.Field;
				public static ERA: java.text.DateFormat.Field;
				public static HOUR0: java.text.DateFormat.Field;
				public static HOUR1: java.text.DateFormat.Field;
				public static HOUR_OF_DAY0: java.text.DateFormat.Field;
				public static HOUR_OF_DAY1: java.text.DateFormat.Field;
				public static MILLISECOND: java.text.DateFormat.Field;
				public static MINUTE: java.text.DateFormat.Field;
				public static MONTH: java.text.DateFormat.Field;
				public static SECOND: java.text.DateFormat.Field;
				public static TIME_ZONE: java.text.DateFormat.Field;
				public static WEEK_OF_MONTH: java.text.DateFormat.Field;
				public static WEEK_OF_YEAR: java.text.DateFormat.Field;
				public static YEAR: java.text.DateFormat.Field;
			}
		}
	}
}
