/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuffer.d.ts" />
/// <reference path="./java.math.RoundingMode.d.ts" />
/// <reference path="./java.text.FieldPosition.d.ts" />
/// <reference path="./java.text.ParsePosition.d.ts" />
/// <reference path="./java.util.Currency.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module java {
	export module text {
		export class NumberFormat {
			public constructor();
			public clone(): java.lang.Object;
			public equals(param0: java.lang.Object): boolean;
			public format(param0: java.lang.Object): string;
			public format(param0: java.lang.Object, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: number): string;
			public format(param0: number, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: number): string;
			public format(param0: number, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: java.lang.Object, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public static getAvailableLocales(): native.Array<java.util.Locale>;
			public getCurrency(): java.util.Currency;
			public static getCurrencyInstance(): java.text.NumberFormat;
			public static getCurrencyInstance(param0: java.util.Locale): java.text.NumberFormat;
			public static getIntegerInstance(): java.text.NumberFormat;
			public static getIntegerInstance(param0: java.util.Locale): java.text.NumberFormat;
			public static getInstance(): java.text.NumberFormat;
			public static getInstance(param0: java.util.Locale): java.text.NumberFormat;
			public getMaximumFractionDigits(): number;
			public getMaximumIntegerDigits(): number;
			public getMinimumFractionDigits(): number;
			public getMinimumIntegerDigits(): number;
			public static getNumberInstance(): java.text.NumberFormat;
			public static getNumberInstance(param0: java.util.Locale): java.text.NumberFormat;
			public static getPercentInstance(): java.text.NumberFormat;
			public static getPercentInstance(param0: java.util.Locale): java.text.NumberFormat;
			public hashCode(): number;
			public isGroupingUsed(): boolean;
			public isParseIntegerOnly(): boolean;
			public parse(param0: string): java.lang.Number;
			public parse(param0: string, param1: java.text.ParsePosition): java.lang.Number;
			public parseObject(param0: string): java.lang.Object;
			public parseObject(param0: string, param1: java.text.ParsePosition): java.lang.Object;
			public setCurrency(param0: java.util.Currency): void;
			public setGroupingUsed(param0: boolean): void;
			public setMaximumFractionDigits(param0: number): void;
			public setMaximumIntegerDigits(param0: number): void;
			public setMinimumFractionDigits(param0: number): void;
			public setMinimumIntegerDigits(param0: number): void;
			public setParseIntegerOnly(param0: boolean): void;
			public getRoundingMode(): java.math.RoundingMode;
			public setRoundingMode(param0: java.math.RoundingMode): void;
			public static FRACTION_FIELD: number;
			public static INTEGER_FIELD: number;
		}
		export module NumberFormat {
			export class Field {
				public constructor();
				public constructor(param0: string);
				public static CURRENCY: java.text.NumberFormat.Field;
				public static DECIMAL_SEPARATOR: java.text.NumberFormat.Field;
				public static EXPONENT: java.text.NumberFormat.Field;
				public static EXPONENT_SIGN: java.text.NumberFormat.Field;
				public static EXPONENT_SYMBOL: java.text.NumberFormat.Field;
				public static FRACTION: java.text.NumberFormat.Field;
				public static GROUPING_SEPARATOR: java.text.NumberFormat.Field;
				public static INTEGER: java.text.NumberFormat.Field;
				public static PERCENT: java.text.NumberFormat.Field;
				public static PERMILLE: java.text.NumberFormat.Field;
				public static SIGN: java.text.NumberFormat.Field;
			}
		}
	}
}
