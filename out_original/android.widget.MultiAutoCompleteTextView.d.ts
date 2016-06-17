/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module widget {
		export class MultiAutoCompleteTextView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setTokenizer(param0: android.widget.MultiAutoCompleteTextView.Tokenizer): void;
			public performFiltering(param0: string, param1: number): void;
			public enoughToFilter(): boolean;
			public performValidation(): void;
			public performFiltering(param0: string, param1: number, param2: number, param3: number): void;
			public replaceText(param0: string): void;
			public getAccessibilityClassName(): string;
		}
		export module MultiAutoCompleteTextView {
			export class CommaTokenizer {
				public constructor();
				public findTokenStart(param0: string, param1: number): number;
				public findTokenEnd(param0: string, param1: number): number;
				public terminateToken(param0: string): string;
			}
			export class Tokenizer {
				public findTokenStart(param0: string, param1: number): number;
				public findTokenEnd(param0: string, param1: number): number;
				public terminateToken(param0: string): string;
			}
		}
	}
}
