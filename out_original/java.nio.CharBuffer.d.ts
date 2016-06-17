/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteOrder.d.ts" />

declare module java {
	export module nio {
		export class CharBuffer {
			public static allocate(param0: number): java.nio.CharBuffer;
			public static wrap(param0: native.Array<string>): java.nio.CharBuffer;
			public static wrap(param0: native.Array<string>, param1: number, param2: number): java.nio.CharBuffer;
			public static wrap(param0: string): java.nio.CharBuffer;
			public static wrap(param0: string, param1: number, param2: number): java.nio.CharBuffer;
			public array(): java.lang.Object;
			public array(): native.Array<string>;
			public arrayOffset(): number;
			public asReadOnlyBuffer(): java.nio.CharBuffer;
			public charAt(param0: number): string;
			public compact(): java.nio.CharBuffer;
			public compareTo(param0: java.nio.CharBuffer): number;
			public duplicate(): java.nio.CharBuffer;
			public equals(param0: java.lang.Object): boolean;
			public get(): string;
			public get(param0: native.Array<string>): java.nio.CharBuffer;
			public get(param0: native.Array<string>, param1: number, param2: number): java.nio.CharBuffer;
			public get(param0: number): string;
			public hasArray(): boolean;
			public hashCode(): number;
			public isDirect(): boolean;
			public length(): number;
			public order(): java.nio.ByteOrder;
			public put(param0: string): java.nio.CharBuffer;
			public put(param0: native.Array<string>): java.nio.CharBuffer;
			public put(param0: native.Array<string>, param1: number, param2: number): java.nio.CharBuffer;
			public put(param0: java.nio.CharBuffer): java.nio.CharBuffer;
			public put(param0: number, param1: string): java.nio.CharBuffer;
			public put(param0: string): java.nio.CharBuffer;
			public put(param0: string, param1: number, param2: number): java.nio.CharBuffer;
			public slice(): java.nio.CharBuffer;
			public subSequence(param0: number, param1: number): java.nio.CharBuffer;
			public toString(): string;
			public append(param0: string): java.nio.CharBuffer;
			public append(param0: string): java.nio.CharBuffer;
			public append(param0: string, param1: number, param2: number): java.nio.CharBuffer;
			public read(param0: java.nio.CharBuffer): number;
		}
	}
}
