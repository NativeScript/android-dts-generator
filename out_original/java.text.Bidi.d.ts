/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.AttributedCharacterIterator.d.ts" />

declare module java {
	export module text {
		export class Bidi {
			public constructor();
			public constructor(param0: java.text.AttributedCharacterIterator);
			public constructor(param0: native.Array<string>, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: number);
			public constructor(param0: string, param1: number);
			public baseIsLeftToRight(): boolean;
			public createLineBidi(param0: number, param1: number): java.text.Bidi;
			public getBaseLevel(): number;
			public getLength(): number;
			public getLevelAt(param0: number): number;
			public getRunCount(): number;
			public getRunLevel(param0: number): number;
			public getRunLimit(param0: number): number;
			public getRunStart(param0: number): number;
			public isLeftToRight(): boolean;
			public isMixed(): boolean;
			public isRightToLeft(): boolean;
			public static reorderVisually(param0: native.Array<number>, param1: number, param2: native.Array<java.lang.Object>, param3: number, param4: number): void;
			public static requiresBidi(param0: native.Array<string>, param1: number, param2: number): boolean;
			public toString(): string;
			public static DIRECTION_DEFAULT_LEFT_TO_RIGHT: number;
			public static DIRECTION_DEFAULT_RIGHT_TO_LEFT: number;
			public static DIRECTION_LEFT_TO_RIGHT: number;
			public static DIRECTION_RIGHT_TO_LEFT: number;
		}
	}
}
