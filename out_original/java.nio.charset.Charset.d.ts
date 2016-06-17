/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.nio.CharBuffer.d.ts" />
/// <reference path="./java.nio.charset.CharsetDecoder.d.ts" />
/// <reference path="./java.nio.charset.CharsetEncoder.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./java.util.SortedMap.d.ts" />

declare module java {
	export module nio {
		export module charset {
			export class Charset {
				public constructor();
				public constructor(param0: string, param1: native.Array<string>);
				public static availableCharsets(): java.util.SortedMap;
				public static forName(param0: string): java.nio.charset.Charset;
				public static isSupported(param0: string): boolean;
				public contains(param0: java.nio.charset.Charset): boolean;
				public newEncoder(): java.nio.charset.CharsetEncoder;
				public newDecoder(): java.nio.charset.CharsetDecoder;
				public name(): string;
				public aliases(): java.util.Set;
				public displayName(): string;
				public displayName(param0: java.util.Locale): string;
				public isRegistered(): boolean;
				public canEncode(): boolean;
				public encode(param0: java.nio.CharBuffer): java.nio.ByteBuffer;
				public encode(param0: string): java.nio.ByteBuffer;
				public decode(param0: java.nio.ByteBuffer): java.nio.CharBuffer;
				public compareTo(param0: java.nio.charset.Charset): number;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public toString(): string;
				public static defaultCharset(): java.nio.charset.Charset;
			}
		}
	}
}
