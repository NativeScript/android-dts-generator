/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module text {
		export class ParsePosition {
			public constructor();
			public constructor(param0: number);
			public equals(param0: java.lang.Object): boolean;
			public getErrorIndex(): number;
			public getIndex(): number;
			public hashCode(): number;
			public setErrorIndex(param0: number): void;
			public setIndex(param0: number): void;
			public toString(): string;
		}
	}
}
