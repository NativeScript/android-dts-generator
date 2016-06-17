/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module lang {
		export class Byte {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: string);
			public byteValue(): number;
			public compareTo(param0: java.lang.Byte): number;
			public static compare(param0: number, param1: number): number;
			public static decode(param0: string): java.lang.Byte;
			public doubleValue(): number;
			public equals(param0: java.lang.Object): boolean;
			public floatValue(): number;
			public hashCode(): number;
			public intValue(): number;
			public longValue(): number;
			public static parseByte(param0: string): number;
			public static parseByte(param0: string, param1: number): number;
			public shortValue(): number;
			public toString(): string;
			public static toString(param0: number): string;
			public static valueOf(param0: string): java.lang.Byte;
			public static valueOf(param0: string, param1: number): java.lang.Byte;
			public static valueOf(param0: number): java.lang.Byte;
			public static MAX_VALUE: number;
			public static MIN_VALUE: number;
			public static SIZE: number;
			public static TYPE: java.lang.Class;
		}
	}
}
