/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.TimeZone.d.ts" />

declare module java {
	export module util {
		export class GregorianCalendar {
			public constructor(param0: java.util.TimeZone, param1: java.util.Locale);
			public constructor();
			public constructor(param0: number, param1: number, param2: number);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
			public constructor(param0: java.util.Locale);
			public constructor(param0: java.util.TimeZone);
			public constructor(param0: java.util.TimeZone, param1: java.util.Locale);
			public add(param0: number, param1: number): void;
			public computeFields(): void;
			public computeTime(): void;
			public equals(param0: java.lang.Object): boolean;
			public getActualMaximum(param0: number): number;
			public getActualMinimum(param0: number): number;
			public getGreatestMinimum(param0: number): number;
			public getGregorianChange(): java.util.Date;
			public getLeastMaximum(param0: number): number;
			public getMaximum(param0: number): number;
			public getMinimum(param0: number): number;
			public hashCode(): number;
			public isLeapYear(param0: number): boolean;
			public roll(param0: number, param1: boolean): void;
			public roll(param0: number, param1: number): void;
			public roll(param0: number, param1: boolean): void;
			public setGregorianChange(param0: java.util.Date): void;
			public static AD: number;
			public static BC: number;
		}
	}
}
