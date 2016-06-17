/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.CharacterIterator.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module java {
	export module text {
		export class BreakIterator {
			public constructor();
			public static getAvailableLocales(): native.Array<java.util.Locale>;
			public static getCharacterInstance(): java.text.BreakIterator;
			public static getCharacterInstance(param0: java.util.Locale): java.text.BreakIterator;
			public static getLineInstance(): java.text.BreakIterator;
			public static getLineInstance(param0: java.util.Locale): java.text.BreakIterator;
			public static getSentenceInstance(): java.text.BreakIterator;
			public static getSentenceInstance(param0: java.util.Locale): java.text.BreakIterator;
			public static getWordInstance(): java.text.BreakIterator;
			public static getWordInstance(param0: java.util.Locale): java.text.BreakIterator;
			public isBoundary(param0: number): boolean;
			public preceding(param0: number): number;
			public setText(param0: string): void;
			public current(): number;
			public first(): number;
			public following(param0: number): number;
			public getText(): java.text.CharacterIterator;
			public last(): number;
			public next(): number;
			public next(param0: number): number;
			public previous(): number;
			public setText(param0: java.text.CharacterIterator): void;
			public clone(): java.lang.Object;
			public static DONE: number;
		}
	}
}
