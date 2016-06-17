/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.text.TextWatcher.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module widget {
		export class DialerFilter {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public onFinishInflate(): void;
			public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;
			public isQwertyKeyboard(): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public getMode(): number;
			public setMode(param0: number): void;
			public getLetters(): string;
			public getDigits(): string;
			public getFilterText(): string;
			public append(param0: string): void;
			public clearText(): void;
			public setLettersWatcher(param0: android.text.TextWatcher): void;
			public setDigitsWatcher(param0: android.text.TextWatcher): void;
			public setFilterWatcher(param0: android.text.TextWatcher): void;
			public removeFilterWatcher(param0: android.text.TextWatcher): void;
			public onModeChange(param0: number, param1: number): void;
			public static DIGITS_AND_LETTERS: number;
			public static DIGITS_AND_LETTERS_NO_DIGITS: number;
			public static DIGITS_AND_LETTERS_NO_LETTERS: number;
			public static DIGITS_ONLY: number;
			public static LETTERS_ONLY: number;
		}
	}
}
