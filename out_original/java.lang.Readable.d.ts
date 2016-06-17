/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.CharBuffer.d.ts" />

declare module java {
	export module lang {
		export class Readable {
			public read(param0: java.nio.CharBuffer): number;
		}
	}
}
