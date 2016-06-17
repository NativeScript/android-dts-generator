/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuffer.d.ts" />

declare module java {
	export module lang {
		export class StringBuilder {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: string);
			public constructor(param0: string);
			public append(param0: boolean): java.lang.StringBuilder;
			public append(param0: string): java.lang.StringBuilder;
			public append(param0: number): java.lang.StringBuilder;
			public append(param0: number): java.lang.StringBuilder;
			public append(param0: number): java.lang.StringBuilder;
			public append(param0: number): java.lang.StringBuilder;
			public append(param0: java.lang.Object): java.lang.StringBuilder;
			public append(param0: string): java.lang.StringBuilder;
			public append(param0: java.lang.StringBuffer): java.lang.StringBuilder;
			public append(param0: native.Array<string>): java.lang.StringBuilder;
			public append(param0: native.Array<string>, param1: number, param2: number): java.lang.StringBuilder;
			public append(param0: string): java.lang.StringBuilder;
			public append(param0: string, param1: number, param2: number): java.lang.StringBuilder;
			public appendCodePoint(param0: number): java.lang.StringBuilder;
			public delete(param0: number, param1: number): java.lang.StringBuilder;
			public deleteCharAt(param0: number): java.lang.StringBuilder;
			public insert(param0: number, param1: boolean): java.lang.StringBuilder;
			public insert(param0: number, param1: string): java.lang.StringBuilder;
			public insert(param0: number, param1: number): java.lang.StringBuilder;
			public insert(param0: number, param1: number): java.lang.StringBuilder;
			public insert(param0: number, param1: number): java.lang.StringBuilder;
			public insert(param0: number, param1: number): java.lang.StringBuilder;
			public insert(param0: number, param1: java.lang.Object): java.lang.StringBuilder;
			public insert(param0: number, param1: string): java.lang.StringBuilder;
			public insert(param0: number, param1: native.Array<string>): java.lang.StringBuilder;
			public insert(param0: number, param1: native.Array<string>, param2: number, param3: number): java.lang.StringBuilder;
			public insert(param0: number, param1: string): java.lang.StringBuilder;
			public insert(param0: number, param1: string, param2: number, param3: number): java.lang.StringBuilder;
			public replace(param0: number, param1: number, param2: string): java.lang.StringBuilder;
			public reverse(): java.lang.StringBuilder;
			public toString(): string;
		}
	}
}
