/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module util {
		export class Currency {
			public static getInstance(param0: string): java.util.Currency;
			public static getInstance(param0: java.util.Locale): java.util.Currency;
			public static getAvailableCurrencies(): java.util.Set;
			public getCurrencyCode(): string;
			public getDisplayName(): string;
			public getDisplayName(param0: java.util.Locale): string;
			public getSymbol(): string;
			public getSymbol(param0: java.util.Locale): string;
			public getDefaultFractionDigits(): number;
			public toString(): string;
		}
	}
}
