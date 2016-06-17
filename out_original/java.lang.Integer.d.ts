/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module lang {
		export class Integer {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: string);
			public byteValue(): number;
			public compareTo(param0: java.lang.Integer): number;
			public static compare(param0: number, param1: number): number;
			public static decode(param0: string): java.lang.Integer;
			public doubleValue(): number;
			public equals(param0: java.lang.Object): boolean;
			public floatValue(): number;
			public static getInteger(param0: string): java.lang.Integer;
			public static getInteger(param0: string, param1: number): java.lang.Integer;
			public static getInteger(param0: string, param1: java.lang.Integer): java.lang.Integer;
			public hashCode(): number;
			public intValue(): number;
			public longValue(): number;
			public static parseInt(param0: string): number;
			public static parseInt(param0: string, param1: number): number;
			public shortValue(): number;
			public static toBinaryString(param0: number): string;
			public static toHexString(param0: number): string;
			public static toOctalString(param0: number): string;
			public toString(): string;
			public static toString(param0: number): string;
			public static toString(param0: number, param1: number): string;
			public static valueOf(param0: string): java.lang.Integer;
			public static valueOf(param0: string, param1: number): java.lang.Integer;
			public static highestOneBit(param0: number): number;
			public static lowestOneBit(param0: number): number;
			public static numberOfLeadingZeros(param0: number): number;
			public static numberOfTrailingZeros(param0: number): number;
			public static bitCount(param0: number): number;
			public static rotateLeft(param0: number, param1: number): number;
			public static rotateRight(param0: number, param1: number): number;
			public static reverseBytes(param0: number): number;
			public static reverse(param0: number): number;
			public static signum(param0: number): number;
			public static valueOf(param0: number): java.lang.Integer;
			public static MAX_VALUE: number;
			public static MIN_VALUE: number;
			public static SIZE: number;
			public static TYPE: java.lang.Class;
		}
	}
}
