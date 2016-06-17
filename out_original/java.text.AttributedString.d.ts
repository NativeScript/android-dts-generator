/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.AttributedCharacterIterator.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module text {
		export class AttributedString {
			public constructor();
			public constructor(param0: java.text.AttributedCharacterIterator);
			public constructor(param0: java.text.AttributedCharacterIterator, param1: number, param2: number);
			public constructor(param0: java.text.AttributedCharacterIterator, param1: number, param2: number, param3: native.Array<java.text.AttributedCharacterIterator.Attribute>);
			public constructor(param0: string);
			public constructor(param0: string, param1: java.util.Map);
			public addAttribute(param0: java.text.AttributedCharacterIterator.Attribute, param1: java.lang.Object): void;
			public addAttribute(param0: java.text.AttributedCharacterIterator.Attribute, param1: java.lang.Object, param2: number, param3: number): void;
			public addAttributes(param0: java.util.Map, param1: number, param2: number): void;
			public getIterator(): java.text.AttributedCharacterIterator;
			public getIterator(param0: native.Array<java.text.AttributedCharacterIterator.Attribute>): java.text.AttributedCharacterIterator;
			public getIterator(param0: native.Array<java.text.AttributedCharacterIterator.Attribute>, param1: number, param2: number): java.text.AttributedCharacterIterator;
		}
	}
}
