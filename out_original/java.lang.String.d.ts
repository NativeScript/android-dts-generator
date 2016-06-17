/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.StringBuffer.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module java {
	export module lang {
		export class String {
			public constructor();
			public constructor(param0: native.Array<number>);
			public constructor(param0: native.Array<number>, param1: number);
			public constructor(param0: native.Array<number>, param1: number, param2: number);
			public constructor(param0: native.Array<number>, param1: number, param2: number, param3: number);
			public constructor(param0: native.Array<number>, param1: number, param2: number, param3: string);
			public constructor(param0: native.Array<number>, param1: string);
			public constructor(param0: native.Array<number>, param1: number, param2: number, param3: java.nio.charset.Charset);
			public constructor(param0: native.Array<number>, param1: java.nio.charset.Charset);
			public constructor(param0: native.Array<string>);
			public constructor(param0: native.Array<string>, param1: number, param2: number);
			public constructor(param0: string);
			public constructor(param0: java.lang.StringBuffer);
			public constructor(param0: native.Array<number>, param1: number, param2: number);
			public constructor(param0: java.lang.StringBuilder);
			public charAt(param0: number): string;
			public compareTo(param0: string): number;
			public compareToIgnoreCase(param0: string): number;
			public concat(param0: string): string;
			public static copyValueOf(param0: native.Array<string>): string;
			public static copyValueOf(param0: native.Array<string>, param1: number, param2: number): string;
			public endsWith(param0: string): boolean;
			public equals(param0: java.lang.Object): boolean;
			public equalsIgnoreCase(param0: string): boolean;
			public getBytes(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public getBytes(): native.Array<number>;
			public getBytes(param0: string): native.Array<number>;
			public getBytes(param0: java.nio.charset.Charset): native.Array<number>;
			public getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;
			public hashCode(): number;
			public indexOf(param0: number): number;
			public indexOf(param0: number, param1: number): number;
			public indexOf(param0: string): number;
			public indexOf(param0: string, param1: number): number;
			public intern(): string;
			public isEmpty(): boolean;
			public lastIndexOf(param0: number): number;
			public lastIndexOf(param0: number, param1: number): number;
			public lastIndexOf(param0: string): number;
			public lastIndexOf(param0: string, param1: number): number;
			public length(): number;
			public regionMatches(param0: number, param1: string, param2: number, param3: number): boolean;
			public regionMatches(param0: boolean, param1: number, param2: string, param3: number, param4: number): boolean;
			public replace(param0: string, param1: string): string;
			public replace(param0: string, param1: string): string;
			public startsWith(param0: string): boolean;
			public startsWith(param0: string, param1: number): boolean;
			public substring(param0: number): string;
			public substring(param0: number, param1: number): string;
			public toCharArray(): native.Array<string>;
			public toLowerCase(): string;
			public toLowerCase(param0: java.util.Locale): string;
			public toString(): string;
			public toUpperCase(): string;
			public toUpperCase(param0: java.util.Locale): string;
			public trim(): string;
			public static valueOf(param0: native.Array<string>): string;
			public static valueOf(param0: native.Array<string>, param1: number, param2: number): string;
			public static valueOf(param0: string): string;
			public static valueOf(param0: number): string;
			public static valueOf(param0: number): string;
			public static valueOf(param0: number): string;
			public static valueOf(param0: number): string;
			public static valueOf(param0: java.lang.Object): string;
			public static valueOf(param0: boolean): string;
			public contentEquals(param0: java.lang.StringBuffer): boolean;
			public contentEquals(param0: string): boolean;
			public matches(param0: string): boolean;
			public replaceAll(param0: string, param1: string): string;
			public replaceFirst(param0: string, param1: string): string;
			public split(param0: string): native.Array<string>;
			public split(param0: string, param1: number): native.Array<string>;
			public subSequence(param0: number, param1: number): string;
			public codePointAt(param0: number): number;
			public codePointBefore(param0: number): number;
			public codePointCount(param0: number, param1: number): number;
			public contains(param0: string): boolean;
			public offsetByCodePoints(param0: number, param1: number): number;
			public static format(param0: string, param1: native.Array<java.lang.Object>): string;
			public static format(param0: java.util.Locale, param1: string, param2: native.Array<java.lang.Object>): string;
			public static CASE_INSENSITIVE_ORDER: java.util.Comparator;
		}
	}
}
