/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.text.InputFilter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module text {
		export class SpannableStringBuilder {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: number, param2: number);
			public static valueOf(param0: string): android.text.SpannableStringBuilder;
			public charAt(param0: number): string;
			public length(): number;
			public insert(param0: number, param1: string, param2: number, param3: number): android.text.SpannableStringBuilder;
			public insert(param0: number, param1: string): android.text.SpannableStringBuilder;
			public delete(param0: number, param1: number): android.text.SpannableStringBuilder;
			public clear(): void;
			public clearSpans(): void;
			public append(param0: string): android.text.SpannableStringBuilder;
			public append(param0: string, param1: java.lang.Object, param2: number): android.text.SpannableStringBuilder;
			public append(param0: string, param1: number, param2: number): android.text.SpannableStringBuilder;
			public append(param0: string): android.text.SpannableStringBuilder;
			public replace(param0: number, param1: number, param2: string): android.text.SpannableStringBuilder;
			public replace(param0: number, param1: number, param2: string, param3: number, param4: number): android.text.SpannableStringBuilder;
			public setSpan(param0: java.lang.Object, param1: number, param2: number, param3: number): void;
			public removeSpan(param0: java.lang.Object): void;
			public getSpanStart(param0: java.lang.Object): number;
			public getSpanEnd(param0: java.lang.Object): number;
			public getSpanFlags(param0: java.lang.Object): number;
			public getSpans(param0: number, param1: number, param2: java.lang.Class): native.Array<java.lang.Object>;
			public nextSpanTransition(param0: number, param1: number, param2: java.lang.Class): number;
			public subSequence(param0: number, param1: number): string;
			public getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;
			public toString(): string;
			public getTextWatcherDepth(): number;
			public getTextRunCursor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint): number;
			public setFilters(param0: native.Array<android.text.InputFilter>): void;
			public getFilters(): native.Array<android.text.InputFilter>;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
		}
	}
}
