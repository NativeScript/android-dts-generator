/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />

declare module android {
	export module inputmethodservice {
		export class ExtractEditText {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public startInternalChanges(): void;
			public finishInternalChanges(): void;
			public setExtractedText(param0: android.view.inputmethod.ExtractedText): void;
			public onSelectionChanged(param0: number, param1: number): void;
			public performClick(): boolean;
			public onTextContextMenuItem(param0: number): boolean;
			public isInputMethodTarget(): boolean;
			public hasVerticalScrollBar(): boolean;
			public hasWindowFocus(): boolean;
			public isFocused(): boolean;
			public hasFocus(): boolean;
		}
	}
}
