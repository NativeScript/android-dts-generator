/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CorrectionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedTextRequest.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module view {
		export module inputmethod {
			export class BaseInputConnection {
				public constructor();
				public constructor(param0: android.view.View, param1: boolean);
				public static removeComposingSpans(param0: android.text.Spannable): void;
				public static setComposingSpans(param0: android.text.Spannable): void;
				public static getComposingSpanStart(param0: android.text.Spannable): number;
				public static getComposingSpanEnd(param0: android.text.Spannable): number;
				public getEditable(): android.text.Editable;
				public beginBatchEdit(): boolean;
				public endBatchEdit(): boolean;
				public clearMetaKeyStates(param0: number): boolean;
				public commitCompletion(param0: android.view.inputmethod.CompletionInfo): boolean;
				public commitCorrection(param0: android.view.inputmethod.CorrectionInfo): boolean;
				public commitText(param0: string, param1: number): boolean;
				public deleteSurroundingText(param0: number, param1: number): boolean;
				public finishComposingText(): boolean;
				public getCursorCapsMode(param0: number): number;
				public getExtractedText(param0: android.view.inputmethod.ExtractedTextRequest, param1: number): android.view.inputmethod.ExtractedText;
				public getTextBeforeCursor(param0: number, param1: number): string;
				public getSelectedText(param0: number): string;
				public getTextAfterCursor(param0: number, param1: number): string;
				public performEditorAction(param0: number): boolean;
				public performContextMenuAction(param0: number): boolean;
				public performPrivateCommand(param0: string, param1: android.os.Bundle): boolean;
				public requestCursorUpdates(param0: number): boolean;
				public setComposingText(param0: string, param1: number): boolean;
				public setComposingRegion(param0: number, param1: number): boolean;
				public setSelection(param0: number, param1: number): boolean;
				public sendKeyEvent(param0: android.view.KeyEvent): boolean;
				public reportFullscreenMode(param0: boolean): boolean;
			}
		}
	}
}
