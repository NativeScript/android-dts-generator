/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.CharacterIterator.d.ts" />

declare module java {
	export module text {
		export class CollationElementIterator {
			public getMaxExpansion(param0: number): number;
			public getOffset(): number;
			public next(): number;
			public previous(): number;
			public static primaryOrder(param0: number): number;
			public reset(): void;
			public static secondaryOrder(param0: number): number;
			public setOffset(param0: number): void;
			public setText(param0: java.text.CharacterIterator): void;
			public setText(param0: string): void;
			public static tertiaryOrder(param0: number): number;
			public static NULLORDER: number;
		}
	}
}
