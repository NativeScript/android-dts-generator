/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuffer.d.ts" />
/// <reference path="./java.text.AttributedCharacterIterator.d.ts" />
/// <reference path="./java.text.DateFormatSymbols.d.ts" />
/// <reference path="./java.text.FieldPosition.d.ts" />
/// <reference path="./java.text.ParsePosition.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module java {
	export module text {
		export class SimpleDateFormat {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: java.text.DateFormatSymbols);
			public constructor(param0: string, param1: java.util.Locale);
			public applyLocalizedPattern(param0: string): void;
			public applyPattern(param0: string): void;
			public clone(): java.lang.Object;
			public equals(param0: java.lang.Object): boolean;
			public formatToCharacterIterator(param0: java.lang.Object): java.text.AttributedCharacterIterator;
			public format(param0: java.lang.Object, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: java.util.Date): string;
			public format(param0: java.lang.Object): string;
			public format(param0: java.util.Date, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public get2DigitYearStart(): java.util.Date;
			public getDateFormatSymbols(): java.text.DateFormatSymbols;
			public hashCode(): number;
			public parse(param0: string): java.util.Date;
			public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
			public set2DigitYearStart(param0: java.util.Date): void;
			public setDateFormatSymbols(param0: java.text.DateFormatSymbols): void;
			public toLocalizedPattern(): string;
			public toPattern(): string;
		}
	}
}
