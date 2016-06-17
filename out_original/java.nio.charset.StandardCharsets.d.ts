/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />

declare module java {
	export module nio {
		export module charset {
			export class StandardCharsets {
				public static ISO_8859_1: java.nio.charset.Charset;
				public static US_ASCII: java.nio.charset.Charset;
				public static UTF_16: java.nio.charset.Charset;
				public static UTF_16BE: java.nio.charset.Charset;
				public static UTF_16LE: java.nio.charset.Charset;
				public static UTF_8: java.nio.charset.Charset;
			}
		}
	}
}
