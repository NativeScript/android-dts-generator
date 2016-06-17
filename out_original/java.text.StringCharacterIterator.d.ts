/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module text {
		export class StringCharacterIterator {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: number);
			public constructor(param0: string, param1: number, param2: number, param3: number);
			public clone(): java.lang.Object;
			public current(): string;
			public equals(param0: java.lang.Object): boolean;
			public first(): string;
			public getBeginIndex(): number;
			public getEndIndex(): number;
			public getIndex(): number;
			public hashCode(): number;
			public last(): string;
			public next(): string;
			public previous(): string;
			public setIndex(param0: number): string;
			public setText(param0: string): void;
		}
	}
}
