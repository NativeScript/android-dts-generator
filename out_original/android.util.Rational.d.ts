/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module util {
		export class Rational {
			public constructor();
			public constructor(param0: number, param1: number);
			public getNumerator(): number;
			public getDenominator(): number;
			public isNaN(): boolean;
			public isInfinite(): boolean;
			public isFinite(): boolean;
			public isZero(): boolean;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public hashCode(): number;
			public doubleValue(): number;
			public floatValue(): number;
			public intValue(): number;
			public longValue(): number;
			public shortValue(): number;
			public compareTo(param0: android.util.Rational): number;
			public static parseRational(param0: string): android.util.Rational;
			public static NEGATIVE_INFINITY: android.util.Rational;
			public static NaN: android.util.Rational;
			public static POSITIVE_INFINITY: android.util.Rational;
			public static ZERO: android.util.Rational;
		}
	}
}
