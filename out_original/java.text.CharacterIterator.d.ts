/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module text {
		export class CharacterIterator {
			public clone(): java.lang.Object;
			public current(): string;
			public first(): string;
			public getBeginIndex(): number;
			public getEndIndex(): number;
			public getIndex(): number;
			public last(): string;
			public next(): string;
			public previous(): string;
			public setIndex(param0: number): string;
			public static DONE: string;
		}
	}
}
