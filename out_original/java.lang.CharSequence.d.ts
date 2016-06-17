/// <reference path="./_helpers.d.ts" />

declare module java {
	export module lang {
		export class CharSequence {
			public length(): number;
			public charAt(param0: number): string;
			public subSequence(param0: number, param1: number): string;
			public toString(): string;
		}
	}
}
