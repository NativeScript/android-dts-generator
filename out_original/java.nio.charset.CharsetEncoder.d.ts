/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.nio.CharBuffer.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./java.nio.charset.CoderResult.d.ts" />
/// <reference path="./java.nio.charset.CodingErrorAction.d.ts" />

declare module java {
	export module nio {
		export module charset {
			export class CharsetEncoder {
				public constructor();
				public constructor(param0: java.nio.charset.Charset, param1: number, param2: number);
				public constructor(param0: java.nio.charset.Charset, param1: number, param2: number, param3: native.Array<number>);
				public averageBytesPerChar(): number;
				public canEncode(param0: string): boolean;
				public canEncode(param0: string): boolean;
				public charset(): java.nio.charset.Charset;
				public encode(param0: java.nio.CharBuffer): java.nio.ByteBuffer;
				public encode(param0: java.nio.CharBuffer, param1: java.nio.ByteBuffer, param2: boolean): java.nio.charset.CoderResult;
				public encodeLoop(param0: java.nio.CharBuffer, param1: java.nio.ByteBuffer): java.nio.charset.CoderResult;
				public flush(param0: java.nio.ByteBuffer): java.nio.charset.CoderResult;
				public implFlush(param0: java.nio.ByteBuffer): java.nio.charset.CoderResult;
				public implOnMalformedInput(param0: java.nio.charset.CodingErrorAction): void;
				public implOnUnmappableCharacter(param0: java.nio.charset.CodingErrorAction): void;
				public implReplaceWith(param0: native.Array<number>): void;
				public implReset(): void;
				public isLegalReplacement(param0: native.Array<number>): boolean;
				public malformedInputAction(): java.nio.charset.CodingErrorAction;
				public maxBytesPerChar(): number;
				public onMalformedInput(param0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetEncoder;
				public onUnmappableCharacter(param0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetEncoder;
				public replacement(): native.Array<number>;
				public replaceWith(param0: native.Array<number>): java.nio.charset.CharsetEncoder;
				public reset(): java.nio.charset.CharsetEncoder;
				public unmappableCharacterAction(): java.nio.charset.CodingErrorAction;
			}
		}
	}
}
