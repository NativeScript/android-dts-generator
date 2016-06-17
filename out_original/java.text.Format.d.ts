/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuffer.d.ts" />
/// <reference path="./java.text.AttributedCharacterIterator.d.ts" />
/// <reference path="./java.text.FieldPosition.d.ts" />
/// <reference path="./java.text.ParsePosition.d.ts" />

declare module java {
	export module text {
		export class Format {
			public constructor();
			public clone(): java.lang.Object;
			public format(param0: java.lang.Object): string;
			public format(param0: java.lang.Object, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public formatToCharacterIterator(param0: java.lang.Object): java.text.AttributedCharacterIterator;
			public parseObject(param0: string): java.lang.Object;
			public parseObject(param0: string, param1: java.text.ParsePosition): java.lang.Object;
		}
		export module Format {
			export class Field {
				public constructor();
				public constructor(param0: string);
			}
		}
	}
}
