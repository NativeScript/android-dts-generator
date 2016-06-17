/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module lang {
		export class Double {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: string);
			public compareTo(param0: java.lang.Double): number;
			public byteValue(): number;
			public static doubleToLongBits(param0: number): number;
			public static doubleToRawLongBits(param0: number): number;
			public doubleValue(): number;
			public equals(param0: java.lang.Object): boolean;
			public floatValue(): number;
			public hashCode(): number;
			public intValue(): number;
			public isInfinite(): boolean;
			public static isInfinite(param0: number): boolean;
			public isNaN(): boolean;
			public static isNaN(param0: number): boolean;
			public static longBitsToDouble(param0: number): number;
			public longValue(): number;
			public static parseDouble(param0: string): number;
			public shortValue(): number;
			public toString(): string;
			public static toString(param0: number): string;
			public static valueOf(param0: string): java.lang.Double;
			public static compare(param0: number, param1: number): number;
			public static valueOf(param0: number): java.lang.Double;
			public static toHexString(param0: number): string;
			public static MAX_EXPONENT: number;
			public static MAX_VALUE: number;
			public static MIN_EXPONENT: number;
			public static MIN_NORMAL: number;
			public static MIN_VALUE: number;
			public static NEGATIVE_INFINITY: number;
			public static NaN: number;
			public static POSITIVE_INFINITY: number;
			public static SIZE: number;
			public static TYPE: java.lang.Class;
		}
	}
}
