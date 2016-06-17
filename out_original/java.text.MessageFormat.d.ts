/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuffer.d.ts" />
/// <reference path="./java.text.AttributedCharacterIterator.d.ts" />
/// <reference path="./java.text.FieldPosition.d.ts" />
/// <reference path="./java.text.Format.d.ts" />
/// <reference path="./java.text.ParsePosition.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module java {
	export module text {
		export class MessageFormat {
			public constructor();
			public constructor(param0: string, param1: java.util.Locale);
			public constructor(param0: string);
			public applyPattern(param0: string): void;
			public clone(): java.lang.Object;
			public equals(param0: java.lang.Object): boolean;
			public formatToCharacterIterator(param0: java.lang.Object): java.text.AttributedCharacterIterator;
			public format(param0: java.lang.Object): string;
			public format(param0: java.lang.Object, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: native.Array<java.lang.Object>, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: java.lang.Object, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public static format(param0: string, param1: native.Array<java.lang.Object>): string;
			public getFormats(): native.Array<java.text.Format>;
			public getFormatsByArgumentIndex(): native.Array<java.text.Format>;
			public setFormatByArgumentIndex(param0: number, param1: java.text.Format): void;
			public setFormatsByArgumentIndex(param0: native.Array<java.text.Format>): void;
			public getLocale(): java.util.Locale;
			public hashCode(): number;
			public parse(param0: string): native.Array<java.lang.Object>;
			public parse(param0: string, param1: java.text.ParsePosition): native.Array<java.lang.Object>;
			public parseObject(param0: string): java.lang.Object;
			public parseObject(param0: string, param1: java.text.ParsePosition): java.lang.Object;
			public setFormat(param0: number, param1: java.text.Format): void;
			public setFormats(param0: native.Array<java.text.Format>): void;
			public setLocale(param0: java.util.Locale): void;
			public toPattern(): string;
		}
		export module MessageFormat {
			export class Field {
				public constructor();
				public constructor(param0: string);
				public static ARGUMENT: java.text.MessageFormat.Field;
			}
		}
	}
}
