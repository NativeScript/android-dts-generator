/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.nio.CharBuffer.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./java.nio.charset.CoderResult.d.ts" />
/// <reference path="./java.nio.charset.CodingErrorAction.d.ts" />

declare module java {
	export module nio {
		export module charset {
			export class CharsetDecoder {
				public constructor();
				public constructor(param0: java.nio.charset.Charset, param1: number, param2: number);
				public averageCharsPerByte(): number;
				public charset(): java.nio.charset.Charset;
				public decode(param0: java.nio.ByteBuffer): java.nio.CharBuffer;
				public decode(param0: java.nio.ByteBuffer, param1: java.nio.CharBuffer, param2: boolean): java.nio.charset.CoderResult;
				public decodeLoop(param0: java.nio.ByteBuffer, param1: java.nio.CharBuffer): java.nio.charset.CoderResult;
				public detectedCharset(): java.nio.charset.Charset;
				public flush(param0: java.nio.CharBuffer): java.nio.charset.CoderResult;
				public implFlush(param0: java.nio.CharBuffer): java.nio.charset.CoderResult;
				public implOnMalformedInput(param0: java.nio.charset.CodingErrorAction): void;
				public implOnUnmappableCharacter(param0: java.nio.charset.CodingErrorAction): void;
				public implReplaceWith(param0: string): void;
				public implReset(): void;
				public isAutoDetecting(): boolean;
				public isCharsetDetected(): boolean;
				public malformedInputAction(): java.nio.charset.CodingErrorAction;
				public maxCharsPerByte(): number;
				public onMalformedInput(param0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetDecoder;
				public onUnmappableCharacter(param0: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetDecoder;
				public replacement(): string;
				public replaceWith(param0: string): java.nio.charset.CharsetDecoder;
				public reset(): java.nio.charset.CharsetDecoder;
				public unmappableCharacterAction(): java.nio.charset.CodingErrorAction;
			}
		}
	}
}
