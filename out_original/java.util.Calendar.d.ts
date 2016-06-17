/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.TimeZone.d.ts" />

declare module java {
	export module util {
		export class Calendar {
			public constructor();
			public constructor(param0: java.util.TimeZone, param1: java.util.Locale);
			public add(param0: number, param1: number): void;
			public after(param0: java.lang.Object): boolean;
			public before(param0: java.lang.Object): boolean;
			public clear(): void;
			public clear(param0: number): void;
			public clone(): java.lang.Object;
			public complete(): void;
			public computeFields(): void;
			public computeTime(): void;
			public equals(param0: java.lang.Object): boolean;
			public get(param0: number): number;
			public getActualMaximum(param0: number): number;
			public getActualMinimum(param0: number): number;
			public static getAvailableLocales(): native.Array<java.util.Locale>;
			public getFirstDayOfWeek(): number;
			public getGreatestMinimum(param0: number): number;
			public static getInstance(): java.util.Calendar;
			public static getInstance(param0: java.util.Locale): java.util.Calendar;
			public static getInstance(param0: java.util.TimeZone): java.util.Calendar;
			public static getInstance(param0: java.util.TimeZone, param1: java.util.Locale): java.util.Calendar;
			public getLeastMaximum(param0: number): number;
			public getMaximum(param0: number): number;
			public getMinimalDaysInFirstWeek(): number;
			public getMinimum(param0: number): number;
			public getTime(): java.util.Date;
			public getTimeInMillis(): number;
			public getTimeZone(): java.util.TimeZone;
			public hashCode(): number;
			public internalGet(param0: number): number;
			public isLenient(): boolean;
			public isSet(param0: number): boolean;
			public roll(param0: number, param1: number): void;
			public roll(param0: number, param1: boolean): void;
			public set(param0: number, param1: number): void;
			public set(param0: number, param1: number, param2: number): void;
			public set(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public set(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public setFirstDayOfWeek(param0: number): void;
			public setLenient(param0: boolean): void;
			public setMinimalDaysInFirstWeek(param0: number): void;
			public setTime(param0: java.util.Date): void;
			public setTimeInMillis(param0: number): void;
			public setTimeZone(param0: java.util.TimeZone): void;
			public toString(): string;
			public compareTo(param0: java.util.Calendar): number;
			public getDisplayName(param0: number, param1: number, param2: java.util.Locale): string;
			public getDisplayNames(param0: number, param1: number, param2: java.util.Locale): java.util.Map;
			public static ALL_STYLES: number;
			public static AM: number;
			public static AM_PM: number;
			public static APRIL: number;
			public static AUGUST: number;
			public static DATE: number;
			public static DAY_OF_MONTH: number;
			public static DAY_OF_WEEK: number;
			public static DAY_OF_WEEK_IN_MONTH: number;
			public static DAY_OF_YEAR: number;
			public static DECEMBER: number;
			public static DST_OFFSET: number;
			public static ERA: number;
			public static FEBRUARY: number;
			public static FIELD_COUNT: number;
			public static FRIDAY: number;
			public static HOUR: number;
			public static HOUR_OF_DAY: number;
			public static JANUARY: number;
			public static JULY: number;
			public static JUNE: number;
			public static LONG: number;
			public static MARCH: number;
			public static MAY: number;
			public static MILLISECOND: number;
			public static MINUTE: number;
			public static MONDAY: number;
			public static MONTH: number;
			public static NOVEMBER: number;
			public static OCTOBER: number;
			public static PM: number;
			public static SATURDAY: number;
			public static SECOND: number;
			public static SEPTEMBER: number;
			public static SHORT: number;
			public static SUNDAY: number;
			public static THURSDAY: number;
			public static TUESDAY: number;
			public static UNDECIMBER: number;
			public static WEDNESDAY: number;
			public static WEEK_OF_MONTH: number;
			public static WEEK_OF_YEAR: number;
			public static YEAR: number;
			public static ZONE_OFFSET: number;
			public areFieldsSet: boolean;
			public fields: native.Array<number>;
			public isTimeSet: boolean;
			public time: number;
		}
	}
}
