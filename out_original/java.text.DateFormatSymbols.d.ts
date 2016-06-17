/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module java {
	export module text {
		export class DateFormatSymbols {
			public constructor();
			public constructor(param0: java.util.Locale);
			public static getInstance(): java.text.DateFormatSymbols;
			public static getInstance(param0: java.util.Locale): java.text.DateFormatSymbols;
			public static getAvailableLocales(): native.Array<java.util.Locale>;
			public clone(): java.lang.Object;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public getAmPmStrings(): native.Array<string>;
			public getEras(): native.Array<string>;
			public getLocalPatternChars(): string;
			public getMonths(): native.Array<string>;
			public getShortMonths(): native.Array<string>;
			public getShortWeekdays(): native.Array<string>;
			public getWeekdays(): native.Array<string>;
			public getZoneStrings(): native.Array<native.Array<string>>;
			public hashCode(): number;
			public setAmPmStrings(param0: native.Array<string>): void;
			public setEras(param0: native.Array<string>): void;
			public setLocalPatternChars(param0: string): void;
			public setMonths(param0: native.Array<string>): void;
			public setShortMonths(param0: native.Array<string>): void;
			public setShortWeekdays(param0: native.Array<string>): void;
			public setWeekdays(param0: native.Array<string>): void;
			public setZoneStrings(param0: native.Array<native.Array<string>>): void;
		}
	}
}
