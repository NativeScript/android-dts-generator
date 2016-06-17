/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module lang {
		export class StringBuffer {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: string);
			public constructor(param0: string);
			public append(param0: boolean): java.lang.StringBuffer;
			public append(param0: string): java.lang.StringBuffer;
			public append(param0: number): java.lang.StringBuffer;
			public append(param0: number): java.lang.StringBuffer;
			public append(param0: number): java.lang.StringBuffer;
			public append(param0: number): java.lang.StringBuffer;
			public append(param0: java.lang.Object): java.lang.StringBuffer;
			public append(param0: string): java.lang.StringBuffer;
			public append(param0: java.lang.StringBuffer): java.lang.StringBuffer;
			public append(param0: native.Array<string>): java.lang.StringBuffer;
			public append(param0: native.Array<string>, param1: number, param2: number): java.lang.StringBuffer;
			public append(param0: string): java.lang.StringBuffer;
			public append(param0: string, param1: number, param2: number): java.lang.StringBuffer;
			public appendCodePoint(param0: number): java.lang.StringBuffer;
			public charAt(param0: number): string;
			public codePointAt(param0: number): number;
			public codePointBefore(param0: number): number;
			public codePointCount(param0: number, param1: number): number;
			public delete(param0: number, param1: number): java.lang.StringBuffer;
			public deleteCharAt(param0: number): java.lang.StringBuffer;
			public ensureCapacity(param0: number): void;
			public getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;
			public indexOf(param0: string): number;
			public indexOf(param0: string, param1: number): number;
			public insert(param0: number, param1: string): java.lang.StringBuffer;
			public insert(param0: number, param1: boolean): java.lang.StringBuffer;
			public insert(param0: number, param1: number): java.lang.StringBuffer;
			public insert(param0: number, param1: number): java.lang.StringBuffer;
			public insert(param0: number, param1: number): java.lang.StringBuffer;
			public insert(param0: number, param1: number): java.lang.StringBuffer;
			public insert(param0: number, param1: java.lang.Object): java.lang.StringBuffer;
			public insert(param0: number, param1: string): java.lang.StringBuffer;
			public insert(param0: number, param1: native.Array<string>): java.lang.StringBuffer;
			public insert(param0: number, param1: native.Array<string>, param2: number, param3: number): java.lang.StringBuffer;
			public insert(param0: number, param1: string): java.lang.StringBuffer;
			public insert(param0: number, param1: string, param2: number, param3: number): java.lang.StringBuffer;
			public lastIndexOf(param0: string): number;
			public lastIndexOf(param0: string, param1: number): number;
			public offsetByCodePoints(param0: number, param1: number): number;
			public replace(param0: number, param1: number, param2: string): java.lang.StringBuffer;
			public reverse(): java.lang.StringBuffer;
			public setCharAt(param0: number, param1: string): void;
			public setLength(param0: number): void;
			public subSequence(param0: number, param1: number): string;
			public substring(param0: number, param1: number): string;
			public substring(param0: number): string;
			public substring(param0: number, param1: number): string;
			public toString(): string;
			public trimToSize(): void;
		}
	}
}
