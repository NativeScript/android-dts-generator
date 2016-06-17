/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module text {
		export class AttributedCharacterIterator {
			public getAllAttributeKeys(): java.util.Set;
			public getAttribute(param0: java.text.AttributedCharacterIterator.Attribute): java.lang.Object;
			public getAttributes(): java.util.Map;
			public getRunLimit(): number;
			public getRunLimit(param0: java.text.AttributedCharacterIterator.Attribute): number;
			public getRunLimit(param0: java.util.Set): number;
			public getRunStart(): number;
			public getRunStart(param0: java.text.AttributedCharacterIterator.Attribute): number;
			public getRunStart(param0: java.util.Set): number;
		}
		export module AttributedCharacterIterator {
			export class Attribute {
				public constructor();
				public constructor(param0: string);
				public equals(param0: java.lang.Object): boolean;
				public getName(): string;
				public hashCode(): number;
				public readResolve(): java.lang.Object;
				public toString(): string;
				public static INPUT_METHOD_SEGMENT: java.text.AttributedCharacterIterator.Attribute;
				public static LANGUAGE: java.text.AttributedCharacterIterator.Attribute;
				public static READING: java.text.AttributedCharacterIterator.Attribute;
			}
		}
	}
}
