/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuffer.d.ts" />
/// <reference path="./java.math.RoundingMode.d.ts" />
/// <reference path="./java.text.AttributedCharacterIterator.d.ts" />
/// <reference path="./java.text.DecimalFormatSymbols.d.ts" />
/// <reference path="./java.text.FieldPosition.d.ts" />
/// <reference path="./java.text.ParsePosition.d.ts" />
/// <reference path="./java.util.Currency.d.ts" />

declare module java {
	export module text {
		export class DecimalFormat {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: java.text.DecimalFormatSymbols);
			public applyLocalizedPattern(param0: string): void;
			public applyPattern(param0: string): void;
			public clone(): java.lang.Object;
			public equals(param0: java.lang.Object): boolean;
			public formatToCharacterIterator(param0: java.lang.Object): java.text.AttributedCharacterIterator;
			public format(param0: number): string;
			public format(param0: number): string;
			public format(param0: number, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: java.lang.Object, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: java.lang.Object): string;
			public format(param0: number, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: number, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: java.lang.Object, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public getDecimalFormatSymbols(): java.text.DecimalFormatSymbols;
			public getCurrency(): java.util.Currency;
			public getGroupingSize(): number;
			public getNegativePrefix(): string;
			public getNegativeSuffix(): string;
			public getPositivePrefix(): string;
			public getPositiveSuffix(): string;
			public hashCode(): number;
			public isDecimalSeparatorAlwaysShown(): boolean;
			public isParseBigDecimal(): boolean;
			public setParseIntegerOnly(param0: boolean): void;
			public isParseIntegerOnly(): boolean;
			public parse(param0: string): java.lang.Number;
			public parse(param0: string, param1: java.text.ParsePosition): java.lang.Number;
			public setDecimalFormatSymbols(param0: java.text.DecimalFormatSymbols): void;
			public setCurrency(param0: java.util.Currency): void;
			public setDecimalSeparatorAlwaysShown(param0: boolean): void;
			public setGroupingSize(param0: number): void;
			public setGroupingUsed(param0: boolean): void;
			public isGroupingUsed(): boolean;
			public setMaximumFractionDigits(param0: number): void;
			public setMaximumIntegerDigits(param0: number): void;
			public setMinimumFractionDigits(param0: number): void;
			public setMinimumIntegerDigits(param0: number): void;
			public getMultiplier(): number;
			public setMultiplier(param0: number): void;
			public setNegativePrefix(param0: string): void;
			public setNegativeSuffix(param0: string): void;
			public setPositivePrefix(param0: string): void;
			public setPositiveSuffix(param0: string): void;
			public setParseBigDecimal(param0: boolean): void;
			public toLocalizedPattern(): string;
			public toPattern(): string;
			public getRoundingMode(): java.math.RoundingMode;
			public setRoundingMode(param0: java.math.RoundingMode): void;
			public toString(): string;
		}
	}
}
