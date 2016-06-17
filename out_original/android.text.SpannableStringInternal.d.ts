/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module text {
		export class SpannableStringInternal {
			public length(): number;
			public charAt(param0: number): string;
			public toString(): string;
			public getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;
			public getSpanStart(param0: java.lang.Object): number;
			public getSpanEnd(param0: java.lang.Object): number;
			public getSpanFlags(param0: java.lang.Object): number;
			public getSpans(param0: number, param1: number, param2: java.lang.Class): native.Array<java.lang.Object>;
			public nextSpanTransition(param0: number, param1: number, param2: java.lang.Class): number;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
		}
	}
}
