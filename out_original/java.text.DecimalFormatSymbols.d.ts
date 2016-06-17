/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Currency.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module java {
	export module text {
		export class DecimalFormatSymbols {
			public constructor();
			public constructor(param0: java.util.Locale);
			public static getInstance(): java.text.DecimalFormatSymbols;
			public static getInstance(param0: java.util.Locale): java.text.DecimalFormatSymbols;
			public static getAvailableLocales(): native.Array<java.util.Locale>;
			public clone(): java.lang.Object;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public getCurrency(): java.util.Currency;
			public getInternationalCurrencySymbol(): string;
			public getCurrencySymbol(): string;
			public getDecimalSeparator(): string;
			public getDigit(): string;
			public getGroupingSeparator(): string;
			public getInfinity(): string;
			public getMinusSign(): string;
			public getMonetaryDecimalSeparator(): string;
			public getNaN(): string;
			public getPatternSeparator(): string;
			public getPercent(): string;
			public getPerMill(): string;
			public getZeroDigit(): string;
			public getExponentSeparator(): string;
			public hashCode(): number;
			public setCurrency(param0: java.util.Currency): void;
			public setInternationalCurrencySymbol(param0: string): void;
			public setCurrencySymbol(param0: string): void;
			public setDecimalSeparator(param0: string): void;
			public setDigit(param0: string): void;
			public setGroupingSeparator(param0: string): void;
			public setInfinity(param0: string): void;
			public setMinusSign(param0: string): void;
			public setMonetaryDecimalSeparator(param0: string): void;
			public setNaN(param0: string): void;
			public setPatternSeparator(param0: string): void;
			public setPercent(param0: string): void;
			public setPerMill(param0: string): void;
			public setZeroDigit(param0: string): void;
			public setExponentSeparator(param0: string): void;
		}
	}
}
