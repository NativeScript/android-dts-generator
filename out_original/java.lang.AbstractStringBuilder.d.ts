/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module lang {
		export class AbstractStringBuilder {
			public capacity(): number;
			public charAt(param0: number): string;
			public ensureCapacity(param0: number): void;
			public getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;
			public length(): number;
			public setCharAt(param0: number, param1: string): void;
			public setLength(param0: number): void;
			public substring(param0: number): string;
			public substring(param0: number, param1: number): string;
			public toString(): string;
			public subSequence(param0: number, param1: number): string;
			public indexOf(param0: string): number;
			public indexOf(param0: string, param1: number): number;
			public lastIndexOf(param0: string): number;
			public lastIndexOf(param0: string, param1: number): number;
			public trimToSize(): void;
			public codePointAt(param0: number): number;
			public codePointBefore(param0: number): number;
			public codePointCount(param0: number, param1: number): number;
			public offsetByCodePoints(param0: number, param1: number): number;
		}
	}
}
